import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { User } from 'src/user/entities/user.entity';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';

@Injectable()
export class AuditService {
  async audit({
    action,
    auditTable,
    previusData = {},
    actualData = {},
    user,
  }: {
    action: string;
    auditTable: string;
    previusData: object;
    actualData: object;
    user: User;
  }) {
    const newAudit = new Audit();
    newAudit.action = action;
    newAudit.auditTable = auditTable;
    newAudit.previousData = previusData;
    newAudit.actualData = actualData;
    newAudit.user = user;
    await newAudit.save();
    await Audit.createQueryBuilder('audit')
      .delete()
      .where('audit.createdAt < now() - interval 60 DAY')
      .execute();
  }

  async findAll(options: IPaginationOptions) {
    const audits = await Audit.createQueryBuilder('audit')
      .leftJoinAndSelect('audit.user', 'user')
      .orderBy('audit.id', 'DESC');
    return await paginate<Audit>(audits, options);
  }
}
