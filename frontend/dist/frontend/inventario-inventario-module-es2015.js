(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventario-inventario-module"],{

/***/ "+WcR":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/inventario.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "4F5n":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/cards/card-inventario-comprado/card-inventario-comprado.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Inventario</h3>\n    <div class=\"flex items-center justify-start pt-2\">.\n      <app-modal-edit-inventario></app-modal-edit-inventario>\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n        <button\n          class=\"bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"openModalInventario()\"\n          type=\"button\">\n          <i class=\"fas fa-plus\"></i> Nuevo\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n    <ul *ngIf=\"response\" role=\"list\" class=\"relative flex flex-wrap\">\n      <div  *ngFor=\"let inventario of response.items; let i=index;\" class=\"w-full lg:w-6/12\">\n        <li\n            class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n            (click)=\"goToInventarioInformation(inventario)\">\n            <div class=\"flex items-center\">\n                <div class=\"text-3xl p-4 bg-green-600\">\n                  {{inventario.id}}\n                </div>\n                <div  class=\"flex-1 min-w-0 mx-6 flex flex-col\">\n                  <p class=\"text-xl font-medium truncate dark:text-white\">\n                    {{ inventario.descripcion }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'JOYA'\">\n                    {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'ARTICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'VEHICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n                  </p>\n                    <div\n                    *ngFor=\"let inv of inventario.inventario\"\n                    class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n\n\n                  </div>\n                  <p class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    Fecha Compra: {{ inventario.fechaCompra | date:'mediumDate' }}\n                  </p>\n                </div>\n                <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                  <p>\n                    BOL. {{ inventario.costoCompra }}\n                  </p>\n                  <p class=\"text-sm\">\n                    {{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n                  </p>\n                </div>\n            </div>\n        </li>\n      </div>\n  </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ }),

/***/ "5fjD":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/pdfs/pdf-devolucion/pdf-devolucion.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  [popper]=\"pagoModal\"\n  [popperTrigger]=\"'hover'\"\n  [popperPlacement]=\"'top'\"\n  [popperPositionFixed]=\"true\"\n  class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\">\n  <i class=\"fas fa-user\"></i>\n</button>\n<popper-content #pagoModal>\n  <p class=\"bold\">Imprimir Boleta de devolución</p>\n</popper-content>\n");

/***/ }),

/***/ "9Gew":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/cards/card-inventario-information/card-inventario-information.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Información Inventario Nº {{ inventario?.id }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n        <app-modal-delete-picture></app-modal-delete-picture>\n        <app-modal-venta-inventario></app-modal-venta-inventario>\n        <app-modal-devolver-inventario></app-modal-devolver-inventario>\n        <app-modal-edit-inventario [isPrestamo]=\"true\"></app-modal-edit-inventario>\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"flow-root w-auto flex flex-col justify-center\">\n      <div *ngIf=\"inventario\" class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n        <div class=\"flex items-center space-x-4 px-4 py-2 bg-blueGray-600 \">\n            <div class=\"flex-1 min-w-0 text-white\">\n              <p\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.descripcion }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'JOYA'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'ARTICULO'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'VEHICULO'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n              </p>\n            </div>\n            <button\n              *ngIf=\"inventario.estado==='EMPENADO'|| inventario.estado==='COMPRADO'\"\n              [popper]=\"venderItem\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              (click)=\"openVentaModal()\">\n              <i class=\"fas fa-tag\"></i>\n            </button>\n            <popper-content #venderItem>\n              <p class=\"bold\">Vender Item</p>\n            </popper-content>\n            <button\n              *ngIf=\"inventario.estado==='EMPENADO'\"\n              [popper]=\"devolverItem\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              (click)=\"openDevolucionModal()\"\n              >\n              <i class=\"fas fa-box-open\"></i>\n            </button>\n            <popper-content #devolverItem>\n              <p class=\"bold\">Devolver Item</p>\n            </popper-content>\n            <app-pdf-devolucion\n              *ngIf=\"inventario.estado==='DEVUELTO'\"\n              [inventario]=\"inventario\"\n            ></app-pdf-devolucion>\n            <button\n              [popper]=\"editarItem\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              (click)=\"openEditModal()\"\n              >\n              <i class=\"fas fa-edit\"></i>\n            </button>\n            <popper-content #editarItem>\n              <p class=\"bold\">Editar Item</p>\n            </popper-content>\n        </div>\n\n        <div class=\"flex items-center space-x-4 px-4 \">\n          <div class=\"flex-1 min-w-0 py-8\">\n\n            <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n              Dueño original: {{ inventario.prestamo?.client?.name }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Descripción: {{ inventario.descripcion }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Observaciones: {{ inventario.observacion }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Avalúo: {{ inventario.precioAvaluo }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Prestamo: Bol. {{ inventario.costoPrestamo }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Precio de Venta: Bol. {{ inventario.precioVenta}}\n            </p>\n\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Precio de Compra: Bol. {{ inventario.costoCompra}}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Precio de Venta: Bol. {{ inventario.precioVenta}}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Fecha de Venta: {{ inventario.fechaVenta| date:'medium' }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Fecha de Compra: {{ inventario.fechaCompra| date:'medium' }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Fecha de Devolucion: {{ inventario.fechaDevolucion| date:'medium' }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Estado:{{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n            </p>\n          </div>\n        </div>\n      </div>\n   </div>\n  </div>\n\n  <form\n    [formGroup]=\"pictureForm\"\n    (ngSubmit)=\"savePicture()\"\n  >\n\n    <div class=\"my-4 relative p-6 flex flex-wrap\">\n\n      <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n        <label\n          for=\"image\"\n          class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\">\n          Fotografia\n        </label>\n        <h4 *ngIf=\"!comprimido\" class=\"text-xs font-semibold\">\n          Comprimiendo archivo espere porfavor...\n        </h4>\n        <input\n          type=\"file\"\n          class=\"border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n          formControlName=\"picture\"\n          (change)=\"onFileChange($event)\">\n        <button\n          [disabled]=\"!pictureForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar\n        </button>\n      </div>\n    </div>\n  </form>\n<div *ngIf=\"pictures\">\n\n  <div  class=\"grid lg:grid-cols-4 sm:grid-cols-2 gap-4 flex items-center ml-6 w-auto\">\n    <div *ngFor=\"let picture of pictures\" class=\"mb-4 relative \">\n        <button\n          (click)=\"openDeleteModal(picture)\"\n          class=\"absolute top-0 right-0 mx-4 bg-none text-red-600 active:text-red-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n          type=\"button\"\n          >\n          <i class=\"fas fa-trash\"></i>\n        </button>\n        <img src=\"{{picture.path?baseUrl+'/'+picture.path:'assets/img/image-not-found.png'}}\" class=\"w-96 h-auto object-fit rounded-lg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "A749":
/*!*********************************************************************!*\
  !*** ./src/app/views/admin/inventario/inventario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InventarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioRoutingModule", function() { return InventarioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cards_card_inventario_information_card_inventario_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/card-inventario-information/card-inventario-information.component */ "l/bB");
