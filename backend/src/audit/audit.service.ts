import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { User } from 'src/user/entities/user.entity';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';
import { Connection } from 'typeorm';

@Injectable()
export class AuditService {
  constructor(private connection: Connection) {
    this.deletePastAudits();
  }
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
  }

  async deletePastAudits() {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await Audit.createQueryBuilder('audit')
      .delete()
      .where('audit.createdAt < now() - interval 60 DAY')
      .execute();
    await queryRunner.release();
  }

  async auditObject({
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
    return newAudit;
  }

  async findAll(options: IPaginationOptions) {
    const audits = Audit.createQueryBuilder('audit')
      .leftJoinAndSelect('audit.user', 'user')
      .orderBy('audit.id', 'DESC');
    return await paginate<Audit>(audits, options);
  }
}
