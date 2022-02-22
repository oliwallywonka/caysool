import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { CreateTransaccionMonedaDto } from './dto/create-transaccion-moneda.dto';
import { UpdateTransaccionMonedaDto } from './dto/update-transaccion-moneda.dto';
import { TransaccionMoneda } from './entities/transaccion-moneda.entity';

@Injectable()
export class TransaccionMonedaService {
  constructor(private auditService: AuditService) {}

  async create(createTransaccionMonedaDto: CreateTransaccionMonedaDto, user) {
    const transaccion = TransaccionMoneda.create(createTransaccionMonedaDto);
    await transaccion.save();
    this.auditService.audit({
      action: 'Se creó un nuevo registro ',
      auditTable: 'PAGOS',
      previusData: {},
      actualData: transaccion,
      user: user,
    });
    return transaccion;
  }

  async findAll(options: IPaginationOptions) {
    const transacciones = TransaccionMoneda.createQueryBuilder(
      'transaccion',
    ).orderBy('transaccion.id', 'DESC');
    return await paginate<TransaccionMoneda>(transacciones, options);
  }

  findOne(id: number) {
    return `This action returns a #${id} transaccionMoneda`;
  }

  update(id: number, updateTransaccionMonedaDto: UpdateTransaccionMonedaDto) {
    return `This action updates a #${id} transaccionMoneda`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaccionMoneda`;
  }
}
