import { BadRequestException, Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagoService {
  constructor(private auditService: AuditService) {}
  async create(createPagoDto: CreatePagoDto, user) {
    const prestamo = await Prestamo.findOne(createPagoDto.prestamo.id);
    if (prestamo)
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

  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
