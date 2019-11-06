(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light navbar-expand-md navigation-clean-button\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\"\n         id=\"navcol-1\">\n      <ul class=\"nav navbar-nav mr-auto\">\n         <li><a class=\"navbar-brand \" href=\"#\">Rentflix</a><button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon\"></span></button></li> \n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/home\" >Home</a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/catalog/page/1\">Catalog</a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\"  routerLinkActive=\"active_route\" routerLink=\"/search\">Search</a></li>\n      </ul>\n      <ng-container *ngIf=\"!loginStatus()\">\n      <span class=\"navbar-text actions\"> \n        <a class=\"login\" routerLinkActive=\"registration\" routerLink=\"/login\">Log In</a>\n        <a class=\"btn btn-light action-button\" role=\"button\" routerLinkActive=\"registration\" routerLink=\"/register\">Sign Up</a>\n      </span>\n      </ng-container>\n      <ng-container *ngIf=\"loginStatus()\">\n        <span class=\"navbar-text actions\">\n          \n          <a class=\"login\" routerLink=\"/account/cart\">Shopping Cart</a>\n          <a class=\"login\" routerLink=\"account/profile\">Account</a>\n          <a class=\"login\" routerLink=\"/account/library\">Library</a>\n          <a class=\"login\" routerLink=\"/account/orders\">Orders</a>\n          <a class=\"btn btn-light action-button\" role=\"button\" (click)=\"logout()\">Logout</a>\n        </span>\n      </ng-container>\n    </div>\n  </div>\n</nav>\n\n<!--\nRouter here\n-->\n<router-outlet>\n\n</router-outlet>\n<!--\n\n-->\n\n\n<script src=\"../assets/js/jquery.min.js\"></script>\n<script src=\"../assets/bootstrap/js/bootstrap.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js\"></script>\n<script src=\"../assets/js/smoothproducts.min.js\"></script>\n<script src=\"../assets/js/theme.js\"></script>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Hello Anyone Still There</h2>\n\n<mat-dialog-content>\n\n  <p> You have been logged out </p>\n  <p> Please Login again </p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page account-page\">\n    <section class=\"clean-block clean-account dark\">\n        <div class=\"container\">\n            <div class=\"block-heading\">\n                <h2 class=\"text-info\">Account Information</h2>\n            </div>\n            <div class=\"content\">\n                <div class=\"row no-gutters\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <div class=\"accordion first\">\n                            <input id=\"toggle1\" type=\"checkbox\" checked class=\"accordion-toggle\" name=\"toggle\" />\n                            <label for=\"toggle1\">Account Information</label>\n                            <section>\n                                <div class=\"row\">\n                                    <div class=\"column\">\n                                        <p class=\"label\">Username</p>\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].username }}</p>\n                                        <button type=\"button\" class=\"reset-pwd btn btn-outline-danger\">Reset\n                                            Password</button>\n                                    </div>\n                                    <div class=\"column\">\n                                        <p class=\"label\">Email</p>\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].email }}</p>\n                                    </div>\n                                </div>\n                            </section>\n                        </div>\n\n                        <div class=\"accordion second\">\n                            <input id=\"toggle2\" type=\"checkbox\" checked class=\"accordion-toggle\" name=\"toggle\" />\n                            <label for=\"toggle2\">Billing information</label>\n                            <section class=\"billing\">\n                                <div class=\"row\">\n                                    <div class=\"column\">\n                                        <p class=\"label\">Cardholder Name</p>\n                                        <p class=\"detail\" *ngIf=\"account\">{{ account[0].username | titlecase }} Doe</p>\n                                        <p class=\"label below\">Credit Card Number</p>\n                                        <p class=\"detail\">**** **** **** 1843</p>\n                                    </div>\n                                    <div class=\"column\">\n                                        <p class=\"label\">Country</p>\n                                        <p class=\"detail\">NZ</p>\n                                        <p class=\"label below\">Expiration: MM/YY</p>\n                                        <p class=\"detail\">02/22</p>\n                                    </div>\n                                </div>\n                            </section>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\n  <section class=\"clean-block clean-catalog dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">My Movies</h2>\n        <p>Your rented movies displayed here</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"products\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-12 col-md-2 col-lg-3\" *ngFor=\"let item of displayResults()\">\n                  <div class=\"clean-product-item\">\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.posterPath}}\"></a></div>\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\n                    <div class=\"about\">\n                      <div class=\"rating\">\n                        <img [src]=\"item.averageVote >= 2 ? '../../../assets/img/star.svg' : item.averageVote >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.averageVote >= 4 ? '../../../assets/img/star.svg' : item.averageVote >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.averageVote >= 6 ? '../../../assets/img/star.svg' : item.averageVote >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.averageVote >= 8 ? '../../../assets/img/star.svg' : item.averageVote >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                        <img [src]=\"item.averageVote >= 10 ? '../../../assets/img/star.svg' : item.averageVote >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                      </div>\n                      <div class=\"price\">\n                        <h3><a href=\"{{item.homePage}}\" rel=\"noopener noreferrer\" target=\"_blank\">Watch Now</a></h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page shopping-cart-page\">\n  <section class=\"clean-block clean-cart dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Orders Page</h2>\n        <p>View past purchases here</p>\n      </div>\n      <ng-container *ngFor=\"let r of getArray() | keyvalue\">\n      <div class=\"content\" >\n        <div class=\"row no-gutters\">\n          <div class=\"col-md-12 col-lg-8\">\n<!--\n            <div class=\"items\" *ngFor=\"let m of r.value\">\n-->\n            <div class=\"items\" *ngFor=\"let m of r.value\">\n              <div class=\"product\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <div class=\"col-md-3\">\n                    <div class=\"product-image\"><img class=\"img-fluid d-block mx-auto image\" src=\"{{'https://image.tmdb.org/t/p/w500'+ m?.posterPath}}\"></div>\n                  </div>\n                  <div class=\"col-md-5 product-info\"><a class=\"product-name\">{{m?.title}}</a>\n                    <div class=\"product-specs\">\n                      <div><span>Release Date:&nbsp;</span><span class=\"value\">{{m?.releaseDate}}</span></div>\n                    </div>\n                  </div>\n                  <div class=\"col-6 col-md-2 price\"><span>{{getPrice(m?.releaseDate)}}</span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 col-lg-4\">\n            <div class=\"summary\">\n              <h3>Summary</h3>\n              <h5>{{getDate(r.value[0].timeAdded)}}</h5>\n              <h4><span class=\"text\">Subtotal</span><span class=\"price\">${{calcTotal(r.value)}}</span></h4>\n              <h4><span class=\"text\">Discount</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Shipping</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Total</span><span class=\"price\">${{calcTotal(r.value)}}</span></h4>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <p></p>\n        </div>\n      </ng-container>\n    </div>\n\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page shopping-cart-page\">\n  <section class=\"clean-block clean-cart dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Shopping Cart</h2>\n        <p>One step away from watching your favourite movies with Rentflix</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row no-gutters\">\n          <div class=\"col-md-12 col-lg-8\">\n            <div class=\"items\">\n\n              <div *ngIf=\"cart.length == 0\" class=\"product\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <img src='../../../assets/img/empty-cart.png'>\n                </div>\n              </div>\n              <div class=\"product\" *ngFor=\"let m of getArray()\">\n                <div class=\"row justify-content-center align-items-center\">\n                  <div class=\"col-md-3\">\n                    <div class=\"product-image\"><img class=\"img-fluid d-block mx-auto image\"\n                        src=\"{{'https://image.tmdb.org/t/p/w500'+ m?.posterPath}}\"></div>\n                  </div>\n                  <div class=\"col-md-5 product-info\"><a class=\"product-name\" href=\"#\">{{m?.title}}</a>\n                    <div class=\"product-specs\">\n                      <div><span>Release Date:&nbsp;</span><span class=\"value\">{{m?.releaseDate}}</span></div>\n                    </div>\n                  </div>\n                  <div class=\"col-6 col-md-2 price\"><span>{{getPrice(m?.releaseDate)}}</span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 col-lg-4\">\n            <div class=\"summary\">\n              <h3>Summary</h3>\n              <h4><span class=\"text\">Subtotal</span><span class=\"price\">${{getTotalCost()}}</span></h4>\n              <h4><span class=\"text\">Discount</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Shipping</span><span class=\"price\">$0</span></h4>\n              <h4><span class=\"text\">Total</span><span class=\"price\">${{getTotalCost()}}</span></h4>\n              <button class=\"btn btn-primary btn-block btn-lg\" type=\"button\" (click)=\"addToOrder()\">Checkout</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page catalog-page\">\n  <section class=\"clean-block clean-catalog dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Catalog Page</h2>\n        <p>Movies move us like nothing else can, whether they're scary, funny,\n          dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>\n      </div>\n      <div class=\"content\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"d-none d-md-block\">\n              <div class=\"filters\">\n                <div class=\"filter-item\" *ngIf=\"getGenresList()\">\n                  <h3>Genres</h3>\n                  <select id=\"genres\">\n                      <option value=\"any\">Any</option>\n                      <option *ngFor= \"let genre of getGenresList()\" value=\"{{ genre.id }}\">{{ genre.name }}</option>\n                    </select>\n                  <!-- <div *ngFor= \"let genre of getGenresList()\" class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"{{ genre.name }}\"><label class=\"form-check-label\" for=\"{{ genre.name }}\">{{ genre.name }}</label></div> -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"products\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of displayResults(this.page)\">\n                  <div class=\"clean-product-item\">\n                    <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\n                    <div class=\"product-name\"><a href=\"#\">{{item?.title}}</a></div>\n                    <div class=\"about\">\n                      <div class=\"rating\">\n                          <img [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                          <img [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                      </div>\n                      <div class=\"price\">\n                        <h3>{{getPrice(item.release_date)}}</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <nav>\n                <ul class=\"pagination\">\n                  <ng-container *ngIf=\"page == 1\">\n                    <li class=\"page-item disabled\"><a class=\"page-link\"  aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\n                  </ng-container>\n                  <ng-container *ngIf=\"page > 1\">\n                    <li class=\"page-item \"><a class=\"page-link\"  [routerLink]=\"['/catalog/page',page-1]\" aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a></li>\n                  </ng-container>\n                  <li class=\"page-item \" *ngFor=\"let page of getPages()\"><a class=\"page-link\" [routerLink]=\"['/catalog/page', page]\">{{page}}</a></li>\n                  <ng-container *ngIf=\"page == maxpage\">\n                  <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\n                  </ng-container>\n                  <ng-container *ngIf=\"page < maxpage\">\n                    <li class=\"page-item \"><a class=\"page-link\" [routerLink]=\"['/catalog/page',page+1]\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a></li>\n                  </ng-container>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page landing-page\">\n  <section class=\"clean-block clean-hero\" style=\"background-image:url(&quot;assets/img/tech/image4.jpg&quot;);color:rgba(90,12,27,0.85);\">\n    <div class=\"text\">\n      <h2>Rentflix</h2>\n      <p>Cheap Movie Rentals On Demand!</p><a class=\"btn btn-outline-light btn-lg\" role=\"button\" href=\"/catalog/page/1\">Browse Catalogue</a></div>\n  </section>\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Trending</h2>\n      </div>\n    </div>\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\n      <div class=\"movie-display-col\" *ngFor=\"let movie of getPopular()\">\n        <div class=\"clean-product-item\">\n          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></a></div>\n          <div class=\"product-name\" >{{ movie?.title }}</div>\n          <div class=\"about\">\n            <div class=\"rating\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star.svg\"><img src=\"../../../assets/img/star-half-empty.svg\"><img src=\"../../../assets/img/star-empty.svg\"></div>\n            <div class=\"price\">\n              <h3>{{ getPrice(movie.release_date) }}</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"clean-block clean-info dark\" style=\"height: 477px;\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Top Rated</h2>\n      </div>\n    </div>\n    <div class=\"movie-display-row\" style=\"height: 286px;\" >\n        <div class=\"movie-display-col\" *ngFor=\"let movie of getTopRated()\">\n          <div class=\"clean-product-item\">\n            <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie.poster_path}}\"></div>\n            <div class=\"product-name\"><a href=\"#\">{{ movie?.title }}</a></div>\n            <div class=\"about\">\n              <div class=\"rating\">\n                  <img [src]=\"movie.vote_average >= 2 ? '../../../assets/img/star.svg' : movie.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 4 ? '../../../assets/img/star.svg' : movie.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 6 ? '../../../assets/img/star.svg' : movie.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 8 ? '../../../assets/img/star.svg' : movie.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                  <img [src]=\"movie.vote_average >= 10 ? '../../../assets/img/star.svg' : movie.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                </div>\n              <div class=\"price\">\n                <h3>{{ getPrice(movie.release_date) }}</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\n  <section class=\"clean-block clean-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\n        <h2 class=\"text-info\">Log In</h2>\n        <p>or</p>\n        <p>Click here to <a href=\"/register\">register</a></p>\n      </div>\n      <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"onLogin(loginForm.value)\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.username.errors }\">\n            <input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\">\n          </p>\n          <div *ngIf=\"isSubmitted && formControls.username.errors\" class=\"help-block\">\n            <div *ngIf=\"formControls.username.errors.required\">Username is Required</div>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\n          <label for=\"password\">Password</label>\n          <input formControlName=\"password\" class=\"form-control\" type=\"password\" id=\"password\">\n        </div>\n        <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\n          <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"checkbox\"><label class=\"form-check-label\" for=\"checkbox\">Remember me</label></div>\n        </div><button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\n      </form>\n    </div>\n  </section>\n</main>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payment works!</p>\n<main class=\"page payment-page\">\n  <section class=\"clean-block payment-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Payment</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>\n      </div>\n      <form>\n        <div class=\"products\">\n          <h3 class=\"title\">Checkout</h3>\n          <div class=\"item\"><span class=\"price\">$200</span>\n            <p class=\"item-name\">Product 1</p>\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\n          </div>\n          <div class=\"item\"><span class=\"price\">$120</span>\n            <p class=\"item-name\">Product 2</p>\n            <p class=\"item-description\">Lorem ipsum dolor sit amet</p>\n          </div>\n          <div class=\"total\"><span>Total</span><span class=\"price\">$320</span></div>\n        </div>\n        <div class=\"card-details\">\n          <h3 class=\"title\">Credit Card Details</h3>\n          <div class=\"form-row\">\n            <div class=\"col-sm-7\">\n              <div class=\"form-group\"><label>Card Holder</label><input class=\"form-control\" type=\"text\" placeholder=\"Card Holder\"></div>\n            </div>\n            <div class=\"col-sm-5\">\n              <div class=\"form-group\"><label>Expiration date</label>\n                <div class=\"input-group expiration-date\"><input class=\"form-control\" type=\"text\" placeholder=\"MM\"><input class=\"form-control\" type=\"text\" placeholder=\"YY\"></div>\n              </div>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"form-group\"><label for=\"card-number\">Card Number</label><input class=\"form-control\" type=\"text\" id=\"card-number\" placeholder=\"Card Number\"></div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\"><label for=\"cvc\">CVC</label><input class=\"form-control\" type=\"text\" id=\"cvc\" placeholder=\"CVC\"></div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\"><button class=\"btn btn-primary btn-block\" type=\"submit\">Proceed</button></div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n<main class=\"page product-page\">\n  <section class=\"clean-block clean-product dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n      </div>\n      <div class=\"block-content\">\n        <div class=\"product-info\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                  <figure class=\"figure\"><img class=\"poster\" src=\"{{'https://image.tmdb.org/t/p/w500'+getMovie()?.poster_path}}\"></figure>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"info\">\n                <h3>{{ getMovie()?.title }}</h3>\n                <div class=\"rating\">\n                    <img [src]=\"getMovie()?.vote_average >= 2 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 4 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 6 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 8 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                    <img [src]=\"getMovie()?.vote_average >= 10 ? '../../../assets/img/star.svg' : getMovie()?.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\"/>\n                </div>\n                <div class=\"price\">\n                  <h3>{{getPrice(getMovie()?.release_date)}}</h3>\n                </div><button class=\"btn btn-primary\" type=\"button\" (click)=\"additemToCart()\"><i class=\"icon-basket\"></i>Add to Cart</button>\n                <div class=\"summary\">\n                  <p>{{ getMovie()?.overview }}</p>\n                </div>\n              </div>\n             \n            </div>\n          </div>\n        </div>\n        <div class=\"product-info\">\n          <h2 style=\"margin-bottom: 2rem\">Reviews</h2>\n                <div class=\"reviews\" *ngFor=\"let r of getReview()\">\n                  <div class=\"review-item\">\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-empty.svg\"></div>\n                    <h4>hello</h4><span class=\"text-muted\">{{r?.author}}</span>\n                    <p> {{r?.content |slice:0:800}}.......</p>\n                    <p><a href=\"{{r?.url}}\">Read the full review here</a></p>\n                  </div>\n                </div>\n        </div>\n        <div class=\"clean-related-items\">\n          <h3>Related Movies</h3>\n          \n          <div class=\"items\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-sm-6 col-lg-3\" *ngFor=\"let movie of getRelated()\">\n                <div class=\"clean-related-item\">\n                    <div class=\"image\"><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', movie.id]\" src=\"{{'https://image.tmdb.org/t/p/w500'+movie?.poster_path}}\"></div>\n                    <div class=\"related-name\">{{ movie.title }}\n                    <div class=\"rating\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star.svg\"><img src=\"assets/img/star-half-empty.svg\"><img src=\"assets/img/star-empty.svg\"></div>\n                    <h4>{{getPrice(movie?.release_date)}}</h4>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page registration-page\">\n  <section class=\"clean-block clean-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\">\n        <h2 class=\"text-info\">Registration</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>\n      </div>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm.value)\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input formControlName=\"email\" class=\"form-control\" type=\"email\" id=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Name</label>\n          <input formControlName=\"username\" class=\"form-control item\" type=\"username\" id=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input formControlName=\"password\" class=\"form-control item\" type=\"password\" id=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            <div *ngIf=\"f.password.errors.pattern\">Requires a Capital Letter, LowerCase letter and a number</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Confirm Password</label>\n          <input formControlName=\"confirmPassword\" class=\"form-control item\" type=\"password\" id=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\">\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Log In</button>\n      </form>\n\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page login-page\">\n  <section class=\"clean-block clean-form dark\">\n    <div class=\"container\">\n      <div class=\"block-heading\" style=\"width: 1106px;height: 208px;\">\n        <h2 class=\"text-info\">Reset Password</h2>\n        <h5 class=\"text-info\">Please enter your new password below</h5>\n      </div>\n      <form [formGroup]=\"resetForm\" (ngSubmit)=\"onReset(resetForm.value)\">\n        <div class=\"form-group\"><label for=\"password\">Password</label><input formControlName=\"password\" class=\"form-control\" type=\"password\" id=\"password\"></div>\n        <div class=\"form-group\">\n        </div><button class=\"btn btn-primary btn-block\" type=\"submit\">Reset</button>\n      </form>\n    </div>\n  </section>\n</main>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page search-page\">\n    \n\n\n  <section class=\"clean-block clean-product dark\">\n      <div class=\"container\">\n          <div class=\"block-heading\">\n              <h2 class=\"text-info\">Search</h2>\n              <!-- <p>Movies move us like nothing else can, whether they're scary, funny,\n                      dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p> -->\n              <form class=\"search-form\">\n              \n                  <input #title class=\"form-control mr-sm-2 search-bar\" (keyup.enter)=\"search(title.value)\" type=\"text\"\n                    placeholder=\"Type in a movie title...\">\n              \n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(title.value)\">Search</button>\n              </form>\n            </div>\n       \n        <div class=\"block-content\" *ngIf=isValidSearch()>\n          <div class=\"product-info\">\n            \n              <div class=\"col-md-10\">\n                  <div class=\"products\">\n                    <div class=\"row no-gutters\">\n                      <div class=\"col-12 col-md-6 col-lg-4\" *ngFor=\"let item of getSearchResults()\">\n                        <div class=\"clean-product-item\">\n                          <div class=\"image\"><a><img class=\"img-fluid d-block mx-auto\" [routerLink]=\"['/product', item.id]\"\n                                src=\"{{'https://image.tmdb.org/t/p/w500'+item.poster_path}}\"></a></div>\n                          <div class=\"product-name\"><a [routerLink]=\"['/product', item.id]\" href=\"\">{{item?.title}}</a></div>\n                          <div class=\"about\">\n                            <div class=\"rating\">\n                              <img\n                                [src]=\"item.vote_average >= 2 ? '../../../assets/img/star.svg' : item.vote_average >= 1 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 4 ? '../../../assets/img/star.svg' : item.vote_average >= 3 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 6 ? '../../../assets/img/star.svg' : item.vote_average >= 5 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 8 ? '../../../assets/img/star.svg' : item.vote_average >= 7 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                              <img\n                                [src]=\"item.vote_average >= 10 ? '../../../assets/img/star.svg' : item.vote_average >= 9 ? '../../../assets/img/star-half-empty.svg' : '../../../assets/img/star-empty.svg'\" />\n                            </div>\n                            <div class=\"price\">\n                              <!-- <h3>{{getPrice(item.release_date)}}</h3> -->\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n          </div>\n       \n          \n        </div>\n      </div>\n    </section>\n\n\n\n</main>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
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
















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'catalog/page/:page', component: _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"] },
    { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"] },
    { path: 'reset/:token', component: _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_15__["ResetPageComponent"] },
    //authGuard protected links
    { path: 'account/cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'payment', component: _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'account/profile', component: _pages_AccountPages_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'account/library', component: _pages_AccountPages_library_library_component__WEBPACK_IMPORTED_MODULE_12__["LibraryComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'account/orders', component: _pages_AccountPages_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AppComponent = class AppComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = 'Rentflix';
        const clicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'click');
        clicks$.subscribe(x => {
            if (this.loginService.getTimer() != null) {
                this.loginService.resetTimer();
            }
        });
    }
    loginStatus() {
        return this.loginService.isAuthenticated();
    }
    logout() {
        console.log('logingoust');
        this.loginService.logout().then(res => {
            res.subscribe((data) => {
                const response = data;
                if (response.valid === true) {
                    this.loginService.setUserToken('');
                    this.loginService.setAuth(false);
                    this.loginService.stopTimer();
                    this.router.navigate(['/home']);
                }
                else {
                    console.log(response.message);
                }
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
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
/* harmony import */ var _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/reset-page/reset-page.component */ "./src/app/pages/reset-page/reset-page.component.ts");


























let AppModule = class AppModule {
};
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
            _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"],
            _pages_reset_page_reset_page_component__WEBPACK_IMPORTED_MODULE_25__["ResetPageComponent"]
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



/***/ }),

/***/ "./src/app/component/alert/alert.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/alert/alert.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AlertComponent = class AlertComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    close() {
        this.dialogRef.close('Thanks for using me!');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/component/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/component/nav/nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/component/nav/nav.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/nav/nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/nav/nav.component.ts ***!
  \************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/component/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(next, state) {
        console.log("hello" + this.loginService.getUserToken());
        if (this.loginService.isAuthenticated()) {
            return true;
        }
        // navigate to login page
        this.router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/pages/AccountPages/account/account.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/AccountPages/account/account.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css\");\n@charset \"UTF-8\";\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n  font: 16px/1 \"Open Sans\", sans-serif;\n  color: #555;\n  background: #e5e5e5;\n}\nbody {\n  padding: 50px;\n}\n.accordion {\n  transform: translateZ(0);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n.accordion > .accordion-toggle {\n  position: absolute;\n  opacity: 0;\n  display: none;\n}\n.accordion > label {\n  position: relative;\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 40px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-bottom: 70px;\n  background: #fff;\n  color: lightslategrey;\n  cursor: pointer;\n  border-bottom: 1px solid #e6e6e6;\n}\n.first,\n.second {\n  padding-top: 30px;\n}\nlabel {\n  margin-bottom: 0px !important;\n}\n.accordion > label:after {\n  content: \"\";\n  color: #5499da;\n  position: absolute;\n  top: 0px;\n  right: 40px;\n  font-family: fontawesome;\n  transform: rotate(180deg);\n  transition: 0.3s transform;\n}\nsection {\n  padding-left: 10px;\n}\n.accordion > section {\n  height: 0;\n  transition: 0.3s all;\n  overflow: hidden;\n}\n.accordion > .accordion-toggle:checked ~ label:after {\n  transform: rotate(0deg);\n}\n.accordion > .accordion-toggle:checked ~ section {\n  height: 200px;\n}\n.second > .accordion-toggle:checked ~ section {\n  height: 300px;\n}\n.accordion > section p {\n  margin: 15px 0;\n  padding: 0 40px;\n  line-height: 1.5;\n}\n.label {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #c7c7c7;\n}\n.detail {\n  color: #707070;\n}\n/* Create two equal columns that floats next to each other */\n.column {\n  float: left;\n  width: 50%;\n  padding: 30px;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.reset-pwd {\n  margin-left: 40px;\n  margin-top: 25px;\n}\n.below {\n  padding-top: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxzRkFBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRENBOzs7RUFHRSxzQkFBQTtBQ0VGO0FEQ0E7O0VBRUUsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7QUNFRjtBRENBO0VBQ0Usd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0VGO0FEQ0E7O0VBRUUsaUJBQUE7QUNFRjtBRENBO0VBQ0UsNkJBQUE7QUNFRjtBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDR0Y7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QUREQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSUY7QUREQTtFQUNFLHVCQUFBO0FDSUY7QUREQTtFQUNFLGFBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtBQ0lGO0FEREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7QUREQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSUY7QUREQTtFQUNFLGNBQUE7QUNJRjtBRERBLDREQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNJRjtBRERBLG1DQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNJRjtBRERBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0lGO0FEREE7RUFDSSw0QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvQWNjb3VudFBhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4yLjAvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIik7XG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQ6IDE2cHgvMSBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hY2NvcmRpb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5hY2NvcmRpb24gPiAuYWNjb3JkaW9uLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFjY29yZGlvbiA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcbn1cblxuLmZpcnN0LFxuLnNlY29uZCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmFjY29yZGlvbiA+IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwNzdcIjtcbiAgY29sb3I6IHJnYig4NCwgMTUzLCAyMTgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5hY2NvcmRpb24gPiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFjY29yZGlvbiA+IC5hY2NvcmRpb24tdG9nZ2xlOmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4uYWNjb3JkaW9uID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2Vjb25kID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uYWNjb3JkaW9uID4gc2VjdGlvbiBwIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcbn1cblxuLmRldGFpbCB7XG4gIGNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucmVzZXQtcHdkIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5iZWxvdyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMi4wL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCIpO1xuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udDogMTZweC8xIFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLmFjY29yZGlvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmFjY29yZGlvbiA+IC5hY2NvcmRpb24tdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWNjb3JkaW9uID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLmZpcnN0LFxuLnNlY29uZCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkaW9uID4gbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+Bt1wiO1xuICBjb2xvcjogIzU0OTlkYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5hY2NvcmRpb24gPiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFjY29yZGlvbiA+IC5hY2NvcmRpb24tdG9nZ2xlOmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4uYWNjb3JkaW9uID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2Vjb25kID4gLmFjY29yZGlvbi10b2dnbGU6Y2hlY2tlZCB+IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uYWNjb3JkaW9uID4gc2VjdGlvbiBwIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG5cbi5kZXRhaWwge1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yZXNldC1wd2Qge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmJlbG93IHtcbiAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/AccountPages/account/account.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/AccountPages/account/account.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");



let AccountComponent = class AccountComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
        this.getAccountDetails();
    }
    getAccountDetails() {
        this.loginService.getAccountDetails(this.loginService.getUserToken()).then(res => {
            res.subscribe(data => {
                const response = data;
                this.account = response.results;
            });
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/AccountPages/account/account.component.scss")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/AccountPages/library/library.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/AccountPages/library/library.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRQYWdlcy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/AccountPages/library/library.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/AccountPages/library/library.component.ts ***!
  \*****************************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
/* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");





let LibraryComponent = class LibraryComponent {
    constructor(moviedb, orderService, loginService) {
        this.moviedb = moviedb;
        this.orderService = orderService;
        this.loginService = loginService;
        this.orders = [];
    }
    ngOnInit() {
        this.moviedb.clearMovieArray();
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrders(this.loginService.getUserToken()).then(res => {
            res.subscribe(data => {
                const response = data;
                this.orders = response.message;
                this.convertCart();
            });
        });
    }
    convertCart() {
        this.moviedb.clearMovieArray();
        this.orders.forEach((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.moviedb.getMovieFromID3(val);
        }));
    }
    /* Determines an arbitrary price for a given movie,
     * based on the release date of said movie
     */
    getPrice(date) {
        const year = date.substring(0, 4);
        console.log(year);
        if (year >= 2019) {
            return '$8.99';
        }
        else if (year <= 2018 && year > 2015) {
            return '$5.99';
        }
        return '$3.99';
    }
    displayResults() {
        const filteredArr = this.moviedb.getMovieArray2().reduce((unique, o) => {
            if (!unique.some(obj => obj.id === o.id)) {
                unique.push(o);
            }
            return unique;
        }, []);
        return filteredArr;
    }
};
LibraryComponent.ctorParameters = () => [
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
    { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-library',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/library/library.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./library.component.scss */ "./src/app/pages/AccountPages/library/library.component.scss")).default]
    })
], LibraryComponent);



/***/ }),

