(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "09yk":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/cards/client-information/client-information.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n      <button\n          (click)=\"goToBackPage()\"\n          class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n          type=\"submit\"\n        >\n        <i class=\"fas fa-arrow-left\"></i>\n      </button>\n      Información del Cliente\n    </h3>\n    <div class=\"flex items-center justify-start pt-2\">\n      <app-new-prestamo-modal></app-new-prestamo-modal>\n      <app-client-modal [modalButton]=\"false\"></app-client-modal>\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto flex flex-col justify-center\">\n    <div *ngIf=\"prestamoEstado\" class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-700 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n      <div class=\"flex items-center space-x-4 px-4 py-2 bg-blueGray-600 \">\n          <div class=\"flex-shrink-0\">\n            <i class=\"fas fa-user-circle text-center text-6xl text-white\"></i>\n          </div>\n          <div class=\"flex-1 min-w-0\">\n            <p class=\"text-xl font-medium text-white truncate dark:text-white\">\n                Cliente: {{ client.name }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-200 truncate dark:text-gray-400\">\n                Prestamos: {{ prestamosTotal }}\n            </p>\n          </div>\n          <button\n            [popper]=\"clientModal\"\n            [popperTrigger]=\"'hover'\"\n            [popperPlacement]=\"'top'\"\n            [popperPositionFixed]=\"true\"\n            class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n            type=\"button\"\n            (click)=\"showClientModal(client)\">\n            <i class=\"fas fa-edit\"></i>\n          </button>\n          <popper-content #clientModal>\n            <p class=\"bold\">Editar cliente</p>\n          </popper-content>\n\n          <button\n            [popper]=\"prestamoModal\"\n            [popperTrigger]=\"'hover'\"\n            [popperPlacement]=\"'top'\"\n            [popperPositionFixed]=\"true\"\n            class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n            type=\"button\"\n            (click)=\"showPrestamoModal(client)\">\n            <i class=\"fas fa-plus-square\"></i>\n          </button>\n          <popper-content #prestamoModal>\n            <p class=\"bold\">Nuevo Prestamo</p>\n          </popper-content>\n\n\n      </div>\n      <div class=\"flex items-center space-x-4 px-4 \">\n        <div class=\"flex-1 min-w-0 py-8\">\n          <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n              Fecha de nacimeinto: {{ client.birthDate|date }}\n          </p>\n          <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Correo Electronico: {{ client.email }}\n          </p>\n          <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n            Celular: {{ client.phone }}\n          </p>\n          <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n            Domicilio: {{ client.direction }}\n          </p>\n          <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n            CI: {{ client.ci }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"my-4 mx-2 flex text-center content-center text-2xl w-1/2 bg-green-600\">\n      <div class=\"p-14 bold\">\n        <div>ACTIVOS</div>\n        <div class=\"text-4xl\">{{ prestamoEstado?.activos.cantidad }}</div>\n      </div>\n      <div class=\"p-14 bold\">\n        <div>CANCELADOS</div>\n        <div class=\"text-4xl\">{{ prestamoEstado?.cancelados.cantidad }}</div>\n      </div>\n      <div class=\"p-14 bold\">\n        <div>VENCIDOS</div>\n        <div class=\"text-4xl\">{{ prestamoEstado?.vencidos.cantidad }}</div>\n      </div>\n\n    </div>\n    <div class=\"flow-root w-auto\">\n      <ul *ngIf=\"inventario\" role=\"list\" >\n          <li *ngFor=\"let inv of inventario; let i=index;\"\n              class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-700 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n              <div\n                class=\"flex items-center\"\n                (click)=\"goToInventarioPage(inv)\">\n                  <div class=\"text-3xl p-4 bg-green-600\">\n                    {{i+1}}\n                  </div>\n                  <div  class=\"flex-1 min-w-0 mx-6\">\n                    <p\n                      *ngIf=\"inv.tipo === 'JOYA'\"\n                      class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n                        {{ inv.descripcion }} {{ inv.metal }} {{ inv.peso }} {{ inv.pureza }}\n                    </p>\n                    <p\n                      *ngIf=\"inv.tipo === 'ARTICULO'\"\n                      class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n                        {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.linea }}\n                    </p>\n                    <p\n                      *ngIf=\"inv.tipo === 'VEHICULO'\"\n                      class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n                        {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.placa }}\n                    </p>\n                    <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n                        {{ inv.createdAt|date: 'medium' }}\n                    </p>\n                  </div>\n                  <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                    {{ inv.estado === 'EMPENADO'? 'EMPEÑADO': inv.estado }}\n                  </div>\n              </div>\n          </li>\n      </ul>\n  </div>\n </div>\n</div>\n");

/***/ }),

