import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { TabUserComponent } from './tabs/tab-user/tab-user.component';
import { UsersComponent } from './users.component';
import { InformationFormComponent } from './forms/information-form/information-form.component';
import { InteresFormComponent } from './forms/interes-form/interes-form.component';
import { SharedModule } from '../../shared/shared.module';
import { CardUserComponent } from './cards/card-user/card-user.component';
import { ModalUserComponent } from './modals/modal-user/modal-user.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
  declarations: [
    TabUserComponent,
    UsersComponent,
    InformationFormComponent,
    InteresFormComponent,
    CardUserComponent,
    ModalUserComponent,
  ],
  imports: [SharedModule, UsersRoutingModule, Ng2ImgMaxModule ],
})
export class UsersModule {}
