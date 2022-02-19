import { Module } from '@nestjs/common';
import { AmortizacionService } from './amortizacion.service';
import { AmortizacionController } from './amortizacion.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [AmortizacionController],
  providers: [AmortizacionService],
  imports: [AuditModule],
})
export class AmortizacionModule {}
