(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~inventario-inventario-module~users-users-module"],{

/***/ "4+Eq":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/ng2-img-max.js ***!
  \*******************************************************************/
/*! exports provided: Ng2ImgMaxService, Ng2ImgMaxModule, ImgMaxSizeService, ImgMaxPXSizeService, ImgExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ng2_img_max_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ng2-img-max.service */ "f6mv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxService", function() { return _src_ng2_img_max_service__WEBPACK_IMPORTED_MODULE_0__["Ng2ImgMaxService"]; });

/* harmony import */ var _src_ng2_img_max_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ng2-img-max.module */ "jbEk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxModule", function() { return _src_ng2_img_max_module__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxModule"]; });

/* harmony import */ var _src_img_max_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/img-max-size.service */ "K/rb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgMaxSizeService", function() { return _src_img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"]; });

/* harmony import */ var _src_img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/img-maxpx-size.service */ "Bf1Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgMaxPXSizeService", function() { return _src_img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"]; });

/* harmony import */ var _src_img_exif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/img-exif.service */ "kTvl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgExifService", function() { return _src_img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"]; });







//# sourceMappingURL=ng2-img-max.js.map

/***/ }),

/***/ "Bf1Z":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/src/img-maxpx-size.service.js ***!
  \**********************************************************************************/
/*! exports provided: ImgMaxPXSizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgMaxPXSizeService", function() { return ImgMaxPXSizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng2_pica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-pica */ "UPe1");
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-exif.service */ "kTvl");







var ImgMaxPXSizeService = /** @class */ (function () {
    function ImgMaxPXSizeService(ng2PicaService, imageExifService) {
        this.ng2PicaService = ng2PicaService;
        this.imageExifService = imageExifService;
    }
    ImgMaxPXSizeService.prototype.resizeImage = function (file, maxWidth, maxHeight, logExecutionTime) {
        var _this = this;
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var resizedFileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timeAtStart = new Date().getTime();
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            //END OF RESIZE
            setTimeout(function () {
                resizedFileSubject.error({ resizedFile: file, reason: "The provided File is neither of type jpg nor of type png.", error: "INVALID_EXTENSION" });
            }, 0);
            return resizedFileSubject.asObservable();
        }
        var img = new Image();
        var self = this;
        img.onload = function () {
            _this.imageExifService.getOrientedImage(img).then(function (orientedImg) {
                window.URL.revokeObjectURL(img.src);
                var currentWidth = orientedImg.width;
                var currentHeight = orientedImg.height;
                var newWidth = currentWidth;
                var newHeight = currentHeight;
                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                    //resize height proportionally
                    var ratio = maxWidth / currentWidth; //is gonna be <1
                    newHeight = newHeight * ratio;
                }
                currentHeight = newHeight;
                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                    //resize width proportionally
                    var ratio = maxHeight / currentHeight; //is gonna be <1
                    newWidth = newWidth * ratio;
                }
                if (newHeight === orientedImg.height && newWidth === orientedImg.width) {
                    //no resizing necessary
                    resizedFileSubject.next(file);
                    self.logExecutionTime(logExecutionTime);
                }
                else {
                    self.ng2PicaService.resize([file], newWidth, newHeight).subscribe(function (result) {
                        //all good, result is a file
                        resizedFileSubject.next(result);
                        self.logExecutionTime(logExecutionTime);
                    }, function (error) {
                        //something went wrong 
                        resizedFileSubject.error({ resizedFile: file, reason: error, error: "PICA_ERROR" });
                        self.logExecutionTime(logExecutionTime);
                    });
                }
            });
        };
        img.src = window.URL.createObjectURL(file);
        return resizedFileSubject.asObservable();
    };
    ;
    ImgMaxPXSizeService.prototype.logExecutionTime = function (logExecutionTime) {
        if (logExecutionTime) {
            console.info("Execution time: ", new Date().getTime() - this.timeAtStart + "ms");
        }
    };
    /** @nocollapse */
    ImgMaxPXSizeService.ctorParameters = function () { return [
        { type: ng2_pica__WEBPACK_IMPORTED_MODULE_2__["Ng2PicaService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ng2_pica__WEBPACK_IMPORTED_MODULE_2__["Ng2PicaService"]; }),] }] },
        { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; }),] }] }
    ]; };
ImgMaxPXSizeService.ɵfac = function ImgMaxPXSizeService_Factory(t) { return new (t || ImgMaxPXSizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ng2_pica__WEBPACK_IMPORTED_MODULE_2__["Ng2PicaService"]; })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; }))); };
ImgMaxPXSizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImgMaxPXSizeService, factory: function (t) { return ImgMaxPXSizeService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgMaxPXSizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ng2_pica__WEBPACK_IMPORTED_MODULE_2__["Ng2PicaService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ng2_pica__WEBPACK_IMPORTED_MODULE_2__["Ng2PicaService"]; })]
            }] }, { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; })]
            }] }]; }, null); })();
    return ImgMaxPXSizeService;
}());


//# sourceMappingURL=img-maxpx-size.service.js.map

/***/ }),

/***/ "ChFR":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-pica/__ivy_ngcc__/dist/src/img-exif.service.js ***!
  \*************************************************************************/
/*! exports provided: ImgExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgExifService", function() { return ImgExifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exifr/dist/mini.legacy.umd */ "dFej");
/* harmony import */ var exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__);



var ImgExifService = /** @class */ (function () {
    function ImgExifService() {
    }
    ImgExifService.prototype.getOrientedImage = function (image) {
        return new Promise(function (resolve) {
            var img;
            exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__["orientation"](image).catch(function (err) { return undefined; }).then(function (orientation) {
                if (orientation != 1) {
                    var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                    switch (orientation) {
                        case 3:
                        case 4:
                            cx = -image.width;
                            cy = -image.height;
                            deg = 180;
                            break;
                        case 5:
                        case 6:
                            cw = image.height;
                            ch = image.width;
                            cy = -image.height;
                            deg = 90;
                            break;
                        case 7:
                        case 8:
                            cw = image.height;
                            ch = image.width;
                            cx = -image.width;
                            deg = 270;
                            break;
                        default:
                            break;
                    }
                    canvas.width = cw;
                    canvas.height = ch;
                    if ([2, 4, 5, 7].indexOf(orientation) > -1) {
                        //flip image
                        ctx.translate(cw, 0);
                        ctx.scale(-1, 1);
                    }
                    ctx.rotate(deg * Math.PI / 180);
                    ctx.drawImage(image, cx, cy);
                    img = document.createElement("img");
                    img.width = cw;
                    img.height = ch;
                    img.addEventListener('load', function () {
                        resolve(img);
                    });
                    img.src = canvas.toDataURL("image/png");
                }
                else {
                    resolve(image);
                }
            });
        });
    };
ImgExifService.ɵfac = function ImgExifService_Factory(t) { return new (t || ImgExifService)(); };
ImgExifService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImgExifService, factory: function (t) { return ImgExifService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgExifService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return ImgExifService;
}());


//# sourceMappingURL=img-exif.service.js.map

/***/ }),

/***/ "K/rb":
/*!********************************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/src/img-max-size.service.js ***!
  \********************************************************************************/
/*! exports provided: ImgMaxSizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgMaxSizeService", function() { return ImgMaxSizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-exif.service */ "kTvl");





var MAX_STEPS = 15;
var ImgMaxSizeService = /** @class */ (function () {
    function ImgMaxSizeService(imageExifService) {
        this.imageExifService = imageExifService;
    }
    ImgMaxSizeService.prototype.compressImage = function (file, maxSizeInMB, ignoreAlpha, logExecutionTime) {
        var _this = this;
        if (ignoreAlpha === void 0) { ignoreAlpha = false; }
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var compressedFileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timeAtStart = new Date().getTime();
        this.initialFile = file;
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            //END OF COMPRESSION
            setTimeout(function () {
                compressedFileSubject.error({ compressedFile: file, reason: "File provided is neither of type jpg nor of type png.", error: "INVALID_EXTENSION" });
            }, 0);
            return compressedFileSubject.asObservable();
        }
        var oldFileSize = file.size / 1024 / 1024;
        if (oldFileSize < maxSizeInMB) {
            // END OF COMPRESSION
            // FILE SIZE ALREADY BELOW MAX_SIZE -> no compression needed
            setTimeout(function () { compressedFileSubject.next(file); }, 0);
            return compressedFileSubject.asObservable();
        }
        var cvs = document.createElement('canvas');
        var ctx = cvs.getContext('2d');
        var img = new Image();
        var self = this;
        img.onload = function () {
            _this.imageExifService.getOrientedImage(img).then(function (orientedImg) {
                window.URL.revokeObjectURL(img.src);
                cvs.width = orientedImg.width;
                cvs.height = orientedImg.height;
                ctx.drawImage(orientedImg, 0, 0);
                var imageData = ctx.getImageData(0, 0, orientedImg.width, orientedImg.height);
                if (file.type === "image/png" && _this.isImgUsingAlpha(imageData) && !ignoreAlpha) {
                    //png image with alpha
                    compressedFileSubject.error({ compressedFile: file, reason: "File provided is a png image which uses the alpha channel. No compression possible.", error: "PNG_WITH_ALPHA" });
                }
                ctx = cvs.getContext('2d', { 'alpha': false });
                ctx.drawImage(orientedImg, 0, 0);
                self.getCompressedFile(cvs, 50, maxSizeInMB, 1).then(function (compressedFile) {
                    compressedFileSubject.next(compressedFile);
                    self.logExecutionTime(logExecutionTime);
                }).catch(function (error) {
                    compressedFileSubject.error(error);
                    self.logExecutionTime(logExecutionTime);
                });
            });
        };
        img.src = window.URL.createObjectURL(file);
        return compressedFileSubject.asObservable();
    };
    ;
    ImgMaxSizeService.prototype.getCompressedFile = function (cvs, quality, maxSizeInMB, currentStep) {
        var _this = this;
        var result = new Promise(function (resolve, reject) {
            cvs.toBlob(function (blob) {
                if (currentStep + 1 > MAX_STEPS) {
                    //COMPRESSION END
                    //maximal steps reached
                    reject({ compressedFile: _this.getResultFile(blob), reason: "Could not find the correct compression quality in " + MAX_STEPS + " steps.", error: "MAX_STEPS_EXCEEDED" });
                }
                else {
                    var newQuality = _this.getCalculatedQuality(blob, quality, maxSizeInMB, currentStep);
                    _this.checkCompressionStatus(cvs, blob, quality, maxSizeInMB, currentStep, newQuality)
                        .then(function (result) {
                        resolve(result);
                    })
                        .catch(function (result) {
                        reject(result);
                    });
                }
            }, "image/jpeg", quality / 100);
        });
        return result;
    };
    ImgMaxSizeService.prototype.getResultFile = function (blob) {
        return this.generateResultFile(blob, this.initialFile.name, this.initialFile.type, new Date().getTime());
    };
    ImgMaxSizeService.prototype.generateResultFile = function (blob, name, type, lastModified) {
        var resultFile = new Blob([blob], { type: type });
        return this.blobToFile(resultFile, name, lastModified);
    };
    ImgMaxSizeService.prototype.blobToFile = function (blob, name, lastModified) {
        var file = blob;
        file.name = name;
        file.lastModified = lastModified;
        //Cast to a File() type
        return file;
    };
    ImgMaxSizeService.prototype.getCalculatedQuality = function (blob, quality, maxSizeInMB, currentStep) {
        //CALCULATE NEW QUALITY
        var currentSize = blob.size / 1024 / 1024;
        var ratioMaxSizeToCurrentSize = maxSizeInMB / currentSize;
        if (ratioMaxSizeToCurrentSize > 5) {
            //max ratio to avoid extreme quality values
            ratioMaxSizeToCurrentSize = 5;
        }
        var ratioMaxSizeToInitialSize = currentSize / (this.initialFile.size / 1024 / 1024);
        if (ratioMaxSizeToInitialSize < 0.05) {
            //min ratio to avoid extreme quality values
            ratioMaxSizeToInitialSize = 0.05;
        }
        var newQuality = 0;
        var multiplicator = Math.abs(ratioMaxSizeToInitialSize - 1) * 10 / (currentStep * 1.7) / ratioMaxSizeToCurrentSize;
        if (multiplicator < 1) {
            multiplicator = 1;
        }
        if (ratioMaxSizeToCurrentSize >= 1) {
            newQuality = quality + (ratioMaxSizeToCurrentSize - 1) * 10 * multiplicator;
        }
        else {
            newQuality = quality - (1 - ratioMaxSizeToCurrentSize) * 10 * multiplicator;
        }
        if (newQuality > 100) {
            //max quality = 100, so let's set the new quality to the value in between the old quality and 100 in case of > 100
            newQuality = quality + (100 - quality) / 2;
        }
        if (newQuality < 0) {
            //min quality = 0, so let's set the new quality to the value in between the old quality and 0 in case of < 0
            newQuality = quality - quality / 2;
        }
        return newQuality;
    };
    ImgMaxSizeService.prototype.checkCompressionStatus = function (cvs, blob, quality, maxSizeInMB, currentStep, newQuality) {
        var _this = this;
        var result = new Promise(function (resolve, reject) {
            if (quality === 100 && newQuality >= 100) {
                //COMPRESSION END
                //Seems like quality 100 is max but file still too small, case that shouldn't exist as the compression shouldn't even have started in the first place
                reject({ compressedFile: _this.initialFile, reason: "Unfortunately there was an error while compressing the file.", error: "FILE_BIGGER_THAN_INITIAL_FILE" });
            }
            else if ((quality < 1) && (newQuality < quality)) {
                //COMPRESSION END
                //File size still too big but can't compress further than quality=0
                reject({ compressedFile: _this.getResultFile(blob), reason: "Could not compress image enough to fit the maximal file size limit.", error: "UNABLE_TO_COMPRESS_ENOUGH" });
            }
            else if ((newQuality > quality) && (Math.round(quality) == Math.round(newQuality))) {
                //COMPRESSION END
                //next steps quality would be the same quality but newQuality is slightly bigger than old one, means we most likely found the nearest quality to compress to maximal size
                resolve(_this.getResultFile(blob));
            }
            else if (currentStep > 5 && (newQuality > quality) && (newQuality < quality + 2)) {
                //COMPRESSION END
                //for some rare occasions the algorithm might be stuck around e.g. 98.5 and 97.4 because of the maxQuality of 100, the current quality is the nearest possible quality in that case
                resolve(_this.getResultFile(blob));
            }
            else if ((newQuality > quality) && Number.isInteger(quality) && (Math.floor(newQuality) == quality)) {
                //COMPRESSION END
                /*
                    in the previous step if ((quality > newQuality) && (Math.round(quality) == Math.round(newQuality))) applied, so
                    newQuality = Math.round(newQuality) - 1; this was done to reduce the quality at least a full integer down to not waste a step
                    with the same compression rate quality as before. Now, the newQuality is still only in between the old quality (e.g. 93)
                    and the newQuality (e.g. 94) which most likely means that the value for the newQuality (the bigger one) would make the filesize
                    too big so we should just stick with the current, lower quality and return that file.
                */
                resolve(_this.getResultFile(blob));
            }
            else {
                //CONTINUE COMPRESSION
                if ((quality > newQuality) && (Math.round(quality) == Math.round(newQuality))) {
                    //quality can only be an integer -> make sure difference between old quality and new one is at least a whole integer number
                    // - it would be nonsense to compress again with the same quality
                    newQuality = Math.round(newQuality) - 1;
                }
                //recursively call function again
                resolve(_this.getCompressedFile(cvs, newQuality, maxSizeInMB, currentStep + 1));
            }
        });
        return result;
    };
    ImgMaxSizeService.prototype.isImgUsingAlpha = function (imageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i + 3] !== 255) {
                return true;
            }
        }
        return false;
    };
    ImgMaxSizeService.prototype.logExecutionTime = function (logExecutionTime) {
        if (logExecutionTime) {
            console.info("Execution time: ", new Date().getTime() - this.timeAtStart + "ms");
        }
    };
    /** @nocollapse */
    ImgMaxSizeService.ctorParameters = function () { return [
        { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"]; }),] }] }
    ]; };
ImgMaxSizeService.ɵfac = function ImgMaxSizeService_Factory(t) { return new (t || ImgMaxSizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"]; }))); };
ImgMaxSizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImgMaxSizeService, factory: function (t) { return ImgMaxSizeService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgMaxSizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"]; })]
            }] }]; }, null); })();
    return ImgMaxSizeService;
}());


//# sourceMappingURL=img-max-size.service.js.map

/***/ }),

/***/ "OOvV":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-pica/__ivy_ngcc__/dist/src/ng2-pica.service.js ***!
  \*************************************************************************/
/*! exports provided: Ng2PicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2PicaService", function() { return Ng2PicaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var pica_dist_pica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pica/dist/pica */ "gkvR");
/* harmony import */ var pica_dist_pica__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pica_dist_pica__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-exif.service */ "ChFR");






var Ng2PicaService = /** @class */ (function () {
    function Ng2PicaService(imageExifService) {
        this.imageExifService = imageExifService;
    }
    Ng2PicaService.prototype.resize = function (files, width, height, keepAspectRatio) {
        if (keepAspectRatio === void 0) { keepAspectRatio = false; }
        var resizedFile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        for (var i = 0; i < files.length; i++) {
            this.resizeFile(files[i], width, height, keepAspectRatio).then(function (returnedFile) {
                resizedFile.next(returnedFile);
            }).catch(function (error) {
                resizedFile.error(error);
            });
        }
        return resizedFile.asObservable();
    };
    Ng2PicaService.prototype.resizeCanvas = function (from, to, options) {
        var result = new Promise(function (resolve, reject) {
            var curPica = new pica_dist_pica__WEBPACK_IMPORTED_MODULE_2___default.a();
            if (!curPica || !curPica.resize) {
                curPica = new window.pica();
            }
            curPica.resize(from, to, options)
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
        return result;
    };
    Ng2PicaService.prototype.resizeBuffer = function (options) {
        var result = new Promise(function (resolve, reject) {
            var curPica = new pica_dist_pica__WEBPACK_IMPORTED_MODULE_2___default.a();
            if (!curPica || !curPica.resizeBuffer) {
                curPica = new window.pica();
            }
            curPica.resizeBuffer(options)
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
        return result;
    };
    Ng2PicaService.prototype.resizeFile = function (file, width, height, keepAspectRatio) {
        var _this = this;
        if (keepAspectRatio === void 0) { keepAspectRatio = false; }
        var result = new Promise(function (resolve, reject) {
            var fromCanvas = document.createElement('canvas');
            var ctx = fromCanvas.getContext('2d');
            var img = new Image();
            img.onload = function () {
                _this.imageExifService.getOrientedImage(img).then(function (orientedImg) {
                    window.URL.revokeObjectURL(img.src);
                    fromCanvas.width = orientedImg.width;
                    fromCanvas.height = orientedImg.height;
                    ctx.drawImage(orientedImg, 0, 0);
                    var imageData = ctx.getImageData(0, 0, orientedImg.width, orientedImg.height);
                    if (keepAspectRatio) {
                        var ratio = Math.min(width / imageData.width, height / imageData.height);
                        width = Math.round(imageData.width * ratio);
                        height = Math.round(imageData.height * ratio);
                    }
                    var useAlpha = true;
                    if (file.type === "image/jpeg" || (file.type === "image/png" && !_this.isImgUsingAlpha(imageData))) {
                        //image without alpha
                        useAlpha = false;
                        ctx = fromCanvas.getContext('2d', { 'alpha': false });
                        ctx.drawImage(orientedImg, 0, 0);
                    }
                    var toCanvas = document.createElement('canvas');
                    toCanvas.width = width;
                    toCanvas.height = height;
                    _this.resizeCanvas(fromCanvas, toCanvas, { 'alpha': useAlpha })
                        .then(function (resizedCanvas) {
                        resizedCanvas.toBlob(function (blob) {
                            var newFile = _this.generateResultFile(blob, file.name, file.type, new Date().getTime());
                            resolve(newFile);
                        }, file.type);
                    })
                        .catch(function (error) {
                        reject(error);
                    });
                });
            };
            img.src = window.URL.createObjectURL(file);
        });
        return result;
    };
    Ng2PicaService.prototype.isImgUsingAlpha = function (imageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i + 3] !== 255) {
                return true;
            }
        }
        return false;
    };
    Ng2PicaService.prototype.generateResultFile = function (blob, name, type, lastModified) {
        var resultFile = new Blob([blob], { type: type });
        return this.blobToFile(resultFile, name, lastModified);
    };
    Ng2PicaService.prototype.blobToFile = function (blob, name, lastModified) {
        var file = blob;
        file.name = name;
        file.lastModified = lastModified;
        //Cast to a File() type
        return file;
    };
    /** @nocollapse */
    Ng2PicaService.ctorParameters = function () { return [
        { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; }),] }] }
    ]; };
