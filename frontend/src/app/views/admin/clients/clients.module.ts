import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientsRoutingModule } from "./clients-routing.module";
import { ClientsComponent } from "./clients.component";
import { ClientListComponent } from "./components/cards/client-list/client-list.component";
import { ClientInformationModalComponent } from "./components/modals/client-information-modal/client-information-modal.component";
import { NewPrestamoModalComponent } from "./components/modals/new-prestamo-modal/new-prestamo-modal.component";
import { InventarioListComponent } from "./components/cards/inventario-list/inventario-list.component";
import { TabClientComponent } from './components/tabs/tab-client/tab-client.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ClientsComponent,
    ClientListComponent,
    ClientInformationModalComponent,
    NewPrestamoModalComponent,
    InventarioListComponent,
    TabClientComponent,
  ],
  imports: [ClientsRoutingModule, SharedModule],
})
export class ClientsModule {}
