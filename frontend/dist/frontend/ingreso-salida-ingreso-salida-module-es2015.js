(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingreso-salida-ingreso-salida-module"],{

/***/ "/93g":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/ingreso-salida.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "/lIq":
/*!************************************************************!*\
  !*** ./src/app/core/services/transaccionMoneda.service.ts ***!
  \************************************************************/
/*! exports provided: TransaccionMonedaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransaccionMonedaService", function() { return TransaccionMonedaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let TransaccionMonedaService = class TransaccionMonedaService {
    constructor(http) {
        this.http = http;
        this.transaccionMoneda = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.client = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getTransaccionMonedas({ page = 1, force = false }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/transaccion-moneda?page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
    /*getTransaccionMonedaById(id: number):Observable<any>{
      const headers = new HttpHeaders()
        .set('x-access-token',sessionStorage.getItem('token')||'');
      return this.http.get(`${this.baseUrl}/transaccionMoneda/${id}`,{headers});
    }*/
    postTransaccionMoneda(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/transaccion-moneda`, body, { headers });
    }
};
TransaccionMonedaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TransaccionMonedaService.propDecorators = {
    transaccionMoneda: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    client: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    inventario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
TransaccionMonedaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransaccionMonedaService);



/***/ }),

/***/ "/nvB":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/pdfs/pdf-compra-venta-dolar/pdf-compra-venta-dolar.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PdfCompraVentaDolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfCompraVentaDolarComponent", function() { return PdfCompraVentaDolarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_compra_venta_dolar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-compra-venta-dolar.component.html */ "6UQX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);








pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
let PdfCompraVentaDolarComponent = class PdfCompraVentaDolarComponent {
    constructor(businessService, datePipe) {
        this.businessService = businessService;
        this.datePipe = datePipe;
        this.transacciones = [];
        this.business = this.businessService.businessInformation;
    }
    ngOnInit() {
    }
    subscribeBusiness() {
        this.businessService.business.subscribe((business) => {
            if (business) {
                this.business = business;
            }
        });
    }
    exportToPdf() {
        console.log(this.from, this.to);
        let dolaresDisponibles = 0;
        let totalCompras = 0;
        let totalVentas = 0;
        let totalDiferencia = 0;
        const bodyDolar = [
            [
                { text: "Fecha", alignment: "center", style: "tableHeader" },
                { text: "Operacion", style: "tableHeader" },
                { text: "Cantidad en dolares", style: "tableHeader" },
                { text: "Precio dolar", style: "tableHeader" },
                { text: "Cantidad total", style: "tableHeader" },
                { text: "Precio dolar oficial", style: "tableHeader" },
                { text: "Cantidad real", style: "tableHeader" },
                { text: "Diferencia", style: "tableHeader" },
            ],
        ];
        for (const transaccion of this.transacciones) {
            if (transaccion.operacion === 'VENTA') {
                dolaresDisponibles -= +transaccion.cantidad;
                totalVentas += +transaccion.cantidad;
            }
            else {
                dolaresDisponibles += +transaccion.cantidad;
                totalCompras += +transaccion.cantidad;
            }
            totalDiferencia += +transaccion.diferencia;
            bodyDolar.push([
                { text: `${this.datePipe.transform(transaccion.createdAt, 'medium')}`, alignment: "center", fontSize: 10 },
                { text: `${transaccion.operacion}`, alignment: "center", fontSize: 10 },
                { text: `$. ${transaccion.cantidad}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${transaccion.tipoCambio}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${(transaccion.cantidad * transaccion.tipoCambio).toFixed(1)}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${transaccion.tipoCambioOficial}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${(transaccion.cantidad * transaccion.tipoCambioOficial).toFixed(1)}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${transaccion.diferencia}`, alignment: "center", fontSize: 10 },
            ]);
        }
        const reporte = {
            // a string or { width: number, height: number }
            pageSize: "LETTER",
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: "landscape",
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [20, 15, 15, 20],
            content: [
                //FECHA Y HORA ACTUAL AL IMPRIMIR
                {
                    text: `${this.datePipe.transform(Date.now(), 'medium')}`,
                    fontSize: 8,
                },
                {
                    columns: [
                        {
                            width: 90,
                            height: 40,
                            fontSize: 9,
                            margin: [22, 10, 0, 0],
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["logoCaysool"]
                        },
                        [
                            // REPORTE DE PRESTAMOS
                            {
                                text: 'Reporte de "COMPRA VENTA DE DOLARES"',
                                color: "#333333",
                                width: 800,
                                fontSize: 20,
                                bold: true,
                                alignment: "center",
                                margin: [0, 0, 0, 0],
                            },
                        ],
                    ],
                },
                "\n",
                {
                    columns: [
                        {
                            width: 250,
                            text: `Cambio Oficial del Dolar ${this.business.cambioDolar}`,
                            bold: true,
                            fontSize: 14,
                        },
                        {
                            columns: [
                                {
                                    width: 250,
                                    text: `Compra venta desde ${this.datePipe.transform(this.from, 'mediumDate')}`,
                                    bold: false,
                                    fontSize: 12,
                                },
                                { width: "*", text: `hasta ${this.datePipe.transform(this.to, 'mediumDate')}` },
                            ],
                        },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [60, 60, 120, "*", "*", "*", "*", "*"],
                        headerRows: 1,
                        body: bodyDolar
                    },
                    layout: "lightHorizontalLines",
                },
                //suma de la diferencia
                {
                    table: {
                        widths: [60, 60, 120, "*", "*", "*", "*", "*"],
                        headerRows: 1,
                        body: [
                            [
                                { text: "Total", alignment: "center", style: "tableHeader" },
                                "",
                                "",
                                "",
                                "",
                                "",
                                { text: "", alignment: "center" },
                                { text: `Bol. ${totalDiferencia.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                            ]
                        ]
                    },
                    layout: "noBorders",
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [300, 130, 150],
                        headerRows: 1,
                        body: [
                            [
                                {
                                    text: "Total de Dolares disponibles",
                                    fontSize: 13,
                                    style: "tableHeader",
                                },
                                { text: `$. ${dolaresDisponibles}`, alignment: "right", fontSize: 13 },
                                { text: "", alignment: "right", fontSize: 12 },
                            ],
                            [
                                { text: "Total compras", fontSize: 13, style: "tableHeader" },
                                { text: `$. ${totalCompras}`, alignment: "right", fontSize: 13 },
                                { text: "", alignment: "right", fontSize: 12 },
                            ],
                            [
                                { text: "Total ventas", fontSize: 13, style: "tableHeader" },
                                { text: `$. ${totalVentas}`, alignment: "right", fontSize: 13 },
                                { text: "", alignment: "right", fontSize: 12 },
                            ],
                        ],
                    },
                    layout: "noBorders",
                },
            ],
            styles: {
                tableHeader: {
                    bold: true,
                    fontSize: 10,
                    color: "black",
                },
                tableExample: {
                    margin: [0, 10, 0, 5],
                },
            },
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(reporte).open();
    }
};
PdfCompraVentaDolarComponent.ctorParameters = () => [
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__["BusinessService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
PdfCompraVentaDolarComponent.propDecorators = {
    transacciones: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PdfCompraVentaDolarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-compra-venta-dolar',
        template: _raw_loader_pdf_compra_venta_dolar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfCompraVentaDolarComponent);



/***/ }),