/* harmony import */ var _components_tabs_tab_inventario_tab_inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/tab-inventario/tab-inventario.component */ "ECke");
/* harmony import */ var _inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventario.component */ "sYDe");






const routes = [{
        path: '',
        component: _inventario_component__WEBPACK_IMPORTED_MODULE_5__["InventarioComponent"],
        children: [
            {
                path: ':inventarioId',
                component: _components_cards_card_inventario_information_card_inventario_information_component__WEBPACK_IMPORTED_MODULE_3__["CardInventarioInformationComponent"]
            },
            {
                path: '**',
                component: _components_tabs_tab_inventario_tab_inventario_component__WEBPACK_IMPORTED_MODULE_4__["TabInventarioComponent"]
            }
        ]
    }];
let InventarioRoutingModule = class InventarioRoutingModule {
};
InventarioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InventarioRoutingModule);



/***/ }),

/***/ "E7Bd":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/cards/card-inventario-comprado/card-inventario-comprado.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CardInventarioCompradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInventarioCompradoComponent", function() { return CardInventarioCompradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_inventario_comprado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-inventario-comprado.component.html */ "4F5n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");







let CardInventarioCompradoComponent = class CardInventarioCompradoComponent {
    constructor(inventarioService, modalService, router) {
        this.inventarioService = inventarioService;
        this.modalService = modalService;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.getInventarioComprado(true);
        this.subscribeInventarios();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventarioComprado(force = false) {
        this.inventarioService.getInventarioByEstado({ force }).subscribe((response) => {
            this.response = response;
            this.loading = false;
        });
    }
    subscribeInventarios() {
        this.sub.add(this.inventarioService.response.subscribe((response) => {
            if (response.items.length > 0) {
                this.response = response;
                this.loading = false;
            }
        }));
    }
    getOnPageResponse(page) {
        this.response = null;
        this.inventarioService
            .getInventarioByEstado({
            force: true,
            page
        })
            .subscribe((response) => {
            this.inventarioService.response.emit(response);
        });
    }
    goToInventarioInformation(inventario) {
        this.inventarioService.inventario.emit(inventario);
        this.router.navigate(['/admin/inventario', inventario.id]);
    }
    openModalInventario() {
        this.modalService.modal.modalName = 'inventarioModal';
        this.modalService.modal.visible = true;
    }
};
CardInventarioCompradoComponent.ctorParameters = () => [
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_6__["InventarioService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CardInventarioCompradoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-inventario-comprado',
        template: _raw_loader_card_inventario_comprado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardInventarioCompradoComponent);



/***/ }),

/***/ "ECke":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/tabs/tab-inventario/tab-inventario.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TabInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabInventarioComponent", function() { return TabInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-inventario.component.html */ "HGiD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TabInventarioComponent = class TabInventarioComponent {
    constructor() {
        this.openTab = 1;
    }
    toggleTabs($tabNumber) {
        this.openTab = $tabNumber;
    }
    ngOnInit() {
    }
};
TabInventarioComponent.ctorParameters = () => [];
TabInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab-inventario',
        template: _raw_loader_tab_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TabInventarioComponent);



/***/ }),

/***/ "HGiD":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/tabs/tab-inventario/tab-inventario.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words  w-full mb-6  rounded\">\n  <div class=\"w-full\">\n    <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row\">\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(1)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 1, 'text-white bg-sky-700': openTab === 1}\">\n          Empeñados\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(2)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 2, 'text-white bg-sky-700': openTab === 2}\">\n          Devueltos\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(3)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 3, 'text-white bg-sky-700': openTab === 3}\">\n          Vendidos\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(4)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 4, 'text-white bg-sky-700': openTab === 4}\">\n          Adquisiciones\n        </a>\n      </li>\n\n    </ul>\n    <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n      <div class=\"px-4 py-5 flex-auto\">\n        <div class=\"tab-content tab-space\">\n          <div *ngIf=\"openTab === 1\">\n            <app-card-inventario-list [estado]=\"'EMPENADO'\"></app-card-inventario-list>\n          </div>\n          <div *ngIf=\"openTab === 2\">\n            <app-card-inventario-list [estado]=\"'DEVUELTO'\"></app-card-inventario-list>\n          </div>\n          <div *ngIf=\"openTab === 3\">\n            <app-card-inventario-list [estado]=\"'VENDIDO'\"></app-card-inventario-list>\n          </div>\n          <div *ngIf=\"openTab === 4\">\n            <app-card-inventario-comprado></app-card-inventario-comprado>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "PVxP":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/modals/modal-devolver-inventario/modal-devolver-inventario.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"modal.visible&&modal.modalName==='inventarioDevolucionModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div *ngIf=\"inventario\" class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           DEVOLUCIÓN INVENTARIO\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <p> ¿ Desea devolver el inventario Nº {{ inventario.id }} {{ inventario.descripcion }} ?</p>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          [disabled]=\"loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"save()\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='inventarioDevolucionModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "SGPo":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/modals/modal-devolver-inventario/modal-devolver-inventario.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ModalDevolverInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDevolverInventarioComponent", function() { return ModalDevolverInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_devolver_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-devolver-inventario.component.html */ "PVxP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");







