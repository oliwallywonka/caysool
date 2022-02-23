import { BadRequestException, Injectable } from '@nestjs/common';
import { Apertura } from 'src/apertura/entities/apertura.entity';
import { AuditService } from 'src/audit/audit.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { Movimiento } from './entities/movimiento.entity';

@Injectable()
export class MovimientoService {
  constructor(private readonly auditService: AuditService) {}
  async create(createMovimientoDto: CreateMovimientoDto) {
    const apertura = await Apertura.findOne(createMovimientoDto.apertura);
    if (!apertura)
      throw new BadRequestException({
        message: 'Apertura y cierre de caja no encontrada',
      });
    const movimiento = Movimiento.create(createMovimientoDto);
    const movimientoSaved = await movimiento.save();
  }

  findAll() {
    return `This action returns all movimiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movimiento`;
  }

  update(id: number, updateMovimientoDto: UpdateMovimientoDto) {
    return `This action updates a #${id} movimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} movimiento`;
  }
}
