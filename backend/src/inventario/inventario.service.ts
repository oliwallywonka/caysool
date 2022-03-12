import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AperturaService } from 'src/apertura/apertura.service';
import { AuditService } from 'src/audit/audit.service';
import { MovimientoService } from 'src/movimiento/movimiento.service';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';
@Injectable()
export class InventarioService {
  constructor(
    private readonly auditService: AuditService,
    private readonly movimientoService: MovimientoService,
    private readonly aperturaService: AperturaService,
  ) {}

  async create(createInventarioDto: CreateInventarioDto, user) {
    if (createInventarioDto.prestamo) {
      const prestamo = await Prestamo.findOne(createInventarioDto.prestamo.id);
      if (!prestamo)
        throw new BadRequestException({ message: 'Prestamo no encontrado' });
      const apertura = await this.aperturaService.getLastApertura();
      const movimiento = await this.movimientoService.createWhitOutDto(
        {
          tipo: false,
          concepto: `Salida por el prestamo Nº ${prestamo.id}`,
          cantidad: createInventarioDto.costoPrestamo,
          apertura: apertura.id,
        },
        user,
      );
      createInventarioDto.movimiento = movimiento;
      const inventario = Inventario.create(createInventarioDto);
      const inventarioSaved = await inventario.save();
      await prestamo.calculateCostoPrestamo();
      await prestamo.calculateCostoTotal();
      await prestamo.calculateCantidadInventario();
      await prestamo.save();
      this.auditService.audit({
        action: 'Se creo un nuevo registro',
        auditTable: 'INVENTARIO',
        previusData: {},
        actualData: {
          ...inventarioSaved,
          prestamo: createInventarioDto.prestamo.id,
          movimiento: inventarioSaved.movimiento.id,
        },
        user: user,
      });
      return inventarioSaved;
    } else {
      const apertura = await this.aperturaService.getLastApertura();
      const movimiento = await this.movimientoService.createWhitOutDto(
        {
          tipo: false,
          concepto: `Salida por compra del inventario`,
          cantidad: createInventarioDto.costoCompra,
          apertura: apertura.id,
        },
        user,
      );
      createInventarioDto.movimiento = movimiento;
      const inventario = Inventario.create(createInventarioDto);
      const inventarioSaved = await inventario.save();
      this.auditService.audit({
        action: 'Se creo un nuevo registro',
        auditTable: 'INVENTARIO',
        previusData: {},
        actualData: {
          ...inventarioSaved,
        },
        user: user,
      });
      return inventarioSaved;
    }
  }

  async findAll(
    options: IPaginationOptions,
    clientCi: string,
    estadoInv: string,
  ) {
    const inventario = Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .where(`client.ci LIKE '%${clientCi ? clientCi : ''}%'`)
      .andWhere(`inventario.estado LIKE '%${estadoInv ? estadoInv : ''}%'`)
      .orderBy('inventario.id', 'DESC');
    return await paginate<Inventario>(inventario, options);
  }

  async findInventarioByEstado(
    options: IPaginationOptions,
    estadoInv = 'COMPRADO',
  ) {
    const inventario = Inventario.createQueryBuilder('inventario')
      .where('inventario.estado = :estadoInv', { estadoInv: estadoInv })
      .andWhere('inventario.prestamo is null')
      .orderBy('inventario.id', 'DESC');
    return await paginate<Inventario>(inventario, options);
  }

  async findOne(id: number) {
    const inventario = await Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.pictures', 'pictures')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .where('inventario.id = :id', { id })
      .getOne();
    return inventario;
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto, user) {
    const inventario = await Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .leftJoinAndSelect('inventario.movimiento', 'movimiento')
      .where('inventario.id = :id', { id })
      .getOne();
    const prevInventario = { ...inventario };
    if (!inventario)
      throw new BadRequestException({ message: 'Inventario no encontrado' });
    if (
      +inventario.costoPrestamo !== +updateInventarioDto.costoPrestamo ||
      +inventario.costoCompra !== +updateInventarioDto.costoCompra
    ) {
      const movimientoCantidad =
        inventario.estado === 'EMPENADO'
          ? updateInventarioDto.costoPrestamo
          : inventario.estado === 'COMPRADO'
          ? updateInventarioDto.costoCompra
          : 0;
      await this.movimientoService.update(
        inventario.movimiento.id,
        {
          tipo: false,
          cantidad: movimientoCantidad,
        },
        user,
      );
    }
    Inventario.merge(inventario, updateInventarioDto);
    await inventario.save();
    if (inventario.prestamo) {
      const prestamo = await Prestamo.findOne(inventario.prestamo.id);
      if (!prestamo)
        throw new BadRequestException({ message: 'Prestamo no encontrado' });
      await prestamo.calculateCostoPrestamo();
      await prestamo.calculateCostoTotal();
      await prestamo.save();
    }
    this.auditService.audit({
      action: `Se edito el registro ${id}`,
      auditTable: 'INVENTARIO',
      previusData: {
        ...prevInventario,
        prestamo: prevInventario.prestamo ? prevInventario.prestamo.id : null,
      },
      actualData: updateInventarioDto,
      user: user,
    });
    return { message: 'Inventario actualizado correctamente' };
  }

  async ventaInventario(
    idInventario: number,
    updateInventarioDto: UpdateInventarioDto,
    user,
  ) {
    const inventario = await Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .where('inventario.id = :id', { id: idInventario })
      .getOne();
    const prevInventario = { ...inventario };
    if (!inventario)
      throw new BadRequestException({ message: 'Inventario no encontrado' });
    Inventario.merge(inventario, updateInventarioDto);

    await inventario.save();
    const apertura = await this.aperturaService.getLastApertura();
    await this.movimientoService.createWhitOutDto(
      {
        tipo: true,
        concepto: `Ingreso por Venta de inventario Nº ${inventario.id}`,
        cantidad: updateInventarioDto.precioVenta,
        apertura: apertura.id,
      },
      user,
    );
    if (inventario.prestamo) {
      const prestamo = await Prestamo.findOne(inventario.prestamo.id);
      if (!prestamo)
        throw new BadRequestException({ message: 'Prestamo no encontrado' });
      await prestamo.calculateCostoPrestamo();
      await prestamo.calculateCostoTotal();
      await prestamo.save();
    }

    this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'INVENTARIO',
      previusData: { ...prevInventario },
      actualData: {
        ...inventario,
      },
      user: user,
    });
    return inventario;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }

  async getByClientId(clientId: number) {
    const inventario = await Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .select('inventario')
      .where('client.id = :clientId', { clientId })
      .orderBy('client.id', 'DESC')
      .getMany();
    return inventario;
  }

  async getInventarioByDate({ from = '', to = '' }) {
    const inventario = await Inventario.createQueryBuilder('inventario')
      .where('inventario.createdAt >= :from', { from })
      .andWhere('inventario.createdAt <= :to', { to })
      .andWhere('inventario.estado = :estado', { estado: 'VENDIDO' })
      .getMany();
    return inventario;
  }
}
