(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-reporte-module"],{

/***/ "+Zr/":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-inventario/card-reporte-inventario.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Inventario\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "1gHi":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-transaccion/card-reporte-transaccion.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CardReporteTransaccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReporteTransaccionComponent", function() { return CardReporteTransaccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-transaccion.component.html */ "L97z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/reporte.service */ "Tutu");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Subscription */ "zB/H");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__);







let CardReporteTransaccionComponent = class CardReporteTransaccionComponent {
    constructor(reporteService, location, fb) {
        this.reporteService = reporteService;
        this.location = location;
        this.fb = fb;
        this.loading = false;
        this.transacciones = [];
        this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10),],
            to: [new Date().toISOString().substring(0, 10),]
        });
    }
    ngOnInit() {
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.getTansaccioness();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getTansaccioness() {
        this.loading = true;
        this.sub.add(this.reporteService.getTransaccionByDate({
            from: this.reporteForm.value.from,
            to: this.reporteForm.value.to
        }).subscribe((transacciones) => {
            if (transacciones) {
                this.transacciones = transacciones;
            }
            this.loading = false;
        }));
    }
    goToBackPage() {
        this.location.back();
    }
    save() {
        this.getTansaccioness();
    }
};
CardReporteTransaccionComponent.ctorParameters = () => [
    { type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__["ReporteService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["RxFormBuilder"] }
];
CardReporteTransaccionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-transaccion',
        template: _raw_loader_card_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReporteTransaccionComponent);



/***/ }),

/***/ "76eo":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PdfPrestamoActivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrestamoActivoComponent", function() { return PdfPrestamoActivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_prestamo_activo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-prestamo-activo.component.html */ "pGCz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PdfPrestamoActivoComponent = class PdfPrestamoActivoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PdfPrestamoActivoComponent.ctorParameters = () => [];
PdfPrestamoActivoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-prestamo-activo',
        template: _raw_loader_pdf_prestamo_activo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfPrestamoActivoComponent);



/***/ }),

/***/ "7LO/":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-impresion/card-reporte-impresion.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Reimpresiones\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"items-center mb-4 ml-2 mt-4\">\n          <form\n            autocomplete=\"off\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"flex flex-col\">\n          <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n              <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                  <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                      <table class=\"min-w-full\">\n                          <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                              <tr>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Fecha\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Operación\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Cargo\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Comisión\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Cargos Generados\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Amortiguado\n                                  </th>\n                              </tr>\n                          </thead>\n                          <tbody  >\n                              <tr\n\n                                class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                                >\n                                  <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                              </tr>\n\n\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "9LgK":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PdfReportePagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReportePagoComponent", function() { return PdfReportePagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-pago.component.html */ "PX1f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PdfReportePagoComponent = class PdfReportePagoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PdfReportePagoComponent.ctorParameters = () => [];
PdfReportePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-pago',
        template: _raw_loader_pdf_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfReportePagoComponent);



/***/ }),

