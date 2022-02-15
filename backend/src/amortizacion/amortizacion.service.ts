import { Injectable } from '@nestjs/common';
import { CreateAmortizacionDto } from './dto/create-amortizacion.dto';
import { UpdateAmortizacionDto } from './dto/update-amortizacion.dto';

@Injectable()
export class AmortizacionService {
  create(createAmortizacionDto: CreateAmortizacionDto) {
    return 'This action adds a new amortizacion';
  }

  findAll() {
    return `This action returns all amortizacion`;
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