/***/ "01vk":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/cards/card-movimiento/card-movimiento.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CardMovimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMovimientoComponent", function() { return CardMovimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_movimiento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-movimiento.component.html */ "I+5t");
/* harmony import */ var _card_movimiento_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-movimiento.component.css */ "eJpE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CardMovimientoComponent = class CardMovimientoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardMovimientoComponent.ctorParameters = () => [];
CardMovimientoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card-movimiento',
        template: _raw_loader_card_movimiento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_movimiento_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardMovimientoComponent);



/***/ }),

/***/ "38P5":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/modals/modal-cierre-apertura/modal-cierre-apertura.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"modal.visible&&modal.modalName==='cierreAperturaModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Cerrar Apertura\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full  px-4 mb-2\">\n            <p> ¿ Desea cerrar la apertura Nº {{ apertura.id }} permanentemente?</p>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          [disabled]=\"loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"save()\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='cierreAperturaModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "6UQX":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/pdfs/pdf-compra-venta-dolar/pdf-compra-venta-dolar.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir Lista de Hoy\n</button>\n");

/***/ }),

/***/ "6nSp":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/pdfs/pdf-boleta-salida/pdf-boleta-salida.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  (click)=\"exportToPdf()\"\n  class=\"cursor-pointer p-2 text-blue-600 dark:text-blue-500 hover:underline\">\n  Imprimir</a>\n");

/***/ }),

/***/ "9tfk":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/modals/modal-cierre-apertura/modal-cierre-apertura.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ModalCierreAperturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCierreAperturaComponent", function() { return ModalCierreAperturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_cierre_apertura_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-cierre-apertura.component.html */ "38P5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/apertura.service */ "dxVp");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let ModalCierreAperturaComponent = class ModalCierreAperturaComponent {
    constructor(aperturaService, alertService, modalService) {
        this.aperturaService = aperturaService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.publicUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].publicUrl;
        this.loading = false;
        this.modal = this.modalService.modal;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subscribeApertura();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshAperturas() {
        this.sub.add(this.aperturaService.getAperturas({ force: true }).subscribe(response => {
            this.aperturaService.response.emit(response);
        }));
    }
    subscribeApertura() {
        this.sub.add(this.aperturaService.apertura.subscribe((apertura) => {
            this.apertura = apertura;
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
    }
    save() {
        this.loading = true;
        this.aperturaService.cerrarApertura(this.apertura.id).subscribe(response => {
            this.loading = false;
            this.alertService.triggerMessage('Caja cerrada exitosamente', 'success');
            this.refreshAperturas();
            this.closeModal();
        }, error => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
            this.closeModal();
        });
    }
};
ModalCierreAperturaComponent.ctorParameters = () => [
    { type: src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_5__["AperturaService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }
];
ModalCierreAperturaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-cierre-apertura',
        template: _raw_loader_modal_cierre_apertura_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalCierreAperturaComponent);



/***/ }),

/***/ "Ag/x":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/pdfs/pdf-boleta-salida/pdf-boleta-salida.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PdfBoletaSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfBoletaSalidaComponent", function() { return PdfBoletaSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_boleta_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-boleta-salida.component.html */ "6nSp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");
/* harmony import */ var src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/numberToLetter */ "mHh0");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
let PdfBoletaSalidaComponent = class PdfBoletaSalidaComponent {
    constructor(businessService, datePipe) {
        this.businessService = businessService;
        this.datePipe = datePipe;
        this.business = this.businessService.businessInformation;
    }
    ngOnInit() {
        this.businessService.business.subscribe((business) => {
            this.business = business;
        });
        this.numeroALiteral();
    }
    numeroALiteral() {
        this.literal = "";
        const decimal = ((+this.movimiento.cantidad - Math.trunc(+this.movimiento.cantidad)) *
            10).toFixed(0);
        const litera = Object(src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__["numeroALetras"])(this.movimiento.cantidad, {
            plural: "BOLIVIANOS",
            singular: "BOLIVIANO",
            centPlural: "CENTAVOS",
            centSingular: "CENTAVO",
        });
        this.literal = `SON: ${litera} ${decimal}0/100`;
    }
    exportToPdf() {
        const movimiento = {
            // a string or { width: number, height: number }
            pageSize: "LETTER",
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: "portrait",
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [40, 30, 40, 30],
            content: [
                {
                    columns: [
                        {
                            width: 90,
                            height: 40,
                            fontSize: 9,
                            margin: [22, 0, 0, 0],
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"],
                        },
                        [
                            {
                                text: "COMPROBANTE DE PAGO",
                                color: "#333333",
                                width: 800,
                                fontSize: 20,
                                bold: true,
                                alignment: "center",
                                margin: [0, 0, 0, 0],
                            },
                        ],
                    ],
                },
                {
                    columns: [
                        {
                            width: 150,
                            text: [
                                `CEL: ${this.business.phone}\n`,
                                `${this.business.direction}\n`,
                                "El Alto-La Paz-Bolivia\n",
                            ],
                            fontSize: 8,
                            alignment: "center",
                            margin: [0, 0, 0, 0],
                        },
                        [
                            "\n",
                            {
                                text: `Fecha: ${this.datePipe.transform(this.movimiento.createdAt, "medium")}`,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [19, 0, 0, 0],
                            },
                        ],
                        [
                            "\n",
                            {
                                text: `Nro de Recibo: ${this.movimiento.id}`,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [19, 0, 0, 0],
                            },
                        ],
                    ],
                },
                {
                    alignment: "justify",
                    columns: [
                        {
                            width: 400,
                            //nombre del cliente
                            text: [`Nombre: `],
                            fontSize: 11,
                            alignment: "center",
                            margin: [0, 18, 0, 0],
                        },
                        [
                            {
                                text: `CI: `,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [0, 18, 0, 5],
                            },
                        ],
                    ],
                },
                {
                    canvas: [
                        { type: "line", x1: 0, y1: 0, x2: 530, y2: 0, lineWidth: 3 },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [48, 200, 150, 80],
                        headerRows: 7,
                        body: [
                            [
                                { text: "" },
                                {
                                    text: "DETALLE",
                                    alignment: "center",
                                    style: "tableHeader",
                                    bold: true,
                                    colSpan: 2,
                                },
                                {},
                                { text: "TOTAL", alignment: "center", bold: true },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "AMORTIZACION",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "INTERES",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "COMISION ADMINISTRATIVA",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "CARGOS GENERADOS",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: `Bol. 0.0`, alignment: "right" },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "CAPITAL PRESTADO",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: `Bol. 0.0`, alignment: "right" },
                            ],
                            [
                                { text: "Concepto", fontSize: 10, alignment: "center" },
                                {
                                    text: `${this.movimiento.concepto}`,
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: "", alignment: "right" },
                            ],
                            [
                                {
                                    text: `TOTAL A PAGAR ${this.literal}`,
                                    alignment: "left",
                                    fontSize: 9,
                                    bold: true,
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: `Bol. ${this.movimiento.cantidad}`,
                                    alignment: "right",
                                    bold: true,
                                },
                            ],
                        ],
                    },
                    layout: "lightHorizontalLines",
                },
                " \n\n\n",
                {
                    text: [
                        "FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO",
                    ],
                    fontSize: 12,
                    alignment: "center",
                },
                "\n\n",
                //aca segunda
                {
                    columns: [
                        {
                            width: 90,
                            height: 40,
                            fontSize: 9,
                            margin: [22, 0, 0, 0],
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"],
                        },
                        [
                            {
                                text: "COMPROBANTE DE PAGO",
                                color: "#333333",
                                width: 800,
                                fontSize: 20,
                                bold: true,
                                alignment: "center",
                                margin: [0, 0, 0, 0],
                            },
                        ],
                    ],
                },
                {
                    columns: [
                        {
                            width: 150,
                            text: [
                                `CEL: ${this.business.phone}\n`,
                                `${this.business.direction}\n`,
                                "El Alto-La Paz-Bolivia\n",
                            ],
                            fontSize: 8,
                            alignment: "center",
                            margin: [0, 0, 0, 0],
                        },
                        [
                            "\n",
                            {
                                text: `Fecha: ${this.datePipe.transform(this.movimiento.createdAt, "medium")}`,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [19, 0, 0, 0],
                            },
                        ],
                        [
                            "\n",
                            {
                                text: `Nro de Recibo: ${this.movimiento.id}`,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [19, 0, 0, 0],
                            },
                        ],
                    ],
                },
                {
                    alignment: "justify",
                    columns: [
                        {
                            width: 400,
                            //nombre del cliente
                            text: [`Nombre: `],
                            fontSize: 11,
                            alignment: "center",
                            margin: [0, 18, 0, 0],
                        },
                        [
                            {
                                text: `CI: `,
                                color: "#333333",
                                width: "*",
                                fontSize: 11,
                                bold: true,
                                alignment: "rigth",
                                margin: [0, 18, 0, 5],
                            },
                        ],
                    ],
                },
                {
                    canvas: [
                        { type: "line", x1: 0, y1: 0, x2: 530, y2: 0, lineWidth: 3 },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [48, 200, 150, 80],
                        headerRows: 7,
                        body: [
                            [
                                { text: "" },
                                {
                                    text: "DETALLE",
                                    alignment: "center",
                                    style: "tableHeader",
                                    bold: true,
                                    colSpan: 2,
                                },
                                {},
                                { text: "TOTAL", alignment: "center", bold: true },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "AMORTIZACION",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "INTERES",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "COMISION ADMINISTRATIVA",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                {
                                    text: `Bol. 0.0`,
                                    alignment: "right",
                                },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "CARGOS GENERADOS",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: `Bol. 0.0`, alignment: "right" },
                            ],
                            [
                                { text: "", alignment: "center" },
                                {
                                    text: "CAPITAL PRESTADO",
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: `Bol. 0.0`, alignment: "right" },
                            ],
                            [
                                { text: "Concepto", fontSize: 10, alignment: "center" },
                                {
                                    text: `${this.movimiento.concepto}`,
                                    fontSize: 10,
                                    alignment: "left",
                                    colSpan: 2,
                                },
                                {},
                                { text: "", alignment: "right" },
                            ],
                            [
                                {
                                    text: `TOTAL A PAGAR ${this.literal}`,
                                    alignment: "left",
                                    fontSize: 9,
                                    bold: true,
                                    colSpan: 3,
                                },
                                {},
                                {},
                                {
                                    text: `Bol. ${this.movimiento.cantidad}`,
                                    alignment: "right",
                                    bold: true,
                                },
                            ],
                        ],
                    },
                    layout: "lightHorizontalLines",
                },
                " \n\n\n",
                {
                    text: [
                        "FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO",
                    ],
                    fontSize: 12,
                    alignment: "center",
                },
            ],
            styles: {
                notesTitle: {
                    fontSize: 8,
                    bold: true,
                    margin: [0, 50, 0, 3],
                },
                notesText: {
                    fontSize: 8,
                },
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: "black",
            },
            defaultStyle: {
                columnGap: 20,
            },
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(movimiento).open();
    }
};
PdfBoletaSalidaComponent.ctorParameters = () => [
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_4__["BusinessService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
PdfBoletaSalidaComponent.propDecorators = {
    movimiento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PdfBoletaSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-boleta-salida',
        template: _raw_loader_pdf_boleta_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfBoletaSalidaComponent);



/***/ }),