/***/ "9qf7":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PdfReportePrestamoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReportePrestamoComponent", function() { return PdfReportePrestamoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-prestamo.component.html */ "cVPJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
let PdfReportePrestamoComponent = class PdfReportePrestamoComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.prestamos = [];
    }
    ngOnInit() { }
    exportToPdf() {
        const prestamoBody = [
            [
                { text: 'Fecha de Prestamo', style: 'tableHeader' },
                { text: 'Fecha de vencimiento', style: 'tableHeader' },
                { text: 'Cliente', style: 'tableHeader' },
                { text: 'Prenda', style: 'tableHeader' },
                { text: 'Monto de prestamo', style: 'tableHeader' },
                { text: 'Intereses a pagar', style: 'tableHeader' },
                { text: 'Total', style: 'tableHeader' },
            ],
        ];
        const prestamoValues = {
            totalInventario: 0,
            totalMontoPrestamo: 0,
            totalInteres: 0,
            totalCosto: 0
        };
        for (const prestamo of this.prestamos) {
            prestamoValues.totalInventario += +prestamo.inventario.length;
            prestamoValues.totalMontoPrestamo += +prestamo.costoPrestamo;
            prestamoValues.totalInteres += +prestamo.costoInteres;
            prestamoValues.totalCosto += +prestamo.costoTotal;
            prestamoBody.push([
                `${this.datePipe.transform(prestamo.fechaInicio, 'shortDate')}`,
                `${this.datePipe.transform(prestamo.fechaFinal, 'shortDate')}`,
                `${prestamo.client.name}`,
                `${prestamo.inventario.map(i => i.descripcion + ' ')}`,
                `Bol. ${prestamo.costoPrestamo}`,
                `Bol. ${prestamo.costoInteres}`,
                { text: `Bol. ${prestamo.costoTotal}`, alignment: 'center' },
                { text: 'x', alignment: 'center' },
            ]);
        }
        const reporte = {
            // a string or { width: number, height: number }
            pageSize: 'LETTER',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'landscape',
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
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"],
                        },
                        [
                            // REPORTE DE PRESTAMOS
                            {
                                text: `Reporte de 'PRESTAMOS REALIZADOS'`,
                                color: '#333333',
                                width: 800,
                                fontSize: 20,
                                bold: true,
                                alignment: 'center',
                                margin: [0, 0, 0, 0],
                            },
                        ],
                    ],
                },
                '\n',
                {
                    columns: [
                        { width: 250, text: `Prestamos realizados Desde ${this.datePipe.transform(this.from, 'mediumDate')}` },
                        { width: '*', text: `Hasta ${this.datePipe.transform(this.to, 'mediumDate')}` },
                    ],
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: [60, 60, 250, 100, 60, 42, 40, 40],
                        headerRows: 1,
                        body: prestamoBody,
                    },
                    layout: 'lightHorizontalLines',
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: [60, 60, 250, 135, 60, 55, 60],
                        headerRows: 1,
                        body: [
                            [
                                { text: 'Total', fontSize: 14, style: 'tableHeader' },
                                {},
                                {},
                                { text: `${prestamoValues.totalInventario}`, alignment: 'center', style: 'tableHeader' },
                                { text: `Bol. ${prestamoValues.totalMontoPrestamo}`, alignment: 'center', style: 'tableHeader' },
                                { text: `Bol. ${prestamoValues.totalInteres}`, style: 'tableHeader' },
                                { text: `Bol. ${prestamoValues.totalCosto}`, alignment: 'center', style: 'tableHeader' },
                            ],
                        ],
                    },
                    layout: 'noBorders',
                },
            ],
            styles: {
                tableHeader: {
                    bold: true,
                    fontSize: 10,
                    color: 'black',
                },
                tableExample: {
                    margin: [0, 10, 0, 5],
                },
            },
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(reporte).open();
    }
};
PdfReportePrestamoComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
PdfReportePrestamoComponent.propDecorators = {
    prestamos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PdfReportePrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-reporte-prestamo',
        template: _raw_loader_pdf_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PdfReportePrestamoComponent);



/***/ }),

/***/ "GMZp":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "GNSx":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PdfReporteTransaccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReporteTransaccionComponent", function() { return PdfReporteTransaccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-transaccion.component.html */ "JaSY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/business.service */ "cwzI");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);








pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
let PdfReporteTransaccionComponent = class PdfReporteTransaccionComponent {
    constructor(businessService, datePipe) {
        this.businessService = businessService;
        this.datePipe = datePipe;
        this.transacciones = [];
        this.business = this.businessService.businessInformation;
    }
    ngOnInit() { }
    subscribeBusiness() {
        this.businessService.business.subscribe((business) => {
            if (business) {
                this.business = business;
            }
        });
    }
    exportToPdf() {
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
PdfReporteTransaccionComponent.ctorParameters = () => [
    { type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__["BusinessService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
PdfReporteTransaccionComponent.propDecorators = {
    transacciones: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PdfReporteTransaccionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-transaccion',
        template: _raw_loader_pdf_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PdfReporteTransaccionComponent);



/***/ }),

/***/ "JQJn":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pdf-reporte-impresion works!</p>\n");

/***/ }),

/***/ "JaSY":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "L97z":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-transaccion/card-reporte-transaccion.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Compra Venta Dolar\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-transaccion [transacciones]=\"transacciones\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-transaccion>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Operación\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Dolares\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Precio dolar\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Bol.\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Precio dolar oficial\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad real\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Diferencia\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"transacciones\" >\n                            <tr\n                              *ngFor=\"let transaccion of transacciones\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{transaccion.createdAt | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{transaccion.operacion}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{transaccion.cantidad}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    $. {{transaccion.tipoCambio}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{(transaccion.tipoCambio * transaccion.cantidad).toFixed(1)}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{transaccion.tipoCambioOficial}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{(transaccion.tipoCambioOficial * transaccion.cantidad).toFixed(1)}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{transaccion.diferencia}}\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "LBXl":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "MRQM":
/*!**********************************************************!*\
  !*** ./src/app/views/admin/reporte/reporte.component.ts ***!
  \**********************************************************/
/*! exports provided: ReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteComponent", function() { return ReporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reporte.component.html */ "l86T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ReporteComponent = class ReporteComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReporteComponent.ctorParameters = () => [];
ReporteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reporte',
        template: _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ReporteComponent);



/***/ }),

/***/ "MyL/":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXJlcG9ydGUtcGFnby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Nniu":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-list/card-reporte-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CardReporteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReporteListComponent", function() { return CardReporteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-list.component.html */ "gwy0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let CardReporteListComponent = class CardReporteListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToAnotherPage(pageName) {
        this.router.navigate([`admin/reportes/${pageName}`,]);
    }
    goToAnotherPageEstado(pageName, estado) {
        this.router.navigate([`admin/reportes/${pageName}`, estado]);
    }
    setEstado(estado = '') {
        this.estado = estado;
    }
};
CardReporteListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CardReporteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-list',
        template: _raw_loader_card_reporte_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReporteListComponent);



/***/ }),

/***/ "PX1f":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pdf-reporte-pago works!</p>\n");

/***/ }),

/***/ "PuVi":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-inventario/card-reporte-inventario.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CardReporteInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReporteInventarioComponent", function() { return CardReporteInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-inventario.component.html */ "+Zr/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




let CardReporteInventarioComponent = class CardReporteInventarioComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goToBackPage() {
        this.location.back();
    }
};
CardReporteInventarioComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
CardReporteInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-inventario',
        template: _raw_loader_card_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReporteInventarioComponent);



/***/ }),

/***/ "QXFI":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Pagos\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "SFmO":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-impresion/card-reporte-impresion.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CardReporteImpresionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReporteImpresionComponent", function() { return CardReporteImpresionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-impresion.component.html */ "7LO/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/reporte.service */ "Tutu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let CardReporteImpresionComponent = class CardReporteImpresionComponent {
    constructor(reporteService, location, fb) {
        this.reporteService = reporteService;
        this.location = location;
        this.fb = fb;
        this.loading = false;
        this.impresiones = [];
        this.reporteForm = this.fb.group({
            from: [new Date().toISOString().slice(0, 19).replace('T', ' ')],
            to: [new Date().toISOString().slice(0, 19).replace('T', ' ')]
        });
    }
    ngOnInit() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getImpresiones() {
        this.sub.add(this.reporteService.getImpresionesByDate({
            from: this.reporteForm.value.from,
            to: this.reporteForm.value.to
        }).subscribe((impresiones) => {
            if (impresiones) {
                this.impresiones = impresiones;
            }
        }));
    }
    goToBackPage() {
        this.location.back();
    }
};
CardReporteImpresionComponent.ctorParameters = () => [
    { type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__["ReporteService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxFormBuilder"] }
];
CardReporteImpresionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-impresion',
        template: _raw_loader_card_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReporteImpresionComponent);



/***/ }),

