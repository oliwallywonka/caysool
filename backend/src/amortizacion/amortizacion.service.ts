import { BadGatewayException, Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreateAmortizacionDto } from './dto/create-amortizacion.dto';
import { UpdateAmortizacionDto } from './dto/update-amortizacion.dto';
import { Amortizacion } from './entities/amortizacion.entity';

@Injectable()
export class AmortizacionService {
  constructor(private readonly auditService: AuditService) {}
  async create(createAmortizacionDto: CreateAmortizacionDto, user) {
    const prestamo = await Prestamo.findOne(createAmortizacionDto.prestamo.id);
    if (!prestamo)
      throw new BadGatewayException({ message: 'Prestamo no encontrado' });
    const amortizacion = Amortizacion.create(createAmortizacionDto);
    const amortizacionSaved = amortizacion.save();
    await prestamo.calculateCostoCancelado();
    await prestamo.save();

    this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'AMORTIZACION',
      previusData: {},
      actualData: {
        ...amortizacionSaved,
        prestamo: createAmortizacionDto.prestamo.id,
      },
      user: user,
    });
    return amortizacionSaved;
  }

  async findByPrestamoId(prestamoId: number) {
    const amortizaciones = await Amortizacion.createQueryBuilder('amortizacion')
      .where('amortizacion.prestamoId = :prestamoId', { prestamoId })
      .getMany();
    return amortizaciones;
  }

  findOne(id: number) {
    return `This action returns a #${id} amortizacion`;
  }

  update(id: number, updateAmortizacionDto: UpdateAmortizacionDto) {
    return `This action updates a #${id} amortizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} amortizacion`;
  }
}
