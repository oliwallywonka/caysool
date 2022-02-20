import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./views/shared/shared.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
registerLocaleData(localeEs);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: "es-*" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