/***/ "Aq9t":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/modals/modal-compra-venta-dolar/modal-compra-venta-dolar.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal('VENTA')\"\n  type=\"button\">\n  <i class=\"fas fa-plus\"></i> VENTA\n</button>\n\n<button\n  class=\"bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal('COMPRA')\"\n  type=\"button\">\n  <i class=\"fas fa-plus\"></i> COMPRA\n</button>\n<div *ngIf=\"modal.visible&&modal.modalName==='transaccionModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           {{ operacion }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"transaccionForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              [inputForm]=\"transaccionForm\"\n              inputLabel=\"CANTIDAD\"\n              inputType=\"number\"\n              inputPlaceholder=\"Cantidad a cambiar\"\n              inputFormName=\"cantidad\"\n              formControlName=\"cantidad\"\n              [value]=\"transaccionForm.value.cantidad\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"transaccionForm\"\n                inputLabel=\"Cambio dolar\"\n                inputType=\"number\"\n                inputFormName=\"tipoCambio\"\n                formControlName=\"tipoCambio\"\n                [value]=\"transaccionForm.value.tipoCambio\">\n            </app-input>\n          </div>\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!transaccionForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='transaccionModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "D/WV":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/cards/card-apertura-list/card-apertura-list.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CardAperturaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAperturaListComponent", function() { return CardAperturaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_apertura_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-apertura-list.component.html */ "P68v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/apertura.service */ "dxVp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");







let CardAperturaListComponent = class CardAperturaListComponent {
    constructor(aperturaService, modalService, router) {
        this.aperturaService = aperturaService;
        this.modalService = modalService;
        this.router = router;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.getAperturas();
        this.subcriptionAperturas();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getAperturas() {
        this.sub.add(this.aperturaService.getAperturas({ force: true }).subscribe(response => {
            this.response = response;
        }));
    }
    subcriptionAperturas() {
        this.sub.add(this.aperturaService.response.subscribe(response => {
            if (response) {
                this.response = response;
            }
        }));
    }
    getOnPageResponse(page) {
        this.response = null;
        this.aperturaService
            .getAperturas({
            page,
            force: true,
        })
            .subscribe((response) => {
            this.aperturaService.response.emit(response);
        });
    }
    goToAnotherPage(apertura) {
        this.router.navigate(['/admin/ingresos-salidas', apertura.id]);
        this.aperturaService.apertura.emit(apertura);
    }
    openCerrarAperturaModal(apertura) {
        this.modalService.modal.modalName = 'cierreAperturaModal';
        this.modalService.modal.visible = true;
        this.aperturaService.apertura.emit(apertura);
    }
};
CardAperturaListComponent.ctorParameters = () => [
    { type: src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_4__["AperturaService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CardAperturaListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-apertura-list',
        template: _raw_loader_card_apertura_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardAperturaListComponent);



/***/ }),

/***/ "GQam":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/modals/modal-apertura/modal-apertura.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ModalAperturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAperturaComponent", function() { return ModalAperturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_apertura_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-apertura.component.html */ "n9xf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/apertura.service */ "dxVp");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let ModalAperturaComponent = class ModalAperturaComponent {
    constructor(aperturaService, authService, businessService, alertService, modalService, fb) {
        this.aperturaService = aperturaService;
        this.authService = authService;
        this.businessService = businessService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.business = this.businessService.businessInformation;
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
        this.aperturaForm = this.fb.group({
            montoApertura: [0.00,
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minNumber({
                        value: 1,
                        message: this.errorMessages.minLength,
                    }),
                ],
            ],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subcriptionBusiness();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshAperturas() {
        this.sub.add(this.aperturaService.getAperturas({ force: true }).subscribe(response => {
            this.aperturaService.response.emit(response);
        }));
    }
    subcriptionBusiness() {
        this.sub.add(this.businessService.business.subscribe(business => {
            if (business) {
                this.business = business;
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
    }
    toggleModal(operacion) {
        this.modal.visible = true;
        this.modal.modalName = 'aperturaModal';
        this.operacion = operacion;
    }
    refreshForm() {
        this.aperturaForm.resetForm();
    }
    save() {
        this.loading = true;
        const body = {
            montoApertura: +this.aperturaForm.value.montoApertura,
            fechaApertura: moment__WEBPACK_IMPORTED_MODULE_10__(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        };
        console.log(body);
        this.aperturaService.postApertura(body).subscribe((response) => {
            this.loading = false;
            this.alertService.triggerMessage('Cambio Ingresada Correctamente', 'success');
            this.refreshAperturas();
            this.closeModal();
        }, (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
        });
    }
};
ModalAperturaComponent.ctorParameters = () => [
    { type: src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_6__["AperturaService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_9__["BusinessService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ModalAperturaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-apertura',
        template: _raw_loader_modal_apertura_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalAperturaComponent);



/***/ }),

/***/ "I+5t":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/cards/card-movimiento/card-movimiento.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>card-movimiento works!</p>\n");

/***/ }),

/***/ "NESa":
/*!*****************************************************!*\
  !*** ./src/app/core/services/movimiento.service.ts ***!
  \*****************************************************/
/*! exports provided: MovimientoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientoService", function() { return MovimientoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let MovimientoService = class MovimientoService {
    constructor(http) {
        this.http = http;
        this.movimiento = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movimientos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getMovimientosByAperturaId(aperturaId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http
            .get(`${this.baseUrl}/movimiento/apertura/${aperturaId}`, { headers });
    }
    postMovimiento(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/movimiento`, body, { headers });
    }
};
MovimientoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovimientoService.propDecorators = {
    movimiento: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    movimientos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
MovimientoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovimientoService);



/***/ }),

/***/ "NLqh":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/cards/card-movimiento-list/card-movimiento-list.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Ingresos y salidas De La Apertura Nº {{ aperturaId }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2 pl-3\">\n        <app-modal-ingreso-salida *ngIf=\"apertura && apertura.estado\" [aperturaId]=\"aperturaId\"></app-modal-ingreso-salida>\n        <app-pdf-movimientos [movimientos]=\"movimientos\" [from]=\"apertura.fechaApertura\" [to]=\"apertura.fechaCierre\"></app-pdf-movimientos>\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col\">\n          <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n              <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                  <div class=\"overflow-hidden sm:rounded-lg\">\n                      <table class=\"min-w-full\">\n                          <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                              <tr >\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Fecha Movimiento\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Ingreso/Gasto\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Concepto\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Bol. cantidad\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Acciones\n                                  </th>\n                              </tr>\n                          </thead>\n                          <tbody *ngIf=\"movimientos\" >\n                              <tr *ngFor=\"let movimiento of movimientos \" class=\"bg-white border-b\">\n                                  <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                      {{ movimiento.createdAt | date:'medium' }}\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      {{ movimiento.tipo? 'INGRESO' : 'GASTO' }}\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      {{ movimiento.concepto }}\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol. {{ movimiento.cantidad }}\n                                  </td>\n                                  <td *ngIf=\"!movimiento.tipo && !movimiento.relaciones\" class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    <app-pdf-boleta-salida [movimiento]=\"movimiento\"></app-pdf-boleta-salida>\n                                  </td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flow-root w-auto flex flex-col justify-center\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-400 dark:text-white\">\n        Total Ingresos: Bol. {{ totalIngresos.toFixed(1) }}\n      </h3>\n      <h3 class=\"text-xl font-bold leading-none text-gray-400 dark:text-white\">\n        Total Gastos: Bol. {{ totalGastos.toFixed(1) }}\n      </h3>\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        Total: Bol. {{ totalMovimiento.toFixed(1) }}\n      </h3>\n   </div>\n  </div>\n\n\n</div>\n");

/***/ }),

/***/ "P68v":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/cards/card-apertura-list/card-apertura-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded\">\n  <div class=\"p-4 w-full \">\n\n    <div class=\"items-center mb-4 ml-2 mt-4 flex justify-between\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-500 dark:text-white\">\n        Aperturas de Caja\n      </h3>\n      <app-modal-cierre-apertura></app-modal-cierre-apertura>\n      <app-modal-apertura></app-modal-apertura>\n    </div>\n    <div class=\"flex flex-col\">\n      <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n          <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n              <div class=\"overflow-hidden sm:rounded-lg\">\n                  <table class=\"min-w-full\">\n                      <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                          <tr >\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Fecha Apertura\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Fecha Cierre\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Monto Apertura\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Monto Cierre\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Estado\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Acciones\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody *ngIf=\"response\" >\n                          <tr *ngFor=\"let apertura of response.items \" class=\"bg-white border-b\">\n                              <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{ apertura.fechaApertura | date:'medium' }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{ apertura.fechaCierre | date:'medium'}}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ apertura.montoApertura }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ apertura.montoCierre }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                {{ apertura.estado? 'ABIERTO' : 'CERRADO' }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 flex\">\n                                <button\n                                  class=\"text-xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n                                  (click)=\"goToAnotherPage(apertura)\"\n                                  type=\"button\">\n                                  <i class=\"fas fa-eye\"></i>\n                                </button>\n                                <button\n                                  *ngIf=\"apertura.estado\"\n                                  class=\"text-red-600 text-xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n                                  (click)=\"openCerrarAperturaModal(apertura)\"\n                                  type=\"button\">\n                                  <i class=\"fas fa-lock\"></i>\n                                </button>\n                              </td>\n                          </tr>\n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n    </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ }),

/***/ "V9Au":
/*!************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/ingreso-salida.component.ts ***!
  \************************************************************************/
/*! exports provided: IngresoSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoSalidaComponent", function() { return IngresoSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingreso-salida.component.html */ "/93g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IngresoSalidaComponent = class IngresoSalidaComponent {
    constructor() { }
    ngOnInit() {
    }
};
IngresoSalidaComponent.ctorParameters = () => [];
IngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ingreso-salida',
        template: _raw_loader_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], IngresoSalidaComponent);



