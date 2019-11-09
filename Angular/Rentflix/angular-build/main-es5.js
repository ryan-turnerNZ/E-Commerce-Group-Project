var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light navbar-expand-md navigation-clean-button\">\r\n  <div class=\"container\">\r\n    <div class=\"collapse navbar-collapse\"\r\n         id=\"navcol-1\">\r\n      <ul class=\"nav navbar-nav mr-auto\">\r\n         <li><a class=\"navbar-brand \" href=\"#\">Rentflix</a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button></li> \r\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/home\" >Home</a></li>\r\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/catalog/page/1\">Catalog</a></li>\r\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/search\">Search</a></li>\r\n      </ul>\r\n      <ng-container *ngIf=\"!loginStatus()\">\r\n      <span class=\"navbar-text actions\"> \r\n        <a class=\"login\" routerLinkActive=\"registration\" routerLink=\"/login\">Log In</a>\r\n        <a class=\"btn btn-light action-button\" role=\"button\" routerLinkActive=\"registration\" routerLink=\"/register\">Sign Up</a>\r\n      </span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"loginStatus()\">\r\n        <span class=\"navbar-text actions\">\r\n          \r\n          <a class=\"login\" routerLink=\"/account/cart\">Shopping Cart</a>\r\n          <a class=\"login\" routerLink=\"account/profile\">Account</a>\r\n          <a class=\"login\" routerLink=\"/account/library\">Library</a>\r\n          <a class=\"login\" routerLink=\"/account/orders\">Orders</a>\r\n          <a class=\"btn btn-light action-button\" role=\"button\" (click)=\"logout()\">Logout</a>\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!--\r\nRouter here\r\n-->\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n<!--\r\n\r\n-->\r\n\r\n\r\n<script src=\"../assets/js/jquery.min.js\"></script>\r\n<script src=\"../assets/bootstrap/js/bootstrap.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js\"></script>\r\n<script src=\"../assets/js/smoothproducts.min.js\"></script>\r\n<script src=\"../assets/js/theme.js\"></script>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Hello Anyone Still There</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n  <p> You have been logged out </p>\r\n  <p> Please Login again </p>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\r\n</mat-dialog-actions>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page account-page\">\r\n    <section class=\"clean-block clean-account dark\">\r\n        <div class=\"container\">\r\n            <div class=\"block-heading\">\r\n                <h2 class=\"text-info\">Account Information</h2>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-md-12 col-lg-12\">\r\n                        <div class=\"accordion first\">\r\n                            <input id=\"toggle1\" type=\"checkbox\" checked class=\"accordion-toggle\" name=\"toggle\" />\r\n                            <label for=\"toggle1\">Account Information</label>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"column\">\r\n                                        <p class=\"label\">Username</p>\r\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].username }}</p>\r\n                                        <button type=\"button\" class=\"reset-pwd btn btn-outline-danger\">Reset\r\n                                            Password</button>\r\n                                    </div>\r\n                                    <div class=\"column\">\r\n                                        <p class=\"label\">Email</p>\r\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].email }}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n\r\n                        <div class=\"accordion second\">\r\n                            <input id=\"toggle2\" type=\"checkbox\" checked class=\"accordion-toggle\" name=\"toggle\" />\r\n                            <label for=\"toggle2\">Billing information</label>\r\n                            <section class=\"billing\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"column\">\r\n                                        <p class=\"label\">Cardholder Name</p>\r\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].username | titlecase }} Doe</p>\r\n                                        <p class=\"label below\">Credit Card Number</p>\r\n                                        <p class=\"detail\">**** **** **** 1843</p>\r\n                                    </div>\r\n                                    <div class=\"column\">\r\n                                        <p class=\"label\">Country</p>\r\n                                        <p class=\"detail\">NZ</p>\r\n                                        <p class=\"label below\">Expiration: MM/YY</p>\r\n                                        <p class=\"detail\">02/22</p>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\r\n  <section class=\"clean-block clean-catalog dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">My Movies</h2>\r\n        <p>Your rented movies displayed here</p>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"products\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-12 col-md-2 col-lg-3\" *ngFor=\"let item of displayResults()\">\r\n                  <div class=\"clean-product-item\">\r\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.posterPath}}\"></a></div>\r\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\r\n                    <div class=\"about\">\r\n                      <div class=\"rating\">\r\n                        <img [src]=\"item.averageVote >= 2 ? '../../../assets/img/star.svg' : item.averageVote >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                        <img [src]=\"item.averageVote >= 4 ? '../../../assets/img/star.svg' : item.averageVote >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                        <img [src]=\"item.averageVote >= 6 ? '../../../assets/img/star.svg' : item.averageVote >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                        <img [src]=\"item.averageVote >= 8 ? '../../../assets/img/star.svg' : item.averageVote >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                        <img [src]=\"item.averageVote >= 10 ? '../../../assets/img/star.svg' : item.averageVote >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                      </div>\r\n                      <div class=\"price\">\r\n                        <h3><a href=\"{{item.homePage}}\" rel=\"noopener noreferrer\" target=\"_blank\">Watch Now</a></h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page shopping-cart-page\">\r\n  <section class=\"clean-block clean-cart dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Orders Page</h2>\r\n        <p>View past purchases here</p>\r\n      </div>\r\n      <ng-container *ngFor=\"let r of getArray() | keyvalue\">\r\n      <div class=\"content\" >\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-md-12 col-lg-8\">\r\n<!--\r\n            <div class=\"items\" *ngFor=\"let m of r.value\">\r\n-->\r\n            <div class=\"items\" *ngFor=\"let m of r.value\">\r\n              <div class=\"product\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"product-image\"><img class=\"img-fluid d-block mx-auto image\" src=\"{{'https://image.tmdb.org/t/p/w500'+ m?.posterPath}}\"></div>\r\n                  </div>\r\n                  <div class=\"col-md-5 product-info\"><a class=\"product-name\">{{m?.title}}</a>\r\n                    <div class=\"product-specs\">\r\n                      <div><span>Release Date:&nbsp;</span><span class=\"value\">{{m?.releaseDate}}</span></div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6 col-md-2 price\"><span>{{getPrice(m?.releaseDate)}}</span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"summary\">\r\n              <h3>Summary</h3>\r\n              <h5>{{getDate(r.value[0].timeAdded)}}</h5>\r\n              <h4><span class=\"text\">Subtotal</span><span class=\"price\">${{calcTotal(r.value)}}</span></h4>\r\n              <h4><span class=\"text\">Discount</span><span class=\"price\">$0</span></h4>\r\n              <h4><span class=\"text\">Shipping</span><span class=\"price\">$0</span></h4>\r\n              <h4><span class=\"text\">Total</span><span class=\"price\">${{calcTotal(r.value)}}</span></h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <p></p>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page shopping-cart-page\">\r\n  <section class=\"clean-block clean-cart dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Shopping Cart</h2>\r\n        <p>One step away from watching your favourite movies with Rentflix</p>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-md-12 col-lg-8\">\r\n            <div class=\"items\">\r\n\r\n              <div *ngIf=\"cart.length == 0\" class=\"product\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n                  <img src='../../../assets/img/empty-cart.png'>\r\n                </div>\r\n              </div>\r\n              <div class=\"product\" *ngFor=\"let m of getArray()\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"product-image\"><img class=\"img-fluid d-block mx-auto image\"\r\n                        src=\"{{'https://image.tmdb.org/t/p/w500'+ m?.posterPath}}\"></div>\r\n                  </div>\r\n                  <div class=\"col-md-5 product-info\"><a class=\"product-name\" href=\"#\">{{m?.title}}</a>\r\n                    <div class=\"product-specs\">\r\n                      <div><span>Release Date:&nbsp;</span><span class=\"value\">{{m?.releaseDate}}</span></div>\r\n                      <div><span><a (click)=\"removeFromCart(m?.id)\">Remove From Cart</a></span></div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6 col-md-2 price\"><span>{{getPrice(m?.releaseDate)}}</span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"summary\">\r\n              <h3>Summary</h3>\r\n              <h4><span class=\"text\">Subtotal</span><span class=\"price\">${{getTotalCost()}}</span></h4>\r\n              <h4><span class=\"text\">Discount</span><span class=\"price\">$0</span></h4>\r\n              <h4><span class=\"text\">Shipping</span><span class=\"price\">$0</span></h4>\r\n              <h4><span class=\"text\">Total</span><span class=\"price\">${{getTotalCost()}}</span></h4>\r\n              <button class=\"btn btn-primary btn-block btn-lg\" type=\"button\" (click)=\"addToOrder()\">Checkout</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\r\n  <section class=\"clean-block clean-catalog dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Catalog Page</h2>\r\n        <p>Movies move us like nothing else can, whether they're scary, funny,\r\n          dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <div class=\"d-none d-md-block\">\r\n              <div class=\"filters\">\r\n                <div class=\"filter-item\" *ngIf=\"getGenresList()\">\r\n                  <h3>Genres</h3>\r\n                  <select id=\"genres\">\r\n                      <option value=\"any\">Any</option>\r\n                      <option *ngFor= \"let genre of getGenresList()\" value=\"{{ genre.id }}\">{{ genre.name }}</option>\r\n                    </select>\r\n                </div>\r\n              \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"products\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of displayResults(this.page)\">\r\n                  <div class=\"clean-product-item\">\r\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\r\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\r\n                    <div class=\"about\">\r\n                      <div class=\"rating\">\r\n                          <img [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                          <img [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                          <img [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                          <img [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                          <img [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                      </div>\r\n                      <div class=\"price\">\r\n                        <h3>{{getPrice(item.release_date)}}</h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <nav>\r\n                <ul class=\"pagination\">\r\n                  <ng-container *ngIf=\"page == 1\">\r\n                    <li class=\"page-item disabled\"><a class=\"page-link\"  aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"page > 1\">\r\n                    <li class=\"page-item \"><a class=\"page-link\"  [routerLink]=\"['/catalog/page',page-1]\" aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\r\n                  </ng-container>\r\n                  <li class=\"page-item \" *ngFor=\"let page of getPages()\"><a class=\"page-link\" [routerLink]=\"['/catalog/page', page]\">{{page}}</a></li>\r\n                  <ng-container *ngIf=\"page == maxpage\">\r\n                  <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"page < maxpage\">\r\n                    <li class=\"page-item \"><a class=\"page-link\" [routerLink]=\"['/catalog/page',page+1]\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\r\n                  </ng-container>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page landing-page\">\r\n  <section class=\"clean-block clean-hero\" style=\"background-image:url(&quot;assets/img/tech/image4.jpg&quot;);color:rgba(90,12,27,0.85);\">\r\n    <div class=\"text\">\r\n      <h2>Rentflix</h2>\r\n      <p>Cheap Movie Rentals On Demand!</p><a class=\"btn btn-outline-light btn-lg\" role=\"button\" href=\"/catalog/page/1\">Browse Catalogue</a></div>\r\n  </section>\r\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Trending</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\r\n      <div class=\"movie-display-col\" *ngFor=\"let movie of getPopular()\">\r\n        <div class=\"clean-product-item\">\r\n          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></a></div>\r\n          <div class=\"product-name\" >{{ movie?.title }}</div>\r\n          <div class=\"about\">\r\n            <div class=\"rating\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star-half-empty.svg\"><img src=\"../../../assets/img/star-empty.svg\"></div>\r\n            <div class=\"price\">\r\n              <h3>{{ getPrice(movie.release_date) }}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Top Rated</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\r\n        <div class=\"movie-display-col\" *ngFor=\"let movie of getTopRated()\">\r\n          <div class=\"clean-product-item\">\r\n            <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></div>\r\n            <div class=\"product-name\"><a href=\"#\">{{ movie?.title }}</a></div>\r\n            <div class=\"about\">\r\n              <div class=\"rating\">\r\n                  <img [src]=\"movie.vote_average >= 2 ? '../../../assets/img/star.svg' : movie.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                  <img [src]=\"movie.vote_average >= 4 ? '../../../assets/img/star.svg' : movie.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                  <img [src]=\"movie.vote_average >= 6 ? '../../../assets/img/star.svg' : movie.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                  <img [src]=\"movie.vote_average >= 8 ? '../../../assets/img/star.svg' : movie.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                  <img [src]=\"movie.vote_average >= 10 ? '../../../assets/img/star.svg' : movie.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                </div>\r\n              <div class=\"price\">\r\n                <h3>{{ getPrice(movie.release_date) }}</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\r\n  <section class=\"clean-block clean-form dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\r\n        <h2 class=\"text-info\">Log In</h2>\r\n        <p>or</p>\r\n        <p>Click here to <a href=\"/register\">register</a></p>\r\n      </div>\r\n      <div class=\"login-containter\">\r\n\r\n          <div class=\"content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onLogin(loginForm.value)\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"username\">Username</label>\r\n                        <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.username.errors }\">\r\n                          <input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\">\r\n                        </p>\r\n                        <div *ngIf=\"isSubmitted && formControls.username.errors\" class=\"help-block\">\r\n                          <div *ngIf=\"formControls.username.errors.required\">Username is Required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input formControlName=\"password\" class=\"form-control\" type=\"password\" id=\"password\">\r\n                      </div>\r\n                      <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\r\n                        <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"checkbox\"><label class=\"form-check-label\" for=\"checkbox\">Remember me</label></div>\r\n                      </div><button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\r\n                    </form>\r\n                  <div class=\"justify-content-center align-items-center google\"><button class=\"btn btn-primary btn-block\" (click)=\"signInWithGoogle()\">Sign in with Google</button></div>\r\n                 </div>\r\n              </div>\r\n             \r\n            </div>\r\n\r\n\r\n      \r\n    </div>\r\n    </div>\r\n\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>payment works!</p>\r\n<main class=\"page payment-page\">\r\n  <section class=\"clean-block payment-form dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Payment</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>\r\n      </div>\r\n      <form>\r\n        <div class=\"products\">\r\n          <h3 class=\"title\">Checkout</h3>\r\n          <div class=\"item\"><span class=\"price\">$200</span>\r\n            <p class=\"item-name\">Product 1</p>\r\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\r\n          </div>\r\n          <div class=\"item\"><span class=\"price\">$120</span>\r\n            <p class=\"item-name\">Product 2</p>\r\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\r\n          </div>\r\n          <div class=\"total\"><span>Total</span><span class=\"price\">$320</span></div>\r\n        </div>\r\n        <div class=\"card-details\">\r\n          <h3 class=\"title\">Credit Card Details</h3>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-sm-7\">\r\n              <div class=\"form-group\"><label>Card Holder</label><input class=\"form-control\" type=\"text\" placeholder=\"Card Holder\"></div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group\"><label>Expiration date</label>\r\n                <div class=\"input-group expiration-date\"><input class=\"form-control\" type=\"text\" placeholder=\"MM\"><input class=\"form-control\" type=\"text\" placeholder=\"YY\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"form-group\"><label for=\"card-number\">Card Number</label><input class=\"form-control\" type=\"text\" id=\"card-number\" placeholder=\"Card Number\"></div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\"><label for=\"cvc\">CVC</label><input class=\"form-control\" type=\"text\" id=\"cvc\" placeholder=\"CVC\"></div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\"><button class=\"btn btn-primary btn-block\" type=\"submit\">Proceed</button></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n<main class=\"page product-page\">\r\n  <section class=\"clean-block clean-product dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n      </div>\r\n      <div class=\"block-content\">\r\n        <div class=\"product-info\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                  <figure class=\"figure\"><img class=\"poster\" src=\"{{'https://image.tmdb.org/t/p/w500'+getMovie()?.poster_path}}\"></figure>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"info\">\r\n                <h3>{{ getMovie()?.title }}</h3>\r\n                <div class=\"rating\">\r\n                    <img [src]=\"getMovie()?.vote_average >= 2 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                    <img [src]=\"getMovie()?.vote_average >= 4 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                    <img [src]=\"getMovie()?.vote_average >= 6 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                    <img [src]=\"getMovie()?.vote_average >= 8 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                    <img [src]=\"getMovie()?.vote_average >= 10 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\r\n                </div>\r\n                <div class=\"price\">\r\n                  <h3>{{getPrice(getMovie()?.release_date)}}</h3>\r\n                </div><button class=\"btn btn-primary\" type=\"button\" (click)=\"additemToCart()\"><i class=\"icon-basket\"></i>Add to Cart</button>\r\n                <div class=\"summary\">\r\n                  <p>{{ getMovie()?.overview }}</p>\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-info\">\r\n          <h2 style=\"margin-bottom: 2rem\">Reviews</h2>\r\n                <div class=\"reviews\" *ngFor=\"let r of getReview()\">\r\n                  <div class=\"review-item\">\r\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-empty.svg\"></div>\r\n                  <span class=\"text-muted\">{{r?.author}}</span>\r\n                    <p> {{r?.content |slice:0:800}}.......</p>\r\n                    <p><a href=\"{{r?.url}}\">Read the full review here</a></p>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"clean-related-items\">\r\n          <h3>Related Movies</h3>\r\n          \r\n          <div class=\"items\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-sm-6 col-lg-3\" *ngFor=\"let movie of getRelated()\">\r\n                <div class=\"clean-related-item\">\r\n                    <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie?.poster_path}}\"></div>\r\n                    <div class=\"related-name\">{{ movie.title }}\r\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-half-empty.svg\"><img src=\"assets/img/star-empty.svg\"></div>\r\n                    <h4>{{getPrice(movie?.release_date)}}</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recommendation/recommendation.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recommendation/recommendation.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\r\n        <section class=\"clean-block clean-form dark\">\r\n          <div class=\"container\">\r\n            <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\r\n              <h1 class=\"text-info\">You might like</h1>\r\n            </div>\r\n            <div class=\"items\">\r\n                    <div class=\"row justify-content-center\">\r\n                      <div class=\"col-sm-6 col-lg-3\" *ngFor=\"let movie of getRecommendedMovies()\">\r\n                        <div class=\"clean-related-item\">\r\n                            <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie?.poster_path}}\"></div>\r\n                            <div class=\"related-name\">{{ movie.title }}\r\n                            <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-half-empty.svg\"><img src=\"assets/img/star-empty.svg\"></div>\r\n                            <h4>{{getPrice(movie?.release_date)}}</h4>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n          </div>\r\n        </section>\r\n      </main>\r\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page registration-page\">\r\n  <section class=\"clean-block clean-form dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\">\r\n        <h2 class=\"text-info\">Registration</h2>\r\n      </div>\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input formControlName=\"email\" class=\"form-control\" type=\"email\" id=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Name</label>\r\n          <input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input formControlName=\"password\" class=\"form-control item\" type=\"password\" id=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n            <div *ngIf=\"f.password.errors.pattern\">Requires a Capital Letter, LowerCase letter and a number</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Confirm Password</label>\r\n          <input formControlName=\"confirmPassword\" class=\"form-control item\" type=\"password\" id=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\">\r\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\r\n      </form>\r\n\r\n    </div>\r\n  </section>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\r\n  <section class=\"clean-block clean-form dark\">\r\n    <div class=\"container\">\r\n      <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\r\n        <h2 class=\"text-info\">Reset Password</h2>\r\n        <h5 class=\"text-info\">Please enter your new password below</h5>\r\n      </div>\r\n      <form [formGroup]=\"resetForm\" (ngSubmit)=\"onReset(resetForm.value)\">\r\n        <div class=\"form-group\"><label for=\"password\">Password</label><input formControlName=\"password\" class=\"form-control\" type=\"password\" id=\"password\"></div>\r\n        <div class=\"form-group\">\r\n        </div><button class=\"btn btn-primary btn-block\" type=\"submit\">Reset</button>\r\n      </form>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page search-page\">\r\n    \r\n\r\n\r\n  <section class=\"clean-block clean-product dark\">\r\n      <div class=\"container\">\r\n          <div class=\"block-heading\">\r\n              <h2 class=\"text-info\">Search</h2>\r\n              <!-- <p>Movies move us like nothing else can, whether they're scary, funny,\r\n                      dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p> -->\r\n              <form class=\"search-form\">\r\n              \r\n                  <input #title class=\"form-control mr-sm-2 search-bar\" (keyup.enter)=\"search(title.value)\" type=\"text\"\r\n                    placeholder=\"Type in a movie title...\">\r\n              \r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(title.value)\">Search</button>\r\n              </form>\r\n            </div>\r\n       \r\n        <div class=\"block-content\" *ngIf=isValidSearch()>\r\n          <div class=\"product-info\">\r\n            \r\n              <div class=\"col-md-10\">\r\n                  <div class=\"products\">\r\n                    <div class=\"row no-gutters\">\r\n                      <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of getSearchResults()\">\r\n                        <div class=\"clean-product-item\">\r\n                          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\"\r\n                                src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\r\n                          <div class=\"product-name\"><a [routerLink]=\"['/product', item.id]\" href=\"\">{{item?.title}}</a></div>\r\n                          <div class=\"about\">\r\n                            <div class=\"rating\">\r\n                              <img\r\n                                [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\r\n                              <img\r\n                                [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\r\n                              <img\r\n                                [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\r\n                              <img\r\n                                [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\r\n                              <img\r\n                                [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\r\n                            </div>\r\n                            <div class=\"price\">\r\n                              <!-- <h3>{{getPrice(item.release_date)}}</h3> -->\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n       \r\n          \r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n\r\n\r\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ "./src/app/pages/catalog/catalog.component.ts");
            /* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
            /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
            /* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
            /* harmony import */ var _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/payment/payment.component */ "./src/app/pages/payment/payment.component.ts");
            /* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
            /* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
            /* harmony import */ var _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/AccountPages/account/account.component */ "./src/app/pages/AccountPages/account/account.component.ts");
            /* harmony import */ var _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/AccountPages/library/library.component */ "./src/app/pages/AccountPages/library/library.component.ts");
            /* harmony import */ var _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/AccountPages/orders/orders.component */ "./src/app/pages/AccountPages/orders/orders.component.ts");
            /* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
            /* harmony import */ var _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/reset-page/reset-page.component */ "./src/app/pages/reset-page/reset-page.component.ts");
            /* harmony import */ var _pages_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/recommendation/recommendation.component */ "./src/app/pages/recommendation/recommendation.component.ts");
            var routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'catalog/page/:page', component: _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"] },
                { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"] },
                { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'register', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
                { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
                { path: 'reset/:token', component: _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_15__["ResetPageComponent"] },
                { path: 'recommended', component: _pages_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_16__["RecommendationComponent"] },
                //authGuard protected links
                { path: 'account/cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                { path: 'payment', component: _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                { path: 'account/profile', component: _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                { path: 'account/library', component: _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_12__["LibraryComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                { path: 'account/orders', component: _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(loginService, router) {
                    var _this = this;
                    this.loginService = loginService;
                    this.router = router;
                    this.title = 'Rentflix';
                    var clicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'click');
                    clicks$.subscribe(function (x) {
                        if (_this.loginService.getTimer() != null) {
                            _this.loginService.resetTimer();
                        }
                    });
                }
                AppComponent.prototype.loginStatus = function () {
                    return this.loginService.isAuthenticated();
                };
                AppComponent.prototype.logout = function () {
                    var _this = this;
                    console.log('logingoust');
                    this.loginService.logout().then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            if (response.valid === true) {
                                _this.loginService.setUserToken('');
                                _this.loginService.setAuth(false);
                                _this.loginService.stopTimer();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                console.log(response.message);
                            }
                        });
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: provideConfig, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function () { return provideConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
            /* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
            /* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
            /* harmony import */ var _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/payment/payment.component */ "./src/app/pages/payment/payment.component.ts");
            /* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
            /* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ "./src/app/pages/catalog/catalog.component.ts");
            /* harmony import */ var _pages_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/recommendation/recommendation.component */ "./src/app/pages/recommendation/recommendation.component.ts");
            /* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/AccountPages/library/library.component */ "./src/app/pages/AccountPages/library/library.component.ts");
            /* harmony import */ var _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/AccountPages/account/account.component */ "./src/app/pages/AccountPages/account/account.component.ts");
            /* harmony import */ var _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/AccountPages/orders/orders.component */ "./src/app/pages/AccountPages/orders/orders.component.ts");
            /* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/component/nav/nav.component.ts");
            /* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/reset-page/reset-page.component */ "./src/app/pages/reset-page/reset-page.component.ts");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            var googleLoginOptions = {
                scope: 'profile email'
            }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
            var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AuthServiceConfig"]([
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"]("101333282092-er7fq8srlakvrpt1ubkcaad01je4scd9.apps.googleusercontent.com", googleLoginOptions),
                }
            ]);
            function provideConfig() {
                return config;
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                        _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                        _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"],
                        _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                        _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"],
                        _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_17__["LibraryComponent"],
                        _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_18__["AccountComponent"],
                        _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
                        _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
                        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"],
                        _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_24__["AlertComponent"],
                        _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_26__["ResetPageComponent"],
                        _pages_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_12__["RecommendationComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
                        angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["SocialLoginModule"],
                    ],
                    providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], {
                            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AuthServiceConfig"],
                            useFactory: provideConfig
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"], _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_24__["AlertComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/component/alert/alert.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/component/alert/alert.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/component/alert/alert.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/component/alert/alert.component.ts ***!
          \****************************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return AlertComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var AlertComponent = /** @class */ (function () {
                function AlertComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                AlertComponent.prototype.close = function () {
                    this.dialogRef.close('Thanks for using me!');
                };
                return AlertComponent;
            }());
            AlertComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-alert',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/component/alert/alert.component.scss")).default]
                })
            ], AlertComponent);
            /***/ 
        }),
        /***/ "./src/app/component/nav/nav.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/component/nav/nav.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/component/nav/nav.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/component/nav/nav.component.ts ***!
          \************************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavComponent = /** @class */ (function () {
                function NavComponent() {
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                return NavComponent;
            }());
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/component/nav/nav.component.scss")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/auth-guard.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/guards/auth-guard.service.ts ***!
          \**********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    console.log("hello" + this.loginService.getUserToken());
                    if (this.loginService.isAuthenticated()) {
                        return true;
                    }
                    // navigate to login page
                    this.router.navigate(['/login']);
                    // you can save redirect url so after authing we can move them back to the page they requested
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/account/account.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/AccountPages/account/account.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css\");\n@charset \"UTF-8\";\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n  font: 16px/1 \"Open Sans\", sans-serif;\n  color: #555;\n  background: #e5e5e5;\n}\nbody {\n  padding: 50px;\n}\n.accordion {\n  transform: translateZ(0);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n.accordion > .accordion-toggle {\n  position: absolute;\n  opacity: 0;\n  display: none;\n}\n.accordion > label {\n  position: relative;\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 40px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-bottom: 70px;\n  background: #fff;\n  color: lightslategrey;\n  cursor: pointer;\n  border-bottom: 1px solid #e6e6e6;\n}\n.first,\n.second {\n  padding-top: 30px;\n}\nlabel {\n  margin-bottom: 0px !important;\n}\n.accordion > label:after {\n  content: \"\";\n  color: #5499da;\n  position: absolute;\n  top: 0px;\n  right: 40px;\n  font-family: fontawesome;\n  transform: rotate(180deg);\n  transition: 0.3s transform;\n}\nsection {\n  padding-left: 10px;\n}\n.accordion > section {\n  height: 0;\n  transition: 0.3s all;\n  overflow: hidden;\n}\n.accordion > .accordion-toggle:checked ~ label:after {\n  transform: rotate(0deg);\n}\n.accordion > .accordion-toggle:checked ~ section {\n  height: 200px;\n}\n.second > .accordion-toggle:checked ~ section {\n  height: 300px;\n}\n.accordion > section p {\n  margin: 15px 0;\n  padding: 0 40px;\n  line-height: 1.5;\n}\n.label {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #c7c7c7;\n}\n.detail {\n  color: #707070;\n}\n/* Create two equal columns that floats next to each other */\n.column {\n  float: left;\n  width: 50%;\n  padding: 30px;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.reset-pwd {\n  margin-left: 40px;\n  margin-top: 25px;\n}\n.below {\n  padding-top: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQWNjb3VudFBhZ2VzL2FjY291bnQvQzpcXFVzZXJzXFxSeWFuXFxEZXNrdG9wXFxVTklcXDNyZFllYXJcXE5XRU4zMDRcXHRlYW00cmVudGZsaXhcXEFuZ3VsYXJcXFJlbnRmbGl4L3NyY1xcYXBwXFxwYWdlc1xcQWNjb3VudFBhZ2VzXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxzRkFBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRENBOzs7RUFHRSxzQkFBQTtBQ0VGO0FEQ0E7O0VBRUUsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7QUNFRjtBRENBO0VBQ0Usd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0VGO0FEQ0E7O0VBRUUsaUJBQUE7QUNFRjtBRENBO0VBQ0UsNkJBQUE7QUNFRjtBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDR0Y7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QUREQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSUY7QUREQTtFQUNFLHVCQUFBO0FDSUY7QUREQTtFQUNFLGFBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtBQ0lGO0FEREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7QUREQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSUY7QUREQTtFQUNFLGNBQUE7QUNJRjtBRERBLDREQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNJRjtBRERBLG1DQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNJRjtBRERBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0lGO0FEREE7RUFDSSw0QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvQWNjb3VudFBhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4yLjAvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIik7XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQ6IDE2cHgvMSBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24gPiAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFjY29yZGlvbiA+IGxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxufVxyXG5cclxuLmZpcnN0LFxyXG4uc2Vjb25kIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hY2NvcmRpb24gPiBsYWJlbDphZnRlciB7XHJcbiAgY29udGVudDogXCJcXGYwNzdcIjtcclxuICBjb2xvcjogcmdiKDg0LCAxNTMsIDIxOCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmFjY29yZGlvbiA+IHNlY3Rpb24ge1xyXG4gIGhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG5cclxuLmFjY29yZGlvbiA+IC5hY2NvcmRpb24tdG9nZ2xlOmNoZWNrZWQgfiBzZWN0aW9uIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2Vjb25kID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IHNlY3Rpb24ge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24gPiBzZWN0aW9uIHAge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xyXG59XHJcblxyXG4uZGV0YWlsIHtcclxuICBjb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5yZXNldC1wd2Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5iZWxvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjIuMC9jc3MvZm9udC1hd2Vzb21lLmNzc1wiKTtcbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQ6IDE2cHgvMSBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hY2NvcmRpb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5hY2NvcmRpb24gPiAuYWNjb3JkaW9uLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFjY29yZGlvbiA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5maXJzdCxcbi5zZWNvbmQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjY29yZGlvbiA+IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCLvgbdcIjtcbiAgY29sb3I6ICM1NDk5ZGE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYWNjb3JkaW9uID4gc2VjdGlvbiB7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY2NvcmRpb24gPiAuYWNjb3JkaW9uLXRvZ2dsZTpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLmFjY29yZGlvbiA+IC5hY2NvcmRpb24tdG9nZ2xlOmNoZWNrZWQgfiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlY29uZCA+IC5hY2NvcmRpb24tdG9nZ2xlOmNoZWNrZWQgfiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmFjY29yZGlvbiA+IHNlY3Rpb24gcCB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjYzdjN2M3O1xufVxuXG4uZGV0YWlsIHtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucmVzZXQtcHdkIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5iZWxvdyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/account/account.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/AccountPages/account/account.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AccountComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function () { return AccountComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            var AccountComponent = /** @class */ (function () {
                function AccountComponent(loginService) {
                    this.loginService = loginService;
                }
                AccountComponent.prototype.ngOnInit = function () {
                    this.getAccountDetails();
                };
                AccountComponent.prototype.getAccountDetails = function () {
                    var _this = this;
                    this.loginService.getAccountDetails(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            _this.account = response.results;
                            console.log(_this.account);
                        });
                    });
                };
                return AccountComponent;
            }());
            AccountComponent.ctorParameters = function () { return [
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
            ]; };
            AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-account',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/AccountPages/account/account.component.scss")).default]
                })
            ], AccountComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/library/library.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/AccountPages/library/library.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRQYWdlcy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/library/library.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/AccountPages/library/library.component.ts ***!
          \*****************************************************************/
        /*! exports provided: LibraryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () { return LibraryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            /* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            var LibraryComponent = /** @class */ (function () {
                function LibraryComponent(moviedb, orderService, loginService) {
                    this.moviedb = moviedb;
                    this.orderService = orderService;
                    this.loginService = loginService;
                    this.orders = [];
                }
                LibraryComponent.prototype.ngOnInit = function () {
                    this.moviedb.clearMovieArray();
                    this.getOrders();
                };
                LibraryComponent.prototype.getOrders = function () {
                    var _this = this;
                    this.orderService.getOrders(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            _this.orders = response.message;
                            _this.convertCart();
                        });
                    });
                };
                LibraryComponent.prototype.convertCart = function () {
                    var _this = this;
                    this.moviedb.clearMovieArray();
                    this.orders.forEach(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.moviedb.getMovieFromID3(val)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                /* Determines an arbitrary price for a given movie,
                 * based on the release date of said movie
                 */
                LibraryComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    console.log(year);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                LibraryComponent.prototype.displayResults = function () {
                    var filteredArr = this.moviedb.getMovieArray2().reduce(function (unique, o) {
                        if (!unique.some(function (obj) { return obj.id === o.id; })) {
                            unique.push(o);
                        }
                        return unique;
                    }, []);
                    return filteredArr;
                };
                return LibraryComponent;
            }());
            LibraryComponent.ctorParameters = function () { return [
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
                { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
            ]; };
            LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-library',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./library.component.scss */ "./src/app/pages/AccountPages/library/library.component.scss")).default]
                })
            ], LibraryComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/orders/orders.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/AccountPages/orders/orders.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".clean-block {\n  background-color: #f6f6f6;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQWNjb3VudFBhZ2VzL29yZGVycy9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxBY2NvdW50UGFnZXNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRQYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFuLWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxyXG59XHJcbiIsIi5jbGVhbi1ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/AccountPages/orders/orders.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/AccountPages/orders/orders.component.ts ***!
          \***************************************************************/
        /*! exports provided: OrdersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () { return OrdersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            var OrdersComponent = /** @class */ (function () {
                function OrdersComponent(loginService, orderService, moviedb) {
                    this.loginService = loginService;
                    this.orderService = orderService;
                    this.moviedb = moviedb;
                    this.orders = [];
                }
                OrdersComponent.prototype.ngOnInit = function () {
                    this.moviedb.clearMovieArray();
                    this.getOrders();
                };
                OrdersComponent.prototype.getOrders = function () {
                    var _this = this;
                    this.orderService.getOrders(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            _this.orders = response.message;
                            _this.convertCart();
                        });
                    });
                };
                OrdersComponent.prototype.convertCart = function () {
                    var _this = this;
                    this.moviedb.clearMovieArray();
                    this.orders.forEach(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.moviedb.getMovieFromID3(val)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                OrdersComponent.prototype.getArray = function () {
                    var temp = this.moviedb.getMovieArray2();
                    this.mapOrders = this.groupBy(temp, function (time) { return time.timeAdded; });
                    return this.mapOrders;
                };
                OrdersComponent.prototype.getTotalCost = function () {
                    return this.moviedb.getTotalCartCost();
                };
                OrdersComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                OrdersComponent.prototype.groupBy = function (list, keyGetter) {
                    var map = new Map();
                    list.forEach(function (item) {
                        var key = keyGetter(item);
                        var collection = map.get(key);
                        if (!collection) {
                            map.set(key, [item]);
                        }
                        else {
                            collection.push(item);
                        }
                    });
                    return map;
                };
                OrdersComponent.prototype.calcTotal = function (r) {
                    function updateCost(data) {
                        var year = data.substring(0, 4);
                        if (year >= 2019) {
                            return 8.99;
                        }
                        else if (year <= 2018 && year > 2015) {
                            return 5.99;
                        }
                        return 3.99;
                    }
                    var total = 0.00;
                    r.forEach(function (val) {
                        total += updateCost(val.releaseDate);
                    });
                    return total;
                };
                OrdersComponent.prototype.getDate = function (timeAdded) {
                    var date = new Date(timeAdded);
                    return date.toDateString() + ' ' + date.getDay() + ":" + date.getMinutes();
                };
                return OrdersComponent;
            }());
            OrdersComponent.ctorParameters = function () { return [
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TMDBService"] }
            ]; };
            OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-orders',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/AccountPages/orders/orders.component.scss")).default]
                })
            ], OrdersComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/cart/cart.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/pages/cart/cart.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-block .block-heading p {\n  max-width: 600px;\n}\n\n.clean-block .block-heading {\n  padding-top: 140px;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCsucGFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxufVxyXG4iLCIuY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCArIC5wYWdlIHtcbiAgcGFkZGluZy10b3A6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/cart/cart.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/cart/cart.component.ts ***!
          \**********************************************/
        /*! exports provided: CartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function () { return CartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            /* harmony import */ var _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart-service/cart.service */ "./src/app/services/cart-service/cart.service.ts");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_recommendation_service_recommendation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/recommendation-service/recommendation.service */ "./src/app/services/recommendation-service/recommendation.service.ts");
            var CartComponent = /** @class */ (function () {
                function CartComponent(cartService, loginService, moviedb, ordersService, router, recommendation) {
                    this.cartService = cartService;
                    this.loginService = loginService;
                    this.moviedb = moviedb;
                    this.ordersService = ordersService;
                    this.router = router;
                    this.recommendation = recommendation;
                    this.cart = [];
                    this.totalPrice = 0.00;
                }
                CartComponent.prototype.ngOnInit = function () {
                    this.moviedb.clearMovieArray();
                    this.cart = [];
                    this.totalPrice = 0.00;
                    this.moviedb.resetTotalCartCost();
                    this.getCart();
                };
                CartComponent.prototype.getCart = function () {
                    var _this = this;
                    this.totalPrice = 0.00;
                    this.cartService.getCart(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            _this.cart = response.message;
                            console.log(_this.cart);
                            _this.convertCart();
                        });
                    });
                };
                CartComponent.prototype.convertCart = function () {
                    var _this = this;
                    this.moviedb.clearMovieArray();
                    this.cart.forEach(function (m) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.moviedb.getMovieFromID2(m.item_id)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                CartComponent.prototype.getArray = function () {
                    return this.moviedb.getMovieArray();
                };
                CartComponent.prototype.getTotalCost = function () {
                    return this.moviedb.getTotalCartCost();
                };
                CartComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                CartComponent.prototype.addToOrder = function () {
                    var _this = this;
                    // console.log(this.loginService.getUserToken());
                    this.ordersService.orderCart(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            // console.log(response.message);
                            if (response.valid === true) {
                                _this.router.navigate(['/recommended']);
                            }
                        });
                    });
                    // forward cart to recommendation service
                    this.recommendation.storeCart(this.getArray());
                };
                CartComponent.prototype.removeFromCart = function (id) {
                    var _this = this;
                    this.cartService.removeFromCartItem(this.loginService.getUserToken(), id).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            console.log(response.message + response.status);
                            _this.ngOnInit();
                        });
                    });
                };
                return CartComponent;
            }());
            CartComponent.ctorParameters = function () { return [
                { type: _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
                { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _services_recommendation_service_recommendation_service__WEBPACK_IMPORTED_MODULE_7__["RecommendationService"] }
            ]; };
            CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")).default]
                })
            ], CartComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/catalog/catalog.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/pages/catalog/catalog.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".clean-block .block-heading p {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxjYXRhbG9nXFxjYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5nIHAge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxufSIsIi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/catalog/catalog.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/catalog/catalog.component.ts ***!
          \****************************************************/
        /*! exports provided: CatalogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () { return CatalogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CatalogComponent = /** @class */ (function () {
                function CatalogComponent(TMDBService, Activatedroute) {
                    this.TMDBService = TMDBService;
                    this.Activatedroute = Activatedroute;
                    this.pagesarray = new Array();
                    this.count = 0;
                    this.max = 40;
                    this.limit = 9;
                    this.page = 0;
                    this.maxpage = 0;
                    this.sort_by = 'popularity.desc';
                }
                CatalogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.Activatedroute.paramMap.subscribe(function (params) {
                        var page = params.get('page');
                        _this.page = +page;
                    });
                    this.TMDBService.discoverNewest();
                    this.TMDBService.discoverPopular();
                    this.TMDBService.getGenres();
                };
                /* Returns a list of four new releases to display
                 * on the landing page of our site
                 */
                CatalogComponent.prototype.getNewReleases = function () {
                    if (this.TMDBService.getNewest()) {
                        this.newReleases = this.TMDBService.getNewest().slice(0, this.max);
                    }
                    // remove any results that have no poster
                    if (this.newReleases) {
                        return this.newReleases.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Returns a list of four popular films to display
                 * on the landing page of our site
                 */
                CatalogComponent.prototype.getPopular = function () {
                    if (this.TMDBService.getPopular()) {
                        this.popular = this.TMDBService.getPopular().slice(0, this.max);
                    }
                    // remove any results that have no poster
                    if (this.popular) {
                        return this.popular.filter(function (t) { return t.poster_path != null; });
                    }
                };
                CatalogComponent.prototype.getWithGenre = function (id) {
                    if (id) {
                        this.TMDBService.discoverByGenre(id);
                        this.moviesWithGenre = this.TMDBService.getResults().slice(0, this.max);
                    }
                    // remove any results that have no poster
                    if (this.moviesWithGenre) {
                        return this.moviesWithGenre.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Determines an arbitrary price for a given movie,
                 * based on the release date of said movie
                 */
                CatalogComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                CatalogComponent.prototype.displayResults = function (page) {
                    var results = this.limit * (page - 1);
                    var value = document.getElementById('genres').value;
                    if (value === 'any') {
                        this.results = this.getPopular();
                    }
                    else {
                        this.results = this.getWithGenre(value);
                    }
                    if (results > this.max - this.limit) {
                        return this.results.slice(results, this.max);
                    }
                    this.numberOfPages(this.results);
                    return this.results.slice(results, this.limit + results);
                };
                CatalogComponent.prototype.numberOfPages = function (res) {
                    this.pagesarray = [];
                    var page = Math.ceil(res.length / this.limit);
                    for (var i = 0; i < page; i++) {
                        this.pagesarray.push(i + 1);
                    }
                    this.maxpage = this.pagesarray[this.pagesarray.length - 1];
                };
                CatalogComponent.prototype.getPages = function () {
                    return this.pagesarray;
                };
                // public getWithGenre(id) {
                //   this.content.scrollToTop(200);
                //   this.currentGenre = id;
                //   if(id) {
                //     this.discover.discoverByGenre(id, this.sort_by)
                //   }
                //   else {
                //     this.discover.discover(this.sort_by)
                //   }
                //   this.showGenres = false;
                //   this.scrollerClass = "scroll";
                // }
                // public getResults() {
                //   this.results = this.discover.getResults()
                //   if (this.results) return this.results.filter(t => t.poster_path != null);
                // }
                CatalogComponent.prototype.getGenresList = function () {
                    this.genres = this.TMDBService.getGenresList();
                    if (this.genres) {
                        return this.genres;
                    }
                };
                return CatalogComponent;
            }());
            CatalogComponent.ctorParameters = function () { return [
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-catalog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalog.component.scss */ "./src/app/pages/catalog/catalog.component.scss")).default]
                })
            ], CatalogComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/pages/home/home.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".movie-display-row {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-spacing: 10px;\n}\n\n.movie-display-col {\n  display: table-cell;\n}\n\n.movie-display-row {\n  padding-bottom: 100px;\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtZGlzcGxheS1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkOyBcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxMHB4OyBcclxufVxyXG5cclxuLm1vdmllLWRpc3BsYXktY29sIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbi5tb3ZpZS1kaXNwbGF5LXJvdyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LDI0NiwyNDYpO1xyXG59IiwiLm1vdmllLWRpc3BsYXktcm93IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItc3BhY2luZzogMTBweDtcbn1cblxuLm1vdmllLWRpc3BsYXktY29sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLm1vdmllLWRpc3BsYXktcm93IHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(TMDBService, loginService, router) {
                    this.TMDBService = TMDBService;
                    this.loginService = loginService;
                    this.router = router;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.TMDBService.discoverTopRated();
                    this.TMDBService.discoverPopular();
                };
                /* Returns a list of four new releases to display
                 * on the landing page of our site
                 */
                HomeComponent.prototype.getTopRated = function () {
                    if (this.TMDBService.getTopRated()) {
                        this.topRated = this.TMDBService.getTopRated().slice(0, 4);
                    }
                    // remove any results that have no poster
                    if (this.topRated) {
                        return this.topRated.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Returns a list of four popular films to display
                 * on the landing page of our site
                 */
                HomeComponent.prototype.getPopular = function () {
                    if (this.TMDBService.getPopular()) {
                        this.popular = this.TMDBService.getPopular().slice(0, 4);
                    }
                    // remove any results that have no poster
                    if (this.popular) {
                        return this.popular.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Determines an arbitrary price for a given movie,
                 * based on the release date of said movie
                 */
                HomeComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    // console.log(year);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/login/login.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/pages/login/login.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n\n.has-error input[type=username],\n.has-error input[type=password] {\n  border-color: #d80c0c;\n  color: #e60e0e;\n}\n\n.google {\n  width: 84%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n\nform {\n  box-shadow: none !important;\n}\n\n.content {\n  width: 42%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxSeWFuXFxEZXNrdG9wXFxVTklcXDNyZFllYXJcXE5XRU4zMDRcXHRlYW00cmVudGZsaXhcXEFuZ3VsYXJcXFJlbnRmbGl4L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoXHJcbn1cclxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwidXNlcm5hbWVcIl0sXHJcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyMTYsIDEyLCAxMik7XHJcbiAgY29sb3I6IHJnYigyMzAsIDE0LCAxNCk7XHJcbn1cclxuXHJcbi5nb29nbGUge1xyXG4gIHdpZHRoOiA4NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiA0MiU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9dXNlcm5hbWVdLFxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJvcmRlci1jb2xvcjogI2Q4MGMwYztcbiAgY29sb3I6ICNlNjBlMGU7XG59XG5cbi5nb29nbGUge1xuICB3aWR0aDogODQlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5mb3JtIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA0MiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/login/login.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, loginService, router, authService) {
                    this.formBuilder = formBuilder;
                    this.loginService = loginService;
                    this.router = router;
                    this.authService = authService;
                    this.isSubmitted = false;
                    this.loginForm = formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                }
                Object.defineProperty(LoginComponent.prototype, "formControls", {
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.authState.subscribe(function (user) {
                        _this.user = user;
                        _this.loggedIn = (user != null);
                    });
                };
                LoginComponent.prototype.signInWithGoogle = function () {
                    var _this = this;
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID).then(function (res) {
                        _this.loginService.registerGoogleUser(res.email, res.firstName, res.authToken).then(function (response) {
                            response.subscribe(function (data) {
                                var isOk = data;
                                if (isOk.valid) {
                                    _this.loginService.setUserToken(isOk.message);
                                    _this.loginService.setAuth(true);
                                    _this.loginService.startTimer();
                                    _this.router.navigate(['/home']);
                                }
                            });
                        });
                    });
                };
                LoginComponent.prototype.signOut = function () {
                    this.authService.signOut();
                };
                LoginComponent.prototype.onLogin = function (value) {
                    var _this = this;
                    this.isSubmitted = true;
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loginService.getAuthentication(value.username, value.password).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            if (response.valid === true) {
                                _this.loginService.setUserToken(response.message);
                                _this.loginService.setAuth(true);
                                _this.loginService.startTimer();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                console.log('Invalid Login');
                                _this.loginForm.controls.username.setErrors({ invalid: true });
                            }
                        });
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/payment/payment.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/pages/payment/payment.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f6f6f6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LDI0NiwyNDYpICFpbXBvcnRhbnQ7XHJcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNiAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/payment/payment.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/payment/payment.component.ts ***!
          \****************************************************/
        /*! exports provided: PaymentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () { return PaymentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaymentComponent = /** @class */ (function () {
                function PaymentComponent() {
                }
                PaymentComponent.prototype.ngOnInit = function () {
                };
                return PaymentComponent;
            }());
            PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.scss */ "./src/app/pages/payment/payment.component.scss")).default]
                })
            ], PaymentComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/product/product.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/pages/product/product.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".block-content {\n  padding-top: 200px;\n}\n\n.poster {\n  height: 70%;\n  width: 70%;\n  margin-left: 80px;\n  margin-top: 20px;\n}\n\n.clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-related-item {\n  padding-top: 0px !important;\n  border: none;\n}\n\n.clean-block.clean-product .block-content {\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9DOlxcVXNlcnNcXFJ5YW5cXERlc2t0b3BcXFVOSVxcM3JkWWVhclxcTldFTjMwNFxcdGVhbTRyZW50ZmxpeFxcQW5ndWxhclxcUmVudGZsaXgvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0XFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG59XHJcblxyXG4ucG9zdGVyIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcblxyXG4uY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCsucGFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGVhbi1yZWxhdGVkLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAuYmxvY2stY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxufVxyXG5cclxuIiwiLmJsb2NrLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5wb3N0ZXIge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jbGVhbi1uYXZiYXIuZml4ZWQtdG9wICsgLnBhZ2Uge1xuICBwYWRkaW5nLXRvcDogMGVtICFpbXBvcnRhbnQ7XG59XG5cbi5jbGVhbi1yZWxhdGVkLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLmJsb2NrLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/product/product.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/product/product.component.ts ***!
          \****************************************************/
        /*! exports provided: ProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function () { return ProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart-service/cart.service */ "./src/app/services/cart-service/cart.service.ts");
            var ProductComponent = /** @class */ (function () {
                // tslint:disable-next-line:max-line-length
                function ProductComponent(cartService, router, Activatedroute, TMDBService, loginService) {
                    this.cartService = cartService;
                    this.router = router;
                    this.Activatedroute = Activatedroute;
                    this.TMDBService = TMDBService;
                    this.loginService = loginService;
                }
                ProductComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.Activatedroute.paramMap.subscribe(function (params) {
                        _this.id = params.get('id');
                    });
                    this.TMDBService.getMovieFromID(this.id);
                    this.TMDBService.getMovieReviews(this.id);
                    this.TMDBService.getRelatedMovies(this.id);
                };
                ProductComponent.prototype.OnDestroy = function () {
                    this.sub.unsubscribe();
                };
                ProductComponent.prototype.getMovie = function () {
                    return this.TMDBService.getMovie();
                };
                ProductComponent.prototype.getReview = function () {
                    if (this.TMDBService.getReviews()) {
                        this.reviews = this.TMDBService.getReviews().slice(0, 3);
                    }
                    if (this.reviews) {
                        return this.reviews;
                    }
                };
                /* Returns a list of four popular films to display
                * on the landing page of our site
                */
                ProductComponent.prototype.getRelated = function () {
                    if (this.TMDBService.getRelated()) {
                        this.related = this.TMDBService.getRelated().slice(0, 4);
                    }
                    // remove any results that have no poster
                    if (this.related) {
                        return this.related.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Determines an arbitrary price for a given movie,
                * based on the release date of said movie
                */
                ProductComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    // console.log(year);
                    if (year >= 2019) {
                        this.price = 8.99;
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        this.price = 5.99;
                        return '$5.99';
                    }
                    this.price = 3.99;
                    return '$3.99';
                };
                ProductComponent.prototype.additemToCart = function () {
                    if (this.loginService.isAuthenticated()) {
                        this.cartService.addToCartItem(this.loginService.getUserToken(), this.getMovie().id).then(function (som) {
                            som.subscribe(function (data) {
                                var response = data;
                                console.log('hi');
                                console.log(response.message);
                                console.log('end');
                            });
                        });
                    }
                    else {
                        this.router.navigate(['/login']);
                    }
                };
                return ProductComponent;
            }());
            ProductComponent.ctorParameters = function () { return [
                { type: _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TMDBService"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
            ]; };
            ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")).default]
                })
            ], ProductComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/recommendation/recommendation.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/recommendation/recommendation.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  margin-top: 4rem;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjb21tZW5kYXRpb24vQzpcXFVzZXJzXFxSeWFuXFxEZXNrdG9wXFxVTklcXDNyZFllYXJcXE5XRU4zMDRcXHRlYW00cmVudGZsaXhcXEFuZ3VsYXJcXFJlbnRmbGl4L3NyY1xcYXBwXFxwYWdlc1xccmVjb21tZW5kYXRpb25cXHJlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxufSIsImgxIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/recommendation/recommendation.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/pages/recommendation/recommendation.component.ts ***!
          \******************************************************************/
        /*! exports provided: RecommendationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function () { return RecommendationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_recommendation_service_recommendation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recommendation-service/recommendation.service */ "./src/app/services/recommendation-service/recommendation.service.ts");
            var RecommendationComponent = /** @class */ (function () {
                function RecommendationComponent(recommendationService) {
                    var _this = this;
                    this.recommendationService = recommendationService;
                    this.recommended = [];
                    this.getRecommended = function () { return _this.recommended; };
                }
                RecommendationComponent.prototype.ngOnInit = function () {
                    this.getRecommendedMovies();
                };
                /* Returns a list of four new releases to display
                 * on the landing page of our site
                 */
                RecommendationComponent.prototype.getRecommendedMovies = function () {
                    if (this.recommendationService.getRecommendedMovies()) {
                        this.recommended = this.recommendationService.getRecommendedMovies().slice(0, 4);
                    }
                    // remove any results that have no poster
                    if (this.recommended) {
                        return this.recommended.filter(function (t) { return t.poster_path != null; });
                    }
                };
                /* Determines an arbitrary price for a given movie,
                  * based on the release date of said movie
                  */
                RecommendationComponent.prototype.getPrice = function (date) {
                    var year = date.substring(0, 4);
                    if (year >= 2019) {
                        return '$8.99';
                    }
                    else if (year <= 2018 && year > 2015) {
                        return '$5.99';
                    }
                    return '$3.99';
                };
                return RecommendationComponent;
            }());
            RecommendationComponent.ctorParameters = function () { return [
                { type: src_app_services_recommendation_service_recommendation_service__WEBPACK_IMPORTED_MODULE_2__["RecommendationService"] }
            ]; };
            RecommendationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-recommendation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recommendation/recommendation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendation.component.scss */ "./src/app/pages/recommendation/recommendation.component.scss")).default]
                })
            ], RecommendationComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/registration/registration.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/pages/registration/registration.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL0M6XFxVc2Vyc1xcUnlhblxcRGVza3RvcFxcVU5JXFwzcmRZZWFyXFxOV0VOMzA0XFx0ZWFtNHJlbnRmbGl4XFxBbmd1bGFyXFxSZW50ZmxpeC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLWhlaWdodDogODB2aDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/registration/registration.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/registration/registration.component.ts ***!
          \**************************************************************/
        /*! exports provided: MustMatch, RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function () { return MustMatch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            function MustMatch(controlName, matchingControlName) {
                return function (formGroup) {
                    var control = formGroup.controls[controlName];
                    var matchingControl = formGroup.controls[matchingControlName];
                    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                        // return if another validator has already found an error on the matchingControl
                        return;
                    }
                    // set error on matchingControl if validation fails
                    if (control.value !== matchingControl.value) {
                        matchingControl.setErrors({ mustMatch: true });
                    }
                    else {
                        matchingControl.setErrors(null);
                    }
                };
            }
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(formBuilder, loginService, router) {
                    this.formBuilder = formBuilder;
                    this.loginService = loginService;
                    this.router = router;
                    this.submitted = false;
                    this.registerForm = formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
                        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    }, {
                        validator: MustMatch('password', 'confirmPassword')
                    });
                }
                Object.defineProperty(RegistrationComponent.prototype, "f", {
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegistrationComponent.prototype.ngOnInit = function () {
                };
                RegistrationComponent.prototype.onRegister = function (value) {
                    var _this = this;
                    this.submitted = true;
                    if (this.registerForm.invalid) {
                        return;
                    }
                    console.log(value.username + ' ' + value.password + ' ' + value.email);
                    this.loginService.registerUser(value.email, value.username, value.password).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            if (response.valid === true) {
                                _this.router.navigate(['/login']);
                            }
                            else {
                                console.log(data);
                            }
                        });
                    });
                };
                RegistrationComponent.prototype.onReset = function () {
                    this.submitted = false;
                    this.registerForm.reset();
                };
                return RegistrationComponent;
            }());
            RegistrationComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/pages/registration/registration.component.scss")).default]
                })
            ], RegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/reset-page/reset-page.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/pages/reset-page/reset-page.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhZ2UvcmVzZXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/reset-page/reset-page.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/pages/reset-page/reset-page.component.ts ***!
          \**********************************************************/
        /*! exports provided: ResetPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageComponent", function () { return ResetPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ResetPageComponent = /** @class */ (function () {
                function ResetPageComponent(formBuilder, loginService, router, Activatedroute) {
                    this.formBuilder = formBuilder;
                    this.loginService = loginService;
                    this.router = router;
                    this.Activatedroute = Activatedroute;
                    this.resetForm = formBuilder.group({
                        password: '',
                    });
                }
                ResetPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.Activatedroute.paramMap.subscribe(function (params) {
                        _this.token = params.get('token');
                    });
                };
                ResetPageComponent.prototype.onReset = function (value) {
                };
                return ResetPageComponent;
            }());
            ResetPageComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            ResetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-reset-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-page.component.scss */ "./src/app/pages/reset-page/reset-page.component.scss")).default]
                })
            ], ResetPageComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/search/search.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/pages/search/search.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".col-md-10 {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n\nform {\n  width: 100%;\n  display: flex;\n}\n\ninput {\n  flex: 1 1 auto;\n}\n\n*:focus {\n  border: 0px solid lightgray;\n  outline: none;\n  box-shadow: none;\n}\n\n::-webkit-input-placeholder {\n  color: lightgray;\n}\n\n::-moz-placeholder {\n  color: lightgray;\n}\n\n::-ms-input-placeholder {\n  color: lightgray;\n}\n\n::placeholder {\n  color: lightgray;\n}\n\n.search-bar {\n  border: 0px solid lightgray;\n  font-size: 1.5em;\n  height: 70px;\n  box-shadow: 0px 10px 5px 0px #e0e0e0;\n}\n\nbutton {\n  box-shadow: 0px 10px 5px 0px #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0M6XFxVc2Vyc1xcUnlhblxcRGVza3RvcFxcVU5JXFwzcmRZZWFyXFxOV0VOMzA0XFx0ZWFtNHJlbnRmbGl4XFxBbmd1bGFyXFxSZW50ZmxpeC9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREhBO0VBQ0ksZ0JBQUE7QUNFSjs7QURIQTtFQUNJLGdCQUFBO0FDRUo7O0FESEE7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0MsMkJBQUE7RUFDRCxnQkFBQTtFQUNJLFlBQUE7RUFHSixvQ0FBQTtBQ0dBOztBREFBO0VBR0Usb0NBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTEwIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5pbnB1dCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbio6Zm9jdXMge1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiBib3JkZXI6IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbmZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgyMjQsMjI0LDIyNCwxKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMjI0LDIyNCwyMjQsMSk7XHJcbmJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgyMjQsMjI0LDIyNCwxKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgyMjQsMjI0LDIyNCwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgyMjQsMjI0LDIyNCwxKTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMjI0LDIyNCwyMjQsMSk7XHJcbn1cclxuIiwiLmNvbC1tZC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlucHV0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbio6Zm9jdXMge1xuICBib3JkZXI6IDBweCBzb2xpZCBsaWdodGdyYXk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgaGVpZ2h0OiA3MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggI2UwZTBlMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4ICNlMGUwZTA7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggI2UwZTBlMDtcbn1cblxuYnV0dG9uIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4ICNlMGUwZTA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCAjZTBlMGUwO1xuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4ICNlMGUwZTA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/search/search.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/search/search.component.ts ***!
          \**************************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(TMDBService) {
                    var _this = this;
                    this.TMDBService = TMDBService;
                    this.isValidSearch = function () { return _this.TMDBService.isValidSearch(); };
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.validSearch = false;
                };
                SearchComponent.prototype.search = function (title) {
                    // alert(title)
                    this.TMDBService.searchTitle(title);
                    // this.validSearch = this.TMDBService.isValidSearch();
                };
                SearchComponent.prototype.getSearchResults = function () {
                    var results = this.TMDBService.getSearchResults();
                    if (results)
                        return results.filter(function (t) { return t.poster_path != null; });
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/services/cart-service/cart.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/services/cart-service/cart.service.ts ***!
          \*******************************************************/
        /*! exports provided: CartService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function () { return CartService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': '',
                })
            };
            var CartService = /** @class */ (function () {
                function CartService(http) {
                    this.http = http;
                    this.serverlink = 'http://rent-flix-api.herokuapp.com';
                }
                CartService.prototype.getCart = function (token) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.get(this.serverlink + "/cart", httpOptions)];
                        });
                    });
                };
                CartService.prototype.addToCartItem = function (token, itemId) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.post(this.serverlink + "/cart", { item_id: itemId }, httpOptions)];
                        });
                    });
                };
                CartService.prototype.removeFromCartItem = function (token, itemId) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.delete(this.serverlink + "/cart/" + itemId, httpOptions)];
                        });
                    });
                };
                return CartService;
            }());
            CartService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CartService);
            /***/ 
        }),
        /***/ "./src/app/services/login-service/login.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/services/login-service/login.service.ts ***!
          \*********************************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    username: '',
                    plainTextPass: '',
                    'X-Requested-With': '',
                })
            };
            var LoginService = /** @class */ (function () {
                function LoginService(http, matDialog, router) {
                    var _this = this;
                    this.http = http;
                    this.matDialog = matDialog;
                    this.router = router;
                    this.userToken = '';
                    this.auth = false;
                    this.serverlink = 'http://rent-flix-api.herokuapp.com';
                    this.timerExpired = false;
                    this.yes = true;
                    this.startTimer = function () {
                        _this.timer = setInterval(function () {
                            if (_this.timerExpired === true) {
                                console.log('Logging out');
                                _this.stopTimer();
                                _this.openDialog();
                            }
                            _this.timerExpired = true;
                        }, 600000); // 10 minutes
                    };
                    this.getTimer = function () {
                        return _this.timer;
                    };
                    this.resetTimer = function () {
                        _this.timerExpired = false;
                        _this.timer = setInterval(function () {
                            if (_this.timerExpired === true) {
                                console.log('Logging out');
                                _this.stopTimer();
                                _this.openDialog();
                            }
                            _this.timerExpired = true;
                        }, 600000); // 10 minutes
                    };
                    this.timer = null;
                }
                LoginService.prototype.getAuthentication = function (username, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('username', username);
                            httpOptions.headers =
                                httpOptions.headers.set('plainTextPass', password);
                            return [2 /*return*/, this.http.get(this.serverlink + "/user/authentication", httpOptions)];
                        });
                    });
                };
                LoginService.prototype.registerUser = function (email, username, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.http.post(this.serverlink + "/user", { email: email, username: username, password: password }, httpOptions)];
                        });
                    });
                };
                LoginService.prototype.registerGoogleUser = function (email, username, token) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var bool;
                        return __generator(this, function (_a) {
                            bool = true;
                            return [2 /*return*/, this.http.post(this.serverlink + "/user", { email: email, username: username, token: token, bool: bool }, httpOptions)];
                        });
                    });
                };
                LoginService.prototype.getAccountDetails = function (token) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.get(this.serverlink + "/user/details", httpOptions)];
                        });
                    });
                };
                LoginService.prototype.logout = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', this.getUserToken());
                            return [2 /*return*/, this.http.delete(this.serverlink + "/user/authentication", httpOptions)];
                        });
                    });
                };
                LoginService.prototype.stopTimer = function () {
                    this.timerExpired = true;
                    clearInterval(this.timer);
                    this.timer = null;
                };
                LoginService.prototype.setUserToken = function (token) {
                    this.userToken = token;
                };
                LoginService.prototype.getUserToken = function () {
                    return this.userToken;
                };
                LoginService.prototype.isAuthenticated = function () {
                    return this.auth;
                };
                LoginService.prototype.setAuth = function (auth) {
                    this.auth = auth;
                };
                LoginService.prototype.openDialog = function () {
                    var _this = this;
                    this.stopTimer();
                    var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
                    var dialogRef = this.matDialog.open(_component_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], dialogConfig);
                    dialogRef.afterClosed().subscribe(function (value) {
                        console.log("Dialog sent: " + value);
                        _this.logoutFunc();
                    });
                };
                LoginService.prototype.logoutFunc = function () {
                    var _this = this;
                    console.log('logingoust');
                    this.logout().then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            if (response.valid === true) {
                                _this.setUserToken('');
                                _this.setAuth(false);
                                _this.stopTimer();
                                _this.router.navigate(['/login']);
                            }
                            else {
                                console.log(response.message);
                            }
                        });
                    });
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/orders-service/orders.service.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/services/orders-service/orders.service.ts ***!
          \***********************************************************/
        /*! exports provided: OrdersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function () { return OrdersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'X-Requested-With': '',
                })
            };
            var OrdersService = /** @class */ (function () {
                function OrdersService(http) {
                    this.http = http;
                    this.serverlink = 'http://rent-flix-api.herokuapp.com';
                }
                OrdersService.prototype.getOrders = function (token) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.get(this.serverlink + "/orders", httpOptions)];
                        });
                    });
                };
                OrdersService.prototype.orderCart = function (token) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.log('token: ' + token);
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.post(this.serverlink + "/orders", {}, httpOptions)];
                        });
                    });
                };
                return OrdersService;
            }());
            OrdersService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OrdersService);
            /***/ 
        }),
        /***/ "./src/app/services/recommendation-service/recommendation.service.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/services/recommendation-service/recommendation.service.ts ***!
          \***************************************************************************/
        /*! exports provided: RecommendationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationService", function () { return RecommendationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
            var RecommendationService = /** @class */ (function () {
                function RecommendationService(TMDBService) {
                    var _this = this;
                    this.TMDBService = TMDBService;
                    this.cart = [];
                    this.genres = [];
                    this.recommended = [];
                    this.getRecommended = function () { return _this.recommended; };
                }
                RecommendationService.prototype.storeCart = function (currentCart) {
                    this.genres = [];
                    this.cart = currentCart;
                    this.addGenres();
                };
                RecommendationService.prototype.addGenres = function () {
                    for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
                        var movie = _a[_i];
                        for (var _b = 0, _c = movie.genres; _b < _c.length; _b++) {
                            var genre = _c[_b];
                            this.genres.push(genre.id);
                        }
                    }
                    console.log(this.genres);
                    this.getMostPopularGenre();
                };
                RecommendationService.prototype.getMostPopularGenre = function () {
                    var maxOccurance = -1;
                    var m = 0;
                    var item;
                    for (var i = 0; i < this.genres.length; i++) {
                        for (var j = i; j < this.genres.length; j++) {
                            if (this.genres[i] == this.genres[j])
                                m++;
                            if (maxOccurance < m) {
                                maxOccurance = m;
                                item = this.genres[i];
                            }
                        }
                        m = 0;
                    }
                    // this.mostPopularGenre = item;
                    this.getRecommendedFromService(item);
                };
                RecommendationService.prototype.getRecommendedFromService = function (id) {
                    console.log(id);
                    this.TMDBService.discoverByGenre2(id);
                    // this.recommended = this.TMDBService.getResults();
                    // console.log(this.recommended)
                };
                RecommendationService.prototype.getRecommendedMovies = function () {
                    return this.TMDBService.getRecommended();
                };
                return RecommendationService;
            }());
            RecommendationService.ctorParameters = function () { return [
                { type: src_app_services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] }
            ]; };
            RecommendationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], RecommendationService);
            /***/ 
        }),
        /***/ "./src/app/services/tmdb-service/tmdb.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/services/tmdb-service/tmdb.service.ts ***!
          \*******************************************************/
        /*! exports provided: TMDBService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMDBService", function () { return TMDBService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TMDBService = /** @class */ (function () {
                function TMDBService(http) {
                    var _this = this;
                    this.http = http;
                    this.apiKey = 'a3a2f627df576a24a77620f55e7d04e2';
                    this.apiDiscover = "https://api.themoviedb.org/3/discover/movie";
                    this.apiGenres = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + this.apiKey + "&language=en-US";
                    this.apiDetails = "https://api.themoviedb.org/3/movie";
                    this.apiSearch = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey;
                    this.totalCartCost = 0.00;
                    this.getNewest = function () { return _this.newest; };
                    this.getOldest = function () { return _this.oldest; };
                    this.getTopRated = function () { return _this.topRated; };
                    this.getPopular = function () { return _this.popular; };
                    this.getMovie = function () { return _this.movie; };
                    this.getMovieArray = function () { return _this.customMovieArray; };
                    this.getMovieArray2 = function () { return _this.customMovieArray2; };
                    this.getTotalCartCost = function () { return _this.totalCartCost; };
                    this.resetTotalCartCost = function () { return _this.totalCartCost = 0.00; };
                    this.getReviews = function () { return _this.reviews; };
                    this.getRelated = function () { return _this.related; };
                    this.getResults = function () { return _this.results; };
                    this.getRecommended = function () { return _this.recommended; };
                    this.getSearchResults = function () { return _this.searchResults; };
                    this.getGenresList = function () { return _this.genres; };
                    this.isValidSearch = function () { return _this.validSearch; };
                }
                /* Gets the latest movies from TMDB
                to display on the landing page */
                TMDBService.prototype.discoverNewest = function (sort_by) {
                    var _this = this;
                    if (sort_by === void 0) { sort_by = 'date.asc'; }
                    this.http
                        .get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=" + sort_by + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.newest = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                /* Gets the olders movies from TMDB
              to display on the landing page */
                TMDBService.prototype.discoverOldest = function (sort_by) {
                    var _this = this;
                    if (sort_by === void 0) { sort_by = 'date.desc'; }
                    this.http
                        .get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=" + sort_by + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.oldest = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                /* Gets the most popular movies from TMDB
                to display on the landing page */
                TMDBService.prototype.discoverPopular = function (sort_by) {
                    var _this = this;
                    if (sort_by === void 0) { sort_by = 'popularity.desc'; }
                    this.http
                        .get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=" + sort_by + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.popular = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                /* Gets the top rated movies from TMDB
                to display on the landing page */
                TMDBService.prototype.discoverTopRated = function () {
                    var _this = this;
                    this.http
                        .get(this.apiDetails + "/top_rated?api_key=" + this.apiKey, { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.topRated = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.getMovieFromID = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.http
                                .get(this.apiDetails + "/" + id + "?api_key=" + this.apiKey, { responseType: 'text' })
                                .subscribe(function (response) {
                                var responseBody = JSON.parse(response);
                                // console.log(responseBody);
                                _this.movie = responseBody;
                                console.log(_this.movie);
                            }, function (err) {
                                console.log(err);
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                TMDBService.prototype.clearMovieArray = function () {
                    this.customMovieArray = [];
                    this.customMovieArray2 = [];
                };
                TMDBService.prototype.getMovieFromID2 = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        function updateCost(data) {
                            var year = data.substring(0, 4);
                            console.log(year);
                            if (year >= 2019) {
                                return 8.99;
                            }
                            else if (year <= 2018 && year > 2015) {
                                return 5.99;
                            }
                            return 3.99;
                        }
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.http
                                .get(this.apiDetails + "/" + id + "?api_key=" + this.apiKey, { responseType: 'text' })
                                .subscribe(function (response) {
                                var responseBody = JSON.parse(response);
                                // console.log(responseBody);
                                _this.customMovieArray.push({ id: responseBody.id, title: responseBody.title, releaseDate: responseBody.release_date, posterPath: responseBody.poster_path, genres: responseBody.genres });
                                _this.totalCartCost += updateCost(responseBody.release_date);
                            }, function (err) {
                                console.log(err);
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                TMDBService.prototype.getMovieFromID3 = function (objs) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.http.get(this.apiDetails + "/" + objs.item_id + "?api_key=" + this.apiKey, { responseType: 'text' }).subscribe(function (response) {
                                var responseBody = JSON.parse(response);
                                // console.log(responseBody);
                                _this.customMovieArray2.push({ id: objs.item_id, title: responseBody.title, releaseDate: responseBody.release_date,
                                    posterPath: responseBody.poster_path, timeAdded: objs.purchase_date, averageVote: responseBody.vote_average, homePage: responseBody.homepage });
                                // this.totalCartCost += updateCost1(responseBody.release_date);
                            }, function (err) {
                                console.log(err);
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                TMDBService.prototype.getMovieReviews = function (id) {
                    var _this = this;
                    this.http
                        .get("https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=" + this.apiKey, { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.reviews = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.getRelatedMovies = function (id) {
                    var _this = this;
                    this.http
                        .get("https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=" + this.apiKey, { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(responseBody);
                        _this.related = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.getGenres = function () {
                    var _this = this;
                    this.http.get(this.apiGenres, { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        // console.log(this.genres)
                        _this.genres = responseBody.genres;
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.discoverByGenre = function (id, sort_by) {
                    var _this = this;
                    if (sort_by === void 0) { sort_by = 'popularity.desc'; }
                    this.http.get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=popularity.desc&with_genres=" + id + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        console.log(responseBody.results);
                        _this.results = responseBody.results;
                        _this.recommended = responseBody.results;
                    }, function (err) {
                        console.log(err);
                    });
                    console.log(this.results);
                };
                TMDBService.prototype.discoverByGenre2 = function (id) {
                    var _this = this;
                    this.http.get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=popularity.desc&with_genres=" + id + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        console.log(responseBody.results);
                        _this.recommended = responseBody.results;
                        console.log(_this.recommended);
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.discover = function (sort_by) {
                    var _this = this;
                    if (sort_by === void 0) { sort_by = 'popularity.desc'; }
                    this.http.get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=" + sort_by + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        _this.results = responseBody.results;
                        console.log(responseBody.results);
                    }, function (err) {
                        console.log(err);
                    });
                };
                TMDBService.prototype.searchTitle = function (title) {
                    if (!title) {
                        this.validSearch = false;
                        this.notProvided = true;
                        this.notFound = false;
                    }
                    else {
                        this.getValidSearchResults(title);
                    }
                };
                TMDBService.prototype.getValidSearchResults = function (title) {
                    var _this = this;
                    this.http.get(this.apiSearch + "&language=en-US&query=" + title, { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        if (responseBody.Error) {
                            _this.validSearch = false;
                            _this.notFound = true;
                            _this.notProvided = false;
                        }
                        else {
                            _this.validSearch = true;
                            _this.notFound = false;
                            _this.notProvided = false;
                            _this.searchResults = responseBody.results;
                            console.log(_this.searchResults);
                        }
                    });
                };
                return TMDBService;
            }());
            TMDBService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TMDBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TMDBService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Ryan\Desktop\UNI\3rdYear\NWEN304\team4rentflix\Angular\Rentflix\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map