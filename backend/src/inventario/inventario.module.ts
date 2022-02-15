import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService],
  imports: [AuditModule],
  exports: [InventarioService],
})
export class InventarioModule {}