/***/ }),

/***/ "VNti":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/modals/modal-ingreso-salida/modal-ingreso-salida.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ModalIngresoSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalIngresoSalidaComponent", function() { return ModalIngresoSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-ingreso-salida.component.html */ "pKUZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_movimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/movimiento.service */ "NESa");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/apertura.service */ "dxVp");









let ModalIngresoSalidaComponent = class ModalIngresoSalidaComponent {
    constructor(movimientoService, aperturaService, alertService, modalService, fb) {
        this.movimientoService = movimientoService;
        this.aperturaService = aperturaService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.tipo = false;
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
        this.movimientoForm = this.fb.group({
            concepto: ['',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].maxLength({
                        value: 80,
                        message: this.errorMessages.maxLenght,
                    }),
                ],
            ],
            cantidad: [0.0,
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                ],
            ],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshMovimientos() {
        this.sub.add(this.movimientoService.getMovimientosByAperturaId(+this.aperturaId).subscribe(movimientos => {
            this.movimientoService.movimientos.emit(movimientos);
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
    }
    toggleModal(tipo) {
        this.modal.visible = true;
        this.modal.modalName = 'movimientoModal';
        this.tipo = tipo;
    }
    refreshForm() {
        this.movimientoForm.resetForm();
    }
    save() {
        this.loading = true;
        console.log(this.aperturaId);
        const body = {
            apertura: +this.aperturaId,
            tipo: this.tipo,
            concepto: this.movimientoForm.value.concepto,
            cantidad: +this.movimientoForm.value.cantidad,
            relaciones: false
        };
        console.log(body);
        this.movimientoService.postMovimiento(body).subscribe((response) => {
            this.loading = false;
            this.alertService.triggerMessage('Movimiento ingresado exitosamente.', 'success');
            this.refreshMovimientos();
            this.closeModal();
        }, (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
        });
    }
};
ModalIngresoSalidaComponent.ctorParameters = () => [
    { type: src_app_core_services_movimiento_service__WEBPACK_IMPORTED_MODULE_6__["MovimientoService"] },
    { type: src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_8__["AperturaService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ModalIngresoSalidaComponent.propDecorators = {
    aperturaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ModalIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-ingreso-salida',
        template: _raw_loader_modal_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalIngresoSalidaComponent);



/***/ }),

/***/ "X7FW":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/pdfs/pdf-movimientos/pdf-movimientos.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "aCOM":
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/ingreso-salida-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IngresoSalidaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoSalidaRoutingModule", function() { return IngresoSalidaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cards_card_movimiento_list_card_movimiento_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/card-movimiento-list/card-movimiento-list.component */ "lMhR");
/* harmony import */ var _components_tabs_tab_ingreso_salida_tab_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/tab-ingreso-salida/tab-ingreso-salida.component */ "hgHB");
/* harmony import */ var _ingreso_salida_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingreso-salida.component */ "V9Au");






const routes = [{
        path: '',
        component: _ingreso_salida_component__WEBPACK_IMPORTED_MODULE_5__["IngresoSalidaComponent"],
        children: [
            {
                path: ':aperturaId',
                component: _components_cards_card_movimiento_list_card_movimiento_list_component__WEBPACK_IMPORTED_MODULE_3__["CardMovimientoListComponent"]
            },
            {
                path: '**',
                component: _components_tabs_tab_ingreso_salida_tab_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__["TabIngresoSalidaComponent"]
            }
        ]
    }];
let IngresoSalidaRoutingModule = class IngresoSalidaRoutingModule {
};
IngresoSalidaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IngresoSalidaRoutingModule);