/***/ "0wy5":
/*!***************************************************************!*\
  !*** ./src/app/views/admin/clients/clients-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.component */ "HG6Z");
/* harmony import */ var _components_cards_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/client-information/client-information.component */ "RSxY");
/* harmony import */ var _components_cards_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/client-list/client-list.component */ "fKQk");






const routes = [{
        path: '',
        component: _clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
        children: [
            {
                path: ':clientId',
                component: _components_cards_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_4__["ClientInformationComponent"]
            },
            {
                path: '**',
                component: _components_cards_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__["ClientListComponent"]
            },
        ]
    }];
let ClientsRoutingModule = class ClientsRoutingModule {
};
ClientsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClientsRoutingModule);



/***/ }),

/***/ "3nDP":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/modals/new-prestamo-modal/new-prestamo-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"modal.visible&&modal.modalName==='prestamoModal'\" class=\"justify-center items-center overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 inset-0 z-50 grid\">\n  <div class=\"relative px-4 w-full max-w-6xl h-full md:h-auto\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           PRESTAMO\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n      <div class=\"flex w-full\">\n\n        <form\n          autocomplete=\"off\"\n          [formGroup]=\"prestamoForm\"\n          (ngSubmit)=\"save()\"\n          class=\"w-full md:w-1/2\"\n        >\n          <div class=\"my-4 relative p-6 flex flex-wrap\">\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"prestamoForm\"\n                inputLabel=\"INICIO PRESTAMO\"\n                inputType=\"date\"\n                inputFormName=\"fechaInicio\"\n                formControlName=\"fechaInicio\"\n                [value]=\"prestamoForm.value.fechaInicio\"\n                (inputEvent)=\"calculateCostoTotal($event)\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"prestamoForm\"\n                inputLabel=\"FINAL del PRESTAMO\"\n                inputType=\"date\"\n                inputFormName=\"fechaFinal\"\n                formControlName=\"fechaFinal\"\n                (inputEvent)=\"calculateCostoTotal()\"\n                [value]=\"prestamoForm.value.fechaFinal\">\n              </app-input>\n            </div>\n\n            <form\n              autocomplete=\"off\"\n              [formGroup]=\"inventarioForm\"\n              (ngSubmit)=\"addInventory()\"\n              class=\"w-full\"\n            >\n              <div class=\"w-full px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"inventarioForm\"\n                  inputLabel=\"OBSERVACIONES\"\n                  inputType=\"text\"\n                  inputFormName=\"observacion\"\n                  formControlName=\"observacion\"\n                  inputPlaceholder=\"Estado actual, marcas de deterioro, defectos\"\n                  [value]=\"inventarioForm.value.observacion\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"inventarioForm\"\n                  inputLabel=\"DESCRIPCIÓN\"\n                  inputType=\"text\"\n                  inputFormName=\"descripcion\"\n                  formControlName=\"descripcion\"\n                  inputPlaceholder=\"Descripción del inventario\"\n                  [value]=\"inventarioForm.value.descripcion\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"inventarioForm\"\n                  inputLabel=\"AVALÚO\"\n                  inputType=\"number\"\n                  inputFormName=\"precioAvaluo\"\n                  formControlName=\"precioAvaluo\"\n                  inputPlaceholder=\"Valor de apreciacion de la prenda\"\n                  [value]=\"inventarioForm.value.precioAvaluo\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"inventarioForm\"\n                  inputLabel=\"PRESTAMO\"\n                  inputType=\"number\"\n                  inputFormName=\"costoPrestamo\"\n                  formControlName=\"costoPrestamo\"\n                  inputPlaceholder=\"Cantidad a prestar por esta prenda\"\n                  [value]=\"inventarioForm.value.costoPrestamo\">\n                </app-input>\n              </div>\n              <div class=\"w-full px-4 mb-2\">\n                <app-select\n                  [options]=\"inventarioOption\"\n                  inputLabel=\"PRENDAS EN GARANTIA\"\n                  inputFormName=\"tipo\"\n                  formControlName=\"tipo\"\n                  [inputForm]=\"inventarioForm\"\n                  [value]=\"inventarioForm.value.tipo\">\n                </app-select>\n              </div>\n              <div\n                *ngIf=\"inventarioForm.value.tipo==='VEHICULO'\"\n                class=\"w-full px-4 mb-2\">\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"MARCA\"\n                    inputType=\"text\"\n                    inputFormName=\"marca\"\n                    formControlName=\"marca\"\n                    inputPlaceholder=\"Toyota, Nissan, Susuki\"\n                    [value]=\"inventarioForm.value.marca\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"MODELO\"\n                    inputType=\"text\"\n                    inputFormName=\"modelo\"\n                    formControlName=\"modelo\"\n                    inputPlaceholder=\"Ingrese el año\"\n                    [value]=\"inventarioForm.value.modelo\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"LINEA\"\n                    inputType=\"text\"\n                    inputFormName=\"linea\"\n                    formControlName=\"linea\"\n                    inputPlaceholder=\"Corolla, Ipsun, Caldina\"\n                    [value]=\"inventarioForm.value.linea\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"PLACA\"\n                    inputType=\"text\"\n                    inputFormName=\"placa\"\n                    formControlName=\"placa\"\n                    inputPlaceholder=\"Placa del vehiculo\"\n                    [value]=\"inventarioForm.value.placa\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"NÚMERO DE CHASIS\"\n                    inputType=\"text\"\n                    inputFormName=\"chasis\"\n                    formControlName=\"chasis\"\n                    inputPlaceholder=\"Número de serie\"\n                    [value]=\"inventarioForm.value.chasis\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"DEUDAS RUAT\"\n                    inputType=\"text\"\n                    inputFormName=\"ruat\"\n                    formControlName=\"ruat\"\n                    inputPlaceholder=\"Deudas de vehiculo\"\n                    [value]=\"inventarioForm.value.ruat\">\n                  </app-input>\n                </div>\n\n              </div>\n\n              <div\n                *ngIf=\"inventarioForm.value.tipo==='JOYA'\"\n                class=\"w-full px-4 mb-2\">\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"METAL\"\n                    inputType=\"text\"\n                    inputFormName=\"metal\"\n                    formControlName=\"metal\"\n                    inputPlaceholder=\"Oro, Plata, Fantasia\"\n                    [value]=\"inventarioForm.value.metal\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"PESO EN GRAMOS\"\n                    inputType=\"text\"\n                    inputFormName=\"peso\"\n                    formControlName=\"peso\"\n                    inputPlaceholder=\"100 gr\"\n                    [value]=\"inventarioForm.value.peso\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"PUREZA\"\n                    inputType=\"text\"\n                    inputFormName=\"pureza\"\n                    formControlName=\"pureza\"\n                    inputPlaceholder=\"Grado de pureza\"\n                    [value]=\"inventarioForm.value.pureza\">\n                  </app-input>\n                </div>\n              </div>\n\n              <div\n                *ngIf=\"inventarioForm.value.tipo==='ARTICULO'\"\n                class=\"w-full px-4 mb-2\">\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"MARCA\"\n                    inputType=\"text\"\n                    inputFormName=\"marca\"\n                    formControlName=\"marca\"\n                    inputPlaceholder=\"Nombre del fabricante\"\n                    [value]=\"inventarioForm.value.marca\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"MODELO\"\n                    inputType=\"text\"\n                    inputFormName=\"modelo\"\n                    formControlName=\"modelo\"\n                    inputPlaceholder=\"Nombre del producto\"\n                    [value]=\"inventarioForm.value.modelo\">\n                  </app-input>\n                </div>\n\n                <div class=\"w-full mb-2\">\n                  <app-input\n                    [inputForm]=\"inventarioForm\"\n                    inputLabel=\"SERIE\"\n                    inputType=\"text\"\n                    inputFormName=\"serie\"\n                    formControlName=\"serie\"\n                    inputPlaceholder=\"Número de serie\"\n                    [value]=\"inventarioForm.value.serie\">\n                  </app-input>\n                </div>\n              </div>\n              <button\n                class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                type=\"button\"\n                [disabled]=\"!inventarioForm.valid ||!prestamoForm.valid\"\n                (click)=\"addInventory()\"\n              >\n                Agregar Prenda\n              </button>\n            </form>\n          </div>\n\n        <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n          <button\n            class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            (click)=\"closeModal()\"\n            type=\"button\"\n          >\n            Cancelar\n          </button>\n          <button\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"button\"\n            (click)=\"refreshForm()\"\n          >\n            Limpiar\n          </button>\n          <button\n            [disabled]=\"!prestamoForm.valid || loading || inventarioArray.length === 0\"\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n          </button>\n        </div>\n\n        </form>\n\n        <div class=\"w-full md:w-1/2 my-4 relative p-6\">\n          <div>\n            <p> Cantidad de dias: {{this.diasPrestamo}}</p>\n            <p> Prestamo total: Bol. {{this.costoPrestamo}}</p>\n            <p> Interes al finalizar el plazo: Bol. {{(this.costoTotal - this.costoPrestamo).toFixed(1)}}</p>\n            <p> Total a pagar al finalizar el plazo: Bol. {{this.costoTotal}}</p>\n          </div>\n          <div class=\"mr-4\">\n            <ul role=\"list\" >\n              <li *ngFor=\"let inv of inventarioArray; let i=index;\"\n                  class=\"cursor-pointer m-2 w-full border-2 border-green-500 hover:border-green-500 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n                  <div class=\"flex items-center\">\n                      <div class=\"text-3xl p-4 bg-green-500\">\n                        {{i+1}}\n                      </div>\n                      <div  class=\"flex-1 min-w-0 mx-6\">\n                        <p\n                          *ngIf=\"inv.tipo === 'JOYA'\"\n                          class=\"text-xs font-medium text-gray-900 truncate dark:text-white\">\n                            {{ inv.metal }} {{ inv.peso }} {{ inv.pureza }}\n                        </p>\n                        <p\n                          *ngIf=\"inv.tipo === 'ARTICULO'\"\n                          class=\"text-xs font-medium text-gray-900 truncate dark:text-white\">\n                            {{ inv.marca }} {{ inv.modelo }} {{ inv.linea }}\n                        </p>\n                        <p\n                          *ngIf=\"inv.tipo === 'VEHICULO'\"\n                          class=\"text-xs font-medium text-gray-900 truncate dark:text-white\">\n                            {{ inv.marca }} {{ inv.modelo }} {{ inv.placa }}\n                        </p>\n                        <p class=\"text-xs font-medium text-gray-500 truncate dark:text-gray-400\">\n                            Préstamo: Bol. {{ inv.costoPrestamo }}\n                        </p>\n                        <p class=\"text-xs font-medium text-gray-500 truncate dark:text-gray-400\">\n                            Avalúo: Bol. {{ inv.costoAvaluo }}\n                        </p>\n                      </div>\n                      <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                        <button\n                          class=\"mx-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                          type=\"button\"\n                          (click)=\"deleteInventario(i)\"\n                        >\n                          <i class=\"fas fa-trash\"></i>\n                        </button>\n                      </div>\n                    </div>\n                </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='prestamoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "4m8I":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/modals/new-prestamo-modal/new-prestamo-modal.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NewPrestamoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPrestamoModalComponent", function() { return NewPrestamoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_prestamo_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-prestamo-modal.component.html */ "3nDP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/client.service */ "y6ow");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/prestamo.service */ "U31Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let NewPrestamoModalComponent = class NewPrestamoModalComponent {
    constructor(prestamoService, clientService, authService, alertService, modalService, router, fb) {
        this.prestamoService = prestamoService;
        this.clientService = clientService;
        this.authService = authService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.router = router;
        this.fb = fb;
        this.loading = false;
        this.inventarioArray = [];
        this.costoPrestamo = 0.00;
        this.costoTotal = 0.00;
        this.diasPrestamo = 0;
        this.modal = this.modalService.modal;
        this.submitted = false;
        this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido',
        };
        this.inventarioOption = [
            {
                value: 'JOYA',
                name: 'JOYA',
            },
            {
                value: 'VEHICULO',
                name: 'VEHICULO',
            },
            {
                value: 'ARTICULO',
                name: 'ARTICULO',
            },
        ];
        this.prestamoForm = this.fb.group({
            fechaInicio: [
                new Date().toISOString().substring(0, 10),
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ],
            ],
            fechaFinal: [
                '',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ],
            ],
            user: [''],
            client: [''],
            inventario: [''],
        });
        this.inventarioForm = this.fb.group({
            tipo: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ]
            ],
            precioAvaluo: [''],
            costoPrestamo: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ]
            ],
            descripcion: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 70,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            observacion: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 70,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            marca: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 15,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            modelo: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 15,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            linea: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 15,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            serie: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 30,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            placa: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 15,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            chasis: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 30,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            deuda: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 15,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            ruat: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 20,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            metal: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 20,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            peso: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 20,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            pureza: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 20,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subscribeClient();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshClient() {
    }
    subscribeClient() {
        this.sub.add(this.prestamoService.client.subscribe((client) => {
            this.client = client;
            if (client) {
                //this.clientForm.controls['name'].setValue(client.name);
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.clientService.client.emit(null);
        this.prestamoService.prestamo.emit(null);
        this.prestamoService.client.emit(null);
    }
    refreshForm() {
        this.inventarioArray = [];
        this.costoPrestamo = 0;
        this.diasPrestamo = 0;
        this.costoTotal = 0;
        this.prestamoForm.resetForm();
        this.inventarioForm.resetForm();
    }
    successMessage(message = 'creado') {
        this.alertService.alert.fire({
            title: `Prestamo ${message} Exitosamente`,
            icon: 'success',
        });
    }
    errorMessage(message) {
        this.alertService.alert.fire({
            title: message,
            icon: 'error',
        });
    }
    save() {
        this.loading = true;
        const bodyPrestamo = {
            user: this.authService.user.id,
            client: this.client.id,
            fechaInicio: this.prestamoForm.value.fechaInicio,
            fechaFinal: this.prestamoForm.value.fechaFinal,
            inventario: this.inventarioArray
        };
        this.prestamoService.postPrestamo(bodyPrestamo).subscribe(response => {
            this.loading = false;
            this.successMessage();
            this.closeModal();
            this.router.navigate(['/admin/prestamos', response.id]);
        }, error => {
            this.loading = false;
            this.errorMessage(error.error.message);
        });
    }
    addInventory() {
        this.inventarioArray.push(this.inventarioForm.value);
        this.calculateCostoTotal();
    }
    deleteInventario(index) {
        this.inventarioArray.splice(index, 1);
        this.calculateCostoTotal();
    }
    calculateCostoTotal(event = '') {
        this.costoPrestamo = 0;
        this.diasPrestamo = 0;
        this.costoTotal = 0;
        const diaInicio = moment__WEBPACK_IMPORTED_MODULE_8__(this.prestamoForm.value.fechaInicio).startOf('day');
        const diaFinal = moment__WEBPACK_IMPORTED_MODULE_8__(this.prestamoForm.value.fechaFinal).endOf('day');
        const dias = moment__WEBPACK_IMPORTED_MODULE_8__["duration"](diaFinal.diff(diaInicio)).asDays();
        this.diasPrestamo = +(dias < 5 ? 5 : dias).toFixed(0);
        if (this.inventarioArray.length > 0) {
            for (const inventario of this.inventarioArray) {
                inventario.costoPrestamo = +inventario.costoPrestamo;
                inventario.precioAvaluo = +inventario.precioAvaluo;
                this.costoPrestamo += inventario.costoPrestamo;
            }
            this.costoTotal = +(this.costoPrestamo * Math.pow((1 + 0.15 / 30), (dias < 5 ? 5 : dias))).toFixed(1);
        }
    }
    showEvent(event) {
        console.log(event);
        console.log(this.inventarioForm.value.tipo);
    }
};
NewPrestamoModalComponent.ctorParameters = () => [
    { type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_10__["PrestamoService"] },
    { type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
NewPrestamoModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-prestamo-modal',
        template: _raw_loader_new_prestamo_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], NewPrestamoModalComponent);



/***/ }),

/***/ "EorC":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/clients.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-tab-client></app-tab-client>\n");

/***/ }),