let ModalDevolverInventarioComponent = class ModalDevolverInventarioComponent {
    constructor(inventarioService, alertService, modalService) {
        this.inventarioService = inventarioService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.loading = false;
        this.modal = this.modalService.modal;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscribeInventario();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    subscribeInventario() {
        this.sub.add(this.inventarioService.inventario.subscribe((inventario) => {
            if (inventario) {
                this.inventario = inventario;
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
    }
    save() {
        this.loading = true;
        const body = {
            estado: 'DEVUELTO'
        };
        this.sub.add(this.inventarioService.patchInventario(body, this.inventario.id).subscribe((response) => {
            this.loading = false;
            this.alertService.triggerMessage('Inventario Devuelto Exitosamente', 'success');
            this.refreshInventario();
            this.closeModal();
        }, (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
        }));
    }
    refreshInventario() {
        this.sub.add(this.inventarioService.getInventarioById(this.inventario.id).subscribe((inventario) => {
            if (inventario) {
                this.inventarioService.inventario.emit(inventario);
            }
        }));
    }
};
ModalDevolverInventarioComponent.ctorParameters = () => [
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_5__["InventarioService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }
];
ModalDevolverInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-devolver-inventario',
        template: _raw_loader_modal_devolver_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalDevolverInventarioComponent);



/***/ }),

/***/ "TQF6":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/modals/modal-venta-inventario/modal-venta-inventario.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ModalVentaInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVentaInventarioComponent", function() { return ModalVentaInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_venta_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-venta-inventario.component.html */ "uSkj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");








let ModalVentaInventarioComponent = class ModalVentaInventarioComponent {
    constructor(inventarioService, alertService, modalService, fb) {
        this.inventarioService = inventarioService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.loading = false;
        this.modal = this.modalService.modal;
        this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido',
        };
        this.inventarioForm = this.fb.group({
            precioVenta: [
                '',
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required })
            ]
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subscribeInventario();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    subscribeInventario() {
        this.sub.add(this.inventarioService.inventario.subscribe((inventario) => {
            if (inventario) {
                this.inventario = inventario;
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.inventarioService.inventario.emit(null);
    }
    save() {
        this.loading = true;
        const body = {
            estado: 'VENDIDO',
            precioVenta: +this.inventarioForm.value.precioVenta
        };
        this.sub.add(this.inventarioService.ventaInventario(body, this.inventario.id).subscribe((response) => {
            this.loading = false;
            this.alertService.triggerMessage('Inventario Vendio exitosamente', 'success');
            this.refreshInventario();
            this.closeModal();
        }, (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
        }));
    }
    refreshInventario() {
        this.sub.add(this.inventarioService.getInventarioById(this.inventario.id).subscribe((inventario) => {
            if (inventario) {
                this.inventarioService.inventario.emit(inventario);
            }
        }));
    }
};
ModalVentaInventarioComponent.ctorParameters = () => [
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_6__["InventarioService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ModalVentaInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-venta-inventario',
        template: _raw_loader_modal_venta_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalVentaInventarioComponent);



/***/ }),

/***/ "WYRb":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/cards/card-inventario-list/card-inventario-list.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CardInventarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInventarioListComponent", function() { return CardInventarioListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_inventario_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-inventario-list.component.html */ "zbKm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");









let CardInventarioListComponent = class CardInventarioListComponent {
    constructor(inventarioService, modalService, alertService, router, fb) {
        this.inventarioService = inventarioService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.router = router;
        this.fb = fb;
        this.estado = '';
        this.loading = false;
        this.ciForm = this.fb.group({
            ci: [''],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.getInventario(true);
        this.subscribeInventarios();
        if (this.estado === 'VENDIDO') {
            this.getInventarioWhitOutPrestamo();
            this.subscribeInventarioWhitOutPrestamo();
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventario(force = false) {
        this.inventarioService.getInventario({ force, estadoInv: this.estado }).subscribe((response) => {
            this.response = response;
            this.loading = false;
        });
    }
    getInventarioWhitOutPrestamo() {
        this.sub.add(this.inventarioService.getInventarioByEstado({ force: true, estadoInv: this.estado }).subscribe((response) => {
            this.response2 = response;
        }));
    }
    subscribeInventarios() {
        this.sub.add(this.inventarioService.response.subscribe((response) => {
            if (response.items.length > 0) {
                this.response = response;
                this.loading = false;
            }
        }));
    }
    subscribeInventarioWhitOutPrestamo() {
        this.sub.add(this.inventarioService.response2.subscribe((response) => {
            if (response.items.length > 0) {
                this.response2 = response;
                this.loading = false;
            }
        }));
    }
    search(event) {
        this.loading = true;
        this.sub.add(this.inventarioService
            .getInventario({
            clientCi: this.ciForm.value.ci,
            force: true,
            estadoInv: this.ciForm.value.ci ? '' : this.estado,
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
        this.inventarioService
            .getInventario({
            clientCi: this.ciForm.value.ci,
            force: true,
            estadoInv: this.ciForm.value.ci ? '' : this.estado,
            page
        })
            .subscribe((response) => {
            this.inventarioService.response.emit(response);
        });
    }
    getOnPageResponseWhitOutPrestamo(page) {
        this.response2 = null;
        this.inventarioService
            .getInventarioByEstado({
            force: true,
            estadoInv: this.estado,
            page
        })
            .subscribe((response) => {
            this.inventarioService.response2.emit(response);
        });
    }
    goToInventarioInformation(inventario) {
        this.inventarioService.inventario.emit(inventario);
        this.router.navigate(['/admin/inventario', inventario.id]);
    }
    openModalInventario() {
        this.modalService.modal.modalName = 'inventarioModal';
        this.modalService.modal.visible = true;
    }
};
CardInventarioListComponent.ctorParameters = () => [
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_8__["InventarioService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxFormBuilder"] }
];
CardInventarioListComponent.propDecorators = {
    estado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardInventarioListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-inventario-list',
        template: _raw_loader_card_inventario_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardInventarioListComponent);



/***/ }),

/***/ "Wpvx":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/modals/modal-delete-picture/modal-delete-picture.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ModalDeletePictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDeletePictureComponent", function() { return ModalDeletePictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_delete_picture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-delete-picture.component.html */ "sL2+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_picture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/picture.service */ "ojyu");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let ModalDeletePictureComponent = class ModalDeletePictureComponent {
    constructor(pictureService, alertService, modalService) {
        this.pictureService = pictureService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.publicUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].publicUrl;
        this.loading = false;
        this.modal = this.modalService.modal;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscribePicture();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshPictures() {
        this.sub.add(this.pictureService.getPictures(this.picture.inventario.id).subscribe(pictures => {
            console.log(pictures);
            this.pictureService.pictures.emit(pictures);
        }));
    }
    subscribePicture() {
        this.sub.add(this.pictureService.picture.subscribe((picture) => {
            this.picture = picture;
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.pictureService.picture.emit(null);
    }
    toggleModal() {
        this.modal.visible = true;
        this.modal.modalName = 'pictureDeleteModal';
    }
    save() {
        this.loading = true;
        this.pictureService.deletePicture(this.picture.id).subscribe(response => {
            this.loading = false;
            this.alertService.triggerMessage('Imagen Eliminada exitosamente', 'success');
            this.refreshPictures();
            this.closeModal();
        }, error => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
            this.closeModal();
        });
    }
};
ModalDeletePictureComponent.ctorParameters = () => [
    { type: src_app_core_services_picture_service__WEBPACK_IMPORTED_MODULE_5__["PictureService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }
];
ModalDeletePictureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-delete-picture',
        template: _raw_loader_modal_delete_picture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalDeletePictureComponent);



/***/ }),

/***/ "cnw4":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/pdfs/pdf-devolucion/pdf-devolucion.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PdfDevolucionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDevolucionComponent", function() { return PdfDevolucionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_devolucion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-devolucion.component.html */ "5fjD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
let PdfDevolucionComponent = class PdfDevolucionComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    ngOnInit() { }
    exportToPdf() {
        const pago = {
            // a string or { width: number, height: number }
            pageSize: "LETTER",
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: "portrait",
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [50, 35, 50, 35],
            background: function (currentPage, pageSize) {
                return { image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__["marcaAgua"], width: 550, absolutePosition: { x: 50, y: 150 }, opacity: 0.2 };
            },
            content: [
                {
                    width: 90,
                    height: 40,
                    fontSize: 9,
                    margin: [22, 0, 0, 0],
                    image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__["logoCaysool"],
                },
                {
                    text: "DOCUMENTO DE ENTREGA DE GARANTIA\n\n",
                    fontSize: 14,
                    alignment: "center",
                    bold: true,
                },
                {
                    text: "A continuacion se detallara las caracteristicas de la prenda empeñada para su entrega respectiva.\n\n",
                    fontSize: 12,
                    alignment: "justify",
                },
                //monto de prestamo
                {
                    columns: [
                        { width: "*", text: "" },
                        {
                            width: "auto",
                            table: {
                                body: [
                                    [
                                        { text: "Cliente:", style: "tableHeader" },
                                        { text: `${this.inventario.prestamo.client.name}`, style: "tableHeader" },
                                    ],
                                    ["Prenda(s)", `${this.inventario.descripcion}`],
                                    ["Marca:", `${this.inventario.marca}`],
                                    ["Moldelo:", `${this.inventario.modelo}`],
                                    ["Metal:", `${this.inventario.metal}`],
                                    ["Peso (gr.):", `${this.inventario.peso}`],
                                    ["Observaciones:", `${this.inventario.observacion}`],
                                    ["Placa:", `${this.inventario.placa}`],
                                    ["Linea:", `${this.inventario.linea}`],
                                    ["Deudas:", `${this.inventario.deuda}`],
                                ],
                                alignment: "center",
                            },
                        },
                        { width: "*", text: "" },
                    ],
                },
                "  \n  ",
                // interes del panel de control
                //fecha del dia de prestamo
                `Fecha de la Entrega: La Paz – El Alto ${this.datePipe.transform(this.inventario.fechaDevolucion, 'mediumDate')} \n\n\n\n\n\n\n\n`,
                //numero del CI vendedor y comprador
                {
                    alignment: "center",
                    columns: [
                        {
                            text: `……………………………………………\nCI: ${this.inventario.prestamo.client.ci}\nRECOGI CONFORME`,
                        },
                        //aqui se debe poner el ci del administrador
                        {
                            columns: [
                                { width: "*", text: "" },
                                {
                                    width: "auto",
                                    table: {
                                        heights: [120],
                                        widths: [70],
                                        body: [[{ text: "Huella" }]],
                                        alignment: "center",
                                    },
                                },
                                { width: "*", text: "" },
                            ],
                        },
                    ],
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: "justify",
                },
                subheader: {
                    fontSize: 15,
                    bold: true,
                },
                quote: {
                    italics: true,
                },
                small: {
                    fontSize: 8,
                },
                tableExample: {
                    margin: [0, 5, 0, 15],
                },
            },
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(pago).open();
    }
};
PdfDevolucionComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
PdfDevolucionComponent.propDecorators = {
    inventario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PdfDevolucionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pdf-devolucion",
        template: _raw_loader_pdf_devolucion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PdfDevolucionComponent);



/***/ }),

/***/ "jz+1":
/*!*************************************************************!*\
  !*** ./src/app/views/admin/inventario/inventario.module.ts ***!
  \*************************************************************/
/*! exports provided: InventarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioModule", function() { return InventarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inventario_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventario-routing.module */ "A749");
/* harmony import */ var _inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventario.component */ "sYDe");
/* harmony import */ var _components_tabs_tab_inventario_tab_inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/tab-inventario/tab-inventario.component */ "ECke");
/* harmony import */ var _components_cards_card_inventario_list_card_inventario_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/card-inventario-list/card-inventario-list.component */ "WYRb");
/* harmony import */ var _components_cards_card_inventario_information_card_inventario_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cards/card-inventario-information/card-inventario-information.component */ "l/bB");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "7PmN");
/* harmony import */ var _components_modals_modal_delete_picture_modal_delete_picture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modals/modal-delete-picture/modal-delete-picture.component */ "Wpvx");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-img-max */ "4+Eq");
/* harmony import */ var _components_modals_modal_venta_inventario_modal_venta_inventario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/modal-venta-inventario/modal-venta-inventario.component */ "TQF6");
/* harmony import */ var _components_modals_modal_devolver_inventario_modal_devolver_inventario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/modal-devolver-inventario/modal-devolver-inventario.component */ "SGPo");
/* harmony import */ var _components_modals_modal_edit_inventario_modal_edit_inventario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modals/modal-edit-inventario/modal-edit-inventario.component */ "s/tV");
/* harmony import */ var _components_cards_card_inventario_comprado_card_inventario_comprado_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cards/card-inventario-comprado/card-inventario-comprado.component */ "E7Bd");
/* harmony import */ var _components_pdfs_pdf_devolucion_pdf_devolucion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdfs/pdf-devolucion/pdf-devolucion.component */ "cnw4");















