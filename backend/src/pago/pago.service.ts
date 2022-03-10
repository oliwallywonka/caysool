import { BadRequestException, Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { Audit } from 'src/audit/entities/audit.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagoService {
  constructor(private auditService: AuditService) {}

  async create(createPagoDto: CreatePagoDto, user) {
    const prestamo = await Prestamo.findOne(createPagoDto.prestamo);
    if (!prestamo)
      throw new BadRequestException({ message: 'Prestamo no encontrado' });
    const pago = Pago.create(createPagoDto);
    await pago.save();
    await prestamo.calculateCostoCancelado();
    await prestamo.save();
    this.auditService.audit({
      action: 'Se creó un nuevo registro ',
      auditTable: 'PAGOS',
      previusData: {},
      actualData: pago,
      user: user,
    });
    return pago;
  }

  async findByPrestamoId(prestamoId: number) {
    const pagos = await Pago.createQueryBuilder('pago')
      .where('pago.prestamo = :prestamoId', { prestamoId })
      .getMany();
    return pagos;
  }

  async findOne(id: number) {
    const pago = await Pago.createQueryBuilder('pago')
      .leftJoinAndSelect('pago.client', 'client')
      .where('pago.id = :id', { id })
      .getOne();
    if (!pago) throw new BadRequestException({ message: 'Pago no encontrado' });
    return pago;
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  async remove(id: number, user) {
    const pago = await Pago.createQueryBuilder('pago')
      .leftJoinAndSelect('pago.prestamo', 'prestamo')
      .where('pago.id = :id', { id })
      .getOne();
    const prevPago = { ...pago };
    if (!pago) throw new BadRequestException({ message: 'Pago no encontrado' });
    const prestamo = await Prestamo.findOne(pago.prestamo.id);
    if (!prestamo)
      throw new BadRequestException({ message: 'Prestamo no encontrado' });
    await pago.remove();
    await prestamo.calculateCostoCancelado();
    await prestamo.save();
    await this.auditService.audit({
      action: `Se eliminó el registro Nº ${prevPago.id}`,
      auditTable: 'PAGOS',
      previusData: { ...prevPago, prestamo: prevPago.prestamo.id },
      actualData: {},
      user: user,
    });
    return { message: 'Pago eliminado exitosamente' };
  }

  async getPagosByDate({ from = '', to = '' }) {
    const pagos = await Pago.createQueryBuilder('pagos')
      .where('pagos.createdAt >= :from', { from })
      .andWhere('pagos.createdAt <= :to', { to })
      .getMany();
    return pagos;
  }
}