/***/ "SjkY":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Ingresos y salidas\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-ingreso-salida [movimientos]=\"movimientos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-ingreso-salida>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de movimiento\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Ingreso/Gasto\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Concepto\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Bol.\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"movimientos\" >\n                            <tr\n                              *ngFor=\"let movimiento of movimientos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{movimiento.createdAt | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{movimiento.tipo?'INGRESO':'GASTO'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{movimiento.concepto}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{movimiento.cantidad}}\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "Tutu":
/*!**************************************************!*\
  !*** ./src/app/core/services/reporte.service.ts ***!
  \**************************************************/
/*! exports provided: ReporteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteService", function() { return ReporteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let ReporteService = class ReporteService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getPrestamosByDate({ from, to, estado }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/prestamo?from=${from}&to=${to}&estado=${estado}`, { headers });
    }
    getPagosByDate({ from, to }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/pago?from=${from}&to=${to}`, { headers });
    }
    getImpresionesByDate({ from, to }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/impresion?from=${from}&to=${to}`, { headers });
    }
    getInventarioByDate({ from, to }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/inventario?from=${from}&to=${to}`, { headers });
    }
    getTransaccionByDate({ from, to }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/transaccion?from=${from}&to=${to}`, { headers });
    }
    getIngresoSalidaByDate({ from, to }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/reporte/movimiento?from=${from}&to=${to}`, { headers });
    }
};
ReporteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReporteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReporteService);



/***/ }),

/***/ "ZhH5":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pdf-reporte-inventario works!</p>\n");

/***/ }),

/***/ "Zx+K":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CardReportePagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReportePagoComponent", function() { return CardReportePagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-pago.component.html */ "QXFI");
/* harmony import */ var _card_reporte_pago_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-reporte-pago.component.css */ "MyL/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





let CardReportePagoComponent = class CardReportePagoComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goToBackPage() {
        this.location.back();
    }
};
CardReportePagoComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
CardReportePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card-reporte-pago',
        template: _raw_loader_card_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_reporte_pago_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardReportePagoComponent);



/***/ }),