/***/ "GPsl":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/cards/inventario-list/inventario-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InventarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioListComponent", function() { return InventarioListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventario_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventario-list.component.html */ "O0yP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let InventarioListComponent = class InventarioListComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventarioListComponent.ctorParameters = () => [];
InventarioListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-inventario-list',
        template: _raw_loader_inventario_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], InventarioListComponent);



/***/ }),

/***/ "HG6Z":
/*!**********************************************************!*\
  !*** ./src/app/views/admin/clients/clients.component.ts ***!
  \**********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clients.component.html */ "EorC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ClientsComponent = class ClientsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientsComponent.ctorParameters = () => [];
ClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-clients',
        template: _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ClientsComponent);



/***/ }),

/***/ "IOFN":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/modals/client-information-modal/client-information-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ClientInformationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInformationModalComponent", function() { return ClientInformationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_information_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-information-modal.component.html */ "pM4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ClientInformationModalComponent = class ClientInformationModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientInformationModalComponent.ctorParameters = () => [];
ClientInformationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-information-modal',
        template: _raw_loader_client_information_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ClientInformationModalComponent);



/***/ }),

/***/ "LkBX":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/tabs/tab-client/tab-client.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words  w-full mb-6  rounded\">\n  <div class=\"w-full\">\n    <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row\">\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(1)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 1, 'text-white bg-sky-700': openTab === 1}\">\n          Clientes\n        </a>\n      </li>\n\n    </ul>\n    <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n      <div class=\"px-4 py-5 flex-auto\">\n        <div class=\"tab-content tab-space\">\n          <div *ngIf=\"openTab === 1\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "O0yP":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/cards/inventario-list/inventario-list.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>inventario-list works!</p>\n");