/***/ "./src/app/pages/AccountPages/orders/orders.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/AccountPages/orders/orders.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clean-block {\n  background-color: #f6f6f6;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvQWNjb3VudFBhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9BY2NvdW50UGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhbi1ibG9jayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxufVxuIiwiLmNsZWFuLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/AccountPages/orders/orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/AccountPages/orders/orders.component.ts ***!
  \***************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");





let OrdersComponent = class OrdersComponent {
    constructor(loginService, orderService, moviedb) {
        this.loginService = loginService;
        this.orderService = orderService;
        this.moviedb = moviedb;
        this.orders = [];
    }
    ngOnInit() {
        this.moviedb.clearMovieArray();
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrders(this.loginService.getUserToken()).then(res => {
            res.subscribe(data => {
                const response = data;
                this.orders = response.message;
                this.convertCart();
            });
        });
    }
    convertCart() {
        this.moviedb.clearMovieArray();
        this.orders.forEach((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.moviedb.getMovieFromID3(val);
        }));
    }
    getArray() {
        const temp = this.moviedb.getMovieArray2();
        this.mapOrders = this.groupBy(temp, time => time.timeAdded);
        return this.mapOrders;
    }
    getTotalCost() {
        return this.moviedb.getTotalCartCost();
    }
    getPrice(date) {
        const year = date.substring(0, 4);
        console.log(year);
        if (year >= 2019) {
            return '$8.99';
        }
        else if (year <= 2018 && year > 2015) {
            return '$5.99';
        }
        return '$3.99';
    }
    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });
        return map;
    }
    calcTotal(r) {
        function updateCost(data) {
            const year = data.substring(0, 4);
            console.log(year);
            if (year >= 2019) {
                return 8.99;
            }
            else if (year <= 2018 && year > 2015) {
                return 5.99;
            }
            return 3.99;
        }
        let total = 0.00;
        r.forEach(val => {
            total += updateCost(val.releaseDate);
        });
        return total;
    }
    getDate(timeAdded) {
        const date = new Date(timeAdded);
        return date.toDateString() + ' ' + date.getDay() + ":" + date.getMinutes();
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TMDBService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/AccountPages/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/AccountPages/orders/orders.component.scss")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-block .block-heading p {\n  max-width: 600px;\n}\n\n.clean-block .block-heading {\n  padding-top: 140px;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhbi1uYXZiYXIuZml4ZWQtdG9wKy5wYWdlIHtcbiAgICBwYWRkaW5nLXRvcDogMGVtICFpbXBvcnRhbnQ7XG59XG5cblxuLmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5nIHAge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG4uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwyNDYsMjQ2KTtcbiAgICBtaW4taGVpZ2h0OiA4MHZoXG59XG4iLCIuY2xlYW4tbmF2YmFyLmZpeGVkLXRvcCArIC5wYWdlIHtcbiAgcGFkZGluZy10b3A6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
/* harmony import */ var _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart-service/cart.service */ "./src/app/services/cart-service/cart.service.ts");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders-service/orders.service */ "./src/app/services/orders-service/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CartComponent = class CartComponent {
    constructor(cartService, loginService, moviedb, ordersService, router) {
        this.cartService = cartService;
        this.loginService = loginService;
        this.moviedb = moviedb;
        this.ordersService = ordersService;
        this.router = router;
        this.cart = [];
        this.totalPrice = 0.00;
    }
    ngOnInit() {
        this.moviedb.clearMovieArray();
        this.cart = [];
        this.totalPrice = 0.00;
        this.moviedb.resetTotalCartCost();
        this.getCart();
    }
    getCart() {
        this.cartService.getCart(this.loginService.getUserToken()).then(res => {
            res.subscribe(data => {
                const response = data;
                this.cart = response.message;
                console.log(this.cart);
                this.convertCart();
            });
        });
    }
    convertCart() {
        this.moviedb.clearMovieArray();
        this.cart.forEach((m) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.moviedb.getMovieFromID2(m.item_id);
        }));
    }
    getArray() {
        return this.moviedb.getMovieArray();
    }
    getTotalCost() {
        return this.moviedb.getTotalCartCost();
    }
    getPrice(date) {
        const year = date.substring(0, 4);
        console.log(year);
        if (year >= 2019) {
            return '$8.99';
        }
        else if (year <= 2018 && year > 2015) {
            return '$5.99';
        }
        return '$3.99';
    }
    addToOrder() {
        console.log(this.loginService.getUserToken());
        this.ordersService.orderCart(this.loginService.getUserToken()).then(res => {
            res.subscribe(data => {
                const response = data;
                console.log(response.message);
                if (response.valid === true) {
                    this.router.navigate(['/account/orders']);
                }
            });
        });
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
    { type: _services_orders_service_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/pages/catalog/catalog.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clean-block .block-heading p {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbn0iLCIuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/catalog/catalog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.ts ***!
  \****************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CatalogComponent = class CatalogComponent {
    constructor(TMDBService, Activatedroute) {
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
    ngOnInit() {
        this.sub = this.Activatedroute.paramMap.subscribe(params => {
            const page = params.get('page');
            this.page = +page;
        });
        this.TMDBService.discoverNewest();
        this.TMDBService.discoverPopular();
        this.TMDBService.getGenres();
        this.numberOfPages();
    }
    /* Returns a list of four new releases to display
     * on the landing page of our site
     */
    getNewReleases() {
        if (this.TMDBService.getNewest()) {
            this.newReleases = this.TMDBService.getNewest().slice(0, this.max);
        }
        // remove any results that have no poster
        if (this.newReleases) {
            return this.newReleases.filter(t => t.poster_path != null);
        }
    }
    /* Returns a list of four popular films to display
     * on the landing page of our site
     */
    getPopular() {
        if (this.TMDBService.getPopular()) {
            this.popular = this.TMDBService.getPopular().slice(0, this.max);
        }
        // remove any results that have no poster
        if (this.popular) {
            return this.popular.filter(t => t.poster_path != null);
        }
    }
    getWithGenre(id) {
        if (id) {
            this.TMDBService.discoverByGenre(id, this.sort_by);
            this.moviesWithGenre = this.TMDBService.getResults().slice(0, this.max);
        }
        // remove any results that have no poster
        if (this.moviesWithGenre) {
            return this.moviesWithGenre.filter(t => t.poster_path != null);
        }
    }
    /* Determines an arbitrary price for a given movie,
     * based on the release date of said movie
     */
    getPrice(date) {
        const year = date.substring(0, 4);
        if (year >= 2019) {
            return '$8.99';
        }
        else if (year <= 2018 && year > 2015) {
            return '$5.99';
        }
        return '$3.99';
    }
    displayResults(page) {
        const results = this.limit * (page - 1);
        const value = document.getElementById('genres').value;
        console.log(value);
        if (value === 'any') {
            this.results = this.getPopular();
        }
        else {
            this.results = this.getWithGenre(value);
        }
        if (results > this.max - this.limit) {
            return this.results.slice(results, this.max);
        }
        return this.results.slice(results, this.limit + results);
    }
    numberOfPages() {
        const page = Math.floor(this.max / this.limit);
        for (let i = 0; i < page; i++) {
            this.pagesarray.push(i + 1);
        }
        this.maxpage = this.pagesarray[this.pagesarray.length - 1];
    }
    getPages() {
        return this.pagesarray;
    }
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
    getGenresList() {
        this.genres = this.TMDBService.getGenresList();
        if (this.genres) {
            return this.genres;
        }
    }
};
CatalogComponent.ctorParameters = () => [
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catalog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalog.component.scss */ "./src/app/pages/catalog/catalog.component.scss")).default]
    })
], CatalogComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".movie-display-row {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-spacing: 10px;\n}\n\n.movie-display-col {\n  display: table-cell;\n}\n\n.movie-display-row {\n  padding-bottom: 100px;\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1kaXNwbGF5LXJvdyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7IFxuICAgIGJvcmRlci1zcGFjaW5nOiAxMHB4OyBcbn1cblxuLm1vdmllLWRpc3BsYXktY29sIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ubW92aWUtZGlzcGxheS1yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LDI0NiwyNDYpO1xufSIsIi5tb3ZpZS1kaXNwbGF5LXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5tb3ZpZS1kaXNwbGF5LWNvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5tb3ZpZS1kaXNwbGF5LXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(TMDBService, loginService, router) {
        this.TMDBService = TMDBService;
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
        this.TMDBService.discoverTopRated();
        this.TMDBService.discoverPopular();
    }
    /* Returns a list of four new releases to display
     * on the landing page of our site
     */
    getTopRated() {
        if (this.TMDBService.getTopRated()) {
            this.topRated = this.TMDBService.getTopRated().slice(0, 4);
        }
        // remove any results that have no poster
        if (this.topRated) {
            return this.topRated.filter(t => t.poster_path != null);
        }
    }
    /* Returns a list of four popular films to display
     * on the landing page of our site
     */
    getPopular() {
        if (this.TMDBService.getPopular()) {
            this.popular = this.TMDBService.getPopular().slice(0, 4);
        }
        // remove any results that have no poster
        if (this.popular) {
            return this.popular.filter(t => t.poster_path != null);
        }
    }
    /* Determines an arbitrary price for a given movie,
     * based on the release date of said movie
     */
    getPrice(date) {
        let year = date.substring(0, 4);
        // console.log(year);
        if (year >= 2019) {
            return '$8.99';
        }
        else if (year <= 2018 && year > 2015) {
            return '$5.99';
        }
        return '$3.99';
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n\n.has-error input[type=username],\n.has-error input[type=password] {\n  border-color: #d80c0c;\n  color: #e60e0e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7O0VBRUUscUJBQUE7RUFDQSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XG4gICAgbWluLWhlaWdodDogODB2aFxufVxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwidXNlcm5hbWVcIl0sXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIxNiwgMTIsIDEyKTtcbiAgY29sb3I6IHJnYigyMzAsIDE0LCAxNCk7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLWhlaWdodDogODB2aDtcbn1cblxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPXVzZXJuYW1lXSxcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXItY29sb3I6ICNkODBjMGM7XG4gIGNvbG9yOiAjZTYwZTBlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.isSubmitted = false;
        this.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get formControls() { return this.loginForm.controls; }
    ngOnInit() {
    }
    onLogin(value) {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loginService.getAuthentication(value.username, value.password).then(res => {
            res.subscribe((data) => {
                const response = data;
                if (response.valid === true) {
                    this.loginService.setUserToken(response.message);
                    this.loginService.setAuth(true);
                    this.loginService.startTimer();
                    this.router.navigate(['/home']);
                }
                else {
                    console.log('Invalid Login');
                    this.loginForm.controls['username'].setErrors({ invalid: true });
                }
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/payment/payment.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/payment/payment.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f6f6f6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LDI0NiwyNDYpICFpbXBvcnRhbnQ7XG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment/payment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.ts ***!
  \****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentComponent = class PaymentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.scss */ "./src/app/pages/payment/payment.component.scss")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-content {\n  padding-top: 200px;\n}\n\n.poster {\n  height: 70%;\n  width: 70%;\n  margin-left: 80px;\n  margin-top: 20px;\n}\n\n.clean-navbar.fixed-top + .page {\n  padding-top: 0em !important;\n}\n\n.clean-related-item {\n  padding-top: 0px !important;\n  border: none;\n}\n\n.clean-block.clean-product .block-content {\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4ucG9zdGVyIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbn1cblxuLmNsZWFuLW5hdmJhci5maXhlZC10b3ArLnBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAwZW0gIWltcG9ydGFudDtcbn1cblxuLmNsZWFuLXJlbGF0ZWQtaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLmJsb2NrLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4iLCIuYmxvY2stY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLnBvc3RlciB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNsZWFuLW5hdmJhci5maXhlZC10b3AgKyAucGFnZSB7XG4gIHBhZGRpbmctdG9wOiAwZW0gIWltcG9ydGFudDtcbn1cblxuLmNsZWFuLXJlbGF0ZWQtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAuYmxvY2stY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart-service/cart.service */ "./src/app/services/cart-service/cart.service.ts");






let ProductComponent = class ProductComponent {
    // tslint:disable-next-line:max-line-length
    constructor(cartService, router, Activatedroute, TMDBService, loginService) {
        this.cartService = cartService;
        this.router = router;
        this.Activatedroute = Activatedroute;
        this.TMDBService = TMDBService;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.sub = this.Activatedroute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
        this.TMDBService.getMovieFromID(this.id);
        this.TMDBService.getMovieReviews(this.id);
        this.TMDBService.getRelatedMovies(this.id);
    }
    OnDestroy() {
        this.sub.unsubscribe();
    }
    getMovie() {
        return this.TMDBService.getMovie();
    }
    getReview() {
        if (this.TMDBService.getReviews()) {
            this.reviews = this.TMDBService.getReviews().slice(0, 3);
        }
        if (this.reviews) {
            return this.reviews;
        }
    }
    /* Returns a list of four popular films to display
    * on the landing page of our site
    */
    getRelated() {
        if (this.TMDBService.getRelated()) {
            this.related = this.TMDBService.getRelated().slice(0, 4);
        }
        // remove any results that have no poster
        if (this.related) {
            return this.related.filter(t => t.poster_path != null);
        }
    }
    /* Determines an arbitrary price for a given movie,
    * based on the release date of said movie
    */
    getPrice(date) {
        const year = date.substring(0, 4);
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
    }
    additemToCart() {
        if (this.loginService.isAuthenticated()) {
            this.cartService.addToCartItem(this.loginService.getUserToken(), this.getMovie().id).then(som => {
                som.subscribe(data => {
                    const response = data;
                    console.log('hi');
                    console.log(response.message);
                    console.log('end');
                });
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TMDBService"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/pages/registration/registration.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsMjQ2LDI0Nik7XG4gICAgbWluLWhlaWdodDogODB2aFxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: MustMatch, RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
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
let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, loginService, router) {
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
    get f() { return this.registerForm.controls; }
    ngOnInit() {
    }
    onRegister(value) {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log(value.username + ' ' + value.password);
        this.loginService.registerUser(value.email, value.username, value.password).then(res => {
            res.subscribe(data => {
                const response = data;
                if (response.valid === true) {
                    this.router.navigate(['/login']);
                }
                else {
                    console.log(data);
                }
            });
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/pages/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/pages/reset-page/reset-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/reset-page/reset-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhZ2UvcmVzZXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/reset-page/reset-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/reset-page/reset-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageComponent", function() { return ResetPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ResetPageComponent = class ResetPageComponent {
    constructor(formBuilder, loginService, router, Activatedroute) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.Activatedroute = Activatedroute;
        this.resetForm = formBuilder.group({
            password: '',
        });
    }
    ngOnInit() {
        this.sub = this.Activatedroute.paramMap.subscribe(params => {
            this.token = params.get('token');
        });
    }
    onReset(value) {
    }
};
ResetPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ResetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-page/reset-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-page.component.scss */ "./src/app/pages/reset-page/reset-page.component.scss")).default]
    })
], ResetPageComponent);



/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-10 {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  background-color: #f6f6f6;\n  min-height: 80vh;\n}\n\nform {\n  width: 100%;\n  display: flex;\n}\n\ninput {\n  flex: 1 1 auto;\n}\n\n*:focus {\n  border: 0px solid lightgray;\n  outline: none;\n  box-shadow: none;\n}\n\n::-webkit-input-placeholder {\n  color: lightgray;\n}\n\n::-moz-placeholder {\n  color: lightgray;\n}\n\n::-ms-input-placeholder {\n  color: lightgray;\n}\n\n::placeholder {\n  color: lightgray;\n}\n\n.search-bar {\n  border: 0px solid lightgray;\n  font-size: 1.5em;\n  height: 70px;\n  box-shadow: 0px 10px 5px 0px #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hbS9jb3VydGVuYXkvaG9tZTEvdHVybmVycnlhbjEvV2Vic3Rvcm1Qcm9qZWN0cy90ZWFtNHJlbnRmbGl4L0FuZ3VsYXIvUmVudGZsaXgvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREhBO0VBQ0ksZ0JBQUE7QUNFSjs7QURIQTtFQUNJLGdCQUFBO0FDRUo7O0FESEE7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0MsMkJBQUE7RUFDRCxnQkFBQTtFQUNJLFlBQUE7RUFHSixvQ0FBQTtBQ0dBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMTAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LDI0NiwyNDYpO1xuICAgIG1pbi1oZWlnaHQ6IDgwdmhcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW5wdXQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuKjpmb2N1cyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5zZWFyY2gtYmFyIHtcbiBib3JkZXI6IDBweCBzb2xpZCBsaWdodGdyYXk7XG5mb250LXNpemU6IDEuNWVtO1xuICAgIGhlaWdodDogNzBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgyMjQsMjI0LDIyNCwxKTtcbi1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDIyNCwyMjQsMjI0LDEpO1xuYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDIyNCwyMjQsMjI0LDEpO1xufVxuIiwiLmNvbC1tZC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlucHV0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbio6Zm9jdXMge1xuICBib3JkZXI6IDBweCBzb2xpZCBsaWdodGdyYXk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgaGVpZ2h0OiA3MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggI2UwZTBlMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4ICNlMGUwZTA7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggI2UwZTBlMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb-service/tmdb.service */ "./src/app/services/tmdb-service/tmdb.service.ts");



let SearchComponent = class SearchComponent {
    constructor(TMDBService) {
        this.TMDBService = TMDBService;
        this.isValidSearch = () => this.validSearch;
    }
    ngOnInit() {
        this.validSearch = false;
    }
    search(title) {
        // alert(title)
        this.TMDBService.searchTitle(title);
        this.validSearch = this.TMDBService.isValidSearch();
    }
    getSearchResults() {
        let results = this.TMDBService.getSearchResults();
        if (results)
            return results.filter(t => t.poster_path != null);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_tmdb_service_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TMDBService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/cart-service/cart.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/cart-service/cart.service.ts ***!
  \*******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'X-Requested-With': '',
    })
};
let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.serverlink = 'http://rent-flix-api.herokuapp.com';
    }
    getCart(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.get(`${this.serverlink}/cart`, httpOptions);
        });
    }
    addToCartItem(token, itemId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.post(`${this.serverlink}/cart`, { item_id: itemId }, httpOptions);
        });
    }
    removeFromCartItem(token, itemId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.delete(`${this.serverlink}/cart/${itemId}`, httpOptions);
        });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/login-service/login.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/login-service/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _component_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        username: '',
        plainTextPass: '',
        'X-Requested-With': '',
    })
};
let LoginService = class LoginService {
    constructor(http, matDialog, router) {
        this.http = http;
        this.matDialog = matDialog;
        this.router = router;
        this.userToken = '';
        this.auth = false;
        this.serverlink = 'http://rent-flix-api.herokuapp.com';
        this.timerExpired = false;
        this.startTimer = () => {
            this.timer = setInterval(() => {
                if (this.timerExpired === true) {
                    console.log('Logging out');
                    this.stopTimer();
                    this.openDialog();
                }
                this.timerExpired = true;
            }, 600000); // 10 minutes
        };
        this.getTimer = () => {
            return this.timer;
        };
        this.resetTimer = () => {
            this.timerExpired = false;
            this.timer = setInterval(() => {
                if (this.timerExpired === true) {
                    console.log('Logging out');
                    this.stopTimer();
                    this.openDialog();
                }
                this.timerExpired = true;
            }, 600000); // 10 minutes
        };
        this.timer = null;
    }
    getAuthentication(username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('username', username);
            httpOptions.headers =
                httpOptions.headers.set('plainTextPass', password);
            return this.http.get(`${this.serverlink}/user/authentication`, httpOptions);
        });
    }
    registerUser(email, username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.post(`${this.serverlink}/user`, { email, username, password }, httpOptions);
        });
    }
    getAccountDetails(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.get(`${this.serverlink}/user/details`, httpOptions);
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', this.getUserToken());
            return this.http.delete(`${this.serverlink}/user/authentication`, httpOptions);
        });
    }
    stopTimer() {
        this.timerExpired = true;
        clearInterval(this.timer);
        this.timer = null;
    }
    setUserToken(token) {
        this.userToken = token;
    }
    getUserToken() {
        return this.userToken;
    }
    isAuthenticated() {
        return this.auth;
    }
    setAuth(auth) {
        this.auth = auth;
    }
    openDialog() {
        this.stopTimer();
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        const dialogRef = this.matDialog.open(_component_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(value => {
            console.log(`Dialog sent: ${value}`);
            this.logoutFunc();
        });
    }
    logoutFunc() {
        console.log('logingoust');
        this.logout().then(res => {
            res.subscribe((data) => {
                const response = data;
                if (response.valid === true) {
                    this.setUserToken('');
                    this.setAuth(false);
                    this.stopTimer();
                    this.router.navigate(['/login']);
                }
                else {
                    console.log(response.message);
                }
            });
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/orders-service/orders.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/orders-service/orders.service.ts ***!
  \***********************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'X-Requested-With': '',
    })
};
let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
        this.serverlink = 'http://rent-flix-api.herokuapp.com';
    }
    getOrders(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.get(`${this.serverlink}/orders`, httpOptions);
        });
    }
    orderCart(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('token: ' + token);
            httpOptions.headers =
                httpOptions.headers.set('X-Requested-With', token);
            return this.http.post(`${this.serverlink}/orders`, {}, httpOptions);
        });
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/services/tmdb-service/tmdb.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/tmdb-service/tmdb.service.ts ***!
  \*******************************************************/