/***/ "auY5":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PdfPrestamoCanceladoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrestamoCanceladoComponent", function() { return PdfPrestamoCanceladoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_prestamo_cancelado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-prestamo-cancelado.component.html */ "nLhP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
let PdfPrestamoCanceladoComponent = class PdfPrestamoCanceladoComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    ngOnInit() { }
    exportToPdf() {
        let totalInventario = 0;
        let totalCostoPrestamos = 0;
        let totalImpresiones = 0;
        let totalcargosExtra = 0;
        let totalInteres = 0;
        let totalPagos = 0;
        const bodyPrestamo = [
            [
                { text: "Fecha de Prestamo", style: "tableHeader" },
                { text: "Fecha de final", style: "tableHeader" },
                { text: "Cliente", alignment: "center", style: "tableHeader" },
                { text: "Prenda", alignment: "center", style: "tableHeader" },
                {
                    text: "Monto de prestamo",
                    alignment: "center",
                    style: "tableHeader",
                },
                {
                    text: "Comision/Reimpresiones",
                    style: "tableHeader",
                    alignment: "center",
                },
                {
                    text: "Cargos extra",
                    style: "tableHeader",
                    alignment: "center",
                },
                {
                    text: "Interes cobrados",
                    style: "tableHeader",
                    alignment: "center",
                },
                {
                    text: "Pagos cobrados",
                    style: "tableHeader",
                    alignment: "center",
                },
            ],
        ];
        for (const prestamo of this.prestamos) {
            totalInventario += +prestamo.inventario.length;
            totalCostoPrestamos += +prestamo.costoPrestamo;
            totalImpresiones += +prestamo.costoImpresion + +prestamo.costoAdministracion;
            totalcargosExtra += +prestamo.costoPiso;
            totalInteres += +prestamo.cobroInteres;
            totalPagos += +prestamo.costoCancelado - +prestamo.cobroInteres;
            bodyPrestamo.push([
                { text: `${this.datePipe.transform(prestamo.fechaInicio, 'mediumDate')}`, fontSize: 10, alignment: "center" },
                {
                    text: `${this.datePipe.transform(prestamo.fechaFinal, 'mediumDate')}`,
                    fontSize: 10,
                    alignment: "center",
                },
                {
                    text: `${prestamo.client.name}`,
                    fontSize: 10,
                    alignment: "center",
                },
                {
                    text: `${prestamo.inventario.map(i => (i.descripcion + ' '))}`,
                    fontSize: 10,
                    alignment: "center",
                },
                { text: `Bol. ${prestamo.costoPrestamo}`, fontSize: 10, alignment: "center" },
                { text: `Bol. ${(+prestamo.costoImpresion + +prestamo.costoAdministracion).toFixed(1)}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${prestamo.costoPiso}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${prestamo.cobroInteres}`, alignment: "center", fontSize: 10 },
                { text: `Bol. ${(+prestamo.costoCancelado - +prestamo.cobroInteres).toFixed(1)}`, fontSize: 10, alignment: "center" },
            ]);
        }
        ;
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
                            image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["logoCaysool"],
                        },
                        [
                            // REPORTE DE PRESTAMOS
                            {
                                text: `Reporte de "PRESTAMOS ${this.prestamos[0].estado}S"`,
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
                            text: `Prestamos cancelados Desde ${this.datePipe.transform(this.from, "mediumDate")}`,
                        },
                        {
                            width: "*",
                            text: `Hasta ${this.datePipe.transform(this.to, "mediumDate")}`,
                        },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [60, 60, 120, 100, 60, 60, 55, 55, 55],
                        headerRows: 1,
                        body: bodyPrestamo,
                    },
                    layout: "lightHorizontalLines",
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [60, 100, 120, 100, 60, 60, 70, 60, 60],
                        headerRows: 1,
                        body: [
                            [
                                { text: "Total", fontSize: 14, style: "tableHeader" },
                                {},
                                {},
                                { text: `${totalInventario} unidades`, alignment: "center", style: "tableHeader" },
                                { text: `Bol. ${totalCostoPrestamos.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                                { text: `Bol. ${totalImpresiones.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                                { text: `Bol. ${totalcargosExtra.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                                { text: `Bol. ${totalInteres.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                                { text: `Bol. ${totalPagos.toFixed(1)}`, alignment: "center", style: "tableHeader" },
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
PdfPrestamoCanceladoComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
PdfPrestamoCanceladoComponent.propDecorators = {
    prestamos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PdfPrestamoCanceladoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-pdf-prestamo-cancelado",
        template: _raw_loader_pdf_prestamo_cancelado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PdfPrestamoCanceladoComponent);



/***/ }),

/***/ "bVnx":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PdfReporteImpresionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReporteImpresionComponent", function() { return PdfReporteImpresionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-impresion.component.html */ "JQJn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PdfReporteImpresionComponent = class PdfReporteImpresionComponent {
    constructor() { }
    ngOnInit() {
    }
};
PdfReporteImpresionComponent.ctorParameters = () => [];
PdfReporteImpresionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-impresion',
        template: _raw_loader_pdf_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfReporteImpresionComponent);



/***/ }),

/***/ "cT9j":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PdfReporteInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReporteInventarioComponent", function() { return PdfReporteInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-inventario.component.html */ "ZhH5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PdfReporteInventarioComponent = class PdfReporteInventarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PdfReporteInventarioComponent.ctorParameters = () => [];
PdfReporteInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-inventario',
        template: _raw_loader_pdf_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfReporteInventarioComponent);



/***/ }),

