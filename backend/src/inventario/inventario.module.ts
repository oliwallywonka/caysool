import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { AuditModule } from 'src/audit/audit.module';
import { AperturaModule } from 'src/apertura/apertura.module';
import { MovimientoModule } from 'src/movimiento/movimiento.module';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService],
  imports: [AuditModule, AperturaModule, MovimientoModule],
  exports: [InventarioService],
})
export class InventarioModule {}
