import { Module } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [MovimientoController],
  providers: [MovimientoService],
  imports: [AuditModule],
  exports: [MovimientoService],
})
export class MovimientoModule {}