/***/ "cVPJ":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "dh3m":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-prestamo/card-reporte-prestamo.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Prestamos {{ estado }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <!--<app-pdf-reporte-prestamo-activo *ngIf=\"estado==='ACTIVO'\" [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-prestamo-activo>-->\n                <app-pdf-prestamo-cancelado [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-prestamo-cancelado>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Vencimiento\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cliente\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Monto de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Interés a Pagar\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Total\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Por Cobrar\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"prestamos\" >\n                            <tr\n                              *ngFor=\"let prestamo of prestamos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{prestamo.fechaInicio | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{prestamo.fechaFinal | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{prestamo.client.name}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoPrestamo}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoInteres}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoTotal}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{(+prestamo.costoTotal - +prestamo.costoCancelado).toFixed(1)}}\n                              </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "gBSj":
/*!*******************************************************!*\
  !*** ./src/app/views/admin/reporte/reporte.module.ts ***!
  \*******************************************************/
/*! exports provided: ReporteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteModule", function() { return ReporteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _reporte_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-routing.module */ "ymRX");
/* harmony import */ var _reporte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte.component */ "MRQM");
/* harmony import */ var _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/card-reporte-list/card-reporte-list.component */ "Nniu");
/* harmony import */ var _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/card-reporte-prestamo/card-reporte-prestamo.component */ "ja2y");
/* harmony import */ var _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cards/card-reporte-inventario/card-reporte-inventario.component */ "PuVi");
/* harmony import */ var _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/card-reporte-pago/card-reporte-pago.component */ "Zx+K");
/* harmony import */ var _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards/card-reporte-impresion/card-reporte-impresion.component */ "SFmO");
/* harmony import */ var _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cards/card-reporte-transaccion/card-reporte-transaccion.component */ "1gHi");
/* harmony import */ var _components_pdfs_pdf_reporte_impresion_pdf_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component */ "bVnx");
/* harmony import */ var _components_pdfs_pdf_reporte_pago_pdf_reporte_pago_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component */ "9LgK");
/* harmony import */ var _components_pdfs_pdf_reporte_inventario_pdf_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component */ "cT9j");
/* harmony import */ var _components_pdfs_pdf_reporte_transaccion_pdf_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component */ "GNSx");
/* harmony import */ var _components_pdfs_pdf_reporte_prestamo_pdf_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component */ "9qf7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "7PmN");
/* harmony import */ var _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component */ "pGE7");
/* harmony import */ var _components_pdfs_pdf_reporte_ingreso_salida_pdf_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component */ "tkTM");
/* harmony import */ var _components_pdfs_pdf_prestamo_activo_pdf_prestamo_activo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component */ "76eo");
/* harmony import */ var _components_pdfs_pdf_prestamo_cancelado_pdf_prestamo_cancelado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component */ "auY5");




















let ReporteModule = class ReporteModule {
};
ReporteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _reporte_component__WEBPACK_IMPORTED_MODULE_3__["ReporteComponent"],
            _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_4__["CardReporteListComponent"],
            _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_5__["CardReportePrestamoComponent"],
            _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_6__["CardReporteInventarioComponent"],
            _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__["CardReportePagoComponent"],
            _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_8__["CardReporteImpresionComponent"],
            _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__["CardReporteTransaccionComponent"],
            _components_pdfs_pdf_reporte_impresion_pdf_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_10__["PdfReporteImpresionComponent"],
            _components_pdfs_pdf_reporte_pago_pdf_reporte_pago_component__WEBPACK_IMPORTED_MODULE_11__["PdfReportePagoComponent"],
            _components_pdfs_pdf_reporte_inventario_pdf_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_12__["PdfReporteInventarioComponent"],
            _components_pdfs_pdf_reporte_transaccion_pdf_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_13__["PdfReporteTransaccionComponent"],
            _components_pdfs_pdf_reporte_prestamo_pdf_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_14__["PdfReportePrestamoComponent"],
            _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_16__["CardReporteIngresoSalidaComponent"],
            _components_pdfs_pdf_reporte_ingreso_salida_pdf_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_17__["PdfReporteIngresoSalidaComponent"],
            _components_pdfs_pdf_prestamo_activo_pdf_prestamo_activo_component__WEBPACK_IMPORTED_MODULE_18__["PdfPrestamoActivoComponent"],
            _components_pdfs_pdf_prestamo_cancelado_pdf_prestamo_cancelado_component__WEBPACK_IMPORTED_MODULE_19__["PdfPrestamoCanceladoComponent"],
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _reporte_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReporteRoutingModule"]],
    })
], ReporteModule);



/***/ }),

