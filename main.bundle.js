webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav .navbar-nav li a{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- ----------------------\r\n    Navigation Area\r\n    plugin: bootsnav\r\n    effect: bootsnav center\r\n\r\n    ==*== Created by: Meshu Debnath ==*==\r\n-->\r\n\r\n<nav class=\"navbar navbar-default brand-center center-side bootsnav\">\r\n\r\n    <div class=\"container\">\r\n        <!-- Start Header Navigation -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-menu\">\r\n                <i class=\"fa fa-bars\"></i>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/login\"><img src=\"assets/img/logo.jpg\" class=\"logo\" alt=\"\"></a>\r\n        </div>\r\n        <!-- End Header Navigation -->\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav\" data-in=\"fadeInDown\" data-out=\"fadeOutUp\">\r\n                <li><a  routerLink=\"/home\">Home</a></li>\r\n                <li><a  routerLink=\"/dashboard\">Dashboard</a></li>\r\n                <li><a  routerLink=\"\">About us</a></li>\r\n                <li><a  ><i class=\"fa fa-flash\"></i> Start A Campaign</a></li>\r\n                <li><a  routerLink=\"/login\">Log in</a></li>\r\n                <li *ngIf=\"loginUserID != null\"><a routerLink=\"\">Logout</a></li>\r\n\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div>\r\n</nav>\r\n\r\n\r\n\r\n<!-- ------------*---------------\r\n   Section Name: slider\r\n   plugin:\r\n   Created by: Meshu Debnath\r\n   -------------*--------------\r\n-->\r\n<div class=\"container-fluid owl_slider\" *ngIf=\"router.url === '/' || router.url === '/home'\">\r\n    <div class=\"row\">\r\n        <div class=\"mySlider owl-carousel\">\r\n            <div>\r\n                <img src=\"assets/img/p1.JPG\" class=\"img-responsive\" alt=\"\">\r\n\r\n                <div class=\"sliderCaption\">\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>Cinder Grill wins $75K in Flash Funding!</h4>\r\n                        <p>\r\n                            Precision cooking appliance receives flash funding via the Arrow Certification Program.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <a href=\"\" class=\"learn_more btn btn-link\">LEARN MORE</a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div>\r\n                <img src=\"assets/img/p2.jpg\" class=\"img-responsive\" alt=\"\">\r\n\r\n                <div class=\"sliderCaption\">\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>Motu Patlu Grill wins $75K in Flash Funding!</h4>\r\n                        <p>\r\n                            Precision cooking appliance receives flash funding via the Arrow Certification Program.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <a href=\"\" class=\"learn_more btn btn-link\">LEARN MORE</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div><img src=\"assets/img/p3.png\" class=\"img-responsive\" alt=\"\">\r\n\r\n                <div class=\"sliderCaption\">\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>Boxer Grill wins $75K in Flash Funding!</h4>\r\n                        <p>\r\n                            Precision cooking appliance receives flash funding via the Arrow Certification Program.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <a href=\"\" class=\"learn_more btn btn-link\">LEARN MORE</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <img src=\"assets/img/p1.JPG\" class=\"img-responsive\" alt=\"\">\r\n                <div class=\"sliderCaption\">\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>Cingam Grill wins $75K in Flash Funding!</h4>\r\n                        <p>\r\n                            Precision cooking appliance receives flash funding via the Arrow Certification Program.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <a href=\"\" class=\"learn_more btn btn-link\">LEARN MORE</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <img src=\"assets/img/p2.jpg\" class=\"img-responsive\" alt=\"\">\r\n                <div class=\"sliderCaption\">\r\n                    <div class=\"col-sm-8\">\r\n                        <h4>Meshu Grill wins $75K in Flash Funding!</h4>\r\n                        <p>\r\n                            Precision cooking appliance receives flash funding via the Arrow Certification Program.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <a href=\"\" class=\"learn_more btn btn-link\">LEARN MORE</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- ------------------------- Container body for angular -- -------------->\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n<!-- ------------*---------------\r\n   Section Name: Footer Area\r\n   Sub section : Top footer\r\n   Created by: Meshu Debnath\r\n   -------------*--------------\r\n-->\r\n<div class=\"container-fluid footerWrapper\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row topFooter\">\r\n            <div class=\"col-sm-4 \">\r\n                <div class=\"topFooterItem\">\r\n                    <div class=\"leftImg\"></div>\r\n                    <div class=\"rightImg\">\r\n                        <h5>#1 Fundraising Platform</h5>\r\n                        <p>People have raised more money on CrowdFunding <sup>TM</sup> than anywhere else.</p>\r\n                        <a href=\"#\">How It Works</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-4 \">\r\n                <div class=\"topFooterItem\">\r\n                    <div class=\"leftImg\"></div>\r\n                    <div class=\"rightImg\">\r\n                        <h5>MoneyBack Guarantee</h5>\r\n                        <p>Your donation is protected. If anything is not right, we’ll give you a full refund. </p>\r\n                        <a href=\"#\">Lear More</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-4 \">\r\n                <div class=\"topFooterItem\">\r\n                    <div class=\"leftImg\"></div>\r\n                    <div class=\"rightImg\">\r\n                        <h5>5-Minute Support</h5>\r\n                        <p>Contact us with your questions and we'll reply in 5 minutes—24/7. </p>\r\n                        <a href=\"#\">Get Help</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> <!-- end of row -->\r\n\r\n        <div class=\"row middleFooter\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"searchFooter\">\r\n                    <img src=\"assets/img/logo.jpg\" alt=\"\" class=\"img-responsive\">\r\n\r\n                    <form action=\"\" class=\"form\">\r\n                        <select class=\"form-control\">\r\n                            <option value=\"volvo\">English</option>\r\n                            <option value=\"saab\">Bengali</option>\r\n                            <option value=\"opel\">Hindi</option>\r\n                            <option value=\"audi\">Arabic</option>\r\n                        </select>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-2 middleFooterItem\">\r\n                <h4>Get Started</h4>\r\n\r\n                <ul class=\"list-group list-unstyled\">\r\n\r\n                    <li class=\"\"><a href=\"\">How It Works</a></li>\r\n                    <li class=\"\"><a href=\"\">Pricing and Fees</a></li>\r\n                    <li class=\"\"><a href=\"\">Common Questions</a></li>\r\n                    <li class=\"\"><a href=\"\">Success Stories</a></li>\r\n                    <li class=\"\"><a href=\"\">Sign Up Now</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n\r\n            <!-- top categorys -->\r\n            <div class=\"col-sm-2 middleFooterItem\">\r\n                <h4>Get Started</h4>\r\n\r\n                <ul class=\"list-group list-unstyled\">\r\n\r\n                    <li class=\"\"><a href=\"\">How It Works</a></li>\r\n                    <li class=\"\"><a href=\"\">Pricing and Fees</a></li>\r\n                    <li class=\"\"><a href=\"\">Common Questions</a></li>\r\n                    <li class=\"\"><a href=\"\">Success Stories</a></li>\r\n                    <li class=\"\"><a href=\"\">Sign Up Now</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n\r\n\r\n            <!--Learn more-->\r\n            <div class=\"col-sm-2 middleFooterItem\">\r\n                <h4>Get Started</h4>\r\n\r\n                <ul class=\"list-group list-unstyled\">\r\n\r\n                    <li class=\"\"><a href=\"\">How It Works</a></li>\r\n                    <li class=\"\"><a href=\"\">Pricing and Fees</a></li>\r\n                    <li class=\"\"><a href=\"\">Common Questions</a></li>\r\n                    <li class=\"\"><a href=\"\">Success Stories</a></li>\r\n                    <li class=\"\"><a href=\"\">Sign Up Now</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n\r\n\r\n            <!-- get supported -->\r\n            <div class=\"col-sm-2 middleFooterItem\">\r\n                <h4>Get Started</h4>\r\n\r\n                <ul class=\"list-group list-unstyled\">\r\n\r\n                    <li class=\"\"><a href=\"\">How It Works</a></li>\r\n                    <li class=\"\"><a href=\"\">Pricing and Fees</a></li>\r\n                    <li class=\"\"><a href=\"\">Common Questions</a></li>\r\n                    <li class=\"\"><a href=\"\">Success Stories</a></li>\r\n                    <li class=\"\"><a href=\"\">Sign Up Now</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>   <!-- end of middle footer -->\r\n\r\n        <hr>\r\n        <!-- copyright footer -->\r\n        <div class=\"row\">\r\n            <div class=\"copyright text-center\">\r\n                <p> &copy; 2017 <a href=\"#\" class=\"text-success\">CrowdFunding<sup>TM </sup> </a> &nbsp; Bangladesh Limited || All Rights Reserved</p>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div> <!-- end of container -->\r\n</div> <!-- end of container fluid footerWrapper-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_list_service__ = __webpack_require__("../../../../../src/app/post-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(postList, route) {
        this.postList = postList;
        this.route = route;
        this.title = 'app';
        this.router = route;
        this.loginUserID = sessionStorage.getItem("user_id");
        jQuery(".mySlider").owlCarousel({
            center: true,
            items: 3,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            autoplaySpeed: 2000,
            loop: true,
            responsive: {
                600: {
                    items: 2
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.postItem = this.postList.fetchData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post_list_service__["a" /* PostListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_list_service__["a" /* PostListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_list_service__ = __webpack_require__("../../../../../src/app/post-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_details_service__ = __webpack_require__("../../../../../src/app/post-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_details_post_details_component__ = __webpack_require__("../../../../../src/app/post-details/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_time_pipe__ = __webpack_require__("../../../../../src/app/js-time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__make_user_image_pipe__ = __webpack_require__("../../../../../src/app/make-user-image.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_userpage_userpage_component__ = __webpack_require__("../../../../../src/app/user/userpage/userpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__slice_array_pipe__ = __webpack_require__("../../../../../src/app/slice-array.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    {
        path: "details",
        component: __WEBPACK_IMPORTED_MODULE_9__post_details_post_details_component__["a" /* PostDetailsComponent */]
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_12__user_userpage_userpage_component__["a" /* UserpageComponent */]
    },
    {
        path: "logout",
        component: __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_9__post_details_post_details_component__["a" /* PostDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__js_time_pipe__["a" /* JsTimePipe */],
            __WEBPACK_IMPORTED_MODULE_11__make_user_image_pipe__["a" /* MakeUserImagePipe */],
            __WEBPACK_IMPORTED_MODULE_12__user_userpage_userpage_component__["a" /* UserpageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__slice_array_pipe__["a" /* SliceArrayPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__post_list_service__["a" /* PostListService */], __WEBPACK_IMPORTED_MODULE_7__post_details_service__["a" /* PostDetailsService */], __WEBPACK_IMPORTED_MODULE_14__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- ----------------------\n    Navigation Area\n    plugin: bootsnav\n    effect: bootsnav center\n\n    ==*== Created by: Meshu Debnath ==*==\n-->\n\n<nav class=\"navbar navbar-default brand-center center-side bootsnav\">\n\n  <div class=\"container\">\n    <!-- Start Header Navigation -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-menu\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"assets/img/logo.jpg\" class=\"logo\" alt=\"\"></a>\n    </div>\n    <!-- End Header Navigation -->\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n      <ul class=\"nav navbar-nav\" data-in=\"fadeInDown\" data-out=\"fadeOutUp\">\n        <li><a  routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li><a  routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n        <li><a (click)=\"$event.preventDefault()\" routerLink=\"\">About us</a></li>\n        <li><a  ><i class=\"fa fa-flash\"></i> Start A Campaign</a></li>\n        <li><a (click)=\"$event.preventDefault()\" routerLink=\"/login\">Log in</a></li>\n        <li *ngIf=\"loginUserID != null;else signUP;\"><button  (click)=\"logOut()\">Logout</button></li>\n        <ng-template #signUP>\n          <li><a>Sign up</a></li>\n        </ng-template>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(route) {
        this.route = route;
        this.router = route;
        this.loginUserID = sessionStorage.getItem("user_id");
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        console.log("logout click");
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/js-time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsTimePipe = (function () {
    function JsTimePipe() {
    }
    JsTimePipe.prototype.transform = function (value, exponent) {
        this.comment_time = value;
        this.now = new Date();
        this.cTime = new Date(this.comment_time);
        this.diff = this.now - this.cTime;
        this.diffDays = Math.round(this.diff / 86400000); // days
        this.diffHrs = Math.round((this.diff % 86400000) / 3600000); // hours
        this.diffMins = Math.round(((this.diff % 86400000) % 3600000) / 60000); // minutes
        var str;
        if (this.diffDays > 30) {
            //console.log(this.diffDays +" days ago");
            var month = this.diffDays / 31;
            str = month + " months ago";
        }
        else if (this.diffDays > 0 && this.diffDays < 31) {
            //console.log(this.diffDays +" days ago");
            str = this.diffDays + " days ago";
        }
        else if (this.diffHrs >= 1) {
            //console.log(this.diffHrs + " Hours ago");
            str = this.diffHrs + " hours ago";
        }
        else if (this.diffMins == 0) {
            //console.log("just now");
            str = "just now";
        }
        else if (this.diffMins < 60 && this.diffMins >= 1) {
            //console.log(this.diffMins + " minutes ago");
            str = this.diffMins + " minutes ago";
        }
        return str;
    };
    return JsTimePipe;
}());
JsTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'jsTime'
    })
], JsTimePipe);

//# sourceMappingURL=js-time.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n\r\n  login page\r\n*/\r\n\r\n.login_area {\r\n\r\n    margin-top: 60px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.login_body {\r\n\r\n    float: none;\r\n    margin: auto;\r\n}\r\n\r\n.login_header {\r\n\r\n}\r\n\r\n.login_header button {\r\n    border-radius: 0px;\r\n}\r\n\r\n.form_area {\r\n    background: #fff;\r\n    padding: 20px 50px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 1px 1px 5px #ddd;\r\n}\r\n\r\n.form_area h3 {\r\n    margin-left: -15px;\r\n    padding-bottom: 30px;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    color: #292929;\r\n}\r\n\r\n.form_area input {\r\n    padding: 20px;\r\n}\r\n\r\n.form_area button {\r\n    padding: 10px 25px;\r\n    font-weight: 600;\r\n    border-radius: 0px;\r\n}\r\n\r\n.submit_addon {\r\n    background: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    padding-top: 10px;\r\n}\r\n\r\ninput[type=\"file\"]::-webkit-file-upload-button {\r\n    -webkit-appearance: push-button;\r\n    white-space: nowrap;\r\n    font-size: inherit;\r\n    -webkit-user-modify: read-only;\r\n    margin: 0px;\r\n    padding: 10px 25px;\r\n    color: #fff;\r\n    background: #337ab7;\r\n    border: none;\r\n    font-weight: 600;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid login_area\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n\r\n      </div>\r\n      <div class=\"col-sm-offset-2 col-sm-5\">\r\n        <div class=\"row\" id=\"mytabs\">\r\n          <div class=\"login_header\">\r\n            <button class=\"btn btn-md btn-primary\" (click)=\"loginButton('tabs-1')\" data-target=\"#tabs-1\" id=\"tabs_btn_1\">Login\r\n            </button>\r\n            <button class=\"btn btn-md btn-warning\" (click)=\"loginButton('tabs-2')\" data-target=\"#tabs-2\" id=\"tabs_btn_2\">Signup\r\n            </button>\r\n          </div>\r\n          <div class=\"form_area login\" id=\"tabs-1\">\r\n            <h3>Login</h3>\r\n            <form class=\"form-horizontal\"  [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"username\"\r\n                         placeholder=\"Email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>\r\n                  <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                         placeholder=\"Password\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"checkbox\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"checkRemember\" formControlName=\"remember\">Remember me\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group \">\r\n                  <button class=\"btn btn-md btn-primary\" type=\"submit\" name=\"emp\">Login\r\n                  </button>\r\n                  <div class=\"input-group-addon submit_addon\"><p><a href=\"#\" id=\"forgotPass1\">Forgot\r\n                    password?</a></p></div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"login_alert\" *ngIf=\"err\">\r\n                 {{err}}\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form_area registration\" id=\"tabs-2\">\r\n            <h3>Signup</h3>\r\n            <form class=\"form-horizontal\"  [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\r\n                  <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>\r\n                  <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                         placeholder=\"Password\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"username\"\r\n                         placeholder=\"Username\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"fullname\"\r\n                         placeholder=\"Full Name\">\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group \">\r\n                  <button class=\"btn btn-md btn-primary\" name=\"register\">Register\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"login_alert\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, userService, route) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.loginForm = fb.group({
            'username': '',
            'password': '',
            'remember': '',
        });
        this.signupForm = fb.group({
            'username': '',
            'password': '',
            'fullname': '',
            'email': '',
        });
        this.router = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        jQuery("#tabs-1").show();
        jQuery("#tabs-2").hide();
    };
    LoginComponent.prototype.login = function (x) {
        this.checkUser(x.username, x.password);
    };
    LoginComponent.prototype.checkUser = function (username, password) {
        var _this = this;
        this.userService.fetchUser(username, password).subscribe(function (userList) {
            _this.userList = userList;
            console.log("username" + _this.userList[0].success);
            if (_this.userList[0].success == "ok" && _this.userList[0].active == "1") {
                sessionStorage.setItem("login", "1");
                sessionStorage.setItem("username", _this.userList[0].username);
                sessionStorage.setItem("user_id", _this.userList[0].id);
                sessionStorage.setItem("fullName", _this.userList[0].fullName);
                sessionStorage.setItem("uImage", _this.userList[0].uImage);
                sessionStorage.setItem("role", _this.userList[0].role);
                sessionStorage.setItem("email", _this.userList[0].email);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.err = "Sorry something went wrong. Please try again.";
            }
        });
    };
    LoginComponent.prototype.loginButton = function (x) {
        jQuery("#tabs-1").hide();
        jQuery("#tabs-2").hide();
        jQuery("#" + x).show();
    };
    LoginComponent.prototype.signup = function (x) {
        this.userService.signUp(x.username, x.password, x.fullname, x.email).subscribe();
        this.loginButton('tabs-1');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(route) {
        this.route = route;
        this.router = route;
        sessionStorage.clear();
        console.log("session " + sessionStorage.getItem('user_id'));
        this.router.navigate(['/home']);
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/make-user-image.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeUserImagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MakeUserImagePipe = (function () {
    function MakeUserImagePipe() {
    }
    MakeUserImagePipe.prototype.transform = function (value, args) {
        var userlogo;
        var nameArray = value.split(/(\s+)/);
        if (nameArray[2] != null) {
            userlogo = nameArray[0][0] + "" + nameArray[2][0];
        }
        else {
            userlogo = nameArray[0][0] + "" + nameArray[0][1];
        }
        return userlogo;
    };
    return MakeUserImagePipe;
}());
MakeUserImagePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'makeUserImage'
    })
], MakeUserImagePipe);

