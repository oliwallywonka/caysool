import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardReporteImpresionComponent } from './components/cards/card-reporte-impresion/card-reporte-impresion.component';
import { CardReporteIngresoSalidaComponent } from './components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component';
import { CardReporteInventarioComponent } from './components/cards/card-reporte-inventario/card-reporte-inventario.component';
import { CardReporteListComponent } from './components/cards/card-reporte-list/card-reporte-list.component';
import { CardReportePagoComponent } from './components/cards/card-reporte-pago/card-reporte-pago.component';
import { CardReportePrestamoComponent } from './components/cards/card-reporte-prestamo/card-reporte-prestamo.component';
import { CardReporteTransaccionComponent } from './components/cards/card-reporte-transaccion/card-reporte-transaccion.component';
import { ReporteComponent } from './reporte.component';

const routes: Routes = [{
  path: '',
  component: ReporteComponent,
  children: [
    {
      path: '',
      component: CardReporteListComponent
    },
    {
      path: 'prestamos/:prestamoEstado',
      component: CardReportePrestamoComponent
    },
    {
      path: 'pagos',
      component: CardReportePagoComponent
    },
    {
      path: 'impresiones',
      component: CardReporteImpresionComponent
    },
    {
      path: 'inventario',
      component: CardReporteInventarioComponent
    },
    {
      path: 'compra-venta-dolar',
      component: CardReporteTransaccionComponent
    },
    {
      path: 'ingreso-salida',
      component: CardReporteIngresoSalidaComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