/***/ "gwy0":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-list/card-reporte-list.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        Reportes\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <div class=\"w-full my-2 relative p-2 flex flex-col\">\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Prestamos\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'CANCELADO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos cancelados\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'ACTIVO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos vigentes\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n              type=\"button\"\n              class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n              (click)=\"goToAnotherPageEstado('prestamos', 'VENCIDO')\">\n              <div class=\"flex flex-col\">\n                <p class=\"p-3\">\n                  Prestamos vencidos\n                </p>\n                <i class=\"text-4xl fas fa-calendar\"></i>\n              </div>\n            </button>\n            </div>\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Compras y ventas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('compra-venta-dolar')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Compra y venta de dolar\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n                *ngIf=\"false\"\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('venta')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ventas\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Ingresos y Salidas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('ingreso-salida')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ingresos y salidas\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "ja2y":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-prestamo/card-reporte-prestamo.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CardReportePrestamoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReportePrestamoComponent", function() { return CardReportePrestamoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-prestamo.component.html */ "dh3m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/reporte.service */ "Tutu");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Subscription */ "zB/H");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__);








let CardReportePrestamoComponent = class CardReportePrestamoComponent {
    constructor(reporteService, location, route, fb) {
        this.reporteService = reporteService;
        this.location = location;
        this.route = route;
        this.fb = fb;
        this.estado = '';
        this.loading = false;
        this.prestamos = [];
        this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10),],
            to: [new Date().toISOString().substring(0, 10),]
        });
    }
    ngOnInit() {
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.estado = this.route.snapshot.paramMap.get('prestamoEstado');
        this.getPrestamos();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getPrestamos() {
        this.loading = true;
        console.log(this.reporteForm.value);
        this.sub.add(this.reporteService.getPrestamosByDate({
            from: this.reporteForm.value.from,
            to: this.reporteForm.value.to,
            estado: this.estado
        }).subscribe((prestamos) => {
            console.log(prestamos);
            if (prestamos) {
                this.prestamos = prestamos;
            }
            this.loading = false;
        }));
    }
    goToBackPage() {
        this.location.back();
    }
    save() {
        this.getPrestamos();
    }
};
CardReportePrestamoComponent.ctorParameters = () => [
    { type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__["ReporteService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["RxFormBuilder"] }
];
CardReportePrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-prestamo',
        template: _raw_loader_card_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReportePrestamoComponent);



/***/ }),

/***/ "l86T":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/reporte.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "mbIT":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "nLhP":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "pGCz":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "pGE7":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CardReporteIngresoSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReporteIngresoSalidaComponent", function() { return CardReporteIngresoSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-reporte-ingreso-salida.component.html */ "SjkY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/reporte.service */ "Tutu");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Subscription */ "zB/H");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__);







let CardReporteIngresoSalidaComponent = class CardReporteIngresoSalidaComponent {
    constructor(reporteService, location, fb) {
        this.reporteService = reporteService;
        this.location = location;
        this.fb = fb;
        this.loading = false;
        this.movimientos = [];
        this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10),],
            to: [new Date().toISOString().substring(0, 10),]
        });
    }
    ngOnInit() {
        this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.getIngresoSalida();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getIngresoSalida() {
        this.loading = true;
        this.sub.add(this.reporteService.getIngresoSalidaByDate({
            from: this.reporteForm.value.from,
            to: this.reporteForm.value.to
        }).subscribe((movimientos) => {
            if (movimientos) {
                this.movimientos = movimientos;
            }
            this.loading = false;
        }));
    }
    goToBackPage() {
        this.location.back();
    }
    save() {
        this.getIngresoSalida();
    }
};
CardReporteIngresoSalidaComponent.ctorParameters = () => [
    { type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__["ReporteService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["RxFormBuilder"] }
];
CardReporteIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-ingreso-salida',
        template: _raw_loader_card_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CardReporteIngresoSalidaComponent);



/***/ }),

/***/ "pshJ":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "s7HC":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n");

/***/ }),

