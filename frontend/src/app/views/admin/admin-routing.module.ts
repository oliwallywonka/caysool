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
      path: 'ingresos-salidas',
      loadChildren: () => import('./ingreso-salida/ingreso-salida.module').then(m => m.IngresoSalidaModule)
    },
    {
      path: 'reportes',
      loadChildren: () => import('./reporte/reporte.module').then(m => m.ReporteModule)
    },
    {
      path: 'historial',
      loadChildren: () => import('./historial/historial.module').then(m => m.HistorialModule)
    },
    {
      path: '**',
      redirectTo: 'clientes'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
