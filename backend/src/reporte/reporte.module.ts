import { Module } from '@nestjs/common';
import { ImpresionDocModule } from 'src/impresion-doc/impresion-doc.module';
import { InventarioModule } from 'src/inventario/inventario.module';
import { MovimientoModule } from 'src/movimiento/movimiento.module';
import { PagoModule } from 'src/pago/pago.module';
import { PrestamoModule } from 'src/prestamo/prestamo.module';
import { TransaccionMonedaModule } from 'src/transaccion-moneda/transaccion-moneda.module';
import { ReporteController } from './reporte.controller';
import { ReporteService } from './reporte.service';

@Module({
  controllers: [ReporteController],
  providers: [ReporteService],
  imports: [
    PrestamoModule,
    PagoModule,
    ImpresionDocModule,
    InventarioModule,
    TransaccionMonedaModule,
    MovimientoModule,
  ],
})
export class ReporteModule {}