/***/ "tkTM":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PdfReporteIngresoSalidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReporteIngresoSalidaComponent", function() { return PdfReporteIngresoSalidaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reporte-ingreso-salida.component.html */ "s7HC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/base64Images */ "5Y+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
let PdfReporteIngresoSalidaComponent = class PdfReporteIngresoSalidaComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    ngOnInit() {
    }
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
            ],
        ];
        for (let movimiento of this.movimientos) {
            if (movimiento.tipo) {
                totalIngresos += +movimiento.cantidad;
            }
            else {
                totalGastos += +movimiento.cantidad;
            }
            bodyMovimiento.push([
                { text: `${this.datePipe.transform(movimiento.createdAt, 'medium')}`, alignment: "center" },
                { text: `${movimiento.tipo ? 'INGRESO' : 'SALIDA'}`, alignment: "center" },
                { text: `${movimiento.concepto}`, alignment: "center" },
                { text: `Bol. ${movimiento.cantidad}`, alignment: "center" },
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
                            text: `Ingresos y salidas Desde ${this.datePipe.transform(this.from, 'mediumDate')}`,
                            bold: false,
                            fontSize: 12,
                        },
                        { width: "*", text: `Hasta ${this.datePipe.transform(this.to, 'mediumDate')}` },
                    ],
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [60, 100, "*", "*"],
                        headerRows: 1,
                        body: bodyMovimiento,
                    },
                    layout: "lightHorizontalLines",
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [150, 100, 30],
                        headerRows: 1,
                        body: [
                            [
                                { text: "Total ingresos", fontSize: 13, style: "tableHeader" },
                                { text: `${totalIngresos}`, alignment: "right", fontSize: 13 },
                                { text: "Bol.", alignment: "left", fontSize: 16 },
                            ],
                            [
                                { text: "Total gastos", fontSize: 13, style: "tableHeader" },
                                { text: `${totalGastos}`, alignment: "right", fontSize: 13 },
                                { text: "Bol.", alignment: "left", fontSize: 16 },
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
PdfReporteIngresoSalidaComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
];
PdfReporteIngresoSalidaComponent.propDecorators = {
    movimientos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    to: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PdfReporteIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-ingreso-salida',
        template: _raw_loader_pdf_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], PdfReporteIngresoSalidaComponent);



/***/ }),

/***/ "ymRX":
/*!***************************************************************!*\
  !*** ./src/app/views/admin/reporte/reporte-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ReporteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteRoutingModule", function() { return ReporteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/card-reporte-impresion/card-reporte-impresion.component */ "SFmO");
/* harmony import */ var _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component */ "pGE7");
/* harmony import */ var _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/card-reporte-inventario/card-reporte-inventario.component */ "PuVi");
/* harmony import */ var _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cards/card-reporte-list/card-reporte-list.component */ "Nniu");
/* harmony import */ var _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/card-reporte-pago/card-reporte-pago.component */ "Zx+K");
/* harmony import */ var _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards/card-reporte-prestamo/card-reporte-prestamo.component */ "ja2y");
/* harmony import */ var _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cards/card-reporte-transaccion/card-reporte-transaccion.component */ "1gHi");
/* harmony import */ var _reporte_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reporte.component */ "MRQM");











const routes = [{
        path: '',
        component: _reporte_component__WEBPACK_IMPORTED_MODULE_10__["ReporteComponent"],
        children: [
            {
                path: '',
                component: _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_6__["CardReporteListComponent"]
            },
            {
                path: 'prestamos/:prestamoEstado',
                component: _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_8__["CardReportePrestamoComponent"]
            },
            {
                path: 'pagos',
                component: _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__["CardReportePagoComponent"]
            },
            {
                path: 'impresiones',
                component: _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_3__["CardReporteImpresionComponent"]
            },
            {
                path: 'inventario',
                component: _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_5__["CardReporteInventarioComponent"]
            },
            {
                path: 'compra-venta-dolar',
                component: _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__["CardReporteTransaccionComponent"]
            },
            {
                path: 'ingreso-salida',
                component: _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__["CardReporteIngresoSalidaComponent"]
            },
        ]
    }];
let ReporteRoutingModule = class ReporteRoutingModule {
};
ReporteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReporteRoutingModule);



/***/ }),

/***/ "zB/H":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "mbIT");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "GMZp");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "pshJ");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "LBXl");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ })

}]);
//# sourceMappingURL=reporte-reporte-module-es2015.js.map