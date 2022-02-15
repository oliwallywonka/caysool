import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';

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
  ],
})
export class SharedModule {}
