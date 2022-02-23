import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAperturaListComponent } from './components/cards/card-apertura-list/card-apertura-list.component';
import { CardMovimientoComponent } from './components/cards/card-movimiento/card-movimiento.component';
import { TabIngresoSalidaComponent } from './components/tabs/tab-ingreso-salida/tab-ingreso-salida.component';
import { IngresoSalidaComponent } from './ingreso-salida.component';

const routes: Routes = [{
  path: '',
  component: IngresoSalidaComponent,
  children: [
    {
      path: ':aperturaId',
      component: CardAperturaListComponent
    },
    {
      path: '**',
      component: TabIngresoSalidaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoSalidaRoutingModule { }
