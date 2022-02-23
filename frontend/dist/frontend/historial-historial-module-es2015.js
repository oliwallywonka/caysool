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
    openCerrarHistorialModal(historial) {
        this.modalService.modal.modalName = 'cierreHistorialModal';
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






let HistorialModule = class HistorialModule {
};
HistorialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"], _components_cards_card_historial_list_card_historial_list_component__WEBPACK_IMPORTED_MODULE_4__["CardHistorialListComponent"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded\">\n  <div class=\"p-4 w-full \">\n\n    <div class=\"items-center mb-4 ml-2 mt-4 flex justify-between\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-500 dark:text-white\">\n        Historial\n      </h3>\n    </div>\n    <div class=\"flex flex-col\">\n      <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n          <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n              <div class=\"overflow-hidden sm:rounded-lg\">\n                  <table class=\"min-w-full\">\n                      <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                          <tr>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Fecha\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Usuario\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Operación\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Tabla\n                              </th>\n\n                          </tr>\n                      </thead>\n                      <tbody *ngIf=\"response\" >\n                          <tr\n                            *ngFor=\"let historial of response.items\"\n                            class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n                            [popper]=\"hi\"\n                            [popperTrigger]=\"'click'\"\n                            [popperPlacement]=\"'top'\"\n                            [popperPositionFixed]=\"true\">\n                            <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                {{ historial.createdAt | date:'medium' }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                              {{ historial.user.ci }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                {{ historial.action }}\n                            </td>\n                            <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                {{ historial.auditTable }}\n                            </td>\n                            <popper-content #hi>\n                              <p class=\"bold\">{{ historial.previousData | json }}</p>\n                              <p class=\"bold\">{{ historial.actualData | json }}</p>\n                            </popper-content>\n                          </tr>\n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

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



/***/ })

}]);
//# sourceMappingURL=historial-historial-module-es2015.js.map