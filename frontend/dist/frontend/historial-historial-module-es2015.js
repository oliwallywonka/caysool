(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "CxYK":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/historial/historial.component.ts ***!
  \**************************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historial.component.html */ "DCiG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HistorialComponent = class HistorialComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistorialComponent.ctorParameters = () => [];
HistorialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-historial',
        template: _raw_loader_historial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], HistorialComponent);



/***/ }),

/***/ "DCiG":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/historial/historial.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card-historial-list></app-card-historial-list>\n");

/***/ }),

/***/ "ERfd":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/admin/historial/components/cards/card-historial-list/card-historial-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CardHistorialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHistorialListComponent", function() { return CardHistorialListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_historial_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-historial-list.component.html */ "e0TQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_historial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/historial.service */ "i3MN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");







let CardHistorialListComponent = class CardHistorialListComponent {
    constructor(historialService, modalService, router) {
        this.historialService = historialService;
        this.modalService = modalService;
        this.router = router;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.getHistorials();
        this.subcriptionHistorials();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getHistorials() {
        this.sub.add(this.historialService.getHistorial({ force: true }).subscribe(response => {
            this.response = response;
        }));
    }
    subcriptionHistorials() {
        this.sub.add(this.historialService.response.subscribe(response => {
            if (response) {
                this.response = response;
            }
        }));
    }
    getOnPageResponse(page) {
        this.response = null;
        this.historialService
            .getHistorial({
            page,
            force: true,
        })
            .subscribe((response) => {
            this.historialService.response.emit(response);
        });
    }
    goToAnotherPage(historial) {
        this.router.navigate(['/admin/ingresos-salidas', historial.id]);
        this.historialService.historial.emit(historial);
    }
    showHistorialModal(historial) {
        this.modalService.modal.modalName = 'historialModal';
        this.modalService.modal.visible = true;
        this.historialService.historial.emit(historial);
    }
};
CardHistorialListComponent.ctorParameters = () => [
    { type: src_app_core_services_historial_service__WEBPACK_IMPORTED_MODULE_4__["HistorialService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CardHistorialListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-historial-list',
        template: _raw_loader_card_historial_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardHistorialListComponent);



/***/ }),

/***/ "NuHN":
/*!*******************************************************************!*\
  !*** ./src/app/views/admin/historial/historial-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HistorialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialRoutingModule", function() { return HistorialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.component */ "CxYK");




const routes = [{
        path: '',
        component: _historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"]
    }];
let HistorialRoutingModule = class HistorialRoutingModule {
};
HistorialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HistorialRoutingModule);



/***/ }),

/***/ "S0jo":
/*!************************************************!*\
  !*** ./src/app/core/services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ModalService = class ModalService {
    constructor() {
        this._modal = {
            visible: false,
            modalName: '',
        };
    }
    get modal() {
        return this._modal;
    }
    set modal(m) {
        this._modal = m;
    }
    closeModal() {
        this._modal.visible = false;
        this._modal.modalName = '';
    }
};
ModalService.ctorParameters = () => [];
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //Servicio global para activar un modal mediante su nombre y estado.
], ModalService);



/***/ }),

/***/ "WpAU":
/*!***********************************************************!*\
  !*** ./src/app/views/admin/historial/historial.module.ts ***!
  \***********************************************************/
/*! exports provided: HistorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialModule", function() { return HistorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-routing.module */ "NuHN");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.component */ "CxYK");
/* harmony import */ var _components_cards_card_historial_list_card_historial_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/card-historial-list/card-historial-list.component */ "ERfd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "7PmN");
/* harmony import */ var _components_modals_modal_historial_detalle_modal_historial_detalle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/modal-historial-detalle/modal-historial-detalle.component */ "k112");







let HistorialModule = class HistorialModule {
};
HistorialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"], _components_cards_card_historial_list_card_historial_list_component__WEBPACK_IMPORTED_MODULE_4__["CardHistorialListComponent"], _components_modals_modal_historial_detalle_modal_historial_detalle_component__WEBPACK_IMPORTED_MODULE_6__["ModalHistorialDetalleComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"]
        ]
    })
], HistorialModule);



/***/ }),

