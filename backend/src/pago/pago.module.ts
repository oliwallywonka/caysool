import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [PagoController],
  providers: [PagoService],
  imports: [AuditModule],
  exports: [PagoService],
})
export class PagoModule {}