Ng2PicaService.ɵfac = function Ng2PicaService_Factory(t) { return new (t || Ng2PicaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; }))); };
Ng2PicaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2PicaService, factory: function (t) { return Ng2PicaService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2PicaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_3__["ImgExifService"]; })]
            }] }]; }, null); })();
    return Ng2PicaService;
}());


//# sourceMappingURL=ng2-pica.service.js.map

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

/***/ "UPe1":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-pica/__ivy_ngcc__/dist/ng2-pica.js ***!
  \*************************************************************/
/*! exports provided: Ng2PicaService, Ng2PicaModule, ImgExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ng2_pica_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ng2-pica.service */ "OOvV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2PicaService", function() { return _src_ng2_pica_service__WEBPACK_IMPORTED_MODULE_0__["Ng2PicaService"]; });

/* harmony import */ var _src_ng2_pica_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ng2-pica.module */ "vi0P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2PicaModule", function() { return _src_ng2_pica_module__WEBPACK_IMPORTED_MODULE_1__["Ng2PicaModule"]; });

/* harmony import */ var _src_img_exif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/img-exif.service */ "ChFR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgExifService", function() { return _src_img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"]; });





//# sourceMappingURL=ng2-pica.js.map

/***/ }),

/***/ "dFej":
/*!****************************************************!*\
  !*** ./node_modules/exifr/dist/mini.legacy.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});var n=["prototype","__proto__","caller","arguments","length","name"];Object.getOwnPropertyNames(t).forEach((function(r){-1===n.indexOf(r)&&e[r]!==t[r]&&(e[r]=t[r])})),t&&u(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e,t,n){return(f=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&u(i,n.prototype),i}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return f(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?c(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var v=Object.values||function(e){var t=[];for(var n in e)t.push(e[n]);return t},p=Object.entries||function(e){var t=[];for(var n in e)t.push([n,e[n]]);return t},y=Object.assign||function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((function(t){for(var n in t)e[n]=t[n]})),e},g=Object.fromEntries||function(e){var t={};return k(e).forEach((function(e){var n=e[0],r=e[1];t[n]=r})),t},k=Array.from||function(e){if(e instanceof S){var t=[];return e.forEach((function(e,n){return t.push([n,e])})),t}return Array.prototype.slice.call(e)};function m(e){return-1!==this.indexOf(e)}Array.prototype.includes||(Array.prototype.includes=m),String.prototype.includes||(String.prototype.includes=m),String.prototype.startsWith||(String.prototype.startsWith=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.substring(t,t+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length;return this.substring(t-e.length,t)===e});var b="undefined"!=typeof self?self:global,w=b.fetch||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){var i=new XMLHttpRequest;if(i.open("get",e,!0),i.responseType="arraybuffer",i.onerror=r,t.headers)for(var s in t.headers)i.setRequestHeader(s,t.headers[s]);i.onload=function(){n({ok:i.status>=200&&i.status<300,status:i.status,arrayBuffer:function(){return Promise.resolve(i.response)}})},i.send(null)}))},A=function(e){var t=[];if(Object.defineProperties(t,{size:{get:function(){return this.length}},has:{value:function(e){return-1!==this.indexOf(e)}},add:{value:function(e){this.has(e)||this.push(e)}},delete:{value:function(e){if(this.has(e)){var t=this.indexOf(e);this.splice(t,1)}}}}),Array.isArray(e))for(var n=0;n<e.length;n++)t.add(e[n]);return t},O=function(e){return new S(e)},S=void 0!==b.Map&&void 0!==b.Map.prototype.keys?b.Map:function(){function e(n){if(t(this,e),this.clear(),n)for(var r=0;r<n.length;r++)this.set(n[r][0],n[r][1])}return r(e,[{key:"clear",value:function(){this._map={},this._keys=[]}},{key:"get",value:function(e){return this._map["map_"+e]}},{key:"set",value:function(e,t){return this._map["map_"+e]=t,this._keys.indexOf(e)<0&&this._keys.push(e),this}},{key:"has",value:function(e){return this._keys.indexOf(e)>=0}},{key:"delete",value:function(e){var t=this._keys.indexOf(e);return!(t<0)&&(delete this._map["map_"+e],this._keys.splice(t,1),!0)}},{key:"keys",value:function(){return this._keys.slice(0)}},{key:"values",value:function(){var e=this;return this._keys.map((function(t){return e.get(t)}))}},{key:"entries",value:function(){var e=this;return this._keys.map((function(t){return[t,e.get(t)]}))}},{key:"forEach",value:function(e,t){for(var n=0;n<this._keys.length;n++)e.call(t,this._map["map_"+this._keys[n]],this._keys[n],this)}},{key:"size",get:function(){return this._keys.length}}]),e}(),P="undefined"!=typeof self?self:global,U="undefined"!=typeof navigator,x=U&&"undefined"==typeof HTMLImageElement,B=!("undefined"==typeof global||"undefined"==typeof process||!process.versions||!process.versions.node),C=P.Buffer,j=P.BigInt,_=!!C;var V=function(e){return void 0!==e};function T(e){return void 0===e||(e instanceof S?0===e.size:0===v(e).filter(V).length)}function I(e){var t=new Error(e);return delete t.stack,t}function L(e){var t=function(e){var t=0;return e.ifd0.enabled&&(t+=1024),e.exif.enabled&&(t+=2048),e.makerNote&&(t+=2048),e.userComment&&(t+=1024),e.gps.enabled&&(t+=512),e.interop.enabled&&(t+=100),e.ifd1.enabled&&(t+=1024),t+2048}(e);return e.jfif.enabled&&(t+=50),e.xmp.enabled&&(t+=2e4),e.iptc.enabled&&(t+=14e3),e.icc.enabled&&(t+=6e3),t}var z="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):void 0;function F(e){return z?z.decode(e):_?Buffer.from(e).toString("utf8"):decodeURIComponent(escape(String.fromCharCode.apply(null,e)))}var E=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;if(t(this,e),"boolean"==typeof s&&(this.le=s),Array.isArray(n)&&(n=new Uint8Array(n)),0===n)this.byteOffset=0,this.byteLength=0;else if(n instanceof ArrayBuffer){void 0===i&&(i=n.byteLength-r);var a=new DataView(n,r,i);this._swapDataView(a)}else if(n instanceof Uint8Array||n instanceof DataView||n instanceof e){if(void 0===i&&(i=n.byteLength-r),(r+=n.byteOffset)+i>n.byteOffset+n.byteLength)throw I("Creating view outside of available memory in ArrayBuffer");var u=new DataView(n.buffer,r,i);this._swapDataView(u)}else{if("number"!=typeof n)throw I("Invalid input argument for BufferView: "+n);var o=new DataView(new ArrayBuffer(n));this._swapDataView(o)}}return r(e,null,[{key:"from",value:function(t,n){return t instanceof this&&t.le===n?t:new e(t,void 0,void 0,n)}}]),r(e,[{key:"_swapArrayBuffer",value:function(e){this._swapDataView(new DataView(e))}},{key:"_swapBuffer",value:function(e){this._swapDataView(new DataView(e.buffer,e.byteOffset,e.byteLength))}},{key:"_swapDataView",value:function(e){this.dataView=e,this.buffer=e.buffer,this.byteOffset=e.byteOffset,this.byteLength=e.byteLength}},{key:"_lengthToEnd",value:function(e){return this.byteLength-e}},{key:"set",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;if(t instanceof DataView||t instanceof e?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer&&(t=new Uint8Array(t)),!(t instanceof Uint8Array))throw I("BufferView.set(): Invalid data argument.");var i=this.toUint8();return i.set(t,n),new r(this,n,t.byteLength)}},{key:"subarray",value:function(t,n){return new e(this,t,n=n||this._lengthToEnd(t))}},{key:"toUint8",value:function(){return new Uint8Array(this.buffer,this.byteOffset,this.byteLength)}},{key:"getUint8Array",value:function(e,t){return new Uint8Array(this.buffer,this.byteOffset+e,t)}},{key:"getString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.byteLength,n=this.getUint8Array(e,t);return F(n)}},{key:"getUnicodeString",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.byteLength,n=[],r=0;r<t&&e+r<this.byteLength;r+=2)n.push(this.getUint16(e+r));return n.map((function(e){return String.fromCharCode(e)})).join("")}},{key:"getInt8",value:function(e){return this.dataView.getInt8(e)}},{key:"getUint8",value:function(e){return this.dataView.getUint8(e)}},{key:"getInt16",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getInt16(e,t)}},{key:"getInt32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getInt32(e,t)}},{key:"getUint16",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getUint16(e,t)}},{key:"getUint32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getUint32(e,t)}},{key:"getFloat32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat32(e,t)}},{key:"getFloat64",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat64(e,t)}},{key:"getFloat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat32(e,t)}},{key:"getDouble",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat64(e,t)}},{key:"getUint64",value:function(e){var t=this.getUint32(e),n=this.getUint32(e+4);if(t<1048575)return t<<32|n;if(void 0!==typeof j)return console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."),j(t)<<j(32)|j(n);throw I("Trying to read 64b value but JS can only handle 53b numbers.")}},{key:"getUintBytes",value:function(e,t,n){switch(t){case 1:return this.getUint8(e,n);case 2:return this.getUint16(e,n);case 4:return this.getUint32(e,n);case 8:return this.getUint64(e,n)}}},{key:"getUint",value:function(e,t,n){switch(t){case 8:return this.getUint8(e,n);case 16:return this.getUint16(e,n);case 32:return this.getUint32(e,n);case 64:return this.getUint64(e,n)}}},{key:"toString",value:function(e){return this.dataView.toString(e,this.constructor.name)}},{key:"ensureChunk",value:function(){}}]),e}();function D(e,t){throw I("".concat(e," '").concat(t,"' was not loaded, try using full build of exifr."))}var R=function(e){function n(e){var r;return t(this,n),(r=l(this,a(n).call(this))).kind=e,r}return s(n,e),r(n,[{key:"get",value:function(e,t){return this.has(e)||D(this.kind,e),t&&(e in t||function(e,t){throw I("Unknown ".concat(e," '").concat(t,"'."))}(this.kind,e),t[e].enabled||D(this.kind,e)),d(a(n.prototype),"get",this).call(this,e)}},{key:"keyList",value:function(){return k(this.keys())}}]),n}(h(S)),N=new R("file parser"),M=new R("segment parser"),W=new R("file reader");function K(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function H(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}var G=K((function(e){return new Promise((function(t,n){var r=new FileReader;r.onloadend=function(){return t(r.result||new ArrayBuffer)},r.onerror=n,r.readAsArrayBuffer(e)}))})),J=K((function(e){return w(e).then((function(e){return e.arrayBuffer()}))})),X=K((function(e,t){return H(t(e),(function(e){return new E(e)}))})),q=K((function(e,t,n){var r=new(W.get(n))(e,t);return H(r.read(),(function(){return r}))})),Q=K((function(e,t,n,r){if(W.has(n))return q(e,t,n);if(r)return X(e,r);throw I("Parser ".concat(n," is not loaded"))}));function Y(e,t){if((n=e).startsWith("data:")||n.length>1e4)return q(e,t,"base64");if(U)return Q(e,t,"url",J);if(B)return q(e,t,"fs");throw I("Invalid input argument");var n}var Z=function(e){function n(){return t(this,n),l(this,a(n).apply(this,arguments))}return s(n,e),r(n,[{key:"tagKeys",get:function(){return this.allKeys||(this.allKeys=k(this.keys())),this.allKeys}},{key:"tagValues",get:function(){return this.allValues||(this.allValues=k(this.values())),this.allValues}}]),n}(h(S));function $(e,t,n){var r=new Z,i=n;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++){var a=i[s],u=a[0],o=a[1];r.set(u,o)}if(Array.isArray(t)){var f=t;Array.isArray(f)||("function"==typeof f.entries&&(f=f.entries()),f=k(f));for(var h=0;h<f.length;h++){var c=f[h];e.set(c,r)}}else e.set(t,r);return r}function ee(e,t,n){var r,i=e.get(t),s=n;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=k(s));for(var a=0;a<s.length;a++)r=s[a],i.set(r[0],r[1])}var te=O(),ne=O(),re=O(),ie=["chunked","firstChunkSize","firstChunkSizeNode","firstChunkSizeBrowser","chunkSize","chunkLimit"],se=["jfif","xmp","icc","iptc"],ae=["tiff"].concat(se),ue=["ifd0","ifd1","exif","gps","interop"],oe=[].concat(ae,ue),fe=["makerNote","userComment"],he=["translateKeys","translateValues","reviveValues","multiSegment"],ce=[].concat(he,["sanitize","mergeOutput"]),le=function(){function e(){t(this,e)}return r(e,[{key:"translate",get:function(){return this.translateKeys||this.translateValues||this.reviveValues}}]),e}(),de=function(e){function n(e,r,s,u){var o;if(t(this,n),i(c(o=l(this,a(n).call(this))),"enabled",!1),i(c(o),"skip",A()),i(c(o),"pick",A()),i(c(o),"deps",A()),i(c(o),"translateKeys",!1),i(c(o),"translateValues",!1),i(c(o),"reviveValues",!1),o.key=e,o.enabled=r,o.parse=o.enabled,o.applyInheritables(u),o.canBeFiltered=ue.includes(e),o.canBeFiltered&&(o.dict=te.get(e)),void 0!==s)if(Array.isArray(s))o.parse=o.enabled=!0,o.canBeFiltered&&s.length>0&&o.translateTagSet(s,o.pick);else if("object"==typeof s){if(o.enabled=!0,o.parse=!1!==s.parse,o.canBeFiltered){var f=s.pick,h=s.skip;f&&f.length>0&&o.translateTagSet(f,o.pick),h&&h.length>0&&o.translateTagSet(h,o.skip)}o.applyInheritables(s)}else{if(!0!==s&&!1!==s)throw I("Invalid options argument: ".concat(s));o.parse=o.enabled=s}return o}return s(n,e),r(n,[{key:"needed",get:function(){return this.enabled||this.deps.size>0}}]),r(n,[{key:"applyInheritables",value:function(e){var t,n,r=he;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=k(r));for(var i=0;i<r.length;i++)void 0!==(n=e[t=r[i]])&&(this[t]=n)}},{key:"translateTagSet",value:function(e,t){if(this.dict){var n,r,i=this.dict,s=i.tagKeys,a=i.tagValues,u=e;Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=k(u));for(var o=0;o<u.length;o++)"string"==typeof(n=u[o])?(-1===(r=a.indexOf(n))&&(r=s.indexOf(Number(n))),-1!==r&&t.add(Number(s[r]))):t.add(n)}else{var f=e;Array.isArray(f)||("function"==typeof f.entries&&(f=f.entries()),f=k(f));for(var h=0;h<f.length;h++){var c=f[h];t.add(c)}}}},{key:"finalizeFilters",value:function(){!this.enabled&&this.deps.size>0?(this.enabled=!0,me(this.pick,this.deps)):this.enabled&&this.pick.size>0&&me(this.pick,this.deps)}}]),n}(le),ve={jfif:!1,tiff:!0,xmp:!1,icc:!1,iptc:!1,ifd0:!0,ifd1:!1,exif:!0,gps:!0,interop:!1,makerNote:!1,userComment:!1,multiSegment:!1,skip:[],pick:[],translateKeys:!0,translateValues:!0,reviveValues:!0,sanitize:!0,mergeOutput:!0,silentErrors:!0,chunked:!0,firstChunkSize:void 0,firstChunkSizeNode:512,firstChunkSizeBrowser:65536,chunkSize:65536,chunkLimit:5},pe=O(),ye=function(e){function n(e){var r;if(t(this,n),r=l(this,a(n).call(this)),!0===e)r.setupFromTrue();else if(void 0===e)r.setupFromUndefined();else if(Array.isArray(e))r.setupFromArray(e);else{if("object"!=typeof e)throw I("Invalid options argument ".concat(e));r.setupFromObject(e)}return void 0===r.firstChunkSize&&(r.firstChunkSize=U?r.firstChunkSizeBrowser:r.firstChunkSizeNode),r.mergeOutput&&(r.ifd1.enabled=!1),r.filterNestedSegmentTags(),r.traverseTiffDependencyTree(),r.checkLoadedPlugins(),r}return s(n,e),r(n,null,[{key:"useCached",value:function(e){var t=pe.get(e);return void 0!==t?t:(t=new this(e),pe.set(e,t),t)}}]),r(n,[{key:"setupFromUndefined",value:function(){var e,t=ie;Array.isArray(t)||("function"==typeof t.entries&&(t=t.entries()),t=k(t));for(var n=0;n<t.length;n++)this[e=t[n]]=ve[e];var r=ce;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=k(r));for(var i=0;i<r.length;i++)this[e=r[i]]=ve[e];var s=fe;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=k(s));for(var a=0;a<s.length;a++)this[e=s[a]]=ve[e];var u=oe;Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=k(u));for(var o=0;o<u.length;o++)this[e=u[o]]=new de(e,ve[e],void 0,this)}},{key:"setupFromTrue",value:function(){var e,t=ie;Array.isArray(t)||("function"==typeof t.entries&&(t=t.entries()),t=k(t));for(var n=0;n<t.length;n++)this[e=t[n]]=ve[e];var r=ce;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=k(r));for(var i=0;i<r.length;i++)this[e=r[i]]=ve[e];var s=fe;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=k(s));for(var a=0;a<s.length;a++)this[e=s[a]]=!0;var u=oe;Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=k(u));for(var o=0;o<u.length;o++)this[e=u[o]]=new de(e,!0,void 0,this)}},{key:"setupFromArray",value:function(e){var t,n=ie;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++)this[t=n[r]]=ve[t];var i=ce;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++)this[t=i[s]]=ve[t];var a=fe;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=k(a));for(var u=0;u<a.length;u++)this[t=a[u]]=ve[t];var o=oe;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=k(o));for(var f=0;f<o.length;f++)this[t=o[f]]=new de(t,!1,void 0,this);this.setupGlobalFilters(e,void 0,ue)}},{key:"setupFromObject",value:function(e){var t;ue.ifd0=ue.ifd0||ue.image,ue.ifd1=ue.ifd1||ue.thumbnail,y(this,e);var n=ie;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++)this[t=n[r]]=ke(e[t],ve[t]);var i=ce;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++)this[t=i[s]]=ke(e[t],ve[t]);var a=fe;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=k(a));for(var u=0;u<a.length;u++)this[t=a[u]]=ke(e[t],ve[t]);var o=ae;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=k(o));for(var f=0;f<o.length;f++)this[t=o[f]]=new de(t,ve[t],e[t],this);var h=ue;Array.isArray(h)||("function"==typeof h.entries&&(h=h.entries()),h=k(h));for(var c=0;c<h.length;c++)this[t=h[c]]=new de(t,ve[t],e[t],this.tiff);this.setupGlobalFilters(e.pick,e.skip,ue,oe),!0===e.tiff?this.batchEnableWithBool(ue,!0):!1===e.tiff?this.batchEnableWithUserValue(ue,e):Array.isArray(e.tiff)?this.setupGlobalFilters(e.tiff,void 0,ue):"object"==typeof e.tiff&&this.setupGlobalFilters(e.tiff.pick,e.tiff.skip,ue)}},{key:"batchEnableWithBool",value:function(e,t){var n=e;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++){this[n[r]].enabled=t}}},{key:"batchEnableWithUserValue",value:function(e,t){var n=e;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++){var i=n[r],s=t[i];this[i].enabled=!1!==s&&void 0!==s}}},{key:"setupGlobalFilters",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(e&&e.length){var i=r;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++){var a=i[s];this[a].enabled=!1}var u=ge(e,n),o=u;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=k(o));for(var f=0;f<o.length;f++){var h=o[f],c=h[0],l=h[1];me(this[c].pick,l),this[c].enabled=!0}}else if(t&&t.length){var d=ge(t,n),v=d;Array.isArray(v)||("function"==typeof v.entries&&(v=v.entries()),v=k(v));for(var p=0;p<v.length;p++){var y=v[p],g=y[0],m=y[1];me(this[g].skip,m)}}}},{key:"filterNestedSegmentTags",value:function(){var e=this.ifd0,t=this.exif,n=this.xmp,r=this.iptc,i=this.icc;this.makerNote?t.deps.add(37500):t.skip.add(37500),this.userComment?t.deps.add(37510):t.skip.add(37510),n.enabled||e.skip.add(700),r.enabled||e.skip.add(33723),i.enabled||e.skip.add(34675)}},{key:"traverseTiffDependencyTree",value:function(){var e=this,t=this.ifd0,n=this.exif,r=this.gps;this.interop.needed&&(n.deps.add(40965),t.deps.add(40965)),n.needed&&t.deps.add(34665),r.needed&&t.deps.add(34853),this.tiff.enabled=ue.some((function(t){return!0===e[t].enabled}))||this.makerNote||this.userComment;var i=ue;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++){this[i[s]].finalizeFilters()}}},{key:"checkLoadedPlugins",value:function(){var e=ae;Array.isArray(e)||("function"==typeof e.entries&&(e=e.entries()),e=k(e));for(var t=0;t<e.length;t++){var n=e[t];this[n].enabled&&!M.has(n)&&D("segment parser",n)}}},{key:"onlyTiff",get:function(){var e=this;return!se.map((function(t){return e[t].enabled})).some((function(e){return!0===e}))&&this.tiff.enabled}}]),n}(le);function ge(e,t){var n,r,i,s=[],a=t;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=k(a));for(var u=0;u<a.length;u++){r=a[u],n=[];var o=te.get(r);Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=k(o));for(var f=0;f<o.length;f++)i=o[f],(e.includes(i[0])||e.includes(i[1]))&&n.push(i[0]);n.length&&s.push([r,n])}return s}function ke(e,t){return void 0!==e?e:void 0!==t?t:void 0}function me(e,t){var n=t;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++){var i=n[r];e.add(i)}}i(ye,"default",ve);var be={ifd0:!1,ifd1:!1,exif:!1,gps:!1,interop:!1,sanitize:!1,reviveValues:!0,translateKeys:!1,translateValues:!1,mergeOutput:!1},we=y({},be,{firstChunkSize:4e4,gps:[1,2,3,4]}),Ae=y({},be,{firstChunkSize:4e4,ifd0:[274]}),Oe=y({},be,{tiff:!1,ifd1:!0,mergeOutput:!1});function Se(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Pe(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function Ue(){}var xe=function(){function e(n){t(this,e),i(this,"parsers",{}),this.options=ye.useCached(n)}return r(e,[{key:"setup",value:function(){if(!this.fileParser){var e,t=this.file.getUint16(0);if(18761===t||19789===t)this.file.isTiff=!0,e=N.get("tiff");else if(65496===t)this.file.isJpeg=!0,e=N.get("jpeg");else{if(!function(e){if(0!==e.getUint16(0))return!1;var t=e.getUint16(2);if(t>50)return!1;for(var n=16,r=[];n<t;)r.push(e.getString(n,4)),n+=4;return r.includes("heic")}(this.file))throw I("Unknown file format");this.file.isHeic=!0,e=N.get("heic")}this.fileParser=new e(this.options,this.file,this.parsers)}}},{key:"read",value:function(e){try{var t=this;return Se(function(e,t){if("string"==typeof e)return Y(e,t);if(U&&!x&&e instanceof HTMLImageElement)return Y(e.src,t);if(e instanceof Uint8Array||e instanceof ArrayBuffer||e instanceof DataView)return new E(e);if(U&&e instanceof Blob)return Q(e,t,"blob",G);throw I("Invalid input argument")}(e,t.options),(function(e){t.file=e}))}catch(e){return Promise.reject(e)}}},{key:"parse",value:function(){try{var e=this;return e.setup(),Se(e.fileParser.parse(),(function(){var t,n={},r=[],i=v(e.parsers).map((t=function(t){var i;return Pe((function(){return e.options.silentErrors?(n=function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return Se(t.parse(),(function(e){i=e}))}),(function(e){r.push(e)})),s=function(){t.errors.length&&r.push.apply(r,t.errors)},n&&n.then?n.then(s):s(n)):Se(t.parse(),(function(e){i=e}));var n,s}),(function(){t.assignToOutput(n,i)}))},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(e){return Promise.reject(e)}}));return Se(Promise.all(i),(function(){var t;return e.options.silentErrors&&r.length>0&&(n.errors=r),n=T(t=n)?void 0:t,e.file.close&&e.file.close(),n}))}))}catch(e){return Promise.reject(e)}}},{key:"extractThumbnail",value:function(){try{var e=this;e.setup();var t,n=M.get("tiff",e.options);return Pe((function(){if(!e.file.isTiff)return function(e){var t=e();if(t&&t.then)return t.then(Ue)}((function(){if(e.file.isJpeg)return Se(e.fileParser.getOrFindSegment("tiff"),(function(e){t=e}))}));t={start:0,type:"tiff"}}),(function(){if(void 0!==t)return Se(e.fileParser.ensureSegmentChunk(t),(function(t){return Se((e.parsers.tiff=new n(t,e.options,e.file)).extractThumbnail(),(function(t){return e.file.close&&e.file.close(),t}))}))}))}catch(e){return Promise.reject(e)}}}]),e}();function Be(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Ce(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}var je=Ce((function(e){var t=new xe(Ae);return Be(t.read(e),(function(){return Be(t.parse(),(function(e){if(e&&e.ifd0)return e.ifd0[274]}))}))})),_e=Ce((function(e){var t=new xe(we);return Be(t.read(e),(function(){return Be(t.parse(),(function(e){if(e&&e.gps){var t=e.gps;return{latitude:t.latitude,longitude:t.longitude}}}))}))})),Ve=Ce((function(e){return Be(this.thumbnail(e),(function(e){if(void 0!==e){var t=new Blob([e]);return URL.createObjectURL(t)}}))})),Te=Ce((function(e){var t=new xe(Oe);return Be(t.read(e),(function(){return Be(t.extractThumbnail(),(function(e){return e&&_?C.from(e):e}))}))})),Ie=Ce((function(e,t){var n=new xe(t);return Be(n.read(e),(function(){return n.parse()}))})),Le=Object.freeze({__proto__:null,orientation:je,gps:_e,thumbnailUrl:Ve,thumbnail:Te,parse:Ie,Exifr:xe,fileParsers:N,segmentParsers:M,fileReaders:W,tagKeys:te,tagValues:ne,tagRevivers:re,createDictionary:$,extendDictionary:ee,fetchUrlAsArrayBuffer:J,readBlobAsArrayBuffer:G,chunkedProps:ie,otherSegments:se,segments:ae,tiffBlocks:ue,segmentsAndBlocks:oe,tiffExtractables:fe,inheritables:he,allFormatters:ce,Options:ye,disableAllOptions:be,gpsOnlyOptions:we,orientationOnlyOptions:Ae,thumbnailOnlyOptions:Oe});function ze(){}var Fe=function(e){function n(){var e,r;t(this,n);for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];return i(c(r=l(this,(e=a(n)).call.apply(e,[this].concat(u)))),"ranges",new Ee),0!==r.byteLength&&r.ranges.add(0,r.byteLength),r}return s(n,e),r(n,[{key:"_tryExtend",value:function(e,t,n){if(0===e&&0===this.byteLength&&n){var r=new DataView(n.buffer||n,n.byteOffset,n.byteLength);this._swapDataView(r)}else{var i=e+t;if(i>this.byteLength){var s=this._extend(i).dataView;this._swapDataView(s)}}}},{key:"_extend",value:function(e){var t;t=_?C.allocUnsafe(e):new Uint8Array(e);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return t.set(new Uint8Array(this.buffer,this.byteOffset,this.byteLength),0),{uintView:t,dataView:n}}},{key:"subarray",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=t||this._lengthToEnd(e),r&&this._tryExtend(e,t),this.ranges.add(e,t),d(a(n.prototype),"subarray",this).call(this,e,t)}},{key:"set",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r&&this._tryExtend(t,e.byteLength,e);var i=d(a(n.prototype),"set",this).call(this,e,t);return this.ranges.add(t,i.byteLength),i}},{key:"ensureChunk",value:function(e,t){try{if(!this.chunked)return;if(this.ranges.available(e,t))return;return function(e,t){if(!t)return e&&e.then?e.then(ze):Promise.resolve()}(this.readChunk(e,t))}catch(e){return Promise.reject(e)}}},{key:"available",value:function(e,t){return this.ranges.available(e,t)}}]),n}(E),Ee=function(){function e(){t(this,e),i(this,"list",[])}return r(e,[{key:"add",value:function(e,t){var n=e+t,r=this.list.filter((function(t){return De(e,t.offset,n)||De(e,t.end,n)}));if(r.length>0){e=Math.min.apply(Math,[e].concat(r.map((function(e){return e.offset})))),t=(n=Math.max.apply(Math,[n].concat(r.map((function(e){return e.end})))))-e;var i=r.shift();i.offset=e,i.length=t,i.end=n,this.list=this.list.filter((function(e){return!r.includes(e)}))}else this.list.push({offset:e,length:t,end:n})}},{key:"available",value:function(e,t){var n=e+t;return this.list.some((function(t){return t.offset<=e&&n<=t.end}))}},{key:"length",get:function(){return this.list.length}}]),e}();function De(e,t,n){return e<=t&&t<=n}function Re(){}function Ne(e,t){if(!t)return e&&e.then?e.then(Re):Promise.resolve()}function Me(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}var We=function(e){function n(){return t(this,n),l(this,a(n).apply(this,arguments))}return s(n,e),r(n,[{key:"readWhole",value:function(){try{var e=this;return e.chunked=!1,Me(G(e.input),(function(t){e._swapArrayBuffer(t)}))}catch(e){return Promise.reject(e)}}},{key:"readChunked",value:function(){return this.chunked=!0,this.size=this.input.size,d(a(n.prototype),"readChunked",this).call(this)}},{key:"_readChunk",value:function(e,t){try{var n=this,r=t?e+t:void 0,i=n.input.slice(e,r);return Me(G(i),(function(t){return n.set(t,e,!0)}))}catch(e){return Promise.reject(e)}}}]),n}(function(e){function n(e,r){var s;return t(this,n),i(c(s=l(this,a(n).call(this,0))),"chunksRead",0),s.input=e,s.options=r,s}return s(n,e),r(n,[{key:"readWhole",value:function(){try{return this.chunked=!1,Ne(this.readChunk(this.nextChunkOffset))}catch(e){return Promise.reject(e)}}},{key:"readChunked",value:function(){try{return this.chunked=!0,Ne(this.readChunk(0,this.options.firstChunkSize))}catch(e){return Promise.reject(e)}}},{key:"readNextChunk",value:function(e){try{if(void 0===e&&(e=this.nextChunkOffset),this.fullyRead)return this.chunksRead++,!1;var t=this.options.chunkSize;return n=this.readChunk(e,t),r=function(e){return!!e&&e.byteLength===t},i?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n)}catch(e){return Promise.reject(e)}var n,r,i}},{key:"readChunk",value:function(e,t){try{if(this.chunksRead++,0===(t=this.safeWrapAddress(e,t)))return;return this._readChunk(e,t)}catch(e){return Promise.reject(e)}}},{key:"safeWrapAddress",value:function(e,t){return void 0!==this.size&&e+t>this.size?Math.max(0,this.size-e):t}},{key:"read",value:function(){return this.options.chunked?this.readChunked():this.readWhole()}},{key:"close",value:function(){}},{key:"nextChunkOffset",get:function(){if(0!==this.ranges.list.length)return this.ranges.list[0].length}},{key:"canReadNextChunk",get:function(){return this.chunksRead<this.options.chunkLimit}},{key:"fullyRead",get:function(){return void 0!==this.size&&this.nextChunkOffset===this.size}}]),n}(Fe));W.set("blob",We);var Ke=function(){function e(n,r,s){var a,u=this;t(this,e),i(this,"ensureSegmentChunk",(a=function(e){var t,n,r,i=e.start,s=e.size||65536;return t=function(){if(u.file.chunked)return function(){if(!u.file.available(i,s))return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return t=u.file.readChunk(i,s),n=function(t){e.chunk=t},r?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t);var t,n,r}),(function(t){throw I("Couldn't read segment: ".concat(JSON.stringify(e),". ").concat(t.message))}));e.chunk=u.file.subarray(i,s)}();if(u.file.byteLength>i+s)e.chunk=u.file.subarray(i,s);else{if(void 0!==e.size)throw I("Segment unreachable: "+JSON.stringify(e));e.chunk=u.file.subarray(i)}},n=function(t){return e.chunk},(r=t())&&r.then?r.then(n):n(r)},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(a.apply(this,e))}catch(e){return Promise.reject(e)}})),this.extendOptions&&this.extendOptions(n),this.options=n,this.file=r,this.parsers=s}return r(e,[{key:"createParser",value:function(e,t){var n=new(M.get(e))(t,this.options,this.file);return this.parsers[e]=n}}]),e}(),He=function(){function e(n){var r=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t(this,e),i(this,"errors",[]),i(this,"raw",O()),i(this,"handleError",(function(e){if(!r.options.silentErrors)throw e;r.errors.push(e.message)})),this.chunk=this.normalizeInput(n),this.file=a,this.type=this.constructor.type,this.globalOptions=this.options=s,this.localOptions=s[this.type],this.canTranslate=this.localOptions&&this.localOptions.translate}return r(e,[{key:"normalizeInput",value:function(e){return e instanceof E?e:new E(e)}}],[{key:"findPosition",value:function(e,t){var n=e.getUint16(t+2)+2,r="function"==typeof this.headerLength?this.headerLength(e,t,n):this.headerLength,i=t+r,s=n-r;return{offset:t,length:n,headerLength:r,start:i,size:s,end:i+s}}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new ye(i({},this.type,t)),r=new this(e,n);return r.parse()}}]),r(e,[{key:"translate",value:function(){this.canTranslate&&(this.translated=this.translateBlock(this.raw,this.type))}},{key:"translateBlock",value:function(e,t){var n=re.get(t),r=ne.get(t),i=te.get(t),s=this.options[t],a=s.reviveValues&&!!n,u=s.translateValues&&!!r,o=s.translateKeys&&!!i,f={},h=e;Array.isArray(h)||("function"==typeof h.entries&&(h=h.entries()),h=k(h));for(var c=0;c<h.length;c++){var l=h[c],d=l[0],v=l[1];a&&n.has(d)?v=n.get(d)(v):u&&r.has(d)&&(v=this.translateValue(v,r.get(d))),o&&i.has(d)&&(d=i.get(d)||d),f[d]=v}return f}},{key:"translateValue",value:function(e,t){return t[e]||e}},{key:"assignToOutput",value:function(e,t){this.assignObjectToOutput(e,this.constructor.type,t)}},{key:"assignObjectToOutput",value:function(e,t,n){if(this.globalOptions.mergeOutput)return y(e,n);e[t]?y(e[t],n):e[t]=n}},{key:"output",get:function(){return this.translated?this.translated:this.raw?g(this.raw):void 0}}]),e}();function Ge(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}i(He,"headerLength",4),i(He,"type",void 0),i(He,"multiSegment",!1),i(He,"canHandle",(function(){return!1}));function Je(){}function Xe(e,t){if(!t)return e&&e.then?e.then(Je):Promise.resolve()}function qe(e){var t=e();if(t&&t.then)return t.then(Je)}function Qe(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function Ye(e,t,n){if(!e.s){if(n instanceof Ze){if(!n.s)return void(n.o=Ye.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Ye.bind(null,e,t),Ye.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var Ze=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var s=1&i?t:n;if(s){try{Ye(r,1,s(this.v))}catch(e){Ye(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?Ye(r,1,t?t(i):i):n?Ye(r,1,n(i)):Ye(r,2,i)}catch(e){Ye(r,2,e)}},r},e}();function $e(e){return e instanceof Ze&&1&e.s}function et(e,t,n){for(var r;;){var i=e();if($e(i)&&(i=i.v),!i)return s;if(i.then){r=0;break}var s=n();if(s&&s.then){if(!$e(s)){r=1;break}s=s.s}if(t){var a=t();if(a&&a.then&&!$e(a)){r=2;break}}}var u=new Ze,o=Ye.bind(null,u,2);return(0===r?i.then(h):1===r?s.then(f):a.then(c)).then(void 0,o),u;function f(r){s=r;do{if(t&&(a=t())&&a.then&&!$e(a))return void a.then(c).then(void 0,o);if(!(i=e())||$e(i)&&!i.v)return void Ye(u,1,s);if(i.then)return void i.then(h).then(void 0,o);$e(s=n())&&(s=s.v)}while(!s||!s.then);s.then(f).then(void 0,o)}function h(e){e?(s=n())&&s.then?s.then(f).then(void 0,o):f(s):Ye(u,1,s)}function c(){(i=e())?i.then?i.then(h).then(void 0,o):h(i):Ye(u,1,s)}}function tt(e){return 192===e||194===e||196===e||219===e||221===e||218===e||254===e}function nt(e){return e>=224&&e<=239}function rt(e,t){var n=M;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++){var i=n[r],s=i[0];if(i[1].canHandle(e,t))return s}}var it=function(e){function n(){var e,r;t(this,n);for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];return i(c(r=l(this,(e=a(n)).call.apply(e,[this].concat(u)))),"appSegments",[]),i(c(r),"jpegSegments",[]),i(c(r),"unknownSegments",[]),r}return s(n,e),r(n,[{key:"parse",value:function(){try{var e=this;return Ge(e.findAppSegments(),(function(){return Ge(e.readSegments(),(function(){e.mergeMultiSegments(),e.createParsers()}))}))}catch(e){return Promise.reject(e)}}},{key:"readSegments",value:function(){try{var e=this.appSegments.map(this.ensureSegmentChunk);return Xe(Promise.all(e))}catch(e){return Promise.reject(e)}}},{key:"setupSegmentFinderArgs",value:function(e){var t=this;!0===e?(this.findAll=!0,this.wanted=A(M.keyList())):(e=void 0===e?M.keyList().filter((function(e){return t.options[e].enabled})):e.filter((function(e){return t.options[e].enabled&&M.has(e)})),this.findAll=!1,this.remaining=A(e),this.wanted=A(e)),this.unfinishedMultiSegment=!1}},{key:"findAppSegments",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;try{var n=this;n.setupSegmentFinderArgs(t);var r=n.file,i=n.findAll,s=n.wanted,a=n.remaining;return Qe((function(){if(!i&&n.file.chunked)return i=k(s).some((function(e){var t=M.get(e),r=n.options[e];return t.multiSegment&&r.multiSegment})),qe((function(){if(i)return Xe(n.file.readWhole())}))}),(function(){var t=!1;if(e=n._findAppSegments(e,r.byteLength,i,s,a),!n.options.onlyTiff)return function(){if(r.chunked){var i=!1;return et((function(){return!t&&a.size>0&&!i&&(!!r.canReadNextChunk||!!n.unfinishedMultiSegment)}),void 0,(function(){var s=r.nextChunkOffset,a=n.appSegments.some((function(e){return!n.file.available(e.offset||e.start,e.length||e.size)}));return Qe((function(){return e>s&&!a?Ge(r.readNextChunk(e),(function(e){i=!e})):Ge(r.readNextChunk(s),(function(e){i=!e}))}),(function(){void 0===(e=n._findAppSegments(e,r.byteLength))&&(t=!0)}))}))}}()}))}catch(e){return Promise.reject(e)}}},{key:"_findAppSegments",value:function(e,t){for(var n,r,i,s,a,u,o=this.file,f=this.findAll,h=this.wanted,c=this.remaining,l=this.options;e<t;e++)if(255===o.getUint8(e))if(nt(n=o.getUint8(e+1))){if(r=o.getUint16(e+2),(i=rt(o,e))&&h.has(i)&&(a=(s=M.get(i)).findPosition(o,e),u=l[i],a.type=i,this.appSegments.push(a),!f&&(s.multiSegment&&u.multiSegment?(this.unfinishedMultiSegment=a.chunkNumber<a.chunkCount,this.unfinishedMultiSegment||c.delete(i)):c.delete(i),0===c.size)))break;l.recordUnknownSegments&&((a=He.findPosition(o,e)).marker=n,this.unknownSegments.push(a)),e+=r+1}else if(tt(n)){if(r=o.getUint16(e+2),218===n&&!1!==l.stopAfterSos)return;l.recordJpegSegments&&this.jpegSegments.push({offset:e,length:r,marker:n}),e+=r+1}return e}},{key:"mergeMultiSegments",value:function(){var e=this;if(this.appSegments.some((function(e){return e.multiSegment}))){var t=function(e,t){for(var n,r,i,s=O(),a=0;a<e.length;a++)n=e[a],r=n[t],s.has(r)?i=s.get(r):s.set(r,i=[]),i.push(n);return k(s)}(this.appSegments,"type");this.mergedAppSegments=t.map((function(t){var n=t[0],r=t[1],i=M.get(n,e.options);return i.handleMultiSegments?{type:n,chunk:i.handleMultiSegments(r)}:r[0]}))}}},{key:"createParsers",value:function(){try{var e=this.mergedAppSegments||this.appSegments;Array.isArray(e)||("function"==typeof e.entries&&(e=e.entries()),e=k(e));for(var t=0;t<e.length;t++){var n=e[t],r=n.type,i=n.chunk;if(this.options[r].enabled){var s=this.parsers[r];if(s&&s.append);else if(!s){var a=new(M.get(r,this.options))(i,this.options,this.file);this.parsers[r]=a}}}return Ge()}catch(e){return Promise.reject(e)}}},{key:"getSegment",value:function(e){return this.appSegments.find((function(t){return t.type===e}))}},{key:"getOrFindSegment",value:function(e){try{var t=this,n=t.getSegment(e);return Qe((function(){if(void 0===n)return Ge(t.findAppSegments(0,[e]),(function(){n=t.getSegment(e)}))}),(function(){return n}))}catch(e){return Promise.reject(e)}}}]),n}(Ke);function st(){}N.set("jpeg",it);function at(e,t){if(!t)return e&&e.then?e.then(st):Promise.resolve()}function ut(e,t){var n=e();return n&&n.then?n.then(t):t(n)}var ot=[void 0,1,1,2,4,8,1,1,2,4,8,4,8,4];var ft=function(e){function n(){return t(this,n),l(this,a(n).apply(this,arguments))}return s(n,e),r(n,[{key:"parse",value:function(){try{var e=this;return e.parseHeader(),ut((function(){if(e.options.ifd0.enabled)return at(e.parseIfd0Block())}),(function(){return ut((function(){if(e.options.exif.enabled)return at(e.saveParseBlock("parseExifBlock"))}),(function(){return ut((function(){if(e.options.gps.enabled)return at(e.saveParseBlock("parseGpsBlock"))}),(function(){return ut((function(){if(e.options.interop.enabled)return at(e.saveParseBlock("parseInteropBlock"))}),(function(){return ut((function(){if(e.options.ifd1.enabled)return at(e.saveParseBlock("parseThumbnailBlock"))}),(function(){return e.createOutput()}))}))}))}))}))}catch(e){return Promise.reject(e)}}},{key:"saveParseBlock",value:function(e){try{var t=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return n=t[e](),i?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n);var n,r,i}),(function(e){t.handleError(e)}))}catch(e){return Promise.reject(e)}}},{key:"findIfd0Offset",value:function(){void 0===this.ifd0Offset&&(this.ifd0Offset=this.chunk.getUint32(4))}},{key:"findIfd1Offset",value:function(){if(void 0===this.ifd1Offset){this.findIfd0Offset();var e=this.chunk.getUint16(this.ifd0Offset),t=this.ifd0Offset+2+12*e;this.ifd1Offset=this.chunk.getUint32(t)}}},{key:"parseBlock",value:function(e,t){var n=O();return this[t]=n,this.parseTags(e,t,n),n}},{key:"parseIfd0Block",value:function(){try{var e=this;if(e.ifd0)return;if(e.findIfd0Offset(),e.ifd0Offset<8)throw I("Invalid EXIF data: IFD0 offset should be less than 8");if(!e.file.chunked&&e.ifd0Offset>e.file.byteLength)throw I("IFD0 offset points to outside of file.\nthis.ifd0Offset: ".concat(e.ifd0Offset,", file.byteLength: ").concat(e.file.byteLength));return ut((function(){if(e.file.isTiff)return at(e.file.ensureChunk(e.ifd0Offset,L(e.options)))}),(function(){var t=e.parseBlock(e.ifd0Offset,"ifd0");if(0!==t.size)return e.exifOffset=t.get(34665),e.interopOffset=t.get(40965),e.gpsOffset=t.get(34853),e.xmp=t.get(700),e.iptc=t.get(33723),e.icc=t.get(34675),e.options.sanitize&&(t.delete(34665),t.delete(40965),t.delete(34853),t.delete(700),t.delete(33723),t.delete(34675)),t}))}catch(e){return Promise.reject(e)}}},{key:"ensureBlockChunk",value:function(e,t){try{var n=this;return ut((function(){if(n.file.isTiff)return at(n.file.ensureChunk(e,t))}),(function(){e>n.chunk.byteLength&&(n.chunk=E.from(n.file,n.le))}))}catch(e){return Promise.reject(e)}}},{key:"parseExifBlock",value:function(){try{var e=this;if(e.exif)return;return ut((function(){if(!e.ifd0)return at(e.parseIfd0Block())}),(function(){if(void 0!==e.exifOffset)return ut((function(){if(e.file.isTiff)return at(e.file.ensureChunk(e.exifOffset,L(e.options)))}),(function(){var t=e.parseBlock(e.exifOffset,"exif");return e.interopOffset||(e.interopOffset=t.get(40965)),e.makerNote=t.get(37500),e.userComment=t.get(37510),e.options.sanitize&&(t.delete(40965),t.delete(37500),t.delete(37510)),e.unpack(t,41728),e.unpack(t,41729),t}))}))}catch(e){return Promise.reject(e)}}},{key:"unpack",value:function(e,t){var n=e.get(t);n&&1===n.length&&e.set(t,n[0])}},{key:"parseGpsBlock",value:function(){try{var e=this;if(e.gps)return;return ut((function(){if(!e.ifd0)return at(e.parseIfd0Block())}),(function(){if(void 0!==e.gpsOffset){var t=e.parseBlock(e.gpsOffset,"gps");return t&&t.has(2)&&t.has(4)&&(t.set("latitude",ht.apply(void 0,t.get(2).concat([t.get(1)]))),t.set("longitude",ht.apply(void 0,t.get(4).concat([t.get(3)])))),t}}))}catch(e){return Promise.reject(e)}}},{key:"parseInteropBlock",value:function(){try{var e=this;if(e.interop)return;return ut((function(){if(!e.ifd0)return at(e.parseIfd0Block())}),(function(){return ut((function(){if(void 0===e.interopOffset&&!e.exif)return at(e.parseExifBlock())}),(function(){if(void 0!==e.interopOffset)return e.parseBlock(e.interopOffset,"interop")}))}))}catch(e){return Promise.reject(e)}}},{key:"parseThumbnailBlock",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=this;if(t.ifd1||t.ifd1Parsed)return;if(t.options.mergeOutput&&!e)return;return t.findIfd1Offset(),t.ifd1Offset>0&&(t.parseBlock(t.ifd1Offset,"ifd1"),t.ifd1Parsed=!0),t.ifd1}catch(e){return Promise.reject(e)}}},{key:"extractThumbnail",value:function(){try{var e=this;return e.headerParsed||e.parseHeader(),ut((function(){if(!e.ifd1Parsed)return at(e.parseThumbnailBlock(!0))}),(function(){if(void 0!==e.ifd1){var t=e.ifd1.get(513),n=e.ifd1.get(514);return e.chunk.getUint8Array(t,n)}}))}catch(e){return Promise.reject(e)}}},{key:"createOutput",value:function(){var e,t,n,r={},i=ue;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=k(i));for(var s=0;s<i.length;s++)if(!T(e=this[t=i[s]]))if(n=this.canTranslate?this.translateBlock(e,t):g(e),this.options.mergeOutput){if("ifd1"===t)continue;y(r,n)}else r[t]=n;return this.makerNote&&(r.makerNote=this.makerNote),this.userComment&&(r.userComment=this.userComment),r}},{key:"assignToOutput",value:function(e,t){if(this.globalOptions.mergeOutput)y(e,t);else{var n=p(t);Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=k(n));for(var r=0;r<n.length;r++){var i=n[r],s=i[0],a=i[1];this.assignObjectToOutput(e,s,a)}}}},{key:"image",get:function(){return this.ifd0}},{key:"thumbnail",get:function(){return this.ifd1}}],[{key:"canHandle",value:function(e,t){return 225===e.getUint8(t+1)&&1165519206===e.getUint32(t+4)&&0===e.getUint16(t+8)}}]),n}(function(e){function n(){return t(this,n),l(this,a(n).apply(this,arguments))}return s(n,e),r(n,[{key:"parseHeader",value:function(){var e=this.chunk.getUint16();if(18761===e)this.le=!0;else{if(19789!==e)throw I("Invalid EXIF data: expected byte order marker (0x4949 or 0x4D4D).");this.le=!1}if(this.chunk.le=this.le,42!==this.chunk.getUint16(2))throw I("Invalid EXIF data: expected 0x002A.");this.headerParsed=!0}},{key:"parseTags",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O(),r=this.options[t],i=r.pick,s=r.skip,a=(i=A(i)).size>0,u=0===s.size,o=this.chunk.getUint16(e);e+=2;for(var f=0;f<o;f++){var h=this.chunk.getUint16(e);if(a){if(i.has(h)&&(n.set(h,this.parseTag(e,h,t)),i.delete(h),0===i.size))break}else!u&&s.has(h)||n.set(h,this.parseTag(e,h,t));e+=12}return n}},{key:"parseTag",value:function(e,t,n){var r,i=this.chunk.getUint16(e+2),s=this.chunk.getUint32(e+4),a=ot[i];if(a*s<=4?e+=8:e=this.chunk.getUint32(e+8),i<1||i>13)throw I("Invalid TIFF value type. block: ".concat(n.toUpperCase(),", tag: ").concat(t.toString(16),", type: ").concat(i,", offset ").concat(e));if(e>this.chunk.byteLength)throw I("Invalid TIFF value offset. block: ".concat(n.toUpperCase(),", tag: ").concat(t.toString(16),", type: ").concat(i,", offset ").concat(e," is outside of chunk size ").concat(this.chunk.byteLength));if(1===i)return this.chunk.getUint8Array(e,s);if(2===i)return""===(r=function(e){for(;e.endsWith("\0");)e=e.slice(0,-1);return e}(r=this.chunk.getString(e,s)).trim())?void 0:r;if(7===i)return this.chunk.getUint8Array(e,s);if(1===s)return this.parseTagValue(i,e);for(var u=new(function(e){switch(e){case 1:return Uint8Array;case 3:return Uint16Array;case 4:return Uint32Array;case 5:return Array;case 6:return Int8Array;case 8:return Int16Array;case 9:return Int32Array;case 10:return Array;case 11:return Float32Array;case 12:return Float64Array;default:return Array}}(i))(s),o=a,f=0;f<s;f++)u[f]=this.parseTagValue(i,e),e+=o;return u}},{key:"parseTagValue",value:function(e,t){switch(e){case 1:return this.chunk.getUint8(t);case 3:return this.chunk.getUint16(t);case 4:return this.chunk.getUint32(t);case 5:return this.chunk.getUint32(t)/this.chunk.getUint32(t+4);case 6:return this.chunk.getInt8(t);case 8:return this.chunk.getInt16(t);case 9:return this.chunk.getInt32(t);case 10:return this.chunk.getInt32(t)/this.chunk.getInt32(t+4);case 11:return this.chunk.getFloat(t);case 12:return this.chunk.getDouble(t);case 13:return this.chunk.getUint32(t);default:throw I("Invalid tiff type ".concat(e))}}}]),n}(He));function ht(e,t,n,r){var i=e+t/60+n/3600;return"S"!==r&&"W"!==r||(i*=-1),i}i(ft,"type","tiff"),i(ft,"headerLength",10),M.set("tiff",ft),e.Exifr=xe,e.Options=ye,e.allFormatters=ce,e.chunkedProps=ie,e.createDictionary=$,e.default=Le,e.disableAllOptions=be,e.extendDictionary=ee,e.fetchUrlAsArrayBuffer=J,e.fileParsers=N,e.fileReaders=W,e.gps=_e,e.gpsOnlyOptions=we,e.inheritables=he,e.orientation=je,e.orientationOnlyOptions=Ae,e.otherSegments=se,e.parse=Ie,e.readBlobAsArrayBuffer=G,e.segmentParsers=M,e.segments=ae,e.segmentsAndBlocks=oe,e.tagKeys=te,e.tagRevivers=re,e.tagValues=ne,e.thumbnail=Te,e.thumbnailOnlyOptions=Oe,e.thumbnailUrl=Ve,e.tiffBlocks=ue,e.tiffExtractables=fe,Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),

/***/ "f6mv":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/src/ng2-img-max.service.js ***!
  \*******************************************************************************/
