import { Module } from '@nestjs/common';
import { ImpresionDocService } from './impresion-doc.service';
import { ImpresionDocController } from './impresion-doc.controller';
import { AuditModule } from 'src/audit/audit.module';
import { MovimientoModule } from 'src/movimiento/movimiento.module';
import { AperturaModule } from 'src/apertura/apertura.module';

@Module({
  controllers: [ImpresionDocController],
  providers: [ImpresionDocService],
  imports: [AuditModule, MovimientoModule, AperturaModule],
  exports: [ImpresionDocService],
})
export class ImpresionDocModule {}
