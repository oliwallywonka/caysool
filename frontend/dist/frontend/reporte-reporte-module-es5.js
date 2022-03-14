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


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Inventario\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-inventario [inventario]=\"inventarios\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\" ></app-pdf-reporte-inventario>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de compra\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de venta\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Prenda\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Costo de compra\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Costo de venta\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Diferencia\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"inventarios\" >\n                            <tr\n                              *ngFor=\"let inventario of inventarios\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{inventario.fechaCompra | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{inventario.fechaVenta | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{inventario.descripcion}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{inventario.costoCompra === '0.0' ? inventario.costoPrestamo : inventario.costoCompra}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{inventario.precioVenta}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{(+inventario.precioVenta - +inventario.costoCompra - +inventario.costoPrestamo).toFixed(1)}}\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
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
    "848s":
    /*!************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-general/pdf-prestamo-general.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: PdfPrestamoGeneralComponent */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfPrestamoGeneralComponent", function () {
        return PdfPrestamoGeneralComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_prestamo_general_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-prestamo-general.component.html */
      "DzLx");
      /* harmony import */


      var _pdf_prestamo_general_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pdf-prestamo-general.component.css */
      "8afg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");
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

      var PdfPrestamoGeneralComponent = /*#__PURE__*/function () {
        function PdfPrestamoGeneralComponent(datePipe) {
          _classCallCheck(this, PdfPrestamoGeneralComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfPrestamoGeneralComponent, [{
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
              text: "Cargos Extra(piso)/Reimpresiones",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Comision Administrativa",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Interes cobrados",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Pagos cobrados",
              style: "tableHeader",
              alignment: "center"
            }]];

            var _iterator = _createForOfIteratorHelper(this.prestamos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var prestamo = _step.value;
                totalInventario += +prestamo.inventario.length;
                totalCostoPrestamos += +prestamo.costoPrestamo;
                totalImpresiones += +prestamo.costoImpresion + +prestamo.costoAdministracion;
                totalcargosExtra += +prestamo.costoPiso;
                totalInteres += +prestamo.cobroInteres;
                totalPagos += +prestamo.costoCancelado - +prestamo.cobroInteres;
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
                    return i.descripcion + ' ';
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
                  text: "Bol. ".concat(prestamo.cobroInteres),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat((+prestamo.costoCancelado - +prestamo.cobroInteres).toFixed(1)),
                  fontSize: 10,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
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
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_5__["logoCaysool"]
                }, [// REPORTE DE PRESTAMOS
                {
                  text: "Reporte de \"PRESTAMOS GENERAL\"",
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
                  text: "Prestamos Desde ".concat(this.datePipe.transform(this.from, "mediumDate"))
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
                    text: "".concat(totalInventario, " unidades"),
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
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(reporte).open();
          }
        }]);

        return PdfPrestamoGeneralComponent;
      }();

      PdfPrestamoGeneralComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      PdfPrestamoGeneralComponent.propDecorators = {
        prestamos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      PdfPrestamoGeneralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-pdf-prestamo-general",
        template: _raw_loader_pdf_prestamo_general_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pdf_prestamo_general_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PdfPrestamoGeneralComponent);
      /***/
    },

    /***/
    "8afg":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-general/pdf-prestamo-general.component.css ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function afg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZGYtcHJlc3RhbW8tZ2VuZXJhbC5jb21wb25lbnQuY3NzIn0= */";
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

      var PdfReportePagoComponent = /*#__PURE__*/function () {
        function PdfReportePagoComponent(datePipe) {
          _classCallCheck(this, PdfReportePagoComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfReportePagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var totalCantidadPagos = 0;
            var totalCostoReimpresiones = 0;
            var totalCostoPagos = 0;
            var totalCostoAmortiguado = 0;
            var totalComisionAdministrativa = 0;
            var totalCargosExtra = 0;
            var totalInteresesCobrados = 0;
            var totalCobrado = 0;
            var bodyPagos = [[{
              text: "Fecha de pago",
              style: "tableHeader"
            }, {
              text: "Tipo de pago",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Reimpreciones",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Pago (cancelacion)",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Amortiguado",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Comision Administrativa",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Cargos extra",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Interes cobrado",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Total cobrado",
              style: "tableHeader",
              alignment: "center"
            }]];
            totalCantidadPagos = this.pagos.length + this.impresiones.length;

            var _iterator2 = _createForOfIteratorHelper(this.pagos),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var pago = _step2.value;
                totalCostoPagos += +pago.costoPago + +pago.costoInteres;
                totalCostoAmortiguado += +pago.costoPago;
                totalComisionAdministrativa += +pago.costoAdministracion;
                totalCargosExtra += +pago.costoPiso;
                totalInteresesCobrados += +pago.costoInteres;
                totalCobrado += +pago.costoTotal;
                bodyPagos.push([{
                  text: "".concat(this.datePipe.transform(pago.createdAt, 'mediumDate')),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "".concat(pago.tipoPago === 'AMORTIZACION' ? 'AMORTIZACIÓN' : pago.tipoPago === 'LIQUIDACION' ? 'LIQUIDACIÓN' : pago.tipoPago),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. 0.0",
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat((+pago.costoPago + +pago.costoInteres).toFixed(1)),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(pago.costoPago),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(pago.costoAdministracion),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(pago.costoPiso),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(pago.costoInteres),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(pago.costoTotal),
                  fontSize: 9,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(this.impresiones),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var impresion = _step3.value;
                totalCostoReimpresiones += +impresion.costoImpresion;
                totalCobrado += +impresion.costoImpresion;
                bodyPagos.push([{
                  text: "".concat(this.datePipe.transform(impresion.createdAt, 'mediumDate')),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "".concat(impresion.tipoDocumento === 'PAGO' ? 'REIMPRESIÓN' : 'REIMPRESIÓN'),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(impresion.costoImpresion),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. 0.0",
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. 0.0",
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. 0.0",
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. 0.0",
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. 0.0",
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(impresion.costoImpresion),
                  fontSize: 9,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
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
                  text: 'Reporte de "Resumen pagos por pagos"',
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
                  text: "Pagos por pagos Desde ".concat(this.datePipe.transform(this.from, "mediumDate"))
                }, {
                  width: "*",
                  text: "Hasta ".concat(this.datePipe.transform(this.to, "mediumDate"))
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [70, 60, 100, 90, 60, 80, 55, 55, 55],
                  headerRows: 1,
                  body: bodyPagos
                },
                layout: "lightHorizontalLines"
              }, //EN TIPO DE PAGO CONTAR LAS FILAS EN EL TOTAL
              {
                style: "tableExample",
                table: {
                  widths: [70, 80, 100, 110, 60, 80, 70, 60, 60],
                  headerRows: 1,
                  body: [[{
                    text: "Total",
                    alignment: "center",
                    fontSize: 11,
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalCantidadPagos),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoReimpresiones.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoPagos.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoAmortiguado.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalComisionAdministrativa.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCargosExtra.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalInteresesCobrados.toFixed(1)),
                    fontSize: 11,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCobrado.toFixed(1)),
                    fontSize: 11,
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

        return PdfReportePagoComponent;
      }();

      PdfReportePagoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfReportePagoComponent.propDecorators = {
        pagos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        impresiones: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PdfReportePagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
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
      /* harmony import */


      var src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/helpers/base64Images */
      "5Y+O");

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

            var _iterator4 = _createForOfIteratorHelper(this.prestamos),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var prestamo = _step4.value;
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
              _iterator4.e(err);
            } finally {
              _iterator4.f();
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
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_6__["logoCaysool"]
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
    "DUqt":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-estado/pdf-prestamo-estado.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PdfPrestamoEstadoComponent */

    /***/
    function DUqt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfPrestamoEstadoComponent", function () {
        return PdfPrestamoEstadoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pdf_prestamo_estado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pdf-prestamo-estado.component.html */
      "av7v");
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

      var PdfPrestamoEstadoComponent = /*#__PURE__*/function () {
        function PdfPrestamoEstadoComponent(datePipe) {
          _classCallCheck(this, PdfPrestamoEstadoComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfPrestamoEstadoComponent, [{
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
              text: "Cargos Extra(piso)/Reimpresiones",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Comision Administrativa",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Interes cobrados",
              style: "tableHeader",
              alignment: "center"
            }, {
              text: "Pagos cobrados",
              style: "tableHeader",
              alignment: "center"
            }]];

            var _iterator5 = _createForOfIteratorHelper(this.prestamos),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var prestamo = _step5.value;
                totalInventario += +prestamo.inventario.length;
                totalCostoPrestamos += +prestamo.costoPrestamo;
                totalImpresiones += +prestamo.costoImpresion + +prestamo.costoAdministracion;
                totalcargosExtra += +prestamo.costoPiso;
                totalInteres += +prestamo.cobroInteres;
                totalPagos += +prestamo.costoCancelado - +prestamo.cobroInteres;
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
                    return i.descripcion + ' ';
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
                  text: "Bol. ".concat(prestamo.cobroInteres),
                  alignment: "center",
                  fontSize: 10
                }, {
                  text: "Bol. ".concat((+prestamo.costoCancelado - +prestamo.cobroInteres).toFixed(1)),
                  fontSize: 10,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
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
                  text: "Prestamos ".concat(this.prestamos[0].estado, "S Desde ").concat(this.datePipe.transform(this.from, "mediumDate"))
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
                    text: "".concat(totalInventario, " unidades"),
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

        return PdfPrestamoEstadoComponent;
      }();

      PdfPrestamoEstadoComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfPrestamoEstadoComponent.propDecorators = {
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
      PdfPrestamoEstadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-pdf-prestamo-estado",
        template: _raw_loader_pdf_prestamo_estado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PdfPrestamoEstadoComponent);
      /***/
    },

    /***/
    "DzLx":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-general/pdf-prestamo-general.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DzLx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir 2\n</button>\n";
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

            var _iterator6 = _createForOfIteratorHelper(this.transacciones),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var transaccion = _step6.value;

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
              _iterator6.e(err);
            } finally {
              _iterator6.f();
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


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
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

      var CardReporteInventarioComponent = /*#__PURE__*/function () {
        function CardReporteInventarioComponent(reporteService, location, fb) {
          _classCallCheck(this, CardReporteInventarioComponent);

          this.reporteService = reporteService;
          this.location = location;
          this.fb = fb;
          this.loading = false;
          this.inventarios = [];
          this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10)],
            to: [new Date().toISOString().substring(0, 10)]
          });
        }

        _createClass(CardReporteInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
            this.getInventarios();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getInventarios",
          value: function getInventarios() {
            var _this3 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getInventarioByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (inventarios) {
              if (inventarios) {
                _this3.inventarios = inventarios;
              }

              _this3.loading = false;
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
            this.getInventarios();
          }
        }]);

        return CardReporteInventarioComponent;
      }();

      CardReporteInventarioComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_4__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["RxFormBuilder"]
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


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Pagos\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <app-pdf-reporte-pago\n                  [pagos]=\"pagos\"\n                  [impresiones]=\"impresiones\"\n                  [from]=\"reporteForm.value.from\"\n                  [to]=\"reporteForm.value.to\">\n                </app-pdf-reporte-pago>\n\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Pago\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Tipo de Pago\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Reimpresiones\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Pago (cancelación)\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Amortiguado\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Comisión Administrativa\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cargos extra\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cargos Interes Cobrado\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Total cobrado\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"pagos\" >\n                            <tr\n                              *ngFor=\"let pago of pagos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{pago.createdAt | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{ pago.tipoPago === 'AMORTIZACION' ? 'AMORTIZACIÓN' : pago.tipoPago === 'LIQUIDACION' ? 'LIQUIDACIÓN' : pago.tipoPago }}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. 0.0\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{(+pago.costoPago + +pago.costoInteres).toFixed(1)}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{pago.costoPago}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{pago.costoAdministracion}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{pago.costoPiso}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{pago.costoInteres}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{pago.costoTotal}}\n                              </td>\n                            </tr>\n\n\n                        </tbody>\n                        <tbody *ngIf=\"pagos\" >\n                          <tr\n                            *ngFor=\"let impresion of impresiones\"\n                            class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                            >\n                              <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                {{impresion.createdAt | date:'medium'}}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                REIMPRESIÓN\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{ impresion.costoImpresion }}\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. 0.0\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. 0.0\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. 0.0\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                Bol. 0.0\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                Bol. 0.0\n                              </td>\n                              <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                Bol. {{ impresion.costoImpresion }}\n                            </td>\n                          </tr>\n                      </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
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
            var _this4 = this;

            this.sub.add(this.reporteService.getImpresionesByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (impresiones) {
              if (impresiones) {
                _this4.impresiones = impresiones;
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


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
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

      var CardReportePagoComponent = /*#__PURE__*/function () {
        function CardReportePagoComponent(reporteService, location, fb) {
          _classCallCheck(this, CardReportePagoComponent);

          this.reporteService = reporteService;
          this.location = location;
          this.fb = fb;
          this.loading = false;
          this.pagos = [];
          this.impresiones = [];
          this.reporteForm = this.fb.group({
            from: [new Date().toISOString().substring(0, 10)],
            to: [new Date().toISOString().substring(0, 10)]
          });
        }

        _createClass(CardReportePagoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sub = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
            this.getPagos();
            this.getImpresiones();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "getImpresiones",
          value: function getImpresiones() {
            var _this5 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getImpresionesByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (impresiones) {
              if (impresiones) {
                _this5.impresiones = impresiones;
              }

              _this5.loading = false;
            }));
          }
        }, {
          key: "getPagos",
          value: function getPagos() {
            var _this6 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getPagosByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (pagos) {
              if (pagos) {
                _this6.pagos = pagos;
              }

              _this6.loading = false;
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
            this.getPagos();
          }
        }]);

        return CardReportePagoComponent;
      }();

      CardReportePagoComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_reporte_service__WEBPACK_IMPORTED_MODULE_5__["ReporteService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["RxFormBuilder"]
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
    "av7v":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/reporte/components/pdfs/pdf-prestamo-estado/pdf-prestamo-estado.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function av7v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\n  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n  type=\"button\"\n  (click)=\"exportToPdf()\"\n>\n  <i class=\"fas fa-pdf\"></i> Imprimir\n</button>\n";
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

      var PdfReporteInventarioComponent = /*#__PURE__*/function () {
        function PdfReporteInventarioComponent(datePipe) {
          _classCallCheck(this, PdfReporteInventarioComponent);

          this.datePipe = datePipe;
        }

        _createClass(PdfReporteInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportToPdf",
          value: function exportToPdf() {
            var totalInventario = 0;
            var totalCostoCompras = 0;
            var totalCostoVenta = 0;
            var totalDiferencia = 0;
            var bodyInventario = [[{
              text: "Fecha de compra",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Fecha de venta",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Prenda",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Costo de compra",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Costo de venta",
              alignment: "center",
              style: "tableHeader"
            }, {
              text: "Diferencia",
              alignment: "center",
              style: "tableHeader"
            }]];

            var _iterator7 = _createForOfIteratorHelper(this.inventario),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var i = _step7.value;
                totalInventario = this.inventario.length;
                totalCostoCompras += +i.costoCompra + +i.costoPrestamo;
                totalCostoVenta += +i.precioVenta;
                totalDiferencia += +i.precioVenta - (+i.costoCompra + +i.costoCompra);
                bodyInventario.push([{
                  text: "".concat(this.datePipe.transform(i.fechaCompra, 'mediumDate')),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "".concat(this.datePipe.transform(i.fechaVenta, 'mediumDate')),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "".concat(i.descripcion),
                  alignment: "center",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(+i.costoCompra === 0.0 ? i.costoPrestamo : i.costoCompra),
                  alignment: "right",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat(i.precioVenta),
                  alignment: "right",
                  fontSize: 9
                }, {
                  text: "Bol. ".concat((+i.precioVenta - (+i.costoCompra + +i.costoCompra)).toFixed(1)),
                  alignment: "right",
                  fontSize: 9
                }]);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
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
                text: "".concat(this.datePipe.transform(Date.now())),
                fontSize: 8
              }, {
                columns: [{
                  width: 90,
                  height: 40,
                  fontSize: 9,
                  margin: [22, 10, 0, 0],
                  image: src_app_helpers_base64Images__WEBPACK_IMPORTED_MODULE_4__["logoCaysool"]
                }, [// REPORTE DE VENTAS
                {
                  text: 'Reporte de "Ventas"',
                  color: "#333333",
                  width: 800,
                  fontSize: 20,
                  bold: true,
                  alignment: "center",
                  margin: [0, 0, 0, 0]
                }]]
              }, "\n", {
                columns: [{
                  width: 10,
                  text: "",
                  bold: true,
                  fontSize: 14
                }, {
                  columns: [{
                    width: 250,
                    text: "Ventas desde ".concat(this.datePipe.transform(this.from, "mediumDate")),
                    bold: false,
                    fontSize: 12
                  }, {
                    width: "*",
                    text: "Hasta ".concat(this.datePipe.transform(this.to, "mediumDate"))
                  }]
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [70, 70, 210, 100, 100, 100],
                  headerRows: 1,
                  body: bodyInventario
                },
                layout: "lightHorizontalLines"
              }, //suma total ventas y tambien de la diferencia COSTO DE VENTA, COSTO DE COMPRA
              {
                table: {
                  widths: [70, 70, 210, 100, 100, 100],
                  headerRows: 1,
                  body: [[{
                    text: "Total",
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "",
                    fontSize: 10,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalInventario, " U."),
                    fontSize: 10,
                    alignment: "center",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoCompras.toFixed(1)),
                    fontSize: 10,
                    alignment: "right",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalCostoVenta.toFixed(1)),
                    alignment: "right",
                    style: "tableHeader"
                  }, {
                    text: "Bol. ".concat(totalDiferencia.toFixed(1)),
                    fontSize: 10,
                    alignment: "right",
                    style: "tableHeader"
                  }]]
                },
                // layout: 'noBorders'
                layout: "lightHorizontalLines"
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

        return PdfReporteInventarioComponent;
      }();

      PdfReporteInventarioComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      PdfReporteInventarioComponent.propDecorators = {
        inventario: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        to: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PdfReporteInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-pdf-reporte-inventario",
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


      __webpack_exports__["default"] = "<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        <button\n            (click)=\"goToBackPage()\"\n            class=\"mx-4 bg-white text-gray-600 active:text-gray-800 font-bold text-xl px-4 py-2 outline-none focus:outline-none mr-1 mb-1\"\n            type=\"submit\"\n          >\n          <i class=\"fas fa-arrow-left\"></i>\n        </button>\n        Prestamos {{ !estado? 'GENERAL': estado }}\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <form\n            autocomplete=\"off\"\n            [formGroup]=\"reporteForm\"\n            (ngSubmit)=\"save()\"\n          >\n            <div class=\"my-4 relative p-6 flex flex-wrap\">\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"DESDE\"\n                  inputType=\"date\"\n                  inputFormName=\"from\"\n                  formControlName=\"from\"\n                  [value]=\"reporteForm.value.from\">\n                </app-input>\n              </div>\n\n              <div class=\"w-full lg:w-6/12 px-4 mb-2\">\n                <app-input\n                  [inputForm]=\"reporteForm\"\n                  inputLabel=\"HASTA\"\n                  inputType=\"date\"\n                  inputFormName=\"to\"\n                  formControlName=\"to\"\n                  [value]=\"reporteForm.value.to\">\n                </app-input>\n              </div>\n              <div class=\"flex items-center justify-end \">\n                <button\n                  class=\"mx-4 bg-sky-700 text-white active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"submit\"\n                >\n                  <i class=\"fas fa-spinner\" [ngClass]=\"loading? 'animate-spin': 'hidden'\"></i> Guardar cambios\n                </button>\n                <!--<app-pdf-reporte-prestamo-activo *ngIf=\"estado==='ACTIVO'\" [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-reporte-prestamo-activo>-->\n                <app-pdf-prestamo-estado *ngIf=\"estado==='ACTIVO'||estado==='CANCELADO'||estado==='VENCIDO'\" [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-prestamo-estado>\n                <app-pdf-prestamo-general *ngIf=\"!estado\" [prestamos]=\"prestamos\" [from]=\"reporteForm.value.from\" [to]=\"reporteForm.value.to\"></app-pdf-prestamo-general>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"flex flex-col\">\n        <div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\">\n            <div class=\"inline-block py-2 min-w-full sm:px-6 lg:px-8\">\n                <div class=\"overflow-hidden shadow-md sm:rounded-lg\">\n                    <table class=\"min-w-full\">\n                        <thead class=\"bg-gray-50 dark:bg-gray-700\">\n                            <tr>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Fecha de Vencimiento\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Cliente\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Monto de Prestamo\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Interés cobrado\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Total\n                                </th>\n                                <th scope=\"col\" class=\"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400\">\n                                  Por Cobrar\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"prestamos\" >\n                            <tr\n                              *ngFor=\"let prestamo of prestamos\"\n                              class=\"bg-white border-b cursor-pointer m-2 transform hover:-translate-y-1 ease-linear transition-all duration-150 \"\n                              >\n                                <td class=\"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n                                  {{prestamo.fechaInicio | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  {{prestamo.fechaFinal | date:'medium'}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    {{prestamo.client.name}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoPrestamo}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.cobroInteres}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                    Bol. {{prestamo.costoTotal}}\n                                </td>\n                                <td class=\"py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400\">\n                                  Bol. {{(+prestamo.costoTotal - +prestamo.costoCancelado).toFixed(1)}}\n                              </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
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


      var _components_pdfs_pdf_prestamo_estado_pdf_prestamo_estado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/pdfs/pdf-prestamo-estado/pdf-prestamo-estado.component */
      "DUqt");
      /* harmony import */


      var _components_pdfs_pdf_prestamo_general_pdf_prestamo_general_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/pdfs/pdf-prestamo-general/pdf-prestamo-general.component */
      "848s");

      var ReporteModule = /*#__PURE__*/_createClass(function ReporteModule() {
        _classCallCheck(this, ReporteModule);
      });

      ReporteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reporte_component__WEBPACK_IMPORTED_MODULE_3__["ReporteComponent"], _components_cards_card_reporte_list_card_reporte_list_component__WEBPACK_IMPORTED_MODULE_4__["CardReporteListComponent"], _components_cards_card_reporte_prestamo_card_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_5__["CardReportePrestamoComponent"], _components_cards_card_reporte_inventario_card_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_6__["CardReporteInventarioComponent"], _components_cards_card_reporte_pago_card_reporte_pago_component__WEBPACK_IMPORTED_MODULE_7__["CardReportePagoComponent"], _components_cards_card_reporte_impresion_card_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_8__["CardReporteImpresionComponent"], _components_cards_card_reporte_transaccion_card_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_9__["CardReporteTransaccionComponent"], _components_pdfs_pdf_reporte_impresion_pdf_reporte_impresion_component__WEBPACK_IMPORTED_MODULE_10__["PdfReporteImpresionComponent"], _components_pdfs_pdf_reporte_pago_pdf_reporte_pago_component__WEBPACK_IMPORTED_MODULE_11__["PdfReportePagoComponent"], _components_pdfs_pdf_reporte_inventario_pdf_reporte_inventario_component__WEBPACK_IMPORTED_MODULE_12__["PdfReporteInventarioComponent"], _components_pdfs_pdf_reporte_transaccion_pdf_reporte_transaccion_component__WEBPACK_IMPORTED_MODULE_13__["PdfReporteTransaccionComponent"], _components_pdfs_pdf_reporte_prestamo_pdf_reporte_prestamo_component__WEBPACK_IMPORTED_MODULE_14__["PdfReportePrestamoComponent"], _components_cards_card_reporte_ingreso_salida_card_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_16__["CardReporteIngresoSalidaComponent"], _components_pdfs_pdf_reporte_ingreso_salida_pdf_reporte_ingreso_salida_component__WEBPACK_IMPORTED_MODULE_17__["PdfReporteIngresoSalidaComponent"], _components_pdfs_pdf_prestamo_estado_pdf_prestamo_estado_component__WEBPACK_IMPORTED_MODULE_18__["PdfPrestamoEstadoComponent"], _components_pdfs_pdf_prestamo_general_pdf_prestamo_general_component__WEBPACK_IMPORTED_MODULE_19__["PdfPrestamoGeneralComponent"]],
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


      __webpack_exports__["default"] = "\n<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"p-4 w-full \">\n    <div class=\"items-center mb-4\">\n      <h3 class=\"text-xl font-bold leading-none text-gray-900 dark:text-white\">\n        Reportes\n      </h3>\n      <div class=\"flex items-center justify-start pt-2\">\n\n      </div>\n      <div class=\"w-full \">\n        <div class=\"flex flex-col pt-4 items-baseline w-full\">\n          <div class=\"w-full my-2 relative p-2 flex flex-col\">\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Prestamos\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('pagos')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Pagos\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', '')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos (todos)\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'CANCELADO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos cancelados\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPageEstado('prestamos', 'ACTIVO')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Prestamos vigentes\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n              type=\"button\"\n              class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n              (click)=\"goToAnotherPageEstado('prestamos', 'VENCIDO')\">\n              <div class=\"flex flex-col\">\n                <p class=\"p-3\">\n                  Prestamos vencidos\n                </p>\n                <i class=\"text-4xl fas fa-calendar\"></i>\n              </div>\n            </button>\n            </div>\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Compras y ventas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('compra-venta-dolar')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Compra y venta de dolar\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('inventario')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ventas inventario\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n\n            <h3 class=\"text-xl font-bold leading-none text-gray-600 dark:text-white\">\n              Ingresos y Salidas\n            </h3>\n            <div class=\"relative flex flex-wrap m-3\">\n\n              <button\n                type=\"button\"\n                class=\"w-2/12 mx-2 bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                (click)=\"goToAnotherPage('ingreso-salida')\">\n                <div class=\"flex flex-col\">\n                  <p class=\"p-3\">\n                    Ingresos y salidas\n                  </p>\n                  <i class=\"text-4xl fas fa-calendar\"></i>\n                </div>\n              </button>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
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
            var _this7 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getPrestamosByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to,
              estado: this.estado
            }).subscribe(function (prestamos) {
              if (prestamos) {
                _this7.prestamos = prestamos;
              }

              _this7.loading = false;
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
            var _this8 = this;

            this.loading = true;
            this.sub.add(this.reporteService.getIngresoSalidaByDate({
              from: this.reporteForm.value.from,
              to: this.reporteForm.value.to
            }).subscribe(function (movimientos) {
              if (movimientos) {
                _this8.movimientos = movimientos;
              }

              _this8.loading = false;
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

            var _iterator8 = _createForOfIteratorHelper(this.movimientos),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var movimiento = _step8.value;

                if (movimiento.tipo) {
                  totalIngresos += +movimiento.cantidad;
                } else {
                  totalGastos += +movimiento.cantidad;
                }

                bodyMovimiento.push([{
                  text: "".concat(this.datePipe.transform(movimiento.createdAt, 'medium')),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "".concat(movimiento ? 'INGRESO' : 'GASTO'),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "".concat(movimiento.concepto),
                  fontSize: 9,
                  alignment: "center"
                }, {
                  text: "Bol. ".concat(movimiento.cantidad),
                  fontSize: 9,
                  alignment: "center"
                }]);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
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
                text: "".concat(this.datePipe.transform(Date.now(), "medium")),
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
                  text: "Apertura y cierre ".concat(this.datePipe.transform(this.from, "mediumDate")),
                  bold: false,
                  fontSize: 12
                }, {
                  width: "*",
                  text: "Hasta ".concat(this.datePipe.transform(this.to, "mediumDate"))
                }]
              }, {
                style: "tableExample",
                table: {
                  widths: [70, 100, 280, 250],
                  headerRows: 1,
                  body: bodyMovimiento
                },
                layout: "lightHorizontalLines"
              }, {
                style: "tableExample",
                table: {
                  widths: [150, 200, 30],
                  headerRows: 1,
                  body: [[{
                    text: "Total ingresos",
                    fontSize: 11,
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalIngresos.toFixed(1)),
                    alignment: "right",
                    fontSize: 11
                  }, {
                    text: "Bol.",
                    alignment: "left",
                    fontSize: 10
                  }], [{
                    text: "Total gastos",
                    fontSize: 11,
                    style: "tableHeader"
                  }, {
                    text: "".concat(totalGastos.toFixed(1)),
                    alignment: "right",
                    fontSize: 11
                  }, {
                    text: "Bol.",
                    alignment: "left",
                    fontSize: 10
                  }], [{
                    text: "Total en caja",
                    fontSize: 11,
                    style: "tableHeader"
                  }, {
                    text: "".concat((totalIngresos - totalGastos).toFixed(1)),
                    alignment: "right",
                    fontSize: 11
                  }, {
                    text: "Bol.",
                    alignment: "left",
                    fontSize: 10
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
        selector: "app-pdf-reporte-ingreso-salida",
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