/***/ }),

/***/ "RSxY":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/cards/client-information/client-information.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ClientInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInformationComponent", function() { return ClientInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-information.component.html */ "09yk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/client.service */ "y6ow");
/* harmony import */ var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/prestamo.service */ "U31Y");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");










let ClientInformationComponent = class ClientInformationComponent {
    constructor(clientService, prestamoService, inventarioService, route, router, location, modalService) {
        this.clientService = clientService;
        this.prestamoService = prestamoService;
        this.inventarioService = inventarioService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.modal = this.modalService.modal;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.clientId = this.route.snapshot.paramMap.get('clientId');
        this.getClientById();
        this.subscribeClient();
        this.getInventarioByClient();
        this.getPrestamoEstadoByClient();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventarioByClient() {
        this.sub.add(this.inventarioService.getInventarioByClientId(+this.clientId).subscribe(inventario => {
            this.inventario = inventario;
        }));
    }
    getPrestamoEstadoByClient() {
        this.prestamosTotal = 0;
        this.sub.add(this.prestamoService.getPrestamoByClientId(+this.clientId).subscribe(prestamoEstado => {
            this.prestamoEstado = prestamoEstado;
            this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.activos.cantidad;
            this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.cancelados.cantidad;
            this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.vencidos.cantidad;
        }));
    }
    getClientById() {
        this.sub.add(this.clientService.getClient(+this.clientId).subscribe(client => {
            this.client = client;
        }));
    }
    subscribeClient() {
        this.sub.add(this.clientService.client.subscribe(client => {
            if (client)
                this.client = client;
        }));
    }
    goToBackPage() {
        this.clientService.client.emit(null);
        this.location.back();
    }
    goToInventarioPage(inv) {
        this.router.navigate(['/admin/inventario', inv.id]);
    }
    showPrestamoModal(client) {
        this.modal.modalName = 'prestamoModal';
        this.modal.visible = true;
        this.prestamoService.client.emit(client);
    }
    showClientModal(client) {
        this.modal.modalName = 'clientModal';
        this.modal.visible = true;
        this.clientService.client.emit(client);
    }
};
ClientInformationComponent.ctorParameters = () => [
    { type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] },
    { type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_7__["PrestamoService"] },
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_8__["InventarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"] }
];
ClientInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-information',
        template: _raw_loader_client_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ClientInformationComponent);



