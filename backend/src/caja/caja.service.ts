import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Connection } from 'typeorm';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { Caja } from './entities/caja.entity';

@Injectable()
export class CajaService {
  constructor(private conecction: Connection) {}

  async createDefaulCaja() {
    const cajas = await Caja.find();
    if (cajas.length === 0) {
      const newCaja = new Caja();
      const newUser = new User();
      newUser.id = 1;
      newCaja.nombre = 'CAJA 1';
      newCaja.user = newUser;
      await newCaja.save();
    }
  }

  create(createCajaDto: CreateCajaDto) {
    return 'This action adds a new caja';
  }

  findAll() {
    return `This action returns all caja`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caja`;
  }

  update(id: number, updateCajaDto: UpdateCajaDto) {
    return `This action updates a #${id} caja`;
  }

  remove(id: number) {
    return `This action removes a #${id} caja`;
  }
}
