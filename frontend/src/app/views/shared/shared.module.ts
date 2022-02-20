import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { NgxPopperjsModule } from 'ngx-popperjs';
@NgModule({
  declarations: [ButtonComponent, InputComponent, PaginationComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    PaginationComponent,
    SelectComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxPopperjsModule
  ],
  providers: [DatePipe]
})
export class SharedModule {}