//# sourceMappingURL=make-user-image.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/post-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDetailsService = (function () {
    function PostDetailsService(http) {
        this.http = http;
    }
    PostDetailsService.prototype.fetchData = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/singlePost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.fetchUpdate = function (id, limit, offset) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id + '&&limit=' + limit + '&&offset=' + offset;
        return this.http.post("https://meshudebnath.com/project/angular/api/singleUpdate.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.fetchComment = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/singleComment.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.fetchPayment = function (id, limit, offset) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id + '&&limit=' + limit + '&&offset=' + offset;
        return this.http.post("https://meshudebnath.com/project/angular/api/singlePayment.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.fetchUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/findUser.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.addComment = function (id, user_id, text, userImage, fullName, created_at) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id + '&&user_id=' + user_id + '&&text=' + text + '&&userImage=' + userImage + '&&fullName=' + fullName + '&&created_at=' + created_at;
        return this.http.post("https://meshudebnath.com/project/angular/api/addComment.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.addLoveToComment = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/addLoveToComment.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostDetailsService.prototype.addDonate = function (post_id, user_id, fullName, userImage, amount, created_at) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'post_id=' + post_id + '&&user_id=' + user_id + '&&amount=' + amount + '&&userImage=' + userImage + '&&fullName=' + fullName + '&&created_at=' + created_at;
        return this.http.post("https://meshudebnath.com/project/angular/api/addPayment.php", body, options);
    };
    PostDetailsService.prototype.getPostByCat = function (id, limit, offset) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id + '&&limit=' + limit + '&&offset=' + offset;
        ;
        return this.http.post("https://meshudebnath.com/project/angular/api/getPostByCat.php", body, options).map(function (response) {
            return response.json();
        });
    };
    return PostDetailsService;
}());
PostDetailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostDetailsService);