/***/ }),

/***/ "SEH1":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/modals/client-modal/client-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClientModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModalComponent", function() { return ClientModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-modal.component.html */ "tXJa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/client.service */ "y6ow");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");








let ClientModalComponent = class ClientModalComponent {
    constructor(clientService, alertService, modalService, fb) {
        this.clientService = clientService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.modalButton = true;
        this.loading = false;
        this.modal = this.modalService.modal;
        this.compressed = true;
        this.submitted = false;
        this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido',
        };
        this.clientForm = this.fb.group({
            name: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minLength({
                        value: 2,
                        message: this.errorMessages.minLength,
                    }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 50,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            birthDate: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required })
                ]
            ],
            phone: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minLength({
                        value: 2,
                        message: this.errorMessages.minLength,
                    }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 20,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            direction: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minLength({
                        value: 2,
                        message: this.errorMessages.minLength,
                    }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 50,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            email: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].email(),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minLength({
                        value: 2,
                        message: this.errorMessages.minLength,
                    }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 30,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            ci: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minLength({
                        value: 2,
                        message: this.errorMessages.minLength,
                    }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 10,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subscribeClient();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshClients() {
        this.sub.add(this.clientService.getClients({ force: true }).subscribe(response => {
            this.clientService.response.emit(response);
        }));
    }
    subscribeClient() {
        this.sub.add(this.clientService.client.subscribe((client) => {
            this.client = client;
            if (client) {
                this.clientForm.controls['name'].setValue(client.name);
                this.clientForm.controls['birthDate'].setValue(client.birthDate);
                this.clientForm.controls['email'].setValue(client.email);
                this.clientForm.controls['phone'].setValue(client.phone);
                this.clientForm.controls['direction'].setValue(client.direction);
                this.clientForm.controls['ci'].setValue(client.ci);
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.clientService.client.emit(null);
    }
    toggleModal() {
        this.modal.visible = true;
        this.modal.modalName = 'clientModal';
    }
    refreshForm() {
        this.clientForm.resetForm();
    }
    successMessage(message = 'creado') {
        this.alertService.alert.fire({
            title: `Cliente ${message} Exitosamente`,
            icon: 'success',
        });
    }
    errorMessage(message) {
        this.alertService.alert.fire({
            title: message,
            icon: 'error',
        });
    }
    save() {
        this.loading = true;
        if (this.client) {
            this.clientService.patchClient(this.clientForm.value, this.client.id).subscribe(response => {
                this.loading = false;
                this.successMessage('editado');
                this.clientService.client.emit(response);
                this.refreshClients();
                this.closeModal();
            }, error => {
                this.loading = false;
                this.errorMessage(error.error.message);
            });
        }
        else {
            this.clientService.postClient(this.clientForm.value).subscribe(response => {
                this.loading = false;
                this.successMessage();
                this.refreshClients();
                this.closeModal();
            }, error => {
                this.loading = false;
                this.errorMessage(error.error.message);
            });
        }
    }
};
ClientModalComponent.ctorParameters = () => [
    { type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ClientModalComponent.propDecorators = {
    modalButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ClientModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-modal',
        template: _raw_loader_client_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ClientModalComponent);



/***/ }),

/***/ "ex35":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/cards/client-list/client-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Clientes</h3>\n    <div class=\"flex items-center justify-start pt-2\">\n      <app-client-modal></app-client-modal>\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n        <form\n          [formGroup]=\"ciForm\"\n        >\n          <input\n            type=\"text\"\n            placeholder=\"Buscar por CI Ej: 836378...\"\n            class=\"border-0 px-3 py-3 placeholder-black-300 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-green-600  w-full ease-linear transition-all duration-150\"\n            formControlName=\"ci\"\n            (ngModelChange)=\"search($event)\"\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n      <ul *ngIf=\"response\" role=\"list\" >\n          <li *ngFor=\"let client of response.items\"\n              class=\"cursor-pointer m-2 w-1/2 py-3 sm:py-4 border-2 border-green-600 hover:border-green-700 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n              (click)=\"goToClientInformation(client)\">\n              <div class=\"flex items-center space-x-4 px-4\">\n                  <div class=\"flex-shrink-0\">\n                    <i class=\"fas fa-user-circle text-center text-6xl\"></i>\n                  </div>\n                  <div class=\"flex-1 min-w-0\">\n                    <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n                        Cliente: {{ client.name }}\n                    </p>\n                    <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n                        CI: {{ client.ci }}\n                    </p>\n                  </div>\n              </div>\n          </li>\n      </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ }),

/***/ "fKQk":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/cards/client-list/client-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-list.component.html */ "ex35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client.service */ "y6ow");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");









let ClientListComponent = class ClientListComponent {
    constructor(clientService, alertService, modalService, router, fb) {
        this.clientService = clientService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.router = router;
        this.fb = fb;
        this.loading = false;
        this.modal = this.modalService.modal;
        this.ciForm = this.fb.group({
            ci: [''],
        });
    }
    ngOnInit() {
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.getClients();
        this.subscriptionClients();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getClients(force = false) {
        this.subscriptions.add(this.clientService.getClients({ force }).subscribe((response) => {
            this.response = response;
            this.loading = false;
        }));
    }
    subscriptionClients() {
        this.subscriptions.add(this.clientService.response.subscribe((response) => {
            if (response.items.length > 0) {
                this.response = response;
                this.loading = false;
            }
        }));
    }
    loadClients() {
        this.loading = true;
        this.getClients(true);
    }
    search(event) {
        this.loading = true;
        this.subscriptions.add(this.clientService
            .getClients({
            ci: this.ciForm.value.ci,
            force: true,
        })
            .subscribe((response) => {
            this.loading = false;
            if (response.items.length === 0) {
                this.alertService.alert.fire({
                    title: 'No hay datos relacionados con la busqueda',
                    icon: 'error',
                });
            }
            else {
                this.response = response;
            }
        }));
    }
    getOnPageResponse(page) {
        this.response = null;
        this.clientService
            .getClients({
            ci: this.ciForm.value.ci,
            page,
            force: true,
        })
            .subscribe((response) => {
            this.clientService.response.emit(response);
        });
    }
    showClientModal(client) {
        console.log('modalEdit');
        this.modal.modalName = 'clientModal';
        this.modal.visible = true;
        this.clientService.client.emit(null);
    }
    showInformationClient(client) {
        console.log(client);
    }
    goToClientInformation(client) {
        this.clientService.client.emit(client);
        this.router.navigate(['/admin/clientes', client.id]);
    }
};
ClientListComponent.ctorParameters = () => [
    { type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxFormBuilder"] }
];
ClientListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-list',
        template: _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ClientListComponent);



/***/ }),

/***/ "i04z":
/*!*******************************************************!*\
  !*** ./src/app/views/admin/clients/clients.module.ts ***!
  \*******************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-routing.module */ "0wy5");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.component */ "HG6Z");
/* harmony import */ var _components_cards_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/client-list/client-list.component */ "fKQk");
/* harmony import */ var _components_modals_client_information_modal_client_information_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modals/client-information-modal/client-information-modal.component */ "IOFN");
/* harmony import */ var _components_modals_new_prestamo_modal_new_prestamo_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/new-prestamo-modal/new-prestamo-modal.component */ "4m8I");
/* harmony import */ var _components_cards_inventario_list_inventario_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/inventario-list/inventario-list.component */ "GPsl");
/* harmony import */ var _components_tabs_tab_client_tab_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs/tab-client/tab-client.component */ "nxlW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "7PmN");
/* harmony import */ var _components_cards_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cards/client-information/client-information.component */ "RSxY");
/* harmony import */ var _components_modals_client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/client-modal/client-modal.component */ "SEH1");












