import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';
@Injectable()
export class InventarioService {
  constructor(private readonly auditService: AuditService) {}

  async create(createInventarioDto: CreateInventarioDto, user) {
    const prestamo = await Prestamo.findOne(createInventarioDto.prestamo.id);
    if (!prestamo)
      throw new BadRequestException({ message: 'Prestamo no encontrado' });
    const inventario = Inventario.create(createInventarioDto);
    const inventarioSaved = await inventario.save();
    await prestamo.calculateCostoPrestamo();
    await prestamo.calculateCostoTotal();
    await prestamo.save();
    this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'INVENTARIO',
      previusData: {},
      actualData: {
        ...inventarioSaved,
        prestamo: createInventarioDto.prestamo.id,
      },
      user: user,
    });
    return inventarioSaved;
  }

  async findAll(
    options: IPaginationOptions,
    clientCi: string,
    estadoInventario: string,
  ) {
    const inventario = Inventario.createQueryBuilder('inventario')
      .leftJoinAndSelect('inventario.prestamo', 'prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .where('inventario.estado = :estadoInventario', { estadoInventario })
      .andWhere(`client.ci LIKE'%${clientCi ? clientCi : ''}%'`)
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
    const inventario = await Inventario.findOne({ id });
    const prevInventario = { ...inventario };
    if (!inventario)
      throw new BadRequestException({ message: 'Inventario no encontrado' });
    const prestamo = await Prestamo.findOne(inventario.prestamo);
    if (!prestamo)
      throw new BadRequestException({ message: 'Prestamo no encontrado' });
    Inventario.merge(inventario, updateInventarioDto);
    await inventario.save();
    if (updateInventarioDto.costoPrestamo) {
      await prestamo.calculateCostoPrestamo();
      await prestamo.calculateCostoTotal();
      await prestamo.save();
    }
    this.auditService.audit({
      action: `Se edito el registro ${id}`,
      auditTable: 'Clientes',
      previusData: prevInventario,
      actualData: updateInventarioDto,
      user: user,
    });
    return { message: 'Inventario actualizado correctamente' };
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
