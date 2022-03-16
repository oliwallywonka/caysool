(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prestamo-prestamo-module"], {
    /***/
    "5ZNG":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/tabs/tab-prestamo/tab-prestamo.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words  w-full mb-6  rounded\">\n  <div class=\"w-full\">\n    <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row\">\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(1)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 1, 'text-white bg-sky-700': openTab === 1}\">\n          Activos\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(2)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 2, 'text-white bg-sky-700': openTab === 2}\">\n          Cancelados\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(3)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 3, 'text-white bg-sky-700': openTab === 3}\">\n          Vencidos\n        </a>\n      </li>\n\n      <li class=\"-mb-px mr-2 last:mr-0 flex-auto text-center\">\n        <a\n          class=\"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal\"\n          (click)=\"toggleTabs(4)\"\n          [ngClass]=\"{'text-sky-700 bg-white': openTab !== 4, 'text-white bg-sky-700': openTab === 4}\">\n          Rematados\n        </a>\n      </li>\n\n    </ul>\n    <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n      <div class=\"px-4 py-5 flex-auto\">\n        <div class=\"tab-content tab-space\">\n          <div *ngIf=\"openTab === 1\">\n\n            <app-card-prestamos [estado]=\"'ACTIVO'\" ></app-card-prestamos>\n          </div>\n          <div *ngIf=\"openTab === 2\">\n            <app-card-prestamos [estado]=\"'CANCELADO'\" ></app-card-prestamos>\n          </div>\n          <div *ngIf=\"openTab === 3\">\n            <app-card-prestamos [estado]=\"'VENCIDO'\" ></app-card-prestamos>\n          </div>\n          <div *ngIf=\"openTab === 4\">\n            <app-card-prestamos [estado]=\"'REMATADO'\" ></app-card-prestamos>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "6JaV":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-delete-pago/modal-delete-pago.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"modal.visible&&modal.modalName==='deletePagoModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           ELIMINAR PAGO\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <p> ¿ Desea eliminar el pago Nº {{ pago.id }} permanentemente? </p>\n            <p> Monto del Pago: Bol. {{ pago.costoPago }} </p>\n            <p> Monto de Interés: Bol. {{ pago.costoInteres }} </p>\n            <p> Monto Administración: Bol. {{ pago.costoAdministracion }} </p>\n            <p> Monto Piso (extras): Bol. {{ pago.costoPiso }} </p>\n            <p> Monto Total : Bol. {{ pago.costoTotal }} </p>\n            <p> Esta acción no puede revertirse </p>\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          [disabled]=\"loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"save()\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='deletePagoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "7Aut":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-pago/modal-pago.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Aut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"modal.visible&&modal.modalName==='pagoModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Pago del prestamo {{ prestamo?.id }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"pagoForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <app-select\n              [inputForm]=\"pagoForm\"\n              [options]=\"tipoPagoOptions\"\n              inputLabel=\"TIPO DE PAGO\"\n              inputFormName=\"tipoPago\"\n              formControlName=\"tipoPago\"\n              (selectEvent)=\"calculateInteresPago()\"\n              [value]=\"pagoForm.value.tipoPago\">\n            </app-select>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-select\n              [inputForm]=\"pagoForm\"\n              [options]=\"administracionOptions\"\n              inputLabel=\"COMISION ADMINISTRATIVA (cargos extra)\"\n              inputFormName=\"costoAdministracion\"\n              formControlName=\"costoAdministracion\"\n              (selectEvent)=\"calculateInteresPago()\"\n              [value]=\"pagoForm.value.costoAdministracion\">\n            </app-select>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              [inputForm]=\"pagoForm\"\n              inputLabel=\"COMISION PISO (cargos extra)\"\n              inputType=\"number\"\n              inputPlaceholder=\"Ingrese su nombre...\"\n              inputFormName=\"costoPiso\"\n              formControlName=\"costoPiso\"\n              (inputEvent)=\"calculateInteresPago()\"\n              [value]=\"pagoForm.value.costoPiso\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"pagoForm\"\n                inputLabel=\"INTERÉS GENERADO\"\n                inputType=\"number\"\n                inputFormName=\"costoInteres\"\n                formControlName=\"costoInteres\"\n                (selectEvent)=\"calculateInteresPago()\"\n                [isDisabled]=\"true\"\n                [value]=\"pagoForm.value.costoInteres\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"pagoForm\"\n                inputLabel=\"CANTIDAD A PAGAR\"\n                inputType=\"number\"\n                inputFormName=\"costoPago\"\n                formControlName=\"costoPago\"\n                (selectEvent)=\"calculateInteresPago()\"\n                [value]=\"pagoForm.value.costoPago\">\n            </app-input>\n          </div>\n\n        </div>\n\n        <div class=\"flex flex-col items-start justify-between px-4 border-b border-solid border-blueGray-200 rounded-t\">\n          <h4 *ngIf=\"pagoForm.value.tipoPago==='PAGO'\" class=\"text-xl text-gray-400 font-semibold\">\n            Interes generado de {{ diasInteres }} dias: Bol. {{ costoInteres.toFixed(1) }}\n          </h4>\n          <h4 class=\"text-xl text-gray-400 font-semibold\">\n            Interes al final al plazo: Bol. {{ prestamo.costoInteres }}\n          </h4>\n          <h4 class=\"text-xl text-gray-400 font-semibold\">\n            Costo Prestamo: Bol. {{ prestamo.costoPrestamo }}\n          </h4>\n          <h4 class=\"text-xl text-gray-400 font-semibold\">\n            Costo Total: Bol. {{ prestamo.costoTotal }}\n          </h4>\n          <h4 class=\"text-xl text-green-600 font-semibold\">\n            Por Cobrar: Bol. {{ (+prestamo.costoTotal - +prestamo.costoCancelado).toFixed(1) }}\n          </h4>\n          <h4 class=\"text-2xl font-semibold\">\n            TOTAL Pago: Bol. {{ (+pagoForm.value.costoAdministracion + +pagoForm.value.costoPiso + +pagoForm.value.costoPago + +pagoForm.value.costoInteres).toFixed(1) }}\n          </h4>\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!pagoForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='pagoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "81EI":
    /*!*************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/pdfs/pdf-pago/pdf-pago.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PdfPagoComponent */

    /***/
    function EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfPagoComponent", function () {
        return PdfPagoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-pago.component.html */
      "ruDw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/business.service */
      "cwzI");
      /* harmony import */


      var src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/helpers/numberToLetter */
      "mHh0");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;

      var PdfPagoComponent = /*#__PURE__*/function () {
        function PdfPagoComponent(businessService, datePipe) {
          _classCallCheck(this, PdfPagoComponent);

          this.businessService = businessService;
          this.datePipe = datePipe;
          this.business = this.businessService.businessInformation;
        }

        _createClass(PdfPagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.businessService.business.subscribe(function (business) {
              _this.business = business;
            });
            this.numeroALiteral();
          }
        }, {
          key: "numeroALiteral",
          value: function numeroALiteral() {
            this.literal = "";
            var decimal = ((+this.pago.costoTotal - Math.trunc(+this.pago.costoTotal)) * 10).toFixed(0);
            var litera = Object(src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__["numeroALetras"])(this.pago.costoTotal, {
              plural: "BOLIVIANOS",
              singular: "BOLIVIANO",
              centPlural: "CENTAVOS",
              centSingular: "CENTAVO"
            });
            this.literal = "SON: ".concat(litera, " ").concat(decimal, "0/100");
          }
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var pago = {
              // a string or { width: number, height: number }
              pageSize: "LETTER",
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: "portrait",
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [40, 30, 40, 30],
              content: [{
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 0, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"]
                }, [{
                  text: "COMPROBANTE DE PAGO",
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, {
                columns: [{
                  width: 150,
                  text: ["CEL:78857480 - 78857480\n", 'Urb. 21 de octubre "A" Dist. 7 Ex Tranca San Roque Av. Panamericana Nro 3174 Entre calle Gral. juan Jose Torrez\n', "El Alto-La Paz-Bolivia\n"],
                  fontSize: 8,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }, ["\n", {
                  text: "Fecha: ".concat(this.datePipe.transform(this.pago.createdAt, "medium")),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [19, 0, 0, 0]
                }], ["\n", {
                  text: "Nro de Recibo: ".concat(this.pago.id),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [19, 0, 0, 0]
                }]]
              }, {
                alignment: "justify",
                columns: [{
                  width: 400,
                  //nombre del cliente
                  text: ["Nombre: ".concat(this.prestamo.client.name, "\n")],
                  fontSize: 11,
                  alignment: "center",
                  margin: [0, 18, 0, 0]
                }, [{
                  text: "CI: ".concat(this.prestamo.client.ci),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [0, 18, 0, 5]
                }]]
              }, {
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 530,
                  y2: 0,
                  lineWidth: 3
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [48, 200, 150, 80],
                  headerRows: 7,
                  body: [[{
                    text: ""
                  }, {
                    text: "DETALLE",
                    alignment: "center",
                    style: "tableHeader",
                    bold: true,
                    colSpan: 2
                  }, {}, {
                    text: "TOTAL",
                    alignment: "center",
                    bold: true
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "AMORTIZACION",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoPago),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "INTERES",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoInteres),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "COMISION ADMINISTRATIVA",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoAdministracion),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "CARGOS GENERADOS",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoPiso),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "CAPITAL PRESTADO",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.prestamo.costoPrestamo),
                    alignment: "right"
                  }], [{
                    text: "Prenda",
                    fontSize: 10,
                    alignment: "center"
                  }, {
                    text: "".concat(this.prestamo.inventario.map(function (i) {
                      return i.descripcion + " ";
                    })),
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "",
                    alignment: "right"
                  }], [{
                    text: "TOTAL A PAGAR ".concat(this.literal),
                    alignment: "left",
                    fontSize: 9,
                    bold: true,
                    colSpan: 3
                  }, {}, {}, {
                    text: "Bol. ".concat(this.pago.costoTotal),
                    alignment: "right",
                    bold: true
                  }]]
                },
                layout: "lightHorizontalLines"
              }, " \n\n\n", {
                text: ["FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO"],
                fontSize: 12,
                alignment: "center"
              }, "\n\n", //aca segunda
              {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 0, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"]
                }, [{
                  text: "COMPROBANTE DE PAGO",
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, {
                columns: [{
                  width: 150,
                  text: ["CEL:78857480 - 78857480\n", 'Urb. 21 de octubre "A" Dist. 7 Ex Tranca San Roque Av. Panamericana Nro 3174 Entre calle Gral. juan Jose Torrez\n', "El Alto-La Paz-Bolivia\n"],
                  fontSize: 8,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }, ["\n", {
                  text: "Fecha: ".concat(this.datePipe.transform(this.pago.createdAt, "medium")),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [19, 0, 0, 0]
                }], ["\n", {
                  text: "Nro de Recibo: ".concat(this.pago.id),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [19, 0, 0, 0]
                }]]
              }, {
                alignment: "justify",
                columns: [{
                  width: 400,
                  //nombre del cliente
                  text: ["Nombre: ".concat(this.prestamo.client.name, "\n")],
                  fontSize: 11,
                  alignment: "center",
                  margin: [0, 18, 0, 0]
                }, [{
                  text: "CI: ".concat(this.prestamo.client.ci),
                  color: "#333333",
                  width: "*",
                  fontSize: 11,
                  bold: true,
                  alignment: "rigth",
                  margin: [0, 18, 0, 5]
                }]]
              }, {
                canvas: [{
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 530,
                  y2: 0,
                  lineWidth: 3
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [48, 200, 150, 80],
                  headerRows: 7,
                  body: [[{
                    text: ""
                  }, {
                    text: "DETALLE",
                    alignment: "center",
                    style: "tableHeader",
                    bold: true,
                    colSpan: 2
                  }, {}, {
                    text: "TOTAL",
                    alignment: "center",
                    bold: true
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "AMORTIZACION",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoPago),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "INTERES",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoInteres),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "COMISION ADMINISTRATIVA",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoAdministracion),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "CARGOS GENERADOS",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.pago.costoPiso),
                    alignment: "right"
                  }], [{
                    text: "",
                    alignment: "center"
                  }, {
                    text: "CAPITAL PRESTADO",
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "Bol. ".concat(this.prestamo.costoPrestamo),
                    alignment: "right"
                  }], [{
                    text: "Prenda",
                    fontSize: 10,
                    alignment: "center"
                  }, {
                    text: "".concat(this.prestamo.inventario.map(function (i) {
                      return i.descripcion + " ";
                    })),
                    fontSize: 10,
                    alignment: "left",
                    colSpan: 2
                  }, {}, {
                    text: "",
                    alignment: "right"
                  }], [{
                    text: "TOTAL A PAGAR ".concat(this.literal),
                    alignment: "left",
                    fontSize: 9,
                    bold: true,
                    colSpan: 3
                  }, {}, {}, {
                    text: "Bol. ".concat(this.pago.costoTotal),
                    alignment: "right",
                    bold: true
                  }]]
                },
                layout: "lightHorizontalLines"
              }, " \n\n\n", {
                text: ["FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO"],
                fontSize: 12,
                alignment: "center"
              }],
              styles: {
                notesTitle: {
                  fontSize: 8,
                  bold: true,
                  margin: [0, 50, 0, 3]
                },
                notesText: {
                  fontSize: 8
                }
              },
              tableHeader: {
                bold: true,
                fontSize: 12,
                color: "black"
              },
              defaultStyle: {
                columnGap: 20
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(pago).open();
          }
        }]);

        return PdfPagoComponent;
      }();

      PdfPagoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_4__["BusinessService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfPagoComponent.propDecorators = {
        pago: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        prestamo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PdfPagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-pdf-pago",
        template: _raw_loader_pdf_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfPagoComponent);
      /***/
    },

    /***/
    "AcEr":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-delete-pago/modal-delete-pago.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ModalDeletePagoComponent */

    /***/
    function AcEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDeletePagoComponent", function () {
        return ModalDeletePagoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_delete_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-delete-pago.component.html */
      "6JaV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/pago.service */
      "AntR");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");

      var ModalDeletePagoComponent = /*#__PURE__*/function () {
        function ModalDeletePagoComponent(pagoService, prestamoService, alertService, modalService) {
          _classCallCheck(this, ModalDeletePagoComponent);

          this.pagoService = pagoService;
          this.prestamoService = prestamoService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.publicUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].publicUrl;
          this.loading = false;
          this.modal = this.modalService.modal;
        }

        _createClass(ModalDeletePagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
            this.subscribePago();
            this.subscribePrestamo();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "refreshPagos",
          value: function refreshPagos() {
            var _this2 = this;

            this.sub.add(this.pagoService.getByPrestamoId(this.prestamo.id).subscribe(function (pagos) {
              _this2.pagoService.pagos.emit(pagos);
            }));
          }
        }, {
          key: "refreshPrestamo",
          value: function refreshPrestamo() {
            var _this3 = this;

            this.sub.add(this.prestamoService.getPrestamoById(this.prestamo.id).subscribe(function (prestamo) {
              _this3.prestamoService.prestamo.emit(prestamo);
            }));
          }
        }, {
          key: "subscribePago",
          value: function subscribePago() {
            var _this4 = this;

            this.sub.add(this.pagoService.pago.subscribe(function (pago) {
              _this4.pago = pago;
            }));
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this5 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this5.prestamo = prestamo;
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.pagoService.pago.emit(null);
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            this.loading = true;
            this.pagoService.deleteById(this.pago.id).subscribe(function (response) {
              _this6.loading = false;
              console.log(response);

              _this6.alertService.triggerMessage(response.message, 'success');

              _this6.refreshPagos();

              _this6.refreshPrestamo();

              _this6.closeModal();
            }, function (error) {
              _this6.loading = false;

              _this6.alertService.triggerMessage(error.error.message, 'error');

              _this6.closeModal();
            });
          }
        }]);

        return ModalDeletePagoComponent;
      }();

      ModalDeletePagoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_5__["PagoService"]
        }, {
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]
        }];
      };

      ModalDeletePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-delete-pago',
        template: _raw_loader_modal_delete_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalDeletePagoComponent);
      /***/
    },

    /***/
    "AntR":
    /*!***********************************************!*\
      !*** ./src/app/core/services/pago.service.ts ***!
      \***********************************************/

    /*! exports provided: PagoService */

    /***/
    function AntR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagoService", function () {
        return PagoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var PagoService = /*#__PURE__*/function () {
        function PagoService(http) {
          _classCallCheck(this, PagoService);

          this.http = http;
          this.pago = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pagos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(PagoService, [{
          key: "getByPrestamoId",
          value: function getByPrestamoId(prestamoId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/pago/prestamo/").concat(prestamoId), {
              headers: headers
            });
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/pago/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "postPago",
          value: function postPago(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.post("".concat(this.baseUrl, "/pago"), body, {
              headers: headers
            });
          }
        }, {
          key: "deleteById",
          value: function deleteById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http["delete"]("".concat(this.baseUrl, "/pago/").concat(id), {
              headers: headers
            });
          }
        }]);

        return PagoService;
      }();

      PagoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PagoService.propDecorators = {
        pago: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pagos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      PagoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PagoService);
      /***/
    },

    /***/
    "BN7A":
    /*!************************************************************!*\
      !*** ./src/app/views/admin/prestamo/prestamo.component.ts ***!
      \************************************************************/

    /*! exports provided: PrestamoComponent */

    /***/
    function BN7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoComponent", function () {
        return PrestamoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./prestamo.component.html */
      "F728");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrestamoComponent = /*#__PURE__*/function () {
        function PrestamoComponent() {
          _classCallCheck(this, PrestamoComponent);
        }

        _createClass(PrestamoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrestamoComponent;
      }();

      PrestamoComponent.ctorParameters = function () {
        return [];
      };

      PrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-prestamo',
        template: _raw_loader_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PrestamoComponent);
      /***/
    },

    /***/
    "C1X/":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/cards/card-prestamo-detalle/card-prestamo-detalle.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: CardPrestamoDetalleComponent */

    /***/
    function C1X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPrestamoDetalleComponent", function () {
        return CardPrestamoDetalleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_prestamo_detalle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-prestamo-detalle.component.html */
      "X270");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/impresion.service */
      "KujF");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/pago.service */
      "AntR");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var CardPrestamoDetalleComponent = /*#__PURE__*/function () {
        function CardPrestamoDetalleComponent(impresionService, pagoService, prestamoService, modalService, route, location, datePipe) {
          _classCallCheck(this, CardPrestamoDetalleComponent);

          this.impresionService = impresionService;
          this.pagoService = pagoService;
          this.prestamoService = prestamoService;
          this.modalService = modalService;
          this.route = route;
          this.location = location;
          this.datePipe = datePipe;
          this.historialArray = [];
          this.historialPagosArray = [];
          this.historialImpresionesArray = [];
          this.impresiones = [];
          this.pagos = [];
          this.amorizaciones = [];
          this.modal = this.modalService.modal;
        }

        _createClass(CardPrestamoDetalleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
            this.prestamoId = this.route.snapshot.paramMap.get('prestamoId');
            this.historialArray = [];
            this.getPrestamoById();
            this.getPagosByPrestamoId();
            this.getImpresionByPrestamoId();
            this.subscribePagos();
            this.subscribeImpresiones();
            this.subscribePrestamo();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "calculateDiasRestantes",
          value: function calculateDiasRestantes() {
            var diaInicio = moment__WEBPACK_IMPORTED_MODULE_10__(this.prestamo.fechaInicio).startOf('day');
            var diaFinal = moment__WEBPACK_IMPORTED_MODULE_10__(this.prestamo.fechaFinal).endOf('day');
            this.diasRestantes = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](diaFinal.diff(diaInicio)).asDays();
            this.diasRestantes = +this.diasRestantes.toFixed(1);
          }
        }, {
          key: "getPrestamoById",
          value: function getPrestamoById() {
            var _this7 = this;

            this.sub.add(this.prestamoService.getPrestamoById(+this.prestamoId).subscribe(function (prestamo) {
              _this7.prestamo = prestamo;

              _this7.calculateDiasRestantes();

              _this7.setHistorialPrestamo();
            }));
          }
        }, {
          key: "setHistorialPrestamo",
          value: function setHistorialPrestamo() {
            this.historialArray = [];
            var historialItem = {
              fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
              operacion: 'Prestamo',
              cargo: this.prestamo.costoPrestamo,
              comision: 0.00,
              cargoExtra: 0.00,
              amortiguado: 0.00
            };
            var historialItem2 = {
              fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
              operacion: 'Interés al finalizar el plazo',
              cargo: this.prestamo.costoInteres,
              comision: 0.00,
              cargoExtra: 0.00,
              amortiguado: 0.00
            };
            this.historialArray.push(historialItem);
            this.historialArray.push(historialItem2);
          }
        }, {
          key: "getPagosByPrestamoId",
          value: function getPagosByPrestamoId() {
            var _this8 = this;

            this.sub.add(this.pagoService.getByPrestamoId(+this.prestamoId).subscribe(function (pagos) {
              _this8.pagos = pagos;

              _this8.setHistorialPago();
            }));
          }
        }, {
          key: "subscribePagos",
          value: function subscribePagos() {
            var _this9 = this;

            this.sub.add(this.pagoService.pagos.subscribe(function (pagos) {
              if (pagos) {
                _this9.pagos = pagos;

                _this9.setHistorialPago();
              }
            }));
          }
        }, {
          key: "setHistorialPago",
          value: function setHistorialPago() {
            var _this10 = this;

            this.historialPagosArray = [];
            var costoPago = 0;
            this.pagos.map(function (pago) {
              costoPago += +pago.costoPago;
              var costoPorCobrar = _this10.prestamo.costoTotal - costoPago;
              var historialItem = Object.assign({
                fecha: _this10.datePipe.transform(pago.createdAt, 'medium'),
                operacion: pago.tipoPago === 'PAGO' ? 'PAGO' : pago.tipoPago === 'LIQUIDACION' ? 'PAGO LIQUIDACIÓN' : 'PAGO AMORTIZACION',
                cargo: pago.tipoPago === 'AMORTIZACION' ? 0.00 : (+pago.costoInteres + +pago.costoPago).toFixed(1),
                comision: pago.costoAdministracion,
                cargoExtra: pago.costoPiso,
                amortiguado: pago.tipoPago === 'AMORTIZACION' ? pago.costoPago : 0.00,
                costoPorCobrar2: costoPorCobrar.toFixed(1)
              }, pago);

              _this10.historialPagosArray.push(historialItem);
            });
          }
        }, {
          key: "getImpresionByPrestamoId",
          value: function getImpresionByPrestamoId() {
            var _this11 = this;

            this.sub.add(this.impresionService.getByPrestamoId(+this.prestamoId).subscribe(function (impresiones) {
              _this11.impresiones = impresiones;

              _this11.setHistorialImpresiones();
            }));
          }
        }, {
          key: "subscribeImpresiones",
          value: function subscribeImpresiones() {
            var _this12 = this;

            this.sub.add(this.impresionService.impresiones.subscribe(function (impresiones) {
              if (impresiones) {
                _this12.impresiones = impresiones;

                _this12.setHistorialImpresiones();
              }
            }));
          }
        }, {
          key: "setHistorialImpresiones",
          value: function setHistorialImpresiones() {
            var _this13 = this;

            this.historialImpresionesArray = [];
            this.impresiones.map(function (impresion) {
              var historialItem = {
                fecha: _this13.datePipe.transform(impresion.createdAt, 'medium'),
                operacion: "IMPRESI\xD3N ".concat(impresion.tipoDocumento === 'CONTRATO' ? 'CONTRATO' : 'PAGO'),
                cargo: impresion.costoImpresion,
                comision: 0.00,
                cargoExtra: 0.00,
                amortiguado: 0.00
              };

              _this13.historialImpresionesArray.push(historialItem);
            });
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this14 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              if (prestamo) {
                _this14.prestamo = prestamo;

                _this14.calculateDiasRestantes();

                _this14.setHistorialPrestamo();
              }
            }));
          }
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }, {
          key: "showCambioFechaModal",
          value: function showCambioFechaModal() {
            this.modal.modalName = 'prestamoEditModal';
            this.modal.visible = true;
            this.prestamoService.prestamo.emit(this.prestamo);
          }
        }, {
          key: "showPagoModal",
          value: function showPagoModal() {
            this.modal.modalName = 'pagoModal';
            this.modal.visible = true;
            this.prestamoService.prestamo.emit(this.prestamo);
            this.pagoService.pagos.emit(this.pagos);
          }
        }, {
          key: "showAmortiguarModal",
          value: function showAmortiguarModal() {
            this.modal.modalName = 'amortizacionModal';
            this.modal.visible = true;
            this.prestamoService.prestamo.emit(this.prestamo);
          }
        }, {
          key: "showImpresionPagoModal",
          value: function showImpresionPagoModal(pago) {
            this.modal.modalName = 'impresionContratoModal';
            this.modal.visible = true;
            this.pagoService.pago.emit(pago);
            this.prestamoService.prestamo.emit(this.prestamo);
          }
        }, {
          key: "showDeletePagoModal",
          value: function showDeletePagoModal(pago) {
            this.modal.modalName = 'deletePagoModal';
            this.modal.visible = true;
            this.pagoService.pago.emit(pago);
            this.prestamoService.prestamo.emit(this.prestamo);
          }
        }, {
          key: "showImpresionContratoModal",
          value: function showImpresionContratoModal() {
            this.modal.modalName = 'impresionPagoModal';
            this.modal.visible = true;
            this.prestamoService.prestamo.emit(this.prestamo);
          }
        }]);

        return CardPrestamoDetalleComponent;
      }();

      CardPrestamoDetalleComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_6__["ImpresionService"]
        }, {
          type: src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_8__["PagoService"]
        }, {
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_9__["PrestamoService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      CardPrestamoDetalleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-prestamo-detalle',
        template: _raw_loader_card_prestamo_detalle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardPrestamoDetalleComponent);
      /***/
    },

    /***/
    "CLcH":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-amortiguar/modal-amortiguar.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CLcH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"modal.visible&&modal.modalName==='amortizacionModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Pago del prestamo {{ prestamo?.id }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"amortizacionForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-select\n              [inputForm]=\"amortizacionForm\"\n              [options]=\"tipoAmortizacionOptions\"\n              inputLabel=\"TIPO DE PAGO\"\n              inputFormName=\"tipoPago\"\n              formControlName=\"tipoPago\"\n              [value]=\"amortizacionForm.value.tipoPago\">\n            </app-select>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-select\n              [inputForm]=\"amortizacionForm\"\n              [options]=\"administracionOptions\"\n              inputLabel=\"COMISION ADMINISTRATIVA (cargos extra)\"\n              inputFormName=\"costoAdministracion\"\n              formControlName=\"costoAdministracion\"\n              [value]=\"amortizacionForm.value.costoAdministracion\">\n            </app-select>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n              [inputForm]=\"amortizacionForm\"\n              inputLabel=\"COMISION PISO (cargos extra)\"\n              inputType=\"number\"\n              inputPlaceholder=\"Ingrese su nombre...\"\n              inputFormName=\"costoPiso\"\n              formControlName=\"costoPiso\"\n              [value]=\"amortizacionForm.value.costoPiso\">\n            </app-input>\n          </div>\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n            <app-input\n                [inputForm]=\"amortizacionForm\"\n                inputLabel=\"CANTIDAD A PAGAR\"\n                inputType=\"number\"\n                inputFormName=\"costoPago\"\n                formControlName=\"costoPago\"\n                [value]=\"amortizacionForm.value.costoPago\">\n            </app-input>\n          </div>\n\n        </div>\n\n        <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n          <h4 class=\"text-2xl font-semibold\">\n             TOTAL: Bol {{ +amortizacionForm.value.costoAdministracion + +amortizacionForm.value.costoPiso + +amortizacionForm.value.costoPago }}\n          </h4>\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          [disabled]=\"!amortizacionForm.valid || loading\"\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n        <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n        </button>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='amortizacionModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "F728":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/prestamo.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F728(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "J0G/":
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-pago/modal-pago.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ModalPagoComponent */

    /***/
    function J0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPagoComponent", function () {
        return ModalPagoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-pago.component.html */
      "7Aut");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/pago.service */
      "AntR");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

      var ModalPagoComponent = /*#__PURE__*/function () {
        function ModalPagoComponent(prestamoService, pagoService, alertService, modalService, fb) {
          _classCallCheck(this, ModalPagoComponent);

          this.prestamoService = prestamoService;
          this.pagoService = pagoService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.loading = false;
          this.pagos = [];
          this.pagosInteres = [];
          this.modal = this.modalService.modal;
          this.submitted = false;
          this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido'
          };
          this.administracionOptions = [{
            value: 5,
            name: '5'
          }, {
            value: 3,
            name: '3'
          }, {
            value: 0,
            name: '0'
          }];
          this.tipoPagoOptions = [{
            value: 'PAGO',
            name: 'PAGO'
          }, {
            value: 'LIQUIDACION',
            name: 'LIQUIDACIÓN'
          }, {
            value: 'AMORTIZACION',
            name: 'AMORTIZACIÓN'
          }];
          this.pagoForm = this.fb.group({
            tipoPago: ['PAGO', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoAdministracion: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoPiso: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoInteres: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoPago: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]]
          });
        }

        _createClass(ModalPagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            this.subscribePrestamo();
            this.subscribePagos();
            this.calculateInteresPago();
            console.log('modal call my name');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "subscribePagos",
          value: function subscribePagos() {
            var _this15 = this;

            this.sub.add(this.pagoService.pagos.subscribe(function (pagos) {
              _this15.pagos = pagos;

              _this15.calculateInteresPago();
            }));
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this16 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this16.prestamo = prestamo;

              _this16.calculateInteresPago();
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.pagoService.pago.emit(null);
          }
        }, {
          key: "refreshForm",
          value: function refreshForm() {
            this.pagoForm.resetForm();
          }
        }, {
          key: "successMessage",
          value: function successMessage() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'creado';
            this.alertService.alert.fire({
              title: "Pago ".concat(message, " Exitosamente"),
              icon: 'success'
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(message) {
            this.alertService.alert.fire({
              title: message,
              icon: 'error'
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this17 = this;

            this.loading = true;
            var body = {
              prestamo: this.prestamo.id,
              tipoPago: this.pagoForm.value.tipoPago,
              costoAdministracion: +this.pagoForm.value.costoAdministracion,
              costoPiso: +this.pagoForm.value.costoPiso,
              costoPago: +this.pagoForm.value.costoPago,
              costoInteres: +this.pagoForm.value.costoInteres
            };
            this.pagoService.postPago(body).subscribe(function (response) {
              _this17.loading = false;

              _this17.successMessage();

              _this17.refreshPagos();

              _this17.refreshPrestamo();

              _this17.closeModal();
            }, function (error) {
              _this17.loading = false;

              _this17.errorMessage(error.error.message);
            });
          }
        }, {
          key: "refreshPagos",
          value: function refreshPagos() {
            var _this18 = this;

            this.sub.add(this.pagoService.getByPrestamoId(this.prestamo.id).subscribe(function (pagos) {
              if (pagos) {
                _this18.pagoService.pagos.emit(pagos);
              }
            }));
          }
        }, {
          key: "refreshPrestamo",
          value: function refreshPrestamo() {
            var _this19 = this;

            this.sub.add(this.prestamoService.getPrestamoById(this.prestamo.id).subscribe(function (prestamo) {
              if (prestamo) {
                _this19.prestamoService.prestamo.emit(prestamo);
              }
            }));
          }
        }, {
          key: "calculateInteresPago",
          value: function calculateInteresPago() {
            this.pagoForm.controls['costoInteres'].patchValue(0);
            this.pagoForm.controls['costoPago'].patchValue(0);
            this.diasInteres = 0;
            this.costoInteres = 0;
            var costoPagoInteres = 0;
            this.pagosInteres = [];

            if (this.pagoForm.value.tipoPago === 'PAGO' && this.prestamo) {
              var _iterator = _createForOfIteratorHelper(this.pagos),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var pago = _step.value;

                  if (pago.tipoPago === 'PAGO') {
                    costoPagoInteres += pago.costoPago;
                    this.pagosInteres.push(pago);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              ;

              if (this.pagosInteres.length > 0) {
                var ultimoPagoInteres = this.pagosInteres[this.pagosInteres.length - 1];
                var diaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(ultimoPagoInteres.createdAt).startOf('day');
                var diaFinal = moment__WEBPACK_IMPORTED_MODULE_9__(Date.now()).endOf('day');
                var dias = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](diaFinal.diff(diaInicio)).asDays();
                this.diasInteres = +dias.toFixed(1) - 1;
                this.costoInteres = +(this.prestamo.costoPrestamo * Math.pow(1 + 0.15 / 30, this.diasInteres)).toFixed(1) - +this.prestamo.costoPrestamo;
                this.pagoForm.controls['costoInteres'].patchValue(+this.costoInteres.toFixed(1));
              } else {
                var _diaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(this.prestamo.fechaInicio).startOf('day');

                var _diaFinal = moment__WEBPACK_IMPORTED_MODULE_9__(Date.now()).endOf('day');

                var _dias = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](_diaFinal.diff(_diaInicio)).asDays();

                this.diasInteres = +_dias.toFixed(0);
                this.costoInteres = +(this.prestamo.costoPrestamo * Math.pow(1 + 0.15 / 30, _dias)).toFixed(1) - +this.prestamo.costoPrestamo;
                this.pagoForm.controls['costoInteres'].patchValue(+this.costoInteres.toFixed(1));
              }
            }

            if (this.pagoForm.value.tipoPago === 'LIQUIDACION' && this.prestamo) {
              this.pagoForm.controls['costoInteres'].patchValue((+this.prestamo.costoInteres - +this.prestamo.cobroInteres).toFixed(1));
              this.pagoForm.controls['costoPago'].patchValue((+this.prestamo.costoTotal - +this.prestamo.costoCancelado - +this.pagoForm.value.costoInteres).toFixed(1));
            }
          }
        }]);

        return ModalPagoComponent;
      }();

      ModalPagoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__["PagoService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"]
        }];
      };

      ModalPagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-pago',
        template: _raw_loader_modal_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalPagoComponent);
      /***/
    },

    /***/
    "KujF":
    /*!****************************************************!*\
      !*** ./src/app/core/services/impresion.service.ts ***!
      \****************************************************/

    /*! exports provided: ImpresionService */

    /***/
    function KujF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpresionService", function () {
        return ImpresionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var ImpresionService = /*#__PURE__*/function () {
        function ImpresionService(http) {
          _classCallCheck(this, ImpresionService);

          this.http = http;
          this.impresion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.impresiones = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(ImpresionService, [{
          key: "getByPrestamoId",
          value: function getByPrestamoId(prestamoId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/impresion-doc/prestamo/").concat(prestamoId), {
              headers: headers
            });
          }
        }, {
          key: "postImpresion",
          value: function postImpresion(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.post("".concat(this.baseUrl, "/impresion-doc"), body, {
              headers: headers
            });
          }
        }, {
          key: "patchImpresion",
          value: function patchImpresion(body, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.patch("".concat(this.baseUrl, "/impresion-doc/").concat(id), body, {
              headers: headers
            });
          }
        }]);

        return ImpresionService;
      }();

      ImpresionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ImpresionService.propDecorators = {
        impresion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        impresiones: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        response: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ImpresionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ImpresionService);
      /***/
    },

    /***/
    "MAJT":
    /*!**************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/cards/card-prestamos/card-prestamos.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: CardPrestamosComponent */

    /***/
    function MAJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPrestamosComponent", function () {
        return CardPrestamosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_prestamos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-prestamos.component.html */
      "gzwR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");

      var CardPrestamosComponent = /*#__PURE__*/function () {
        function CardPrestamosComponent(prestamoService, alertService, router, fb) {
          _classCallCheck(this, CardPrestamosComponent);

          this.prestamoService = prestamoService;
          this.alertService = alertService;
          this.router = router;
          this.fb = fb;
          this.estado = '';
          this.loading = false;
          this.inventarioLengh = 0;
          this.ciForm = this.fb.group({
            ci: ['']
          });
        }

        _createClass(CardPrestamosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
            this.getPrestamos(true);
            this.subscribePrestamos();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "limitInventory",
          value: function limitInventory() {
            var _iterator2 = _createForOfIteratorHelper(this.response.items),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var prestamo = _step2.value;

                if (prestamo.inventario.length > 3) {
                  prestamo.inventario.length = 3;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "getPrestamos",
          value: function getPrestamos() {
            var _this20 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.prestamoService.getPrestamos({
              force: force,
              estadoPrestamo: this.estado
            }).subscribe(function (response) {
              _this20.response = response;

              _this20.limitInventory();

              _this20.loading = false;
            });
          }
        }, {
          key: "subscribePrestamos",
          value: function subscribePrestamos() {
            var _this21 = this;

            this.sub.add(this.prestamoService.response.subscribe(function (response) {
              if (response.items.length > 0) {
                _this21.response = response;

                _this21.limitInventory();

                _this21.loading = false;
              }
            }));
          }
        }, {
          key: "search",
          value: function search(event) {
            var _this22 = this;

            this.loading = true;
            this.sub.add(this.prestamoService.getPrestamos({
              clientCi: this.ciForm.value.ci,
              force: true,
              estadoPrestamo: this.ciForm.value.ci ? '' : this.estado
            }).subscribe(function (response) {
              _this22.loading = false;

              if (response.items.length === 0) {
                _this22.alertService.alert.fire({
                  title: 'No hay datos relacionados con la busqueda',
                  icon: 'error'
                });
              } else {
                _this22.response = response;

                _this22.limitInventory();
              }
            }));
          }
        }, {
          key: "getOnPageResponse",
          value: function getOnPageResponse(page) {
            var _this23 = this;

            this.response = null;
            this.prestamoService.getPrestamos({
              clientCi: this.ciForm.value.ci,
              force: true,
              estadoPrestamo: this.ciForm.value.ci ? '' : this.estado,
              page: page
            }).subscribe(function (response) {
              _this23.prestamoService.response.emit(response);
            });
          }
        }, {
          key: "goToPrestamoInformation",
          value: function goToPrestamoInformation(prestamo) {
            this.prestamoService.prestamo.emit(prestamo);
            this.router.navigate(['/admin/prestamos', prestamo.id]);
          }
        }]);

        return CardPrestamosComponent;
      }();

      CardPrestamosComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_7__["PrestamoService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxFormBuilder"]
        }];
      };

      CardPrestamosComponent.propDecorators = {
        estado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardPrestamosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-prestamos',
        template: _raw_loader_card_prestamos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardPrestamosComponent);
      /***/
    },

    /***/
    "N5LB":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/pdfs/pdf-documento/pdf-documento.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N5LB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  (click)=\"exportToPdf()\"\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n>\n Imprimir\n</button>\n";
      /***/
    },

    /***/
    "Opf6":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-impresion-contrato/modal-impresion-contrato.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ModalImpresionContratoComponent */

    /***/
    function Opf6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalImpresionContratoComponent", function () {
        return ModalImpresionContratoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_impresion_contrato_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-impresion-contrato.component.html */
      "u6Nb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/pago.service */
      "AntR");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");
      /* harmony import */


      var src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/impresion.service */
      "KujF");

      var ModalImpresionContratoComponent = /*#__PURE__*/function () {
        function ModalImpresionContratoComponent(prestamoService, pagoService, impresionService, alertService, modalService, fb) {
          _classCallCheck(this, ModalImpresionContratoComponent);

          this.prestamoService = prestamoService;
          this.pagoService = pagoService;
          this.impresionService = impresionService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.tipoDocumento = 'CONTRATO';
          this.loading = false;
          this.modal = this.modalService.modal;
          this.compressed = true;
          this.submitted = false;
          this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido'
          };
          this.administracionOptions = [{
            value: 20,
            name: '20'
          }, {
            value: 5,
            name: '5'
          }, {
            value: 3,
            name: '3'
          }, {
            value: 0,
            name: '0'
          }];
          this.impresionForm = this.fb.group({
            costoImpresion: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]]
          });
        }

        _createClass(ModalImpresionContratoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            this.subscribePrestamo();
            this.subscribePago();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getPago",
          value: function getPago() {
            var _this24 = this;

            this.sub.add(this.pagoService.getById(this.pago.id).subscribe(function (pago) {
              _this24.pago = pago;
            }));
          }
        }, {
          key: "subscribePago",
          value: function subscribePago() {
            var _this25 = this;

            this.sub.add(this.pagoService.pago.subscribe(function (pago) {
              _this25.pago = pago;
            }));
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this26 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this26.prestamo = prestamo;
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.pagoService.pago.emit(null);
          }
        }, {
          key: "refreshForm",
          value: function refreshForm() {
            this.impresionForm.resetForm();
          }
        }, {
          key: "save",
          value: function save() {
            var _this27 = this;

            this.loading = true;
            var body = {
              prestamo: this.prestamo.id,
              costoImpresion: +this.impresionForm.value.costoImpresion,
              tipoDocumento: this.tipoDocumento
            };
            console.log(body);
            this.impresionService.postImpresion(body).subscribe(function (response) {
              _this27.loading = false;

              _this27.alertService.triggerMessage('Impresión registrada correctamente', 'success');

              _this27.refreshImpresiones();

              _this27.closeModal();
            }, function (error) {
              _this27.loading = false;

              _this27.alertService.triggerMessage(error.error.message, 'error');
            });
          }
        }, {
          key: "refreshImpresiones",
          value: function refreshImpresiones() {
            var _this28 = this;

            this.sub.add(this.impresionService.getByPrestamoId(this.prestamo.id).subscribe(function (impresiones) {
              if (impresiones) {
                _this28.impresionService.impresiones.emit(impresiones);
              }
            }));
          }
        }]);

        return ModalImpresionContratoComponent;
      }();

      ModalImpresionContratoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__["PagoService"]
        }, {
          type: src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_9__["ImpresionService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"]
        }];
      };

      ModalImpresionContratoComponent.propDecorators = {
        tipoDocumento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      ModalImpresionContratoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-impresion-contrato',
        template: _raw_loader_modal_impresion_contrato_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalImpresionContratoComponent);
      /***/
    },

    /***/
    "TgZG":
    /*!***********************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/pdfs/pdf-documento/pdf-documento.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: PdfDocumentoComponent */

    /***/
    function TgZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfDocumentoComponent", function () {
        return PdfDocumentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_documento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-documento.component.html */
      "N5LB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
      /* harmony import */


      var src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/helpers/numberToLetter */
      "mHh0");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/business.service */
      "cwzI");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;

      var PdfDocumentoComponent = /*#__PURE__*/function () {
        function PdfDocumentoComponent(datePipe, businessService) {
          _classCallCheck(this, PdfDocumentoComponent);

          this.datePipe = datePipe;
          this.businessService = businessService;
          this.business = this.businessService.businessInformation;
        }

        _createClass(PdfDocumentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
            this.subscribeBusiness();
            this.numeroALiteral();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "subscribeBusiness",
          value: function subscribeBusiness() {
            var _this29 = this;

            this.sub.add(this.businessService.business.subscribe(function (business) {
              _this29.business = business;
            }));
          }
        }, {
          key: "numeroALiteral",
          value: function numeroALiteral() {
            this.literal = '';
            var decimal = ((Math.abs(+this.prestamo.costoPrestamo) - +this.prestamo.costoPrestamo) * 10).toFixed(0);
            var litera = Object(src_app_helpers_numberToLetter__WEBPACK_IMPORTED_MODULE_5__["numeroALetras"])(this.prestamo.costoPrestamo, {
              plural: 'BOLIVIANOS',
              singular: 'BOLIVIANO',
              centPlural: 'CENTAVOS',
              centSingular: 'CENTAVO'
            });
            this.literal = "(literal ".concat(litera, " ) (").concat(decimal, "0/100 bolivianos)");
          }
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var contrato = {
              // a string or { width: number, height: number }
              pageSize: "LETTER",
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: "portrait",
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [50, 35, 50, 35],
              background: function background(currentPage, pageSize) {
                return {
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["marcaAgua"],
                  width: 550,
                  absolutePosition: {
                    x: 50,
                    y: 150
                  },
                  opacity: 0.2
                };
              },
              content: [{
                text: "DOCUMENTO DE COMPRA VENTA CON PACTO DE RESCATE\n\n",
                fontSize: 8,
                alignment: "center"
              }, {
                text: "Conste por el presente documento privado de compra y venta con pacto de rescate el cual puede ser elevado a instrumento público a simple reconocimiento de firmas y a solo requerimiento de las partes al tenor de las siguientes clausulas.\n\n",
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "PRIMERO. - El presente documento privado de compra y venta con pacto de rescate se suscribe al amparo del Art. 405, 452, 454, 483, 519, 584, 590, 593, 614, 636, 641, 644 y 645 del Código Civil.\n\n",
                fontSize: 8,
                alignment: "justify"
              }, //DATOS DE PANEL DE CONTROL NOMBRE DE LA EMPRESA, NIT,UBICACION
              {
                text: "SEGUNDO. - (DE LAS PARTES). Intervienen en la SUSCRIPCION DE ESTE DOCUMENTO \n",
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "Por una parte, La Empresa Unipersonal \u201C".concat(this.business.name, "\u201D legal mente constituida con NIT: ").concat(this.business.nit, " ubicada en ").concat(this.business.direction, " de la ciudad de EL Alto - La Paz. Titular y/o representante por el Sr. Sergio Gonzalo Mamani Rojas con CI: 7041391 LP. mayor de edad, h\xE1bil por derecho, quien en lo sucesivo y para fines propios del presente documento se denominar\xE1 \u201CCOMPRADOR\u201D. \n\n"),
                fontSize: 8,
                alignment: "justify"
              }, //Nombre del cliente , CI , celular
              {
                text: "Por otra parte, ".concat(this.prestamo.client.name, " con C.I ").concat(this.prestamo.client.ci, " Cel.").concat(this.prestamo.client.phone, "  Mayor de edad h\xE1bil por derecho en completo uso de mis facultades, de forma libre y voluntaria, sin que medie vicio alguno en el consentimiento, doy en calidad de venta bajo modalidad de pacto de rescate, quien en lo sucesivo y para fines propios del presente documento se denominara \u201CVENDEDOR\u201D.\n\n"),
                fontSize: 8,
                alignment: "justify"
              }, //nombre del objeto de prenda y valor numerico y literal
              {
                text: "TERCERO. - (DE LA COMPRA Y VENTA)  ".concat(this.prestamo.inventario.map(function (i) {
                  return i.descripcion + '';
                }), " con un valor de ").concat(this.prestamo.costoPrestamo, "0 ").concat(this.literal, " que el \u201CCOMPRADOR\u201D ENTREGA A FAVOR \u201CVENDEDOR\u201D en forma efectiva al momento de realizar la   transacci\xF3n al momento de suscribir el presente documento en el modo y condiciones que se estipulan en caso de que el vendedor quisiera hacer uso del derecho de rescate deber\xE1 conocer las siguientes clausulas.\n\n"),
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "CUARTO. - (PACTO DE RESCATE). “EL VENDEDOR” tiene la opción de rescate de la mercadería vendida siempre y cuando devuelva la suma de dinero a la cual fue vendida la mercadería más los intereses y comisiones establecidos entre comprador y vendedor en el presente documento a detallarse:\n\n",
                fontSize: 8,
                alignment: "justify"
              }, //monto de prestamo
              {
                columns: [{
                  width: "*",
                  text: ""
                }, {
                  width: "auto",
                  table: {
                    body: [[{
                      text: "Monto de compra en:",
                      style: "tableHeader",
                      fontSize: 8
                    }, {
                      text: "Bs.- ".concat(this.prestamo.costoPrestamo, "0"),
                      fontSize: 8,
                      style: "tableHeader"
                    }], [{
                      text: "Comision por custodia:",
                      fontSize: 8,
                      style: "tableHeader"
                    }, {
                      text: "Gastos generados",
                      fontSize: 8,
                      style: "tableHeader"
                    }]],
                    alignment: "center"
                  }
                }, {
                  width: "*",
                  text: ""
                }]
              }, "  \n  ", // interes del panel de control
              {
                text: "QUINTO. - (DEL INTERES). Si el VENDEDOR opta por el rescate de la mercader\xEDa, el inter\xE9s pactado que debe pagar al \u201CVENDEDOR\u201D al \u201CCOMPRADOR\u201D por el rescate de la mercader\xEDa es el ".concat(this.business.interest, "% mensual respecto al monto de dinero entregado por el comprador al vendedor.\n\n"),
                fontSize: 8,
                alignment: "justify"
              }, {
                text: ["SEXTO. - (DE LA COMISION). Si el “VENDEDOR” opta por el rescate de la mercadería vendida, entonces se compromete libremente a pagar al “COMPRADOR” por concepto de comisión (COMISION POR CUSTODIA, CONSERVACIONES, GASTOS ADMINISTRATIVOS Y RIESGOS DE LA GARANTIA COMPRADA). El “COMPRADOR” garantiza al “VENDEDOR” la custodia y cuidado de la mercadería vendida, en concordancia con el Art. 645 del Código Civil.\n", "EL/LA VENDEDOR(A), reconoce voluntariamente, que el cobro de los gastos establecidos en el presente contrato, constituyen un legítimo rembolso a favor de EL COMPRADOR. Puesto que este incurra en dichos gastos para viabilizar la transacción, determinar y conservar el estado actual del bien objeto de la compra y venta.\n"],
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "SEPTIMO. - (DEVOLUCION DE LA GARANTIA VENDIDA). El “VENDEDOR” deberá rescatar la cosa vendida en forma personal previa acreditación de su cedula identidad (original vigente) más las copias del documento. La entrega se realizará en el plazo no mayor a 5 días hábiles. Una vez haya realizado la cancelación total de la venta más los intereses legales aplicables y demás comisiones por custodia, conservación, gastos administrativos y riesgos de la cosa vendida.\n\n",
                fontSize: 8,
                alignment: "justify"
              }, {
                text: ["OCTAVO. - El vendedor da propia voluntad y sin que medie vicio del consentimiento alguno DECLARA de forma pura y simple que el bien entregado en calidad de COMPRA Y VENTA CON PACTO DE RESCATE, es de su exclusiva, legal y legítima propiedad, siendo el único responsable de la titularidad de derecho propietario, por lo que se hace responsable de forma directa de reclamos por terceros.\n", "EL “VENDEDOR” excluye de responsabilidad civil y penal al “COMPRADOR”, quien recibe de buena fe el bien entregado en VENTA también el “VENDEDOR” asume responsabilidad directa en caso de existir denuncias y/o acusaciones particulares de terceros por hechos vinculados a los delitos de robo, hurto, apropiación indebida o abuso de confianza sobre el bien entregado en VENTA, o que indicado bien este comprometido en la comisión de otros delitos por el VENDEDOR o por terceros.\n\n"],
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "NOVENO. - (DE LA CLAUSULA ARBITRAL). En caso de conflicto o discrepancias sobre el cumplimiento del presente contrato de compra y venta con pacto de rescate. Las partes convenimos resolver el conflicto a través del arbitraje con aceptación del árbitro único constituido por el centro de arbitraje según lo estipulado en el Art. 39 y siguientes de la Ley 708 de 25 de junio del 2015.\n\n\n",
                fontSize: 8,
                alignment: "justify"
              }, {
                text: "Fecha de la compra y venta: La Paz \u2013 El Alto ".concat(this.datePipe.transform(this.prestamo.fechaInicio, 'mediumDate'), " \n\n\n\n"),
                fontSize: 9
              }, //fecha del dia de prestamo
              //numero del CI vendedor y comprador
              {
                alignment: "center",
                columns: [{
                  text: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\nCI: ".concat(this.prestamo.client.ci, "\nVENDEDOR"),
                  fontSize: 10
                }, //aqui se debe poner el ci del administrador
                {
                  text: "……………………………………………\nCI: 7041391\nCOMPRADOR",
                  fontSize: 10
                }]
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  alignment: "justify"
                },
                subheader: {
                  fontSize: 15,
                  bold: true
                },
                quote: {
                  italics: true
                },
                small: {
                  fontSize: 8
                },
                tableExample: {
                  margin: [0, 5, 0, 15]
                }
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(contrato).open();
          }
        }]);

        return PdfDocumentoComponent;
      }();

      PdfDocumentoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_8__["BusinessService"]
        }];
      };

      PdfDocumentoComponent.propDecorators = {
        prestamo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PdfDocumentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-documento',
        template: _raw_loader_pdf_documento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfDocumentoComponent);
      /***/
    },

    /***/
    "UhyH":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-edit-prestamo/modal-edit-prestamo.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ModalEditPrestamoComponent */

    /***/
    function UhyH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalEditPrestamoComponent", function () {
        return ModalEditPrestamoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_edit_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-edit-prestamo.component.html */
      "r2v6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/auth.service */
      "7dP1");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

      var ModalEditPrestamoComponent = /*#__PURE__*/function () {
        function ModalEditPrestamoComponent(prestamoService, authService, alertService, modalService, fb) {
          _classCallCheck(this, ModalEditPrestamoComponent);

          this.prestamoService = prestamoService;
          this.authService = authService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.loading = false;
          this.modal = this.modalService.modal;
          this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido'
          };
          this.prestamoForm = this.fb.group({
            fechaInicio: ['', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            fechaFinal: ['', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]]
          });
        }

        _createClass(ModalEditPrestamoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            this.subscribePrestamo();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this30 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this30.prestamo = prestamo;

              if (_this30.prestamo) {
                _this30.prestamoForm.controls['fechaInicio'].patchValue(new Date(_this30.prestamo.fechaInicio).toISOString().substring(0, 10));

                _this30.prestamoForm.controls['fechaFinal'].patchValue(new Date(moment__WEBPACK_IMPORTED_MODULE_9__(_this30.prestamo.fechaFinal).subtract(4, 'hours').toISOString()).toISOString().substring(0, 10));

                _this30.calculateCostoTotal();
              }
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.prestamoService.prestamo.emit(null);
          }
        }, {
          key: "save",
          value: function save() {
            var _this31 = this;

            this.loading = true;
            this.sub.add(this.prestamoService.patchPrestamo(this.prestamoForm.value, this.prestamo.id).subscribe(function (response) {
              _this31.loading = false;

              _this31.alertService.triggerMessage('Prestamo editado Exitosamente', 'success');

              _this31.refreshPrestamo();

              _this31.closeModal();
            }, function (error) {
              _this31.loading = false;

              _this31.alertService.triggerMessage(error.error.message, 'error');
            }));
          }
        }, {
          key: "refreshPrestamo",
          value: function refreshPrestamo() {
            var _this32 = this;

            this.sub.add(this.prestamoService.getPrestamoById(+this.prestamo.id).subscribe(function (prestamo) {
              if (prestamo) {
                _this32.prestamoService.prestamo.emit(prestamo);
              }
            }));
          }
        }, {
          key: "calculateCostoTotal",
          value: function calculateCostoTotal() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.diasPrestamo = 0;
            this.costoTotal = 0;
            var diaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.prestamoForm.value.fechaInicio).toDateString()).startOf('day');
            var diaFinal = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.prestamoForm.value.fechaFinal).toDateString()).endOf('day');
            var dias = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](diaFinal.diff(diaInicio)).asDays();
            /*console.log(new Date().toLocaleString('en-US', {
              timeZone: 'America/La_Paz'
            }))
            console.log(this.prestamo.fechaFinal.toLocaleString('en-Us', { timeZone: 'America/La_Paz'}));
            console.log(this.prestamoForm.value.fechaFinal);
            console.log(new Date(this.prestamo.fechaFinal).toISOString().substring(0, 10));*/

            this.diasPrestamo = +(dias < 5 ? 5 : dias).toFixed(0);
            this.costoTotal = +(this.prestamo.costoPrestamo * Math.pow(1 + 0.15 / 30, dias < 5 ? 5 : dias)).toFixed(1);
          }
        }]);

        return ModalEditPrestamoComponent;
      }();

      ModalEditPrestamoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"]
        }];
      };

      ModalEditPrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-edit-prestamo',
        template: _raw_loader_modal_edit_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalEditPrestamoComponent);
      /***/
    },

    /***/
    "X270":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/cards/card-prestamo-detalle/card-prestamo-detalle.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X270(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Información del Prestamo Nº {{ prestamo?.id }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n        <app-modal-pago></app-modal-pago>\n        <app-modal-amortiguar></app-modal-amortiguar>\n        <app-modal-impresion-recibo></app-modal-impresion-recibo>\n        <app-modal-impresion-contrato></app-modal-impresion-contrato>\n        <app-modal-edit-prestamo></app-modal-edit-prestamo>\n        <app-modal-delete-pago></app-modal-delete-pago>\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"flow-root w-auto flex flex-col justify-center\">\n      <div *ngIf=\"prestamo\" class=\"cursor-pointer m-2 w-1/2 border-2 border-green-600 hover:border-green-700 transform hover:-translate-y-1 ease-linear transition-all duration-150\">\n        <div class=\"flex items-center space-x-4 px-4 py-2 bg-blueGray-600 \">\n            <div class=\"flex-1 min-w-0\">\n              <p class=\"text-xl font-medium text-white truncate dark:text-white\">\n                  Cliente: {{ prestamo.client.name }}\n              </p>\n            </div>\n\n            <button\n              [popper]=\"editarFecha\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              type=\"button\"\n              (click)=\"showCambioFechaModal()\">\n              <i class=\"fas fa-calendar\"></i>\n            </button>\n            <popper-content #editarFecha>\n              <p class=\"bold\">Editar fecha del prestamo</p>\n            </popper-content>\n\n            <button\n              [popper]=\"imprimirContrato\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              type=\"button\"\n              (click)=\"showImpresionContratoModal()\">\n              <i class=\"fas fa-file-invoice\"></i>\n            </button>\n            <popper-content #imprimirContrato>\n              <p class=\"bold\">Imprimir contrato</p>\n            </popper-content>\n\n            <button\n              [popper]=\"pagoModal\"\n              [popperTrigger]=\"'hover'\"\n              [popperPlacement]=\"'top'\"\n              [popperPositionFixed]=\"true\"\n              class=\"text-green-600 text-3xl rounded-full p-1 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150\"\n              type=\"button\"\n              (click)=\"showPagoModal()\">\n              <i class=\"fas fa-money-bill\"></i>\n            </button>\n            <popper-content #pagoModal>\n              <p class=\"bold\">Añadir pago</p>\n            </popper-content>\n        </div>\n\n        <div class=\"flex items-center space-x-4 px-4 \">\n          <div class=\"flex-1 min-w-0 py-8\">\n            <div class=\"text-xl font-medium text-gray-900 truncate dark:text-white flex flex-col\">\n              Prenda(s):\n              <div *ngFor=\"let inv of prestamo.inventario\" class=\"flex flex-col\">\n                <p\n                  *ngIf=\"inv.tipo === 'JOYA'\"\n                  class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                    <a [routerLink]=\"['/admin/inventario/'+inv.id]\">\n                      {{ inv.descripcion }} {{ inv.metal }} {{ inv.peso }} {{ inv.pureza }}\n                    </a>\n                </p>\n                <p\n                  *ngIf=\"inv.tipo === 'ARTICULO'\"\n                  class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                  <a [routerLink]=\"['/admin/inventario/'+inv.id]\">\n                    {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.linea }}\n                  </a>\n                </p>\n                <p\n                  *ngIf=\"inv.tipo === 'VEHICULO'\"\n                  class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                  <a [routerLink]=\"['/admin/inventario/'+inv.id]\">\n                    {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.placa }}\n                  </a>\n                </p>\n              </div>\n            </div>\n            <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n              Usuario: {{ prestamo.user.ci }} {{ prestamo.user.name }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n              MontoPrestamo: Bol. {{ prestamo.costoPrestamo }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Interés al finalizar el Plazo: Bol. {{ (prestamo.costoTotal - prestamo.costoPrestamo).toFixed(1) }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Monto Total: Bol. {{ prestamo.costoTotal }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Monto cancelado: Bol. {{ prestamo.costoCancelado }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Por cobrar: Bol. {{ (prestamo.costoTotal - prestamo.costoCancelado).toFixed(1) }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Fecha de prestamo: {{ prestamo.fechaInicio | date:'medium' }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Fecha de vencimiento: {{ prestamo.fechaFinal | date:'medium' }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Estado: {{ prestamo.estado }}\n            </p>\n            <p class=\"text-xl font-medium text-gray-500 truncate dark:text-gray-400\">\n              Dias restantes: {{ diasRestantes }}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"items-center mb-4 ml-2 mt-4\">\n        <h3 class=\"text-xl font-bold leading-none text-gray-500 dark:text-white\">\n          HISTORIAL\n        </h3>\n      </div>\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Operación\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cargo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Comisión\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cargos Generados\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Amortiguado\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Acciones\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"prestamo\" >\n                            <tr\n                              *ngFor=\"let historial of historialArray\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              (click)=\"showImpresionPagoModal(historial)\">\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                    {{ historial.fecha }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{ historial.operacion }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargo }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.comision }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargoExtra }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.amortiguado }}\n                                </td>\n                            </tr>\n                            <tr\n                              *ngFor=\"let historial of historialPagosArray\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                    {{ historial.fecha }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{ historial.operacion }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargo }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.comision }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargoExtra }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.amortiguado }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  <a\n                                    (click)=\"showImpresionPagoModal(historial)\"\n                                    class=\"p-2 text-blue-600 dark:text-blue-500 hover:underline\">\n                                    Imprimir</a>\n                                  <a\n                                    (click)=\"showDeletePagoModal(historial)\"\n                                    class=\"p-2 text-red-600 dark:text-red-500 hover:underline\">\n                                    Eliminar</a>\n                                </td>\n                            </tr>\n                            <tr\n                              *ngFor=\"let historial of historialImpresionesArray\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                    {{ historial.fecha }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{ historial.operacion }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargo }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.comision }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.cargoExtra }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{ historial.amortiguado }}\n                                </td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n   </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Y5OH":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/amortizacion.service.ts ***!
      \*******************************************************/

    /*! exports provided: AmortizacionService */

    /***/
    function Y5OH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmortizacionService", function () {
        return AmortizacionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var AmortizacionService = /*#__PURE__*/function () {
        function AmortizacionService(http) {
          _classCallCheck(this, AmortizacionService);

          this.http = http;
          this.amortizacion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.amortizacions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(AmortizacionService, [{
          key: "getByPrestamoId",
          value: function getByPrestamoId(prestamoId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/amortizacion/prestamo/").concat(prestamoId), {
              headers: headers
            });
          }
        }, {
          key: "postAmortizacion",
          value: function postAmortizacion(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.post("".concat(this.baseUrl, "/amortizacion"), body, {
              headers: headers
            });
          }
        }]);

        return AmortizacionService;
      }();

      AmortizacionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AmortizacionService.propDecorators = {
        amortizacion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        amortizacions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AmortizacionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AmortizacionService);
      /***/
    },

    /***/
    "dA8i":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-amortiguar/modal-amortiguar.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ModalAmortiguarComponent */

    /***/
    function dA8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalAmortiguarComponent", function () {
        return ModalAmortiguarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_amortiguar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-amortiguar.component.html */
      "CLcH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_amortizacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/amortizacion.service */
      "Y5OH");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");

      var ModalAmortiguarComponent = /*#__PURE__*/function () {
        function ModalAmortiguarComponent(prestamoService, amortizacionService, alertService, modalService, fb) {
          _classCallCheck(this, ModalAmortiguarComponent);

          this.prestamoService = prestamoService;
          this.amortizacionService = amortizacionService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.loading = false;
          this.modal = this.modalService.modal;
          this.compressed = true;
          this.submitted = false;
          this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido'
          };
          this.administracionOptions = [{
            value: 5,
            name: '5'
          }, {
            value: 3,
            name: '3'
          }, {
            value: 0,
            name: '0'
          }];
          this.tipoAmortizacionOptions = [{
            value: 'PAGO',
            name: 'PAGO'
          }, {
            value: 'INTERES',
            name: 'INTERÉS'
          }];
          this.amortizacionForm = this.fb.group({
            tipoAmortizacion: ['PAGO', [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoAdministracion: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoPiso: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]],
            costoAmortizacion: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]]
          });
        }

        _createClass(ModalAmortiguarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            this.subscribePrestamo();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this33 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this33.prestamo = prestamo;
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.amortizacionService.amortizacion.emit(null);
          }
        }, {
          key: "refreshForm",
          value: function refreshForm() {
            this.amortizacionForm.resetForm();
          }
        }, {
          key: "successMessage",
          value: function successMessage() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'creado';
            this.alertService.alert.fire({
              title: "Amortizacion ".concat(message, " Exitosamente"),
              icon: 'success'
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(message) {
            this.alertService.alert.fire({
              title: message,
              icon: 'error'
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this34 = this;

            this.loading = true;
            var body = {
              prestamo: this.prestamo.id,
              costoPago: +this.amortizacionForm.value.costoPago
            };
            console.log(body);
            this.amortizacionService.postAmortizacion(body).subscribe(function (response) {
              _this34.loading = false;

              _this34.successMessage();

              _this34.closeModal();
            }, function (error) {
              _this34.loading = false;

              _this34.errorMessage(error.error.message);
            });
          }
        }]);

        return ModalAmortiguarComponent;
      }();

      ModalAmortiguarComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_amortizacion_service__WEBPACK_IMPORTED_MODULE_6__["AmortizacionService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"]
        }];
      };

      ModalAmortiguarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-amortiguar',
        template: _raw_loader_modal_amortiguar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalAmortiguarComponent);
      /***/
    },

    /***/
    "gk4a":
    /*!*****************************************************************!*\
      !*** ./src/app/views/admin/prestamo/prestamo-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PrestamoRoutingModule */

    /***/
    function gk4a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoRoutingModule", function () {
        return PrestamoRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_cards_card_prestamo_detalle_card_prestamo_detalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/cards/card-prestamo-detalle/card-prestamo-detalle.component */
      "C1X/");
      /* harmony import */


      var _components_tabs_tab_prestamo_tab_prestamo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/tabs/tab-prestamo/tab-prestamo.component */
      "j56l");
      /* harmony import */


      var _prestamo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./prestamo.component */
      "BN7A");

      var routes = [{
        path: '',
        component: _prestamo_component__WEBPACK_IMPORTED_MODULE_5__["PrestamoComponent"],
        children: [{
          path: ':prestamoId',
          component: _components_cards_card_prestamo_detalle_card_prestamo_detalle_component__WEBPACK_IMPORTED_MODULE_3__["CardPrestamoDetalleComponent"]
        }, {
          path: '**',
          component: _components_tabs_tab_prestamo_tab_prestamo_component__WEBPACK_IMPORTED_MODULE_4__["TabPrestamoComponent"]
        }]
      }];

      var PrestamoRoutingModule = /*#__PURE__*/_createClass(function PrestamoRoutingModule() {
        _classCallCheck(this, PrestamoRoutingModule);
      });

      PrestamoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrestamoRoutingModule);
      /***/
    },

    /***/
    "gzwR":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/cards/card-prestamos/card-prestamos.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gzwR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-4 w-full \">\n  <div class=\"items-center mb-4\">\n    <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">Lista de Prestamos {{ estado==='VENCIDO'? 'con inventario aun no vendido': ''}}</h3>\n    <div class=\"flex items-center justify-start pt-2\">.\n\n    </div>\n    <div class=\"w-full \">\n      <div class=\"flex flex-col pt-4 items-baseline w-full \">\n        <form\n          [formGroup]=\"ciForm\"\n        >\n          <input\n            type=\"text\"\n            placeholder=\"Buscar por CI Ej: 836378...\"\n            class=\"border-0 px-3 py-3 placeholder-black-300 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-green-600  w-full ease-linear transition-all duration-150\"\n            formControlName=\"ci\"\n            (ngModelChange)=\"search($event)\"\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"flow-root w-auto\">\n    <ul *ngIf=\"response\" role=\"list\" class=\"relative flex flex-wrap\">\n      <div  *ngFor=\"let prestamo of response.items; let i=index;\" class=\"w-full lg:w-6/12\">\n        <li\n            class=\"cursor-pointer m-2 border-2 border-green-600 hover:border-green-700 transform hover:-translate-y-1 ease-linear transition-all duration-150\"\n            (click)=\"goToPrestamoInformation(prestamo)\">\n            <div class=\"flex items-center\">\n                <div class=\"text-3xl p-4 bg-green-600\">\n                  {{prestamo.id}}\n                </div>\n                <div  class=\"flex-1 min-w-0 mx-6 flex flex-col\">\n                  <p class=\"text-xl font-medium text-gray-900 truncate dark:text-white\">\n                     {{ prestamo.client.name }}\n                  </p>\n                  <div\n                    *ngFor=\"let inv of prestamo.inventario\"\n                    class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n\n                    <p *ngIf=\"inv.tipo === 'JOYA'\">\n                        {{ inv.descripcion }} {{ inv.metal }} {{ inv.peso }} {{ inv.pureza }}\n                    </p>\n                    <p *ngIf=\"inv.tipo === 'ARTICULO'\">\n                        {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.linea }}\n                    </p>\n                    <p *ngIf=\"inv.tipo === 'VEHICULO'\">\n                        {{ inv.descripcion }} {{ inv.marca }} {{ inv.modelo }} {{ inv.placa }}\n                    </p>\n                  </div>\n                  <p class=\"text-xl font-medium text-gray-500 truncate dark:text-white\"\n                    *ngIf=\"+prestamo.inventarioCantidad > 3\"> +({{ +prestamo.inventarioCantidad - 3 }}) </p>\n                  <p class=\"text-xl font-medium text-gray-500 truncate dark:text-white\">\n                    {{ prestamo.fechaInicio | date:'mediumDate' }} - {{ prestamo.fechaFinal | date:'mediumDate' }}\n                  </p>\n                </div>\n                <div class=\"text-gray-500 text-xl font-bold mr-8\">\n                  <p>\n                    BOL. {{ prestamo.costoTotal }}\n                  </p>\n                  <p class=\"text-sm\">\n                    {{ prestamo.estado }}\n                  </p>\n                </div>\n            </div>\n        </li>\n      </div>\n  </ul>\n  </div>\n</div>\n\n<app-pagination\n  *ngIf=\"response\"\n  [response]=\"response.meta\"\n  (pageEvent)=\"getOnPageResponse($event)\"\n></app-pagination>\n";
      /***/
    },

    /***/
    "hl6L":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-impresion-recibo/modal-impresion-recibo.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hl6L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"modal.visible&&modal.modalName==='impresionPagoModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Impresión del prestamo {{ prestamo?.id }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"impresionForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <app-select\n              [inputForm]=\"impresionForm\"\n              [options]=\"administracionOptions\"\n              inputLabel=\"Costo reimpresión\"\n              inputFormName=\"costoImpresion\"\n              formControlName=\"costoImpresion\"\n              [value]=\"impresionForm.value.costoImpresion\">\n            </app-select>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          Registrar reimpresión\n        </button>\n        <app-pdf-documento [prestamo]=\"prestamo\"></app-pdf-documento>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='impresionPagoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "itTI":
    /*!*********************************************************!*\
      !*** ./src/app/views/admin/prestamo/prestamo.module.ts ***!
      \*********************************************************/

    /*! exports provided: PrestamoModule */

    /***/
    function itTI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoModule", function () {
        return PrestamoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _prestamo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prestamo-routing.module */
      "gk4a");
      /* harmony import */


      var _prestamo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./prestamo.component */
      "BN7A");
      /* harmony import */


      var _components_tabs_tab_prestamo_tab_prestamo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/tabs/tab-prestamo/tab-prestamo.component */
      "j56l");
      /* harmony import */


      var _components_cards_card_prestamos_card_prestamos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cards/card-prestamos/card-prestamos.component */
      "MAJT");
      /* harmony import */


      var _components_cards_card_prestamo_detalle_card_prestamo_detalle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/cards/card-prestamo-detalle/card-prestamo-detalle.component */
      "C1X/");
      /* harmony import */


      var _components_modals_modal_pago_modal_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/modals/modal-pago/modal-pago.component */
      "J0G/");
      /* harmony import */


      var _components_modals_modal_amortiguar_modal_amortiguar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/modals/modal-amortiguar/modal-amortiguar.component */
      "dA8i");
      /* harmony import */


      var _components_modals_modal_impresion_recibo_modal_impresion_recibo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/modals/modal-impresion-recibo/modal-impresion-recibo.component */
      "ymQP");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "7PmN");
      /* harmony import */


      var _components_pdfs_pdf_pago_pdf_pago_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/pdfs/pdf-pago/pdf-pago.component */
      "81EI");
      /* harmony import */


      var _components_pdfs_pdf_documento_pdf_documento_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/pdfs/pdf-documento/pdf-documento.component */
      "TgZG");
      /* harmony import */


      var _components_modals_modal_impresion_contrato_modal_impresion_contrato_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/modals/modal-impresion-contrato/modal-impresion-contrato.component */
      "Opf6");
      /* harmony import */


      var _components_modals_modal_edit_prestamo_modal_edit_prestamo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/modals/modal-edit-prestamo/modal-edit-prestamo.component */
      "UhyH");
      /* harmony import */


      var _components_modals_modal_delete_pago_modal_delete_pago_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/modals/modal-delete-pago/modal-delete-pago.component */
      "AcEr");

      var PrestamoModule = /*#__PURE__*/_createClass(function PrestamoModule() {
        _classCallCheck(this, PrestamoModule);
      });

      PrestamoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_prestamo_component__WEBPACK_IMPORTED_MODULE_3__["PrestamoComponent"], _components_tabs_tab_prestamo_tab_prestamo_component__WEBPACK_IMPORTED_MODULE_4__["TabPrestamoComponent"], _components_cards_card_prestamos_card_prestamos_component__WEBPACK_IMPORTED_MODULE_5__["CardPrestamosComponent"], _components_cards_card_prestamo_detalle_card_prestamo_detalle_component__WEBPACK_IMPORTED_MODULE_6__["CardPrestamoDetalleComponent"], _components_modals_modal_pago_modal_pago_component__WEBPACK_IMPORTED_MODULE_7__["ModalPagoComponent"], _components_modals_modal_amortiguar_modal_amortiguar_component__WEBPACK_IMPORTED_MODULE_8__["ModalAmortiguarComponent"], _components_modals_modal_impresion_recibo_modal_impresion_recibo_component__WEBPACK_IMPORTED_MODULE_9__["ModalImpresionReciboComponent"], _components_pdfs_pdf_pago_pdf_pago_component__WEBPACK_IMPORTED_MODULE_11__["PdfPagoComponent"], _components_pdfs_pdf_documento_pdf_documento_component__WEBPACK_IMPORTED_MODULE_12__["PdfDocumentoComponent"], _components_modals_modal_impresion_contrato_modal_impresion_contrato_component__WEBPACK_IMPORTED_MODULE_13__["ModalImpresionContratoComponent"], _components_modals_modal_edit_prestamo_modal_edit_prestamo_component__WEBPACK_IMPORTED_MODULE_14__["ModalEditPrestamoComponent"], _components_modals_modal_delete_pago_modal_delete_pago_component__WEBPACK_IMPORTED_MODULE_15__["ModalDeletePagoComponent"]],
        imports: [_prestamo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrestamoRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
      })], PrestamoModule);
      /***/
    },

    /***/
    "j56l":
    /*!*********************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/tabs/tab-prestamo/tab-prestamo.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TabPrestamoComponent */

    /***/
    function j56l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabPrestamoComponent", function () {
        return TabPrestamoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-prestamo.component.html */
      "5ZNG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabPrestamoComponent = /*#__PURE__*/function () {
        function TabPrestamoComponent() {
          _classCallCheck(this, TabPrestamoComponent);

          this.openTab = 1;
        }

        _createClass(TabPrestamoComponent, [{
          key: "toggleTabs",
          value: function toggleTabs($tabNumber) {
            this.openTab = $tabNumber;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabPrestamoComponent;
      }();

      TabPrestamoComponent.ctorParameters = function () {
        return [];
      };

      TabPrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab-prestamo',
        template: _raw_loader_tab_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TabPrestamoComponent);
      /***/
    },

    /***/
    "r2v6":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-edit-prestamo/modal-edit-prestamo.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r2v6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div *ngIf=\"modal.visible&&modal.modalName==='prestamoEditModal'\" class=\"justify-center items-center overflow-x-hidden overflow-y-auto fixed right-0 left-0 top-4 inset-0 z-50 grid\">\n  <div class=\"relative px-4 w-full max-w-6xl h-full md:h-auto\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           PRESTAMO Nº {{prestamo.id}}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n      <div class=\"flex w-full\">\n\n        <form\n          autocomplete=\"off\"\n          [formGroup]=\"prestamoForm\"\n          (ngSubmit)=\"save()\"\n          class=\"w-full md:w-1/2\"\n        >\n          <div class=\"my-4 relative p-6 flex flex-wrap\">\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"prestamoForm\"\n                inputLabel=\"INICIO PRESTAMO\"\n                inputType=\"date\"\n                inputFormName=\"fechaInicio\"\n                formControlName=\"fechaInicio\"\n                [inputMax]=\"prestamoForm.value.FechaFinal\"\n                (inputEvent)=\"calculateCostoTotal()\"\n                [value]=\"prestamoForm.value.fechaInicio\">\n              </app-input>\n            </div>\n\n            <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              <app-input\n                [inputForm]=\"prestamoForm\"\n                inputLabel=\"FINAL del PRESTAMO\"\n                inputType=\"date\"\n                inputFormName=\"fechaFinal\"\n                formControlName=\"fechaFinal\"\n                [inputMin]=\"prestamoForm.value.fechaInicio\"\n                (inputEvent)=\"calculateCostoTotal()\"\n                [value]=\"prestamoForm.value.fechaFinal\">\n              </app-input>\n            </div>\n          </div>\n\n        <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n          <button\n            class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            (click)=\"closeModal()\"\n            type=\"button\"\n          >\n            Cancelar\n          </button>\n          <button\n            [disabled]=\"!prestamoForm.valid || loading\"\n            class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n          </button>\n        </div>\n\n        </form>\n\n        <div class=\"w-full md:w-1/2 my-4 relative p-6\">\n          <div>\n            <p> Cantidad de dias: {{this.diasPrestamo}}</p>\n            <p> Prestamo total: Bol. {{this.prestamo.costoPrestamo}}</p>\n            <p> Interes al finalizar el plazo: Bol. {{(this.costoTotal - this.prestamo.costoPrestamo).toFixed(1)}}</p>\n            <p> Total a pagar al finalizar el plazo: Bol. {{this.costoTotal}}</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='prestamoEditModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "ruDw":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/pdfs/pdf-pago/pdf-pago.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ruDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  (click)=\"exportToPdf()\"\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n>\n Imprimir\n</button>\n";
      /***/
    },

    /***/
    "u6Nb":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/prestamo/components/modals/modal-impresion-contrato/modal-impresion-contrato.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u6Nb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"modal.visible&&modal.modalName==='impresionContratoModal'\" class=\"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\">\n  <div class=\"relative w-auto my-6 mx-auto max-w-580-px\">\n\n    <div class=\"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\">\n\n      <div class=\"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t\">\n        <h4 class=\"text-2xl font-semibold\">\n           Impresión del Pago {{ pago?.id }}\n        </h4>\n        <button\n          class=\"p-1 ml-auto border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          <span class=\"opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\">\n            x\n          </span>\n        </button>\n      </div>\n\n      <form\n        autocomplete=\"off\"\n        [formGroup]=\"impresionForm\"\n        (ngSubmit)=\"save()\"\n      >\n        <div class=\"my-4 relative p-6 flex flex-wrap\">\n          <div class=\"w-full px-4 mb-2\">\n            <app-select\n              [inputForm]=\"impresionForm\"\n              [options]=\"administracionOptions\"\n              inputLabel=\"Costo reimpresión\"\n              inputFormName=\"costoImpresion\"\n              formControlName=\"costoImpresion\"\n              [value]=\"impresionForm.value.costoImpresion\">\n            </app-select>\n          </div>\n\n          <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n          </div>\n\n        </div>\n\n      <div class=\"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b\">\n        <button\n          class=\"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          (click)=\"closeModal()\"\n          type=\"button\"\n        >\n          Cancelar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n          (click)=\"refreshForm()\"\n        >\n          Limpiar\n        </button>\n        <button\n          class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"submit\"\n        >\n          Registrar reimpresión\n        </button>\n        <app-pdf-pago [pago]=\"pago\" [prestamo]=\"prestamo\"></app-pdf-pago>\n      </div>\n\n    </form>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modal.visible&&modal.modalName==='impresionContratoModal'\" class=\"opacity-25 fixed inset-0 z-40 bg-black\"></div>\n";
      /***/
    },

    /***/
    "ymQP":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/views/admin/prestamo/components/modals/modal-impresion-recibo/modal-impresion-recibo.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ModalImpresionReciboComponent */

    /***/
    function ymQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalImpresionReciboComponent", function () {
        return ModalImpresionReciboComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_impresion_recibo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-impresion-recibo.component.html */
      "hl6L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/alert.service */
      "jKJn");
      /* harmony import */


      var src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/pago.service */
      "AntR");
      /* harmony import */


      var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/modal.service */
      "S0jo");
      /* harmony import */


      var src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/prestamo.service */
      "U31Y");
      /* harmony import */


      var src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/impresion.service */
      "KujF");

      var ModalImpresionReciboComponent = /*#__PURE__*/function () {
        function ModalImpresionReciboComponent(prestamoService, pagoService, impresionService, alertService, modalService, fb) {
          _classCallCheck(this, ModalImpresionReciboComponent);

          this.prestamoService = prestamoService;
          this.pagoService = pagoService;
          this.impresionService = impresionService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.tipoDocumento = 'PAGO';
          this.loading = false;
          this.modal = this.modalService.modal;
          this.compressed = true;
          this.submitted = false;
          this.errorMessages = {
            required: 'El campo es obligatorio',
            minLength: 'El campo es muy corto',
            maxLenght: 'El campo es muy largo',
            email: 'El email introducido no es valido'
          };
          this.administracionOptions = [{
            value: 20,
            name: '20'
          }, {
            value: 5,
            name: '5'
          }, {
            value: 3,
            name: '3'
          }, {
            value: 0,
            name: '0'
          }];
          this.impresionForm = this.fb.group({
            costoImpresion: [0, [_rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].required({
              message: this.errorMessages.required
            })]]
          });
        }

        _createClass(ModalImpresionReciboComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            this.subscribePrestamo();
            this.subscribePago();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getPago",
          value: function getPago() {
            var _this35 = this;

            this.sub.add(this.pagoService.getById(this.pago.id).subscribe(function (pago) {
              _this35.pago = pago;
            }));
          }
        }, {
          key: "subscribePago",
          value: function subscribePago() {
            var _this36 = this;

            this.sub.add(this.pagoService.pago.subscribe(function (pago) {
              _this36.pago = pago;
            }));
          }
        }, {
          key: "subscribePrestamo",
          value: function subscribePrestamo() {
            var _this37 = this;

            this.sub.add(this.prestamoService.prestamo.subscribe(function (prestamo) {
              _this37.prestamo = prestamo;
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.visible = false;
            this.modal.modalName = '';
            this.pagoService.pago.emit(null);
          }
        }, {
          key: "refreshForm",
          value: function refreshForm() {
            this.impresionForm.resetForm();
          }
        }, {
          key: "save",
          value: function save() {
            var _this38 = this;

            this.loading = true;
            var body = {
              prestamo: this.prestamo.id,
              costoImpresion: +this.impresionForm.value.costoImpresion,
              tipoDocumento: this.tipoDocumento
            };
            console.log(body);
            this.impresionService.postImpresion(body).subscribe(function (response) {
              _this38.loading = false;

              _this38.alertService.triggerMessage('Impresión registrada correctamente', 'success');

              _this38.refreshImpresiones();

              _this38.closeModal();
            }, function (error) {
              _this38.loading = false;

              _this38.alertService.triggerMessage(error.error.message, 'error');
            });
          }
        }, {
          key: "refreshImpresiones",
          value: function refreshImpresiones() {
            var _this39 = this;

            this.sub.add(this.impresionService.getByPrestamoId(this.prestamo.id).subscribe(function (impresiones) {
              if (impresiones) {
                _this39.impresionService.impresiones.emit(impresiones);
              }
            }));
          }
        }]);

        return ModalImpresionReciboComponent;
      }();

      ModalImpresionReciboComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_prestamo_service__WEBPACK_IMPORTED_MODULE_8__["PrestamoService"]
        }, {
          type: src_app_core_services_pago_service__WEBPACK_IMPORTED_MODULE_6__["PagoService"]
        }, {
          type: src_app_core_services_impresion_service__WEBPACK_IMPORTED_MODULE_9__["ImpresionService"]
        }, {
          type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxFormBuilder"]
        }];
      };

      ModalImpresionReciboComponent.propDecorators = {
        tipoDocumento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      ModalImpresionReciboComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-impresion-recibo',
        template: _raw_loader_modal_impresion_recibo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalImpresionReciboComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=prestamo-prestamo-module-es5.js.map