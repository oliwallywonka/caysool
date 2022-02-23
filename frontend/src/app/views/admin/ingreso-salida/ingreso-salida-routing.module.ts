import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovimientoListComponent } from './components/cards/card-movimiento-list/card-movimiento-list.component';
import { TabIngresoSalidaComponent } from './components/tabs/tab-ingreso-salida/tab-ingreso-salida.component';
import { IngresoSalidaComponent } from './ingreso-salida.component';

const routes: Routes = [{
  path: '',
  component: IngresoSalidaComponent,
  children: [
    {
      path: ':aperturaId',
      component: CardMovimientoListComponent
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