let InventarioModule = class InventarioModule {
};
InventarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _inventario_component__WEBPACK_IMPORTED_MODULE_3__["InventarioComponent"],
            _components_tabs_tab_inventario_tab_inventario_component__WEBPACK_IMPORTED_MODULE_4__["TabInventarioComponent"],
            _components_cards_card_inventario_list_card_inventario_list_component__WEBPACK_IMPORTED_MODULE_5__["CardInventarioListComponent"],
            _components_cards_card_inventario_information_card_inventario_information_component__WEBPACK_IMPORTED_MODULE_6__["CardInventarioInformationComponent"],
            _components_modals_modal_delete_picture_modal_delete_picture_component__WEBPACK_IMPORTED_MODULE_8__["ModalDeletePictureComponent"],
            _components_modals_modal_venta_inventario_modal_venta_inventario_component__WEBPACK_IMPORTED_MODULE_10__["ModalVentaInventarioComponent"],
            _components_modals_modal_devolver_inventario_modal_devolver_inventario_component__WEBPACK_IMPORTED_MODULE_11__["ModalDevolverInventarioComponent"],
            _components_modals_modal_edit_inventario_modal_edit_inventario_component__WEBPACK_IMPORTED_MODULE_12__["ModalEditInventarioComponent"],
            _components_cards_card_inventario_comprado_card_inventario_comprado_component__WEBPACK_IMPORTED_MODULE_13__["CardInventarioCompradoComponent"],
            _components_pdfs_pdf_devolucion_pdf_devolucion_component__WEBPACK_IMPORTED_MODULE_14__["PdfDevolucionComponent"],
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _inventario_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventarioRoutingModule"], ng2_img_max__WEBPACK_IMPORTED_MODULE_9__["Ng2ImgMaxModule"]],
    })
], InventarioModule);



