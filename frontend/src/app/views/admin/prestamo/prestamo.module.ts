import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamoRoutingModule } from './prestamo-routing.module';
import { PrestamoComponent } from './prestamo.component';


@NgModule({
  declarations: [PrestamoComponent],
  imports: [
    CommonModule,
    PrestamoRoutingModule
  ]
})
export class PrestamoModule { }
