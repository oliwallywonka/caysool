import { NgModule } from '@angular/core';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { TabInventarioComponent } from './components/tabs/tab-inventario/tab-inventario.component';
import { CardInventarioListComponent } from './components/cards/card-inventario-list/card-inventario-list.component';
import { CardInventarioInformationComponent } from './components/cards/card-inventario-information/card-inventario-information.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalDeletePictureComponent } from './components/modals/modal-delete-picture/modal-delete-picture.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { ModalVentaInventarioComponent } from './components/modals/modal-venta-inventario/modal-venta-inventario.component';
import { ModalDevolverInventarioComponent } from './components/modals/modal-devolver-inventario/modal-devolver-inventario.component';
import { ModalEditInventarioComponent } from './components/modals/modal-edit-inventario/modal-edit-inventario.component';
import { CardInventarioCompradoComponent } from './components/cards/card-inventario-comprado/card-inventario-comprado.component';

@NgModule({
  declarations: [
    InventarioComponent,
    TabInventarioComponent,
    CardInventarioListComponent,
    CardInventarioInformationComponent,
    ModalDeletePictureComponent,
    ModalVentaInventarioComponent,
    ModalDevolverInventarioComponent,
    ModalEditInventarioComponent,
    CardInventarioCompradoComponent,
  ],
  imports: [SharedModule, InventarioRoutingModule, Ng2ImgMaxModule],
})
export class InventarioModule {}
