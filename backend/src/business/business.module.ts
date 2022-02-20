import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [BusinessController],
  providers: [BusinessService],
  imports: [AuditModule],
})
export class BusinessModule {}