var _a;
//# sourceMappingURL=post-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n  Your Stylesheet\r\n*/\r\n\r\nbody{\r\n    /*font-family: 'Lato', sans-serif;*/\r\n    background: #f9f9f9 !important;\r\n\r\n}\r\n\r\n.like_div{\r\n    margin-top: 80px;\r\n}\r\n.left_part{\r\n    /*padding-bottom: 100%;*/\r\n\r\n}\r\n.left_part_header{}\r\n.left_part_body{\r\n    padding: 10px 0px 10px 10px;\r\n}\r\n.left_part_body h1{\r\n    border-bottom: 1px dotted #CACACA;\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 15px;\r\n    line-height: 1.23;\r\n    font-size: 25px;\r\n    font-weight: 800;\r\n}\r\n.hr_tag_color{\r\n\r\n}\r\n.body_tab{\r\n    overflow-x: hidden;\r\n}\r\n.body_tab > ul{\r\n    margin-bottom: 20px;\r\n    padding: 10px 10px 0px 10px;\r\n    /*border-bottom: 1px dotted #F6E2C7;*/\r\n    height: 55px;\r\n\r\n}\r\n.body_tab > ul li a{\r\n    font-weight:800;\r\n    color: #2e6da4;\r\n}\r\n.body_tab > ul li{\r\n    position: relative;\r\n}\r\n.body_tab > ul .active :after{\r\n    position: absolute;\r\n    content: '';\r\n    width: 99%;\r\n    bottom: -1px;\r\n    left: 0;\r\n    border-bottom: 2px solid #2e6da4;\r\n}\r\n.story{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin-left: -20px;\r\n    margin-right: 20px;\r\n}\r\n.story a{\r\n    color: #DC8A1D;\r\n}\r\n#story {\r\n    font-size: 17px;\r\n    font-weight:500;\r\n    color: #000;\r\n    /*padding: 12px;*/\r\n}\r\n.update{\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\n.update a{\r\n    color: #DC8A1D;\r\n}\r\n\r\n.updateNo{\r\n    font-size: 17px;\r\n    font-weight:800;\r\n    color: #2e6da4;\r\n\r\n}\r\n\r\n#update{\r\n    font-size: 17px;\r\n    font-weight:500;\r\n    color: #000;\r\n}\r\n\r\n#update > p {\r\n    color: #444;\r\n    margin-bottom:20px;\r\n}\r\n#update > h3{\r\n    font-weight:600;\r\n    color: #222;\r\n    font-size:17px;\r\n}\r\n#update ul li{\r\n    margin-bottom:50px;\r\n}\r\n.updateContent{\r\n    line-height: 1.6em;\r\n}\r\n/*right column*/\r\n.right_part_header{\r\n    padding: 20px;\r\n}\r\n.right_part_header h4{\r\n    font-weight:600;\r\n    color: #555;\r\n}\r\n.right_part_header h4 strong{\r\n    font-weight:800;\r\n    color: #000;\r\n    font-size: 22px;\r\n}\r\n#myProgress {\r\n    width: 100%;\r\n    background-color: #DDD;\r\n    border-radius: 10px;\r\n}\r\n\r\n#myBar {\r\n    width: 60%;\r\n    height: 11px;\r\n    background-color: #DC8A1D;\r\n    border-radius: 10px;\r\n}\r\n\r\n.right_part_header button{\r\n    width: 100%;\r\n    background: #2e6da4;\r\n    color: white;\r\n    height: 40px;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    border-bottom: 3px solid #A66816;\r\n}\r\n.right_part_header button:hover{\r\n    color: white;\r\n    background: #DC8A1D;\r\n}\r\n\r\n\r\n.right_part_body{\r\n    padding: 10px;\r\n}\r\n.date_right{\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n    border-bottom: 1px dotted #CACACA;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.contact_whole_part{\r\n    padding: 10px;\r\n    height: 100px;\r\n    width: 100%;\r\n}\r\n.rf{\r\n    float: left;\r\n    border-radius: 50%;\r\n    margin-right: 25px;\r\n    margin-top: 10px;\r\n    background: #fff;\r\n    height:50px;\r\n    width:50px;\r\n}\r\n.rf span {\r\n    color: #999;\r\n    position: absolute;\r\n    padding-left: 10px;\r\n    padding-top: 10px;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n}\r\n.right_part_body_contact{\r\n    float: left;\r\n}\r\n.right_part_body_contact_name{\r\n    font-size: 18px;\r\n}\r\n\r\n.right_part_body_contact_name a{\r\n    margin-left: 10px;\r\n    color: orange;\r\n}\r\n.right_part_body_contact_name a i{}\r\n.right_part_body_contact_medical{}\r\n.right_part_body_contact_medical a{\r\n    color: orange;\r\n}\r\n.right_part_body_contact_medical a i{\r\n    margin-right: 10px;\r\n}\r\n.right_part_body_contact_map{}\r\n.right_part_body_contact_map a{\r\n    color: orange;\r\n}\r\n.right_part_body_contact_map a i{\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.top_supports{\r\n    height: 50px;\r\n    background: white;\r\n    padding: 15px;\r\n    border-radius: 4px;\r\n    font-weight: 900;\r\n    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n}\r\n.first_donor{\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n}\r\n.first_donor p{\r\n    font-size: 16px;\r\n    font-weight: 900;\r\n    letter-spacing: 0px;\r\n    border-bottom: 1px dotted #CACACA;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.first_donor_content{\r\n    margin-top: 20px;\r\n}\r\n/*.first_donor_content i{\r\n\tcolor: #DC8A1D;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n}*/\r\n.first_donor a{\r\n    text-decoration: none;\r\n    color: #DC8A1D;\r\n    font-size: 16px;\r\n    font-weight: 900;\r\n    margin-left: 10px;\r\n}\r\n.first_donor a:hover{\r\n    color: #A66816;\r\n}\r\n.first_donor a span{}\r\n.top_supports a{\r\n    text-decoration: none;\r\n    color: #DC8A1D;\r\n}\r\n.top_supports a:hover{\r\n    color: #A66816;\r\n}\r\n.top_supports a span i{\r\n    margin-left: 5px;\r\n}\r\n\r\n.recent_donations{\r\n    padding: 0px 20px;\r\n}\r\n.border_recent{\r\n    border-bottom: 1px dotted #CACACA;\r\n    width: 320px;\r\n    margin-left: 104px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.top_see_more{\r\n    height: 50px;\r\n    background: white;\r\n    padding: 15px;\r\n    border-radius: 4px;\r\n    font-weight: 900;\r\n    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.4s ease 0s;\r\n}\r\n.top_see_more:hover a{\r\n    color: #d58512;\r\n}\r\n.top_see_more a{\r\n    transition: all .5s;\r\n    text-decoration: none;\r\n    color: #2e6da4;\r\n    font-weight:800;\r\n    font-size:16px;\r\n}\r\n\r\n.payImage{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right:10px;\r\n}\r\n\r\n.highlight{\r\n    font-weight:800;\r\n    font-size:14px;\r\n    margin-bottom:5px;\r\n    color: #000;\r\n}\r\n.payment_time{\r\n    color: #888;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n\r\n/*\r\n comment css\r\n*/\r\n\r\n\r\n.comment{\r\n    margin-top: 80px;\r\n}\r\n.leave_comment {\r\n    width: 100%;\r\n    height: 50px;\r\n    color: #3B579D;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    box-shadow: 2px 2px 2px -2px grey;\r\n}\r\n.leave_comment:hover{\r\n    color: darkblue;\r\n    transition: all 0.4s ease 0s;\r\n\r\n}\r\n.image_part{\r\n    margin-top: 40px;\r\n}\r\n.comment_part{\r\n    margin-top: 40px;\r\n}\r\n.user_name{\r\n    float: left;\r\n}\r\n.user_name h3{\r\n    text-transform: capitalize;\r\n    font-size: 18px;\r\n    font-weight:600;\r\n    color: #222;\r\n}\r\n.user_name p{\r\n    font-size:14px;\r\n    color: #777;\r\n}\r\n.like_icon {\r\n    float: right;\r\n    margin-top: 20px;\r\n    color: red;\r\n    font-weight: normal;\r\n    margin-right: 20px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n.like_icon p{\r\n    color: #555;\r\n    font-weight:600;\r\n}\r\n.post_comment{\r\n    margin-top: 75px;\r\n    margin-left: 105px;\r\n}\r\n.post_comment p {\r\n    font-size:17px;\r\n    color: #000;\r\n}\r\n.commentImage{\r\n    margin-left:15px;\r\n    margin-right:40px;\r\n    margin-top:10px;\r\n}\r\n\r\n.write_comment{\r\n    height: 70px;\r\n    background: white;\r\n    padding-left:15px;\r\n    padding-right:15px;\r\n    border-radius: 4px;\r\n    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    transition: all 0.4s ease 0s;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.write_comment_item{\r\n\r\n}\r\n.write_comment_item:nth-child(2){\r\n    -ms-flex-preferred-size:70%;\r\n        flex-basis:70%;\r\n}\r\n.write_comment_item .form-control{\r\n    height: 42px;\r\n    border-radius: 0px;\r\n    margin-top:16px;\r\n}\r\n.commentPost{\r\n    border-radius: 0px;\r\n    margin-top: 16px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n/* end of comment css */\r\n\r\n\r\n\r\n\r\n/*\r\n\r\n  login page\r\n*/\r\n\r\n.login_area {\r\n\r\n    margin-top: 60px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.login_body {\r\n\r\n    float: none;\r\n    margin: auto;\r\n}\r\n\r\n.login_header {\r\n\r\n}\r\n\r\n.login_header button {\r\n    border-radius: 0px;\r\n}\r\n\r\n.form_area {\r\n    background: #fff;\r\n    padding: 20px 50px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 1px 1px 5px #ddd;\r\n}\r\n\r\n.form_area h3 {\r\n    margin-left: -15px;\r\n    padding-bottom: 30px;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    color: #292929;\r\n}\r\n\r\n.form_area input {\r\n    padding: 20px;\r\n}\r\n\r\n.form_area button {\r\n    padding: 10px 25px;\r\n    font-weight: 600;\r\n    border-radius: 0px;\r\n}\r\n\r\n.submit_addon {\r\n    background: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    padding-top: 10px;\r\n}\r\n\r\ninput[type=\"file\"]::-webkit-file-upload-button {\r\n    -webkit-appearance: push-button;\r\n    white-space: nowrap;\r\n    font-size: inherit;\r\n    -webkit-user-modify: read-only;\r\n    margin: 0px;\r\n    padding: 10px 25px;\r\n    color: #fff;\r\n    background: #337ab7;\r\n    border: none;\r\n    font-weight: 600;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row like_div\">\n            <div class=\"col-sm-7\">\n                <div class=\"left_part thumbnail\">\n                    <div class=\"left_part_header\">\n                        <img src=\"assets/img/{{image}}\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"left_part_body\">\n                        <h1>{{title}}</h1>\n                        <div class=\"hr_tag_color\">\n\n                        </div>\n                        <div class=\"body_tab\">\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"active story\"><a data-toggle=\"tab\" href=\"#story\">Story</a></li>\n                                <li class=\"update\"><a data-toggle=\"tab\" href=\"#update\">Update</a></li>\n                            </ul>\n\n                            <div class=\"tab-content\">\n                                <div id=\"story\" class=\"tab-pane fade in active\">\n                                    {{description}}\n                                </div>\n                                <div id=\"update\" class=\"tab-pane fade\">\n                                    <h3>Last Update: {{updateLastTimeMsg}}</h3>\n\n                                    <ul class=\"list-group list-unstyled\">\n                                        <li *ngFor=\"let updateItem of updatePost; let i = index;\">\n                                            <h3 class=\"updateNo\">Update #{{i+1}}</h3>\n                                            <p class=\"updateContent\">{{updateItem.description}}</p>\n                                        </li>\n                                    </ul>\n                                    <br>\n                                    <div class=\"alert viewMore\">\n                                        <a class=\"h4\" (click)=\"moreUpdate()\">Load More <i class=\"fa fa-send\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n                <!--\n                 Section: comment\n                -->\n                <div class=\"comment\">\n\n                    <div class=\"top_see_more\">\n                        <a class=\"h4\" (click)=\"leaveComment('writeComment')\">Leave a comment <i class=\"fa fa-comment\"></i></a>\n                    </div>\n\n                    <div id=\"writeComment\" *ngIf=\"loginUserID != null\">\n\n                    <form [formGroup]=\"form\" (ngSubmit)=\"postComment(form.value)\">\n\n                        <div class=\"write_comment\">\n                            <div class=\"write_comment_item\">\n                                <div class=\"\">\n                                    <img class=\"rf commentImage\" src=\"../../assets/img/{{loginUserImage}}\"\n                                         *ngIf=\"loginUserImage != ''; else uImageBlock;\">\n\n                                    <ng-template #uImageBlock>\n                                        <div class=\"thumbnail rf commentImage\">\n                                            <span>{{loginUsername | makeUserImage}}</span>\n                                        </div>\n                                    </ng-template>\n                                </div>\n                            </div>\n\n                            <div class=\"write_comment_item\">\n                                <input formControlName=\"text\" placeholder=\"Write Something\" class=\"form-control\"\n                                       type=\"text\">\n                            </div>\n\n                            <div class=\"write_comment_item\">\n                                <input type=\"submit\" value=\"Post\" class=\"btn btn-primary commentPost\">\n                            </div>\n\n                        </div>\n                    </form>\n                    </div>\n                    <br><br>\n\n                    <div class=\"comment_repeat\" *ngFor=\"let commentItem of commentPost\">\n                        <div class=\"image_part\">\n                            <img class=\"rf commentImage\" src=\"../../assets/img/img3.jpg\"\n                                 *ngIf=\"commentItem.userImage != ''; else commentImage;\">\n\n                            <ng-template #commentImage>\n                                <div class=\"thumbnail rf commentImage\">\n                                    <span>{{commentItem.fullName | makeUserImage}}</span>\n                                </div>\n                            </ng-template>\n                        </div>\n\n                        <div class=\"comment_part\">\n                            <div class=\"user_name\">\n                                <h3>{{commentItem.fullName}}</h3>\n                                <p>{{commentItem.created_at | jsTime}}</p>\n                            </div>\n                            <div class=\"like_icon\" (click)=\"addLoveToComment(commentItem.id,loveReact)\">\n                                <i class=\"fa fa-heart\"></i>\n                                <p #loveReact>{{commentItem.love}}</p>\n                            </div>\n                            <br>\n                            <div class=\"post_comment\">\n                                <p>{{commentItem.description}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end of comment -->\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"right_part_header thumbnail\">\n                    <h4><strong #total_amount_ref >${{total_amount}}</strong><span> of ${{target_amount}} goal</span></h4>\n                    <div id=\"myProgress\">\n                        <div id=\"myBar\"></div>\n                    </div>\n                    <p>Raised by {{total_people}} people</p>\n                    <button data-toggle=\"modal\" *ngIf=\"loginUserID != null; else loginBlock\" data-target=\"#donateModal\" class=\"btn donate_btn\">Donate Now</button>\n\n                    <ng-template #loginBlock>\n                        <button data-toggle=\"modal\" data-target=\"#loginModal\" class=\"btn donate_btn\">Donate Now</button>\n\n                    </ng-template>\n                </div>\n                <div class=\"right_part_body\">\n                    <p class=\"date_right\">Created {{created_at | jsTime }}</p>\n                    <div class=\"contact_whole_part\">\n                        <div class=\"thumbnail rf\">\n                            <span>{{fullName | makeUserImage}}</span>\n                        </div>\n                        <div class=\"right_part_body_contact\">\n                            <span class=\"right_part_body_contact_name\">{{fullName}}<a href=\"#\"><i\n                                    class=\"fa fa-envelope\"></i></a></span><br>\n                            <span class=\"right_part_body_contact_medical\"><a href=\"#\"><i class=\"fa fa-tag\"></i></a>{{tag}}</span><br>\n                            <span class=\"right_part_body_contact_map\"><a href=\"#\"><i class=\"fa fa-map-marker\"></i></a>{{PostAddress}} </span>\n\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"top_supports\">\n                    <p>Top Supports</p>\n                </div>\n                <div class=\"first_donor\">\n                    <p>First Donor</p>\n                    <div class=\"contact_whole_part\">\n                        <div *ngIf=\"topPayUserImageShow; else elseBlock\">\n                            <img class=\"payImage img-responsive\" src=\"../../assets/img/{{topPayUserImage}}\">\n                        </div>\n                        <ng-template #elseBlock>\n                            <div class=\"thumbnail rf\">\n                                <span>{{topPayUser | makeUserImage}}</span>\n                            </div>\n                        </ng-template>\n                        <div class=\"right_part_body_contact\">\n                            <span class=\"right_part_body_contact_name\">{{topPayUser}}</span><br>\n                            <span class=\"right_part_body_contact_medical\">${{topPayAmount}} </span><br>\n\n                        </div>\n                    </div>\n                </div>\n                <!--<div class=\"first_donor\">\n                    <p>Most Raised From Sharing</p>\n                    <div class=\"contact_whole_part\">\n                        <img class=\"rf\" src=\"assets/img/img2.jpg\">\n                        <div class=\"first_donor_content\">\n                            <span class=\"right_part_body_contact_name\">Beth Owen</span><br>\n                            <span class=\"right_part_body_contact_medical\">£145 from sharing</span><br>\n                        </div>\n                    </div>\n                    <a href=\"#\"><i class=\"fa fa-plus\"></i> <span class=\"see_more\">See More</span></a>\n                </div>-->\n                <div class=\"top_supports\">\n                    <a href=\"#\">Recent Donations <span> <i class=\"fa fa-caret-down\"></i></span></a>\n                </div>\n                <br>\n\n                <div class=\"first_donor\">\n                    <p>Recent Donor</p>\n                    <div class=\"contact_whole_part\" *ngFor=\"let payItem of paymentPost\">\n\n                        <div class=\"thumbnail rf\">\n                            <span>{{payItem.fullname | makeUserImage}}</span>\n                        </div>\n\n\n                        <div class=\"right_part_body_contact\">\n                            <span class=\"right_part_body_contact_name highlight\">${{payItem.amount}}</span><br>\n                            <span class=\"right_part_body_contact_name\">{{payItem.fullname}}</span><br>\n                            <span class=\"payment_time\">{{payItem.created_at | jsTime}} </span><br>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <br>\n                <div class=\"top_see_more\">\n                    <a (click)=\"seeMorePayment()\"><span><i class=\"fa fa-plus\"></i> See More</span></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"donateModal\"  tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\">Choose Amount</h4>\n            </div>\n            <form [formGroup]=\"donateForm\" (ngSubmit)=\"donateNow(donateForm.value, total_amount_ref)\">\n                <div class=\"modal-body\">\n\n                    <input placeholder=\"Amount\" type=\"number\" formControlName=\"donateAmount\" class=\"form-control\">\n\n                    <br>\n                    <p *ngIf=\"donateForm.get('donateAmount').value !=''\" class=\"alert alert-success\">Thank you for\n                        donating &nbsp; ${{donateForm.get(\"donateAmount\").value}}</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Done!</button>\n                </div>\n            </form>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n<!--\n login modal\n-->\n\n\n<div class=\"modal fade\" id=\"loginModal\"  tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\">Please Login before Donate</h4>\n            </div>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n                <div class=\"modal-body\">\n                    <div class=\"form_area login\" id=\"tabs-1\">\n                        <h3>Login</h3>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"username\"\n                                           placeholder=\"Email\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>\n                                    <input type=\"password\" class=\"form-control\" formControlName=\"password\"\n                                           placeholder=\"Password\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"checkRemember\" formControlName=\"remember\">Remember me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"input-group \">\n                                    <button class=\"btn btn-md btn-primary\" type=\"submit\" name=\"emp\">Login\n                                    </button>\n                                    <div class=\"input-group-addon submit_addon\"><p><a href=\"#\" id=\"forgotPass1\">Forgot\n                                        password?</a></p></div>\n                                </div>\n                            </div>\n\n                        <div class=\"login_alert\" *ngIf=\"err\">\n                            {{err}}\n                        </div>\n\n                    </div>\n\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </form>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_details_service__ = __webpack_require__("../../../../../src/app/post-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailsComponent = (function () {
    function PostDetailsComponent(route, postDetails, fb, userService) {
        this.route = route;
        this.postDetails = postDetails;
        this.fb = fb;
        this.userService = userService;
        this.updateLimit = 3;
        this.updateOffset = 0;
        this.paymentLimit = 3;
        this.paymentOffset = 0;
        this.total_people = 0;
        window.scrollTo(0, 0);
        if (this.postDetails.postId != null) {
            this.set(this.postDetails.postId);
        }
        this.loginUserImage = sessionStorage.getItem("uImage");
        this.loginUsername = sessionStorage.getItem("fullName");
        this.loginUserID = sessionStorage.getItem("user_id");
        this.form = fb.group({
            'text': ''
        });
        this.donateForm = fb.group({
            'donateAmount': ''
        });
        this.loginForm = fb.group({
            'username': '',
            'password': '',
            'remember': '',
        });
        this.router = route;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
    };
    PostDetailsComponent.prototype.ngOnDestroy = function () {
        /* this.timer.unsubscribe();*/
    };
    PostDetailsComponent.prototype.leaveComment = function () {
        this.router.navigate(['/login']);
    };
    PostDetailsComponent.prototype.postComment = function (comment) {
        this.text = comment.text;
        //console.log(this.text);
        var now = new Date();
        var cmtCreated = now.toISOString();
        this.postDetails.addComment(this.id, this.loginUserID, this.text, this.loginUserImage, this.loginUsername, cmtCreated).subscribe();
    };
    PostDetailsComponent.prototype.set = function (id) {
        this.id = id;
        this.getPost();
        // this.getPayment();
        //this.getUpdate();
    };
    PostDetailsComponent.prototype.moreUpdate = function () {
        console.log("update offset");
        this.updateOffset += 3;
        this.getUpdate(this.id, this.updateLimit, this.updateOffset);
    };
    PostDetailsComponent.prototype.seeMorePayment = function () {
        console.log("see more clicked");
        this.getPayment(this.id, this.paymentLimit, this.paymentOffset);
    };
    PostDetailsComponent.prototype.getPost = function () {
        var _this = this;
        this.postDetails.fetchData(this.id).subscribe(function (singlePost) {
            _this.singlePost = singlePost;
            //console.log(this.singlePost[0].image);
            _this.image = _this.singlePost[0].image;
            _this.title = _this.singlePost[0].title;
            _this.description = _this.singlePost[0].description;
            _this.total_amount = _this.singlePost[0].total_amount;
            _this.target_amount = _this.singlePost[0].target_amount;
            _this.user_id = _this.singlePost[0].user_id;
            _this.created_at = _this.singlePost[0].created_at;
            _this.tag = _this.singlePost[0].tag;
            _this.PostAddress = _this.singlePost[0].address;
            _this.getUser(_this.user_id);
            _this.getUpdate(_this.id, _this.updateLimit, _this.updateOffset);
            _this.getComment(_this.id);
            _this.getPayment(_this.id, _this.paymentLimit, _this.paymentOffset);
            _this.timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].timer(5000, 30000);
            _this.timer.subscribe(function (t) {
                _this.getComment(_this.id);
            });
            console.log("ss" + _this.created_at + " " + _this.topPayUserImage);
        });
    };
    PostDetailsComponent.prototype.getUpdate = function (id, limit, offset) {
        var _this = this;
        this.postDetails.fetchUpdate(id, limit, offset).subscribe(function (updatePost) {
            if (_this.updatePost != null) {
                _this.updatePost = _this.updatePost.concat(updatePost);
            }
            else {
                _this.updatePost = updatePost;
            }
            //console.log(this.updatePost);
            _this.updateCount = _this.updatePost.length;
            _this.updateLastTime = _this.updatePost[_this.updateCount - 1].created_at;
            _this.updateLastTimeMsg = _this.dateCalc(_this.updateLastTime);
        });
    };
    PostDetailsComponent.prototype.getComment = function (id) {
        var _this = this;
        this.postDetails.fetchComment(id).subscribe(function (commentPost) {
            if (_this.commentPost != null && _this.commentPost.length < _this.commentPostLength) {
                _this.commentPost = _this.commentPost.concat(commentPost);
            }
            else {
                _this.commentPost = commentPost;
                _this.commentPostLength = _this.commentPost.length;
                //console.log(this.commentPost);
            }
        });
    };
    PostDetailsComponent.prototype.addLoveToComment = function (id, love) {
        var x = parseInt(love.innerHTML);
        x = x + 1;
        love.innerHTML = x;
        this.postDetails.addLoveToComment(id).subscribe();
    };
    PostDetailsComponent.prototype.getPayment = function (id, limit, offset) {
        var _this = this;
        this.postDetails.fetchPayment(id, limit, offset).subscribe(function (paymentPost) {
            if (_this.paymentPost != null && _this.paymentPost.length > _this.total_people) {
                _this.paymentPost = _this.paymentPost.concat(paymentPost);
                _this.total_people = _this.paymentPost.length;
            }
            else {
                _this.paymentPost = paymentPost;
                _this.topPayUser = _this.paymentPost[0].fullname;
                _this.topPayUserImage = _this.paymentPost[0].userImage;
                _this.topPayTime = _this.paymentPost[0].created_at;
                _this.topPayAmount = _this.paymentPost[0].amount;
                _this.countPayment = _this.paymentPost[0].total;
                _this.total_people = _this.paymentPost.length;
            }
        });
    };
    PostDetailsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.postDetails.fetchUser(id).subscribe(function (userList) {
            _this.userList = userList;
            //console.log(this.userList);
            _this.username = _this.userList[0].username;
            _this.fullName = _this.userList[0].fullName;
            _this.uImage = _this.userList[0].uImage;
            _this.uActive = _this.userList[0].uActive;
            _this.uRole = _this.userList[0].uRole;
            _this.uEmail = _this.userList[0].uEmail;
            var nameArray = _this.fullName.split(/(\s+)/);
            if (nameArray[2] != null) {
                _this.userlogo = nameArray[0][0] + "" + nameArray[2][0];
            }
            else {
                _this.userlogo = nameArray[0][0];
            }
        });
    };
    PostDetailsComponent.prototype.dateCalc = function (comment_time) {
        // this.comment_time = "2017-09-14T03:24:00";
        this.comment_time = comment_time;
        this.now = new Date();
        this.cTime = new Date(this.comment_time);
        this.diff = this.now - this.cTime;
        this.diffDays = Math.round(this.diff / 86400000); // days
        this.diffHrs = Math.round((this.diff % 86400000) / 3600000); // hours
        this.diffMins = Math.round(((this.diff % 86400000) % 3600000) / 60000); // minutes
        var str;
        if (this.diffDays > 30) {
            //console.log(this.diffDays +" days ago");
            var month = this.diffDays / 31;
            str = month + " months ago";
        }
        else if (this.diffDays > 0 && this.diffDays < 31) {
            //console.log(this.diffDays +" days ago");
            str = this.diffDays + " days ago";
        }
        else if (this.diffHrs >= 1) {
            //console.log(this.diffHrs + " Hours ago");
            str = this.diffHrs + " hours ago";
        }
        else if (this.diffMins == 0) {
            //console.log("just now");
            str = "just now";
        }
        else if (this.diffMins < 60 && this.diffMins >= 1) {
            //console.log(this.diffMins + " minutes ago");
            str = this.diffMins + " minutes ago";
        }
        return str;
    };
    PostDetailsComponent.prototype.donateNow = function (x, body) {
        this.donateAmount = x.donateAmount;
        var now = new Date();
        var cmtCreated = now.toISOString();
        var result = parseInt(this.total_amount) + parseInt(this.donateAmount);
        body.innerHTML = result.toString();
        this.postDetails.addDonate(this.id, this.loginUserID, this.loginUsername, this.loginUserImage, this.donateAmount, cmtCreated).subscribe();
        jQuery("#donateModal").modal("hide");
    };
    /*
    * login area
    * */
    PostDetailsComponent.prototype.login = function (x) {
        this.checkUser(x.username, x.password);
        jQuery("#loginModal").modal("hide");
    };
    PostDetailsComponent.prototype.checkUser = function (username, password) {
        var _this = this;
        this.userService.fetchUser(username, password).subscribe(function (loginUserList) {
            _this.loginUserList = loginUserList;
            console.log("username" + _this.loginUserList[0].success);
            if (_this.loginUserList[0].success == "ok" && _this.loginUserList[0].active == "1") {
                sessionStorage.setItem("login", "1");
                sessionStorage.setItem("username", _this.loginUserList[0].username);
                sessionStorage.setItem("user_id", _this.loginUserList[0].id);
                sessionStorage.setItem("fullName", _this.loginUserList[0].fullName);
                sessionStorage.setItem("uImage", _this.loginUserList[0].uImage);
                sessionStorage.setItem("role", _this.loginUserList[0].role);
                sessionStorage.setItem("email", _this.loginUserList[0].email);
                _this.loginUserImage = sessionStorage.getItem("uImage");
                _this.loginUsername = sessionStorage.getItem("fullName");
                _this.loginUserID = sessionStorage.getItem("user_id");
                alert("Welcome to crowdFunding.");
            }
            else {
                _this.err = "Sorry something went wrong. Please try again.";
            }
        });
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-details',
        template: __webpack_require__("../../../../../src/app/post-details/post-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-details/post-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__post_details_service__["a" /* PostDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_details_service__["a" /* PostDetailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _d || Object])
], PostDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListService = (function () {
    function PostListService(http) {
        this.http = http;
    }
    PostListService.prototype.fetchData = function (limit, offset) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'limit=' + limit + '&&offset=' + offset;
        return this.http.post("https://meshudebnath.com/project/angular/api/getPostByLimit.php", body, options).map(function (response) {
            return response.json();
        });
    };
    PostListService.prototype.get = function () {
        return this.postItems;
    };
    PostListService.prototype.add = function (postItem) {
        this.postItems.push(postItem);
    };
    PostListService.prototype.remove = function (postItem) {
        var index = this.postItems.indexOf(postItem);
        if (index >= 0)
            this.postItems.slice(index, 1);
    };
    return PostListService;
}());
PostListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostListService);