/***/ }),

/***/ "bKT4":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/cards/card-dolar-list/card-dolar-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CardDolarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDolarListComponent", function() { return CardDolarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_dolar_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-dolar-list.component.html */ "liSi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");
/* harmony import */ var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/reporte.service */ "Tutu");
/* harmony import */ var src_app_core_services_transaccionMoneda_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/transaccionMoneda.service */ "/lIq");








let CardDolarListComponent = class CardDolarListComponent {
    constructor(transaccionService, reporteService, businessService) {
        this.transaccionService = transaccionService;
        this.reporteService = reporteService;
        this.businessService = businessService;
        this.loading = false;
        this.transacciones = [];
        this.today = new Date(moment__WEBPACK_IMPORTED_MODULE_3__(Date.now()).subtract(4, 'hours').toISOString()).toISOString().substring(0, 10);
        this.business = this.businessService.businessInformation;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.getTransacciones();
        this.subcriptionTransacciones();
        this.subcriptionBusiness();
        this.getTansaccioness();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getTransacciones() {
        this.sub.add(this.transaccionService.getTransaccionMonedas({ force: true }).subscribe(response => {
            this.response = response;
        }));
    }
    subcriptionBusiness() {
        this.sub.add(this.businessService.business.subscribe(business => {
            if (business) {
                this.business = business;
            }
        }));
    }
    subcriptionTransacciones() {
        this.sub.add(this.transaccionService.response.subscribe(response => {
            if (response) {
                this.response = response;
                this.getTansaccioness();
            }
        }));
    }
    getOnPageResponse(page) {
        this.response = null;
        this.transaccionService
            .getTransaccionMonedas({
            page,
            force: true,
        })
            .subscribe((response) => {
            this.transaccionService.response.emit(response);
        });
    }
    getTansaccioness() {
        this.loading = true;
        this.sub.add(this.reporteService.getTransaccionByDate({
            from: this.today,
            to: this.today
        }).subscribe((transacciones) => {
            if (transacciones) {
                this.transacciones = transacciones;
            }
            this.loading = false;
        }));
    }
};
CardDolarListComponent.ctorParameters = () => [
    { type: src_app_core_services_transaccionMoneda_service__WEBPACK_IMPORTED_MODULE_7__["TransaccionMonedaService"] },
    { type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_6__["ReporteService"] },
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_5__["BusinessService"] }
];
CardDolarListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-dolar-list',
        template: _raw_loader_card_dolar_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardDolarListComponent);



/***/ }),

/***/ "dxVp":
/*!***************************************************!*\
  !*** ./src/app/core/services/apertura.service.ts ***!
  \***************************************************/