/*! exports provided: Ng2ImgMaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxService", function() { return Ng2ImgMaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-max-size.service */ "K/rb");
/* harmony import */ var _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-maxpx-size.service */ "Bf1Z");
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img-exif.service */ "kTvl");









var Ng2ImgMaxService = /** @class */ (function () {
    function Ng2ImgMaxService(imgMaxSizeService, imgMaxPXSizeService, imageExifService) {
        this.imgMaxSizeService = imgMaxSizeService;
        this.imgMaxPXSizeService = imgMaxPXSizeService;
        this.imageExifService = imageExifService;
    }
    Ng2ImgMaxService.prototype.compress = function (files, maxSizeInMB, ignoreAlpha, logExecutionTime) {
        var _this = this;
        if (ignoreAlpha === void 0) { ignoreAlpha = false; }
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var compressedFileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        files.forEach(function (file) {
            _this.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime).subscribe(function (value) {
                compressedFileSubject.next(value);
            }, function (error) {
                compressedFileSubject.error(error);
            });
        });
        return compressedFileSubject.asObservable();
    };
    Ng2ImgMaxService.prototype.resize = function (files, maxWidth, maxHeight, logExecutionTime) {
        var _this = this;
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var resizedFileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        files.forEach(function (file) {
            _this.resizeImage(file, maxWidth, maxHeight, logExecutionTime).subscribe(function (value) {
                resizedFileSubject.next(value);
            }, function (error) {
                resizedFileSubject.error(error);
            });
        });
        return resizedFileSubject.asObservable();
    };
    Ng2ImgMaxService.prototype.compressImage = function (file, maxSizeInMB, ignoreAlpha, logExecutionTime) {
        if (ignoreAlpha === void 0) { ignoreAlpha = false; }
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        return this.imgMaxSizeService.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime);
    };
    Ng2ImgMaxService.prototype.resizeImage = function (file, maxWidth, maxHeight, logExecutionTime) {
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        return this.imgMaxPXSizeService.resizeImage(file, maxWidth, maxHeight, logExecutionTime);
    };
    Ng2ImgMaxService.prototype.getEXIFOrientedImage = function (image) {
        return this.imageExifService.getOrientedImage(image);
    };
    /** @nocollapse */
    Ng2ImgMaxService.ctorParameters = function () { return [
        { type: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"]; }),] }] },
        { type: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"]; }),] }] },
        { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"]; }),] }] }
    ]; };
Ng2ImgMaxService.ɵfac = function Ng2ImgMaxService_Factory(t) { return new (t || Ng2ImgMaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"]; })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"]; })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"]; }))); };
Ng2ImgMaxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2ImgMaxService, factory: function (t) { return Ng2ImgMaxService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2ImgMaxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"]; })]
            }] }, { type: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"]; })]
            }] }, { type: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"]; })]
            }] }]; }, null); })();
    return Ng2ImgMaxService;
}());