/***/ }),

/***/ "l/bB":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/cards/card-inventario-information/card-inventario-information.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: CardInventarioInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInventarioInformationComponent", function() { return CardInventarioInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_inventario_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-inventario-information.component.html */ "9Gew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");
/* harmony import */ var src_app_core_services_picture_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/picture.service */ "ojyu");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-img-max */ "4+Eq");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");













let CardInventarioInformationComponent = class CardInventarioInformationComponent {
    constructor(pictureService, inventarioService, modalService, alertService, route, location, ng2ImgMax, fb) {
        this.pictureService = pictureService;
        this.inventarioService = inventarioService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.route = route;
        this.location = location;
        this.ng2ImgMax = ng2ImgMax;
        this.fb = fb;
        this.loading = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].publicUrl;
        this.comprimido = true;
        this.amorizaciones = [];
        this.modal = this.modalService.modal;
        this.pictureForm = this.fb.group({
            picture: [''],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.inventarioId = this.route.snapshot.paramMap.get('inventarioId');
        this.getInventarioById();
        this.getPicturesByInventarioId();
        this.subscribePictures();
        this.subscribeInventario();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventarioById() {
        this.sub.add(this.inventarioService.getInventarioById(+this.inventarioId).subscribe(inventario => {
            this.inventario = inventario;
        }));
    }
    subscribeInventario() {
        this.sub.add(this.inventarioService.inventario.subscribe((inventario) => {
            if (inventario) {
                this.inventario = inventario;
            }
        }));
    }
    getPicturesByInventarioId() {
        this.sub.add(this.pictureService.getPictures(+this.inventarioId).subscribe(pictures => {
            this.pictures = pictures;
        }));
    }
    subscribePictures() {
        this.sub.add(this.pictureService.pictures.subscribe(pictures => {
            if (pictures) {
                this.pictures = pictures;
            }
        }));
    }
    openDeleteModal(picture) {
        this.modal.modalName = 'pictureDeleteModal';
        this.modal.visible = true;
        this.pictureService.picture.emit(picture);
    }
    goToBackPage() {
        this.location.back();
    }
    savePicture() {
        this.loading = true;
        const formData = this.pictureForm.toFormData();
        this.pictureService.postPicture(formData, +this.inventarioId).subscribe(response => {
            this.successMessage('creada');
            this.getPicturesByInventarioId();
            this.loading = false;
        }, error => {
            this.errorMessage(error.error.message);
            this.loading = false;
        });
    }
    successMessage(message = 'creado') {
        this.alertService.alert.fire({
            title: `Imagen ${message} Exitosamente`,
            icon: 'success',
        });
    }
    errorMessage(message) {
        this.alertService.alert.fire({
            title: message,
            icon: 'error',
        });
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.compressFile(file);
        }
    }
    compressFile(image) {
        this.comprimido = false;
        this.ng2ImgMax.resizeImage(image, 400, 300).subscribe(result => {
            const compressedFile = new File([result], result.name);
            this.comprimido = true;
            this.pictureForm.patchValue({
                picture: compressedFile,
            });
        });
    }
    openVentaModal() {
        this.modal.modalName = 'inventarioVentaModal';
        this.modal.visible = true;
        this.inventarioService.inventario.emit(this.inventario);
    }
    openDevolucionModal() {
        this.modal.modalName = 'inventarioDevolucionModal';
        this.modal.visible = true;
        this.inventarioService.inventario.emit(this.inventario);
    }
    openEditModal() {
        this.modal.modalName = 'inventarioModal';
        this.modal.visible = true;
        this.inventarioService.inventario.emit(this.inventario);
    }
};
CardInventarioInformationComponent.ctorParameters = () => [
    { type: src_app_core_services_picture_service__WEBPACK_IMPORTED_MODULE_8__["PictureService"] },
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_7__["InventarioService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_11__["Ng2ImgMaxService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_10__["RxFormBuilder"] }
];
CardInventarioInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-inventario-information',
        template: _raw_loader_card_inventario_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardInventarioInformationComponent);



/***/ }),

