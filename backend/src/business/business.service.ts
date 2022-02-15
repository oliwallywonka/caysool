import { Injectable } from '@nestjs/common';
import { getConnection, getRepository } from 'typeorm';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';

@Injectable()
export class BusinessService {
  constructor() {
    //this.insertDefaultBussiness();
  }

  async insertDefaultBussiness() {
    const business = await getRepository(Business).find();
    console.log(business);
    if (business.length === 0) {
      const newBusiness = new Business();
      newBusiness.name = 'EMPRESA';
      newBusiness.nit = '123456879';
      newBusiness.phone = '123456/12345';
      newBusiness.direction = 'fake Direction street 11';
      newBusiness.commission = 5;
      newBusiness.interest = 15;
      await newBusiness.save();
      console.log('DATOS DE NEGOCIO POR DEFECTO INGRESADOS ');
    }
  }

  create(createBusinessDto: CreateBusinessDto) {
    return 'This action adds a new business';
  }

  findAll() {
    return `This action returns all business`;
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
