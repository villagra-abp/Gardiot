webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n<app-desarrollo></app-desarrollo>\n<!--<app-footer></app-footer>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
        this.url = "";
        this.admin = window.location.href.indexOf('admin') >= 0;
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.url = "http://localhost:4200/";
        }
        else if (window.location.toString().indexOf("gardiot") < 0) {
            this.url = "https://gardiot.ovh/app/";
        }
    }
    AppComponent.prototype.mensajeEmergente = function (msg, tipo, link) {
        var backdiv = document.createElement("div");
        backdiv.className = "background";
        var div = document.createElement("div");
        div.className = "alert alert-" + tipo + " msg";
        div.setAttribute("role", "alert");
        if (link == "") {
            div.innerHTML = msg + "<button onclick=\"this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);\" class=\"btn btn-info\">Aceptar</button>";
        }
        else {
            div.innerHTML = msg + "<button onclick='location.href=\"" + (this.url + link) + "\"' class=\"btn btn-info\">Aceptar</button>";
        }
        backdiv.appendChild(div);
        document.querySelector("body").appendChild(backdiv);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_manage_oauthconfirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/oauthconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_adminguard_guard__ = __webpack_require__("../../../../../src/app/components/admin/adminguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_component__ = __webpack_require__("../../../../../src/app/components/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_manage_login_component__ = __webpack_require__("../../../../../src/app/components/manage/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_manage_logout_component__ = __webpack_require__("../../../../../src/app/components/manage/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_manage_register_component__ = __webpack_require__("../../../../../src/app/components/manage/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_component__ = __webpack_require__("../../../../../src/app/components/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_manage_confirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_manage_resend_component__ = __webpack_require__("../../../../../src/app/components/manage/resend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_library_component__ = __webpack_require__("../../../../../src/app/components/user/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_calendar_component__ = __webpack_require__("../../../../../src/app/components/user/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_listusers_component__ = __webpack_require__("../../../../../src/app/components/admin/listusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_edituser_component__ = __webpack_require__("../../../../../src/app/components/admin/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_user_garden_component__ = __webpack_require__("../../../../../src/app/components/user/garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_admin_analytics_component__ = __webpack_require__("../../../../../src/app/components/admin/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_statistics_component__ = __webpack_require__("../../../../../src/app/components/admin/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_email_component__ = __webpack_require__("../../../../../src/app/components/admin/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_admin_userdata_component__ = __webpack_require__("../../../../../src/app/components/admin/userdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_plantdata_component__ = __webpack_require__("../../../../../src/app/components/admin/plantdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_eventdata_component__ = __webpack_require__("../../../../../src/app/components/admin/eventdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_admin_tool_component__ = __webpack_require__("../../../../../src/app/components/admin/tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_admin_invoice_component__ = __webpack_require__("../../../../../src/app/components/admin/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__desarrollo_desarrollo_component__ = __webpack_require__("../../../../../src/app/desarrollo/desarrollo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//services


//Oauth

//Guards














//Admin imports















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_manage_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_manage_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_manage_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_manage_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_manage_resend_component__["a" /* ResendComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_listusers_component__["a" /* AdminListUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_edituser_component__["a" /* AdminEditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_user_component__["a" /* AdminUserComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_user_garden_component__["a" /* GardenComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_admin_analytics_component__["a" /* AnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_admin_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_admin_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_admin_userdata_component__["a" /* UserdataComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_admin_plantdata_component__["a" /* PlantdataComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_admin_eventdata_component__["a" /* EventdataComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_admin_tool_component__["a" /* ToolComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_admin_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_user_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_manage_oauthconfirmation_component__["a" /* OauthConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_36__desarrollo_desarrollo_component__["a" /* DesarrolloComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_garden_service__["a" /* GardenService */],
                __WEBPACK_IMPORTED_MODULE_8__authguard_guard__["a" /* AuthguardGuard */],
                __WEBPACK_IMPORTED_MODULE_9__components_admin_adminguard_guard__["a" /* AdminguardGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_manage_login_component__ = __webpack_require__("../../../../../src/app/components/manage/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_manage_logout_component__ = __webpack_require__("../../../../../src/app/components/manage/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_manage_register_component__ = __webpack_require__("../../../../../src/app/components/manage/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_manage_confirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_manage_resend_component__ = __webpack_require__("../../../../../src/app/components/manage/resend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_library_component__ = __webpack_require__("../../../../../src/app/components/user/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_calendar_component__ = __webpack_require__("../../../../../src/app/components/user/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_manage_oauthconfirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/oauthconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_garden_component__ = __webpack_require__("../../../../../src/app/components/user/garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_admin_routes__ = __webpack_require__("../../../../../src/app/components/admin/admin.routes.ts");










//Oauth


//GardenComponent



var app_routes = [
    { path: 'resend', component: __WEBPACK_IMPORTED_MODULE_7__components_manage_resend_component__["a" /* ResendComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_manage_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_manage_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__components_manage_logout_component__["a" /* LogoutComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_admin_component__["a" /* AdminComponent */], children: __WEBPACK_IMPORTED_MODULE_14__components_admin_admin_routes__["a" /* admin_routes */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_4__components_user_detail_component__["a" /* DetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'garden', component: __WEBPACK_IMPORTED_MODULE_12__components_user_garden_component__["a" /* GardenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'plants', component: __WEBPACK_IMPORTED_MODULE_8__components_user_library_component__["a" /* LibraryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_9__components_user_calendar_component__["a" /* CalendarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'confirmation/:key', component: __WEBPACK_IMPORTED_MODULE_6__components_manage_confirmation_component__["a" /* ConfirmationComponent */] },
    { path: 'oauthconfirmation/:key', component: __WEBPACK_IMPORTED_MODULE_10__components_manage_oauthconfirmation_component__["a" /* OauthConfirmationComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(app_routes);


/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardGuard = (function () {
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (this.user.isUserAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/classes/garden.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Garden; });
var Garden = (function () {
    function Garden(id, title, width, lenght, latitude, longitude, soil, user, countryCode, city) {
        this.id = id;
        this.title = title;
        this.width = width;
        this.lenght = lenght;
        this.latitude = latitude;
        this.longitude = longitude;
        this.soil = soil;
        this.user = user;
        this.countryCode = countryCode;
        this.city = city;
    }
    return Garden;
}());



/***/ }),

/***/ "../../../../../src/app/classes/user.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, name, lastName, password, password2, oldPassword, plan, countryCode, city, birthDate) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.password2 = password2;
        this.oldPassword = oldPassword;
        this.plan = plan;
        this.countryCode = countryCode;
        this.city = city;
        this.birthDate = birthDate;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(_detailService, _route) {
        this._detailService = _detailService;
        this._route = _route;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return admin_routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listusers_component__ = __webpack_require__("../../../../../src/app/components/admin/listusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/components/admin/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edituser_component__ = __webpack_require__("../../../../../src/app/components/admin/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistics_component__ = __webpack_require__("../../../../../src/app/components/admin/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analytics_component__ = __webpack_require__("../../../../../src/app/components/admin/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_component__ = __webpack_require__("../../../../../src/app/components/admin/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdata_component__ = __webpack_require__("../../../../../src/app/components/admin/userdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plantdata_component__ = __webpack_require__("../../../../../src/app/components/admin/plantdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__eventdata_component__ = __webpack_require__("../../../../../src/app/components/admin/eventdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tool_component__ = __webpack_require__("../../../../../src/app/components/admin/tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__invoice_component__ = __webpack_require__("../../../../../src/app/components/admin/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__adminguard_guard__ = __webpack_require__("../../../../../src/app/components/admin/adminguard.guard.ts");
//Admin imports













var admin_routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AdminUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'listusers', component: __WEBPACK_IMPORTED_MODULE_0__listusers_component__["a" /* AdminListUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'edituser/:id', component: __WEBPACK_IMPORTED_MODULE_2__edituser_component__["a" /* AdminEditUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_5__analytics_component__["a" /* AnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_4__statistics_component__["a" /* StatisticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'email', component: __WEBPACK_IMPORTED_MODULE_6__email_component__["a" /* EmailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'userdata', component: __WEBPACK_IMPORTED_MODULE_7__userdata_component__["a" /* UserdataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'plantdata', component: __WEBPACK_IMPORTED_MODULE_8__plantdata_component__["a" /* PlantdataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'eventdata', component: __WEBPACK_IMPORTED_MODULE_9__eventdata_component__["a" /* EventdataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'tool', component: __WEBPACK_IMPORTED_MODULE_10__tool_component__["a" /* ToolComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_11__invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];


/***/ }),

/***/ "../../../../../src/app/components/admin/adminguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminguardGuard = (function () {
    function AdminguardGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AdminguardGuard.prototype.canActivate = function (next, state) {
        if (this.user.isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['/detail']);
            return false;
        }
    };
    AdminguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminguardGuard);
    return AdminguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Analítica</h1>\n  <p>En esta sección tendremos los estudios que nos ayuden a mejorar la aplicación (tiempos en cada sitio, uso de ciertas funcionalidades...)</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analytics',
            template: __webpack_require__("../../../../../src/app/components/admin/analytics.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Panel de administración</h1>\n<button [routerLink] =\"['/admin/listusers']\" class=\"btn btn-outline-primary\"\n        type=\"submit\" name=\"button\">Lista de usuarios</button>\n<button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\n                type=\"submit\" name=\"button\">Crear nuevo usuario</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <h3>Usuario {{user.name}}</h3>\n  <h3>No edita bien. Los cambios que guardemos se guardarán para el usuario que está navegando</h3>\n  <hr>\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"guardarUsuario(forma)\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Nombre</label>\n          <input\n                type=\"text\" name=\"name\"\n                class=\"form-control\" [(ngModel)]=\"user.name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Apellidos</label>\n          <input\n                type=\"text\" name=\"surnames\"\n                class=\"form-control\" [(ngModel)]=\"user.surnames\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n                type=\"password\" name=\"password\"\n                class=\"form-control\" [(ngModel)]=\"user.password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Repite el password</label>\n          <input\n                type=\"password\" name=\"password2\"\n                class=\"form-control\" [(ngModel)]=\"user.password2\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Ciudad</label>\n          <input\n                type=\"text\" name=\"\"\n                class=\"form-control\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label>Fecha de nacimiento</label>\n          <input\n                type=\"date\" name=\"birthDate\"\n                class=\"form-control\" [(ngModel)]=\"user.birthDate\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Foto</label>\n          <input\n                type=\"file\" name=\"\"\n                class=\"form-control\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-outline-primary\">\n            Guardar cambios\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/edituser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEditUserComponent = (function () {
    function AdminEditUserComponent(_editUserService, _appComponent, _router, _route) {
        this._editUserService = _editUserService;
        this._appComponent = _appComponent;
        this._router = _router;
        this._route = _route;
    }
    AdminEditUserComponent.prototype.guardarUsuario = function (forma) {
        var _this = this;
        console.log(forma.value);
        this._editUserService.modifyUserProfile(forma.value, this.oldId)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente(data.Mensaje, "primary", "admin/listusers");
        });
    };
    AdminEditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Coge el ID por parámetro, entonces carga el usuario para mostrarlo
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user_class__["a" /* User */](params['id']);
                console.log(_this.user);
                _this._editUserService.details(_this.user)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.oldId = data[0].id;
                    _this.user.name = data[0].name;
                }, function (error) {
                    _this._route.navigate(['/admin/listusers']);
                });
            }
        });
    };
    AdminEditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-edit-user',
            template: __webpack_require__("../../../../../src/app/components/admin/edituser.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminEditUserComponent);
    return AdminEditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Correo</h1>\n  <p>texto</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("../../../../../src/app/components/admin/email.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/eventdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Eventos</h1>\n  <p>texto</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/eventdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventdataComponent = (function () {
    function EventdataComponent() {
    }
    EventdataComponent.prototype.ngOnInit = function () {
    };
    EventdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eventdata',
            template: __webpack_require__("../../../../../src/app/components/admin/eventdata.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EventdataComponent);
    return EventdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Facturas</h1>\n  <p>texto</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice',
            template: __webpack_require__("../../../../../src/app/components/admin/invoice.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/listusers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n<h1>Panel de administrador</h1>\n<hr>\n<h2>Lista de Usuarios</h2>\n<br>\n<div class=\"col-md-12 text-right\">\n  <button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\n          type=\"submit\" name=\"button\">\n    Nuevo usuario\n  </button>\n  <br><br>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-condensed\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">ID</th>\n            <!-- <th scope=\"col\">Pass</th> -->\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Cumpleaños</th>\n            <th scope=\"col\">Foto</th>\n            <th scope=\"col\">Activo</th>\n            <th scope=\"col\">Plan</th>\n            <th scope=\"col\">Ciudad</th>\n            <th scope=\"col\">Admin</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.id}}</td>\n            <!-- <td>{{user.password}}</td> -->\n            <td>{{user.name}}</td>\n            <td>{{user.birthDate | date}}</td>\n            <td>{{user.photo}}</td>\n            <!-- <td><img src=\"...\" class=\"img-fluid pull-xs-left\" alt=\"...\">{{user.photo}}</td> -->\n            <td>{{user.active}}</td>\n            <td>{{user.plan}}</td>\n            <td>{{user.city}}</td>\n            <td>{{user.admin}}</td>\n\n            <td><button [routerLink]=\"['/admin/edituser', user.id]\" class=\"btn btn-warning\">Editar</button><button (click)=\"borrarUsuario(user.id)\" class=\"btn btn-danger\">Eliminar</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/listusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminListUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminListUsersComponent = (function () {
    function AdminListUsersComponent(_detailService, _route, _appComponent) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.users = [];
    }
    AdminListUsersComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.detailsAll()
            .subscribe(function (data) {
            //console.log(data);
            for (var key$ in data) {
                //console.log(data[key$]);
                _this.users.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
            // this._route.navigate(['/login']);
        });
    };
    AdminListUsersComponent.prototype.borrarUsuario = function (id$) {
        var _this = this;
        this._detailService.delete(id$)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente(data.Mensaje, "primary", "");
            _this.users = [];
            _this.mostrar();
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
            // this._route.navigate(['/login']);
        });
    };
    AdminListUsersComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    AdminListUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-listusers',
            template: __webpack_require__("../../../../../src/app/components/admin/listusers.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], AdminListUsersComponent);
    return AdminListUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/plantdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Plantas</h1>\n  <p>texto</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/plantdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlantdataComponent = (function () {
    function PlantdataComponent() {
    }
    PlantdataComponent.prototype.ngOnInit = function () {
    };
    PlantdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plantdata',
            template: __webpack_require__("../../../../../src/app/components/admin/plantdata.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PlantdataComponent);
    return PlantdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Estadisticas</h1>\n  <p>texto</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-statistics',
            template: __webpack_require__("../../../../../src/app/components/admin/statistics.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Herramientas</h1>\n  <p>texto</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolComponent = (function () {
    function ToolComponent() {
    }
    ToolComponent.prototype.ngOnInit = function () {
    };
    ToolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tool',
            template: __webpack_require__("../../../../../src/app/components/admin/tool.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ToolComponent);
    return ToolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <h3>Usuario <small>nombre... </small></h3>\n  <hr>\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"guardarUsuario(forma)\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Nombre</label>\n          <input\n                type=\"text\" name=\"name\"\n                class=\"form-control\" [(ngModel)]=\"user.name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Apellidos</label>\n          <input\n                type=\"text\" name=\"surnames\"\n                class=\"form-control\" [(ngModel)]=\"user.surnames\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n                type=\"password\" name=\"password\"\n                class=\"form-control\" [(ngModel)]=\"user.password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Repite el password</label>\n          <input\n                type=\"password\" name=\"password2\"\n                class=\"form-control\" [(ngModel)]=\"user.password2\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Ciudad</label>\n          <input\n                type=\"text\" name=\"\"\n                class=\"form-control\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label>Fecha de nacimiento</label>\n          <input\n                type=\"date\" name=\"birthDate\"\n                class=\"form-control\" [(ngModel)]=\"user.birthDate\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Foto</label>\n          <input\n                type=\"file\" name=\"\"\n                class=\"form-control\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-outline-primary\">\n            Crear\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserComponent = (function () {
    function AdminUserComponent(_newUserServce, _appComponent) {
        this._newUserServce = _newUserServce;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]();
    }
    AdminUserComponent.prototype.guardarUsuario = function (forma) {
        var _this = this;
        console.log(forma.value);
        this._newUserServce.register(forma.value)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente(data.Mensaje, "primary", "/admin");
        });
    };
    AdminUserComponent.prototype.ngOnInit = function () {
    };
    AdminUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-user',
            template: __webpack_require__("../../../../../src/app/components/admin/user.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/userdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\t<h1>Usuarios</h1>\n  <p>texto</p>\n\t<button [routerLink] =\"['/admin/listusers']\" class=\"btn btn-outline-primary\"\n\t        type=\"submit\" name=\"button\">Lista de usuarios</button>\n\t<button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\n\t                type=\"submit\" name=\"button\">Crear nuevo usuario</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/userdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserdataComponent = (function () {
    function UserdataComponent() {
    }
    UserdataComponent.prototype.ngOnInit = function () {
    };
    UserdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userdata',
            template: __webpack_require__("../../../../../src/app/components/admin/userdata.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserdataComponent);
    return UserdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer bg-light text-center\">\n  <div class=\"container\">\n    <p class=\"text\">\n      &copy; Symbiose\n    </p>\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menú estándar -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n<a class=\"navbar-brand\" href=\"#\">Gardiot</a>\r\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n<span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n\r\n<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n<ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item\" *ngIf=\"!this.user.isAuthenticated\">\r\n    <a href=\"https://gardiot.ovh/symbiose/\" class=\"nav-link\" target=\"blank\">Symbiose</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"!this.user.isAuthenticated\">\r\n    <a [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\">Log In</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"!this.user.isAuthenticated\">\r\n    <a [routerLink]=\"['/register']\" class=\"nav-link\" href=\"#\">Registrarse <span class=\"sr-only\">(current)</span></a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && !this.user.isAdmin\">\r\n    <a [routerLink]=\"['/garden']\" class=\"nav-link\" href=\"#\">Jardin</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && !this.user.isAdmin\">\r\n    <a [routerLink]=\"['/plants']\" class=\"nav-link\" href=\"#\">Plantas</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && !this.user.isAdmin\">\r\n    <a [routerLink]=\"['/calendar']\" class=\"nav-link\" href=\"#\">Calendario</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/statistics']\" class=\"nav-link\" href=\"#\">Estadísticas</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/analytics']\" class=\"nav-link\" href=\"#\">Anatítica</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/email']\" class=\"nav-link\" href=\"#\">Correo</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/userdata']\" class=\"nav-link\" href=\"#\">Usuarios</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/plantdata']\" class=\"nav-link\" href=\"#\">Plantas</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/eventdata']\" class=\"nav-link\" href=\"#\">Eventos</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/tool']\" class=\"nav-link\" href=\"#\">Herramientas</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated && this.user.isAdmin\">\r\n    <a [routerLink]=\"['/admin/invoice']\" class=\"nav-link\" href=\"#\">Facturas</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated\">\r\n    <a [routerLink]=\"['/profile']\" class=\"nav-link\" href=\"#\">Mi perfil</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"this.user.isAuthenticated\">\r\n    <a [routerLink]=\"['/logout']\" class=\"nav-link\" href=\"#\">Log Out</a>\r\n  </li>\r\n\r\n\r\n</ul>\r\n\r\n</div>\r\n\r\n\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function HeaderComponent(user) {
        this.user = user;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user.isUserAuthenticated()) {
            this.user.isAuthenticated = this.user.isUserAuthenticated();
            this.user.isUserAdmin().subscribe(function (data) {
                if (data) {
                    _this.user.isAdmin = true;
                }
                else {
                    _this.user.isAdmin = false;
                }
            }, function (error) {
                _this.user.isAdmin = false;
            });
        }
        else {
            this.user.isAdmin = false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmationComponent = (function () {
    function ConfirmationComponent(_comprobationService, _router, _appComponent) {
        this._comprobationService = _comprobationService;
        this._router = _router;
        this._appComponent = _appComponent;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['key'] != null) {
                _this._comprobationService.comprobateActivationToken(params['key'])
                    .subscribe(function (data) {
                    console.log(data);
                    _this._appComponent.mensajeEmergente("Tu cuenta se ha activado correctamente! Loguéate ahora", "primary", "login");
                }, function (error) {
                    _this._appComponent.mensajeEmergente("Ha habido un error activando tu cuenta, inténtalo más tarde", "danger", "login");
                });
            }
        });
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation',
            template: ''
        })
        //Esta clase recibe el link de correo de confirmación de usuario y envía el token a la api para validarlo
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container main-container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <h2>Iniciar sesión</h2>\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email</label>\n          <input [(ngModel)]=\"user.id\" name=\"id\"\n                type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Contraseña</label>\n          <input [(ngModel)]=\"user.password\" name=\"password\"\n                type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\n        </div>\n\n        <button [disabled]=\"!forma.valid\"\n              type=\"submit\" class=\"btn btn-primary\">Log in</button>\n      </form>\n      <br>\n      <a href=\"http://localhost:3000/api/auth/google\" class=\"btn btn-secondary\">Inicio de sesión Google</a>\n      <a href=\"http://localhost:3000/api/auth/facebook\" class=\"btn btn-success\">Inicio de sesión Facebook</a>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    function LoginComponent(_loginService, _route, _appComponent) {
        this._loginService = _loginService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.user = {
            id: "",
            name: "",
            password: "",
            password2: "",
            oldPassword: "",
            plan: "",
            birthDate: new Date(),
        };
    }
    //logueo de usuario y comprobación de si es admin o no
    LoginComponent.prototype.guardar = function () {
        var _this = this;
        this._loginService.login(this.user)
            .subscribe(function (data) {
            _this._loginService.isAuthenticated = true;
            //comprobar si es admin
            _this._loginService.isUserAdmin().subscribe(function (data) {
                if (data) {
                    _this._loginService.isAdmin = true;
                }
                else {
                    _this._loginService.isAdmin = false;
                }
            }, function (error) {
                _this._loginService.isAdmin = false;
            });
            _this._route.navigate(['/detail']);
        }, function (error) {
            var v = JSON.parse(error._body);
            console.log(v.Mensaje);
            if (v.Mensaje == "Cuenta no activa") {
                _this._route.navigate(['/resend']);
            }
            else {
                _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this._loginService.isUserAuthenticated()) {
            this._route.navigate(['/detail']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/manage/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function LogoutComponent(_logoutService, _route) {
        this._logoutService = _logoutService;
        this._route = _route;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logoutService.logout()
            .subscribe(function (data) {
            if (data.Mensaje == "Desconectado") {
                localStorage.removeItem('Bearer');
                _this._route.navigate(['/login']);
            }
        }, function (error) {
            localStorage.clear();
            _this._route.navigate(['/login']);
        });
        sessionStorage.clear();
        this._logoutService.isAdmin = false;
        this._logoutService.isAuthenticated = false;
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/oauthconfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OauthConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OauthConfirmationComponent = (function () {
    function OauthConfirmationComponent(_comprobationService, _router, _appComponent, _route) {
        this._comprobationService = _comprobationService;
        this._router = _router;
        this._appComponent = _appComponent;
        this._route = _route;
    }
    OauthConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['key'] != null) {
                localStorage.setItem('Bearer', params['key']);
                var expires = Date.now() + (6 * 60 * 60 * 1000); //6 horas para que expire el token
                localStorage.setItem('expires_at', expires.toString());
                _this._route.navigate(['/detail']);
            }
        });
    };
    OauthConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-oauthconfirmation',
            template: ''
        })
        //Esta clase recibe el link de correo de confirmación de usuario y envía el token a la api para validarlo
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OauthConfirmationComponent);
    return OauthConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container main-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Formulario de registro</h2>\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n                type=\"password\" name=\"password\"\n                class=\"form-control\" [(ngModel)]=\"user.password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Repite el password</label>\n          <input\n                type=\"password\" name=\"password2\"\n                class=\"form-control\" [(ngModel)]=\"user.password2\" required>\n        </div>\n\n        <button [disabled]=\"!forma.valid\"\n        type=\"submit\" class=\"btn btn-primary\">Registrarse</button>\n        <a href=\"{{this._userService.apiURL}}auth/google\" class=\"btn btn-secondary\">Registro con Google</a>\n        <a href=\"{{this._userService.apiURL}}auth/facebook\" class=\"btn btn-success\">Registro con Facebook</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_userService, _route, _appComponent) {
        this._userService = _userService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__classes_user_class__["a" /* User */]("");
    }
    RegisterComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.user);
        this._userService.register(this.user)
            .subscribe(function (data) {
            _this._route.navigate(['/detail']);
        }, function (error) {
            var v = JSON.parse(error._body);
            console.log(v.Mensaje);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._userService.isUserAuthenticated()) {
            this._route.navigate(['/detail']);
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/manage/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/resend.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"enviarEmail()\" class=\"btn btn-warning notification\">Enviar correo de confirmación</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/manage/resend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResendComponent = (function () {
    function ResendComponent(_resendService, _route) {
        this._resendService = _resendService;
        this._route = _route;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__classes_user_class__["a" /* User */]("");
    }
    ResendComponent.prototype.enviarEmail = function () {
        this._resendService.resendConfirmation()
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    ResendComponent.prototype.ngOnInit = function () {
    };
    ResendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resend',
            template: __webpack_require__("../../../../../src/app/components/manage/resend.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ResendComponent);
    return ResendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h1>Calendario</h1>\n  <p>calendario works!</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/components/user/calendar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container main-container\">\n  <h1>\n    Bienvenido a Gardiot, tu email es {{this.user.id}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(_detailService, _route) {
        this._detailService = _detailService;
        this._route = _route;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__classes_user_class__["a" /* User */]("");
    }
    //Recoge los datos del usuario logueado y los guarda para mostrarlos
    DetailComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.user.id = data.id;
            _this.user.birthDate = data.birthDate;
            _this.user.plan = data.plan;
            _this.user.name = data.name;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/components/user/detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/garden.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h1>Jardín</h1>\n  \n\n\n<section class=\"container\">\n  <div>\n  \t<p>Tiempo: {{tiempo}}</p>\n  \t<p>Humedad: {{humedad}}%</p>\n  </div>\n</section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/garden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__ = __webpack_require__("../../../../../src/app/classes/garden.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GardenComponent = (function () {
    function GardenComponent(_gardenService, _route, _appComponent) {
        this._gardenService = _gardenService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.garden = new __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__["a" /* Garden */]("");
        this.tiempo = "";
        this.humedad = "";
    }
    GardenComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    GardenComponent.prototype.mostrar = function () {
        var _this = this;
        this._gardenService.details()
            .subscribe(function (data) {
            _this.garden.id = data[0].id;
            _this.garden.title = data[0].title;
            _this.garden.width = data[0].width;
            _this.garden.lenght = data[0].lenght;
            _this.garden.longitude = data[0].longitude;
            _this.garden.latitude = data[0].latitude;
            _this.garden.soil = data[0].soil;
            _this.garden.user = data[0].user;
            _this.garden.countryCode = data[0].countryCode;
            _this.garden.city = data[0].city;
            console.log("garden");
            console.log(_this.garden);
            _this.getTiempo();
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    GardenComponent.prototype.getTiempo = function () {
        var _this = this;
        this._gardenService.tiempo(this.garden)
            .subscribe(function (data) {
            console.log(data);
            _this.tiempo = data.weather[0].main;
            _this.humedad = data.main.humidity;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    GardenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-garden',
            template: __webpack_require__("../../../../../src/app/components/user/garden.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_garden_service__["a" /* GardenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], GardenComponent);
    return GardenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h1>Plantas</h1>\n  <p>plantas works!</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryComponent = (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("../../../../../src/app/components/user/library.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <h1>Mi perfil</h1>\n\n<section class=\"container\">\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form  (ngSubmit)=\"edit()\" #forma=\"ngForm\" novalidate=\"\">\n        <div class=\"form-group\">\n          <label  for=\"name_user\">Nombre: </label>\n          <input  type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name_user\" required>\n        </div>\n        <div class=\"form-group\">\n          <label  for=\"name_user\">Email: </label>\n          <label for=\"name_user\">{{this.user.id}}</label>\n        </div>\n\n        <!--<div class=\"form-group\">\n          <label for=\"birthDate_user\">Fecha de nacimiento: </label>\n          <input [(ngModel)]=\"user.birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate_user\"  >\n        </div>-->\n\n        <h3>Cambiar contraseña</h3>\n        <div class=\"form-group\">\n          <label for=\"oldPassword_user\">Introduce tu contraseña actual</label>\n          <input [(ngModel)]=\"user.oldPassword\" type=\"password\" name=\"oldPassword\" id=\"oldPassword_user\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password_user\">Introduce tu nueva contraseña</label>\n          <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" id=\"password_user\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password2_user\">Repite tu contraseña</label>\n          <input [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\" id=\"password2_user\" >\n        </div>\n        <div class=\"form-group\" ng-init=\"listarPaises()\">\n          <label for=\"countries\">Introduce tu nuevo pais:</label>\n\n          <!--<ul>\n            <li *ngFor=\"let country of countries[0]\">\n              {{ country.countryName }}\n            </li>\n          </ul>-->\n\n          \n            <select id=\"country\" name=\"countryCode\" [(ngModel)]=\"user.countryCode\" (change)=\"listaCuidades(user.countryCode)\">\n              <option value=null>-- Selecciona un pais --</option>\n              <option *ngFor=\"let country of countries[0]\" value=\"{{country.countryCode}}\">{{country.countryName}}</option>\n            </select>\n           </div>\n           <div>\n            \n            <select id=\"city\" name=\"city\" [(ngModel)]=\"user.city\" *ngIf=\"user.countryCode!=null \">\n              <option value=null>-- Selecciona una ciudad --</option>\n              <option *ngFor=\"let city of cities[1]\" value=\"{{city.toponymName}}\">{{city.toponymName}}</option>\n            </select>\n          \n        </div>\n        \n\n        <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n      </form>\n    </div>\n  </div>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(_detailService, _route, _appComponent) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]("");
        this.countries = [];
        this.cities = [];
        this.selected = "";
    }
    //Cargar usuario para mostrar sus datos en el formulario por defecto
    ProfileComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.birthDate = data.birthDate;
            _this.user.plan = data.plan;
            _this.user.name = data.name;
            _this.user.city = data.city;
            _this.user.countryCode = data.countryCode;
            _this.listaCuidades(_this.user.countryCode);
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    //Enviar los nuevos datos del usuario a UserService para guardarlos
    ProfileComponent.prototype.edit = function () {
        var _this = this;
        console.log("user:" + this.user);
        this._detailService.modifyUserProfile(this.user, this.user.id)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Datos modificados", "success", "detail");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.mostrar();
        this.listarPaises();
    };
    ProfileComponent.prototype.listarPaises = function () {
        var _this = this;
        this._detailService.listCoutries()
            .subscribe(function (data) {
            //console.log(data.geonames);
            for (var key$ in data) {
                //console.log(data[key$]);
                _this.countries.push(data[key$]);
            }
            console.log("countrues:");
            console.log(_this.countries);
            console.log(_this.countries[0][0]);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.listaCuidades = function (value) {
        var _this = this;
        this._detailService.listCities(value)
            .subscribe(function (data) {
            _this.cities = [];
            //console.log(data.geonames);
            for (var key$ in data) {
                //console.log(data[key$]);
                _this.cities.push(data[key$]);
            }
            console.log(_this.cities);
            console.log(_this.cities[1][0]);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/desarrollo/desarrollo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"desarrollo\">\n<p>\nEsta aplicación está en desarrollo. La funcionalidad y el diseño están limitados\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/desarrollo/desarrollo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesarrolloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesarrolloComponent = (function () {
    function DesarrolloComponent() {
    }
    DesarrolloComponent.prototype.ngOnInit = function () {
    };
    DesarrolloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-desarrollo',
            template: __webpack_require__("../../../../../src/app/desarrollo/desarrollo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DesarrolloComponent);
    return DesarrolloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/garden.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GardenService = (function () {
    function GardenService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") < 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    GardenService.prototype.details = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "garden/3", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.tiempo = function (garden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        console.log("garden:" + garden.city);
        return this.http.get(this.apiURL + "weatherCity/" + garden.city + "/" + garden.countryCode, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GardenService);
    return GardenService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
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
    function UserService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") < 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    UserService.prototype.register = function (user) {
        var body = "id=" + user.id + "&password=" + user.password + "&password2=" + user.password2;
        body += "&name=" + user.name + "&lastName=" + user.lastName;
        if (user.birthDate != null) {
            //body+=`&birthDate=${user.birthDate}`;
        }
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "register", body, { headers: headers })
            .map(function (res) {
            if (res.json().Token != null) {
                console.log("Usuario " + user.id + " logueado");
                localStorage.setItem('Bearer', res.json().Token);
                var expires = Date.now() + (6 * 60 * 60 * 1000); //6 horas para que expire el token
                localStorage.setItem('expires_at', expires.toString());
            }
            return res.json();
        });
    };
    UserService.prototype.login = function (user) {
        var body = "id=" + user.id + "&password=" + user.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "authenticate", body, { headers: headers })
            .map(function (res) {
            if (res.json().Token != null) {
                console.log("Usuario " + user.id + " logueado");
                localStorage.setItem('Bearer', res.json().Token);
                var expires = Date.now() + (6 * 60 * 60 * 1000); //6 horas para que expire el token
                localStorage.setItem('expires_at', expires.toString());
            }
            else {
                console.log("Token es null");
                console.log(res.json());
            }
            return res.json();
        });
    };
    /*loginGoogle(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
      });

      return this.http.get(this.apiURL+"auth/google", { headers } )
          .map( res =>{
            return res.json();
          })
    }*/
    UserService.prototype.details = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "user/" + user.id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.detailsAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "users", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.modifyUserProfile = function (user, oldId) {
        var body = "name=" + user.name;
        console.log("user un modify; ");
        console.log(user);
        var country = 0;
        if (user.birthDate != null) {
            //body+=`&birthDate=${user.birthDate}`;
        }
        if (user.oldPassword && user.password) {
            body += "&password=" + user.password + "&password2=" + user.password2 + "&oldPassword=" + user.oldPassword;
        }
        if (user.countryCode) {
            body += "&countryCode=" + user.countryCode;
            country = 1;
        }
        if (user.city && country == 1) {
            body += "&city=" + user.city;
        }
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "user/" + oldId, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.delete = function (idUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "user/" + idUser, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.comprobateActivationToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.get(this.apiURL + "confirmation/" + token, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.resendConfirmation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.post(this.apiURL + "resend", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.isUserAuthenticated = function () {
        if (localStorage['Bearer'] != null && localStorage['expires_at'] != null) {
            var expire = parseInt(localStorage['expires_at']); //comprobar que sigue siendo válido el token
            if (expire < Date.now()) {
                localStorage.clear();
                this.isAuthenticated = false;
                return false;
            }
            else {
                this.isAuthenticated = true;
                return true;
            }
        }
        else {
            localStorage.clear();
            this.isAuthenticated = false;
            return false;
        }
    };
    UserService.prototype.isUserAdmin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.get(this.apiURL + "isAdmin", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.get(this.apiURL + "logout", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.listCoutries = function () {
        return this.http.get(this.apiURL + "geonamesAllCountries")
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.listCities = function (value) {
        return this.http.get(this.apiURL + "geonamesCities/" + value)
            .map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map