var _a;
//# sourceMappingURL=post-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categoryItem{\r\n    cursor: pointer;\r\n}\r\n.categoryItem:hover a{\r\n    color: #d58512;\r\n}\r\n.categoryItem a{\r\n    text-decoration: none;\r\n}\r\n.viewMore{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<!-- ------------*---------------\r\n   Section Name: Category\r\n   Created by: Meshu Debnath\r\n   -------------*--------------\r\n-->\r\n<div class=\"container-fluid categoryWrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"category_carousel owl-carousel\">\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_medical\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('medical')\">Medical</a></h4>\r\n        </div>\r\n\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_other\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('other')\">Other</a></h4>\r\n        </div>\r\n\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_emerg\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('emergencies')\">Emergencies</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_edu\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('education')\">Education</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_memo\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('memories')\">Memories</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_sports\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('sports')\">Sports</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_animals\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('animals')\">Animals</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_wishes\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('wishes')\">Wishes</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_events\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('events')\">Events</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_business\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('business')\">Business</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_creative\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('creative')\">Creative</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_charity\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('charity')\">Charity</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_travel\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('travel')\">Travel</a></h4>\r\n        </div>\r\n        <div class=\"categoryItem\">\r\n          <div class=\"categoryCircle\">\r\n            <div class=\"categoryImg categoryCircle_community\"></div>\r\n          </div>\r\n          <h4><a (click)=\"search('community')\">Community</a></h4>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ------------*---------------\r\n   Section Name: All post Area\r\n\r\n   Created by: Meshu Debnath\r\n   -------------*--------------\r\n-->\r\n\r\n<div class=\"container-fluid contentWrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"contentHeading alert\">\r\n        <h4>Recomended for you</h4>\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of postItems\">\r\n        <div class=\"col-sm-4\" *ngIf=\"item.active == '1'\">\r\n          <div class=\"signlePost\">\r\n\r\n            <div class=\"coverImg\">\r\n              <a class=\"btn btn-link tagLine\" *ngIf=\"item.total_amount >= item.target_amount\"><i class=\"fa fa-location-arrow\"></i> Trending</a>\r\n              <img src=\"assets/img/{{item.image}}\" class=\"img-responsive\" alt=\"post image\">\r\n              <h4>{{item.title}}</h4>\r\n            </div>\r\n\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" style=\"width: 60%;\"></div>\r\n            </div>\r\n\r\n            <h4 class=\"amountDetails\">${{item.total_amount}} raised of ${{item.target_amount}}</h4>\r\n\r\n            <p class=\"postText\">\r\n              {{item.description | sliceArray}}\r\n            </p>\r\n\r\n            <a routerLink=\"/details\" target=\"_self\" class=\"read_more\" (click)=\"passingDetails(item.id)\">+ Read More</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <!-- total 6 post above -->\r\n\r\n      <!-- ------------*---------------\r\n         Pagination ::\r\n         -------------*--------------\r\n      -->\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"alert viewMore\">\r\n        <a class=\"h4\" (click)=\"onClickAdd()\">View More Campaigns</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_list_service__ = __webpack_require__("../../../../../src/app/post-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_details_post_details_component__ = __webpack_require__("../../../../../src/app/post-details/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_details_service__ = __webpack_require__("../../../../../src/app/post-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(postList, postDetailsService) {
        this.postList = postList;
        this.postDetailsService = postDetailsService;
        this.postLimit = 6;
        this.postOffset = 0;
        jQuery(".category_carousel").owlCarousel({
            rtl: true,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 8
                }
            }
        });
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postList.fetchData(this.postLimit, this.postOffset).subscribe(function (postItems) {
            _this.postItems = postItems;
        });
    };
    PostComponent.prototype.onClickAdd = function () {
        var _this = this;
        // view more campaign button
        this.postLimit += 6;
        this.postList.fetchData(this.postLimit, this.postOffset).subscribe(function (postItems) {
            _this.postItems = postItems;
        });
    };
    PostComponent.prototype.passingDetails = function (id) {
        this.postDetailsService.postId = id;
        this.postId = id;
        //this.postDetails.set(id);
    };
    PostComponent.prototype.search = function (x) {
        var _this = this;
        this.postDetailsService.getPostByCat(x, this.postLimit, this.postOffset).subscribe(function (postItems) {
            _this.postItems = postItems;
        });
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__post_details_post_details_component__["a" /* PostDetailsComponent */]],
        styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post_list_service__["a" /* PostListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_list_service__["a" /* PostListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__post_details_service__["a" /* PostDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_details_service__["a" /* PostDetailsService */]) === "function" && _b || Object])
], PostComponent);