let ClientsModule = class ClientsModule {
};
ClientsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
            _components_cards_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientListComponent"],
            _components_modals_client_information_modal_client_information_modal_component__WEBPACK_IMPORTED_MODULE_5__["ClientInformationModalComponent"],
            _components_modals_new_prestamo_modal_new_prestamo_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewPrestamoModalComponent"],
            _components_cards_inventario_list_inventario_list_component__WEBPACK_IMPORTED_MODULE_7__["InventarioListComponent"],
            _components_tabs_tab_client_tab_client_component__WEBPACK_IMPORTED_MODULE_8__["TabClientComponent"],
            _components_cards_client_information_client_information_component__WEBPACK_IMPORTED_MODULE_10__["ClientInformationComponent"],
            _components_modals_client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_11__["ClientModalComponent"]
        ],
        imports: [_clients_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
    })
], ClientsModule);



/***/ }),

/***/ "nxlW":
/*!****************************************************************************************!*\
  !*** ./src/app/views/admin/clients/components/tabs/tab-client/tab-client.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TabClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabClientComponent", function() { return TabClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_client_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-client.component.html */ "LkBX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TabClientComponent = class TabClientComponent {
    constructor() {
        this.openTab = 1;
    }
    toggleTabs($tabNumber) {
        this.openTab = $tabNumber;
    }
    ngOnInit() {
    }
};
TabClientComponent.ctorParameters = () => [];
TabClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab-client',
        template: _raw_loader_tab_client_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TabClientComponent);



