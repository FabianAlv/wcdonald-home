(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\Interaction\MDB-Angular-Free-pruebas\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EqF5":
/*!*****************************************************************!*\
  !*** ./src/components/product-slide/product-slide.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSlideComponent", function() { return ProductSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");



class ProductSlideComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductSlideComponent.ɵfac = function ProductSlideComponent_Factory(t) { return new (t || ProductSlideComponent)(); };
ProductSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductSlideComponent, selectors: [["app-product-slide"]], inputs: { product: "product" }, decls: 8, vars: 4, consts: [[1, "view", "w-100"], [1, "d-block", "w-100", 3, "src", "alt"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-light", "waves-light"], [1, "carousel-caption"], [1, "h2-responsive"], ["mdbBtn", "", "mdbWavesEffect", "", 3, "href"]], template: function ProductSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.srcSlider, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", ctx.product.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"]], styles: ["a[_ngcontent-%COMP%] {\n  background-color: #db8c06;\n  border-radius: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  min-width: 940px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #db8c06;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px black;\n}\n\n@media (max-width: 450px) {\n  a[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  img[_ngcontent-%COMP%] {\n    left: -300px;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 780px) {\n  img[_ngcontent-%COMP%] {\n    left: -100px;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 1024px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 70%;\n    padding: 0.65rem 1.74rem;\n  }\n}\n\n@media (min-width: 1025px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2R1Y3Qtc2xpZGUvcHJvZHVjdC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0RnQjtFREVoQixtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNDVmdCO0VEV2hCLGlCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLFlBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxjQUFBO0lBQ0Esd0JBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxjQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlL3Byb2R1Y3Qtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtaW4td2lkdGg6IDk0MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICBhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbGVmdDogLTMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyMHB4KSBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcclxuICBpbWcge1xyXG4gICAgbGVmdDogLTEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIHBhZGRpbmc6IDAuNjVyZW0gMS43NHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogcmdiKDU1LCA2LCAyMyk7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiByZ2IoMzYsIDUsIDE2KTtcbiRzZWNvbmRhcnktY29sb3I6IHJnYigyMTksIDE0MCwgNik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-slide',
                templateUrl: './product-slide.component.html',
                styleUrls: ['./product-slide.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IH98":
/*!*****************************************************!*\
  !*** ./src/components/product/product.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "dark-background": a0, "invert": a1 }; };
const _c1 = function (a0) { return { "light-background": a0 }; };
const _c2 = function (a0) { return { "light-color": a0 }; };
class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product", even: "even" }, decls: 9, vars: 21, consts: [[3, "id", "ngClass"], ["data-wow-delay", "0.6s", 1, "wow", "animated", "rollIn", 3, "src", "ngClass"], ["id", "product-text", "data-wow-delay", "0.6s", 1, "wow", "animated", "fadeIn"], [1, "h2-responsive", "font-weight-bold", 3, "ngClass"], [3, "ngClass"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.even, !ctx.even));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, !ctx.even));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.even));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx.even));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.even));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A1 ", ctx.product.price, ".00");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 30px;\n}\n\nimg[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 50%;\n  height: auto;\n  padding: 15px;\n}\n\n.dark-background[_ngcontent-%COMP%] {\n  background-color: #370617;\n  box-shadow: 0 1px 10px 0px black;\n}\n\n.dark-color[_ngcontent-%COMP%] {\n  color: #370617;\n}\n\n.light-background[_ngcontent-%COMP%] {\n  background-color: #db8c06;\n  box-shadow: 0 3px 10px -3px black;\n}\n\n.light-color[_ngcontent-%COMP%] {\n  color: #db8c06;\n  text-shadow: 2px 2px 4px black;\n}\n\n#product-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n@media (max-width: 450px) {\n  div[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    height: 585px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n\n  #product-text[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 1024px) {\n  img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .invert[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  }\n\n  #product-text[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n@media (min-width: 1025px) {\n  img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n\n  .invert[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  }\n\n  #product-text[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ2ZjO0VEZ0JkLGdDQUFBO0FBREY7O0FBSUE7RUFDRSxjQ3BCYztBRG1CaEI7O0FBSUE7RUFDRSx5QkN0QmdCO0VEdUJoQixpQ0FBQTtBQURGOztBQUlBO0VBQ0UsY0MzQmdCO0VENEJoQiw4QkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtFQURGOztFQUlBO0lBQ0UsbUJBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxZQUFBO0VBRkY7O0VBS0E7SUFDRSwyQkFBQTtJQUNBLDhCQUFBO0VBRkY7O0VBS0E7SUFDRSx1QkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLFlBQUE7RUFIRjs7RUFNQTtJQUNFLDJCQUFBO0lBQ0EsOEJBQUE7RUFIRjs7RUFNQTtJQUNFLHVCQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmRhcmstYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAwcHggYmxhY2s7XHJcbn1cclxuXHJcbi5kYXJrLWNvbG9yIHtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5saWdodC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggLTNweCBibGFjaztcclxufVxyXG5cclxuLmxpZ2h0LWNvbG9yIHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbiNwcm9kdWN0LXRleHQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIGRpdiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1ODVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC10ZXh0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmludmVydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC10ZXh0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW52ZXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LXRleHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiByZ2IoNTUsIDYsIDIzKTtcbiRwcmltYXJ5LWNvbG9yLWRhcms6IHJnYigzNiwgNSwgMTYpO1xuJHNlY29uZGFyeS1jb2xvcjogcmdiKDIxOSwgMTQwLCA2KTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], even: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MCpn":
/*!*************************************************!*\
  !*** ./src/components/promo/promo.component.ts ***!
  \*************************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PromoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PromoComponent.ɵfac = function PromoComponent_Factory(t) { return new (t || PromoComponent)(); };
PromoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoComponent, selectors: [["app-promo"]], inputs: { promo: "promo" }, decls: 8, vars: 3, consts: [["id", "promo"], [1, "h2-responsive", "font-weight-bold", "wow", "animated", "fadeIn"], [1, "wow", "animated", "zoomIn", 3, "src"], [1, "wow", "animated", "zoomIn"]], template: function PromoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.promo.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20A1 ", ctx.promo.price, ".00");
    } }, styles: ["h2[_ngcontent-%COMP%] {\n  color: #db8c06;\n  text-shadow: 2px 2px 4px black;\n}\n\n#promo[_ngcontent-%COMP%] {\n  align-items: center;\n  background-attachment: fixed;\n  background-image: url('fondo-de-promo.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#promo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  align-items: flex-end;\n  display: flex;\n}\n\n#promo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#promo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  padding: 15px;\n}\n\np[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #db8c06;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  font-weight: bolder;\n  justify-content: center;\n  margin: 0;\n  padding: 5px;\n  padding-bottom: 10px;\n  text-align: center;\n  text-shadow: 2px 2px 4px black;\n}\n\n@media (max-width: 450px) {\n  p[_ngcontent-%COMP%] {\n    height: 85px;\n    width: 85px;\n  }\n\n  #promo[_ngcontent-%COMP%] {\n    background-position-x: center;\n    height: 500px;\n  }\n  #promo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 1024px) {\n  p[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n    font-size: 1.2rem;\n  }\n\n  #promo[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  #promo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n@media (min-width: 1025px) {\n  p[_ngcontent-%COMP%] {\n    height: 125px;\n    width: 125px;\n    font-size: 1.5rem;\n  }\n\n  #promo[_ngcontent-%COMP%] {\n    background-position-y: bottom;\n    height: 600px;\n  }\n  #promo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NEZ0I7RURFaEIsOEJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUROOztBQUtFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EseUJDbkNnQjtFRG9DaEIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQUpGOztFQU9BO0lBQ0UsNkJBQUE7SUFDQSxhQUFBO0VBSkY7RUFNRTtJQUNFLFlBQUE7RUFKSjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUVBLGlCQUFBO0VBUEY7O0VBVUE7SUFDRSxhQUFBO0VBUEY7RUFTRTtJQUNFLFlBQUE7RUFQSjtBQUNGOztBQVdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUVBLGlCQUFBO0VBVkY7O0VBYUE7SUFDRSw2QkFBQTtJQUNBLGFBQUE7RUFWRjtFQVlFO0lBQ0UsWUFBQTtFQVZKO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmgyIHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbiNwcm9tbyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbmRvLWRlLXByb21vLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIHAge1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgfVxyXG5cclxuICAjcHJvbW8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIHAge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gICNwcm9tbyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICBwIHtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvbW8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6IHJnYig1NSwgNiwgMjMpO1xuJHByaW1hcnktY29sb3ItZGFyazogcmdiKDM2LCA1LCAxNik7XG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoMjE5LCAxNDAsIDYpO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo',
                templateUrl: './promo.component.html',
                styleUrls: ['./promo.component.scss']
            }]
    }], function () { return []; }, { promo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_slide_product_slide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product-slide/product-slide.component */ "EqF5");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/product/product.component */ "IH98");