var _a, _b;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/slice-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliceArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliceArrayPipe = (function () {
    function SliceArrayPipe() {
    }
    SliceArrayPipe.prototype.transform = function (value, exponent) {
        this.str = value.slice(0, 180);
        this.str += "..";
        return this.str;
    };
    return SliceArrayPipe;
}());
SliceArrayPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sliceArray'
    })
], SliceArrayPipe);

//# sourceMappingURL=slice-array.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.fetchUser = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'username=' + username + '&&password=' + password;
        return this.http.post("https://meshudebnath.com/project/angular/api/loginCheck.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.signUp = function (username, password, fullName, email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var now = new Date();
        var cmtCreated = now.toISOString();
        var body = 'username=' + username + '&&password=' + password + '&&fullName=' + fullName + '&&email=' + email + '&&created_at=' + cmtCreated + '&&role=1' + '&&uImage=im3.jpg';
        return this.http.post("https://meshudebnath.com/project/angular/api/addUser.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.addPost = function (title, description, target, tag, location, websites, image, time, user_id) {
        /*let _formData = new FormData();
        _formData.append("image", image);*/
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'title=' + title + '&&description=' + description + '&&target=' + target + '&&tag=' + tag + '&&address=' + location + '&&websites=' + websites + '&&image=' + image + '&&created_at=' + time + '&&user_id=' + user_id;
        return this.http.post("https://meshudebnath.com/project/angular/api/createPost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getBanPost = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = '';
        return this.http.post("https://meshudebnath.com/project/angular/api/singleBanPost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getReportPost = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = '';
        return this.http.post("https://meshudebnath.com/project/angular/api/singleReportPost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.activate = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/activatePost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.banned = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/bannedPost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getPostForUser = function (id) {
        console.log(id + "dfjskdjf");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/getPostForUser.php", body, options).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deletePost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'id=' + id;
        return this.http.post("https://meshudebnath.com/project/angular/api/deletePost.php", body, options).map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/userpage/userpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settingsWrapper{\r\n    overflow-x: hidden;\r\n    min-height:400px;\r\n}\r\n\r\n.settings_nav{\r\n    margin-top: 20px;\r\n\r\n}\r\n.settings_nav > ul{\r\n\r\n}\r\n.settings_nav > ul li a{\r\n    height: 40px;\r\n    font-size: 16px;\r\n    color: #80809E;\r\n    font-weight: 600;\r\n}\r\n.settings_nav > ul li a:hover{\r\n    border-bottom: 4px solid orange;\r\n    transition: all 0.0s ease 0s;\r\n}\r\n.settings_tab{\r\n    margin-top :55px;\r\n    margin-bottom :55px;\r\n}\r\n.left_part{\r\n\r\n}\r\n.left_part b{\r\n}\r\n.left_part input{\r\n    height: 40px;\r\n    width: 350px;\r\n    border-radius: 6px;\r\n    border: 1px solid #e9ead7;\r\n    padding: 0px 12px;\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n}\r\n.file{\r\n    height: 40px;\r\n    width: 350px;\r\n    border-radius: 6px;\r\n    border: 1px solid #e9ead7;\r\n\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n\r\n}\r\n.change{\r\n    color: white;\r\n    background: purple;\r\n    transition: all 0.4s ease 0s;\r\n    width: 150px;\r\n    height: 40px;\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    letter-spacing: -.5px;\r\n}\r\n.change:hover{\r\n    color: white;\r\n    background: orange;\r\n}\r\n.add{\r\n    margin-left: 10px;\r\n    color: white;\r\n    background: purple;\r\n    transition: all 0.4s ease 0s;\r\n    width: 70px;\r\n    height: 38px;\r\n    margin-top: -5px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    letter-spacing: -.5px;\r\n}\r\n.add:hover{\r\n    color: white;\r\n    background: orange;\r\n}\r\n.save {\r\n    width: 250px;\r\n    height: 45px;\r\n    background: #0A0A3F none repeat scroll 0% 0%;\r\n    color: #FFF;\r\n    transition: all 0.4s ease 0s;\r\n    margin-left: 15px;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    font-weight: bold;\r\n}\r\n.save:hover{\r\n    color: white;\r\n    background: orange;\r\n}\r\n\r\n.messages{}\r\n.messages h3{\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n}\r\n.search_select{\r\n    width: 100%;\r\n    height: 60px;\r\n}\r\n.search_select input{\r\n    float: left;\r\n    height: 45px;\r\n    width: 280px;\r\n    border-radius: 4px;\r\n    border: 1px solid #e9ead7;\r\n    box-shadow: 0px 0px 5px #F8F9FD;\r\n    transition: all 0.2s ease-in-out 0.2s;\r\n    padding: 10px;\r\n}\r\n.search_select select{\r\n    float: right;\r\n    height: 45px;\r\n    width: 150px;\r\n    border-radius: 4px;\r\n    border: 1px solid #e9ead7;\r\n    box-shadow: 0px 0px 5px #F8F9FD;\r\n    transition: all 0.2s ease-in-out 0.2s;\r\n    padding: 10px;\r\n}\r\n.search_select select:hover{\r\n    border: 1px solid lightgrey;\r\n    box-shadow: 1px 3px 8px #c2c1ad;\r\n}\r\n.search_select select option{\r\n    height: 45px;\r\n    width: 130px;\r\n    padding:10px;\r\n    transition: all 0.2s ease-in-out 0.2s;\r\n}\r\n.search_select select option:last-child{\r\n    border-bottom: 0px solid black;\r\n}\r\n.gif{\r\n    width: 100%;\r\n    height: 500px;\r\n    background: white;\r\n    text-align: center;\r\n    box-shadow: 1px 3px 8px #c2c1ad;\r\n}\r\n.gif p{\r\n    position: relative;\r\n    top: 100px;\r\n}\r\n.gif img{\r\n    padding-top: 100px;\r\n    height: 300px;\r\n    width: 150px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*\r\nsettings\r\n*/\r\n\r\n\r\n.profile{\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n.profile img{\r\n    height: 160px;\r\n    width: 160px;\r\n    border-radius: 50%;\r\n}\r\n.profile h3{\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n}\r\n\r\n\r\n.create_menu_nav {\r\n    padding: 0;\r\n    margin-top:20px;\r\n}\r\n.create_menu_nav > li{\r\n    list-style: none;\r\n    float: left;\r\n    background: #fff;\r\n    margin-right: 2px;\r\n    box-shadow: 1px 1px 12px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n.create_menu_nav > li > a{\r\n    font-weight:600;\r\n    border: 0px;\r\n    color: #3c763d;\r\n    font-size: 14px;\r\n    transition: all .5s;\r\n    text-decoration: none;\r\n}\r\n.create_menu_nav > li:hover{\r\n    background: none;\r\n}\r\n.create_menu_nav > li a:hover{\r\n    color: #d58512;\r\n}\r\n\r\n.basic h4 {\r\n    font-weight:800;\r\n    color: #000;\r\n\r\n}\r\n.basic p{\r\n    font-size:16px;\r\n    color: #555;\r\n}\r\n.create_menu_nav{\r\n    border: 0px;\r\n}\r\n.create_menu_nav > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus{\r\n    background-color: #fff;\r\n    border-radius: 0px;\r\n    border: 0px;\r\n}\r\n\r\n.create_menu_tab{\r\n    margin-top:-20px;\r\n}\r\n\r\n.cateogry_select option {\r\n    text-transform: capitalize;\r\n    font-weight:600;\r\n    color: #222;\r\n    padding:5px 5px;\r\n}\r\n\r\n#report ul li {\r\n    font-weight:800;\r\n    font-size:18px;\r\n}\r\n\r\n#report h3, #banPost h3{\r\n    font-weight:800;\r\n    font-size: 18px;\r\n    margin:15px 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid settingsWrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div  *ngIf=\"loginRole == 1;else admin;\">\n\n            <div class=\"col-sm-offset-1 col-sm-10 settings_nav\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a (click)=\"$event.preventDefault(); userHelper('menu6');\" href=\"#menu6\">My Projects</a></li>\n                    <li><a (click)=\"$event.preventDefault(); userHelper('menu7');\" href=\"#menu7\">Start New Project</a></li>\n                    <li><a (click)=\"$event.preventDefault(); userHelper('menu4');\" href=\"#menu4\">Messages</a></li>\n                    <li><a (click)=\"$event.preventDefault(); userHelper('menu5');\" href=\"#menu5\">Profile</a></li>\n                    <li><a (click)=\"$event.preventDefault(); userHelper('menu1');\" href=\"#menu1\">Edit Profile</a></li>\n                </ul>\n                <br>\n\n                <!-- create new project -->\n\n                <div class=\"tab-content\">\n                    <div id=\"menu7\" class=\"tab-pane fade\">\n\n                        <ul class=\"nav nav-tabs create_menu_nav\">\n                            <li class=\"active\">\n                                <a (click)=\"$event.preventDefault();userHelper2('basic');\" href=\"#basic\">Basic</a>\n                            </li>\n                            <li class=\"\">\n                                <a (click)=\"$event.preventDefault();userHelper2('payment');\" href=\"#payment\">Payment History</a>\n                            </li>\n                            <li class=\"\">\n                                <a (click)=\"$event.preventDefault();userHelper2('settings');\" href=\"#settings\">Settings</a>\n                            </li>\n\n                        </ul>\n\n                        <br>\n                        <br><br>\n\n                        <div class=\"formWrapper \">\n\n                            <div class=\"create_menu_tab tab-content\">\n\n\n                                <div class=\"tab-pane fade\"  id=\"basic\">\n\n                                    <h3>Lets Get Started</h3>\n                                    <p>Make a great first impression with your project’s title and image, and set\n                                        your funding goal,\n                                        campaign duration, and project category.</p>\n\n\n                                    <br>\n                                    <div *ngIf=\"createMsg != null\">\n                                        <div class = \"alert alert-success alert-dismissable\">\n                                            <button type = \"button\" class = \"close\" data-dismiss = \"alert\" aria-hidden = \"true\">\n                                                &times;\n                                            </button>\n                                            {{ createMsg}}\n                                        </div>\n                                    </div>\n\n                                    <form class=\"form-horizontal\"  [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost(createPostForm.value)\">\n                                        <div class=\"col-sm-6\">\n                                            <b>Title</b><br>\n                                            <input class=\"form-control\" formControlName=\"title\" type=\"text\" placeholder=\"Project Title\"><br><br>\n                                            <b>Description</b><br>\n                                            <textarea rows=\"10\" class=\"form-control\" type=\"text\" formControlName=\"description\"\n                                                      placeholder=\"Description\"></textarea><br><br>\n\n                                            <b>Picture</b><br>\n                                            <input type=\"file\" #fileupload formControlName=\"image\"  (change)=\"fileChange(fileupload.files)\"/>\n                                            <br><br>\n\n                                            <b>Tag</b><br>\n                                            <select type=\"select\" class=\"form-control cateogry_select\" formControlName=\"tag\">\n                                                <option value=\"medical\">Medical</option>\n                                                <option value=\"community\">Community</option>\n                                                <option value=\"travel\">Travel</option>\n                                                <option value=\"charity\">Charity</option>\n                                                <option value=\"education\">Education</option>\n                                                <option value=\"creative\">Creative</option>\n                                                <option value=\"emergencies\">emergencies</option>\n                                                <option value=\"sports\">sports</option>\n                                                <option value=\"business\">business</option>\n                                                <option value=\"event\">event</option>\n                                            </select>\n                                            <br><br>\n\n                                            <button type=\"submit\" class=\"btn save\">Save Changes</button>\n                                        </div>\n                                        <div class=\"col-sm-6\">\n                                            <b>Target Amount</b><br>\n                                            <input formControlName=\"target_amount\" class=\"form-control\" type=\"number\" placeholder=\"$1000\"><br><br>\n\n                                            <b>Location</b><br>\n                                            <input formControlName=\"address\" class=\"form-control\" type=\"text\" placeholder=\"Location\"><br><br>\n\n\n                                            <b>Websites</b><br>\n                                            <input formControlName=\"websites\" class=\"form-control\" type=\"text\" placeholder=\"Websites\">\n                                            <br><br>\n\n                                        </div>\n                                        <br><br>\n\n\n                                    </form>\n                                    <br><br>\n\n\n                                </div>\n\n\n                                <div class=\"tab-pane fade\"  id=\"payment\">\n\n                                </div>\n\n\n                                <div class=\"tab-pane fade\"  id=\"settings\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n\n                    <!--\n                     Edit profile\n                    -->\n                    <div id=\"menu1\" class=\"tab-pane fade\">\n                        <div class=\"col-sm-6 left_part\">\n                            <b>Name</b><br>\n                            <input type=\"text\" placeholder=\"Name\"><br><br>\n                            <b>Email</b><br>\n                            <input type=\"email\" placeholder=\"Email\"><br><br>\n                            <b>Current Password</b><br>\n                            <input type=\"password\" placeholder=\"Password\"><br><br>\n                            <b>Change Password</b><br>\n                            <button class=\"btn change\">Change Password</button>\n                            <br><br>\n                        </div>\n                        <div class=\"col-sm-6 left_part\">\n                            <b>Location</b><br>\n                            <input type=\"text\" placeholder=\"Location\"><br><br>\n                            <b>Biography</b><br>\n                            <input type=\"text\" placeholder=\"Biography\"><br><br>\n                            <b>Websites</b><br>\n                            <input type=\"text\" placeholder=\"Websites\" style=\"width:200px;\">\n                            <button class=\"btn add\">Add</button>\n                            <br><br>\n                            <b>Picture</b><br>\n                            <input type=\"file\" id=\"myFile\" class=\"file\"\n                                   placeholder=\"Choose an image from your Computer\"><br><br>\n                        </div>\n                        <button class=\"btn save\">Save Changes</button>\n                        <br><br>\n                    </div>\n\n\n                    <div id=\"menu3\" class=\"tab-pane fade\">\n                        <h3>Manage payment options </h3>\n                        <p>Any payment methods you save to Kickstarter will be listed here (securely) for your\n                            convenience. To save a card for future pledges, just click \"Add a new card.\" </p>\n                    </div>\n\n\n                    <div id=\"menu4\" class=\"tab-pane fade messages\">\n                        <h3>Messages</h3>\n                        <h5 class=\"alert alert-warning\">Coming soon ..</h5>\n                        <p>N:B: This feature is launching in the next version.</p>\n                    </div>\n\n\n                    <div id=\"menu5\" class=\"tab-pane fade profile\">\n                        <img src=\"../../../assets/img/img3.jpg\">\n                        <h3>Full Name: {{userFullName}}</h3>\n                        <h4>Email: {{userEmail}}</h4>\n                        <h4>Username: {{userName}}</h4>\n\n                    </div>\n\n                    <div id=\"menu6\" class=\"tab-pane fade in active\">\n                        <ul class=\"list-unstyled list-group\">\n                            <li class=\"list-group-item text-warning\" #link *ngFor=\"let item of userPost; let i = index;\">\n                                <h5> <b>#{{i+1}} {{item.title}}</b>\n                                    <a class=\"text-danger\" style=\"margin-left: 10px;float:right;cursor: pointer\" (click)=\"deletePost(item.id,link)\"><i class=\"fa fa-window-close-o\"> Delete!</i></a>\n                                    <a  routerLink=\"/details\" target=\"_self\" class=\"read_more\" (click)=\"passingDetails(item.id)\">+ view details</a>\n\n                                </h5>\n                            </li>\n                        </ul>\n\n                    </div>\n\n                </div>\n\n\n            </div>\n            </div> <!-- user template -->\n\n            <!-- admin template -->\n\n            <ng-template #admin>\n\n\n                <div class=\"col-sm-offset-1 col-sm-10 settings_nav\">\n\n\n                    <!-- create new project -->\n\n                    <div class=\"tab-content\">\n                        <!--\n                         Edit profile\n                        -->\n\n                        <div id=\"report\" >\n                            <h3 *ngIf=\"singlePost != null\">List of all reported Project</h3>\n                            <ul class=\"list-unstyled list-group\">\n                                <li class=\"list-group-item text-warning\" #link *ngFor=\"let item of singlePost; let i = index;\">\n                                   <h5> <b>#{{i+1}} {{item.title}}</b>\n                                       <a class=\"text-danger\" style=\"margin-left: 10px;float:right;cursor: pointer\" (click)=\"banned(item.id,link)\"><i class=\"fa fa-check-circle\">Deactivate Now!</i></a>\n                                       <a  routerLink=\"/details\" target=\"_self\" class=\"read_more\" (click)=\"passingDetails(item.id)\">+ view details</a>\n\n                                   </h5>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <br><br><br>\n                        <div id=\"banPost\" >\n                            <h3 *ngIf=\"banPost != null\">List of all Banned Project</h3>\n                            <ul class=\"list-unstyled list-group\">\n                                <li class=\"list-group-item text-success\" #link *ngFor=\"let item of banPost; let i = index;\">\n                                    <h5> <b>#{{i+1}} {{item.title}} </b>\n                                        <a class=\"text-danger\" style=\"margin-left: 10px;float:right;cursor: pointer\" (click)=\"activated(item.id,link)\"><i class=\"fa fa-check-circle\">Activate Now!</i></a>\n                                        <a  routerLink=\"/details\" target=\"_self\" class=\"read_more\" (click)=\"passingDetails(item.id)\">+ view details</a>\n\n                                    </h5>\n                                </li>\n                            </ul>\n                        </div>\n\n\n\n                    </div>\n\n\n                </div>\n\n\n\n            </ng-template>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/userpage/userpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_details_service__ = __webpack_require__("../../../../../src/app/post-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserpageComponent = (function () {
    function UserpageComponent(postDetailsService, fb, userService, route) {
        this.postDetailsService = postDetailsService;
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.createPostForm = fb.group({
            'title': '',
            'description': '',
            'target_amount': '',
            'tag': '',
            'address': '',
            'websites': '',
            'image': '',
        });
        this.form = fb.group({
            'file1': '',
        });
        this.router = route;
        this.loginUserID = sessionStorage.getItem("user_id");
        this.userName = sessionStorage.getItem("username");
        this.userFullName = sessionStorage.getItem("fullName");
        this.userEmail = sessionStorage.getItem("email");
        this.loginRole = sessionStorage.getItem("role");
        if (this.loginUserID == null) {
            this.router.navigate(['/login']);
        }
        this.getPost();
        if (this.loginRole == '2') {
            this.getReportPost();
            this.getBanPost();
        }
    }
    UserpageComponent.prototype.ngOnInit = function () {
    };
    UserpageComponent.prototype.createPost = function (x) {
        var now = new Date();
        var cmtCreated = now.toISOString();
        this.userService.addPost(x.title, x.description, x.target_amount, x.tag, x.address, x.websites, this.image, cmtCreated, this.loginUserID).subscribe();
        this.createMsg = "Successfully created.";
    };
    UserpageComponent.prototype.fileChange = function (files) {
        console.log(files);
        this.image = files[0];
    };
    UserpageComponent.prototype.getReportPost = function () {
        var _this = this;
        this.userService.getReportPost().subscribe(function (singlePost) {
            _this.singlePost = singlePost;
            //console.log(this.singlePost[0].image);
            console.log(_this.singlePost);
        });
    };
    UserpageComponent.prototype.getBanPost = function () {
        var _this = this;
        this.userService.getBanPost().subscribe(function (banPost) {
            _this.banPost = banPost;
            //console.log(this.singlePost[0].image);
            console.log(_this.banPost);
        });
    };
    UserpageComponent.prototype.getPost = function () {
        var _this = this;
        this.userService.getPostForUser(this.loginUserID).subscribe(function (userPost) {
            _this.userPost = userPost;
            //console.log(this.singlePost[0].image);
            console.log(_this.loginUserID);
            console.log("sfsdf" + _this.userPost);
        });
    };
    UserpageComponent.prototype.passingDetails = function (id) {
        this.postDetailsService.postId = id;
        //this.postDetails.set(id);
    };
    UserpageComponent.prototype.banned = function (x, event) {
        this.userService.banned(x).subscribe();
        event.remove();
    };
    UserpageComponent.prototype.activated = function (x, event) {
        this.userService.activate(x).subscribe();
        event.remove();
    };
    UserpageComponent.prototype.deletePost = function (x, event) {
        this.userService.deletePost(x).subscribe();
        event.remove();
    };
    UserpageComponent.prototype.userHelper = function (x) {
        jQuery("#menu1").removeClass("in active");
        jQuery("#menu5").removeClass("in active");
        jQuery("#menu4").removeClass("in active");
        jQuery("#menu7").removeClass("in active");
        jQuery("#menu6").removeClass("in active");
        jQuery("#basic").removeClass("in active");
        jQuery("#payment").removeClass("in active");
        jQuery("#settings").removeClass("in active");
        jQuery("#" + x).addClass("in active");
    };
    UserpageComponent.prototype.userHelper2 = function (x) {
        jQuery("#basic").removeClass("in active");
        jQuery("#payment").removeClass("in active");
        jQuery("#settings").removeClass("in active");
        jQuery("#" + x).addClass("in active");
    };
    return UserpageComponent;
}());
UserpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-userpage',
        template: __webpack_require__("../../../../../src/app/user/userpage/userpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/userpage/userpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__post_details_service__["a" /* PostDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__post_details_service__["a" /* PostDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], UserpageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=userpage.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map