//# sourceMappingURL=ng2-img-max.service.js.map

/***/ }),

/***/ "gkvR":
/*!****************************************!*\
  !*** ./node_modules/pica/dist/pica.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!

pica
https://github.com/nodeca/pica

*/

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
// Collection of math functions
//
// 1. Combine components together
// 2. Has async init to load wasm modules
//
'use strict';

var Multimath = _dereq_('multimath');

var mm_unsharp_mask = _dereq_('./mm_unsharp_mask');

var mm_resize = _dereq_('./mm_resize');

function MathLib(requested_features) {
  var __requested_features = requested_features || [];

  var features = {
    js: __requested_features.indexOf('js') >= 0,
    wasm: __requested_features.indexOf('wasm') >= 0
  };
  Multimath.call(this, features);
  this.features = {
    js: features.js,
    wasm: features.wasm && this.has_wasm()
  };
  this.use(mm_unsharp_mask);
  this.use(mm_resize);
}

MathLib.prototype = Object.create(Multimath.prototype);
MathLib.prototype.constructor = MathLib;

MathLib.prototype.resizeAndUnsharp = function resizeAndUnsharp(options, cache) {
  var result = this.resize(options, cache);

  if (options.unsharpAmount) {
    this.unsharp_mask(result, options.toWidth, options.toHeight, options.unsharpAmount, options.unsharpRadius, options.unsharpThreshold);
  }

  return result;
};

module.exports = MathLib;

},{"./mm_resize":4,"./mm_unsharp_mask":9,"multimath":19}],2:[function(_dereq_,module,exports){
// Resize convolvers, pure JS implementation
//
'use strict'; // Precision of fixed FP values
//var FIXED_FRAC_BITS = 14;

function clampTo8(i) {
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clampNegative(i) {
  return i >= 0 ? i : 0;
} // Convolve image data in horizontal direction. Can be used for:
//
// 1. bitmap with premultiplied alpha
// 2. bitmap without alpha (all values 255)
//
// Notes:
//
// - output is transposed
// - output resolution is ~15 bits per channel(for better precision).
//


function convolveHor(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Store 15 bits between passes for better precision
      // Instead of shift to 14 (FIXED_FRAC_BITS), shift to 7 only
      //


      dest[destOffset + 3] = clampNegative(a >> 7);
      dest[destOffset + 2] = clampNegative(b >> 7);
      dest[destOffset + 1] = clampNegative(g >> 7);
      dest[destOffset] = clampNegative(r >> 7);
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
} // Supplementary method for `convolveHor()`
//


function convolveVert(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Sync with premultiplied version for exact result match


      r >>= 7;
      g >>= 7;
      b >>= 7;
      a >>= 7; // Bring this value back in range + round result.
      //

      dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14);
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14);
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14);
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14);
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
} // Premultiply & convolve image data in horizontal direction. Can be used for:
//
// - Any bitmap data, extracted with `.getImageData()` method (with
//   non-premultiplied alpha)
//
// For images without alpha channel this method is slower than `convolveHor()`
//


function convolveHorWithPre(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a, alpha;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        alpha = src[srcPtr + 3];
        a = a + filterVal * alpha | 0;
        b = b + filterVal * src[srcPtr + 2] * alpha | 0;
        g = g + filterVal * src[srcPtr + 1] * alpha | 0;
        r = r + filterVal * src[srcPtr] * alpha | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Premultiply is (* alpha / 255).
      // Postpone division for better performance


      b = b / 255 | 0;
      g = g / 255 | 0;
      r = r / 255 | 0; // Store 15 bits between passes for better precision
      // Instead of shift to 14 (FIXED_FRAC_BITS), shift to 7 only
      //

      dest[destOffset + 3] = clampNegative(a >> 7);
      dest[destOffset + 2] = clampNegative(b >> 7);
      dest[destOffset + 1] = clampNegative(g >> 7);
      dest[destOffset] = clampNegative(r >> 7);
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
} // Supplementary method for `convolveHorWithPre()`
//


function convolveVertWithPre(src, dest, srcW, srcH, destW, filters) {
  var r, g, b, a;
  var filterPtr, filterShift, filterSize;
  var srcPtr, srcY, destX, filterVal;
  var srcOffset = 0,
      destOffset = 0; // For each row

  for (srcY = 0; srcY < srcH; srcY++) {
    filterPtr = 0; // Apply precomputed filters to each destination row point

    for (destX = 0; destX < destW; destX++) {
      // Get the filter that determines the current output pixel.
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0; // Apply the filter to the row to get the destination pixel r, g, b, a

      for (; filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++]; // Use reverse order to workaround deopts in old v8 (node v.10)
        // Big thanks to @mraleph (Vyacheslav Egorov) for the tip.

        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      } // Downscale to leave room for un-premultiply


      r >>= 7;
      g >>= 7;
      b >>= 7;
      a >>= 7; // Un-premultiply

      a = clampTo8(a + (1 << 13) >> 14);

      if (a > 0) {
        r = r * 255 / a | 0;
        g = g * 255 / a | 0;
        b = b * 255 / a | 0;
      } // Bring this value back in range + round result.
      // Shift value = FIXED_FRAC_BITS + 7
      //


      dest[destOffset + 3] = a;
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14);
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14);
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14);
      destOffset = destOffset + srcH * 4 | 0;
    }

    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}