/*! exports provided: AperturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AperturaService", function() { return AperturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AperturaService = class AperturaService {
    constructor(http) {
        this.http = http;
        this.apertura = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getAperturas({ page = 1, force = false }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/apertura?page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
    getAperturaById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http.get(`${this.baseUrl}/apertura/${id}`, { headers });
    }
    getAperturaDetailById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http.get(`${this.baseUrl}/apertura/apertura/${id}`, { headers });
    }
    postApertura(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/apertura`, body, { headers });
    }
    cerrarApertura(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.delete(`${this.baseUrl}/apertura/cerrar/${id}`, { headers });
    }
};
AperturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AperturaService.propDecorators = {
    apertura: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AperturaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AperturaService);



/***/ }),

/***/ "eJpE":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/cards/card-movimiento/card-movimiento.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLW1vdmltaWVudG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "gEf/":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/modals/modal-compra-venta-dolar/modal-compra-venta-dolar.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ModalCompraVentaDolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCompraVentaDolarComponent", function() { return ModalCompraVentaDolarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_compra_venta_dolar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-compra-venta-dolar.component.html */ "Aq9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ "jKJn");
/* harmony import */ var src_app_core_services_transaccionMoneda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/transaccionMoneda.service */ "/lIq");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ "S0jo");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");










let ModalCompraVentaDolarComponent = class ModalCompraVentaDolarComponent {
    constructor(transaccionService, authService, businessService, alertService, modalService, fb) {
        this.transaccionService = transaccionService;
        this.authService = authService;
        this.businessService = businessService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.fb = fb;
        this.business = this.businessService.businessInformation;
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
        this.transaccionForm = this.fb.group({
            cantidad: [0.00,
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minNumber({
                        value: 1,
                        message: this.errorMessages.minLength,
                    }),
                ],
            ],
            tipoCambio: [0.00,
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({ message: this.errorMessages.required }),
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].minNumber({
                        value: 0.00,
                        message: this.errorMessages.minLength,
                    }),
                ],
            ],
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subcriptionBusiness();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    refreshTransaccionMonedas() {
        this.sub.add(this.transaccionService.getTransaccionMonedas({ force: true }).subscribe(response => {
            this.transaccionService.response.emit(response);
        }));
    }
    subcriptionBusiness() {
        this.sub.add(this.businessService.business.subscribe(business => {
            if (business) {
                this.business = business;
            }
        }));
    }
    closeModal() {
        this.modal.visible = false;
        this.modal.modalName = '';
    }
    toggleModal(operacion) {
        this.modal.visible = true;
        this.modal.modalName = 'transaccionModal';
        this.operacion = operacion;
    }
    refreshForm() {
        this.transaccionForm.resetForm();
    }
    save() {
        this.loading = true;
        const body = {
            user: this.authService.user.id,
            operacion: this.operacion,
            cantidad: +this.transaccionForm.value.cantidad,
            tipoCambio: +this.transaccionForm.value.tipoCambio,
            tipoCambioOficial: +this.business.cambioDolar
        };
        console.log(body);
        this.transaccionService.postTransaccionMoneda(body).subscribe((response) => {
            this.loading = false;
            this.alertService.triggerMessage('Cambio Ingresada Correctamente', 'success');
            this.refreshTransaccionMonedas();
            this.closeModal();
        }, (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
        });
    }
};
ModalCompraVentaDolarComponent.ctorParameters = () => [
    { type: src_app_core_services_transaccionMoneda_service__WEBPACK_IMPORTED_MODULE_6__["TransaccionMonedaService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_9__["BusinessService"] },
    { type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"] }
];
ModalCompraVentaDolarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-compra-venta-dolar',
        template: _raw_loader_modal_compra_venta_dolar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ModalCompraVentaDolarComponent);



/***/ }),

/***/ "hgHB":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/tabs/tab-ingreso-salida/tab-ingreso-salida.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TabIngresoSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabIngresoSalidaComponent", function() { return TabIngresoSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-ingreso-salida.component.html */ "ivGk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TabIngresoSalidaComponent = class TabIngresoSalidaComponent {
    constructor() {
        this.openTab = 1;
    }
    toggleTabs($tabNumber) {
        this.openTab = $tabNumber;
    }
    ngOnInit() {
    }
};
TabIngresoSalidaComponent.ctorParameters = () => [];
TabIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab-ingreso-salida',
        template: _raw_loader_tab_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TabIngresoSalidaComponent);



/***/ }),

/***/ "ivGk":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/tabs/tab-ingreso-salida/tab-ingreso-salida.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words  w-full mb-6  rounded\">\n  <div class=\"w-full\">\n    <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row\">\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(1)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 1, 'text-white bg-sky-700': openTab === 1}\">\n          Apertura y Cierre de Caja\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(2)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 2, 'text-white bg-sky-700': openTab === 2}\">\n          Dólares\n        </a>\n      </li>\n\n    </ul>\n    <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n      <div class=\"px-4 py-5 flex-auto\">\n        <div class=\"tab-content tab-space\">\n          <div *ngIf=\"openTab === 1\">\n            <app-card-apertura-list></app-card-apertura-list>\n          </div>\n          <div *ngIf=\"openTab === 2\">\n            <app-card-dolar-list></app-card-dolar-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "lMhR":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/cards/card-movimiento-list/card-movimiento-list.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CardMovimientoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMovimientoListComponent", function() { return CardMovimientoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_movimiento_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-movimiento-list.component.html */ "NLqh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/apertura.service */ "dxVp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_movimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/movimiento.service */ "NESa");








