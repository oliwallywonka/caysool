import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { AuditModule } from 'src/audit/audit.module';
import { InventarioModule } from 'src/inventario/inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from 'src/inventario/entities/inventario.entity';
@Module({
  controllers: [PrestamoController],
  providers: [PrestamoService],
  imports: [
    TypeOrmModule.forFeature([Inventario]),
    AuditModule,
    InventarioModule,
  ],
})
export class PrestamoModule {}