/***/ "miA1":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/modals/modal-edit-inventario/modal-edit-inventario.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"modal.visible&&modal.modalName==='inventarioModal'\" class=\"justify-center items-center overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 inset-0 z-50 grid\">\n  <div class=\"relative px-4 w-full max-w-6xl h-full md:h-auto\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Inventario {{ inventario? inventario.id : ''}}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"inventarioForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 flex flex-wrap w-full\">\n\n          <div class=\"w-full px-4 mb-2\">\n            <app-input\n              [inputForm]=\"inventarioForm\"\n              inputLabel=\"OBSERVACIONES\"\n              inputType=\"text\"\n              inputFormName=\"observacion\"\n              formControlName=\"observacion\"\n              inputPlaceholder=\"Estado actual, marcas de deterioro, defectos\"\n              [value]=\"inventarioForm.value.observacion\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full px-4 mb-2\">\n            <app-input\n              [inputForm]=\"inventarioForm\"\n              inputLabel=\"DESCRIPCIÓN\"\n              inputType=\"text\"\n              inputFormName=\"descripcion\"\n              formControlName=\"descripcion\"\n              inputPlaceholder=\"Descripción del inventario\"\n              [value]=\"inventarioForm.value.descripcion\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              [inputForm]=\"inventarioForm\"\n              inputLabel=\"AVALÚO\"\n              inputType=\"number\"\n              inputFormName=\"precioAvaluo\"\n              formControlName=\"precioAvaluo\"\n              inputPlaceholder=\"Valor de apreciacion de la prenda\"\n              [value]=\"inventarioForm.value.precioAvaluo\">\n            </app-input>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              *ngIf=\"inventarioForm.value.estado === 'COMPRADO'\"\n              [inputForm]=\"inventarioForm\"\n              inputLabel=\"PRECIO COMPRA\"\n              inputType=\"number\"\n              inputFormName=\"costoCompra\"\n              formControlName=\"costoCompra\"\n              inputPlaceholder=\"Precio de compra de este inventario\"\n              [value]=\"inventarioForm.value.costoCompra\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              *ngIf=\"inventarioForm.value.estado === 'EMPENADO'\"\n              [inputForm]=\"inventarioForm\"\n              inputLabel=\"PRECIO PRESTAMO\"\n              inputType=\"number\"\n              inputFormName=\"costoPrestamo\"\n              formControlName=\"costoPrestamo\"\n              inputPlaceholder=\"Monto prestamo por este inventario\"\n              [value]=\"inventarioForm.value.costoPrestamo\">\n            </app-input>\n          </div>\n          <div class=\"w-full px-4 mb-2\">\n            <app-select\n              [options]=\"inventarioOption\"\n              inputLabel=\"TIPO DE INVENTARIO\"\n              inputFormName=\"tipo\"\n              formControlName=\"tipo\"\n              [inputForm]=\"inventarioForm\"\n              [value]=\"inventarioForm.value.tipo\">\n            </app-select>\n          </div>\n          <div\n            *ngIf=\"inventarioForm.value.tipo==='VEHICULO'\"\n            class=\"w-full flex flex-wrap mb-2\">\n            <div class=\"w-full lg:w-6/12  px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"MARCA\"\n                inputType=\"text\"\n                inputFormName=\"marca\"\n                formControlName=\"marca\"\n                inputPlaceholder=\"Toyota, Nissan, Susuki\"\n                [value]=\"inventarioForm.value.marca\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12  px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"MODELO\"\n                inputType=\"text\"\n                inputFormName=\"modelo\"\n                formControlName=\"modelo\"\n                inputPlaceholder=\"Ingrese el año\"\n                [value]=\"inventarioForm.value.modelo\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12  px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"LINEA\"\n                inputType=\"text\"\n                inputFormName=\"linea\"\n                formControlName=\"linea\"\n                inputPlaceholder=\"Corolla, Ipsun, Caldina\"\n                [value]=\"inventarioForm.value.linea\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12  px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"PLACA\"\n                inputType=\"text\"\n                inputFormName=\"placa\"\n                formControlName=\"placa\"\n                inputPlaceholder=\"Placa del vehiculo\"\n                [value]=\"inventarioForm.value.placa\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12  px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"NÚMERO DE CHASIS\"\n                inputType=\"text\"\n                inputFormName=\"chasis\"\n                formControlName=\"chasis\"\n                inputPlaceholder=\"Número de serie\"\n                [value]=\"inventarioForm.value.chasis\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"DEUDAS RUAT\"\n                inputType=\"text\"\n                inputFormName=\"ruat\"\n                formControlName=\"ruat\"\n                inputPlaceholder=\"Deudas de vehiculo\"\n                [value]=\"inventarioForm.value.ruat\">\n              </app-input>\n            </div>\n\n          </div>\n\n          <div\n            *ngIf=\"inventarioForm.value.tipo==='JOYA'\"\n            class=\"w-full flex flex-wrap mb-2\">\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"METAL\"\n                inputType=\"text\"\n                inputFormName=\"metal\"\n                formControlName=\"metal\"\n                inputPlaceholder=\"Oro, Plata, Fantasia\"\n                [value]=\"inventarioForm.value.metal\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"PESO EN GRAMOS\"\n                inputType=\"text\"\n                inputFormName=\"peso\"\n                formControlName=\"peso\"\n                inputPlaceholder=\"100 gr\"\n                [value]=\"inventarioForm.value.peso\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"PUREZA\"\n                inputType=\"text\"\n                inputFormName=\"pureza\"\n                formControlName=\"pureza\"\n                inputPlaceholder=\"Grado de pureza\"\n                [value]=\"inventarioForm.value.pureza\">\n              </app-input>\n            </div>\n          </div>\n\n          <div\n            *ngIf=\"inventarioForm.value.tipo==='ARTICULO'\"\n            class=\"w-full flex flex-wrap mb-2\">\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"MARCA\"\n                inputType=\"text\"\n                inputFormName=\"marca\"\n                formControlName=\"marca\"\n                inputPlaceholder=\"Nombre del fabricante\"\n                [value]=\"inventarioForm.value.marca\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"MODELO\"\n                inputType=\"text\"\n                inputFormName=\"modelo\"\n                formControlName=\"modelo\"\n                inputPlaceholder=\"Nombre del producto\"\n                [value]=\"inventarioForm.value.modelo\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"inventarioForm\"\n                inputLabel=\"SERIE\"\n                inputType=\"text\"\n                inputFormName=\"serie\"\n                formControlName=\"serie\"\n                inputPlaceholder=\"Número de serie\"\n                [value]=\"inventarioForm.value.serie\">\n              </app-input>\n            </div>\n          </div>\n\n        <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n          <button\n            class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            (click)=\"closeModal()\"\n            type=\"button\"\n          >\n            Cancelar\n          </button>\n          <button\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"button\"\n            (click)=\"refreshForm()\"\n          >\n            Limpiar\n          </button>\n          <button\n            [disabled]=\"!inventarioForm.valid || loading \"\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n          </button>\n        </div>\n\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='inventarioModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "ojyu":
/*!**************************************************!*\
  !*** ./src/app/core/services/picture.service.ts ***!
  \**************************************************/
