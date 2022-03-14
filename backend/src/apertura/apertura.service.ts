import { BadRequestException, Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { Caja } from 'src/caja/entities/caja.entity';
import { CreateMovimientoDto } from 'src/movimiento/dto/create-movimiento.dto';
import { MovimientoService } from 'src/movimiento/movimiento.service';
import { CreateAperturaDto } from './dto/create-apertura.dto';
import { UpdateAperturaDto } from './dto/update-apertura.dto';
import { Apertura } from './entities/apertura.entity';

@Injectable()
export class AperturaService {
  constructor(
    private readonly auditService: AuditService,
    private readonly movimientoService: MovimientoService,
  ) {}

  async create(createAperturaDto: CreateAperturaDto, user) {
    const caja = await Caja.findOne(1);
    if (!caja) throw new BadRequestException({ message: 'Caja no encontrada' });
    createAperturaDto.caja = caja;
    const apertura = Apertura.create(createAperturaDto);
    const aperturaSaved = await apertura.save();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'APERTURA',
      previusData: {},
      actualData: aperturaSaved,
      user: user,
    });
    const movimiento = {
      apertura: apertura.id,
      tipo: true,
      concepto: 'Apertura de caja',
      cantidad: aperturaSaved.montoApertura,
    };
    this.movimientoService.createWhitOutDto(movimiento, user);
    return aperturaSaved;
  }

  async cerrarApertura(aperturaId: number, user) {
    const apertura = await Apertura.findOne(aperturaId);
    const prevApertura = { ...apertura };
    if (!apertura)
      throw new BadRequestException({ message: 'Apertura no encontrada' });
    await apertura.calculateMontoCierre();
    await apertura.save();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'APERTURA',
      previusData: prevApertura,
      actualData: apertura,
      user: user,
    });
  }

  async findAll(options: IPaginationOptions) {
    const aperturas = await Apertura.createQueryBuilder('apertura')
      .where('apertura.caja = :cajaId', { cajaId: 1 })
      .orderBy('apertura.id', 'DESC');
    return await paginate<Apertura>(aperturas, options);
  }

  async findOne(id: number) {
    const apertura = await Apertura.findOne(id);
    if (!apertura)
      throw new BadRequestException({
        message: 'Apertura de caja no encontrada',
      });
    return apertura;
  }

  async getLastApertura() {
    const apertura = await Apertura.createQueryBuilder('apertura')
      .where('apertura.estado = :estado', { estado: true })
      .orderBy('apertura.id', 'DESC')
      .getOne();
    if (!apertura)
      throw new BadRequestException({ message: 'La caja no esta aperturada ' });
    return apertura;
  }

  async getAperturaDetail(id: number) {
    const apertura = await Apertura.createQueryBuilder('apertura')
      .leftJoinAndSelect('apertura.movimiento', 'movimientos')
      .where('apertura.id = :id', { id })
      .getOne();
    return apertura;
  }

  update(id: number, updateAperturaDto: UpdateAperturaDto) {
    return `This action updates a #${id} apertura`;
  }

  remove(id: number) {
    return `This action removes a #${id} apertura`;
  }
}