module.exports = {
  convolveHor: convolveHor,
  convolveVert: convolveVert,
  convolveHorWithPre: convolveHorWithPre,
  convolveVertWithPre: convolveVertWithPre
};

},{}],3:[function(_dereq_,module,exports){
// This is autogenerated file from math.wasm, don't edit.
//
'use strict';
/* eslint-disable max-len */

module.exports = 'AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEYA2AGf39/f39/AGAAAGAIf39/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBwYBAAAAAAIGBgF/AEEACweUAQgRX193YXNtX2NhbGxfY3RvcnMAAAtjb252b2x2ZUhvcgABDGNvbnZvbHZlVmVydAACEmNvbnZvbHZlSG9yV2l0aFByZQADE2NvbnZvbHZlVmVydFdpdGhQcmUABApjb252b2x2ZUhWAAUMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAKyA4GAwABC4wDARB/AkAgA0UNACAERQ0AIANBAnQhFQNAQQAhE0EAIQsDQCALQQJqIQcCfyALQQF0IAVqIgYuAQIiC0UEQEEAIQhBACEGQQAhCUEAIQogBwwBCyASIAYuAQBqIQhBACEJQQAhCiALIRRBACEOIAchBkEAIQ8DQCAFIAZBAXRqLgEAIhAgACAIQQJ0aigCACIRQRh2bCAPaiEPIBFB/wFxIBBsIAlqIQkgEUEQdkH/AXEgEGwgDmohDiARQQh2Qf8BcSAQbCAKaiEKIAhBAWohCCAGQQFqIQYgFEEBayIUDQALIAlBB3UhCCAKQQd1IQYgDkEHdSEJIA9BB3UhCiAHIAtqCyELIAEgDEEBdCIHaiAIQQAgCEEAShs7AQAgASAHQQJyaiAGQQAgBkEAShs7AQAgASAHQQRyaiAJQQAgCUEAShs7AQAgASAHQQZyaiAKQQAgCkEAShs7AQAgDCAVaiEMIBNBAWoiEyAERw0ACyANQQFqIg0gAmwhEiANQQJ0IQwgAyANRw0ACwsL2gMBD38CQCADRQ0AIARFDQAgAkECdCEUA0AgCyEMQQAhE0EAIQIDQCACQQJqIQYCfyACQQF0IAVqIgcuAQIiAkUEQEEAIQhBACEHQQAhCkEAIQkgBgwBCyAHLgEAQQJ0IBJqIQhBACEJIAIhCkEAIQ0gBiEHQQAhDkEAIQ8DQCAFIAdBAXRqLgEAIhAgACAIQQF0IhFqLwEAbCAJaiEJIAAgEUEGcmovAQAgEGwgDmohDiAAIBFBBHJqLwEAIBBsIA9qIQ8gACARQQJyai8BACAQbCANaiENIAhBBGohCCAHQQFqIQcgCkEBayIKDQALIAlBB3UhCCANQQd1IQcgDkEHdSEKIA9BB3UhCSACIAZqCyECIAEgDEECdGogB0GAQGtBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobQQh0QYD+A3EgCUGAQGtBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobQRB0QYCA/AdxIApBgEBrQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBgEBrQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG3I2AgAgAyAMaiEMIBNBAWoiEyAERw0ACyAUIAtBAWoiC2whEiADIAtHDQALCwuSAwEQfwJAIANFDQAgBEUNACADQQJ0IRUDQEEAIRNBACEGA0AgBkECaiEIAn8gBkEBdCAFaiIGLgECIgdFBEBBACEJQQAhDEEAIQ1BACEOIAgMAQsgEiAGLgEAaiEJQQAhDkEAIQ1BACEMIAchFEEAIQ8gCCEGA0AgBSAGQQF0ai4BACAAIAlBAnRqKAIAIhBBGHZsIhEgD2ohDyARIBBBEHZB/wFxbCAMaiEMIBEgEEEIdkH/AXFsIA1qIQ0gESAQQf8BcWwgDmohDiAJQQFqIQkgBkEBaiEGIBRBAWsiFA0ACyAPQQd1IQkgByAIagshBiABIApBAXQiCGogDkH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEECcmogDUH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEEEcmogDEH/AW1BB3UiB0EAIAdBAEobOwEAIAEgCEEGcmogCUEAIAlBAEobOwEAIAogFWohCiATQQFqIhMgBEcNAAsgC0EBaiILIAJsIRIgC0ECdCEKIAMgC0cNAAsLC4IEAQ9/AkAgA0UNACAERQ0AIAJBAnQhFANAIAshDEEAIRJBACEHA0AgB0ECaiEKAn8gB0EBdCAFaiICLgECIhNFBEBBACEIQQAhCUEAIQYgCiEHQQAMAQsgAi4BAEECdCARaiEJQQAhByATIQJBACENIAohBkEAIQ5BACEPA0AgBSAGQQF0ai4BACIIIAAgCUEBdCIQai8BAGwgB2ohByAAIBBBBnJqLwEAIAhsIA5qIQ4gACAQQQRyai8BACAIbCAPaiEPIAAgEEECcmovAQAgCGwgDWohDSAJQQRqIQkgBkEBaiEGIAJBAWsiAg0ACyAHQQd1IQggDUEHdSEJIA9BB3UhBiAKIBNqIQcgDkEHdQtBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKGyIKQf8BcQRAIAlB/wFsIAJtIQkgCEH/AWwgAm0hCCAGQf8BbCACbSEGCyABIAxBAnRqIAlBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKG0EIdEGA/gNxIAZBgEBrQQ51IgJB/wEgAkH/AUgbIgJBACACQQBKG0EQdEGAgPwHcSAKQRh0ciAIQYBAa0EOdSICQf8BIAJB/wFIGyICQQAgAkEAShtycjYCACADIAxqIQwgEkEBaiISIARHDQALIBQgC0EBaiILbCERIAMgC0cNAAsLC0AAIAcEQEEAIAIgAyAEIAUgABADIAJBACAEIAUgBiABEAQPC0EAIAIgAyAEIAUgABABIAJBACAEIAUgBiABEAIL';

},{}],4:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  name: 'resize',
  fn: _dereq_('./resize'),
  wasm_fn: _dereq_('./resize_wasm'),
  wasm_src: _dereq_('./convolve_wasm_base64')
};

},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(_dereq_,module,exports){
'use strict';

var createFilters = _dereq_('./resize_filter_gen');

var _require = _dereq_('./convolve'),
    convolveHor = _require.convolveHor,
    convolveVert = _require.convolveVert,
    convolveHorWithPre = _require.convolveHorWithPre,
    convolveVertWithPre = _require.convolveVertWithPre;

function hasAlpha(src, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    if (src[ptr] !== 255) return true;
    ptr = ptr + 4 | 0;
  }

  return false;
}

function resetAlpha(dst, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    dst[ptr] = 0xFF;
    ptr = ptr + 4 | 0;
  }
}

