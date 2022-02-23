import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { CreateAperturaDto } from './dto/create-apertura.dto';
import { UpdateAperturaDto } from './dto/update-apertura.dto';
import { Apertura } from './entities/apertura.entity';

@Injectable()
export class AperturaService {
  constructor(private readonly auditService: AuditService) {}

  async create(createAperturaDto: CreateAperturaDto, user) {
    const apertura = Apertura.create(createAperturaDto);
    const aperturaSaved = await apertura.save();
    this.auditService.audit({
      action: 'Se Creo un nuevo registro',
      auditTable: 'APERTURA',
      previusData: {},
      actualData: aperturaSaved,
      user: user,
    });
  }

  async findAll(options: IPaginationOptions) {
    const aperturas = await Apertura.createQueryBuilder('apertura')
      .where('apertura.caja = :cajaId', { cajaId: 1 })
      .orderBy('apertura.id', 'DESC');
    return await paginate<Apertura>(aperturas, options);
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
