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
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light navbar-expand-md navigation-clean-button\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\"\n         id=\"navcol-1\">\n      <ul class=\"nav navbar-nav mr-auto\">\n         <li><a class=\"navbar-brand \" href=\"#\">Rentflix</a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button></li> \n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/home\" >Home</a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/catalog/page/1\">Catalog</a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/search\">Search</a></li>\n      </ul>\n      <ng-container *ngIf=\"!loginStatus()\">\n      <span class=\"navbar-text actions\"> \n        <a class=\"login\" routerLinkActive=\"registration\" routerLink=\"/login\">Log In</a>\n        <a class=\"btn btn-light action-button\" role=\"button\" routerLinkActive=\"registration\" routerLink=\"/register\">Sign Up</a>\n      </span>\n      </ng-container>\n      <ng-container *ngIf=\"loginStatus()\">\n        <span class=\"navbar-text actions\">\n          \n          <a class=\"login\" routerLink=\"/account/cart\">Shopping Cart</a>\n          <a class=\"login\" routerLink=\"account/profile\">Account</a>\n          <a class=\"login\" routerLink=\"/account/library\">Library</a>\n          <a class=\"login\" routerLink=\"/account/orders\">Orders</a>\n          <a class=\"btn btn-light action-button\" role=\"button\" (click)=\"logout()\">Logout</a>\n        </span>\n      </ng-container>\n    </div>\n  </div>\n</nav>\n\n<!--\nRouter here\n-->\n<router-outlet>\n\n</router-outlet>\n<!--\n\n-->\n\n\n<script src=\"../assets/js/jquery.min.js\"></script>\n<script src=\"../assets/bootstrap/js/bootstrap.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js\"></script>\n<script src=\"../assets/js/smoothproducts.min.js\"></script>\n<script src=\"../assets/js/theme.js\"></script>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Hello Anyone Still There</h2>\n\n<mat-dialog-content>\n\n  <p> You have been logged out </p>\n  <p> Please Login again </p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<p>account works!</p>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\n  <section class=\"clean-block clean-catalog dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">My Movies</h2>\n        <p>Your rented movies displayed here</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"products\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-12 col-md-2 col-lg-3\" *ngFor=\"let item of displayResults(this.page)\">\n                  <div class=\"clean-product-item\">\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\n                    <div class=\"about\">\n                      <div class=\"rating\">\n                        <img [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                      </div>\n                      <div class=\"price\">\n                        <h3>{{getPrice(item.release_date)}}</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<p>orders works!</p>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<main class=\"page shopping-cart-page\">\n  <section class=\"clean-block clean-cart dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Shopping Cart</h2>\n        <p>One step away from watching your favourite movies with Rentflix</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row no-gutters\">\n          <div class=\"col-md-12 col-lg-8\">\n            <div class=\"items\">\n              <div class=\"product\" *ngFor=\"let m of getArray()\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <div class=\"col-md-3\">\n                    <div class=\"product-image\"><img class=\"img-fluid d-block mx-auto image\" src=\"{{'https://image.tmdb.org/t/p/w500'+ m?.posterPath}}\"></div>\n                  </div>\n                  <div class=\"col-md-5 product-info\"><a class=\"product-name\" href=\"#\">{{m?.title}}</a>\n                    <div class=\"product-specs\">\n                      <div><span>Release Date:&nbsp;</span><span class=\"value\">{{m?.releaseDate}}</span></div>\n                    </div>\n                  </div>\n                  <div class=\"col-6 col-md-2 price\"><span>{{getPrice(m?.releaseDate)}}</span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 col-lg-4\">\n            <div class=\"summary\">\n              <h3>Summary</h3>\n              <h4><span class=\"text\">Subtotal</span><span class=\"price\">${{getTotalCost()}}</span></h4>\n              <h4><span class=\"text\">Discount</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Shipping</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Total</span><span class=\"price\">${{getTotalCost()}}</span></h4>\n              <button class=\"btn btn-primary btn-block btn-lg\" type=\"button\" (click)=\"addToOrder()\">Checkout</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\n  <section class=\"clean-block clean-catalog dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Catalog Page</h2>\n        <p>Movies move us like nothing else can, whether they're scary, funny,\n          dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"d-none d-md-block\">\n              <div class=\"filters\">\n                <div class=\"filter-item\" *ngIf=\"getGenresList()\">\n                  <h3>Genres</h3>\n                  <select id=\"genres\">\n                      <option value=\"any\">Any</option>\n                      <option *ngFor= \"let genre of getGenresList()\" value=\"{{ genre.id }}\">{{ genre.name }}</option>\n                    </select>\n                  <!-- <div *ngFor= \"let genre of getGenresList()\" class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"{{ genre.name }}\"><label class=\"form-check-label\" for=\"{{ genre.name }}\">{{ genre.name }}</label></div> -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"products\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of displayResults(this.page)\">\n                  <div class=\"clean-product-item\">\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\n                    <div class=\"about\">\n                      <div class=\"rating\">\n                          <img [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                      </div>\n                      <div class=\"price\">\n                        <h3>{{getPrice(item.release_date)}}</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <nav>\n                <ul class=\"pagination\">\n                  <ng-container *ngIf=\"page == 1\">\n                    <li class=\"page-item disabled\"><a class=\"page-link\"  aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\n                  </ng-container>\n                  <ng-container *ngIf=\"page > 1\">\n                    <li class=\"page-item \"><a class=\"page-link\"  [routerLink]=\"['/catalog/page',page-1]\" aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\n                  </ng-container>\n                  <li class=\"page-item \" *ngFor=\"let page of getPages()\"><a class=\"page-link\" [routerLink]=\"['/catalog/page', page]\">{{page}}</a></li>\n                  <ng-container *ngIf=\"page == maxpage\">\n                  <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\n                  </ng-container>\n                  <ng-container *ngIf=\"page < maxpage\">\n                    <li class=\"page-item \"><a class=\"page-link\" [routerLink]=\"['/catalog/page',page+1]\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\n                  </ng-container>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page landing-page\">\n  <section class=\"clean-block clean-hero\" style=\"background-image:url(&quot;assets/img/tech/image4.jpg&quot;);color:rgba(90,12,27,0.85);\">\n    <div class=\"text\">\n      <h2>Rentflix</h2>\n      <p>Cheap Movie Rentals On Demand!</p><a class=\"btn btn-outline-light btn-lg\" role=\"button\" href=\"/catalog/page/1\">Browse Catalogue</a></div>\n  </section>\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Trending</h2>\n      </div>\n    </div>\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\n      <div class=\"movie-display-col\" *ngFor=\"let movie of getPopular()\">\n        <div class=\"clean-product-item\">\n          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></a></div>\n          <div class=\"product-name\" >{{ movie?.title }}</div>\n          <div class=\"about\">\n            <div class=\"rating\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star-half-empty.svg\"><img src=\"../../../assets/img/star-empty.svg\"></div>\n            <div class=\"price\">\n              <h3>{{ getPrice(movie.release_date) }}</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Top Rated</h2>\n      </div>\n    </div>\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\n        <div class=\"movie-display-col\" *ngFor=\"let movie of getTopRated()\">\n          <div class=\"clean-product-item\">\n            <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></div>\n            <div class=\"product-name\"><a href=\"#\">{{ movie?.title }}</a></div>\n            <div class=\"about\">\n              <div class=\"rating\">\n                  <img [src]=\"movie.vote_average >= 2 ? '../../../assets/img/star.svg' : movie.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 4 ? '../../../assets/img/star.svg' : movie.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 6 ? '../../../assets/img/star.svg' : movie.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 8 ? '../../../assets/img/star.svg' : movie.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 10 ? '../../../assets/img/star.svg' : movie.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                </div>\n              <div class=\"price\">\n                <h3>{{ getPrice(movie.release_date) }}</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </section>\n</main>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\n  <section class=\"clean-block clean-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\n        <h2 class=\"text-info\">Log In</h2>\n        <p>or</p>\n        <p>Click here to <a href=\"/register\">register</a></p>\n      </div>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin(loginForm.value)\">\n        <div class=\"form-group\"><label for=\"username\">Username</label><input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\"></div>\n        <div class=\"form-group\"><label for=\"password\">Password</label><input formControlName=\"password\" class=\"form-control\" type=\"password\" id=\"password\"></div>\n        <div class=\"form-group\">\n          <div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"checkbox\"><label class=\"form-check-label\" for=\"checkbox\">Remember me</label></div>\n        </div><button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\n      </form>\n    </div>\n  </section>\n</main>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<p>payment works!</p>\n<main class=\"page payment-page\">\n  <section class=\"clean-block payment-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Payment</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>\n      </div>\n      <form>\n        <div class=\"products\">\n          <h3 class=\"title\">Checkout</h3>\n          <div class=\"item\"><span class=\"price\">$200</span>\n            <p class=\"item-name\">Product 1</p>\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\n          </div>\n          <div class=\"item\"><span class=\"price\">$120</span>\n            <p class=\"item-name\">Product 2</p>\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\n          </div>\n          <div class=\"total\"><span>Total</span><span class=\"price\">$320</span></div>\n        </div>\n        <div class=\"card-details\">\n          <h3 class=\"title\">Credit Card Details</h3>\n          <div class=\"form-row\">\n            <div class=\"col-sm-7\">\n              <div class=\"form-group\"><label>Card Holder</label><input class=\"form-control\" type=\"text\" placeholder=\"Card Holder\"></div>\n            </div>\n            <div class=\"col-sm-5\">\n              <div class=\"form-group\"><label>Expiration date</label>\n                <div class=\"input-group expiration-date\"><input class=\"form-control\" type=\"text\" placeholder=\"MM\"><input class=\"form-control\" type=\"text\" placeholder=\"YY\"></div>\n              </div>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"form-group\"><label for=\"card-number\">Card Number</label><input class=\"form-control\" type=\"text\" id=\"card-number\" placeholder=\"Card Number\"></div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\"><label for=\"cvc\">CVC</label><input class=\"form-control\" type=\"text\" id=\"cvc\" placeholder=\"CVC\"></div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\"><button class=\"btn btn-primary btn-block\" type=\"submit\">Proceed</button></div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </section>\n</main>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n<main class=\"page product-page\">\n  <section class=\"clean-block clean-product dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n      </div>\n      <div class=\"block-content\">\n        <div class=\"product-info\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                  <figure class=\"figure\"><img class=\"poster\" src=\"{{'https://image.tmdb.org/t/p/w500'+getMovie()?.poster_path}}\"></figure>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"info\">\n                <h3>{{ getMovie()?.title }}</h3>\n                <div class=\"rating\">\n                    <img [src]=\"getMovie()?.vote_average >= 2 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 4 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 6 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 8 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 10 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                </div>\n                <div class=\"price\">\n                  <h3>{{getPrice(getMovie()?.release_date)}}</h3>\n                </div><button class=\"btn btn-primary\" type=\"button\" (click)=\"additemToCart()\"><i class=\"icon-basket\"></i>Add to Cart</button>\n                <div class=\"summary\">\n                  <p>{{ getMovie()?.overview }}</p>\n                </div>\n              </div>\n             \n            </div>\n          </div>\n        </div>\n        <div class=\"product-info\">\n          <h2 style=\"margin-bottom: 2rem\">Reviews</h2>\n                <div class=\"reviews\" *ngFor=\"let r of getReview()\">\n                  <div class=\"review-item\">\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-empty.svg\"></div>\n                    <h4>hello</h4><span class=\"text-muted\">{{r?.author}}</span>\n                    <p> {{r?.content |slice:0:800}}.......</p>\n                    <p><a href=\"{{r?.url}}\">Read the full review here</a></p>\n                  </div>\n                </div>\n        </div>\n        <div class=\"clean-related-items\">\n          <h3>Related Movies</h3>\n          \n          <div class=\"items\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-sm-6 col-lg-3\" *ngFor=\"let movie of getRelated()\">\n                <div class=\"clean-related-item\">\n                    <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie?.poster_path}}\"></div>\n                    <div class=\"related-name\">{{ movie.title }}\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-half-empty.svg\"><img src=\"assets/img/star-empty.svg\"></div>\n                    <h4>{{getPrice(movie?.release_date)}}</h4>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page registration-page\">\n  <section class=\"clean-block clean-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Registration</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>\n      </div>\n      <form [formGroup]=\"registerForum\" (ngSubmit)=\"onRegister(registerForum.value)\">\n        <div class=\"form-group\"><label for=\"email\">Email</label><input formControlName=\"email\" class=\"form-control item\" type=\"email\" id=\"email\"></div>\n        <div class=\"form-group\"><label for=\"username\">Name</label><input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\"></div>\n        <div class=\"form-group\"><label for=\"password\">Password</label><input formControlName=\"password\" class=\"form-control item\" type=\"password\" id=\"password\"></div>\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\n      </form>\n\n    </div>\n  </section>\n</main>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page search-page\">\n    \n\n\n  <section class=\"clean-block clean-product dark\">\n      <div class=\"container\">\n          <div class=\"block-heading\">\n              <h2 class=\"text-info\">Search</h2>\n              <!-- <p>Movies move us like nothing else can, whether they're scary, funny,\n                      dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p> -->\n              <form class=\"search-form\">\n              \n                  <input #title class=\"form-control mr-sm-2 search-bar\" (keyup.enter)=\"search(title.value)\" type=\"text\"\n                    placeholder=\"Type in a movie title...\">\n              \n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(title.value)\">Search</button>\n              </form>\n            </div>\n       \n        <div class=\"block-content\" *ngIf=isValidSearch()>\n          <div class=\"product-info\">\n            \n              <div class=\"col-md-10\">\n                  <div class=\"products\">\n                    <div class=\"row no-gutters\">\n                      <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of getSearchResults()\">\n                        <div class=\"clean-product-item\">\n                          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\"\n                                src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\n                          <div class=\"product-name\"><a [routerLink]=\"['/product', item.id]\" href=\"\">{{item?.title}}</a></div>\n                          <div class=\"about\">\n                            <div class=\"rating\">\n                              <img\n                                [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                            </div>\n                            <div class=\"price\">\n                              <!-- <h3>{{getPrice(item.release_date)}}</h3> -->\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n          </div>\n       \n          \n        </div>\n      </div>\n    </section>\n\n\n\n</main>");
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
            var routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'catalog/page/:page', component: _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"] },
                { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"] },
                { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'register', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
                { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
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
                            var valid = data.valid, message = data.message, error = data.error;
                            if (valid === true) {
                                _this.loginService.setUserToken('');
                                _this.loginService.setAuth(false);
                                _this.loginService.stopTimer();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                console.log(error);
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
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
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
            /* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/AccountPages/library/library.component */ "./src/app/pages/AccountPages/library/library.component.ts");
            /* harmony import */ var _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/AccountPages/account/account.component */ "./src/app/pages/AccountPages/account/account.component.ts");
            /* harmony import */ var _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/AccountPages/orders/orders.component */ "./src/app/pages/AccountPages/orders/orders.component.ts");
            /* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/component/nav/nav.component.ts");
            /* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
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
                        _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_16__["LibraryComponent"],
                        _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
                        _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"],
                        _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"],
                        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                        _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"]
                    ],
                    providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"]]
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRQYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MifQ== */");
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
            var AccountComponent = /** @class */ (function () {
                function AccountComponent() {
                }
                AccountComponent.prototype.ngOnInit = function () {
                };
                return AccountComponent;
            }());
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
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LibraryComponent = /** @class */ (function () {
                function LibraryComponent(TMDBService, Activatedroute) {
                    this.TMDBService = TMDBService;
                    this.Activatedroute = Activatedroute;
                    this.pagesarray = new Array();
                    this.count = 0;
                    this.max = 20;
                    this.limit = 12;
                    this.page = 0;
                    this.maxpage = 0;
                }
                LibraryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.Activatedroute.paramMap.subscribe(function (params) {
                        var page = params.get('page');
                        _this.page = +page;
                    });
                    this.TMDBService.discoverNewest();
                    this.TMDBService.discoverPopular();
                };
                /* Returns a list of four new releases to display
                 * on the landing page of our site
                 */
                LibraryComponent.prototype.getNewReleases = function () {
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
                LibraryComponent.prototype.getPopular = function () {
                    if (this.TMDBService.getPopular()) {
                        this.popular = this.TMDBService.getPopular().slice(0, this.max);
                    }
                    // remove any results that have no poster
                    if (this.popular) {
                        return this.popular.filter(function (t) { return t.poster_path != null; });
                    }
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
                LibraryComponent.prototype.displayResults = function (page) {
                    var temp = this.getPopular();
                    return temp;
                };
                return LibraryComponent;
            }());
            LibraryComponent.ctorParameters = function () { return [
                { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRQYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */");
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
            var OrdersComponent = /** @class */ (function () {
                function OrdersComponent() {
                }
                OrdersComponent.prototype.ngOnInit = function () {
                };
                return OrdersComponent;
            }());
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
            /* harmony default export */ __webpack_exports__["default"] = (".clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-block.dark {\n  height: 100vh;\n}\n\n.clean-block .block-heading p {\n  max-width: 600px;\n}\n\n.clean-block .block-heading {\n  padding-top: 140px;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFuLW5hdmJhci5maXhlZC10b3ArLnBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAwZW0gIWltcG9ydGFudDtcbn1cblxuLmNsZWFuLWJsb2NrLmRhcmsge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBwIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuLmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XG4gICAgbWluLWhlaWdodDogODB2aFxufVxuIiwiLmNsZWFuLW5hdmJhci5maXhlZC10b3AgKyAucGFnZSB7XG4gIHBhZGRpbmctdG9wOiAwZW0gIWltcG9ydGFudDtcbn1cblxuLmNsZWFuLWJsb2NrLmRhcmsge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59Il19 */");
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
            var CartComponent = /** @class */ (function () {
                function CartComponent(cartService, loginService, moviedb, ordersService, router) {
                    this.cartService = cartService;
                    this.loginService = loginService;
                    this.moviedb = moviedb;
                    this.ordersService = ordersService;
                    this.router = router;
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
                    this.cartService.getCart(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            _this.cart = response.results;
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
                    console.log(year);
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
                    console.log(this.loginService.getUserToken());
                    this.ordersService.orderCart(this.loginService.getUserToken()).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            console.log(response.message);
                            if (response.message === 'Items ordered') {
                                _this.router.navigate(['/account']);
                            }
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
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
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
            /* harmony default export */ __webpack_exports__["default"] = (".clean-block .block-heading p {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBwIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufSIsIi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */");
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
                    this.max = 20;
                    this.limit = 9;
                    this.page = 0;
                    this.maxpage = 0;
                    this.sort_by = "popularity.desc";
                }
                CatalogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.Activatedroute.paramMap.subscribe(function (params) {
                        var page = params.get("page");
                        _this.page = +page;
                    });
                    this.TMDBService.discoverNewest();
                    this.TMDBService.discoverPopular();
                    this.TMDBService.getGenres();
                    this.numberOfPages();
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
                        this.TMDBService.discoverByGenre(id, this.sort_by);
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
                        return "$8.99";
                    }
                    else if (year <= 2018 && year > 2015) {
                        return "$5.99";
                    }
                    return "$3.99";
                };
                CatalogComponent.prototype.displayResults = function (page) {
                    var results = this.limit * page;
                    var value = document.getElementById("genres").value;
                    console.log(value);
                    if (value == "any") {
                        this.results = this.getPopular();
                    }
                    else {
                        this.results = this.getWithGenre(value);
                    }
                    if (results > this.max - this.limit) {
                        return this.results.slice(results, this.max);
                    }
                    return this.results.slice(results, this.limit + results);
                };
                CatalogComponent.prototype.numberOfPages = function () {
                    var page = Math.floor(this.max / this.limit);
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
                    selector: "app-catalog",
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
            /* harmony default export */ __webpack_exports__["default"] = (".movie-display-row {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-spacing: 10px;\n}\n\n.movie-display-col {\n  display: table-cell;\n}\n\n.movie-display-row {\n  padding-bottom: 100px;\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWRpc3BsYXktcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7IFxufVxuXG4ubW92aWUtZGlzcGxheS1jb2wge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5tb3ZpZS1kaXNwbGF5LXJvdyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XG59IiwiLm1vdmllLWRpc3BsYXktcm93IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItc3BhY2luZzogMTBweDtcbn1cblxuLm1vdmllLWRpc3BsYXktY29sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLm1vdmllLWRpc3BsYXktcm93IHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufSJdfQ== */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcbiAgICBtaW4taGVpZ2h0OiA4MHZoXG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLWhlaWdodDogODB2aDtcbn0iXX0= */");
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
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, loginService, router) {
                    this.formBuilder = formBuilder;
                    this.loginService = loginService;
                    this.router = router;
                    this.loginForm = formBuilder.group({
                        username: '',
                        password: '',
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLogin = function (value) {
                    var _this = this;
                    this.loginService.getAuthentication(value.username, value.password).then(function (res) {
                        res.subscribe(function (data) {
                            var response = data;
                            if (response.valid === true) {
                                _this.loginService.setUserToken(response.token);
                                _this.loginService.setAuth(true);
                                _this.loginService.startTimer();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                console.log('Invalid Login');
                            }
                        });
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f6f6f6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0NikgIWltcG9ydGFudDtcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNiAhaW1wb3J0YW50O1xufSJdfQ== */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".block-content {\n  padding-top: 200px;\n}\n\n.poster {\n  height: 70%;\n  width: 70%;\n  margin-left: 80px;\n  margin-top: 20px;\n}\n\n.clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-related-item {\n  padding-top: 0px !important;\n  border: none;\n}\n\n.clean-block.clean-product .block-content {\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5wb3N0ZXIge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG4uY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCsucGFnZSB7XG4gICAgcGFkZGluZy10b3A6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4uY2xlYW4tcmVsYXRlZC1pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAuYmxvY2stY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbiIsIi5ibG9jay1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4ucG9zdGVyIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCArIC5wYWdlIHtcbiAgcGFkZGluZy10b3A6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4uY2xlYW4tcmVsYXRlZC1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5ibG9jay1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59Il19 */");
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
                                console.log("hi");
                                console.log(response.message);
                                console.log("end");
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
        /***/ "./src/app/pages/registration/registration.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/pages/registration/registration.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcbiAgICBtaW4taGVpZ2h0OiA4MHZoXG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLWhlaWdodDogODB2aDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/registration/registration.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/registration/registration.component.ts ***!
          \**************************************************************/
        /*! exports provided: RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(formBuilder, loginService, router) {
                    this.formBuilder = formBuilder;
                    this.loginService = loginService;
                    this.router = router;
                    this.registerForum = formBuilder.group({
                        email: '',
                        username: '',
                        password: '',
                    });
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                };
                RegistrationComponent.prototype.onRegister = function (value) {
                    var _this = this;
                    console.log(value.username + ' ' + value.password);
                    this.loginService.registerUser(value.email, value.username, value.password).then(function (res) {
                        res.subscribe(function (data) {
                            if (data === 'User registered') {
                                _this.router.navigate(['/login']);
                            }
                            else {
                                console.log(data);
                            }
                        });
                    });
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
        /***/ "./src/app/pages/search/search.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/pages/search/search.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".col-md-10 {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n\nform {\n  width: 100%;\n  display: flex;\n}\n\ninput {\n  flex: 1 1 auto;\n}\n\n*:focus {\n  border: 0px solid lightgray;\n  outline: none;\n  box-shadow: none;\n}\n\n::-webkit-input-placeholder {\n  color: lightgray;\n}\n\n::-moz-placeholder {\n  color: lightgray;\n}\n\n::-ms-input-placeholder {\n  color: lightgray;\n}\n\n::placeholder {\n  color: lightgray;\n}\n\n.search-bar {\n  border: 0px solid lightgray;\n  font-size: 1.5em;\n  height: 70px;\n  box-shadow: 0px 10px 5px 0px #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5pc2hhL0Rlc2t0b3AvMjAxOS9OV0VOMzA0L3RlYW00cmVudGZsaXgvQW5ndWxhci9SZW50ZmxpeC9zcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FESEE7RUFDSSxnQkFBQTtBQ0VKOztBREhBO0VBQ0ksZ0JBQUE7QUNFSjs7QURIQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDQywyQkFBQTtFQUNELGdCQUFBO0VBQ0ksWUFBQTtFQUdKLG9DQUFBO0FDR0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XG4gICAgbWluLWhlaWdodDogODB2aFxufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pbnB1dCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4qOmZvY3VzIHtcbiAgYm9yZGVyOiAwcHggc29saWQgbGlnaHRncmF5O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuLnNlYXJjaC1iYXIge1xuIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbmZvbnQtc2l6ZTogMS41ZW07XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDIyNCwyMjQsMjI0LDEpO1xuLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMjI0LDIyNCwyMjQsMSk7XG5ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMjI0LDIyNCwyMjQsMSk7XG59XG4iLCIuY29sLW1kLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW5wdXQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuKjpmb2N1cyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgYm9yZGVyOiAwcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBoZWlnaHQ6IDcwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCAjZTBlMGUwO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggI2UwZTBlMDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCAjZTBlMGUwO1xufSJdfQ== */");
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
                    this.isValidSearch = function () { return _this.validSearch; };
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.validSearch = false;
                };
                SearchComponent.prototype.search = function (title) {
                    // alert(title)
                    this.TMDBService.searchTitle(title);
                    this.validSearch = this.TMDBService.isValidSearch();
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
                    this.startTimer = function () {
                        _this.timer = setInterval(function () {
                            if (_this.timerExpired === true) {
                                console.log('Logging out');
                                _this.openDialog();
                                _this.stopTimer();
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
                                _this.openDialog();
                                _this.stopTimer();
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
                            var valid = data.valid, message = data.message, error = data.error;
                            if (valid === true) {
                                _this.setUserToken('');
                                _this.setAuth(false);
                                _this.stopTimer();
                                _this.router.navigate(['/login']);
                            }
                            else {
                                console.log(error);
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
                            httpOptions.headers =
                                httpOptions.headers.set('X-Requested-With', token);
                            return [2 /*return*/, this.http.post(this.serverlink + "/orders", httpOptions)];
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
                    this.getTopRated = function () { return _this.topRated; };
                    this.getPopular = function () { return _this.popular; };
                    this.getMovie = function () { return _this.movie; };
                    this.getMovieArray = function () { return _this.customMovieArray; };
                    this.getTotalCartCost = function () { return _this.totalCartCost; };
                    this.resetTotalCartCost = function () { return _this.totalCartCost = 0.00; };
                    this.getReviews = function () { return _this.reviews; };
                    this.getRelated = function () { return _this.related; };
                    this.getResults = function () { return _this.results; };
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
                                _this.customMovieArray.push({ title: responseBody.title, releaseDate: responseBody.release_date, posterPath: responseBody.poster_path });
                                _this.totalCartCost += updateCost(responseBody.release_date);
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
                    if (!id) {
                        this.discover(sort_by);
                        return;
                    }
                    this.http.get(this.apiDiscover + "?api_key=" + this.apiKey + "&sort_by=" + sort_by + "&with_genres=" + id + "&language=en-US", { responseType: 'text' })
                        .subscribe(function (response) {
                        var responseBody = JSON.parse(response);
                        _this.results = responseBody.results;
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
            module.exports = __webpack_require__(/*! /Users/annisha/Desktop/2019/NWEN304/team4rentflix/Angular/Rentflix/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map