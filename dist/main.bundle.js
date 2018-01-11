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

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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

var AppComponent = (function () {
    function AppComponent() {
        this.admin = window.location.href.indexOf('admin') >= 0;
    }
    AppComponent.prototype.mensajeEmergente = function (msg, tipo, link) {
        var div = document.createElement("div");
        div.className = "alert alert-" + tipo + " msg";
        div.setAttribute("role", "alert");
        if (link == "") {
            div.innerHTML = msg + "<a onclick=\"this.parentNode.parentNode.removeChild(this.parentNode);\" class=\"btn btn-info\" role=\"button\">Aceptar</a>";
        }
        else {
            div.innerHTML = msg + "<a href=\"https://gardiot.ovh/dist/" + link + "\" class=\"btn btn-info\" role=\"button\">Aceptar</a>";
        }
        document.querySelector("body").appendChild(div);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_component__ = __webpack_require__("../../../../../src/app/components/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_users_login_component__ = __webpack_require__("../../../../../src/app/components/users/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_logout_component__ = __webpack_require__("../../../../../src/app/components/users/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_users_register_component__ = __webpack_require__("../../../../../src/app/components/users/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_component__ = __webpack_require__("../../../../../src/app/components/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_users_detail_component__ = __webpack_require__("../../../../../src/app/components/users/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_users_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_confirmation_component__ = __webpack_require__("../../../../../src/app/components/users/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_listusers_component__ = __webpack_require__("../../../../../src/app/components/admin/listusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//services










//Admin imports




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_users_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_users_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_users_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_users_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_users_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_users_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_listusers_component__["a" /* AdminListUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_user_component__["a" /* AdminUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_users_login_component__ = __webpack_require__("../../../../../src/app/components/users/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_logout_component__ = __webpack_require__("../../../../../src/app/components/users/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_register_component__ = __webpack_require__("../../../../../src/app/components/users/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_users_detail_component__ = __webpack_require__("../../../../../src/app/components/users/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_confirmation_component__ = __webpack_require__("../../../../../src/app/components/users/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_routes__ = __webpack_require__("../../../../../src/app/components/admin/admin.routes.ts");









var app_routes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_users_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_users_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__components_users_logout_component__["a" /* LogoutComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__["a" /* AdminComponent */], children: __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_routes__["a" /* admin_routes */] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_4__components_users_detail_component__["a" /* DetailComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_users_profile_component__["a" /* ProfileComponent */] },
    { path: 'confirmation/:key', component: __WEBPACK_IMPORTED_MODULE_6__components_users_confirmation_component__["a" /* ConfirmationComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(app_routes);


/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/dashboard.component.ts");
//Admin imports



var admin_routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AdminUserComponent */] },
    { path: 'listusers', component: __WEBPACK_IMPORTED_MODULE_0__listusers_component__["a" /* AdminListUsersComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];


/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n\t<h1>Panel de administración</h1>\r\n<button [routerLink] =\"['/admin/listusers']\" class=\"btn btn-outline-primary\"\r\n        type=\"submit\" name=\"button\">Lista de usuarios</button>\r\n<!--<button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\r\n                type=\"submit\" name=\"button\">Crear nuevo usuario</button>-->\r\n</div>\r\n"

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

/***/ "../../../../../src/app/components/admin/listusers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n<h1>Panel de administrador</h1>\r\n<hr>\r\n<h2>Lista de Usuarios</h2>\r\n<br>\r\n<div class=\"col-md-12 text-right\">\r\n  <!--<button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\r\n          type=\"submit\" name=\"button\">\r\n    Nuevo usuario\r\n  </button>-->\r\n  <br><br>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <!-- <th scope=\"col\">Pass</th> -->\r\n            <th scope=\"col\">Nombre</th>\r\n            <th scope=\"col\">Cumpleaños</th>\r\n            <th scope=\"col\">Foto</th>\r\n            <th scope=\"col\">Activo</th>\r\n            <th scope=\"col\">Plan</th>\r\n            <th scope=\"col\">Ciudad</th>\r\n            <th scope=\"col\">Admin</th>\r\n            <th scope=\"col\">Acceso</th>\r\n            <th scope=\"col\">GoogleId</th>\r\n            <th scope=\"col\">FacebookId</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of users\">\r\n            <td>{{user.id}}</td>\r\n            <!-- <td>{{user.password}}</td> -->\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.birthDate | date}}</td>\r\n            <td>{{user.photo}}</td>\r\n            <!-- <td><img src=\"...\" class=\"img-fluid pull-xs-left\" alt=\"...\">{{user.photo}}</td> -->\r\n            <td>{{user.active}}</td>\r\n            <td>{{user.plan}}</td>\r\n            <td>{{user.city}}</td>\r\n            <td>{{user.admin}}</td>\r\n            <td>{{user.acces}}</td>\r\n            <td>{{user.googleId}}</td>\r\n            <td>{{user.facebookId}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/listusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminListUsersComponent; });
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



var AdminListUsersComponent = (function () {
    function AdminListUsersComponent(_detailService, _route) {
        this._detailService = _detailService;
        this._route = _route;
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminListUsersComponent);
    return AdminListUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n  <h3>Usuario <small>nombre... </small></h3>\r\n  <button [routerLink]=\"['listusers']\" class=\"btn btn-outline-primary\">\r\n    Regresar\r\n  </button>\r\n  <hr>\r\n  <div class=\"row animated fadeIn fast\">\r\n    <div class=\"col-md-12\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label>Nombre</label>\r\n          <input\r\n                type=\"text\" name=\"\"\r\n                class=\"form-control\" requided>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input\r\n                type=\"text\" name=\"\"\r\n                class=\"form-control\" requided>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Ciudad</label>\r\n          <input\r\n                type=\"text\" name=\"\"\r\n                class=\"form-control\" requided>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Fecha de nacimiento</label>\r\n          <input\r\n                type=\"text\" name=\"\"\r\n                class=\"form-control\" requided>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Foto</label>\r\n          <input\r\n                type=\"file\" name=\"\"\r\n                class=\"form-control\" requided>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-outline-primary\">\r\n            Guardar\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserComponent; });
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

var AdminUserComponent = (function () {
    function AdminUserComponent() {
    }
    AdminUserComponent.prototype.ngOnInit = function () {
    };
    AdminUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-user',
            template: __webpack_require__("../../../../../src/app/components/admin/user.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<footer class=\"footer bg-light text-center\">\r\n  <div class=\"container\">\r\n    <p class=\"text\">\r\n      &copy; Symbiose\r\n    </p>\r\n\r\n  </div>\r\n</footer>\r\n"

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

module.exports = "<!-- Menú estándar -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n<a class=\"navbar-brand\" href=\"#\">Gardiot</a>\r\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n<span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n\r\n<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n<ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item\" *ngIf=\"!user.isAuthenticated()\">\r\n    <a [routerLink]=\"['/register']\" class=\"nav-link\" href=\"#\">Registrarse <span class=\"sr-only\">(current)</span></a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"!user.isAuthenticated()\">\r\n    <a [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\">Log In</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"user.isAuthenticated() && user.isAdmin()\">\r\n    <a [routerLink]=\"['/admin']\" class=\"nav-link\" href=\"#\">Administración</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"user.isAuthenticated()\">\r\n    <a [routerLink]=\"['/profile']\" class=\"nav-link\" href=\"#\">Mi perfil</a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a href=\"https://gardiot.ovh/symbiose/\" class=\"nav-link\" target=\"blank\">Symbiose</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"user.isAuthenticated()\">\r\n    <a [routerLink]=\"['/logout']\" class=\"nav-link\" href=\"#\">Log Out</a>\r\n  </li>\r\n\r\n\r\n</ul>\r\n\r\n</div>\r\n\r\n\r\n\r\n</nav>\r\n"

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
        this.admin = window.location.href.indexOf('admin') >= 0;
    }
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

/***/ "../../../../../src/app/components/users/confirmation.component.ts":
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
    function ConfirmationComponent(_comprobationService, _route, _router, _appComponent) {
        this._comprobationService = _comprobationService;
        this._route = _route;
        this._router = _router;
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
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container main-container\">\r\n  <h1>\r\n    Bienvenido a Gardiot, tu email es {{this.user.id}}\r\n  </h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
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



var DetailComponent = (function () {
    function DetailComponent(_detailService, _route) {
        this._detailService = _detailService;
        this._route = _route;
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
            _this._route.navigate(['/login']);
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/components/users/detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container main-container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12\">\r\n      <h2>Iniciar sesión</h2>\r\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email</label>\r\n          <input [(ngModel)]=\"user.id\" name=\"id\"\r\n                type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Contraseña</label>\r\n          <input [(ngModel)]=\"user.password\" name=\"password\"\r\n                type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\r\n        </div>\r\n\r\n        <button [disabled]=\"!forma.valid\"\r\n              type=\"submit\" class=\"btn btn-primary\">Log in</button>\r\n      </form>\r\n      <br>\r\n      <!--<button type=\"button\" (click)=\"guardarGoogle()\" class=\"btn btn-secondary\">Inicio de sesión Google</button>\r\n      <button type=\"button\" class=\"btn btn-success\">Inicio de sesión Facebook</button>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/login.component.ts":
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
            birthDate: null
        };
    }
    LoginComponent.prototype.guardar = function () {
        var _this = this;
        this._loginService.login(this.user)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Te has logueado correctamente!", "primary", "detail");
        }, function (error) {
            var v = JSON.parse(error._body);
            console.log(v.Mensaje);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    LoginComponent.prototype.guardarGoogle = function () {
        this._loginService.loginGoogle()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this._loginService.isAuthenticated()) {
            this._route.navigate(['/detail']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/users/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/logout.component.ts":
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
                sessionStorage.clear();
            }
        });
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

/***/ "../../../../../src/app/components/users/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n  <h1>Mi perfil</h1>\r\n\r\n<section class=\"container\">\r\n  <div class=\"row animated fadeIn fast\">\r\n    <div class=\"col-md-12\">\r\n      <form  (ngSubmit)=\"edit()\" #forma=\"ngForm\" novalidate=\"\">\r\n        <div class=\"form-group\">\r\n          <label  for=\"name_user\">Nombre: </label>\r\n          <input  type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name_user\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label  for=\"name_user\">Email: </label>\r\n          <label for=\"name_user\">{{this.user.id}}</label>\r\n        </div>\r\n\r\n        <!--<div class=\"form-group\">\r\n          <label for=\"birthDate_user\">Fecha de nacimiento: </label>\r\n          <input [(ngModel)]=\"user.birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate_user\"  >\r\n        </div>-->\r\n\r\n        <h3>Cambiar contraseña</h3>\r\n        <div class=\"form-group\">\r\n          <label for=\"oldPassword_user\">Introduce tu contraseña actual</label>\r\n          <input [(ngModel)]=\"user.oldPassword\" type=\"password\" name=\"oldPassword\" id=\"oldPassword_user\" >\r\n</div>\r\n<div class=\"form-group\">\r\n          <label for=\"password_user\">Introduce tu nueva contraseña</label>\r\n          <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" id=\"password_user\" >\r\n</div>\r\n<div class=\"form-group\">\r\n          <label for=\"password2_user\">Repite tu contraseña</label>\r\n          <input [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\" id=\"password2_user\" >\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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




var ProfileComponent = (function () {
    function ProfileComponent(_detailService, _route, _appComponent) {
        this._detailService = _detailService;
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
    ProfileComponent.prototype.mostrar = function () {
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
            _this._route.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.edit = function () {
        var _this = this;
        var oldPassword, password;
        console.log(this.user);
        if (this.user.password != "") {
            if (this.user.oldPassword != "") {
                if (this.user.password == this.user.password2) {
                    oldPassword = this.user.oldPassword;
                    password = this.user.password;
                    this._detailService.modifyUserProfile(this.user, oldPassword, password)
                        .subscribe(function (data) {
                        _this._appComponent.mensajeEmergente("Datos modificados", "success", "");
                    }, function (error) {
                        console.error(error);
                        _this._appComponent.mensajeEmergente(error, "danger", "");
                        _this._route.navigate(['/login']);
                    });
                }
                else {
                    this._appComponent.mensajeEmergente("Las contraseñas no coinciden, la contraseña no se ha guardado", "danger", "");
                }
            }
            else {
                this._appComponent.mensajeEmergente("Debes introducir tu contraseña actual para poder cambiar tu contraseña", "warning", "");
            }
        }
        else {
            this._detailService.modifyUserProfile(this.user, oldPassword, password)
                .subscribe(function (data) {
                _this._appComponent.mensajeEmergente("Datos modificados", "success", "");
            }, function (error) {
                console.error(error);
                _this._appComponent.mensajeEmergente(error, "danger", "");
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/users/profile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container main-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>Formulario de registro</h2>\r\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email</label>\r\n          <input [(ngModel)]=\"user.id\" name=\"id\"\r\n                type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Contraseña</label>\r\n          <input [(ngModel)]=\"user.password\" name=\"password\"\r\n          type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword2\">Repetir contraseña</label>\r\n          <input [(ngModel)]=\"user.password2\" name=\"password2\"\r\n          type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\" required>\r\n        </div>\r\n\r\n        <button [disabled]=\"!forma.valid\"\r\n        type=\"submit\" class=\"btn btn-primary\">Registrarse</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var RegisterComponent = (function () {
    function RegisterComponent(_userService, _route, _appComponent) {
        this._userService = _userService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.user = {
            id: "",
            name: "",
            password: "",
            password2: "",
            oldPassword: "",
            plan: "",
            birthDate: null
        };
    }
    RegisterComponent.prototype.guardar = function (user) {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Te has registrado correctamente! Revisa tu correo para activar tu cuenta", "primary", "login");
        }, function (error) {
            var v = JSON.parse(error._body);
            console.log(v.Mensaje);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._userService.isAuthenticated()) {
            this._route.navigate(['/detail']);
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/users/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], RegisterComponent);
    return RegisterComponent;
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
        this.apiURL = "https://gardiot.ovh/api/";
    }
    UserService.prototype.register = function (user) {
        var body = "id=" + user.id + "&password=" + user.password + "&password2=" + user.password2;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "register", body, { headers: headers })
            .map(function (res) {
            if (res.json().Mensaje == "Insertado") {
                console.log("Usuario " + user.id + " insertado");
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
                //TRUNYO TEMPORAL
                if (user.id == "luisberenguer96@gmail.com") {
                    sessionStorage['admin'] = 1;
                }
                else {
                    sessionStorage['admin'] = 0;
                }
                localStorage.setItem('Bearer', res.json().Token);
            }
            else {
                console.log("Token es null");
                console.log(res.json());
            }
            return res.json();
        });
    };
    UserService.prototype.loginGoogle = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
        });
        return this.http.get(this.apiURL + "auth/google", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.details = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "user", { headers: headers })
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
    UserService.prototype.modifyUserProfile = function (user, oldPassword, password) {
        var body = "name=" + user.name;
        if (user.birthDate != null) {
            //body+=`&birthDate=${user.birthDate}`;
        }
        if (oldPassword && password) {
            body += "&password=" + password + "&password2=" + password + "&oldPassword=" + oldPassword;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "user", body, { headers: headers })
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
    UserService.prototype.isAuthenticated = function () {
        if (localStorage['Bearer'] != null) {
            return true;
        }
        return false;
    };
    UserService.prototype.isAdmin = function () {
        if (sessionStorage['admin'] == 1) {
            return true;
        }
        return false;
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