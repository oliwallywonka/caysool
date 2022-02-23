import { Module } from '@nestjs/common';
import { AperturaService } from './apertura.service';
import { AperturaController } from './apertura.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [AperturaController],
  providers: [AperturaService],
  imports: [AuditModule],
})
export class AperturaModule {}
