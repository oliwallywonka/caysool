import { User } from 'src/user/entities/user.entity';

export class CreateAuditDto {
  action: string;

  auditTable: string;

  previusData: any;

  actualData: any;

  user: User;
}
