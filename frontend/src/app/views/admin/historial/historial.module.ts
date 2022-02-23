import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './historial.component';
import { CardHistorialListComponent } from './components/cards/card-historial-list/card-historial-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HistorialComponent, CardHistorialListComponent],
  imports: [
    SharedModule,
    HistorialRoutingModule
  ]
})
export class HistorialModule { }
