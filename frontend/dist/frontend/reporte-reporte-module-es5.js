(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-reporte-module"], {
    /***/
    "+Zr/":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-inventario/card-reporte-inventario.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Inventario\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "1gHi":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-transaccion/card-reporte-transaccion.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: CardReporteTransaccionComponent */

    /***/
    function gHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReporteTransaccionComponent", function () {
        return CardReporteTransaccionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-transaccion.component.html */
      "L97z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/reporte.service */
      "Tutu");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/Subscription */
      "zB/H");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__);

      var CardReporteTransaccionComponent = /*#__PURE__*/function () {
        function CardReporteTransaccionComponent(reporteService, location, fb) {
          _classCallCheck(this, CardReporteTransaccionComponent);

          this.reporteService = reporteService;
          this.location = location;
          this.fb = fb;
          this.loading = false;
          this.transacciones = [];
          this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10)],
            to: [new Date().toISOString().substring(0, 10)]
          });
        }

        _createClass(CardReporteTransaccionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
            this.getTansaccioness();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getTansaccioness",
          value: function getTansaccioness() {
            var _this = this;

            this.loading = true;
            this.sub.add(this.reporteService.getTransaccionByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (transacciones) {
              if (transacciones) {
                _this.transacciones = transacciones;
              }

              _this.loading = false;
            }));
          }
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            this.getTansaccioness();
          }
        }]);

        return CardReporteTransaccionComponent;
      }();

      CardReporteTransaccionComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["RxFormBuilder"]
        }];
      };

      CardReporteTransaccionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-transaccion',
        template: _raw_loader_card_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReporteTransaccionComponent);
      /***/
    },

    /***/
    "76eo":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PdfPrestamoActivoComponent */

    /***/
    function eo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfPrestamoActivoComponent", function () {
        return PdfPrestamoActivoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_prestamo_activo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-prestamo-activo.component.html */
      "pGCz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PdfPrestamoActivoComponent = /*#__PURE__*/function () {
        function PdfPrestamoActivoComponent() {
          _classCallCheck(this, PdfPrestamoActivoComponent);
        }

        _createClass(PdfPrestamoActivoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PdfPrestamoActivoComponent;
      }();

      PdfPrestamoActivoComponent.ctorParameters = function () {
        return [];
      };

      PdfPrestamoActivoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-prestamo-activo',
        template: _raw_loader_pdf_prestamo_activo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfPrestamoActivoComponent);
      /***/
    },

    /***/
    "7LO/":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-impresion/card-reporte-impresion.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Reimpresiones\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"items-center mb-4 ml-2 mt-4\">\n          <form\n            autocomplete=\"off\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"flex flex-col\">\n          <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n              <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                  <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                      <table class=\"min-w-full\">\n                          <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                              <tr>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Fecha\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Operación\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Cargo\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Comisión\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Cargos Generados\n                                  </th>\n                                  <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                    Amortiguado\n                                  </th>\n                              </tr>\n                          </thead>\n                          <tbody  >\n                              <tr\n\n                                class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                                >\n                                  <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                                  <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                      Bol.\n                                  </td>\n                              </tr>\n\n\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "9LgK":
    /*!****************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: PdfReportePagoComponent */

    /***/
    function LgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReportePagoComponent", function () {
        return PdfReportePagoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-pago.component.html */
      "PX1f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PdfReportePagoComponent = /*#__PURE__*/function () {
        function PdfReportePagoComponent() {
          _classCallCheck(this, PdfReportePagoComponent);
        }

        _createClass(PdfReportePagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PdfReportePagoComponent;
      }();

      PdfReportePagoComponent.ctorParameters = function () {
        return [];
      };

      PdfReportePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-pago',
        template: _raw_loader_pdf_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReportePagoComponent);
      /***/
    },

    /***/
    "9qf7":
    /*!************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: PdfReportePrestamoComponent */

    /***/
    function qf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReportePrestamoComponent", function () {
        return PdfReportePrestamoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-prestamo.component.html */
      "cVPJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;

      var PdfReportePrestamoComponent = /*#__PURE__*/function () {
        function PdfReportePrestamoComponent(datePipe) {
          _classCallCheck(this, PdfReportePrestamoComponent);

          this.datePipe = datePipe;
          this.prestamos = [];
        }

        _createClass(PdfReportePrestamoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var prestamoBody = [[{
              text: 'Fecha de Prestamo',
              style: 'tableHeader'
            }, {
              text: 'Fecha de vencimiento',
              style: 'tableHeader'
            }, {
              text: 'Cliente',
              style: 'tableHeader'
            }, {
              text: 'Prenda',
              style: 'tableHeader'
            }, {
              text: 'Monto de prestamo',
              style: 'tableHeader'
            }, {
              text: 'Intereses a pagar',
              style: 'tableHeader'
            }, {
              text: 'Total',
              style: 'tableHeader'
            }]];
            var prestamoValues = {
              totalInventario: 0,
              totalMontoPrestamo: 0,
              totalInteres: 0,
              totalCosto: 0
            };

            var _iterator = _createForOfIteratorHelper(this.prestamos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var prestamo = _step.value;
                prestamoValues.totalInventario += +prestamo.inventario.length;
                prestamoValues.totalMontoPrestamo += +prestamo.costoPrestamo;
                prestamoValues.totalInteres += +prestamo.costoInteres;
                prestamoValues.totalCosto += +prestamo.costoTotal;
                prestamoBody.push(["".concat(this.datePipe.transform(prestamo.fechaInicio, 'shortDate')), "".concat(this.datePipe.transform(prestamo.fechaFinal, 'shortDate')), "".concat(prestamo.client.name), "".concat(prestamo.inventario.map(function (i) {
                  return i.descripcion + ' ';
                })), "Bol. ".concat(prestamo.costoPrestamo), "Bol. ".concat(prestamo.costoInteres), {
                  text: "Bol. ".concat(prestamo.costoTotal),
                  alignment: 'center'
                }, {
                  text: 'x',
                  alignment: 'center'
                }]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var reporte = {
              // a string or { width: number, height: number }
              pageSize: 'LETTER',
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: 'landscape',
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [20, 15, 15, 20],
              content: [//FECHA Y HORA ACTUAL AL IMPRIMIR
              {
                text: "".concat(this.datePipe.transform(Date.now(), 'medium')),
                fontSize: 8
              }, {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 10, 0, 0],
                  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7UAAAGJCAIAAADaHIOdAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAfnaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM4ZDkwMDg4LWUyNWUtYjc0MS1iNDY5LWUxZmYwMjhiMjU3OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNGFhZGMyZS04MDFiLTliNDgtODg4MC1kZjQxYWJiNDZhMmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iOTE5MzlEQTlDQTVCMjlDQzUwN0IyNkYyNDA0RDBDODgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMS0xMlQxODowNzoxNi0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMjVUMTY6MTI6MzUtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMjVUMTY6MTI6MzUtMDQ6MDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYWY0OWZiMi1lZDM3LTk4NDAtOTM4MC1kMDg1Mjc4OWE1ZWMiIHN0RXZ0OndoZW49IjIwMjItMDItMjVUMTY6MTI6MzUtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFj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'
                }, [// REPORTE DE PRESTAMOS
                {
                  text: "Reporte de 'PRESTAMOS REALIZADOS'",
                  color: '#333333',
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: 'center',
                  margin: [0, 0, 0, 0]
                }]]
              }, '\n', {
                columns: [{
                  width: 250,
                  text: "Prestamos realizados Desde ".concat(this.datePipe.transform(this.from, 'mediumDate'))
                }, {
                  width: '*',
                  text: "Hasta ".concat(this.datePipe.transform(this.to, 'mediumDate'))
                }]
              }, {
                style: 'tableExample',
                table: {
                  widths: [60, 60, 250, 100, 60, 42, 40, 40],
                  headerRows: 1,
                  body: prestamoBody
                },
                layout: 'lightHorizontalLines'
              }, {
                style: 'tableExample',
                table: {
                  widths: [60, 60, 250, 135, 60, 55, 60],
                  headerRows: 1,
                  body: [[{
                    text: 'Total',
                    fontSize: 14,
                    style: 'tableHeader'
                  }, {}, {}, {
                    text: "".concat(prestamoValues.totalInventario),
                    alignment: 'center',
                    style: 'tableHeader'
                  }, {
                    text: "Bol. ".concat(prestamoValues.totalMontoPrestamo),
                    alignment: 'center',
                    style: 'tableHeader'
                  }, {
                    text: "Bol. ".concat(prestamoValues.totalInteres),
                    style: 'tableHeader'
                  }, {
                    text: "Bol. ".concat(prestamoValues.totalCosto),
                    alignment: 'center',
                    style: 'tableHeader'
                  }]]
                },
                layout: 'noBorders'
              }],
              styles: {
                tableHeader: {
                  bold: true,
                  fontSize: 10,
                  color: 'black'
                },
                tableExample: {
                  margin: [0, 10, 0, 5]
                }
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(reporte).open();
          }
        }]);

        return PdfReportePrestamoComponent;
      }();

      PdfReportePrestamoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfReportePrestamoComponent.propDecorators = {
        prestamos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PdfReportePrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-reporte-prestamo',
        template: _raw_loader_pdf_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReportePrestamoComponent);
      /***/
    },

    /***/
    "GMZp":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isObject.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function GMZp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isObject(x) {
        return x !== null && typeof x === 'object';
      }

      exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

      /***/
    },

    /***/
    "GNSx":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: PdfReporteTransaccionComponent */

    /***/
    function GNSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReporteTransaccionComponent", function () {
        return PdfReporteTransaccionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-transaccion.component.html */
      "JaSY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/business.service */
      "cwzI");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;

      var PdfReporteTransaccionComponent = /*#__PURE__*/function () {
        function PdfReporteTransaccionComponent(businessService, datePipe) {
          _classCallCheck(this, PdfReporteTransaccionComponent);

          this.businessService = businessService;
          this.datePipe = datePipe;
          this.transacciones = [];
          this.business = this.businessService.businessInformation;
        }

        _createClass(PdfReporteTransaccionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "subscribeBusiness",
          value: function subscribeBusiness() {
            var _this2 = this;

            this.businessService.business.subscribe(function (business) {
              if (business) {
                _this2.business = business;
              }
            });
          }
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var dolaresDisponibles = 0;
            var totalCompras = 0;
            var totalVentas = 0;
            var totalDiferencia = 0;
            var bodyDolar = [[{
              text: "Fecha",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Operacion",
              style: "tableHeader"
            }, {
              text: "Cantidad en dolares",
              style: "tableHeader"
            }, {
              text: "Precio dolar",
              style: "tableHeader"
            }, {
              text: "Cantidad total",
              style: "tableHeader"
            }, {
              text: "Precio dolar oficial",
              style: "tableHeader"
            }, {
              text: "Cantidad real",
              style: "tableHeader"
            }, {
              text: "Diferencia",
              style: "tableHeader"
            }]];

            var _iterator2 = _createForOfIteratorHelper(this.transacciones),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var transaccion = _step2.value;

                if (transaccion.operacion === 'VENTA') {
                  dolaresDisponibles -= +transaccion.cantidad;
                  totalVentas += +transaccion.cantidad;
                } else {
                  dolaresDisponibles += +transaccion.cantidad;
                  totalCompras += +transaccion.cantidad;
                }

                totalDiferencia += +transaccion.diferencia;
                bodyDolar.push([{
                  text: "".concat(this.datePipe.transform(transaccion.createdAt, 'medium')),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "".concat(transaccion.operacion),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "$. ".concat(transaccion.cantidad),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(transaccion.tipoCambio),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat((transaccion.cantidad * transaccion.tipoCambio).toFixed(1)),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(transaccion.tipoCambioOficial),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat((transaccion.cantidad * transaccion.tipoCambioOficial).toFixed(1)),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(transaccion.diferencia),
                  alignment: "center",
                  fontSize: 10
                }]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var reporte = {
              // a string or { width: number, height: number }
              pageSize: "LETTER",
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: "landscape",
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [20, 15, 15, 20],
              content: [//FECHA Y HORA ACTUAL AL IMPRIMIR
              {
                text: "".concat(this.datePipe.transform(Date.now(), 'medium')),
                fontSize: 8
              }, {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 10, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["logoCaysool"]
                }, [// REPORTE DE PRESTAMOS
                {
                  text: 'Reporte de "COMPRA VENTA DE DOLARES"',
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, "\n", {
                columns: [{
                  width: 250,
                  text: "Cambio Oficial del Dolar ".concat(this.business.cambioDolar),
                  bold: true,
                  fontSize: 14
                }, {
                  columns: [{
                    width: 250,
                    text: "Compra venta desde ".concat(this.datePipe.transform(this.from, 'mediumDate')),
                    bold: false,
                    fontSize: 12
                  }, {
                    width: "*",
                    text: "hasta ".concat(this.datePipe.transform(this.to, 'mediumDate'))
                  }]
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [60, 60, 120, "*", "*", "*", "*", "*"],
                  headerRows: 1,
                  body: bodyDolar
                },
                layout: "lightHorizontalLines"
              }, //suma de la diferencia
              {
                table: {
                  widths: [60, 60, 120, "*", "*", "*", "*", "*"],
                  headerRows: 1,
                  body: [[{
                    text: "Total",
                    alignment: "center",
                    style: "tableHeader"
                  }, "", "", "", "", "", {
                    text: "",
                    alignment: "center"
                  }, {
                    text: "Bol. ".concat(totalDiferencia.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }]]
                },
                layout: "noBorders"
              }, {
                style: "tableExample",
                table: {
                  widths: [300, 130, 150],
                  headerRows: 1,
                  body: [[{
                    text: "Total de Dolares disponibles",
                    fontSize: 13,
                    style: "tableHeader"
                  }, {
                    text: "$. ".concat(dolaresDisponibles),
                    alignment: "right",
                    fontSize: 13
                  }, {
                    text: "",
                    alignment: "right",
                    fontSize: 12
                  }], [{
                    text: "Total compras",
                    fontSize: 13,
                    style: "tableHeader"
                  }, {
                    text: "$. ".concat(totalCompras),
                    alignment: "right",
                    fontSize: 13
                  }, {
                    text: "",
                    alignment: "right",
                    fontSize: 12
                  }], [{
                    text: "Total ventas",
                    fontSize: 13,
                    style: "tableHeader"
                  }, {
                    text: "$. ".concat(totalVentas),
                    alignment: "right",
                    fontSize: 13
                  }, {
                    text: "",
                    alignment: "right",
                    fontSize: 12
                  }]]
                },
                layout: "noBorders"
              }],
              styles: {
                tableHeader: {
                  bold: true,
                  fontSize: 10,
                  color: "black"
                },
                tableExample: {
                  margin: [0, 10, 0, 5]
                }
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(reporte).open();
          }
        }]);

        return PdfReporteTransaccionComponent;
      }();

      PdfReporteTransaccionComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_business_service__WEBPACK_IMPORTED_MODULE_3__["BusinessService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }];
      };

      PdfReporteTransaccionComponent.propDecorators = {
        transacciones: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PdfReporteTransaccionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-transaccion',
        template: _raw_loader_pdf_reporte_transaccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReporteTransaccionComponent);
      /***/
    },

    /***/
    "JQJn":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JQJn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>pdf-reporte-impresion works!</p>\n";
      /***/
    },

    /***/
    "JaSY":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JaSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
      /***/
    },

    /***/
    "L97z":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-transaccion/card-reporte-transaccion.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L97z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Compra Venta Dolar\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-transaccion [transacciones]=\"transacciones\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-transaccion>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Operación\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Dolares\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Precio dolar\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Bol.\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Precio dolar oficial\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad real\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Diferencia\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"transacciones\" >\n                            <tr\n                              *ngFor=\"let transaccion of transacciones\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{transaccion.createdAt | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{transaccion.operacion}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{transaccion.cantidad}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    $. {{transaccion.tipoCambio}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{(transaccion.tipoCambio * transaccion.cantidad).toFixed(1)}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{transaccion.tipoCambioOficial}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{(transaccion.tipoCambioOficial * transaccion.cantidad).toFixed(1)}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{transaccion.diferencia}}\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n";
      /***/
    },

    /***/
    "LBXl":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function LBXl(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var UnsubscriptionErrorImpl = function () {
        function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
          }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
        }

        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
      }();

      exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

    /***/
    "MRQM":
    /*!**********************************************************!*\
      !*** ./src/app/views/admin/reporte/reporte.component.ts ***!
      \**********************************************************/

    /*! exports provided: ReporteComponent */

    /***/
    function MRQM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteComponent", function () {
        return ReporteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reporte.component.html */
      "l86T");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReporteComponent = /*#__PURE__*/function () {
        function ReporteComponent() {
          _classCallCheck(this, ReporteComponent);
        }

        _createClass(ReporteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReporteComponent;
      }();

      ReporteComponent.ctorParameters = function () {
        return [];
      };

      ReporteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reporte',
        template: _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ReporteComponent);
      /***/
    },

    /***/
    "MyL/":
    /*!********************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.css ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXJlcG9ydGUtcGFnby5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Nniu":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-list/card-reporte-list.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: CardReporteListComponent */

    /***/
    function Nniu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReporteListComponent", function () {
        return CardReporteListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-list.component.html */
      "gwy0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CardReporteListComponent = /*#__PURE__*/function () {
        function CardReporteListComponent(router) {
          _classCallCheck(this, CardReporteListComponent);

          this.router = router;
        }

        _createClass(CardReporteListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToAnotherPage",
          value: function goToAnotherPage(pageName) {
            this.router.navigate(["admin/reportes/".concat(pageName)]);
          }
        }, {
          key: "goToAnotherPageEstado",
          value: function goToAnotherPageEstado(pageName, estado) {
            this.router.navigate(["admin/reportes/".concat(pageName), estado]);
          }
        }, {
          key: "setEstado",
          value: function setEstado() {
            var estado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.estado = estado;
          }
        }]);

        return CardReporteListComponent;
      }();

      CardReporteListComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      CardReporteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-list',
        template: _raw_loader_card_reporte_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReporteListComponent);
      /***/
    },

    /***/
    "PX1f":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PX1f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>pdf-reporte-pago works!</p>\n";
      /***/
    },

    /***/
    "PuVi":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-inventario/card-reporte-inventario.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: CardReporteInventarioComponent */

    /***/
    function PuVi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReporteInventarioComponent", function () {
        return CardReporteInventarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-inventario.component.html */
      "+Zr/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CardReporteInventarioComponent = /*#__PURE__*/function () {
        function CardReporteInventarioComponent(location) {
          _classCallCheck(this, CardReporteInventarioComponent);

          this.location = location;
        }

        _createClass(CardReporteInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }]);

        return CardReporteInventarioComponent;
      }();

      CardReporteInventarioComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      };

      CardReporteInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-inventario',
        template: _raw_loader_card_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReporteInventarioComponent);
      /***/
    },

    /***/
    "QXFI":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QXFI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Pagos\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "SFmO":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-impresion/card-reporte-impresion.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: CardReporteImpresionComponent */

    /***/
    function SFmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReporteImpresionComponent", function () {
        return CardReporteImpresionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-impresion.component.html */
      "7LO/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/reporte.service */
      "Tutu");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CardReporteImpresionComponent = /*#__PURE__*/function () {
        function CardReporteImpresionComponent(reporteService, location, fb) {
          _classCallCheck(this, CardReporteImpresionComponent);

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

        _createClass(CardReporteImpresionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getImpresiones",
          value: function getImpresiones() {
            var _this3 = this;

            this.sub.add(this.reporteService.getImpresionesByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (impresiones) {
              if (impresiones) {
                _this3.impresiones = impresiones;
              }
            }));
          }
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }]);

        return CardReporteImpresionComponent;
      }();

      CardReporteImpresionComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["RxFormBuilder"]
        }];
      };

      CardReporteImpresionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-impresion',
        template: _raw_loader_card_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReporteImpresionComponent);
      /***/
    },

    /***/
    "SjkY":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SjkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Ingresos y salidas\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-ingreso-salida [movimientos]=\"movimientos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-ingreso-salida>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de movimiento\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Ingreso/Gasto\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Concepto\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cantidad en Bol.\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"movimientos\" >\n                            <tr\n                              *ngFor=\"let movimiento of movimientos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{movimiento.createdAt | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{movimiento.tipo?'INGRESO':'GASTO'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{movimiento.concepto}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{movimiento.cantidad}}\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "Tutu":
    /*!**************************************************!*\
      !*** ./src/app/core/services/reporte.service.ts ***!
      \**************************************************/

    /*! exports provided: ReporteService */

    /***/
    function Tutu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteService", function () {
        return ReporteService;
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

      var ReporteService = /*#__PURE__*/function () {
        function ReporteService(http) {
          _classCallCheck(this, ReporteService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(ReporteService, [{
          key: "getPrestamosByDate",
          value: function getPrestamosByDate(_ref) {
            var from = _ref.from,
                to = _ref.to,
                estado = _ref.estado;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/prestamo?from=").concat(from, "&to=").concat(to, "&estado=").concat(estado), {
              headers: headers
            });
          }
        }, {
          key: "getPagosByDate",
          value: function getPagosByDate(_ref2) {
            var from = _ref2.from,
                to = _ref2.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/pago?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getImpresionesByDate",
          value: function getImpresionesByDate(_ref3) {
            var from = _ref3.from,
                to = _ref3.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/impresion?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getInventarioByDate",
          value: function getInventarioByDate(_ref4) {
            var from = _ref4.from,
                to = _ref4.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/inventario?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getTransaccionByDate",
          value: function getTransaccionByDate(_ref5) {
            var from = _ref5.from,
                to = _ref5.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/transaccion?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getIngresoSalidaByDate",
          value: function getIngresoSalidaByDate(_ref6) {
            var from = _ref6.from,
                to = _ref6.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/movimiento?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }]);

        return ReporteService;
      }();

      ReporteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ReporteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ReporteService);
      /***/
    },

    /***/
    "ZhH5":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZhH5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>pdf-reporte-inventario works!</p>\n";
      /***/
    },

    /***/
    "Zx+K":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-pago/card-reporte-pago.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: CardReportePagoComponent */

    /***/
    function ZxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReportePagoComponent", function () {
        return CardReportePagoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-pago.component.html */
      "QXFI");
      /* harmony import */


      var _card_reporte_pago_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-reporte-pago.component.css */
      "MyL/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CardReportePagoComponent = /*#__PURE__*/function () {
        function CardReportePagoComponent(location) {
          _classCallCheck(this, CardReportePagoComponent);

          this.location = location;
        }

        _createClass(CardReportePagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }]);

        return CardReportePagoComponent;
      }();

      CardReportePagoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      };

      CardReportePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card-reporte-pago',
        template: _raw_loader_card_reporte_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_reporte_pago_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CardReportePagoComponent);
      /***/
    },

    /***/
    "auY5":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: PdfPrestamoCanceladoComponent */

    /***/
    function auY5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfPrestamoCanceladoComponent", function () {
        return PdfPrestamoCanceladoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_prestamo_cancelado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-prestamo-cancelado.component.html */
      "nLhP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;

      var PdfPrestamoCanceladoComponent = /*#__PURE__*/function () {
        function PdfPrestamoCanceladoComponent(datePipe) {
          _classCallCheck(this, PdfPrestamoCanceladoComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfPrestamoCanceladoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var totalInventario = 0;
            var totalCostoPrestamos = 0;
            var totalImpresiones = 0;
            var totalcargosExtra = 0;
            var totalInteres = 0;
            var totalPagos = 0;
            var bodyPrestamo = [[{
              text: "Fecha de Prestamo",
              style: "tableHeader"
            }, {
              text: "Fecha de final",
              style: "tableHeader"
            }, {
              text: "Cliente",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Prenda",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Monto de prestamo",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Comision/Reimpresiones",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Cargos extra",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Interes generado",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Total pagos",
              style: "tableHeader",
              alignment: "center"
            }]];

            var _iterator3 = _createForOfIteratorHelper(this.prestamos),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var prestamo = _step3.value;
                totalInventario += +prestamo.inventario.length;
                totalCostoPrestamos += +prestamo.costoPrestamo;
                totalImpresiones += +prestamo.costoImpresion + +prestamo.costoAdministracion;
                totalcargosExtra += +prestamo.costoPiso;
                totalInteres += +prestamo.costoInteres;
                totalPagos += +prestamo.costoCancelado;
                bodyPrestamo.push([{
                  text: "".concat(this.datePipe.transform(prestamo.fechaInicio, 'mediumDate')),
                  fontSize: 10,
                  alignment: "center"
                }, {
                  text: "".concat(this.datePipe.transform(prestamo.fechaFinal, 'mediumDate')),
                  fontSize: 10,
                  alignment: "center"
                }, {
                  text: "".concat(prestamo.client.name),
                  fontSize: 10,
                  alignment: "center"
                }, {
                  text: "".concat(prestamo.inventario.map(function (i) {
                    return i.descripcion + ', ';
                  })),
                  fontSize: 10,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(prestamo.costoPrestamo),
                  fontSize: 10,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat((+prestamo.costoImpresion + +prestamo.costoAdministracion).toFixed(1)),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(prestamo.costoPiso),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(prestamo.costoInteres),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat(prestamo.costoCancelado),
                  fontSize: 10,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            ;
            var reporte = {
              // a string or { width: number, height: number }
              pageSize: "LETTER",
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: "landscape",
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [20, 15, 15, 20],
              content: [//FECHA Y HORA ACTUAL AL IMPRIMIR
              {
                text: "".concat(this.datePipe.transform(Date.now(), "medium")),
                fontSize: 8
              }, {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 10, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["logoCaysool"]
                }, [// REPORTE DE PRESTAMOS
                {
                  text: "Reporte de \"PRESTAMOS ".concat(this.prestamos[0].estado, "S\""),
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, "\n", {
                columns: [{
                  width: 250,
                  text: "Prestamos cancelados Desde ".concat(this.datePipe.transform(this.from, "mediumDate"))
                }, {
                  width: "*",
                  text: "Hasta ".concat(this.datePipe.transform(this.to, "mediumDate"))
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [60, 60, 120, 100, 60, 60, 55, 55, 55],
                  headerRows: 1,
                  body: bodyPrestamo
                },
                layout: "lightHorizontalLines"
              }, {
                style: "tableExample",
                table: {
                  widths: [60, 100, 120, 100, 60, 60, 70, 60, 60],
                  headerRows: 1,
                  body: [[{
                    text: "Total",
                    fontSize: 14,
                    style: "tableHeader"
                  }, {}, {}, {
                    text: "Bol. ".concat(totalInventario.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoPrestamos.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalImpresiones.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalcargosExtra.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalInteres.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalPagos.toFixed(1)),
                    alignment: "center",
                    style: "tableHeader"
                  }]]
                },
                layout: "noBorders"
              }],
              styles: {
                tableHeader: {
                  bold: true,
                  fontSize: 10,
                  color: "black"
                },
                tableExample: {
                  margin: [0, 10, 0, 5]
                }
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(reporte).open();
          }
        }]);

        return PdfPrestamoCanceladoComponent;
      }();

      PdfPrestamoCanceladoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfPrestamoCanceladoComponent.propDecorators = {
        prestamos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PdfPrestamoCanceladoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-pdf-prestamo-cancelado",
        template: _raw_loader_pdf_prestamo_cancelado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfPrestamoCanceladoComponent);
      /***/
    },

    /***/
    "bVnx":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: PdfReporteImpresionComponent */

    /***/
    function bVnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReporteImpresionComponent", function () {
        return PdfReporteImpresionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-impresion.component.html */
      "JQJn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PdfReporteImpresionComponent = /*#__PURE__*/function () {
        function PdfReporteImpresionComponent() {
          _classCallCheck(this, PdfReporteImpresionComponent);
        }

        _createClass(PdfReporteImpresionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PdfReporteImpresionComponent;
      }();

      PdfReporteImpresionComponent.ctorParameters = function () {
        return [];
      };

      PdfReporteImpresionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-impresion',
        template: _raw_loader_pdf_reporte_impresion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReporteImpresionComponent);
      /***/
    },

    /***/
    "cT9j":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: PdfReporteInventarioComponent */

    /***/
    function cT9j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReporteInventarioComponent", function () {
        return PdfReporteInventarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-inventario.component.html */
      "ZhH5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PdfReporteInventarioComponent = /*#__PURE__*/function () {
        function PdfReporteInventarioComponent() {
          _classCallCheck(this, PdfReporteInventarioComponent);
        }

        _createClass(PdfReporteInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PdfReporteInventarioComponent;
      }();

      PdfReporteInventarioComponent.ctorParameters = function () {
        return [];
      };

      PdfReporteInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-inventario',
        template: _raw_loader_pdf_reporte_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReporteInventarioComponent);
      /***/
    },

    /***/
    "cVPJ":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cVPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
      /***/
    },

    /***/
    "dh3m":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-prestamo/card-reporte-prestamo.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dh3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Prestamos {{ estado }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <!--<app-pdf-reporte-prestamo-activo *ngIf=\"estado==='ACTIVO'\" [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-prestamo-activo>-->\n                <app-pdf-prestamo-cancelado [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-prestamo-cancelado>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Vencimiento\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cliente\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Monto de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Interés a Pagar\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Total\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Por Cobrar\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"prestamos\" >\n                            <tr\n                              *ngFor=\"let prestamo of prestamos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{prestamo.fechaInicio | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{prestamo.fechaFinal | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{prestamo.client.name}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoPrestamo}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoInteres}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoTotal}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{(+prestamo.costoTotal - +prestamo.costoCancelado).toFixed(1)}}\n                              </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "gBSj":
    /*!*******************************************************!*\
      !*** ./src/app/views/admin/reporte/reporte.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReporteModule */

    /***/
    function gBSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteModule", function () {
        return ReporteModule;
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


      var _reporte_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reporte-routing.module */
      "ymRX");
      /* harmony import */


      var _reporte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reporte.component */
      "MRQM");
      /* harmony import */


      var _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/cards/card-reporte-list/card-reporte-list.component */
      "Nniu");
      /* harmony import */


      var _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cards/card-reporte-prestamo/card-reporte-prestamo.component */
      "ja2y");
      /* harmony import */


      var _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/cards/card-reporte-inventario/card-reporte-inventario.component */
      "PuVi");
      /* harmony import */


      var _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/cards/card-reporte-pago/card-reporte-pago.component */
      "Zx+K");
      /* harmony import */


      var _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/cards/card-reporte-impresion/card-reporte-impresion.component */
      "SFmO");
      /* harmony import */


      var _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/cards/card-reporte-transaccion/card-reporte-transaccion.component */
      "1gHi");
      /* harmony import */


      var _components_pdfs_pdf_reporte_impresion_pdf_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-impresion/pdf-reporte-impresion.component */
      "bVnx");
      /* harmony import */


      var _components_pdfs_pdf_reporte_pago_pdf_reporte_pago_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-pago/pdf-reporte-pago.component */
      "9LgK");
      /* harmony import */


      var _components_pdfs_pdf_reporte_inventario_pdf_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-inventario/pdf-reporte-inventario.component */
      "cT9j");
      /* harmony import */


      var _components_pdfs_pdf_reporte_transaccion_pdf_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-transaccion/pdf-reporte-transaccion.component */
      "GNSx");
      /* harmony import */


      var _components_pdfs_pdf_reporte_prestamo_pdf_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-prestamo/pdf-reporte-prestamo.component */
      "9qf7");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "7PmN");
      /* harmony import */


      var _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component */
      "pGE7");
      /* harmony import */


      var _components_pdfs_pdf_reporte_ingreso_salida_pdf_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component */
      "tkTM");
      /* harmony import */


      var _components_pdfs_pdf_prestamo_activo_pdf_prestamo_activo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component */
      "76eo");
      /* harmony import */


      var _components_pdfs_pdf_prestamo_cancelado_pdf_prestamo_cancelado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component */
      "auY5");

      var ReporteModule = /*#__PURE__*/_createClass(function ReporteModule() {
        _classCallCheck(this, ReporteModule);
      });

      ReporteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reporte_component__WEBPACK_IMPORTED_MODULE_3__["ReporteComponent"], _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_4__["CardReporteListComponent"], _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_5__["CardReportePrestamoComponent"], _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_6__["CardReporteInventarioComponent"], _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__["CardReportePagoComponent"], _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_8__["CardReporteImpresionComponent"], _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__["CardReporteTransaccionComponent"], _components_pdfs_pdf_reporte_impresion_pdf_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_10__["PdfReporteImpresionComponent"], _components_pdfs_pdf_reporte_pago_pdf_reporte_pago_component__WEBPACK_IMPORTED_MODULE_11__["PdfReportePagoComponent"], _components_pdfs_pdf_reporte_inventario_pdf_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_12__["PdfReporteInventarioComponent"], _components_pdfs_pdf_reporte_transaccion_pdf_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_13__["PdfReporteTransaccionComponent"], _components_pdfs_pdf_reporte_prestamo_pdf_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_14__["PdfReportePrestamoComponent"], _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_16__["CardReporteIngresoSalidaComponent"], _components_pdfs_pdf_reporte_ingreso_salida_pdf_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_17__["PdfReporteIngresoSalidaComponent"], _components_pdfs_pdf_prestamo_activo_pdf_prestamo_activo_component__WEBPACK_IMPORTED_MODULE_18__["PdfPrestamoActivoComponent"], _components_pdfs_pdf_prestamo_cancelado_pdf_prestamo_cancelado_component__WEBPACK_IMPORTED_MODULE_19__["PdfPrestamoCanceladoComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _reporte_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReporteRoutingModule"]]
      })], ReporteModule);
      /***/
    },

    /***/
    "gwy0":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/cards/card-reporte-list/card-reporte-list.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gwy0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        Reportes\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <div class=\"w-full my-2 relative p-2 flex flex-col\">\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Prestamos\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'CANCELADO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos cancelados\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'ACTIVO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos vigentes\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n              type=\"button\"\n              class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n              (click)=\"goToAnotherPageEstado('prestamos', 'VENCIDO')\">\n              <div class=\"flex flex-col\">\n                <p class=\"p-3\">\n                  Prestamos vencidos\n                </p>\n                <i class=\"text-4xl fas fa-calendar\"></i>\n              </div>\n            </button>\n            </div>\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Compras y ventas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('compra-venta-dolar')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Compra y venta de dolar\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('venta')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ventas\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Ingresos y Salidas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('ingreso-salida')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ingresos y salidas\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "ja2y":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-prestamo/card-reporte-prestamo.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: CardReportePrestamoComponent */

    /***/
    function ja2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReportePrestamoComponent", function () {
        return CardReportePrestamoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-prestamo.component.html */
      "dh3m");
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


      var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/reporte.service */
      "Tutu");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/internal/Subscription */
      "zB/H");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__);

      var CardReportePrestamoComponent = /*#__PURE__*/function () {
        function CardReportePrestamoComponent(reporteService, location, route, fb) {
          _classCallCheck(this, CardReportePrestamoComponent);

          this.reporteService = reporteService;
          this.location = location;
          this.route = route;
          this.fb = fb;
          this.estado = '';
          this.loading = false;
          this.prestamos = [];
          this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10)],
            to: [new Date().toISOString().substring(0, 10)]
          });
        }

        _createClass(CardReportePrestamoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
            this.estado = this.route.snapshot.paramMap.get('prestamoEstado');
            this.getPrestamos();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getPrestamos",
          value: function getPrestamos() {
            var _this4 = this;

            this.loading = true;
            console.log(this.reporteForm.value);
            this.sub.add(this.reporteService.getPrestamosByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to,
              estado: this.estado
            }).subscribe(function (prestamos) {
              console.log(prestamos);

              if (prestamos) {
                _this4.prestamos = prestamos;
              }

              _this4.loading = false;
            }));
          }
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            this.getPrestamos();
          }
        }]);

        return CardReportePrestamoComponent;
      }();

      CardReportePrestamoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["RxFormBuilder"]
        }];
      };

      CardReportePrestamoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-prestamo',
        template: _raw_loader_card_reporte_prestamo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReportePrestamoComponent);
      /***/
    },

    /***/
    "l86T":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/reporte.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l86T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "mbIT":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isArray.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function mbIT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.isArray = function () {
        return Array.isArray || function (x) {
          return x && typeof x.length === 'number';
        };
      }(); //# sourceMappingURL=isArray.js.map

      /***/

    },

    /***/
    "nLhP":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-cancelado/pdf-prestamo-cancelado.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nLhP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
      /***/
    },

    /***/
    "pGCz":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-activo/pdf-prestamo-activo.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pGCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
      /***/
    },

    /***/
    "pGE7":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: CardReporteIngresoSalidaComponent */

    /***/
    function pGE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardReporteIngresoSalidaComponent", function () {
        return CardReporteIngresoSalidaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-reporte-ingreso-salida.component.html */
      "SjkY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/reporte.service */
      "Tutu");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "XKlN");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/Subscription */
      "zB/H");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__);

      var CardReporteIngresoSalidaComponent = /*#__PURE__*/function () {
        function CardReporteIngresoSalidaComponent(reporteService, location, fb) {
          _classCallCheck(this, CardReporteIngresoSalidaComponent);

          this.reporteService = reporteService;
          this.location = location;
          this.fb = fb;
          this.loading = false;
          this.movimientos = [];
          this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10)],
            to: [new Date().toISOString().substring(0, 10)]
          });
        }

        _createClass(CardReporteIngresoSalidaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
            this.getIngresoSalida();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getIngresoSalida",
          value: function getIngresoSalida() {
            var _this5 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getIngresoSalidaByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (movimientos) {
              if (movimientos) {
                _this5.movimientos = movimientos;
              }

              _this5.loading = false;
            }));
          }
        }, {
          key: "goToBackPage",
          value: function goToBackPage() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            this.getIngresoSalida();
          }
        }]);

        return CardReporteIngresoSalidaComponent;
      }();

      CardReporteIngresoSalidaComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["RxFormBuilder"]
        }];
      };

      CardReporteIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-reporte-ingreso-salida',
        template: _raw_loader_card_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardReporteIngresoSalidaComponent);
      /***/
    },

    /***/
    "pshJ":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function pshJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isFunction(x) {
        return typeof x === 'function';
      }

      exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

      /***/
    },

    /***/
    "s7HC":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s7HC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
      /***/
    },

    /***/
    "tkTM":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-reporte-ingreso-salida/pdf-reporte-ingreso-salida.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: PdfReporteIngresoSalidaComponent */

    /***/
    function tkTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfReporteIngresoSalidaComponent", function () {
        return PdfReporteIngresoSalidaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-reporte-ingreso-salida.component.html */
      "s7HC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;

      var PdfReporteIngresoSalidaComponent = /*#__PURE__*/function () {
        function PdfReporteIngresoSalidaComponent(datePipe) {
          _classCallCheck(this, PdfReporteIngresoSalidaComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfReporteIngresoSalidaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var totalGastos = 0;
            var totalIngresos = 0;
            var bodyMovimiento = [[{
              text: "Fecha de movimiento",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Ingreso/Gasto",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Concepto",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Cantidad en Bol.",
              style: "tableHeader",
              alignment: "center"
            }]];

            var _iterator4 = _createForOfIteratorHelper(this.movimientos),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var movimiento = _step4.value;

                if (movimiento.tipo) {
                  totalIngresos += +movimiento.cantidad;
                } else {
                  totalGastos += +movimiento.cantidad;
                }

                bodyMovimiento.push([{
                  text: "".concat(this.datePipe.transform(movimiento.createdAt, 'medium')),
                  alignment: "center"
                }, {
                  text: "".concat(movimiento.tipo ? 'INGRESO' : 'SALIDA'),
                  alignment: "center"
                }, {
                  text: "".concat(movimiento.concepto),
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(movimiento.cantidad),
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var reporte = {
              // a string or { width: number, height: number }
              pageSize: "LETTER",
              // by default we use portrait, you can change it to landscape if you wish
              pageOrientation: "landscape",
              // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
              pageMargins: [20, 15, 15, 20],
              content: [//FECHA Y HORA ACTUAL AL IMPRIMIR
              {
                text: "".concat(this.datePipe.transform(Date.now(), 'medium')),
                fontSize: 8
              }, {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 10, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_3__["logoCaysool"]
                }, [// REPORTE DE PRESTAMOS
                {
                  text: 'Reporte de "Ingresos y Salidas"',
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, "\n", {
                columns: [{
                  width: 250,
                  text: "Ingresos y salidas Desde ".concat(this.datePipe.transform(this.from, 'mediumDate')),
                  bold: false,
                  fontSize: 12
                }, {
                  width: "*",
                  text: "Hasta ".concat(this.datePipe.transform(this.to, 'mediumDate'))
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [60, 100, "*", "*"],
                  headerRows: 1,
                  body: bodyMovimiento
                },
                layout: "lightHorizontalLines"
              }, {
                style: "tableExample",
                table: {
                  widths: [150, 100, 30],
                  headerRows: 1,
                  body: [[{
                    text: "Total ingresos",
                    fontSize: 13,
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalIngresos),
                    alignment: "right",
                    fontSize: 13
                  }, {
                    text: "Bol.",
                    alignment: "left",
                    fontSize: 16
                  }], [{
                    text: "Total gastos",
                    fontSize: 13,
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalGastos),
                    alignment: "right",
                    fontSize: 13
                  }, {
                    text: "Bol.",
                    alignment: "left",
                    fontSize: 16
                  }]]
                },
                layout: "noBorders"
              }],
              styles: {
                tableHeader: {
                  bold: true,
                  fontSize: 10,
                  color: "black"
                },
                tableExample: {
                  margin: [0, 10, 0, 5]
                }
              }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(reporte).open();
          }
        }]);

        return PdfReporteIngresoSalidaComponent;
      }();

      PdfReporteIngresoSalidaComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
        }];
      };

      PdfReporteIngresoSalidaComponent.propDecorators = {
        movimientos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PdfReporteIngresoSalidaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pdf-reporte-ingreso-salida',
        template: _raw_loader_pdf_reporte_ingreso_salida_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfReporteIngresoSalidaComponent);
      /***/
    },

    /***/
    "ymRX":
    /*!***************************************************************!*\
      !*** ./src/app/views/admin/reporte/reporte-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ReporteRoutingModule */

    /***/
    function ymRX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteRoutingModule", function () {
        return ReporteRoutingModule;
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


      var _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/cards/card-reporte-impresion/card-reporte-impresion.component */
      "SFmO");
      /* harmony import */


      var _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/cards/card-reporte-ingreso-salida/card-reporte-ingreso-salida.component */
      "pGE7");
      /* harmony import */


      var _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cards/card-reporte-inventario/card-reporte-inventario.component */
      "PuVi");
      /* harmony import */


      var _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/cards/card-reporte-list/card-reporte-list.component */
      "Nniu");
      /* harmony import */


      var _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/cards/card-reporte-pago/card-reporte-pago.component */
      "Zx+K");
      /* harmony import */


      var _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/cards/card-reporte-prestamo/card-reporte-prestamo.component */
      "ja2y");
      /* harmony import */


      var _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/cards/card-reporte-transaccion/card-reporte-transaccion.component */
      "1gHi");
      /* harmony import */


      var _reporte_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./reporte.component */
      "MRQM");

      var routes = [{
        path: '',
        component: _reporte_component__WEBPACK_IMPORTED_MODULE_10__["ReporteComponent"],
        children: [{
          path: '',
          component: _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_6__["CardReporteListComponent"]
        }, {
          path: 'prestamos/:prestamoEstado',
          component: _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_8__["CardReportePrestamoComponent"]
        }, {
          path: 'pagos',
          component: _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__["CardReportePagoComponent"]
        }, {
          path: 'impresiones',
          component: _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_3__["CardReporteImpresionComponent"]
        }, {
          path: 'inventario',
          component: _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_5__["CardReporteInventarioComponent"]
        }, {
          path: 'compra-venta-dolar',
          component: _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__["CardReporteTransaccionComponent"]
        }, {
          path: 'ingreso-salida',
          component: _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_4__["CardReporteIngresoSalidaComponent"]
        }]
      }];

      var ReporteRoutingModule = /*#__PURE__*/_createClass(function ReporteRoutingModule() {
        _classCallCheck(this, ReporteRoutingModule);
      });

      ReporteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReporteRoutingModule);
      /***/
    },

    /***/
    "zB/H":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscription.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function zBH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isArray_1 = __webpack_require__(
      /*! ./util/isArray */
      "mbIT");

      var isObject_1 = __webpack_require__(
      /*! ./util/isObject */
      "GMZp");

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var UnsubscriptionError_1 = __webpack_require__(
      /*! ./util/UnsubscriptionError */
      "LBXl");

      var Subscription = function () {
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

          var _a = this,
              _parentOrParents = _a._parentOrParents,
              _ctorUnsubscribe = _a._ctorUnsubscribe,
              _unsubscribe = _a._unsubscribe,
              _subscriptions = _a._subscriptions;

          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
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
            } catch (e) {
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
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
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
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _parentOrParents = subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
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

        Subscription.EMPTY = function (empty) {
          empty.closed = true;
          return empty;
        }(new Subscription());

        return Subscription;
      }();

      exports.Subscription = Subscription;

      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
          return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
      } //# sourceMappingURL=Subscription.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=reporte-reporte-module-es5.js.map