let CardMovimientoListComponent = class CardMovimientoListComponent {
    constructor(movimientoService, aperturaService, location, route) {
        this.movimientoService = movimientoService;
        this.aperturaService = aperturaService;
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.aperturaId = this.route.snapshot.paramMap.get('aperturaId');
        this.getApertura();
        this.getMovimientosByAperturaId();
        this.subscribeMovimientos();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    calculateTotalMovimientos(movimientos) {
        this.totalMovimiento = 0;
        this.totalGastos = 0;
        this.totalIngresos = 0;
        for (const movimiento of movimientos) {
            if (movimiento.tipo) {
                this.totalMovimiento += +movimiento.cantidad;
                this.totalIngresos += +movimiento.cantidad;
            }
            else {
                this.totalMovimiento -= +movimiento.cantidad;
                this.totalGastos += +movimiento.cantidad;
            }
        }
        this.totalMovimiento.toFixed(1);
    }
    getMovimientosByAperturaId() {
        this.sub.add(this.movimientoService.getMovimientosByAperturaId(+this.aperturaId).subscribe(movimientos => {
            this.movimientos = movimientos;
            this.calculateTotalMovimientos(this.movimientos);
        }));
    }
    getApertura() {
        this.sub.add(this.aperturaService.getAperturaById(+this.aperturaId).subscribe((apertura) => {
            this.apertura = apertura;
        }));
    }
    subscribeMovimientos() {
        this.sub.add(this.movimientoService.movimientos.subscribe((movimientos) => {
            if (movimientos) {
                this.movimientos = movimientos;
                this.calculateTotalMovimientos(this.movimientos);
            }
        }));
    }
    goToBackPage() {
        this.location.back();
    }
};
CardMovimientoListComponent.ctorParameters = () => [
    { type: src_app_core_services_movimiento_service__WEBPACK_IMPORTED_MODULE_7__["MovimientoService"] },
    { type: src_app_core_services_apertura_service__WEBPACK_IMPORTED_MODULE_5__["AperturaService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
CardMovimientoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-movimiento-list',
        template: _raw_loader_card_movimiento_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardMovimientoListComponent);



/***/ }),

/***/ "liSi":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/cards/card-dolar-list/card-dolar-list.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded\">\n  <div class=\"p-4 w-full \">\n\n    <div class=\"items-center mb-4 ml-2 mt-4 flex justify-between\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-500 dark:text-white\">\n        Cambio oficial: {{ business?.cambioDolar }}\n      </h3>\n      <app-modal-compra-venta-dolar></app-modal-compra-venta-dolar>\n      <app-pdf-compra-venta-dolar *ngIf=\"transacciones\" [transacciones]=\"transacciones\" [from]=\"today\" [to]=\"today\"></app-pdf-compra-venta-dolar>\n    </div>\n    <div class=\"flex flex-col\">\n      <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n          <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n              <div class=\"overflow-hidden sm:rounded-lg\">\n                  <table class=\"min-w-full\">\n                      <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                          <tr>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Fecha\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Operación\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Cantidad\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Precio dolar\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Cantidad Total\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Precio dolar Oficial\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Cantidad Real\n                              </th>\n                              <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                Diferencia\n                              </th>\n                          </tr>\n                      </thead>\n                      <tbody *ngIf=\"response\" >\n                          <tr *ngFor=\"let dolar of response.items \" class=\"bg-white border-b dark:bg-gray-800 dark:border-gray-700\">\n                              <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{ dolar.createdAt | date:'short' }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{ dolar.operacion }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  $ {{ dolar.cantidad }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ dolar.tipoCambio }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ (dolar.cantidad * dolar.tipoCambio).toFixed(1) }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ dolar.tipoCambioOficial }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ (dolar.cantidad * dolar.tipoCambioOficial).toFixed(1) }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ dolar.diferencia }}\n                              </td>\n                          </tr>\n\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n");

/***/ }),

/***/ "n9xf":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/modals/modal-apertura/modal-apertura.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal('VENTA')\"\n  type=\"button\">\n  <i class=\"fas fa-plus\"></i> Nueva Apertura\n</button>\n<div *ngIf=\"modal.visible&&modal.modalName==='aperturaModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Nueva Apertura\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"aperturaForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <app-input\n              [inputForm]=\"aperturaForm\"\n              inputLabel=\"CANTIDAD\"\n              inputType=\"number\"\n              inputPlaceholder=\"Cantidad a cambiar\"\n              inputFormName=\"montoApertura\"\n              formControlName=\"montoApertura\"\n              [value]=\"aperturaForm.value.montoApertura\">\n            </app-input>\n          </div>\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!aperturaForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='aperturaModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "pKUZ":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/ingreso-salida/components/modals/modal-ingreso-salida/modal-ingreso-salida.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal(true)\"\n  type=\"button\">\n  <i class=\"fas fa-plus\"></i> Ingreso\n</button>\n\n<button\n  class=\"bg-sky-700 text-white active:bg-sky-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  (click)=\"toggleModal(false)\"\n  type=\"button\">\n  <i class=\"fas fa-minus\"></i> Gasto\n</button>\n<div *ngIf=\"modal.visible&&modal.modalName==='movimientoModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           {{ tipo? 'Ingreso' : 'Gasto' }} {{ aperturaId }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"movimientoForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full  px-4 mb-2\">\n            <app-input\n              [inputForm]=\"movimientoForm\"\n              inputLabel=\"CANTIDAD\"\n              inputType=\"number\"\n              inputPlaceholder=\"Cantidad de la operación\"\n              inputFormName=\"cantidad\"\n              formControlName=\"cantidad\"\n              [value]=\"movimientoForm.value.cantidad\">\n            </app-input>\n          </div>\n          <div class=\"w-full  px-4 mb-2\">\n            <app-input\n                [inputForm]=\"movimientoForm\"\n                inputLabel=\"Concepto\"\n                inputType=\"text\"\n                inputFormName=\"concepto\"\n                formControlName=\"concepto\"\n                [value]=\"movimientoForm.value.concepto\">\n            </app-input>\n          </div>\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!movimientoForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='movimientoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n");

/***/ }),

/***/ "wJNA":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/components/pdfs/pdf-movimientos/pdf-movimientos.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PdfMovimientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfMovimientosComponent", function() { return PdfMovimientosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_movimientos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-movimientos.component.html */ "X7FW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
let PdfMovimientosComponent = class PdfMovimientosComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    ngOnInit() { }
    exportToPdf() {
        let totalGastos = 0;
        let totalIngresos = 0;
        const bodyMovimiento = [
            [
                {
                    text: "Fecha de movimiento",
                    alignment: "center",
                    style: "tableHeader",
                },
                {
                    text: "Ingreso/Gasto",
                    alignment: "center",
                    style: "tableHeader",
                },
                { text: "Concepto", alignment: "center", style: "tableHeader" },
                {
                    text: "Cantidad en Bol.",
                    style: "tableHeader",
                    alignment: "center",
                },
            ]
        ];
        for (let movimiento of this.movimientos) {
            if (movimiento.tipo) {
                totalIngresos += +movimiento.cantidad;
            }
            else {
                totalGastos += +movimiento.cantidad;
            }
            bodyMovimiento.push([
                { text: `${this.datePipe.transform(movimiento.createdAt, 'medium')}`, fontSize: 9, alignment: "center" },
                { text: `${movimiento.tipo ? 'INGRESO' : 'GASTO'}`, fontSize: 9, alignment: "center" },
                { text: `${movimiento.concepto}`, fontSize: 9, alignment: "center" },
                { text: `Bol. ${movimiento.cantidad}`, fontSize: 9, alignment: "center" },
            ]);
        }
        const reporte = {
            // a string or { width: number, height: number }
            pageSize: "LETTER",
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: "landscape",
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [20, 15, 15, 20],
            content: [
                //FECHA Y HORA ACTUAL AL IMPRIMIR
                {
                    text: `${this.datePipe.transform(Date.now(), "medium")}`,
                    fontSize: 8,
                },
                {
                    columns: [
                        {
                            width: 90,
                            height: 40,
                            fontSize: 9,
                            margin: [22, 10, 0, 0],
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__["logoCaysool"],
                        },
                        [
                            // REPORTE DE PRESTAMOS
                            {
                                text: 'Reporte de "Ingresos y Salidas"',
                                color: "#333333",
                                width: 800,
                                fontSize: 20,
                                bold: true,
                                alignment: "center",
                                margin: [0, 0, 0, 0],
                            },
                        ],
                    ],
                },
                "\n",
                {
                    columns: [
                        {
                            width: 250,
                            text: `Apertura y cierre: ${this.datePipe.transform(this.from, "mediumDate")}`,
                            bold: false,
                            fontSize: 12,
                        },
                        { width: "*", text: `Hasta: ${this.to ? this.datePipe.transform(this.to, "mediumDate") : 'Caja aun no cerrada'}` },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [70, 100, 280, 250],
                        headerRows: 1,
                        body: bodyMovimiento,
                    },
                    layout: "lightHorizontalLines",
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [150, 200, 30],
                        headerRows: 1,
                        body: [
                            [
                                { text: "Total ingresos", fontSize: 11, style: "tableHeader" },
                                { text: `${totalIngresos.toFixed(1)}`, alignment: "right", fontSize: 11 },
                                { text: "Bol.", alignment: "left", fontSize: 10 },
                            ],
                            [
                                { text: "Total gastos", fontSize: 11, style: "tableHeader" },
                                { text: `${totalGastos.toFixed(1)}`, alignment: "right", fontSize: 11 },
                                { text: "Bol.", alignment: "left", fontSize: 10 },
                            ],
                            [
                                { text: "Total en caja", fontSize: 11, style: "tableHeader" },
                                { text: `${(totalIngresos - totalGastos).toFixed(1)}`, alignment: "right", fontSize: 11 },
                                { text: "Bol.", alignment: "left", fontSize: 10 },
                            ],
                        ],
                    },
                    layout: "noBorders",
                },
            ],
            styles: {
                tableHeader: {
                    bold: true,
                    fontSize: 10,
                    color: "black",
                },
                tableExample: {
                    margin: [0, 10, 0, 5],
                },
            },
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(reporte).open();
    }
};
PdfMovimientosComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
];
PdfMovimientosComponent.propDecorators = {
    movimientos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PdfMovimientosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-movimientos',
        template: _raw_loader_pdf_movimientos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfMovimientosComponent);