/***/ "e0TQ":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/historial/components/cards/card-historial-list/card-historial-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded\">\n  <div class=\"p-4 w-full \">\n\n    <div class=\"items-center mb-4 ml-2 mt-4 flex justify-between\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-500 dark:text-white\">\n        Historial\n      </h3>\n      <app-modal-historial-detalle></app-modal-historial-detalle>\n    </div>\n    <div class=\"flex flex-col\">\n      <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n          <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n              <div class=\"overflow-hidden sm:rounded-lg\">\n                  <table class=\"min-w-full\">\n                      <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                          <tr>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Fecha\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Usuario\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Operación\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Tabla\n                              </th>\n\n                          </tr>\n                      </thead>\n                      <tbody *ngIf=\"response\" >\n                          <tr\n                            class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                            *ngFor=\"let historial of response.items\"\n                            (click)=\"showHistorialModal(historial)\">\n                            <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                {{ historial.createdAt | date:'medium' }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                              {{ historial.user.name }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                {{ historial.action }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                {{ historial.auditTable }}\n                            </td>\n                          </tr>\n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n    </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ }),

/***/ "i3MN":
/*!****************************************************!*\
  !*** ./src/app/core/services/historial.service.ts ***!
  \****************************************************/
/*! exports provided: HistorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialService", function() { return HistorialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let HistorialService = class HistorialService {
    constructor(http) {
        this.http = http;
        this.historial = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getHistorial({ page = 1, force = false, }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/audit?page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
};
HistorialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HistorialService.propDecorators = {
    historial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
HistorialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HistorialService);



/***/ }),

/***/ "k112":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/admin/historial/components/modals/modal-historial-detalle/modal-historial-detalle.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ModalHistorialDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHistorialDetalleComponent", function() { return ModalHistorialDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_historial_detalle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-historial-detalle.component.html */ "nKK9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_services_historial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/historial.service */ "i3MN");







let ModalHistorialDetalleComponent = class ModalHistorialDetalleComponent {
    constructor(historialService, modalService) {
        this.historialService = historialService;
        this.modalService = modalService;
        this.publicUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].publicUrl;
        this.loading = false;
        this.modal = this.modalService.modal;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.previousDataKeys = null;
        this.previusDataValues = null;
        this.actualDataKeys = null;
        this.actualDataValues = null;
        this.historial = null;
        this.subscribeHistorial();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    subscribeHistorial() {
        this.sub.add(this.historialService.historial.subscribe((historial) => {
            this.historial = historial;
            if (historial) {
                this.previousDataKeys = Object.keys(this.historial.previousData);
                this.previusDataValues = Object.values(this.historial.previousData);
                this.actualDataKeys = Object.keys(this.historial.actualData);
                this.actualDataValues = Object.values(this.historial.actualData);
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
        this.historialService.historial.emit(null);
    }
};
ModalHistorialDetalleComponent.ctorParameters = () => [
    { type: src_app_core_services_historial_service__WEBPACK_IMPORTED_MODULE_6__["HistorialService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
];
ModalHistorialDetalleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-historial-detalle',
        template: _raw_loader_modal_historial_detalle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalHistorialDetalleComponent);



/***/ }),

/***/ "nKK9":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/historial/components/modals/modal-historial-detalle/modal-historial-detalle.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"modal.visible&&modal.modalName==='historialModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto min-w-580-px max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           DATOS\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <p> DATOS INICIALES </p>\n            <div class=\"flex flex-col\">\n              <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n                  <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                      <div class=\"overflow-hidden sm:rounded-lg\">\n                          <table class=\"min-w-full\">\n                              <thead *ngIf=\"previousDataKeys\"  class=\"bg-gray-50 dark:bg-gray-700\">\n                                  <tr>\n                                      <th\n                                        *ngFor=\"let key of previousDataKeys\"\n                                        scope=\"col\"\n                                        class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                        {{ key }}\n                                      </th>\n\n                                  </tr>\n                              </thead>\n                              <tbody *ngIf=\"previusDataValues\" >\n                                  <tr class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \">\n                                    <td\n                                      *ngFor=\"let key of previusDataValues\"\n                                      class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                        {{ key }}\n                                    </td>\n                                  </tr>\n\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"w-full px-4 mb-2\">\n            <p> DATOS ACTUALES</p>\n            <div class=\"flex flex-col\">\n              <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n                  <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                      <div class=\"overflow-hidden sm:rounded-lg\">\n                          <table class=\"min-w-full\">\n                              <thead *ngIf=\"actualDataKeys\"  class=\"bg-gray-50 dark:bg-gray-700\">\n                                  <tr>\n                                      <th\n                                        *ngFor=\"let key of actualDataKeys\"\n                                        scope=\"col\"\n                                        class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                        {{ key }}\n                                      </th>\n\n                                  </tr>\n                              </thead>\n                              <tbody *ngIf=\"actualDataValues\" >\n                                  <tr class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \">\n                                    <td\n                                      *ngFor=\"let key of actualDataValues\"\n                                      class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                        {{ key }}\n                                    </td>\n                                  </tr>\n\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cerrar\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='historialModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ })

}]);
//# sourceMappingURL=historial-historial-module-es2015.js.map