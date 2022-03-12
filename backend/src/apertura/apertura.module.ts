import { Module } from '@nestjs/common';
import { AperturaService } from './apertura.service';
import { AperturaController } from './apertura.controller';
import { AuditModule } from 'src/audit/audit.module';
import { MovimientoModule } from 'src/movimiento/movimiento.module';

@Module({
  controllers: [AperturaController],
  providers: [AperturaService],
  imports: [AuditModule, MovimientoModule],
  exports: [AperturaService],
})
export class AperturaModule {}
