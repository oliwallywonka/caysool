(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "9bkF":
/*!*****************************************************!*\
  !*** ./src/app/core/services/inventario.service.ts ***!
  \*****************************************************/
/*! exports provided: InventarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioService", function() { return InventarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let InventarioService = class InventarioService {
    constructor(http) {
        this.http = http;
        this.inventario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getInventario({ clientCi = '', page = 1, force = false, estadoInv = '' }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/inventario?clientCi=${clientCi}&estadoInv=${estadoInv}&page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
    getInventarioByEstado({ page = 1, force = false, estadoInv = 'COMPRADO' }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse2$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/inventario/comprado?page=${page}&estadoInv=${estadoInv}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse2$;
    }
    getInventarioById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http.get(`${this.baseUrl}/inventario/${id}`, { headers });
    }
    getInventarioByClientId(clientId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.cacheResponse$ = this.http.get(`${this.baseUrl}/inventario/client/${clientId}`, { headers });
    }
    postInventario(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/inventario`, body, { headers });
    }
    patchInventario(body, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.patch(`${this.baseUrl}/inventario/${id}`, body, { headers });
    }
    ventaInventario(body, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.patch(`${this.baseUrl}/inventario/venta/${id}`, body, { headers });
    }
};
InventarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InventarioService.propDecorators = {
    inventario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
InventarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventarioService);



/***/ }),

/***/ "U31Y":
/*!***************************************************!*\
  !*** ./src/app/core/services/prestamo.service.ts ***!
  \***************************************************/
/*! exports provided: PrestamoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestamoService", function() { return PrestamoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let PrestamoService = class PrestamoService {
    constructor(http) {
        this.http = http;
        this.prestamo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.client = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inventario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    getPrestamos({ clientCi = '', estadoPrestamo = '', page = 1, force = false }) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        if (force || !this.cacheResponse$) {
            return this.cacheResponse$ = this.http
                .get(`${this.baseUrl}/prestamo?clientCi=${clientCi}&estadoPrestamo=${estadoPrestamo}&page=${page}`, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        return this.cacheResponse$;
    }
    getPrestamoByClientId(clientId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/prestamo/client/${clientId}`, { headers });
    }
    getPrestamoById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.get(`${this.baseUrl}/prestamo/${id}`, { headers });
    }
    postPrestamo(body) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.post(`${this.baseUrl}/prestamo`, body, { headers });
    }
    patchPrestamo(body, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-access-token', sessionStorage.getItem('token') || '');
        return this.http.patch(`${this.baseUrl}/prestamo/${id}`, body, { headers });
    }
};
PrestamoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PrestamoService.propDecorators = {
    prestamo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    client: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    inventario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PrestamoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PrestamoService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map