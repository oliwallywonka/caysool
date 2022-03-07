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
          value: function getPrestamos(_ref3) {
            var _ref3$clientCi = _ref3.clientCi,
                clientCi = _ref3$clientCi === void 0 ? '' : _ref3$clientCi,
                _ref3$estadoPrestamo = _ref3.estadoPrestamo,
                estadoPrestamo = _ref3$estadoPrestamo === void 0 ? '' : _ref3$estadoPrestamo,
                _ref3$page = _ref3.page,
                page = _ref3$page === void 0 ? 1 : _ref3$page,
                _ref3$force = _ref3.force,
                force = _ref3$force === void 0 ? false : _ref3$force;
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
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map