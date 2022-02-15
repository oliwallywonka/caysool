import { Injectable } from '@nestjs/common';
import { CreateAperturaDto } from './dto/create-apertura.dto';
import { UpdateAperturaDto } from './dto/update-apertura.dto';

@Injectable()
export class AperturaService {
  create(createAperturaDto: CreateAperturaDto) {
    return 'This action adds a new apertura';
  }

  findAll() {
    return `This action returns all apertura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apertura`;
  }

  update(id: number, updateAperturaDto: UpdateAperturaDto) {
    return `This action updates a #${id} apertura`;
  }

  remove(id: number) {
    return `This action removes a #${id} apertura`;
  }
}