module.exports = function resize(options) {
  var src = options.src;
  var srcW = options.width;
  var srcH = options.height;
  var destW = options.toWidth;
  var destH = options.toHeight;
  var scaleX = options.scaleX || options.toWidth / options.width;
  var scaleY = options.scaleY || options.toHeight / options.height;
  var offsetX = options.offsetX || 0;
  var offsetY = options.offsetY || 0;
  var dest = options.dest || new Uint8Array(destW * destH * 4);
  var filter = typeof options.filter === 'undefined' ? 'mks2013' : options.filter;
  var filtersX = createFilters(filter, srcW, destW, scaleX, offsetX),
      filtersY = createFilters(filter, srcH, destH, scaleY, offsetY);
  var tmp = new Uint16Array(destW * srcH * 4); // Autodetect if alpha channel exists, and use appropriate method

  if (hasAlpha(src, srcW, srcH)) {
    convolveHorWithPre(src, tmp, srcW, srcH, destW, filtersX);
    convolveVertWithPre(tmp, dest, srcH, destW, destH, filtersY);
  } else {
    convolveHor(src, tmp, srcW, srcH, destW, filtersX);
    convolveVert(tmp, dest, srcH, destW, destH, filtersY);
    resetAlpha(dest, destW, destH);
  }

  return dest;
};

},{"./convolve":2,"./resize_filter_gen":6}],6:[function(_dereq_,module,exports){
// Calculate convolution filters for each destination point,
// and pack data to Int16Array:
//
// [ shift, length, data..., shift2, length2, data..., ... ]
//
// - shift - offset in src image
// - length - filter length (in src points)
// - data - filter values sequence
//
'use strict';

var FILTER_INFO = _dereq_('./resize_filter_info'); // Precision of fixed FP values


var FIXED_FRAC_BITS = 14;

function toFixedPoint(num) {
  return Math.round(num * ((1 << FIXED_FRAC_BITS) - 1));
}

module.exports = function resizeFilterGen(filter, srcSize, destSize, scale, offset) {
  var filterFunction = FILTER_INFO.filter[filter].fn;
  var scaleInverted = 1.0 / scale;
  var scaleClamped = Math.min(1.0, scale); // For upscale
  // Filter window (averaging interval), scaled to src image

  var srcWindow = FILTER_INFO.filter[filter].win / scaleClamped;
  var destPixel, srcPixel, srcFirst, srcLast, filterElementSize, floatFilter, fxpFilter, total, pxl, idx, floatVal, filterTotal, filterVal;
  var leftNotEmpty, rightNotEmpty, filterShift, filterSize;
  var maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
  var packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
  var packedFilterPtr = 0;
  var slowCopy = !packedFilter.subarray || !packedFilter.set; // For each destination pixel calculate source range and built filter values

  for (destPixel = 0; destPixel < destSize; destPixel++) {
    // Scaling should be done relative to central pixel point
    srcPixel = (destPixel + 0.5) * scaleInverted + offset;
    srcFirst = Math.max(0, Math.floor(srcPixel - srcWindow));
    srcLast = Math.min(srcSize - 1, Math.ceil(srcPixel + srcWindow));
    filterElementSize = srcLast - srcFirst + 1;
    floatFilter = new Float32Array(filterElementSize);
    fxpFilter = new Int16Array(filterElementSize);
    total = 0.0; // Fill filter values for calculated range

    for (pxl = srcFirst, idx = 0; pxl <= srcLast; pxl++, idx++) {
      floatVal = filterFunction((pxl + 0.5 - srcPixel) * scaleClamped);
      total += floatVal;
      floatFilter[idx] = floatVal;
    } // Normalize filter, convert to fixed point and accumulate conversion error


    filterTotal = 0;

    for (idx = 0; idx < floatFilter.length; idx++) {
      filterVal = floatFilter[idx] / total;
      filterTotal += filterVal;
      fxpFilter[idx] = toFixedPoint(filterVal);
    } // Compensate normalization error, to minimize brightness drift


    fxpFilter[destSize >> 1] += toFixedPoint(1.0 - filterTotal); //
    // Now pack filter to useable form
    //
    // 1. Trim heading and tailing zero values, and compensate shitf/length
    // 2. Put all to single array in this format:
    //
    //    [ pos shift, data length, value1, value2, value3, ... ]
    //

    leftNotEmpty = 0;

    while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
      leftNotEmpty++;
    }

    if (leftNotEmpty < fxpFilter.length) {
      rightNotEmpty = fxpFilter.length - 1;

      while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
        rightNotEmpty--;
      }

      filterShift = srcFirst + leftNotEmpty;
      filterSize = rightNotEmpty - leftNotEmpty + 1;
      packedFilter[packedFilterPtr++] = filterShift; // shift

      packedFilter[packedFilterPtr++] = filterSize; // size

      if (!slowCopy) {
        packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
        packedFilterPtr += filterSize;
      } else {
        // fallback for old IE < 11, without subarray/set methods
        for (idx = leftNotEmpty; idx <= rightNotEmpty; idx++) {
          packedFilter[packedFilterPtr++] = fxpFilter[idx];
        }
      }
    } else {
      // zero data, write header only
      packedFilter[packedFilterPtr++] = 0; // shift

      packedFilter[packedFilterPtr++] = 0; // size
    }
  }

  return packedFilter;
};

},{"./resize_filter_info":7}],7:[function(_dereq_,module,exports){
// Filter definitions to build tables for
// resizing convolvers.
//
// Presets for quality 0..3. Filter functions + window size
//
'use strict';

var filter = {
  // Nearest neibor
  box: {
    win: 0.5,
    fn: function fn(x) {
      if (x < 0) x = -x;
      return x < 0.5 ? 1.0 : 0.0;
    }
  },
  // // Hamming
  hamming: {
    win: 1.0,
    fn: function fn(x) {
      if (x < 0) x = -x;

      if (x >= 1.0) {
        return 0.0;
      }

      if (x < 1.19209290E-07) {
        return 1.0;
      }

      var xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * (0.54 + 0.46 * Math.cos(xpi / 1.0));
    }
  },
  // Lanczos, win = 2
  lanczos2: {
    win: 2.0,
    fn: function fn(x) {
      if (x < 0) x = -x;

      if (x >= 2.0) {
        return 0.0;
      }

      if (x < 1.19209290E-07) {
        return 1.0;
      }

      var xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * Math.sin(xpi / 2.0) / (xpi / 2.0);
    }
  },
  // Lanczos, win = 3
  lanczos3: {
    win: 3.0,
    fn: function fn(x) {
      if (x < 0) x = -x;

      if (x >= 3.0) {
        return 0.0;
      }

      if (x < 1.19209290E-07) {
        return 1.0;
      }

      var xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * Math.sin(xpi / 3.0) / (xpi / 3.0);
    }
  },
  // Magic Kernel Sharp 2013, win = 2.5
  // http://johncostella.com/magic/
  mks2013: {
    win: 2.5,
    fn: function fn(x) {
      if (x < 0) x = -x;

      if (x >= 2.5) {
        return 0.0;
      }

      if (x >= 1.5) {
        return -0.125 * (x - 2.5) * (x - 2.5);
      }

      if (x >= 0.5) {
        return 0.25 * (4 * x * x - 11 * x + 7);
      }

      return 1.0625 - 1.75 * x * x;
    }
  }
};
module.exports = {
  filter: filter,
  // Legacy mapping
  f2q: {
    box: 0,
    hamming: 1,
    lanczos2: 2,
    lanczos3: 3
  },
  q2f: ['box', 'hamming', 'lanczos2', 'lanczos3']
};

},{}],8:[function(_dereq_,module,exports){
'use strict';

var createFilters = _dereq_('./resize_filter_gen');

function hasAlpha(src, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    if (src[ptr] !== 255) return true;
    ptr = ptr + 4 | 0;
  }

  return false;
}

function resetAlpha(dst, width, height) {
  var ptr = 3,
      len = width * height * 4 | 0;

  while (ptr < len) {
    dst[ptr] = 0xFF;
    ptr = ptr + 4 | 0;
  }
}

function asUint8Array(src) {
  return new Uint8Array(src.buffer, 0, src.byteLength);
}

var IS_LE = true; // should not crash everything on module load in old browsers

try {
  IS_LE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1;
} catch (__) {}

function copyInt16asLE(src, target, target_offset) {
  if (IS_LE) {
    target.set(asUint8Array(src), target_offset);
    return;
  }

  for (var ptr = target_offset, i = 0; i < src.length; i++) {
    var data = src[i];
    target[ptr++] = data & 0xFF;
    target[ptr++] = data >> 8 & 0xFF;
  }
}

module.exports = function resize_wasm(options) {
  var src = options.src;
  var srcW = options.width;
  var srcH = options.height;
  var destW = options.toWidth;
  var destH = options.toHeight;
  var scaleX = options.scaleX || options.toWidth / options.width;
  var scaleY = options.scaleY || options.toHeight / options.height;
  var offsetX = options.offsetX || 0.0;
  var offsetY = options.offsetY || 0.0;
  var dest = options.dest || new Uint8Array(destW * destH * 4);
  var filter = typeof options.filter === 'undefined' ? 'mks2013' : options.filter;
  var filtersX = createFilters(filter, srcW, destW, scaleX, offsetX),
      filtersY = createFilters(filter, srcH, destH, scaleY, offsetY); // destination is 0 too.

  var src_offset = 0;
  var src_size = Math.max(src.byteLength, dest.byteLength); // buffer between convolve passes

  var tmp_offset = this.__align(src_offset + src_size);

  var tmp_size = srcH * destW * 4 * 2; // 2 bytes per channel

  var filtersX_offset = this.__align(tmp_offset + tmp_size);

  var filtersY_offset = this.__align(filtersX_offset + filtersX.byteLength);

  var alloc_bytes = filtersY_offset + filtersY.byteLength;

  var instance = this.__instance('resize', alloc_bytes); //
  // Fill memory block with data to process
  //


  var mem = new Uint8Array(this.__memory.buffer);
  var mem32 = new Uint32Array(this.__memory.buffer); // 32-bit copy is much faster in chrome

  var src32 = new Uint32Array(src.buffer);
  mem32.set(src32); // We should guarantee LE bytes order. Filters are not big, so
  // speed difference is not significant vs direct .set()

  copyInt16asLE(filtersX, mem, filtersX_offset);
  copyInt16asLE(filtersY, mem, filtersY_offset); // Now call webassembly method
  // emsdk does method names with '_'

  var fn = instance.exports.convolveHV || instance.exports._convolveHV;

  if (hasAlpha(src, srcW, srcH)) {
    fn(filtersX_offset, filtersY_offset, tmp_offset, srcW, srcH, destW, destH, 1);
  } else {
    fn(filtersX_offset, filtersY_offset, tmp_offset, srcW, srcH, destW, destH, 0);
    resetAlpha(dest, destW, destH);
  } //
  // Copy data back to typed array
  //
  // 32-bit copy is much faster in chrome


  var dest32 = new Uint32Array(dest.buffer);
  dest32.set(new Uint32Array(this.__memory.buffer, 0, destH * destW));
  return dest;
};

},{"./resize_filter_gen":6}],9:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  name: 'unsharp_mask',
  fn: _dereq_('./unsharp_mask'),
  wasm_fn: _dereq_('./unsharp_mask_wasm'),
  wasm_src: _dereq_('./unsharp_mask_wasm_base64')
};

},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(_dereq_,module,exports){
// Unsharp mask filter
//
// http://stackoverflow.com/a/23322820/1031804
// USM(O) = O + (2 * (Amount / 100) * (O - GB))
// GB - gaussian blur.
//
// Image is converted from RGB to HSV, unsharp mask is applied to the
// brightness channel and then image is converted back to RGB.
//
'use strict';

var glur_mono16 = _dereq_('glur/mono16');

function hsv_v16(img, width, height) {
  var size = width * height;
  var out = new Uint16Array(size);
  var r, g, b, max;

  for (var i = 0; i < size; i++) {
    r = img[4 * i];
    g = img[4 * i + 1];
    b = img[4 * i + 2];
    max = r >= g && r >= b ? r : g >= b && g >= r ? g : b;
    out[i] = max << 8;
  }

  return out;
}

module.exports = function unsharp(img, width, height, amount, radius, threshold) {
  var v1, v2, vmul;
  var diff, iTimes4;

  if (amount === 0 || radius < 0.5) {
    return;
  }

  if (radius > 2.0) {
    radius = 2.0;
  }

  var brightness = hsv_v16(img, width, height);
  var blured = new Uint16Array(brightness); // copy, because blur modify src

  glur_mono16(blured, width, height, radius);
  var amountFp = amount / 100 * 0x1000 + 0.5 | 0;
  var thresholdFp = threshold << 8;
  var size = width * height;
  /* eslint-disable indent */

  for (var i = 0; i < size; i++) {
    v1 = brightness[i];
    diff = v1 - blured[i];

    if (Math.abs(diff) >= thresholdFp) {
      // add unsharp mask to the brightness channel
      v2 = v1 + (amountFp * diff + 0x800 >> 12); // Both v1 and v2 are within [0.0 .. 255.0] (0000-FF00) range, never going into
      // [255.003 .. 255.996] (FF01-FFFF). This allows to round this value as (x+.5)|0
      // later without overflowing.

      v2 = v2 > 0xff00 ? 0xff00 : v2;
      v2 = v2 < 0x0000 ? 0x0000 : v2; // Avoid division by 0. V=0 means rgb(0,0,0), unsharp with unsharpAmount>0 cannot
      // change this value (because diff between colors gets inflated), so no need to verify correctness.

      v1 = v1 !== 0 ? v1 : 1; // Multiplying V in HSV model by a constant is equivalent to multiplying each component
      // in RGB by the same constant (same for HSL), see also:
      // https://beesbuzz.biz/code/16-hsv-color-transforms

      vmul = (v2 << 12) / v1 | 0; // Result will be in [0..255] range because:
      //  - all numbers are positive
      //  - r,g,b <= (v1/256)
      //  - r,g,b,(v1/256),(v2/256) <= 255
      // So highest this number can get is X*255/X+0.5=255.5 which is < 256 and rounds down.

      iTimes4 = i * 4;
      img[iTimes4] = img[iTimes4] * vmul + 0x800 >> 12; // R

      img[iTimes4 + 1] = img[iTimes4 + 1] * vmul + 0x800 >> 12; // G

      img[iTimes4 + 2] = img[iTimes4 + 2] * vmul + 0x800 >> 12; // B
    }
  }
};

},{"glur/mono16":18}],11:[function(_dereq_,module,exports){
'use strict';

module.exports = function unsharp(img, width, height, amount, radius, threshold) {
  if (amount === 0 || radius < 0.5) {
    return;
  }

  if (radius > 2.0) {
    radius = 2.0;
  }

  var pixels = width * height;
  var img_bytes_cnt = pixels * 4;
  var hsv_bytes_cnt = pixels * 2;
  var blur_bytes_cnt = pixels * 2;
  var blur_line_byte_cnt = Math.max(width, height) * 4; // float32 array

  var blur_coeffs_byte_cnt = 8 * 4; // float32 array

  var img_offset = 0;
  var hsv_offset = img_bytes_cnt;
  var blur_offset = hsv_offset + hsv_bytes_cnt;
  var blur_tmp_offset = blur_offset + blur_bytes_cnt;
  var blur_line_offset = blur_tmp_offset + blur_bytes_cnt;
  var blur_coeffs_offset = blur_line_offset + blur_line_byte_cnt;

  var instance = this.__instance('unsharp_mask', img_bytes_cnt + hsv_bytes_cnt + blur_bytes_cnt * 2 + blur_line_byte_cnt + blur_coeffs_byte_cnt, {
    exp: Math.exp
  }); // 32-bit copy is much faster in chrome


  var img32 = new Uint32Array(img.buffer);
  var mem32 = new Uint32Array(this.__memory.buffer);
  mem32.set(img32); // HSL

  var fn = instance.exports.hsv_v16 || instance.exports._hsv_v16;
  fn(img_offset, hsv_offset, width, height); // BLUR

  fn = instance.exports.blurMono16 || instance.exports._blurMono16;
  fn(hsv_offset, blur_offset, blur_tmp_offset, blur_line_offset, blur_coeffs_offset, width, height, radius); // UNSHARP

  fn = instance.exports.unsharp || instance.exports._unsharp;
  fn(img_offset, img_offset, hsv_offset, blur_offset, width, height, amount, threshold); // 32-bit copy is much faster in chrome

  img32.set(new Uint32Array(this.__memory.buffer, 0, pixels));
};

},{}],12:[function(_dereq_,module,exports){
// This is autogenerated file from math.wasm, don't edit.
//
'use strict';
/* eslint-disable max-len */

module.exports = 'AGFzbQEAAAAADAZkeWxpbmsAAAAAAAE0B2AAAGAEf39/fwBgBn9/f39/fwBgCH9/f39/f39/AGAIf39/f39/f30AYAJ9fwBgAXwBfAIZAgNlbnYDZXhwAAYDZW52Bm1lbW9yeQIAAAMHBgAFAgQBAwYGAX8AQQALB4oBCBFfX3dhc21fY2FsbF9jdG9ycwABFl9fYnVpbGRfZ2F1c3NpYW5fY29lZnMAAg5fX2dhdXNzMTZfbGluZQADCmJsdXJNb25vMTYABAdoc3ZfdjE2AAUHdW5zaGFycAAGDF9fZHNvX2hhbmRsZQMAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwABCsUMBgMAAQvWAQEHfCABRNuGukOCGvs/IAC7oyICRAAAAAAAAADAohAAIgW2jDgCFCABIAKaEAAiAyADoCIGtjgCECABRAAAAAAAAPA/IAOhIgQgBKIgAyACIAKgokQAAAAAAADwP6AgBaGjIgS2OAIAIAEgBSAEmqIiB7Y4AgwgASADIAJEAAAAAAAA8D+gIASioiIItjgCCCABIAMgAkQAAAAAAADwv6AgBKKiIgK2OAIEIAEgByAIoCAFRAAAAAAAAPA/IAahoCIDo7Y4AhwgASAEIAKgIAOjtjgCGAuGBQMGfwl8An0gAyoCDCEVIAMqAgghFiADKgIUuyERIAMqAhC7IRACQCAEQQFrIghBAEgiCQRAIAIhByAAIQYMAQsgAiAALwEAuCIPIAMqAhi7oiIMIBGiIg0gDCAQoiAPIAMqAgS7IhOiIhQgAyoCALsiEiAPoqCgoCIOtjgCACACQQRqIQcgAEECaiEGIAhFDQAgCEEBIAhBAUgbIgpBf3MhCwJ/IAQgCmtBAXFFBEAgDiENIAgMAQsgAiANIA4gEKIgFCASIAAvAQK4Ig+ioKCgIg22OAIEIAJBCGohByAAQQRqIQYgDiEMIARBAmsLIQIgC0EAIARrRg0AA0AgByAMIBGiIA0gEKIgDyAToiASIAYvAQC4Ig6ioKCgIgy2OAIAIAcgDSARoiAMIBCiIA4gE6IgEiAGLwECuCIPoqCgoCINtjgCBCAHQQhqIQcgBkEEaiEGIAJBAkohACACQQJrIQIgAA0ACwsCQCAJDQAgASAFIAhsQQF0aiIAAn8gBkECay8BACICuCINIBW7IhKiIA0gFrsiE6KgIA0gAyoCHLuiIgwgEKKgIAwgEaKgIg8gB0EEayIHKgIAu6AiDkQAAAAAAADwQWMgDkQAAAAAAAAAAGZxBEAgDqsMAQtBAAs7AQAgCEUNACAGQQRrIQZBACAFa0EBdCEBA0ACfyANIBKiIAJB//8DcbgiDSAToqAgDyIOIBCioCAMIBGioCIPIAdBBGsiByoCALugIgxEAAAAAAAA8EFjIAxEAAAAAAAAAABmcQRAIAyrDAELQQALIQMgBi8BACECIAAgAWoiACADOwEAIAZBAmshBiAIQQFKIQMgDiEMIAhBAWshCCADDQALCwvRAgIBfwd8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIglEAAAAAAAAAMCiEAAiDLaMOAIUIAQgCZoQACIKIAqgIg22OAIQIAREAAAAAAAA8D8gCqEiCyALoiAKIAkgCaCiRAAAAAAAAPA/oCAMoaMiC7Y4AgAgBCAMIAuaoiIOtjgCDCAEIAogCUQAAAAAAADwP6AgC6KiIg+2OAIIIAQgCiAJRAAAAAAAAPC/oCALoqIiCbY4AgQgBCAOIA+gIAxEAAAAAAAA8D8gDaGgIgqjtjgCHCAEIAsgCaAgCqO2OAIYIAYEQANAIAAgBSAIbEEBdGogAiAIQQF0aiADIAQgBSAGEAMgCEEBaiIIIAZHDQALCyAFRQ0AQQAhCANAIAIgBiAIbEEBdGogASAIQQF0aiADIAQgBiAFEAMgCEEBaiIIIAVHDQALCwtxAQN/IAIgA2wiBQRAA0AgASAAKAIAIgRBEHZB/wFxIgIgAiAEQQh2Qf8BcSIDIAMgBEH/AXEiBEkbIAIgA0sbIgYgBiAEIAIgBEsbIAMgBEsbQQh0OwEAIAFBAmohASAAQQRqIQAgBUEBayIFDQALCwuZAgIDfwF8IAQgBWwhBAJ/IAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6AiC5lEAAAAAAAA4EFjBEAgC6oMAQtBgICAgHgLIQUgBARAIAdBCHQhCUEAIQYDQCAJIAIgBkEBdCIHai8BACIBIAMgB2ovAQBrIgcgB0EfdSIIaiAIc00EQCAAIAZBAnQiCGoiCiAFIAdsQYAQakEMdSABaiIHQYD+AyAHQYD+A0gbIgdBACAHQQBKG0EMdCABQQEgARtuIgEgCi0AAGxBgBBqQQx2OgAAIAAgCEEBcmoiByABIActAABsQYAQakEMdjoAACAAIAhBAnJqIgcgASAHLQAAbEGAEGpBDHY6AAALIAZBAWoiBiAERw0ACwsL';

},{}],13:[function(_dereq_,module,exports){
'use strict';

var GC_INTERVAL = 100;

function Pool(create, idle) {
  this.create = create;
  this.available = [];
  this.acquired = {};
  this.lastId = 1;
  this.timeoutId = 0;
  this.idle = idle || 2000;
}

Pool.prototype.acquire = function () {
  var _this = this;

  var resource;

  if (this.available.length !== 0) {
    resource = this.available.pop();
  } else {
    resource = this.create();
    resource.id = this.lastId++;

    resource.release = function () {
      return _this.release(resource);
    };
  }

  this.acquired[resource.id] = resource;
  return resource;
};

Pool.prototype.release = function (resource) {
  var _this2 = this;

  delete this.acquired[resource.id];
  resource.lastUsed = Date.now();
  this.available.push(resource);

  if (this.timeoutId === 0) {
    this.timeoutId = setTimeout(function () {
      return _this2.gc();
    }, GC_INTERVAL);
  }
};

Pool.prototype.gc = function () {
  var _this3 = this;

  var now = Date.now();
  this.available = this.available.filter(function (resource) {
    if (now - resource.lastUsed > _this3.idle) {
      resource.destroy();
      return false;
    }

    return true;
  });

  if (this.available.length !== 0) {
    this.timeoutId = setTimeout(function () {
      return _this3.gc();
    }, GC_INTERVAL);
  } else {
    this.timeoutId = 0;
  }
};

module.exports = Pool;

},{}],14:[function(_dereq_,module,exports){
// Add intermediate resizing steps when scaling down by a very large factor.
//
// For example, when resizing 10000x10000 down to 10x10, it'll resize it to
// 300x300 first.
//
// It's needed because tiler has issues when the entire tile is scaled down
// to a few pixels (1024px source tile with border size 3 should result in
// at least 3+3+2 = 8px target tile, so max scale factor is 128 here).
//
// Also, adding intermediate steps can speed up processing if we use lower
// quality algorithms for first stages.
//
'use strict'; // min size = 0 results in infinite loop,
// min size = 1 can consume large amount of memory

var MIN_INNER_TILE_SIZE = 2;

module.exports = function createStages(fromWidth, fromHeight, toWidth, toHeight, srcTileSize, destTileBorder) {
  var scaleX = toWidth / fromWidth;
  var scaleY = toHeight / fromHeight; // derived from createRegions equation:
  // innerTileWidth = pixelFloor(srcTileSize * scaleX) - 2 * destTileBorder;

  var minScale = (2 * destTileBorder + MIN_INNER_TILE_SIZE + 1) / srcTileSize; // refuse to scale image multiple times by less than twice each time,
  // it could only happen because of invalid options

  if (minScale > 0.5) return [[toWidth, toHeight]];
  var stageCount = Math.ceil(Math.log(Math.min(scaleX, scaleY)) / Math.log(minScale)); // no additional resizes are necessary,
  // stageCount can be zero or be negative when enlarging the image

  if (stageCount <= 1) return [[toWidth, toHeight]];
  var result = [];

  for (var i = 0; i < stageCount; i++) {
    var width = Math.round(Math.pow(Math.pow(fromWidth, stageCount - i - 1) * Math.pow(toWidth, i + 1), 1 / stageCount));
    var height = Math.round(Math.pow(Math.pow(fromHeight, stageCount - i - 1) * Math.pow(toHeight, i + 1), 1 / stageCount));
    result.push([width, height]);
  }

  return result;
};

},{}],15:[function(_dereq_,module,exports){
// Split original image into multiple 1024x1024 chunks to reduce memory usage
// (images have to be unpacked into typed arrays for resizing) and allow
// parallel processing of multiple tiles at a time.
//
'use strict';
/*
 * pixelFloor and pixelCeil are modified versions of Math.floor and Math.ceil
 * functions which take into account floating point arithmetic errors.
 * Those errors can cause undesired increments/decrements of sizes and offsets:
 * Math.ceil(36 / (36 / 500)) = 501
 * pixelCeil(36 / (36 / 500)) = 500
 */

var PIXEL_EPSILON = 1e-5;

function pixelFloor(x) {
  var nearest = Math.round(x);

  if (Math.abs(x - nearest) < PIXEL_EPSILON) {
    return nearest;
  }

  return Math.floor(x);
}

function pixelCeil(x) {
  var nearest = Math.round(x);

  if (Math.abs(x - nearest) < PIXEL_EPSILON) {
    return nearest;
  }

  return Math.ceil(x);
}

module.exports = function createRegions(options) {
  var scaleX = options.toWidth / options.width;
  var scaleY = options.toHeight / options.height;
  var innerTileWidth = pixelFloor(options.srcTileSize * scaleX) - 2 * options.destTileBorder;
  var innerTileHeight = pixelFloor(options.srcTileSize * scaleY) - 2 * options.destTileBorder; // prevent infinite loop, this should never happen

  if (innerTileWidth < 1 || innerTileHeight < 1) {
    throw new Error('Internal error in pica: target tile width/height is too small.');
  }

  var x, y;
  var innerX, innerY, toTileWidth, toTileHeight;
  var tiles = [];
  var tile; // we go top-to-down instead of left-to-right to make image displayed from top to
  // doesn in the browser

  for (innerY = 0; innerY < options.toHeight; innerY += innerTileHeight) {
    for (innerX = 0; innerX < options.toWidth; innerX += innerTileWidth) {
      x = innerX - options.destTileBorder;

      if (x < 0) {
        x = 0;
      }

      toTileWidth = innerX + innerTileWidth + options.destTileBorder - x;

      if (x + toTileWidth >= options.toWidth) {
        toTileWidth = options.toWidth - x;
      }

      y = innerY - options.destTileBorder;

      if (y < 0) {
        y = 0;
      }

      toTileHeight = innerY + innerTileHeight + options.destTileBorder - y;

      if (y + toTileHeight >= options.toHeight) {
        toTileHeight = options.toHeight - y;
      }

      tile = {
        toX: x,
        toY: y,
        toWidth: toTileWidth,
        toHeight: toTileHeight,
        toInnerX: innerX,
        toInnerY: innerY,
        toInnerWidth: innerTileWidth,
        toInnerHeight: innerTileHeight,
        offsetX: x / scaleX - pixelFloor(x / scaleX),
        offsetY: y / scaleY - pixelFloor(y / scaleY),
        scaleX: scaleX,
        scaleY: scaleY,
        x: pixelFloor(x / scaleX),
        y: pixelFloor(y / scaleY),
        width: pixelCeil(toTileWidth / scaleX),
        height: pixelCeil(toTileHeight / scaleY)
      };
      tiles.push(tile);
    }
  }

  return tiles;
};

},{}],16:[function(_dereq_,module,exports){
'use strict';

function objClass(obj) {
  return Object.prototype.toString.call(obj);
}

module.exports.isCanvas = function isCanvas(element) {
  var cname = objClass(element);
  return cname === '[object HTMLCanvasElement]'
  /* browser */
  || cname === '[object OffscreenCanvas]' || cname === '[object Canvas]'
  /* node-canvas */
  ;
};

module.exports.isImage = function isImage(element) {
  return objClass(element) === '[object HTMLImageElement]';
};

module.exports.isImageBitmap = function isImageBitmap(element) {
  return objClass(element) === '[object ImageBitmap]';
};

module.exports.limiter = function limiter(concurrency) {
  var active = 0,
      queue = [];

  function roll() {
    if (active < concurrency && queue.length) {
      active++;
      queue.shift()();
    }
  }

  return function limit(fn) {
    return new Promise(function (resolve, reject) {
      queue.push(function () {
        fn().then(function (result) {
          resolve(result);
          active--;
          roll();
        }, function (err) {
          reject(err);
          active--;
          roll();
        });
      });
      roll();
    });
  };
};

module.exports.cib_quality_name = function cib_quality_name(num) {
  switch (num) {
    case 0:
      return 'pixelated';

    case 1:
      return 'low';

    case 2:
      return 'medium';
  }

  return 'high';
};

module.exports.cib_support = function cib_support(createCanvas) {
  return Promise.resolve().then(function () {
    if (typeof createImageBitmap === 'undefined') {
      return false;
    }

    var c = createCanvas(100, 100);
    return createImageBitmap(c, 0, 0, 100, 100, {
      resizeWidth: 10,
      resizeHeight: 10,
      resizeQuality: 'high'
    }).then(function (bitmap) {
      var status = bitmap.width === 10; // Branch below is filtered on upper level. We do not call resize
      // detection for basic ImageBitmap.
      //
      // https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
      // old Crome 51 has ImageBitmap without .close(). Then this code
      // will throw and return 'false' as expected.
      //

      bitmap.close();
      c = null;
      return status;
    });
  })["catch"](function () {
    return false;
  });
};

module.exports.worker_offscreen_canvas_support = function worker_offscreen_canvas_support() {
  return new Promise(function (resolve, reject) {
    if (typeof OffscreenCanvas === 'undefined') {
      // if OffscreenCanvas is present, we assume browser supports Worker and built-in Promise as well
      resolve(false);
      return;
    }

    function workerPayload(self) {
      if (typeof createImageBitmap === 'undefined') {
        self.postMessage(false);
        return;
      }

      Promise.resolve().then(function () {
        var canvas = new OffscreenCanvas(10, 10); // test that 2d context can be used in worker

        var ctx = canvas.getContext('2d');
        ctx.rect(0, 0, 1, 1); // test that cib can be used to return image bitmap from worker

        return createImageBitmap(canvas, 0, 0, 1, 1);
      }).then(function () {
        return self.postMessage(true);
      }, function () {
        return self.postMessage(false);
      });
    }

    var code = btoa("(".concat(workerPayload.toString(), ")(self);"));
    var w = new Worker("data:text/javascript;base64,".concat(code));

    w.onmessage = function (ev) {
      return resolve(ev.data);
    };

    w.onerror = reject;
  }).then(function (result) {
    return result;
  }, function () {
    return false;
  });
}; // Check if canvas.getContext('2d').getImageData can be used,
// FireFox randomizes the output of that function in `privacy.resistFingerprinting` mode


module.exports.can_use_canvas = function can_use_canvas(createCanvas) {
  var usable = false;

  try {
    var canvas = createCanvas(2, 1);
    var ctx = canvas.getContext('2d');
    var d = ctx.createImageData(2, 1);
    d.data[0] = 12;
    d.data[1] = 23;
    d.data[2] = 34;
    d.data[3] = 255;
    d.data[4] = 45;
    d.data[5] = 56;
    d.data[6] = 67;
    d.data[7] = 255;
    ctx.putImageData(d, 0, 0);
    d = null;
    d = ctx.getImageData(0, 0, 2, 1);

    if (d.data[0] === 12 && d.data[1] === 23 && d.data[2] === 34 && d.data[3] === 255 && d.data[4] === 45 && d.data[5] === 56 && d.data[6] === 67 && d.data[7] === 255) {
      usable = true;
    }
  } catch (err) {}

  return usable;
}; // Check if createImageBitmap(img, sx, sy, sw, sh) signature works correctly
// with JPEG images oriented with Exif;
// https://bugs.chromium.org/p/chromium/issues/detail?id=1220671
// TODO: remove after it's fixed in chrome for at least 2 releases


module.exports.cib_can_use_region = function cib_can_use_region() {
  return new Promise(function (resolve) {
    // `Image` check required for use in `ServiceWorker`
    if (typeof Image === 'undefined' || typeof createImageBitmap === 'undefined') {
      resolve(false);
      return;
    }

    var image = new Image();
    image.src = 'data:image/jpeg;base64,' + '/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAA' + 'AABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9' + 'sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRc' + 'ZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoa' + 'GhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRA' + 'f/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAA' + 'IQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAA' + 'AAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIB' + 'AT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAA' + 'AAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAA' + 'AAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQ' + 'QAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z';

    image.onload = function () {
      createImageBitmap(image, 0, 0, image.width, image.height).then(function (bitmap) {
        if (bitmap.width === image.width && bitmap.height === image.height) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, function () {
        return resolve(false);
      });
    };

    image.onerror = function () {
      return resolve(false);
    };
  });
};

},{}],17:[function(_dereq_,module,exports){
// Web Worker wrapper for image resize function
'use strict';

module.exports = function () {
  var MathLib = _dereq_('./mathlib');

  var mathLib;
  /* eslint-disable no-undef */

  onmessage = function onmessage(ev) {
    var tileOpts = ev.data.opts;
    var returnBitmap = false;

    if (!tileOpts.src && tileOpts.srcBitmap) {
      var canvas = new OffscreenCanvas(tileOpts.width, tileOpts.height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(tileOpts.srcBitmap, 0, 0);
      tileOpts.src = ctx.getImageData(0, 0, tileOpts.width, tileOpts.height).data;
      canvas.width = canvas.height = 0;
      canvas = null;
      tileOpts.srcBitmap.close();
      tileOpts.srcBitmap = null; // Temporary force out data to typed array, because Chrome have artefacts
      // https://github.com/nodeca/pica/issues/223
      // returnBitmap = true;
    }

    if (!mathLib) mathLib = new MathLib(ev.data.features); // Use multimath's sync auto-init. Avoid Promise use in old browsers,
    // because polyfills are not propagated to webworker.

    var data = mathLib.resizeAndUnsharp(tileOpts);

    if (returnBitmap) {
      var toImageData = new ImageData(new Uint8ClampedArray(data), tileOpts.toWidth, tileOpts.toHeight);

      var _canvas = new OffscreenCanvas(tileOpts.toWidth, tileOpts.toHeight);

      var _ctx = _canvas.getContext('2d');

      _ctx.putImageData(toImageData, 0, 0);

      createImageBitmap(_canvas).then(function (bitmap) {
        postMessage({
          bitmap: bitmap
        }, [bitmap]);
      });
    } else {
      postMessage({
        data: data
      }, [data.buffer]);
    }
  };
};

},{"./mathlib":1}],18:[function(_dereq_,module,exports){
// Calculate Gaussian blur of an image using IIR filter
// The method is taken from Intel's white paper and code example attached to it:
// https://software.intel.com/en-us/articles/iir-gaussian-blur-filter
// -implementation-using-intel-advanced-vector-extensions

var a0, a1, a2, a3, b1, b2, left_corner, right_corner;

function gaussCoef(sigma) {
  if (sigma < 0.5) {
    sigma = 0.5;
  }

  var a = Math.exp(0.726 * 0.726) / sigma,
      g1 = Math.exp(-a),
      g2 = Math.exp(-2 * a),
      k = (1 - g1) * (1 - g1) / (1 + 2 * a * g1 - g2);

  a0 = k;
  a1 = k * (a - 1) * g1;
  a2 = k * (a + 1) * g1;
  a3 = -k * g2;
  b1 = 2 * g1;
  b2 = -g2;
  left_corner = (a0 + a1) / (1 - b1 - b2);
  right_corner = (a2 + a3) / (1 - b1 - b2);

  // Attempt to force type to FP32.
  return new Float32Array([ a0, a1, a2, a3, b1, b2, left_corner, right_corner ]);
}

function convolveMono16(src, out, line, coeff, width, height) {
  // takes src image and writes the blurred and transposed result into out

  var prev_src, curr_src, curr_out, prev_out, prev_prev_out;
  var src_index, out_index, line_index;
  var i, j;
  var coeff_a0, coeff_a1, coeff_b1, coeff_b2;

  for (i = 0; i < height; i++) {
    src_index = i * width;
    out_index = i;
    line_index = 0;

    // left to right
    prev_src = src[src_index];
    prev_prev_out = prev_src * coeff[6];
    prev_out = prev_prev_out;

    coeff_a0 = coeff[0];
    coeff_a1 = coeff[1];
    coeff_b1 = coeff[4];
    coeff_b2 = coeff[5];

    for (j = 0; j < width; j++) {
      curr_src = src[src_index];

      curr_out = curr_src * coeff_a0 +
                 prev_src * coeff_a1 +
                 prev_out * coeff_b1 +
                 prev_prev_out * coeff_b2;

      prev_prev_out = prev_out;
      prev_out = curr_out;
      prev_src = curr_src;

      line[line_index] = prev_out;
      line_index++;
      src_index++;
    }

    src_index--;
    line_index--;
    out_index += height * (width - 1);

    // right to left
    prev_src = src[src_index];
    prev_prev_out = prev_src * coeff[7];
    prev_out = prev_prev_out;
    curr_src = prev_src;

    coeff_a0 = coeff[2];
    coeff_a1 = coeff[3];

    for (j = width - 1; j >= 0; j--) {
      curr_out = curr_src * coeff_a0 +
                 prev_src * coeff_a1 +
                 prev_out * coeff_b1 +
                 prev_prev_out * coeff_b2;

      prev_prev_out = prev_out;
      prev_out = curr_out;

      prev_src = curr_src;
      curr_src = src[src_index];

      out[out_index] = line[line_index] + prev_out;

      src_index--;
      line_index--;
      out_index -= height;
    }
  }
}


function blurMono16(src, width, height, radius) {
  // Quick exit on zero radius
  if (!radius) { return; }

  var out      = new Uint16Array(src.length),
      tmp_line = new Float32Array(Math.max(width, height));

  var coeff = gaussCoef(radius);

  convolveMono16(src, out, tmp_line, coeff, width, height, radius);
  convolveMono16(out, src, tmp_line, coeff, height, width, radius);
}

module.exports = blurMono16;

},{}],19:[function(_dereq_,module,exports){
'use strict';


var assign         = _dereq_('object-assign');
var base64decode   = _dereq_('./lib/base64decode');
var hasWebAssembly = _dereq_('./lib/wa_detect');


var DEFAULT_OPTIONS = {
  js: true,
  wasm: true
};


function MultiMath(options) {
  if (!(this instanceof MultiMath)) return new MultiMath(options);

  var opts = assign({}, DEFAULT_OPTIONS, options || {});

  this.options         = opts;

  this.__cache         = {};

  this.__init_promise  = null;
  this.__modules       = opts.modules || {};
  this.__memory        = null;
  this.__wasm          = {};

  this.__isLE = ((new Uint32Array((new Uint8Array([ 1, 0, 0, 0 ])).buffer))[0] === 1);

  if (!this.options.js && !this.options.wasm) {
    throw new Error('mathlib: at least "js" or "wasm" should be enabled');
  }
}


MultiMath.prototype.has_wasm = hasWebAssembly;


MultiMath.prototype.use = function (module) {
  this.__modules[module.name] = module;

  // Pin the best possible implementation
  if (this.options.wasm && this.has_wasm() && module.wasm_fn) {
    this[module.name] = module.wasm_fn;
  } else {
    this[module.name] = module.fn;
  }

  return this;
};


MultiMath.prototype.init = function () {
  if (this.__init_promise) return this.__init_promise;

  if (!this.options.js && this.options.wasm && !this.has_wasm()) {
    return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));
  }

  var self = this;

  this.__init_promise = Promise.all(Object.keys(self.__modules).map(function (name) {
    var module = self.__modules[name];

    if (!self.options.wasm || !self.has_wasm() || !module.wasm_fn) return null;

    // If already compiled - exit
    if (self.__wasm[name]) return null;

    // Compile wasm source
    return WebAssembly.compile(self.__base64decode(module.wasm_src))
      .then(function (m) { self.__wasm[name] = m; });
  }))
    .then(function () { return self; });

  return this.__init_promise;
};


////////////////////////////////////////////////////////////////////////////////
// Methods below are for internal use from plugins


// Simple decode base64 to typed array. Useful to load embedded webassembly
// code. You probably don't need to call this method directly.
//
MultiMath.prototype.__base64decode = base64decode;


// Increase current memory to include specified number of bytes. Do nothing if
// size is already ok. You probably don't need to call this method directly,
// because it will be invoked from `.__instance()`.
//
MultiMath.prototype.__reallocate = function mem_grow_to(bytes) {
  if (!this.__memory) {
    this.__memory = new WebAssembly.Memory({
      initial: Math.ceil(bytes / (64 * 1024))
    });
    return this.__memory;
  }

  var mem_size = this.__memory.buffer.byteLength;

  if (mem_size < bytes) {
    this.__memory.grow(Math.ceil((bytes - mem_size) / (64 * 1024)));
  }

  return this.__memory;
};


// Returns instantinated webassembly item by name, with specified memory size
// and environment.
// - use cache if available
// - do sync module init, if async init was not called earlier
// - allocate memory if not enougth
// - can export functions to webassembly via "env_extra",
//   for example, { exp: Math.exp }
//
MultiMath.prototype.__instance = function instance(name, memsize, env_extra) {
  if (memsize) this.__reallocate(memsize);

  // If .init() was not called, do sync compile
  if (!this.__wasm[name]) {
    var module = this.__modules[name];
    this.__wasm[name] = new WebAssembly.Module(this.__base64decode(module.wasm_src));
  }

  if (!this.__cache[name]) {
    var env_base = {
      memoryBase: 0,
      memory: this.__memory,
      tableBase: 0,
      table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    };

    this.__cache[name] = new WebAssembly.Instance(this.__wasm[name], {
      env: assign(env_base, env_extra || {})
    });
  }

  return this.__cache[name];
};


// Helper to calculate memory aligh for pointers. Webassembly does not require
// this, but you may wish to experiment. Default base = 8;
//
MultiMath.prototype.__align = function align(number, base) {
  base = base || 8;
  var reminder = number % base;
  return number + (reminder ? base - reminder : 0);
};


module.exports = MultiMath;

},{"./lib/base64decode":20,"./lib/wa_detect":21,"object-assign":22}],20:[function(_dereq_,module,exports){
// base64 decode str -> Uint8Array, to load WA modules
//
'use strict';


var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';


module.exports = function base64decode(str) {
  var input = str.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max   = input.length;

  var out = new Uint8Array((max * 3) >> 2);

  // Collect by 6*4 bits (3 bytes)

  var bits = 0;
  var ptr  = 0;

  for (var idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      out[ptr++] = (bits >> 16) & 0xFF;
      out[ptr++] = (bits >> 8) & 0xFF;
      out[ptr++] = bits & 0xFF;
    }

    bits = (bits << 6) | BASE64_MAP.indexOf(input.charAt(idx));
  }

  // Dump tail

  var tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    out[ptr++] = (bits >> 16) & 0xFF;
    out[ptr++] = (bits >> 8) & 0xFF;
    out[ptr++] = bits & 0xFF;
  } else if (tailbits === 18) {
    out[ptr++] = (bits >> 10) & 0xFF;
    out[ptr++] = (bits >> 2) & 0xFF;
  } else if (tailbits === 12) {
    out[ptr++] = (bits >> 4) & 0xFF;
  }

  return out;
};

},{}],21:[function(_dereq_,module,exports){
// Detect WebAssembly support.
// - Check global WebAssembly object
// - Try to load simple module (can be disabled via CSP)
//
'use strict';


var wa;


module.exports = function hasWebAssembly() {
  // use cache if called before;
  if (typeof wa !== 'undefined') return wa;

  wa = false;

  if (typeof WebAssembly === 'undefined') return wa;

  // If WebAssenbly is disabled, code can throw on compile
  try {
    // https://github.com/brion/min-wasm-fail/blob/master/min-wasm-fail.in.js
    // Additional check that WA internals are correct

    /* eslint-disable comma-spacing, max-len */
    var bin      = new Uint8Array([ 0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11 ]);
    var module   = new WebAssembly.Module(bin);
    var instance = new WebAssembly.Instance(module, {});

    // test storing to and loading from a non-zero location via a parameter.
    // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
    if (instance.exports.test(4) !== 0) wa = true;

    return wa;
  } catch (__) {}

  return wa;
};

},{}],22:[function(_dereq_,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],23:[function(_dereq_,module,exports){
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);

    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }

    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            'function(require,module,exports){' + fn + '(self); }',
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        'function(require,module,exports){' +
            // try to call default if defined to also support babel esmodule exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);' +
        '}',
        scache
    ];

    var workerSources = {};
    resolveSources(skey);

    function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) {
                resolveSources(depKey);
            }
        }
    }

    var src = '(' + bundleFn + ')({'
        + Object.keys(workerSources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;

    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    var blob = new Blob([src], { type: 'text/javascript' });
    if (options && options.bare) { return blob; }
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};

},{}],"/index.js":[function(_dereq_,module,exports){
'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = _dereq_('object-assign');

var webworkify = _dereq_('webworkify');

var MathLib = _dereq_('./lib/mathlib');

var Pool = _dereq_('./lib/pool');

var utils = _dereq_('./lib/utils');

var worker = _dereq_('./lib/worker');

var createStages = _dereq_('./lib/stepper');

var createRegions = _dereq_('./lib/tiler');

var filter_info = _dereq_('./lib/mm_resize/resize_filter_info'); // Deduplicate pools & limiters with the same configs
// when user creates multiple pica instances.


var singletones = {};
var NEED_SAFARI_FIX = false;

try {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    NEED_SAFARI_FIX = navigator.userAgent.indexOf('Safari') >= 0;
  }
} catch (e) {}

var concurrency = 1;

if (typeof navigator !== 'undefined') {
  concurrency = Math.min(navigator.hardwareConcurrency || 1, 4);
}

var DEFAULT_PICA_OPTS = {
  tile: 1024,
  concurrency: concurrency,
  features: ['js', 'wasm', 'ww'],
  idle: 2000,
  createCanvas: function createCanvas(width, height) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = width;
    tmpCanvas.height = height;
    return tmpCanvas;
  }
};
var DEFAULT_RESIZE_OPTS = {
  filter: 'mks2013',
  unsharpAmount: 0,
  unsharpRadius: 0.0,
  unsharpThreshold: 0
};
var CAN_NEW_IMAGE_DATA = false;
var CAN_CREATE_IMAGE_BITMAP = false;
var CAN_USE_CANVAS_GET_IMAGE_DATA = false;
var CAN_USE_OFFSCREEN_CANVAS = false;
var CAN_USE_CIB_REGION_FOR_IMAGE = false;

