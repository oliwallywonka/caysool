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

/***/ "9Gew":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/cards/card-inventario-information/card-inventario-information.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Información Inventario Nº {{ inventario?.id }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n        <app-modal-delete-picture></app-modal-delete-picture>\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"flow-root w-auto flex flex-col justify-center\">\n      <div *ngIf=\"inventario\" class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n        <div class=\"flex items-center space-x-4 px-4 py-2 bg-blueGray-600 \">\n            <div class=\"flex-1 min-w-0 text-white\">\n              <p\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.descripcion }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'JOYA'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'ARTICULO'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n              </p>\n              <p\n                *ngIf=\"inventario.tipo === 'VEHICULO'\"\n                class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n              </p>\n            </div>\n        </div>\n\n        <div class=\"flex items-center space-x-4 px-4 \">\n          <div class=\"flex-1 min-w-0 py-8\">\n\n            <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n              Dueño original: {{ inventario.prestamo.client.name }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Descripción: {{ inventario.descripcion }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Observaciones: {{ inventario.observacion }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Avalúo: {{ inventario.precioAvaluo }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Prestamo: Bol. {{ inventario.costoPrestamo }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Estado: Bol. {{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n            </p>\n          </div>\n        </div>\n      </div>\n   </div>\n  </div>\n\n  <form\n    [formGroup]=\"pictureForm\"\n    (ngSubmit)=\"savePicture()\"\n  >\n\n    <div class=\"my-4 relative p-6 flex flex-wrap\">\n\n      <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n        <label\n          for=\"image\"\n          class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\">\n          Fotografia\n        </label>\n        <h4 *ngIf=\"!comprimido\" class=\"text-xs font-semibold\">\n          Comprimiendo archivo espere porfavor...\n        </h4>\n        <input\n          type=\"file\"\n          class=\"border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n          formControlName=\"picture\"\n          (change)=\"onFileChange($event)\">\n        <button\n          [disabled]=\"!pictureForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar\n        </button>\n      </div>\n    </div>\n  </form>\n<div *ngIf=\"pictures\">\n\n  <div  class=\"grid lg:grid-cols-4 sm:grid-cols-2 gap-4 flex items-center ml-6 w-auto\">\n    <div *ngFor=\"let picture of pictures\" class=\"mb-4 relative \">\n        <button\n          (click)=\"openDeleteModal(picture)\"\n          class=\"absolute top-0 right-0 mx-4 bg-none text-red-600 active:text-red-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n          type=\"button\"\n          >\n          <i class=\"fas fa-trash\"></i>\n        </button>\n        <img src=\"{{picture.path?baseUrl+'/'+picture.path:'assets/img/image-not-found.png'}}\" class=\"w-96 h-auto object-fit rounded-lg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words  w-full mb-6  rounded\">\n  <div class=\"w-full\">\n    <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row\">\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(1)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 1, 'text-white bg-sky-700': openTab === 1}\">\n          Empeñados\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(2)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 2, 'text-white bg-sky-700': openTab === 2}\">\n          En Venta\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(3)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 3, 'text-white bg-sky-700': openTab === 3}\">\n          Vendido\n        </a>\n      </li>\n\n    </ul>\n    <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n      <div class=\"px-4 py-5 flex-auto\">\n        <div class=\"tab-content tab-space\">\n          <div *ngIf=\"openTab === 1\">\n            <app-card-inventario-list [estado]=\"'EMPENADO'\"></app-card-inventario-list>\n          </div>\n          <div *ngIf=\"openTab === 2\">\n            <app-card-inventario-list [estado]=\"'EN VENTA'\"></app-card-inventario-list>\n          </div>\n          <div *ngIf=\"openTab === 3\">\n            <app-card-inventario-list [estado]=\"'VENDIDO'\"></app-card-inventario-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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



let ModalVentaInventarioComponent = class ModalVentaInventarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModalVentaInventarioComponent.ctorParameters = () => [];
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
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventario(force = false) {
        this.inventarioService.getInventario({ force, estadoInv: this.estado }).subscribe((response) => {
            console.log(response);
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
    goToInventarioInformation(inventario) {
        this.inventarioService.inventario.emit(inventario);
        this.router.navigate(['/admin/inventario', inventario.id]);
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











let InventarioModule = class InventarioModule {
};
InventarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventario_component__WEBPACK_IMPORTED_MODULE_3__["InventarioComponent"], _components_tabs_tab_inventario_tab_inventario_component__WEBPACK_IMPORTED_MODULE_4__["TabInventarioComponent"], _components_cards_card_inventario_list_card_inventario_list_component__WEBPACK_IMPORTED_MODULE_5__["CardInventarioListComponent"], _components_cards_card_inventario_information_card_inventario_information_component__WEBPACK_IMPORTED_MODULE_6__["CardInventarioInformationComponent"], _components_modals_modal_delete_picture_modal_delete_picture_component__WEBPACK_IMPORTED_MODULE_8__["ModalDeletePictureComponent"], _components_modals_modal_venta_inventario_modal_venta_inventario_component__WEBPACK_IMPORTED_MODULE_10__["ModalVentaInventarioComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _inventario_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventarioRoutingModule"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_9__["Ng2ImgMaxModule"],
        ]
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
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getInventarioById() {
        this.sub.add(this.inventarioService.getInventarioById(+this.inventarioId).subscribe(inventario => {
            this.inventario = inventario;
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
/* harmony default export */ __webpack_exports__["default"] = ("<p>modal-venta-inventario works!</p>\n");

/***/ }),

/***/ "zbKm":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/inventario/components/cards/card-inventario-list/card-inventario-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Inventario</h3>\n    <div class=\"flex items-center justify-start pt-2\">.\n\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n        <form\n          [formGroup]=\"ciForm\"\n        >\n          <input\n            type=\"text\"\n            placeholder=\"Buscar por CI Ej: 836378...\"\n            class=\"border-0 px-3 py-3 placeholder-black-300 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-green-600  w-full ease-linear transition-all duration-150\"\n            formControlName=\"ci\"\n            (ngModelChange)=\"search($event)\"\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n    <ul *ngIf=\"response\" role=\"list\" class=\"relative\">\n      <li *ngFor=\"let inventario of response.items; let i=index;\"\n          class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-600 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n          (click)=\"goToInventarioInformation(inventario)\">\n          <div class=\"flex items-center\">\n              <div class=\"text-3xl p-4 bg-green-600\">\n                {{inventario.id}}\n              </div>\n              <div  class=\"flex-1 min-w-0 mx-6 flex flex-col\">\n                <p class=\"text-xl font-medium truncate dark:text-white\">\n                  {{ inventario.descripcion }}\n                </p>\n                <p *ngIf=\"inventario.tipo === 'JOYA'\">\n                  {{ inventario.metal }} {{ inventario.peso }} {{ inventario.pureza }}\n                </p>\n                <p *ngIf=\"inventario.tipo === 'ARTICULO'\">\n                    {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.linea }}\n                </p>\n                <p *ngIf=\"inventario.tipo === 'VEHICULO'\">\n                    {{ inventario.marca }} {{ inventario.modelo }} {{ inventario.placa }}\n                </p>\n                  <div\n                  *ngFor=\"let inv of inventario.inventario\"\n                  class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n\n\n                </div>\n                <p class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                  {{ inventario.prestamo.fechaInicio | date:'mediumDate' }} - {{ inventario.prestamo.fechaFinal | date:'mediumDate' }}\n                </p>\n              </div>\n              <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                <p>\n                  BOL. {{ inventario.costoPrestamo }}\n                </p>\n                <p class=\"text-sm\">\n                  {{ inventario.estado === 'EMPENADO'? 'EMPEÑADO': inventario.estado }}\n                </p>\n              </div>\n          </div>\n      </li>\n  </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ })

}]);
//# sourceMappingURL=inventario-inventario-module-es2015.js.map