/*! exports provided: PictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureService", function() { return PictureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let PictureService = class PictureService {
    constructor(http) {
        this.http = http;
        this.picture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pictures = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getPictures(idInventario) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http.get(`${this.baseUrl}/picture/${idInventario}`, { headers });
    }
    postPicture(body, idInventario) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/picture/${idInventario}`, body, { headers });
    }
    deletePicture(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.delete(`${this.baseUrl}/picture/${id}`, { headers });
    }
};
PictureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PictureService.propDecorators = {
    picture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pictures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PictureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PictureService);



/***/ }),

/***/ "s/tV":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/admin/inventario/components/modals/modal-edit-inventario/modal-edit-inventario.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ModalEditInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditInventarioComponent", function() { return ModalEditInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_edit_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-edit-inventario.component.html */ "miA1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/inventario.service */ "9bkF");








let ModalEditInventarioComponent = class ModalEditInventarioComponent {
    constructor(inventarioService, alertService, modalService, fb) {
        this.inventarioService = inventarioService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.isPrestamo = false;
        this.loading = false;
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
        this.inventarioForm = this.fb.group({
            estado: ['COMPRADO'],
            tipo: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ]
            ],
            precioAvaluo: [''],
            costoCompra: ['',
                []
            ],
            costoPrestamo: ['',
                []
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
        this.subscribeInventario();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    subscribeInventario() {
        this.sub.add(this.inventarioService.inventario.subscribe((inventario) => {
            this.inventario = inventario;
            if (inventario) {
                this.inventarioForm.controls['estado'].setValue(this.inventario.estado);
                this.inventarioForm.controls['precioAvaluo'].setValue(this.inventario.precioAvaluo);
                this.inventarioForm.controls['costoCompra'].setValue(this.inventario.costoCompra);
                this.inventarioForm.controls['costoPrestamo'].setValue(this.inventario.costoPrestamo);
                this.inventarioForm.controls['descripcion'].setValue(this.inventario.descripcion);
                this.inventarioForm.controls['observacion'].setValue(this.inventario.observacion);
                this.inventarioForm.controls['tipo'].setValue(this.inventario.tipo);
                this.inventarioForm.controls['marca'].setValue(this.inventario.marca);
                this.inventarioForm.controls['modelo'].setValue(this.inventario.modelo);
                this.inventarioForm.controls['linea'].setValue(this.inventario.linea);
                this.inventarioForm.controls['serie'].setValue(this.inventario.serie);
                this.inventarioForm.controls['placa'].setValue(this.inventario.placa);
                this.inventarioForm.controls['chasis'].setValue(this.inventario.chasis);
                this.inventarioForm.controls['deuda'].setValue(this.inventario.deuda);
                this.inventarioForm.controls['ruat'].setValue(this.inventario.ruat);
                this.inventarioForm.controls['metal'].setValue(this.inventario.metal);
                this.inventarioForm.controls['peso'].setValue(this.inventario.peso);
                this.inventarioForm.controls['pureza'].setValue(this.inventario.pureza);
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.inventarioService.inventario.emit(null);
    }
    refreshForm() {
        this.costoPrestamo = 0;
        this.diasPrestamo = 0;
        this.costoTotal = 0;
        this.inventarioForm.resetForm();
    }
    save() {
        this.loading = true;
        const body = Object.assign(Object.assign({}, this.inventarioForm.value), { precioAvaluo: +this.inventarioForm.value.precioAvaluo, costoCompra: +this.inventarioForm.value.costoCompra, costoPrestamo: +this.inventarioForm.value.costoPrestamo });
        console.log(body);
        if (this.inventario && this.isPrestamo) {
            this.sub.add(this.inventarioService.patchInventario(body, this.inventario.id).subscribe((response) => {
                this.alertService.triggerMessage('Inventario Editado Correctamente', 'success');
                this.refreshInventarioById();
                this.loading = false;
                this.closeModal();
            }, (error) => {
                this.loading = false;
                this.alertService.triggerMessage(error.error.message, 'error');
            }));
        }
        else {
            this.sub.add(this.inventarioService.postInventario(body).subscribe((response) => {
                this.loading = false;
                this.alertService.triggerMessage('Inventario Ingresado Correctamente', 'success');
                this.refreshInventario();
                this.closeModal();
            }, (error) => {
                this.loading = false;
                this.alertService.triggerMessage(error.error.message, 'error');
            }));
        }
    }
    refreshInventario() {
        this.sub.add(this.inventarioService.getInventarioByEstado({ force: true }).subscribe((response) => {
            this.inventarioService.response.emit(response);
        }));
    }
    refreshInventarioById() {
        this.sub.add(this.inventarioService.getInventarioById(this.inventario.id).subscribe((inventario) => {
            this.inventarioService.inventario.emit(inventario);
        }));
    }
};
ModalEditInventarioComponent.ctorParameters = () => [
    { type: src_app_core_services_inventario_service__WEBPACK_IMPORTED_MODULE_7__["InventarioService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ModalEditInventarioComponent.propDecorators = {
    isPrestamo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ModalEditInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-edit-inventario',
        template: _raw_loader_modal_edit_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalEditInventarioComponent);



/***/ }),

/***/ "sL2+":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/modals/modal-delete-picture/modal-delete-picture.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"modal.visible&&modal.modalName==='pictureDeleteModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           ELIMINAR FOTOGRAFIA\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <p> ¿ Desea eliminar la imagen {{ picture.name }} permanentemente?</p>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <div class=\"mb-4 relative \">\n              <img src=\"{{picture.path?publicUrl+'/'+picture.path:'assets/img/image-not-found.png'}}\" class=\"w-96 h-auto object-fit rounded-lg\" alt=\"\">\n            </div>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          [disabled]=\"loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"save()\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='pictureDeleteModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "sYDe":
/*!****************************************************************!*\
  !*** ./src/app/views/admin/inventario/inventario.component.ts ***!
  \****************************************************************/
/*! exports provided: InventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioComponent", function() { return InventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventario.component.html */ "+WcR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let InventarioComponent = class InventarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventarioComponent.ctorParameters = () => [];
InventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-inventario',
        template: _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], InventarioComponent);



/***/ }),

/***/ "uSkj":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/modals/modal-venta-inventario/modal-venta-inventario.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"modal.visible&&modal.modalName==='inventarioVentaModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           VENDER INVENTARIO\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n      <form\n        *ngIf=\"inventario\"\n        autocapitalize=\"off\"\n        [formGroup]=\"inventarioForm\"\n        (ngSubmit)=\"save()\"\n      >\n\n          <div class=\"my-4 relative p-6 flex flex-wrap\">\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <p> Descripción: {{ inventario.descripcion}}</p>\n              <p> Precio Avaluo: Bol. {{ inventario.precioAvaluo }}</p>\n              <p> Precio Prestamo: Bol. {{ inventario.costoPrestamo }}</p>\n              <p *ngIf=\"inventario.estado==='COMPRADO'\"> Precio compra: Bol. {{ inventario.costoCompra }}</p>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                  [inputForm]=\"inventarioForm\"\n                  inputLabel=\"PRECIO DE VENTA Bol.\"\n                  inputPlaceholder=\"Precio de venta\"\n                  inputType=\"number\"\n                  inputFormName=\"precioVenta\"\n                  formControlName=\"precioVenta\"\n                  [value]=\"inventarioForm.value.precioVenta\">\n              </app-input>\n            </div>\n          </div>\n\n        <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n          <button\n            class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            (click)=\"closeModal()\"\n            type=\"button\"\n          >\n            Cancelar\n          </button>\n          <button\n            [disabled]=\"loading\"\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n          </button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='inventarioVentaModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "zbKm":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/cards/card-inventario-list/card-inventario-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Inventario {{ estado==='EMPENADO'?'EMPEÑADO': estado }} {{estado==='VENDIDO'?'de PRESTAMOS':''}}</h3>\n    <div class=\"flex items-center justify-start pt-2\">.\n      <app-modal-edit-inventario></app-modal-edit-inventario>\n\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n        <form\n          [formGroup]=\"ciForm\"\n        >\n          <input\n            type=\"text\"\n            placeholder=\"Buscar por CI Ej: 836378...\"\n            class=\"border-0 px-3 py-3 placeholder-black-300 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-green-600  w-full ease-linear transition-all duration-150\"\n            formControlName=\"ci\"\n            (ngModelChange)=\"search($event)\"\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n    <ul *ngIf=\"response\" role=\"list\" class=\"relative flex flex-wrap\">\n      <div *ngFor=\"let inventario of response.items; let i=index;\" class=\"w-full lg:w-6/12\">\n        <li\n            class=\"cursor-pointer m-2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n            (click)=\"goToInventarioInformation(inventario)\">\n            <div class=\"flex items-center\">\n                <div class=\"text-3xl p-4 bg-green-600\">\n                  {{inventario.id}}\n                </div>\n                <div  class=\"flex-1 min-w-0 mx-6 flex flex-col\">\n                  <p class=\"text-xl font-medium truncate dark:text-white\">\n                    {{ inventario.descripcion }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'JOYA'\">\n                    {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'ARTICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'VEHICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='EMPENADO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    {{ inventario.prestamo.fechaInicio | date:'mediumDate' }} - {{ inventario.prestamo.fechaFinal | date:'mediumDate' }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='DEVUELTO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    Fecha devolución: {{ inventario.fechaDevolucion | date:'mediumDate' }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='VENDIDO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    Fecha Venta: {{ inventario.fechaVenta | date:'mediumDate' }}\n                  </p>\n                </div>\n                <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                  <p *ngIf=\"inventario.estado==='DEVUELTO'\">\n                    BOL. {{ inventario.costoPrestamo }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='EMPENADO'\">\n                    BOL. {{ inventario.costoPrestamo }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='VENDIDO'\">\n                    BOL. {{ inventario.precioVenta }}\n                  </p>\n                  <p class=\"text-sm\">\n                    {{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n                  </p>\n                </div>\n            </div>\n        </li>\n      </div>\n  </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n\n<div *ngIf=\"estado==='VENDIDO'\" class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Inventario VENDIDO de Compras</h3>\n    <div class=\"flex items-center justify-start pt-2\">.\n\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n    <ul *ngIf=\"response2\" role=\"list\" class=\"relative flex flex-wrap\">\n      <div  *ngFor=\"let inventario of response2.items; let i=index;\" class=\"w-full lg:w-6/12\">\n        <li\n            class=\"cursor-pointer m-2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n            (click)=\"goToInventarioInformation(inventario)\">\n            <div class=\"flex items-center\">\n                <div class=\"text-3xl p-4 bg-green-600\">\n                  {{inventario.id}}\n                </div>\n                <div  class=\"flex-1 min-w-0 mx-6 flex flex-col\">\n                  <p class=\"text-xl font-medium truncate dark:text-white\">\n                    {{ inventario.descripcion }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'JOYA'\">\n                    {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'ARTICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n                  </p>\n                  <p *ngIf=\"inventario.tipo === 'VEHICULO'\">\n                      {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='EMPENADO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    {{ inventario.prestamo.fechaInicio | date:'mediumDate' }} - {{ inventario.prestamo.fechaFinal | date:'mediumDate' }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='DEVUELTO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    Fecha devolución: {{ inventario.fechaDevolucion | date:'mediumDate' }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='VENDIDO'\" class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    Fecha Venta: {{ inventario.fechaVenta | date:'mediumDate' }}\n                  </p>\n                </div>\n                <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                  <p *ngIf=\"inventario.estado==='DEVUELTO'\">\n                    BOL. {{ inventario.costoPrestamo }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='EMPENADO'\">\n                    BOL. {{ inventario.costoPrestamo }}\n                  </p>\n                  <p *ngIf=\"inventario.estado==='VENDIDO'\">\n                    BOL. {{ inventario.precioVenta }}\n                  </p>\n                  <p class=\"text-sm\">\n                    {{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n                  </p>\n                </div>\n            </div>\n        </li>\n      </div>\n  </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response2\"\n  [response]=\"response2.meta\"\n  (pageEvent)=\"getOnPageResponseWhitOutPrestamo($event)\"\n></app-pagination>\n");

/***/ })

}]);
//# sourceMappingURL=inventario-inventario-module-es2015.js.map