function workerFabric() {
  return {
    value: webworkify(worker),
    destroy: function destroy() {
      this.value.terminate();

      if (typeof window !== 'undefined') {
        var url = window.URL || window.webkitURL || window.mozURL || window.msURL;

        if (url && url.revokeObjectURL && this.value.objectURL) {
          url.revokeObjectURL(this.value.objectURL);
        }
      }
    }
  };
} ////////////////////////////////////////////////////////////////////////////////
// API methods


function Pica(options) {
  if (!(this instanceof Pica)) return new Pica(options);
  this.options = assign({}, DEFAULT_PICA_OPTS, options || {});
  var limiter_key = "lk_".concat(this.options.concurrency); // Share limiters to avoid multiple parallel workers when user creates
  // multiple pica instances.

  this.__limit = singletones[limiter_key] || utils.limiter(this.options.concurrency);
  if (!singletones[limiter_key]) singletones[limiter_key] = this.__limit; // List of supported features, according to options & browser/node.js

  this.features = {
    js: false,
    // pure JS implementation, can be disabled for testing
    wasm: false,
    // webassembly implementation for heavy functions
    cib: false,
    // resize via createImageBitmap (only FF at this moment)
    ww: false // webworkers

  };
  this.__workersPool = null; // Store requested features for webworkers

  this.__requested_features = [];
  this.__mathlib = null;
}

Pica.prototype.init = function () {
  var _this = this;

  if (this.__initPromise) return this.__initPromise; // Test if we can create ImageData without canvas and memory copy

  if (typeof ImageData !== 'undefined' && typeof Uint8ClampedArray !== 'undefined') {
    try {
      /* eslint-disable no-new */
      new ImageData(new Uint8ClampedArray(400), 10, 10);
      CAN_NEW_IMAGE_DATA = true;
    } catch (__) {}
  } // ImageBitmap can be effective in 2 places:
  //
  // 1. Threaded jpeg unpack (basic)
  // 2. Built-in resize (blocked due problem in chrome, see issue #89)
  //
  // For basic use we also need ImageBitmap wo support .close() method,
  // see https://developer.mozilla.org/ru/docs/Web/API/ImageBitmap


  if (typeof ImageBitmap !== 'undefined') {
    if (ImageBitmap.prototype && ImageBitmap.prototype.close) {
      CAN_CREATE_IMAGE_BITMAP = true;
    } else {
      this.debug('ImageBitmap does not support .close(), disabled');
    }
  }

  var features = this.options.features.slice();

  if (features.indexOf('all') >= 0) {
    features = ['cib', 'wasm', 'js', 'ww'];
  }

  this.__requested_features = features;
  this.__mathlib = new MathLib(features); // Check WebWorker support if requested

  if (features.indexOf('ww') >= 0) {
    if (typeof window !== 'undefined' && 'Worker' in window) {
      // IE <= 11 don't allow to create webworkers from string. We should check it.
      // https://connect.microsoft.com/IE/feedback/details/801810/web-workers-from-blob-urls-in-ie-10-and-11
      try {
        var wkr = _dereq_('webworkify')(function () {});

        wkr.terminate();
        this.features.ww = true; // pool uniqueness depends on pool config + webworker config

        var wpool_key = "wp_".concat(JSON.stringify(this.options));

        if (singletones[wpool_key]) {
          this.__workersPool = singletones[wpool_key];
        } else {
          this.__workersPool = new Pool(workerFabric, this.options.idle);
          singletones[wpool_key] = this.__workersPool;
        }
      } catch (__) {}
    }
  }

  var initMath = this.__mathlib.init().then(function (mathlib) {
    // Copy detected features
    assign(_this.features, mathlib.features);
  });

  var checkCibResize;

  if (!CAN_CREATE_IMAGE_BITMAP) {
    checkCibResize = Promise.resolve(false);
  } else {
    checkCibResize = utils.cib_support(this.options.createCanvas).then(function (status) {
      if (_this.features.cib && features.indexOf('cib') < 0) {
        _this.debug('createImageBitmap() resize supported, but disabled by config');

        return;
      }

      if (features.indexOf('cib') >= 0) _this.features.cib = status;
    });
  }

  CAN_USE_CANVAS_GET_IMAGE_DATA = utils.can_use_canvas(this.options.createCanvas);
  var checkOffscreenCanvas;

  if (CAN_CREATE_IMAGE_BITMAP && CAN_NEW_IMAGE_DATA && features.indexOf('ww') !== -1) {
    checkOffscreenCanvas = utils.worker_offscreen_canvas_support();
  } else {
    checkOffscreenCanvas = Promise.resolve(false);
  }

  checkOffscreenCanvas = checkOffscreenCanvas.then(function (result) {
    CAN_USE_OFFSCREEN_CANVAS = result;
  }); // we use createImageBitmap to crop image data and pass it to workers,
  // so need to check whether function works correctly;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1220671

  var checkCibRegion = utils.cib_can_use_region().then(function (result) {
    CAN_USE_CIB_REGION_FOR_IMAGE = result;
  }); // Init math lib. That's async because can load some

  this.__initPromise = Promise.all([initMath, checkCibResize, checkOffscreenCanvas, checkCibRegion]).then(function () {
    return _this;
  });
  return this.__initPromise;
}; // Call resizer in webworker or locally, depending on config


