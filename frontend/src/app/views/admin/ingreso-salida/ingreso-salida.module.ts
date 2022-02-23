import { NgModule } from '@angular/core';

import { IngresoSalidaRoutingModule } from './ingreso-salida-routing.module';
import { IngresoSalidaComponent } from './ingreso-salida.component';
import { TabIngresoSalidaComponent } from './components/tabs/tab-ingreso-salida/tab-ingreso-salida.component';
import { CardDolarListComponent } from './components/cards/card-dolar-list/card-dolar-list.component';
import { CardAperturaListComponent } from './components/cards/card-apertura-list/card-apertura-list.component';
import { CardMovimientoComponent } from './components/cards/card-movimiento/card-movimiento.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalCompraVentaDolarComponent } from './components/modals/modal-compra-venta-dolar/modal-compra-venta-dolar.component';
import { ModalIngresoSalidaComponent } from './components/modals/modal-ingreso-salida/modal-ingreso-salida.component';
import { ModalAperturaComponent } from './components/modals/modal-apertura/modal-apertura.component';
import { CardMovimientoListComponent } from './components/cards/card-movimiento-list/card-movimiento-list.component';
import { ModalCierreAperturaComponent } from './components/modals/modal-cierre-apertura/modal-cierre-apertura.component';

@NgModule({
  declarations: [
    IngresoSalidaComponent,
    TabIngresoSalidaComponent,
    CardDolarListComponent,
    CardAperturaListComponent,
    CardMovimientoComponent,
    ModalCompraVentaDolarComponent,
    ModalIngresoSalidaComponent,
    ModalAperturaComponent,
    CardMovimientoListComponent,
    ModalCierreAperturaComponent,
  ],
  imports: [SharedModule, IngresoSalidaRoutingModule],
})
export class IngresoSalidaModule {}
