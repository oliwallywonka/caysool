import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInventarioInformationComponent } from './components/cards/card-inventario-information/card-inventario-information.component';
import { TabInventarioComponent } from './components/tabs/tab-inventario/tab-inventario.component';
import { InventarioComponent } from './inventario.component';

const routes: Routes = [{
  path: '',
  component: InventarioComponent,
  children: [
    {
      path: ':inventarioId',
      component: CardInventarioInformationComponent
    },
    {
      path: '**',
      component: TabInventarioComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
