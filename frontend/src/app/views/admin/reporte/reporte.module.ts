import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteComponent } from './reporte.component';
import { CardReporteListComponent } from './components/cards/card-reporte-list/card-reporte-list.component';
import { CardReportePrestamoComponent } from './components/cards/card-reporte-prestamo/card-reporte-prestamo.component';
import { CardReporteInventarioComponent } from './components/cards/card-reporte-inventario/card-reporte-inventario.component';


@NgModule({
  declarations: [ReporteComponent, CardReporteListComponent, CardReportePrestamoComponent, CardReporteInventarioComponent],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