/*! exports provided: TMDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMDBService", function() { return TMDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TMDBService = class TMDBService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'a3a2f627df576a24a77620f55e7d04e2';
        this.apiDiscover = `https://api.themoviedb.org/3/discover/movie`;
        this.apiGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}&language=en-US`;
        this.apiDetails = `https://api.themoviedb.org/3/movie`;
        this.apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;
        this.totalCartCost = 0.00;
        this.getNewest = () => this.newest;
        this.getTopRated = () => this.topRated;
        this.getPopular = () => this.popular;
        this.getMovie = () => this.movie;
        this.getMovieArray = () => this.customMovieArray;
        this.getMovieArray2 = () => this.customMovieArray2;
        this.getTotalCartCost = () => this.totalCartCost;
        this.resetTotalCartCost = () => this.totalCartCost = 0.00;
        this.getReviews = () => this.reviews;
        this.getRelated = () => this.related;
        this.getResults = () => this.results;
        this.getSearchResults = () => this.searchResults;
        this.getGenresList = () => this.genres;
        this.isValidSearch = () => this.validSearch;
    }
    /* Gets the latest movies from TMDB
    to display on the landing page */
    discoverNewest(sort_by = 'date.asc') {
        this.http
            .get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(responseBody);
            this.newest = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    /* Gets the most popular movies from TMDB
    to display on the landing page */
    discoverPopular(sort_by = 'popularity.desc') {
        this.http
            .get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(responseBody);
            this.popular = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    /* Gets the top rated movies from TMDB
    to display on the landing page */
    discoverTopRated() {
        this.http
            .get(`${this.apiDetails}/top_rated?api_key=${this.apiKey}`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(responseBody);
            this.topRated = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    getMovieFromID(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.http
                .get(`${this.apiDetails}/${id}?api_key=${this.apiKey}`, { responseType: 'text' })
                .subscribe(response => {
                const responseBody = JSON.parse(response);
                // console.log(responseBody);
                this.movie = responseBody;
                console.log(this.movie);
            }, err => {
                console.log(err);
            });
        });
    }
    clearMovieArray() {
        this.customMovieArray = [];
        this.customMovieArray2 = [];
    }
    getMovieFromID2(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            function updateCost(data) {
                const year = data.substring(0, 4);
                console.log(year);
                if (year >= 2019) {
                    return 8.99;
                }
                else if (year <= 2018 && year > 2015) {
                    return 5.99;
                }
                return 3.99;
            }
            this.http
                .get(`${this.apiDetails}/${id}?api_key=${this.apiKey}`, { responseType: 'text' })
                .subscribe(response => {
                const responseBody = JSON.parse(response);
                // console.log(responseBody);
                this.customMovieArray.push({ title: responseBody.title, releaseDate: responseBody.release_date, posterPath: responseBody.poster_path });
                this.totalCartCost += updateCost(responseBody.release_date);
            }, err => {
                console.log(err);
            });
        });
    }
    getMovieFromID3(objs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.http.get(`${this.apiDetails}/${objs.item_id}?api_key=${this.apiKey}`, { responseType: 'text' }).subscribe(response => {
                const responseBody = JSON.parse(response);
                // console.log(responseBody);
                this.customMovieArray2.push({ id: objs.item_id, title: responseBody.title, releaseDate: responseBody.release_date,
                    posterPath: responseBody.poster_path, timeAdded: objs.purchase_date, averageVote: responseBody.vote_average, homePage: responseBody.homepage });
                // this.totalCartCost += updateCost1(responseBody.release_date);
            }, err => {
                console.log(err);
            });
        });
    }
    getMovieReviews(id) {
        this.http
            .get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(responseBody);
            this.reviews = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    getRelatedMovies(id) {
        this.http
            .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(responseBody);
            this.related = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    getGenres() {
        this.http.get(this.apiGenres, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            // console.log(this.genres)
            this.genres = responseBody.genres;
        }, err => {
            console.log(err);
        });
    }
    discoverByGenre(id, sort_by = 'popularity.desc') {
        if (!id) {
            this.discover(sort_by);
            return;
        }
        this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&with_genres=${id}&language=en-US`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            this.results = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    discover(sort_by = 'popularity.desc') {
        this.http.get(`${this.apiDiscover}?api_key=${this.apiKey}&sort_by=${sort_by}&language=en-US`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            this.results = responseBody.results;
        }, err => {
            console.log(err);
        });
    }
    searchTitle(title) {
        if (!title) {
            this.validSearch = false;
            this.notProvided = true;
            this.notFound = false;
        }
        else {
            this.getValidSearchResults(title);
        }
    }
    getValidSearchResults(title) {
        this.http.get(`${this.apiSearch}&language=en-US&query=${title}`, { responseType: 'text' })
            .subscribe(response => {
            const responseBody = JSON.parse(response);
            if (responseBody.Error) {
                this.validSearch = false;
                this.notFound = true;
                this.notProvided = false;
            }
            else {
                this.validSearch = true;
                this.notFound = false;
                this.notProvided = false;
                this.searchResults = responseBody.results;
                console.log(this.searchResults);
            }
        });
    }
};
TMDBService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TMDBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TMDBService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /am/courtenay/home1/turnerryan1/WebstormProjects/team4rentflix/Angular/Rentflix/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map