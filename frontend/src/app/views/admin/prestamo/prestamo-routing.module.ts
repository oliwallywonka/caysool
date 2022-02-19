import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPrestamoDetalleComponent } from './components/cards/card-prestamo-detalle/card-prestamo-detalle.component';
import { TabPrestamoComponent } from './components/tabs/tab-prestamo/tab-prestamo.component';
import { PrestamoComponent } from './prestamo.component';

const routes: Routes = [{
  path: '',
  component: PrestamoComponent,
  children: [
    {
      path: ':prestamoId',
      component: CardPrestamoDetalleComponent
    },
    {
      path: '**',
      component: TabPrestamoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamoRoutingModule { }
