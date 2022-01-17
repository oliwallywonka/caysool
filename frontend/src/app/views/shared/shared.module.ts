import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  declarations: [ButtonComponent, InputComponent, PaginationComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ButtonComponent,
    InputComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
