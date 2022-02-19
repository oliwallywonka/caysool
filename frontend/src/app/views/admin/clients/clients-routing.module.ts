import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientInformationComponent } from './components/cards/client-information/client-information.component';
import { ClientListComponent } from './components/cards/client-list/client-list.component';
import { ClientInformationModalComponent } from './components/modals/client-information-modal/client-information-modal.component';

const routes: Routes = [{
  path: '',
  component: ClientsComponent,
  children: [
    {
      path: ':clientId',
      component: ClientInformationComponent
    },
    {
      path: '**',
      component: ClientListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
