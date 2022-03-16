(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "9bkF":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/inventario.service.ts ***!
      \*****************************************************/

    /*! exports provided: InventarioService */

    /***/
    function bkF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventarioService", function () {
        return InventarioService;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InventarioService = /*#__PURE__*/function () {
        function InventarioService(http) {
          _classCallCheck(this, InventarioService);

          this.http = http;
          this.inventario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.response2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(InventarioService, [{
          key: "getInventario",
          value: function getInventario(_ref) {
            var _ref$clientCi = _ref.clientCi,
                clientCi = _ref$clientCi === void 0 ? '' : _ref$clientCi,
                _ref$page = _ref.page,
                page = _ref$page === void 0 ? 1 : _ref$page,
                _ref$force = _ref.force,
                force = _ref$force === void 0 ? false : _ref$force,
                _ref$estadoInv = _ref.estadoInv,
                estadoInv = _ref$estadoInv === void 0 ? '' : _ref$estadoInv;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');

            if (force || !this.cacheResponse$) {
              return this.cacheResponse$ = this.http.get("".concat(this.baseUrl, "/inventario?clientCi=").concat(clientCi, "&estadoInv=").concat(estadoInv, "&page=").concat(page), {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
            }

            return this.cacheResponse$;
          }
        }, {
          key: "getInventarioByEstado",
          value: function getInventarioByEstado(_ref2) {
            var _ref2$page = _ref2.page,
                page = _ref2$page === void 0 ? 1 : _ref2$page,
                _ref2$force = _ref2.force,
                force = _ref2$force === void 0 ? false : _ref2$force,
                _ref2$estadoInv = _ref2.estadoInv,
                estadoInv = _ref2$estadoInv === void 0 ? 'COMPRADO' : _ref2$estadoInv;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');

            if (force || !this.cacheResponse2$) {
              return this.cacheResponse$ = this.http.get("".concat(this.baseUrl, "/inventario/comprado?page=").concat(page, "&estadoInv=").concat(estadoInv), {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
            }

            return this.cacheResponse2$;
          }
        }, {
          key: "getInventarioById",
          value: function getInventarioById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.cacheResponse$ = this.http.get("".concat(this.baseUrl, "/inventario/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "getInventarioByClientId",
          value: function getInventarioByClientId(clientId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.cacheResponse$ = this.http.get("".concat(this.baseUrl, "/inventario/client/").concat(clientId), {
              headers: headers
            });
          }
        }, {
          key: "postInventario",
          value: function postInventario(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.post("".concat(this.baseUrl, "/inventario"), body, {
              headers: headers
            });
          }
        }, {
          key: "patchInventario",
          value: function patchInventario(body, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.patch("".concat(this.baseUrl, "/inventario/").concat(id), body, {
              headers: headers
            });
          }
        }, {
          key: "ventaInventario",
          value: function ventaInventario(body, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.patch("".concat(this.baseUrl, "/inventario/venta/").concat(id), body, {
              headers: headers
            });
          }
        }]);

        return InventarioService;
      }();

      InventarioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      InventarioService.propDecorators = {
        inventario: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        response: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        response2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      InventarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], InventarioService);
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
          value: function getPrestamosByDate(_ref3) {
            var from = _ref3.from,
                to = _ref3.to,
                estado = _ref3.estado;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/prestamo?from=").concat(from, "&to=").concat(to, "&estado=").concat(estado), {
              headers: headers
            });
          }
        }, {
          key: "getPagosByDate",
          value: function getPagosByDate(_ref4) {
            var from = _ref4.from,
                to = _ref4.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/pago?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getImpresionesByDate",
          value: function getImpresionesByDate(_ref5) {
            var from = _ref5.from,
                to = _ref5.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/impresion?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getInventarioByDate",
          value: function getInventarioByDate(_ref6) {
            var from = _ref6.from,
                to = _ref6.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/inventario?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getTransaccionByDate",
          value: function getTransaccionByDate(_ref7) {
            var from = _ref7.from,
                to = _ref7.to;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/reporte/transaccion?from=").concat(from, "&to=").concat(to), {
              headers: headers
            });
          }
        }, {
          key: "getIngresoSalidaByDate",
          value: function getIngresoSalidaByDate(_ref8) {
            var from = _ref8.from,
                to = _ref8.to;
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
    "U31Y":
    /*!***************************************************!*\
      !*** ./src/app/core/services/prestamo.service.ts ***!
      \***************************************************/

    /*! exports provided: PrestamoService */

    /***/
    function U31Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrestamoService", function () {
        return PrestamoService;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PrestamoService = /*#__PURE__*/function () {
        function PrestamoService(http) {
          _classCallCheck(this, PrestamoService);

          this.http = http;
          this.prestamo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.client = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.inventario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        }

        _createClass(PrestamoService, [{
          key: "getPrestamos",
          value: function getPrestamos(_ref9) {
            var _ref9$clientCi = _ref9.clientCi,
                clientCi = _ref9$clientCi === void 0 ? '' : _ref9$clientCi,
                _ref9$estadoPrestamo = _ref9.estadoPrestamo,
                estadoPrestamo = _ref9$estadoPrestamo === void 0 ? '' : _ref9$estadoPrestamo,
                _ref9$page = _ref9.page,
                page = _ref9$page === void 0 ? 1 : _ref9$page,
                _ref9$force = _ref9.force,
                force = _ref9$force === void 0 ? false : _ref9$force;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');

            if (force || !this.cacheResponse$) {
              return this.cacheResponse$ = this.http.get("".concat(this.baseUrl, "/prestamo?clientCi=").concat(clientCi, "&estadoPrestamo=").concat(estadoPrestamo, "&page=").concat(page), {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
            }

            return this.cacheResponse$;
          }
        }, {
          key: "getPrestamoByClientId",
          value: function getPrestamoByClientId(clientId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/prestamo/client/").concat(clientId), {
              headers: headers
            });
          }
        }, {
          key: "getPrestamoById",
          value: function getPrestamoById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.get("".concat(this.baseUrl, "/prestamo/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "postPrestamo",
          value: function postPrestamo(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.post("".concat(this.baseUrl, "/prestamo"), body, {
              headers: headers
            });
          }
        }, {
          key: "patchPrestamo",
          value: function patchPrestamo(body, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', sessionStorage.getItem('token') || '');
            return this.http.patch("".concat(this.baseUrl, "/prestamo/").concat(id), body, {
              headers: headers
            });
          }
        }]);

        return PrestamoService;
      }();

      PrestamoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PrestamoService.propDecorators = {
        prestamo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        client: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        inventario: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        response: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      PrestamoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PrestamoService);
      /***/
    },

    /***/
    "mHh0":
    /*!*******************************************!*\
      !*** ./src/app/helpers/numberToLetter.ts ***!
      \*******************************************/

    /*! exports provided: numeroALetras */

    /***/
    function mHh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numeroALetras", function () {
        return numeroALetras;
      });

      var numeroALetras = function () {
        // Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
        function Unidades(num) {
          switch (num) {
            case 1:
              return 'UN';

            case 2:
              return 'DOS';

            case 3:
              return 'TRES';

            case 4:
              return 'CUATRO';

            case 5:
              return 'CINCO';

            case 6:
              return 'SEIS';

            case 7:
              return 'SIETE';

            case 8:
              return 'OCHO';

            case 9:
              return 'NUEVE';
          }

          return '';
        } //Unidades()


        function Decenas(num) {
          var decena = Math.floor(num / 10);
          var unidad = num - decena * 10;

          switch (decena) {
            case 1:
              switch (unidad) {
                case 0:
                  return 'DIEZ';

                case 1:
                  return 'ONCE';

                case 2:
                  return 'DOCE';

                case 3:
                  return 'TRECE';

                case 4:
                  return 'CATORCE';

                case 5:
                  return 'QUINCE';

                default:
                  return 'DIECI' + Unidades(unidad);
              }

            case 2:
              switch (unidad) {
                case 0:
                  return 'VEINTE';

                default:
                  return 'VEINTI' + Unidades(unidad);
              }

            case 3:
              return DecenasY('TREINTA', unidad);

            case 4:
              return DecenasY('CUARENTA', unidad);

            case 5:
              return DecenasY('CINCUENTA', unidad);

            case 6:
              return DecenasY('SESENTA', unidad);

            case 7:
              return DecenasY('SETENTA', unidad);

            case 8:
              return DecenasY('OCHENTA', unidad);

            case 9:
              return DecenasY('NOVENTA', unidad);

            case 0:
              return Unidades(unidad);
          }
        } //Unidades()


        function DecenasY(strSin, numUnidades) {
          if (numUnidades > 0) return strSin + ' Y ' + Unidades(numUnidades);
          return strSin;
        } //DecenasY()


        function Centenas(num) {
          var centenas = Math.floor(num / 100);
          var decenas = num - centenas * 100;

          switch (centenas) {
            case 1:
              if (decenas > 0) return 'CIENTO ' + Decenas(decenas);
              return 'CIEN';

            case 2:
              return 'DOSCIENTOS ' + Decenas(decenas);

            case 3:
              return 'TRESCIENTOS ' + Decenas(decenas);

            case 4:
              return 'CUATROCIENTOS ' + Decenas(decenas);

            case 5:
              return 'QUINIENTOS ' + Decenas(decenas);

            case 6:
              return 'SEISCIENTOS ' + Decenas(decenas);

            case 7:
              return 'SETECIENTOS ' + Decenas(decenas);

            case 8:
              return 'OCHOCIENTOS ' + Decenas(decenas);

            case 9:
              return 'NOVECIENTOS ' + Decenas(decenas);
          }

          return Decenas(decenas);
        } //Centenas()


        function Seccion(num, divisor, strSingular, strPlural) {
          var cientos = Math.floor(num / divisor);
          var resto = num - cientos * divisor;
          var letras = '';
          if (cientos > 0) if (cientos > 1) letras = Centenas(cientos) + ' ' + strPlural;else letras = strSingular;
          if (resto > 0) letras += '';
          return letras;
        } //Seccion()


        function Miles(num) {
          var divisor = 1000;
          var cientos = Math.floor(num / divisor);
          var resto = num - cientos * divisor;
          var strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
          var strCentenas = Centenas(resto);
          if (strMiles == '') return strCentenas;
          return strMiles + ' ' + strCentenas;
        } //Miles()


        function Millones(num) {
          var divisor = 1000000;
          var cientos = Math.floor(num / divisor);
          var resto = num - cientos * divisor;
          var strMillones = Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
          var strMiles = Miles(resto);
          if (strMillones == '') return strMiles;
          return strMillones + ' ' + strMiles;
        } //Millones()


        return function NumeroALetras(num, currency) {
          currency = currency || {};
          var data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: Math.round(num * 100) - Math.floor(num) * 100,
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS CHILENOS',
            letrasMonedaSingular: currency.singular || 'PESO CHILENO',
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
          };

          if (data.centavos > 0) {
            data.letrasCentavos = 'CON ' + function () {
              if (data.centavos == 1) return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;else return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
            }();
          }

          ;
          if (data.enteros == 0) return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
          if (data.enteros == 1) return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;else return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        };
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map