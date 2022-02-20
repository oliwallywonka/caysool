import { BadRequestException, Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { getConnection, getRepository } from 'typeorm';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';

@Injectable()
export class BusinessService {
  constructor(private readonly auditService: AuditService) {
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
      newBusiness.cambioDolar = 6.96;
      await newBusiness.save();
      console.log('DATOS DE NEGOCIO POR DEFECTO INGRESADOS ');
    }
  }

  async create(createBusinessDto: CreateBusinessDto, user) {
    const business = await Business.findOne(1);
    if (!business) {
      const newBusiness = Business.create(createBusinessDto);
      await newBusiness.save();
      this.auditService.audit({
        action: 'Se creo un nuevo registro',
        auditTable: 'PRESTAMO',
        previusData: {},
        actualData: newBusiness,
        user: user,
      });
      return { message: 'DATOS DE LA EMPRESA INGRESADOS CORRECTAMENTE' };
    } else {
      const newBusiness = Business.create(createBusinessDto);
      console.log(createBusinessDto);
      Business.merge(business, createBusinessDto);
      await business.save();
      this.auditService.audit({
        action: 'Se creo un nuevo registro',
        auditTable: 'PRESTAMO',
        previusData: { ...business },
        actualData: createBusinessDto,
        user: user,
      });
      return { message: 'DATOS DE LA EMPRESA EDITADOS CORRECTAMENTE' };
    }
  }

  findAll() {
    return `This action returns all business`;
  }

  async findOne() {
    const business = await Business.findOne(1);
    if (!business)
      throw new BadRequestException({
        message: 'Los Datos de la empresa todavia no estan definidas',
      });
    return business;
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