Pica.prototype.__invokeResize = function (tileOpts, opts) {
  var _this2 = this;

  // Share cache between calls:
  //
  // - wasm instance
  // - wasm memory object
  //
  opts.__mathCache = opts.__mathCache || {};
  return Promise.resolve().then(function () {
    if (!_this2.features.ww) {
      // not possible to have ImageBitmap here if user disabled WW
      return {
        data: _this2.__mathlib.resizeAndUnsharp(tileOpts, opts.__mathCache)
      };
    }

    return new Promise(function (resolve, reject) {
      var w = _this2.__workersPool.acquire();

      if (opts.cancelToken) opts.cancelToken["catch"](function (err) {
        return reject(err);
      });

      w.value.onmessage = function (ev) {
        w.release();
        if (ev.data.err) reject(ev.data.err);else resolve(ev.data);
      };

      var transfer = [];
      if (tileOpts.src) transfer.push(tileOpts.src.buffer);
      if (tileOpts.srcBitmap) transfer.push(tileOpts.srcBitmap);
      w.value.postMessage({
        opts: tileOpts,
        features: _this2.__requested_features,
        preload: {
          wasm_nodule: _this2.__mathlib.__
        }
      }, transfer);
    });
  });
}; // this function can return promise if createImageBitmap is used


Pica.prototype.__extractTileData = function (tile, from, opts, stageEnv, extractTo) {
  if (this.features.ww && CAN_USE_OFFSCREEN_CANVAS && ( // createImageBitmap doesn't work for images (Image, ImageBitmap) with Exif orientation in Chrome,
  // can use canvas because canvas doesn't have orientation;
  // see https://bugs.chromium.org/p/chromium/issues/detail?id=1220671
  utils.isCanvas(from) || CAN_USE_CIB_REGION_FOR_IMAGE)) {
    this.debug('Create tile for OffscreenCanvas');
    return createImageBitmap(stageEnv.srcImageBitmap || from, tile.x, tile.y, tile.width, tile.height).then(function (bitmap) {
      extractTo.srcBitmap = bitmap;
      return extractTo;
    });
  } // Extract tile RGBA buffer, depending on input type


  if (utils.isCanvas(from)) {
    if (!stageEnv.srcCtx) stageEnv.srcCtx = from.getContext('2d'); // If input is Canvas - extract region data directly

    this.debug('Get tile pixel data');
    extractTo.src = stageEnv.srcCtx.getImageData(tile.x, tile.y, tile.width, tile.height).data;
    return extractTo;
  } // If input is Image or decoded to ImageBitmap,
  // draw region to temporary canvas and extract data from it
  //
  // Note! Attempt to reuse this canvas causes significant slowdown in chrome
  //


  this.debug('Draw tile imageBitmap/image to temporary canvas');
  var tmpCanvas = this.options.createCanvas(tile.width, tile.height);
  var tmpCtx = tmpCanvas.getContext('2d');
  tmpCtx.globalCompositeOperation = 'copy';
  tmpCtx.drawImage(stageEnv.srcImageBitmap || from, tile.x, tile.y, tile.width, tile.height, 0, 0, tile.width, tile.height);
  this.debug('Get tile pixel data');
  extractTo.src = tmpCtx.getImageData(0, 0, tile.width, tile.height).data; // Safari 12 workaround
  // https://github.com/nodeca/pica/issues/199

  tmpCanvas.width = tmpCanvas.height = 0;
  return extractTo;
};

Pica.prototype.__landTileData = function (tile, result, stageEnv) {
  var toImageData;
  this.debug('Convert raw rgba tile result to ImageData');

  if (result.bitmap) {
    stageEnv.toCtx.drawImage(result.bitmap, tile.toX, tile.toY);
    return null;
  }

  if (CAN_NEW_IMAGE_DATA) {
    // this branch is for modern browsers
    // If `new ImageData()` & Uint8ClampedArray suported
    toImageData = new ImageData(new Uint8ClampedArray(result.data), tile.toWidth, tile.toHeight);
  } else {
    // fallback for `node-canvas` and old browsers
    // (IE11 has ImageData but does not support `new ImageData()`)
    toImageData = stageEnv.toCtx.createImageData(tile.toWidth, tile.toHeight);

    if (toImageData.data.set) {
      toImageData.data.set(result.data);
    } else {
      // IE9 don't have `.set()`
      for (var i = toImageData.data.length - 1; i >= 0; i--) {
        toImageData.data[i] = result.data[i];
      }
    }
  }

  this.debug('Draw tile');

  if (NEED_SAFARI_FIX) {
    // Safari draws thin white stripes between tiles without this fix
    stageEnv.toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth + 1e-5, tile.toInnerHeight + 1e-5);
  } else {
    stageEnv.toCtx.putImageData(toImageData, tile.toX, tile.toY, tile.toInnerX - tile.toX, tile.toInnerY - tile.toY, tile.toInnerWidth, tile.toInnerHeight);
  }

  return null;
};

Pica.prototype.__tileAndResize = function (from, to, opts) {
  var _this3 = this;

  var stageEnv = {
    srcCtx: null,
    srcImageBitmap: null,
    isImageBitmapReused: false,
    toCtx: null
  };

  var processTile = function processTile(tile) {
    return _this3.__limit(function () {
      if (opts.canceled) return opts.cancelToken;
      var tileOpts = {
        width: tile.width,
        height: tile.height,
        toWidth: tile.toWidth,
        toHeight: tile.toHeight,
        scaleX: tile.scaleX,
        scaleY: tile.scaleY,
        offsetX: tile.offsetX,
        offsetY: tile.offsetY,
        filter: opts.filter,
        unsharpAmount: opts.unsharpAmount,
        unsharpRadius: opts.unsharpRadius,
        unsharpThreshold: opts.unsharpThreshold
      };

      _this3.debug('Invoke resize math');

      return Promise.resolve(tileOpts).then(function (tileOpts) {
        return _this3.__extractTileData(tile, from, opts, stageEnv, tileOpts);
      }).then(function (tileOpts) {
        _this3.debug('Invoke resize math');

        return _this3.__invokeResize(tileOpts, opts);
      }).then(function (result) {
        if (opts.canceled) return opts.cancelToken;
        stageEnv.srcImageData = null;
        return _this3.__landTileData(tile, result, stageEnv);
      });
    });
  }; // Need to normalize data source first. It can be canvas or image.
  // If image - try to decode in background if possible


  return Promise.resolve().then(function () {
    stageEnv.toCtx = to.getContext('2d');
    if (utils.isCanvas(from)) return null;

    if (utils.isImageBitmap(from)) {
      stageEnv.srcImageBitmap = from;
      stageEnv.isImageBitmapReused = true;
      return null;
    }

    if (utils.isImage(from)) {
      // try do decode image in background for faster next operations;
      // if we're using offscreen canvas, cib is called per tile, so not needed here
      if (!CAN_CREATE_IMAGE_BITMAP) return null;

      _this3.debug('Decode image via createImageBitmap');

      return createImageBitmap(from).then(function (imageBitmap) {
        stageEnv.srcImageBitmap = imageBitmap;
      }) // Suppress error to use fallback, if method fails
      // https://github.com/nodeca/pica/issues/190

      /* eslint-disable no-unused-vars */
      ["catch"](function (e) {
        return null;
      });
    }

    throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');
  }).then(function () {
    if (opts.canceled) return opts.cancelToken;

    _this3.debug('Calculate tiles'); //
    // Here we are with "normalized" source,
    // follow to tiling
    //


    var regions = createRegions({
      width: opts.width,
      height: opts.height,
      srcTileSize: _this3.options.tile,
      toWidth: opts.toWidth,
      toHeight: opts.toHeight,
      destTileBorder: opts.__destTileBorder
    });
    var jobs = regions.map(function (tile) {
      return processTile(tile);
    });

    function cleanup(stageEnv) {
      if (stageEnv.srcImageBitmap) {
        if (!stageEnv.isImageBitmapReused) stageEnv.srcImageBitmap.close();
        stageEnv.srcImageBitmap = null;
      }
    }

    _this3.debug('Process tiles');

    return Promise.all(jobs).then(function () {
      _this3.debug('Finished!');

      cleanup(stageEnv);
      return to;
    }, function (err) {
      cleanup(stageEnv);
      throw err;
    });
  });
};

Pica.prototype.__processStages = function (stages, from, to, opts) {
  var _this4 = this;

  if (opts.canceled) return opts.cancelToken;

  var _stages$shift = stages.shift(),
      _stages$shift2 = _slicedToArray(_stages$shift, 2),
      toWidth = _stages$shift2[0],
      toHeight = _stages$shift2[1];

  var isLastStage = stages.length === 0; // Optimization for legacy filters -
  // only use user-defined quality for the last stage,
  // use simpler (Hamming) filter for the first stages where
  // scale factor is large enough (more than 2-3)
  //
  // For advanced filters (mks2013 and custom) - skip optimization,
  // because need to apply sharpening every time

  var filter;
  if (isLastStage || filter_info.q2f.indexOf(opts.filter) < 0) filter = opts.filter;else if (opts.filter === 'box') filter = 'box';else filter = 'hamming';
  opts = assign({}, opts, {
    toWidth: toWidth,
    toHeight: toHeight,
    filter: filter
  });
  var tmpCanvas;

  if (!isLastStage) {
    // create temporary canvas
    tmpCanvas = this.options.createCanvas(toWidth, toHeight);
  }

  return this.__tileAndResize(from, isLastStage ? to : tmpCanvas, opts).then(function () {
    if (isLastStage) return to;
    opts.width = toWidth;
    opts.height = toHeight;
    return _this4.__processStages(stages, tmpCanvas, to, opts);
  }).then(function (res) {
    if (tmpCanvas) {
      // Safari 12 workaround
      // https://github.com/nodeca/pica/issues/199
      tmpCanvas.width = tmpCanvas.height = 0;
    }

    return res;
  });
};

Pica.prototype.__resizeViaCreateImageBitmap = function (from, to, opts) {
  var _this5 = this;

  var toCtx = to.getContext('2d');
  this.debug('Resize via createImageBitmap()');
  return createImageBitmap(from, {
    resizeWidth: opts.toWidth,
    resizeHeight: opts.toHeight,
    resizeQuality: utils.cib_quality_name(filter_info.f2q[opts.filter])
  }).then(function (imageBitmap) {
    if (opts.canceled) return opts.cancelToken; // if no unsharp - draw directly to output canvas

    if (!opts.unsharpAmount) {
      toCtx.drawImage(imageBitmap, 0, 0);
      imageBitmap.close();
      toCtx = null;

      _this5.debug('Finished!');

      return to;
    }

    _this5.debug('Unsharp result');

    var tmpCanvas = _this5.options.createCanvas(opts.toWidth, opts.toHeight);

    var tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.drawImage(imageBitmap, 0, 0);
    imageBitmap.close();
    var iData = tmpCtx.getImageData(0, 0, opts.toWidth, opts.toHeight);

    _this5.__mathlib.unsharp_mask(iData.data, opts.toWidth, opts.toHeight, opts.unsharpAmount, opts.unsharpRadius, opts.unsharpThreshold);

    toCtx.putImageData(iData, 0, 0); // Safari 12 workaround
    // https://github.com/nodeca/pica/issues/199

    tmpCanvas.width = tmpCanvas.height = 0;
    iData = tmpCtx = tmpCanvas = toCtx = null;

    _this5.debug('Finished!');

    return to;
  });
};

Pica.prototype.resize = function (from, to, options) {
  var _this6 = this;

  this.debug('Start resize...');
  var opts = assign({}, DEFAULT_RESIZE_OPTS);

  if (!isNaN(options)) {
    opts = assign(opts, {
      quality: options
    });
  } else if (options) {
    opts = assign(opts, options);
  }

  opts.toWidth = to.width;
  opts.toHeight = to.height;
  opts.width = from.naturalWidth || from.width;
  opts.height = from.naturalHeight || from.height; // Legacy `.quality` option

  if (Object.prototype.hasOwnProperty.call(opts, 'quality')) {
    if (opts.quality < 0 || opts.quality > 3) {
      throw new Error("Pica: .quality should be [0..3], got ".concat(opts.quality));
    }

    opts.filter = filter_info.q2f[opts.quality];
  } // Prevent stepper from infinite loop


  if (to.width === 0 || to.height === 0) {
    return Promise.reject(new Error("Invalid output size: ".concat(to.width, "x").concat(to.height)));
  }

  if (opts.unsharpRadius > 2) opts.unsharpRadius = 2;
  opts.canceled = false;

  if (opts.cancelToken) {
    // Wrap cancelToken to avoid successive resolve & set flag
    opts.cancelToken = opts.cancelToken.then(function (data) {
      opts.canceled = true;
      throw data;
    }, function (err) {
      opts.canceled = true;
      throw err;
    });
  }

  var DEST_TILE_BORDER = 3; // Max possible filter window size

  opts.__destTileBorder = Math.ceil(Math.max(DEST_TILE_BORDER, 2.5 * opts.unsharpRadius | 0));
  return this.init().then(function () {
    if (opts.canceled) return opts.cancelToken; // if createImageBitmap supports resize, just do it and return

    if (_this6.features.cib) {
      if (filter_info.q2f.indexOf(opts.filter) >= 0) {
        return _this6.__resizeViaCreateImageBitmap(from, to, opts);
      }

      _this6.debug('cib is enabled, but not supports provided filter, fallback to manual math');
    }

    if (!CAN_USE_CANVAS_GET_IMAGE_DATA) {
      var err = new Error('Pica: cannot use getImageData on canvas, ' + "make sure fingerprinting protection isn't enabled");
      err.code = 'ERR_GET_IMAGE_DATA';
      throw err;
    } //
    // No easy way, let's resize manually via arrays
    //


    var stages = createStages(opts.width, opts.height, opts.toWidth, opts.toHeight, _this6.options.tile, opts.__destTileBorder);
    return _this6.__processStages(stages, from, to, opts);
  });
}; // RGBA buffer resize
//


Pica.prototype.resizeBuffer = function (options) {
  var _this7 = this;

  var opts = assign({}, DEFAULT_RESIZE_OPTS, options); // Legacy `.quality` option

  if (Object.prototype.hasOwnProperty.call(opts, 'quality')) {
    if (opts.quality < 0 || opts.quality > 3) {
      throw new Error("Pica: .quality should be [0..3], got ".concat(opts.quality));
    }

    opts.filter = filter_info.q2f[opts.quality];
  }

  return this.init().then(function () {
    return _this7.__mathlib.resizeAndUnsharp(opts);
  });
};

Pica.prototype.toBlob = function (canvas, mimeType, quality) {
  mimeType = mimeType || 'image/png';
  return new Promise(function (resolve) {
    if (canvas.toBlob) {
      canvas.toBlob(function (blob) {
        return resolve(blob);
      }, mimeType, quality);
      return;
    }

    if (canvas.convertToBlob) {
      resolve(canvas.convertToBlob({
        type: mimeType,
        quality: quality
      }));
      return;
    } // Fallback for old browsers


    var asString = atob(canvas.toDataURL(mimeType, quality).split(',')[1]);
    var len = asString.length;
    var asBuffer = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
      asBuffer[i] = asString.charCodeAt(i);
    }

    resolve(new Blob([asBuffer], {
      type: mimeType
    }));
  });
};

Pica.prototype.debug = function () {};

module.exports = Pica;

},{"./lib/mathlib":1,"./lib/mm_resize/resize_filter_info":7,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":22,"webworkify":23}]},{},[])("/index.js")
});


/***/ }),

/***/ "jbEk":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/src/ng2-img-max.module.js ***!
  \******************************************************************************/
/*! exports provided: Ng2ImgMaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxModule", function() { return Ng2ImgMaxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng2_img_max_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng2-img-max.service */ "f6mv");
/* harmony import */ var _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-max-size.service */ "K/rb");
/* harmony import */ var _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-maxpx-size.service */ "Bf1Z");
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img-exif.service */ "kTvl");
/* harmony import */ var ng2_pica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pica */ "UPe1");







var Ng2ImgMaxModule = /** @class */ (function () {
    function Ng2ImgMaxModule() {
    }
Ng2ImgMaxModule.ɵfac = function Ng2ImgMaxModule_Factory(t) { return new (t || Ng2ImgMaxModule)(); };
Ng2ImgMaxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2ImgMaxModule });
Ng2ImgMaxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"], useClass: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"] },
        { provide: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"], useClass: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"] },
        { provide: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"], useClass: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"] },
        { provide: _ng2_img_max_service__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxService"], useClass: _ng2_img_max_service__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxService"] }
    ], imports: [[
            ng2_pica__WEBPACK_IMPORTED_MODULE_5__["Ng2PicaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2ImgMaxModule, { imports: function () { return [ng2_pica__WEBPACK_IMPORTED_MODULE_5__["Ng2PicaModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2ImgMaxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ng2_pica__WEBPACK_IMPORTED_MODULE_5__["Ng2PicaModule"]
                ],
                providers: [
                    { provide: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"], useClass: _img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"] },
                    { provide: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"], useClass: _img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"] },
                    { provide: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"], useClass: _img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"] },
                    { provide: _ng2_img_max_service__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxService"], useClass: _ng2_img_max_service__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxService"] }
                ]
            }]
    }], function () { return []; }, null); })();
    return Ng2ImgMaxModule;
}());


//# sourceMappingURL=ng2-img-max.module.js.map

/***/ }),

/***/ "kTvl":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-img-max/__ivy_ngcc__/dist/src/img-exif.service.js ***!
  \****************************************************************************/
/*! exports provided: ImgExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgExifService", function() { return ImgExifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exifr/dist/mini.legacy.umd */ "dFej");
/* harmony import */ var exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__);



var ImgExifService = /** @class */ (function () {
    function ImgExifService() {
    }
    ImgExifService.prototype.getOrientedImage = function (image) {
        return new Promise(function (resolve) {
            var img;
            exifr_dist_mini_legacy_umd__WEBPACK_IMPORTED_MODULE_1__["orientation"](image).catch(function (err) { return undefined; }).then(function (orientation) {
                if (orientation != 1) {
                    var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                    switch (orientation) {
                        case 3:
                        case 4:
                            cx = -image.width;
                            cy = -image.height;
                            deg = 180;
                            break;
                        case 5:
                        case 6:
                            cw = image.height;
                            ch = image.width;
                            cy = -image.height;
                            deg = 90;
                            break;
                        case 7:
                        case 8:
                            cw = image.height;
                            ch = image.width;
                            cx = -image.width;
                            deg = 270;
                            break;
                        default:
                            break;
                    }
                    canvas.width = cw;
                    canvas.height = ch;
                    if ([2, 4, 5, 7].indexOf(orientation) > -1) {
                        //flip image
                        ctx.translate(cw, 0);
                        ctx.scale(-1, 1);
                    }
                    ctx.rotate(deg * Math.PI / 180);
                    ctx.drawImage(image, cx, cy);
                    img = document.createElement("img");
                    img.width = cw;
                    img.height = ch;
                    img.addEventListener('load', function () {
                        resolve(img);
                    });
                    img.src = canvas.toDataURL("image/png");
                }
                else {
                    resolve(image);
                }
            });
        });
    };
ImgExifService.ɵfac = function ImgExifService_Factory(t) { return new (t || ImgExifService)(); };
ImgExifService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImgExifService, factory: function (t) { return ImgExifService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgExifService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return ImgExifService;
}());


//# sourceMappingURL=img-exif.service.js.map

/***/ }),

/***/ "vi0P":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-pica/__ivy_ngcc__/dist/src/ng2-pica.module.js ***!
  \************************************************************************/
/*! exports provided: Ng2PicaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2PicaModule", function() { return Ng2PicaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng2_pica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng2-pica.service */ "OOvV");
/* harmony import */ var _img_exif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img-exif.service */ "ChFR");




var Ng2PicaModule = /** @class */ (function () {
    function Ng2PicaModule() {
    }
Ng2PicaModule.ɵfac = function Ng2PicaModule_Factory(t) { return new (t || Ng2PicaModule)(); };
Ng2PicaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2PicaModule });
Ng2PicaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _ng2_pica_service__WEBPACK_IMPORTED_MODULE_1__["Ng2PicaService"], useClass: _ng2_pica_service__WEBPACK_IMPORTED_MODULE_1__["Ng2PicaService"] },
        { provide: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"], useClass: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"] }
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2PicaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    { provide: _ng2_pica_service__WEBPACK_IMPORTED_MODULE_1__["Ng2PicaService"], useClass: _ng2_pica_service__WEBPACK_IMPORTED_MODULE_1__["Ng2PicaService"] },
                    { provide: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"], useClass: _img_exif_service__WEBPACK_IMPORTED_MODULE_2__["ImgExifService"] }
                ]
            }]
    }], function () { return []; }, null); })();
    return Ng2PicaModule;
}());


//# sourceMappingURL=ng2-pica.module.js.map

/***/ })

}]);
//# sourceMappingURL=default~inventario-inventario-module~users-users-module-es2015.js.map