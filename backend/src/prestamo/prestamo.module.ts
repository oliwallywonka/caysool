import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { AuditModule } from 'src/audit/audit.module';
import { InventarioModule } from 'src/inventario/inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from 'src/inventario/entities/inventario.entity';
import { AperturaModule } from 'src/apertura/apertura.module';
import { Prestamo } from './entities/prestamo.entity';
@Module({
  controllers: [PrestamoController],
  providers: [PrestamoService],
  imports: [
    TypeOrmModule.forFeature([Inventario]),
    TypeOrmModule.forFeature([Prestamo]),
    AuditModule,
    InventarioModule,
    AperturaModule,
  ],
  exports: [PrestamoService],
})
export class PrestamoModule {}
