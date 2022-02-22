import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoSalidaRoutingModule } from './ingreso-salida-routing.module';
import { IngresoSalidaComponent } from './ingreso-salida.component';
import { TabIngresoSalidaComponent } from './components/tabs/tab-ingreso-salida/tab-ingreso-salida.component';
import { CardDolarListComponent } from './components/cards/card-dolar-list/card-dolar-list.component';
import { CardAperturaListComponent } from './components/cards/card-apertura-list/card-apertura-list.component';
import { CardMovimientoComponent } from './components/cards/card-movimiento/card-movimiento.component';

@NgModule({
  declarations: [
    IngresoSalidaComponent,
    TabIngresoSalidaComponent,
    CardDolarListComponent,
    CardAperturaListComponent,
    CardMovimientoComponent,
  ],
  imports: [CommonModule, IngresoSalidaRoutingModule],
})
export class IngresoSalidaModule {}