/* harmony import */ var _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/promo/promo.component */ "MCpn");







function AppComponent_mdb_carousel_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r3);
} }
function AppComponent_app_product_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product", 18);
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4)("even", i_r5 % 2 === 0);
} }
function AppComponent_app_promo_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-promo", 19);
} if (rf & 2) {
    const promo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promo", promo_r6);
} }
class AppComponent {
    constructor() {
        this.products = [
            {
                id: 'hamburguesa-de-queso',
                title: 'Hamburguesa con Queso',
                details: 'Un delicioso clásico con una rodaja de queso derretido.',
                price: '710',
                src: '../../assets/images/hamburguesa-de-queso.png',
                srcSlider: '../../assets/images/hamburguesa-de-queso-slider.jpg'
            },
            {
                id: 'hamburguesa-de-pollo',
                title: 'Hamburguesa de Pollo',
                details: 'Mayonesa, cebolla morada, lechuga entera, tomate y pollo crispy.',
                price: '2,590',
                src: '../../assets/images/hamburguesa-de-pollo.png',
                srcSlider: '../../assets/images/hamburguesa-de-pollo-slider.jpg'
            },
            {
                id: 'papas',
                title: 'Papas',
                details: 'Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.',
                price: '1,060',
                src: '../../assets/images/papas.png',
                srcSlider: '../../assets/images/papas-slider.jpg'
            },
            {
                id: 'bebida',
                title: 'Bebida',
                details: '-',
                price: '710',
                src: '../../assets/images/bebida.png',
                srcSlider: '../../assets/images/bebida-slider.jpg',
            },
        ];
        this.promos = [
            {
                title: 'WcCOMBO',
                price: '2,000',
                src: '../../assets/images/promocion.png',
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 5, consts: [["src", "../assets/images/logo.jpg"], [3, "isControls", "animation"], [4, "ngFor", "ngForOf"], [1, "banner"], [3, "product", "even", 4, "ngFor", "ngForOf"], [1, "banner", 2, "background-position-y", "bottom"], [3, "promo", 4, "ngFor", "ngForOf"], [1, "page-footer", "font-small"], ["id", "socials"], [1, "fb-ic"], ["fab", "", "icon", "facebook", "size", "2x"], [1, "tw-ic"], ["fab", "", "icon", "twitter", "size", "2x"], [1, "ins-ic"], ["fab", "", "icon", "instagram", "size", "2x"], [1, "footer-copyright", "text-center", "py-3"], ["href", "localhost:4200"], [3, "product"], [3, "product", "even"], [3, "promo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_mdb_carousel_item_4_Template, 2, 1, "mdb-carousel-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_product_9_Template, 1, 2, "app-product", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Promociones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_app_promo_14_Template, 1, 1, "app-promo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mdb-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mdb-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mdb-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wacdonalds.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isControls", true)("animation", "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.promos);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FabDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"], _components_product_slide_product_slide_component__WEBPACK_IMPORTED_MODULE_3__["ProductSlideComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_5__["PromoComponent"]], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #db8c06;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px black;\n}\n\nheader[_ngcontent-%COMP%] {\n  left: 20px;\n  position: fixed;\n  top: -10px;\n  z-index: 15;\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 10px 0px black;\n  border-radius: 10px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  align-items: center;\n  background-image: url('banner.jpg');\n  display: flex;\n  justify-content: center;\n}\n\n#socials[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100px;\n  justify-content: space-evenly;\n}\n\n@media (max-width: 450px) {\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n\n  .banner[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .banner[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n\n@media (min-width: 1025px) {\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .banner[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRGdCO0FEQWxCOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFERjs7QUFHRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUZGOztBQUtBO0VBRUk7SUFDRSxXQUFBO0VBSEo7O0VBT0E7SUFDRSxhQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUVJO0lBQ0UsWUFBQTtFQU5KOztFQVVBO0lBQ0UsYUFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFFSTtJQUNFLFlBQUE7RUFUSjs7RUFhQTtJQUNFLGFBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgei1pbmRleDogMTU7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDBweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzb2NpYWxzIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogcmdiKDU1LCA2LCAyMyk7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiByZ2IoMzYsIDUsIDE2KTtcbiRzZWNvbmRhcnktY29sb3I6IHJnYigyMTksIDE0MCwgNik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_product_slide_product_slide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/product-slide/product-slide.component */ "EqF5");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/product/product.component */ "IH98");
/* harmony import */ var _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/promo/promo.component */ "MCpn");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        _components_product_slide_product_slide_component__WEBPACK_IMPORTED_MODULE_4__["ProductSlideComponent"],
        _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_6__["PromoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                    _components_product_slide_product_slide_component__WEBPACK_IMPORTED_MODULE_4__["ProductSlideComponent"],
                    _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_6__["PromoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map