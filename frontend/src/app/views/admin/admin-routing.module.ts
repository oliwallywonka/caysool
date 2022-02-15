import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/layouts/admin/admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'panel-control',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'clientes',
      loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
    },
    {
      path: 'prestamos',
      loadChildren: () => import('./prestamo/prestamo.module').then(m => m.PrestamoModule)
    },
    {
      path: 'inventario',
      loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule)
    },
    {
      path: '**',
      redirectTo: 'panel-control'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