/***/ }),

/***/ "zQ3R":
/*!*********************************************************************!*\
  !*** ./src/app/views/admin/ingreso-salida/ingreso-salida.module.ts ***!
  \*********************************************************************/
/*! exports provided: IngresoSalidaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoSalidaModule", function() { return IngresoSalidaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ingreso_salida_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingreso-salida-routing.module */ "aCOM");
/* harmony import */ var _ingreso_salida_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingreso-salida.component */ "V9Au");
/* harmony import */ var _components_tabs_tab_ingreso_salida_tab_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/tab-ingreso-salida/tab-ingreso-salida.component */ "hgHB");
/* harmony import */ var _components_cards_card_dolar_list_card_dolar_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/card-dolar-list/card-dolar-list.component */ "bKT4");
/* harmony import */ var _components_cards_card_apertura_list_card_apertura_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cards/card-apertura-list/card-apertura-list.component */ "D/WV");
/* harmony import */ var _components_cards_card_movimiento_card_movimiento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/card-movimiento/card-movimiento.component */ "01vk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "7PmN");
/* harmony import */ var _components_modals_modal_compra_venta_dolar_modal_compra_venta_dolar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modals/modal-compra-venta-dolar/modal-compra-venta-dolar.component */ "gEf/");
/* harmony import */ var _components_modals_modal_ingreso_salida_modal_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/modal-ingreso-salida/modal-ingreso-salida.component */ "VNti");
/* harmony import */ var _components_modals_modal_apertura_modal_apertura_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/modal-apertura/modal-apertura.component */ "GQam");
/* harmony import */ var _components_cards_card_movimiento_list_card_movimiento_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cards/card-movimiento-list/card-movimiento-list.component */ "lMhR");
/* harmony import */ var _components_modals_modal_cierre_apertura_modal_cierre_apertura_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modals/modal-cierre-apertura/modal-cierre-apertura.component */ "9tfk");
/* harmony import */ var _components_pdfs_pdf_movimientos_pdf_movimientos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdfs/pdf-movimientos/pdf-movimientos.component */ "wJNA");
/* harmony import */ var _components_pdfs_pdf_compra_venta_dolar_pdf_compra_venta_dolar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pdfs/pdf-compra-venta-dolar/pdf-compra-venta-dolar.component */ "/nvB");
/* harmony import */ var _components_pdfs_pdf_boleta_salida_pdf_boleta_salida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pdfs/pdf-boleta-salida/pdf-boleta-salida.component */ "Ag/x");

















let IngresoSalidaModule = class IngresoSalidaModule {
};
IngresoSalidaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ingreso_salida_component__WEBPACK_IMPORTED_MODULE_3__["IngresoSalidaComponent"],
            _components_tabs_tab_ingreso_salida_tab_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__["TabIngresoSalidaComponent"],
            _components_cards_card_dolar_list_card_dolar_list_component__WEBPACK_IMPORTED_MODULE_5__["CardDolarListComponent"],
            _components_cards_card_apertura_list_card_apertura_list_component__WEBPACK_IMPORTED_MODULE_6__["CardAperturaListComponent"],
            _components_cards_card_movimiento_card_movimiento_component__WEBPACK_IMPORTED_MODULE_7__["CardMovimientoComponent"],
            _components_modals_modal_compra_venta_dolar_modal_compra_venta_dolar_component__WEBPACK_IMPORTED_MODULE_9__["ModalCompraVentaDolarComponent"],
            _components_modals_modal_ingreso_salida_modal_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_10__["ModalIngresoSalidaComponent"],
            _components_modals_modal_apertura_modal_apertura_component__WEBPACK_IMPORTED_MODULE_11__["ModalAperturaComponent"],
            _components_cards_card_movimiento_list_card_movimiento_list_component__WEBPACK_IMPORTED_MODULE_12__["CardMovimientoListComponent"],
            _components_modals_modal_cierre_apertura_modal_cierre_apertura_component__WEBPACK_IMPORTED_MODULE_13__["ModalCierreAperturaComponent"],
            _components_pdfs_pdf_movimientos_pdf_movimientos_component__WEBPACK_IMPORTED_MODULE_14__["PdfMovimientosComponent"],
            _components_pdfs_pdf_compra_venta_dolar_pdf_compra_venta_dolar_component__WEBPACK_IMPORTED_MODULE_15__["PdfCompraVentaDolarComponent"],
            _components_pdfs_pdf_boleta_salida_pdf_boleta_salida_component__WEBPACK_IMPORTED_MODULE_16__["PdfBoletaSalidaComponent"],
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _ingreso_salida_routing_module__WEBPACK_IMPORTED_MODULE_2__["IngresoSalidaRoutingModule"]],
    })
], IngresoSalidaModule);



/***/ })

}]);
//# sourceMappingURL=ingreso-salida-ingreso-salida-module-es2015.js.map