import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReporteRoutingModule } from "./reporte-routing.module";
import { ReporteComponent } from "./reporte.component";
import { CardReporteListComponent } from "./components/cards/card-reporte-list/card-reporte-list.component";
import { CardReportePrestamoComponent } from "./components/cards/card-reporte-prestamo/card-reporte-prestamo.component";
import { CardReporteInventarioComponent } from "./components/cards/card-reporte-inventario/card-reporte-inventario.component";
import { CardReportePagoComponent } from "./components/cards/card-reporte-pago/card-reporte-pago.component";
import { CardReporteImpresionComponent } from "./components/cards/card-reporte-impresion/card-reporte-impresion.component";
import { CardReporteTransaccionComponent } from "./components/cards/card-reporte-transaccion/card-reporte-transaccion.component";
import { PdfReporteImpresionComponent } from './components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component';
import { PdfReportePagoComponent } from './components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component';
import { PdfReporteInventarioComponent } from './components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component';
import { PdfReporteTransaccionComponent } from './components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component';
import { PdfReportePrestamoComponent } from './components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component';
import { SharedModule } from "../../shared/shared.module";
import { CardReporteIngresoSalidaComponent } from './components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component';
import { PdfReporteIngresoSalidaComponent } from './components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component';
import { PdfPrestamoEstadoComponent } from './components/pdfs/pdf-prestamo-estado/pdf-prestamo-estado.component';
import { PdfPrestamoGeneralComponent } from './components/pdfs/pdf-prestamo-general/pdf-prestamo-general.component';

@NgModule({
  declarations: [
    ReporteComponent,
    CardReporteListComponent,
    CardReportePrestamoComponent,
    CardReporteInventarioComponent,
    CardReportePagoComponent,
    CardReporteImpresionComponent,
    CardReporteTransaccionComponent,
    PdfReporteImpresionComponent,
    PdfReportePagoComponent,
    PdfReporteInventarioComponent,
    PdfReporteTransaccionComponent,
    PdfReportePrestamoComponent,
    CardReporteIngresoSalidaComponent,
    PdfReporteIngresoSalidaComponent,
    PdfPrestamoEstadoComponent,
    PdfPrestamoGeneralComponent,
  ],
  imports: [SharedModule, ReporteRoutingModule],
})
export class ReporteModule {}
