import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Apertura } from 'src/apertura/entities/apertura.entity';
import { AuditService } from 'src/audit/audit.service';
import { Inventario } from 'src/inventario/entities/inventario.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { Movimiento } from './entities/movimiento.entity';

@Injectable()
export class MovimientoService {
  constructor(private readonly auditService: AuditService) {}
  async create(createMovimientoDto: CreateMovimientoDto, user) {
    const apertura = await Apertura.findOne(createMovimientoDto.apertura);
    if (!apertura) {
      throw new BadRequestException({
        message: 'Apertura y cierre de caja no encontrada',
      });
    }
    const movimiento = Movimiento.create(createMovimientoDto);
    const movimientoSaved = await movimiento.save();
    await apertura.calculateMontoActual();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'MOVIMIENTOCAJA',
      previusData: {},
      actualData: movimientoSaved,
      user: user,
    });
  }

  async createWhitOutDto(body, user) {
    const apertura = await Apertura.findOne(body.apertura);
    if (!apertura) {
      throw new BadRequestException({
        message: 'Apertura y cierre de caja no encontrada',
      });
    }
    if (!body.tipo) {
      if (apertura.montoActual < body.cantidad) {
        throw new BadRequestException({
          message: 'La cantidad ingresada exede a la cantidad actual en caja',
        });
      }
    }
    const movimiento = new Movimiento();
    movimiento.apertura = body.apertura;
    movimiento.cantidad = body.cantidad;
    movimiento.concepto = body.concepto;
    movimiento.tipo = body.tipo;
    const movimientoSaved = await movimiento.save();
    await apertura.calculateMontoActual();
    await apertura.save();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'MOVIMIENTOCAJA',
      previusData: {},
      actualData: movimientoSaved,
      user: user,
    });
    return movimiento;
  }

  async findAllByAperturaId(options: IPaginationOptions, aperturaId: number) {
    const movimientos = Movimiento.createQueryBuilder('movimiento').where(
      'movimiento.apertura = :aperturaId',
      { aperturaId },
    );
    return await paginate<Movimiento>(movimientos, options);
  }

  findByAperturaId(aperturaId: number) {
    const movimientos = Movimiento.createQueryBuilder('movimiento')
      .where('movimiento.apertura = :aperturaId', { aperturaId })
      .getMany();
    return movimientos;
  }

  async getMovimientoByDate({ from = '', to = '' }) {
    const movimientos = await Movimiento.createQueryBuilder('movimiento')
      .where('movimiento.createdAt >= :from', { from })
      .andWhere('movimiento.createdAt <= :to', { to })
      .getMany();
    return movimientos;
  }

  async update(id: number, updateMovimientoDto: UpdateMovimientoDto, user) {
    const movimiento = await Movimiento.createQueryBuilder('movimiento')
      .leftJoinAndSelect('movimiento.apertura', 'apertura')
      .where('movimiento.id = :id', { id })
      .getOne();
    const prevMovimiento = { ...movimiento };
    if (!movimiento)
      throw new BadRequestException({
        message: 'Movimiento de caja no encontrado',
      });
    const apertura = await Apertura.findOne(movimiento.apertura.id);
    if (!apertura) {
      throw new BadRequestException({
        message: 'Apertura y cierre de caja no encontrada',
      });
    }
    if (!updateMovimientoDto.tipo) {
      if (
        +apertura.montoActual <
        +updateMovimientoDto.cantidad - +movimiento.cantidad
      ) {
        throw new BadRequestException({
          message: 'La cantidad ingresada exede a la cantidad actual en caja',
        });
      }
    }
    Movimiento.merge(movimiento, updateMovimientoDto);
    const movimientoSaved = await movimiento.save();
    await apertura.calculateMontoActual();
    await apertura.save();
    this.auditService.audit({
      action: `Se Edito el registro ${movimiento.id}`,
      auditTable: 'MOVIMIENTOCAJA',
      previusData: prevMovimiento,
      actualData: movimientoSaved,
      user: user,
    });
    return movimiento;
  }

  async remove(id: number) {
    const movimiento = await Movimiento.createQueryBuilder('movimiento')
      .leftJoinAndSelect('movimiento.apertura', 'apertura')
      .where('movimiento.id = :id', { id })
      .getOne();
    if (!movimiento)
      throw new BadRequestException({ message: 'Movimiento no encontrado' });
    const apertura = await Apertura.findOne(movimiento.apertura.id);
    if (!apertura)
      throw new BadRequestException({ message: 'Apertura no encontrada' });
    await movimiento.remove();
    await apertura.calculateMontoActual();
    await apertura.save();
    return { message: 'Movimiento eliminado exitosamente' };
  }
}
