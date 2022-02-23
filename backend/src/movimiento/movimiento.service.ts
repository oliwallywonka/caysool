import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Apertura } from 'src/apertura/entities/apertura.entity';
import { AuditService } from 'src/audit/audit.service';
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
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'MOVIMIENTOCAJA',
      previusData: {},
      actualData: movimientoSaved,
      user: user,
    });
  }

  async createWhitOutDto(body, user) {
    const movimiento = new Movimiento();
    movimiento.apertura = body.apertura;
    movimiento.cantidad = body.cantidad;
    movimiento.concepto = body.concepto;
    const movimientoSaved = await movimiento.save();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'MOVIMIENTOCAJA',
      previusData: {},
      actualData: movimientoSaved,
      user: user,
    });
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

  update(id: number, updateMovimientoDto: UpdateMovimientoDto) {
    return `This action updates a #${id} movimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} movimiento`;
  }
}