/***/ }),

/***/ "pM4t":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/modals/client-information-modal/client-information-modal.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>client-information-modal works!</p>\n");

/***/ }),

/***/ "tXJa":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/clients/components/modals/client-modal/client-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  *ngIf=\"modalButton\"\n  class=\"bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal()\"\n  type=\"button\">\n  <i class=\"fas fa-plus\"></i> Nuevo\n</button>\n<div *ngIf=\"modal.visible&&modal.modalName==='clientModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           CLIENTE\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"clientForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              [inputForm]=\"clientForm\"\n              inputLabel=\"NOMBRE\"\n              inputType=\"text\"\n              inputPlaceholder=\"Ingrese su nombre...\"\n              inputFormName=\"name\"\n              formControlName=\"name\"\n              [value]=\"clientForm.value.name\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"clientForm\"\n                inputLabel=\"FECHA DE NACIMIENTO\"\n                inputType=\"date\"\n                inputFormName=\"birthDate\"\n                formControlName=\"birthDate\"\n                [value]=\"clientForm.value.birthDate\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"clientForm\"\n                inputLabel=\"CORREO ELECTRONICO\"\n                inputType=\"text\"\n                inputPlaceholder=\"correo@ejemplo.com\"\n                inputFormName=\"email\"\n                formControlName=\"email\"\n                [value]=\"clientForm.value.email\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"clientForm\"\n                inputLabel=\"CELULAR\"\n                inputType=\"text\"\n                inputPlaceholder=\"Ingrese su cel...\"\n                inputFormName=\"phone\"\n                formControlName=\"phone\"\n                [value]=\"clientForm.value.phone\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"clientForm\"\n                inputLabel=\"DOMICILIO\"\n                inputType=\"text\"\n                inputPlaceholder=\"Zona, Av o calle, nro de domicilio\"\n                inputFormName=\"direction\"\n                formControlName=\"direction\"\n                [value]=\"clientForm.value.direction\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"clientForm\"\n                inputLabel=\"CI\"\n                inputType=\"text\"\n                inputPlaceholder=\"Número de carnet\"\n                inputFormName=\"ci\"\n                formControlName=\"ci\"\n                [value]=\"clientForm.value.ci\">\n            </app-input>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!clientForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='clientModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "y6ow":
/*!*************************************************!*\
  !*** ./src/app/core/services/client.service.ts ***!
  \*************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ClientService = class ClientService {
    constructor(http) {
        this.http = http;
        this.client = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getClients({ ci = '', page = 1, force = false }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/clients?ci=${ci}&page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
    getClient(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/clients/${id}`, { headers });
    }
    postClient(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/clients`, body, { headers });
    }
    patchClient(body, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.patch(`${this.baseUrl}/clients/${id}`, body, { headers });
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientService.propDecorators = {
    client: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientService);



/***/ })

}]);
//# sourceMappingURL=clients-clients-module-es2015.js.map