import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';
import { AuditModule } from 'src/audit/audit.module';
import { MovimientoModule } from 'src/movimiento/movimiento.module';
import { AperturaModule } from 'src/apertura/apertura.module';

@Module({
  controllers: [PagoController],
  providers: [PagoService],
  imports: [AuditModule, MovimientoModule, AperturaModule],
  exports: [PagoService],
})
export class PagoModule {}
