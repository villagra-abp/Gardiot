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

/***/ "../../../../../src/app/admin.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return admin_routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_admin_adminprofile_component__ = __webpack_require__("../../../../../src/app/components/admin/adminprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_users_newuser_newuser_component__ = __webpack_require__("../../../../../src/app/components/users/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_edituser_edituser_component__ = __webpack_require__("../../../../../src/app/components/users/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_listusers_listusers_component__ = __webpack_require__("../../../../../src/app/components/users/listusers/listusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_statistics_component__ = __webpack_require__("../../../../../src/app/components/admin/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_analytics_component__ = __webpack_require__("../../../../../src/app/components/admin/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_treatments_newtreatment_newtreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/newtreatment/newtreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_treatments_edittreatment_edittreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/edittreatment/edittreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_treatments_listtreatment_listtreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/listtreatment/listtreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_treatments_treatment_treatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/treatment/treatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_products_newproduct_newproduct_component__ = __webpack_require__("../../../../../src/app/components/products/newproduct/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_products_editproduct_editproduct_component__ = __webpack_require__("../../../../../src/app/components/products/editproduct/editproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_products_listproduct_listproduct_component__ = __webpack_require__("../../../../../src/app/components/products/listproduct/listproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_products_product_product_component__ = __webpack_require__("../../../../../src/app/components/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feeds_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feeds/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_feeds_newfeed_newfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/newfeed/newfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_feeds_editfeed_editfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/editfeed/editfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_feeds_listfeed_listfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/listfeed/listfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_treatmentsplants_newtreatmentsplants_newtreatmentsplants_component__ = __webpack_require__("../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__ = __webpack_require__("../../../../../src/app/components/admin/adminguard.guard.ts");
//Profile

//Users



//negocio


//treatment




//product




//feed




//newtreatmentsplants

//otros

var admin_routes = [
    //Profile
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_0__components_admin_adminprofile_component__["a" /* AdminProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //negocio
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_analytics_component__["a" /* AnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_statistics_component__["a" /* StatisticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //user
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__components_users_listusers_listusers_component__["a" /* AdminListUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'edituser/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_users_edituser_edituser_component__["a" /* EdituserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'newuser', component: __WEBPACK_IMPORTED_MODULE_1__components_users_newuser_newuser_component__["a" /* NewuserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //treatment
    { path: 'treatments', component: __WEBPACK_IMPORTED_MODULE_8__components_treatments_listtreatment_listtreatment_component__["a" /* ListtreatmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'treatment/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_treatments_treatment_treatment_component__["a" /* TreatmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'edittreatment/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_treatments_edittreatment_edittreatment_component__["a" /* EdittreatmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'newtreatment', component: __WEBPACK_IMPORTED_MODULE_6__components_treatments_newtreatment_newtreatment_component__["a" /* NewtreatmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //product
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_12__components_products_listproduct_listproduct_component__["a" /* ListproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_products_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'editproduct/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_products_editproduct_editproduct_component__["a" /* EditproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'newproduct', component: __WEBPACK_IMPORTED_MODULE_10__components_products_newproduct_newproduct_component__["a" /* NewproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //feed
    { path: 'feeds', component: __WEBPACK_IMPORTED_MODULE_17__components_feeds_listfeed_listfeed_component__["a" /* ListfeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'feed/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_feeds_feed_feed_component__["a" /* FeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'editfeed/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_feeds_editfeed_editfeed_component__["a" /* EditfeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: 'newfeed', component: __WEBPACK_IMPORTED_MODULE_15__components_feeds_newfeed_newfeed_component__["a" /* NewfeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    //newtreatmentsplants
    { path: 'newtreatmentsplants/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_treatmentsplants_newtreatmentsplants_newtreatmentsplants_component__["a" /* NewtreatmentsplantsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_admin_adminguard_guard__["a" /* AdminguardGuard */]] },
    { path: '**', pathMatch: 'full', redirectTo: 'analytics' }
];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nH1{\n  font-size: 30px;\n}\nH2{\n  font-size: 25px;\n}\n\nH3{\n  font-size: 20px;\n}\n\nH4{\n  font-size: 17px;\n}\n\np{\n  font-size: 14px;\n  -webkit-text-decoration-color: #333333;\n          text-decoration-color: #333333;\n}\nlink{\n  font-size: 14px;\n  -webkit-text-decoration-color: #0073bb;\n          text-decoration-color: #0073bb;\n}\n\nSmall{\n  font-size: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-desarrollo></app-desarrollo>\n"

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
        else if (window.location.toString().indexOf("gardiot") >= 0) {
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
            div.innerHTML = msg + "<button id=\"emergent\" onclick=\"this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);\" class=\"btn btn-info\">Aceptar</button>";
        }
        else {
            div.innerHTML = msg + "<button id=\"emergent\" onclick='location.href=\"" + (this.url + link) + "\"' class=\"btn btn-info\">Aceptar</button>";
        }
        backdiv.appendChild(div);
        document.querySelector("body").appendChild(backdiv);
        document.getElementById("emergent").focus();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_treatment_service__ = __webpack_require__("../../../../../src/app/services/treatment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feed_service__ = __webpack_require__("../../../../../src/app/services/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_treatmentplant_service__ = __webpack_require__("../../../../../src/app/services/treatmentplant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select2__ = __webpack_require__("../../../../ng2-select2/ng2-select2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_select2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_tabs_component__ = __webpack_require__("../../../../angular-tabs-component/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_adminprofile_component__ = __webpack_require__("../../../../../src/app/components/admin/adminprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_manage_oauthconfirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/oauthconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_adminguard_guard__ = __webpack_require__("../../../../../src/app/components/admin/adminguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_manage_login_component__ = __webpack_require__("../../../../../src/app/components/manage/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_manage_logout_component__ = __webpack_require__("../../../../../src/app/components/manage/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_manage_register_component__ = __webpack_require__("../../../../../src/app/components/manage/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_manage_confirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_analytics_component__ = __webpack_require__("../../../../../src/app/components/admin/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_admin_statistics_component__ = __webpack_require__("../../../../../src/app/components/admin/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__desarrollo_desarrollo_component__ = __webpack_require__("../../../../../src/app/desarrollo/desarrollo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_gardens_garden_garden_component__ = __webpack_require__("../../../../../src/app/components/gardens/garden/garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_gardens_editgarden_editgarden_component__ = __webpack_require__("../../../../../src/app/components/gardens/editgarden/editgarden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_gardens_newgarden_newgarden_component__ = __webpack_require__("../../../../../src/app/components/gardens/newgarden/newgarden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_users_userdata_userdata_component__ = __webpack_require__("../../../../../src/app/components/users/userdata/userdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_users_newuser_newuser_component__ = __webpack_require__("../../../../../src/app/components/users/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_users_edituser_edituser_component__ = __webpack_require__("../../../../../src/app/components/users/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_users_listusers_listusers_component__ = __webpack_require__("../../../../../src/app/components/users/listusers/listusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_user_editprofile_component__ = __webpack_require__("../../../../../src/app/components/user/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_manage_resend_component__ = __webpack_require__("../../../../../src/app/components/manage/resend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_plants_newplant_newplant_component__ = __webpack_require__("../../../../../src/app/components/plants/newplant/newplant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_plants_editplant_editplant_component__ = __webpack_require__("../../../../../src/app/components/plants/editplant/editplant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_plants_plant_plant_component__ = __webpack_require__("../../../../../src/app/components/plants/plant/plant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_plants_library_library_component__ = __webpack_require__("../../../../../src/app/components/plants/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_treatments_newtreatment_newtreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/newtreatment/newtreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_treatments_edittreatment_edittreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/edittreatment/edittreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_treatments_listtreatment_listtreatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/listtreatment/listtreatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_treatments_treatment_treatment_component__ = __webpack_require__("../../../../../src/app/components/treatments/treatment/treatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_products_newproduct_newproduct_component__ = __webpack_require__("../../../../../src/app/components/products/newproduct/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_products_editproduct_editproduct_component__ = __webpack_require__("../../../../../src/app/components/products/editproduct/editproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_products_listproduct_listproduct_component__ = __webpack_require__("../../../../../src/app/components/products/listproduct/listproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_products_product_product_component__ = __webpack_require__("../../../../../src/app/components/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_feeds_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feeds/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_feeds_newfeed_newfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/newfeed/newfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_feeds_editfeed_editfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/editfeed/editfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_feeds_listfeed_listfeed_component__ = __webpack_require__("../../../../../src/app/components/feeds/listfeed/listfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_manage_reset_pass_component__ = __webpack_require__("../../../../../src/app/components/manage/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_manage_reset_pass_back_reset_pass_back_component__ = __webpack_require__("../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_treatmentsplants_newtreatmentsplants_newtreatmentsplants_component__ = __webpack_require__("../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_angular_calendar__ = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_dialog_delete_dialog_delete_component__ = __webpack_require__("../../../../../src/app/components/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_help_help_component__ = __webpack_require__("../../../../../src/app/components/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Rutas


//services









//libreries
// import {PopupModule} from 'ng2-opd-popup'; // VENTANA EMERGENTE









//Oauth

//Guards



//header

//calendario

//manage-App




//Admin imports





//garden




//user







//plants




//treatment




//product




//feed










// POP UPS






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_manage_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_manage_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_manage_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_user_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_user_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_user_editprofile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_manage_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_manage_resend_component__["a" /* ResendComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_users_listusers_listusers_component__["a" /* AdminListUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_adminprofile_component__["a" /* AdminProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_users_edituser_edituser_component__["a" /* EdituserComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_users_newuser_newuser_component__["a" /* NewuserComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_gardens_garden_garden_component__["a" /* GardenComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_gardens_editgarden_editgarden_component__["a" /* EditGardenComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_gardens_newgarden_newgarden_component__["a" /* NewGardenComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_admin_analytics_component__["a" /* AnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_admin_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_users_userdata_userdata_component__["a" /* UserdataComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_plants_library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_manage_oauthconfirmation_component__["a" /* OauthConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__desarrollo_desarrollo_component__["a" /* DesarrolloComponent */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_47__components_plants_plant_plant_component__["a" /* PlantComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_plants_newplant_newplant_component__["a" /* NewplantComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_plants_editplant_editplant_component__["a" /* EditplantComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_treatments_newtreatment_newtreatment_component__["a" /* NewtreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_treatments_edittreatment_edittreatment_component__["a" /* EdittreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_treatments_listtreatment_listtreatment_component__["a" /* ListtreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_treatments_treatment_treatment_component__["a" /* TreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_products_newproduct_newproduct_component__["a" /* NewproductComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_products_editproduct_editproduct_component__["a" /* EditproductComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_products_listproduct_listproduct_component__["a" /* ListproductComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_products_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_feeds_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_feeds_newfeed_newfeed_component__["a" /* NewfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_feeds_editfeed_editfeed_component__["a" /* EditfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_feeds_listfeed_listfeed_component__["a" /* ListfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_manage_reset_pass_component__["a" /* ResetPassComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_manage_reset_pass_back_reset_pass_back_component__["a" /* ResetPassBackComponent */],
                __WEBPACK_IMPORTED_MODULE_63__components_treatmentsplants_newtreatmentsplants_newtreatmentsplants_component__["a" /* NewtreatmentsplantsComponent */],
                __WEBPACK_IMPORTED_MODULE_70__components_dialog_delete_dialog_delete_component__["a" /* DialogDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_71__components_help_help_component__["a" /* HelpComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_select2__["Select2Module"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_tabs_component__["a" /* TabModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_64__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_65_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_66__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_67__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_68__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_69__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* APP_ROUTING */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__services_garden_service__["a" /* GardenService */],
                __WEBPACK_IMPORTED_MODULE_4__services_plant_service__["a" /* PlantService */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_img_max__["b" /* Ng2ImgMaxService */],
                __WEBPACK_IMPORTED_MODULE_20__authguard_guard__["a" /* AuthguardGuard */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_adminguard_guard__["a" /* AdminguardGuard */],
                __WEBPACK_IMPORTED_MODULE_5__services_treatment_service__["a" /* TreatmentService */],
                __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_7__services_feed_service__["a" /* FeedService */],
                __WEBPACK_IMPORTED_MODULE_8__services_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_9__services_treatmentplant_service__["a" /* TreatmentPlantService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_70__components_dialog_delete_dialog_delete_component__["a" /* DialogDeleteComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_editprofile_component__ = __webpack_require__("../../../../../src/app/components/user/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_manage_confirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_manage_resend_component__ = __webpack_require__("../../../../../src/app/components/manage/resend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_plants_library_library_component__ = __webpack_require__("../../../../../src/app/components/plants/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_plants_plant_plant_component__ = __webpack_require__("../../../../../src/app/components/plants/plant/plant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_plants_newplant_newplant_component__ = __webpack_require__("../../../../../src/app/components/plants/newplant/newplant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_plants_editplant_editplant_component__ = __webpack_require__("../../../../../src/app/components/plants/editplant/editplant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_manage_oauthconfirmation_component__ = __webpack_require__("../../../../../src/app/components/manage/oauthconfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_gardens_garden_garden_component__ = __webpack_require__("../../../../../src/app/components/gardens/garden/garden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_gardens_editgarden_editgarden_component__ = __webpack_require__("../../../../../src/app/components/gardens/editgarden/editgarden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_gardens_newgarden_newgarden_component__ = __webpack_require__("../../../../../src/app/components/gardens/newgarden/newgarden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_routes__ = __webpack_require__("../../../../../src/app/admin.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_manage_reset_pass_component__ = __webpack_require__("../../../../../src/app/components/manage/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_manage_reset_pass_back_reset_pass_back_component__ = __webpack_require__("../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_help_help_component__ = __webpack_require__("../../../../../src/app/components/help/help.component.ts");










//Plants




//Oauth

//Admin imports

//GardenComponent




//mas rutas




var app_routes = [
    { path: 'resend', component: __WEBPACK_IMPORTED_MODULE_8__components_manage_resend_component__["a" /* ResendComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_manage_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_manage_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__components_manage_logout_component__["a" /* LogoutComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__["a" /* AdminComponent */], children: __WEBPACK_IMPORTED_MODULE_20__admin_routes__["a" /* admin_routes */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_4__components_user_detail_component__["a" /* DetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'editprofile', component: __WEBPACK_IMPORTED_MODULE_6__components_user_editprofile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'garden', component: __WEBPACK_IMPORTED_MODULE_16__components_gardens_garden_garden_component__["a" /* GardenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'editgarden', component: __WEBPACK_IMPORTED_MODULE_17__components_gardens_editgarden_editgarden_component__["a" /* EditGardenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'newgarden', component: __WEBPACK_IMPORTED_MODULE_18__components_gardens_newgarden_newgarden_component__["a" /* NewGardenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'plants', component: __WEBPACK_IMPORTED_MODULE_10__components_plants_library_library_component__["a" /* LibraryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'newplant', component: __WEBPACK_IMPORTED_MODULE_12__components_plants_newplant_newplant_component__["a" /* NewplantComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'editplant/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_plants_editplant_editplant_component__["a" /* EditplantComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'plant/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_plants_plant_plant_component__["a" /* PlantComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_9__components_calendar_calendar_component__["a" /* CalendarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'confirmation/:key', component: __WEBPACK_IMPORTED_MODULE_7__components_manage_confirmation_component__["a" /* ConfirmationComponent */] },
    { path: 'oauthconfirmation/:key', component: __WEBPACK_IMPORTED_MODULE_14__components_manage_oauthconfirmation_component__["a" /* OauthConfirmationComponent */] },
    { path: 'resetPass', component: __WEBPACK_IMPORTED_MODULE_21__components_manage_reset_pass_component__["a" /* ResetPassComponent */] },
    { path: 'reset-pass-back/:key', component: __WEBPACK_IMPORTED_MODULE_22__components_manage_reset_pass_back_reset_pass_back_component__["a" /* ResetPassBackComponent */], },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_23__components_help_help_component__["a" /* HelpComponent */], },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/classes/feed.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
var Feed = (function () {
    function Feed(id, name, text, dateInit, dateFinal) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.dateInit = dateInit;
        this.dateFinal = dateFinal;
    }
    return Feed;
}());



/***/ }),

/***/ "../../../../../src/app/classes/garden.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Garden; });
var Garden = (function () {
    function Garden(id, title, width, length, latitude, longitude, soil, user, countryCode, city, plants) {
        this.id = id;
        this.title = title;
        this.width = width;
        this.length = length;
        this.latitude = latitude;
        this.longitude = longitude;
        this.soil = soil;
        this.user = user;
        this.countryCode = countryCode;
        this.city = city;
        this.plants = plants;
    }
    return Garden;
}());



/***/ }),

/***/ "../../../../../src/app/classes/plant.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plant; });
var Plant = (function () {
    function Plant(id, scientificName, commonName, description, photo, _3DModel, family, depth, distance, diseaseResist, initDatePlant, finDatePlant, initDateBloom, finDateBloom, initDateHarvest, finDateHarvest, leaveType) {
        this.id = id;
        this.scientificName = scientificName;
        this.commonName = commonName;
        this.description = description;
        this.photo = photo;
        this._3DModel = _3DModel;
        this.family = family;
        this.depth = depth;
        this.distance = distance;
        this.diseaseResist = diseaseResist;
        this.initDatePlant = initDatePlant;
        this.finDatePlant = finDatePlant;
        this.initDateBloom = initDateBloom;
        this.finDateBloom = finDateBloom;
        this.initDateHarvest = initDateHarvest;
        this.finDateHarvest = finDateHarvest;
        this.leaveType = leaveType;
    }
    return Plant;
}());



/***/ }),

/***/ "../../../../../src/app/classes/product.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(id, name, type, description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/classes/producttreatment.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTreatment; });
var ProductTreatment = (function () {
    function ProductTreatment(plant, treatment, product, name) {
        this.plant = plant;
        this.treatment = treatment;
        this.product = product;
        this.name = name;
    }
    return ProductTreatment;
}());



/***/ }),

/***/ "../../../../../src/app/classes/task.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(tPlant, treatmentPlant, myPlant, mPlant, date, dateDone, commonName, name) {
        this.tPlant = tPlant;
        this.treatmentPlant = treatmentPlant;
        this.myPlant = myPlant;
        this.mPlant = mPlant;
        this.date = date;
        this.dateDone = dateDone;
        this.commonName = commonName;
        this.name = name;
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/classes/treatment.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Treatment; });
var Treatment = (function () {
    function Treatment(id, name, description, icon) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
    }
    return Treatment;
}());



/***/ }),

/***/ "../../../../../src/app/classes/treatmentplant.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPlant; });
var TreatmentPlant = (function () {
    function TreatmentPlant(plant, treatment, frequency, initDate, finalDate) {
        this.plant = plant;
        this.treatment = treatment;
        this.frequency = frequency;
        this.initDate = initDate;
        this.finalDate = finalDate;
    }
    return TreatmentPlant;
}());



/***/ }),

/***/ "../../../../../src/app/classes/user.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, name, lastName, password, password2, oldPassword, photo, countryCode, city, birthDate, active, admin) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.password2 = password2;
        this.oldPassword = oldPassword;
        this.photo = photo;
        this.countryCode = countryCode;
        this.city = city;
        this.birthDate = birthDate;
        this.active = active;
        this.admin = admin;
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



// import { AdminListUsersComponent } from "./listusers.component";
//import { AdminUserComponent } from "./user.component";
var AdminComponent = (function () {
    function AdminComponent(_detailService, _route) {
        this._detailService = _detailService;
        this._route = _route;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



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
        if (localStorage['Par'] == '1') {
            return true;
        }
        else {
            this.router.navigate(['/detail']);
            return false;
        }
    };
    AdminguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminguardGuard);
    return AdminguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/adminprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\r\n  <div class=\"container main-container\">\r\n    <h1>Editar perfil</h1>\r\n  <section class=\"container\">\r\n    <div class=\"row animated fadeIn fast\">\r\n      <div class=\"col-md-12\">\r\n        <form  (ngSubmit)=\"edit()\" #forma=\"ngForm\" novalidate=\"\">\r\n          <div class=\"form-group\">\r\n            <label  for=\"name_user\">Nombre: </label>\r\n            <input  type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name_user\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label  for=\"lastname_user\">Apellidos: </label>\r\n            <input  type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\" id=\"lastname_user\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label  for=\"name_user\">Email: </label>\r\n            <label for=\"name_user\">{{this.user.id}}</label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label  for=\"birthday_user\">Fecha de nacimiento: </label>\r\n            <input  type=\"date\" [(ngModel)]=\"user.birthDate\" name=\"birthDate\" id=\"birthday_user\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" ng-init=\"listarPaises()\">\r\n            <label for=\"countries\">País:</label>\r\n\r\n              <select2 id=\"pais\" [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.saveCountry($event)\">\r\n              </select2>\r\n\r\n             </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"countries\">Introduce tu código postal:</label>\r\n              <input type=\"text\" id=\"zipCode\" (valueChanged)=\"this.saveCity($event)\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"countries\">Ciudad:</label>\r\n              <span id=\"ciudad\"></span>\r\n          </div>\r\n\r\n          <!--<div class=\"form-group\">\r\n            <label for=\"birthDate_user\">Fecha de nacimiento: </label>\r\n            <input [(ngModel)]=\"user.birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate_user\"  >\r\n          </div>-->\r\n\r\n          <h3>Cambiar contraseña</h3>\r\n          <div class=\"form-group\">\r\n            <label for=\"oldPassword_user\">Introduce tu contraseña actual</label>\r\n            <input [(ngModel)]=\"user.oldPassword\" type=\"password\" name=\"oldPassword\" id=\"oldPassword_user\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password_user\">Introduce tu nueva contraseña</label>\r\n            <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" id=\"password_user\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password2_user\">Repite tu contraseña</label>\r\n            <input [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\" id=\"password2_user\" >\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\r\n          <button [routerLink]=\"['/profile']\" class=\"btn btn-outline-danger\">Cancelar</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/adminprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminProfileComponent = (function () {
    function AdminProfileComponent(_detailService, _route, _appComponent, datePipe, _renderer) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.datePipe = datePipe;
        this._renderer = _renderer;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]("");
        this.countries = [];
        this.cities = [];
        this.zip = "";
    }
    AdminProfileComponent.prototype.searchZip = function (event) {
        var _this = this;
        //aqui vamos cargando las posibles ciudades a elegir
        var input = document.querySelector("#zipCode");
        if (input.value.length == 5) {
            this._detailService.listCitiesByZip(this.user.countryCode, input.value)
                .subscribe(function (data) {
                var sp = document.querySelector('#ciudad');
                console.log(data);
                if (data.length > 0) {
                    if (data[0].adminName3 !== undefined) {
                        _this.user.city = data[0].adminName3;
                        sp.innerHTML = data[0].adminName3;
                    }
                    else if (data[0].adminName2 !== undefined) {
                        _this.user.city = data[0].adminName2;
                        sp.innerHTML = data[0].adminName2;
                    }
                    else if (data[0].adminName1 !== undefined) {
                        _this.user.city = data[0].adminName1;
                        sp.innerHTML = data[0].adminName1;
                    }
                    else {
                        _this.user.city = '';
                        sp.innerHTML = 'Código postal no encontrado';
                    }
                }
                else {
                    _this.user.city = '';
                    sp.innerHTML = 'Código postal no encontrado';
                }
                input.value = '';
            }, function (error) {
                console.log(error);
            });
        }
    };
    //Cargar usuario para mostrar sus datos en el formulario por defecto
    AdminProfileComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.user.id = data.id;
            _this.user.birthDate = _this.datePipe.transform(data.birthDate, 'yyyy-MM-dd');
            _this.user.photo = data.photo;
            _this.user.name = data.name;
            _this.user.lastName = data.lastName;
            _this.user.city = data.city;
            _this.user.countryCode = data.countryCode;
            _this.listarPaises();
            _this.mostrarCiudad();
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    //Enviar los nuevos datos del usuario a UserService para guardarlos
    AdminProfileComponent.prototype.edit = function () {
        var _this = this;
        this._detailService.modifyUserProfile(this.user)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Datos modificados", "success", "");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    AdminProfileComponent.prototype.listarPaises = function () {
        var _this = this;
        this._detailService.listCoutries()
            .subscribe(function (data) {
            //console.log(data.geonames);
            var aux = [];
            aux.push({ id: 0, text: "Selecciona un país" });
            for (var i = 0; i < data.geonames.length; i++) {
                aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
            }
            _this.countryData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(aux);
                obs.complete();
            });
            _this.startCountry = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(_this.user.countryCode);
                obs.complete();
            }).delay(1000);
        }, function (error) {
            console.log(error);
        });
    };
    AdminProfileComponent.prototype.mostrarCiudad = function () {
        var aux = [];
        aux.push({ id: this.user.city, text: this.user.city });
        this.cityData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            obs.next(aux);
            obs.complete();
        });
        document.querySelector('#ciudad').innerHTML = this.user.city;
    };
    //Estas dos funciones son para guardar los datos
    //del país y ciudad en el objeto de usuario
    AdminProfileComponent.prototype.saveCountry = function (e) {
        console.log(e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.user.countryCode = e.value;
        }
    };
    AdminProfileComponent.prototype.saveCity = function (e) {
        console.log("save city" + e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.user.city = e.value;
            this.mostrarCiudad();
        }
    };
    AdminProfileComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AdminProfileComponent.prototype, "searchZip", null);
    AdminProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminprofile',
            template: __webpack_require__("../../../../../src/app/components/admin/adminprofile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<div class=\"container main-container\">\n\t<h1>Analítica</h1>\n  <p>En esta sección tendremos los estudios que nos ayuden a mejorar la aplicación (tiempos en cada sitio, uso de ciertas funcionalidades...)</p>\n</div>\n</div> \n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__("../../../../../src/app/components/admin/analytics.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container vistaAdmin\">\n  <h1>Estadisticas</h1>\n  <article class=\"row\">\n    <div class=\"col\">\n\t\t\t<h3>Tareas realizadas en los jardines</h3>\n\t\t\t\t<iframe src=\"https://gardiot.ovh/grafana/d-solo/4-LEvPkiz/panel-de-estadisticas?orgId=1&panelId=4&from=1522533600000&to=1525125599999&var-planta1=Aloe%20vera&var-planta2=Cactus\"\n         width=\"450\" height=\"250\" frameborder=\"0\">\n       </iframe>\n    </div>\n    <div class=\"col\">\n\t\t\t<h3>Comparativa de plantas</h3>\n\t\t\t\t<iframe src=\"https://gardiot.ovh/grafana/d-solo/4-LEvPkiz/panel-de-estadisticas?orgId=1&panelId=2&from=1522533600000&to=1525125599999&var-planta1=Aloe%20vera&var-planta2=Cactus\"\n        width=\"450\" height=\"250\" frameborder=\"0\">\n      </iframe>\n    </div>\n    </article>\n\n    <article class=\"row\">\n    <div class=\"col\">\n\t\t\t<h3>Usuarios</h3>\n\t\t\t\t<iframe src=\"https://gardiot.ovh/grafana/d-solo/4-LEvPkiz/panel-de-estadisticas?orgId=1&panelId=6&from=1522533600000&to=1525125599999&var-planta1=Aloe%20vera&var-planta2=Cactus\"\n                    width=\"450\" height=\"250\" frameborder=\"0\">\n        </iframe>\n    </div>\n    <div class=\"col\">\n\t\t\t<h3>Mapa de usuarios</h3>\n      <iframe src=\"https://gardiot.ovh/grafana/d-solo/4-LEvPkiz/panel-de-estadisticas?orgId=1&panelId=8&from=1522533600000&to=1525125599999&var-planta1=Aloe%20vera&var-planta2=Cactus\"\n                  width=\"450\" height=\"250\" frameborder=\"0\">\n      </iframe>\n    </div>\n  </article>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_delete_dialog_delete_component__ = __webpack_require__("../../../../../src/app/components/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function StatisticsComponent(dialog) {
        this.dialog = dialog;
        this.dialogResult = "";
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialog_delete_dialog_delete_component__["a" /* DialogDeleteComponent */], {
            width: '600px',
            data: 'Hola Mriano'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__("../../../../../src/app/components/admin/statistics.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container container\">\n  <div class=\"wrap\">\n  <section class=\"card-columns\">\n      <div *ngFor=\"let feed of feeds\" class=\"card\"  style=\"width: 18rem;\" >\n          <h4>{{feed.name}} </h4>\n          <p>{{feed.text}} </p>\n          <button class=\"btn btn-outline-primary\">visto</button>\n        </div>\n  </section>\n  </div>\n  <div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Anterior\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Actual\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Próximo\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<!--\n\n<h3>\n  Edit events\n  <button\n    class=\"btn btn-primary pull-right\"\n    (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.primary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.secondary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n\n      </td>\n      <td>\n\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"events.splice(index, 1); refresh.next()\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n-->\n</div>\n\n<!-- <div class=\"container main-container\">\n  <div class=\"wrap\">\n  <section class=\"card-columns\">\n      <div *ngFor=\"let task of tasks\" class=\"card\"  style=\"width: 18rem;\" >\n          <h4>{{task.commonName}} </h4>\n          <p>{{task.name}} </p>\n          <p>{{task.date}}</p>\n          <button   class=\"btn btn-outline-primary\">Realizada</button>\n        </div>\n  </section>\n  </div>\n\t</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feed_service__ = __webpack_require__("../../../../../src/app/services/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_task_class__ = __webpack_require__("../../../../../src/app/classes/task.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_feed_class__ = __webpack_require__("../../../../../src/app/classes/feed.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = (function () {
    function CalendarComponent(_taskService, _feedService, _route, _appComponent, datePipe, activatedRoute) {
        var _this = this;
        this._taskService = _taskService;
        this._feedService = _feedService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.datePipe = datePipe;
        this.activatedRoute = activatedRoute;
        this.view = 'month';
        this.viewDate = new Date();
        this.tasks = [];
        this.task = new __WEBPACK_IMPORTED_MODULE_4__classes_task_class__["a" /* Task */]();
        this.treatments = [];
        this.treatment = new __WEBPACK_IMPORTED_MODULE_4__classes_task_class__["a" /* Task */]();
        this.feeds = [];
        this.feed = new __WEBPACK_IMPORTED_MODULE_5__classes_feed_class__["a" /* Feed */]();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    //this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    //this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["b" /* Subject */]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_8_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_8_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        //this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.addEvent = function (Ttitle, Tstart, Tend) {
        this.events.push({
            title: Ttitle,
            start: Object(__WEBPACK_IMPORTED_MODULE_8_date_fns__["startOfDay"])(new Date(Tstart)),
            end: Object(__WEBPACK_IMPORTED_MODULE_8_date_fns__["endOfDay"])(new Date(Tend)),
            color: colors.red,
            draggable: false,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    CalendarComponent.prototype.handleEvent = function (c, e) {
        alert("manejar click");
        console.log(e);
    };
    CalendarComponent.prototype.mostrar = function () {
        var _this = this;
        var f = new Date();
        var fecha_actual;
        f.getDate();
        f.getMonth() + 1;
        f.getFullYear();
        fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
        this._taskService.detailsAll(fecha_actual)
            .subscribe(function (data) {
            _this.tasks = [];
            for (var key$ in data) {
                //console.log(data[key$]);
                //this.tasks.push(data[key$]);
                _this.addEvent(data[key$].name + " " + data[key$].commonName, _this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'), _this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'));
            }
            /*for(let key$ in data){
              this.treatments.push(data[key$]);
            }
            console.log(this.treatments);
            console.log(this.tasks);*/
        }, function (error) {
            console.error(error);
        });
    };
    CalendarComponent.prototype.cargarfeeds = function () {
        var _this = this;
        this._feedService.showfeeds()
            .subscribe(function (data) {
            _this.feeds = [];
            for (var key$ in data) {
                _this.feeds.push(data[key$]);
            }
            console.log("¿cuantos?");
            console.log(_this.feeds);
        }, function (error) {
            console.error(error);
        });
    };
    CalendarComponent.prototype.ngOnInit = function () {
        this.mostrar();
        this.cargarfeeds();
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")],
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-delete/dialog-delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n  width: 100%;\n    margin: 0 auto;\n    background: rgba(255,255,255,0.1);\n    padding: 35px;\n    border: 2px solid #fff;\n    border-radius: 20px/50px;\n    background-clip: padding-box;\n    text-align: center;\n}\nsection{\n  margin-top: -26px;\n}\n\nmat-dialog-actions{\npadding: 2.5px;\n}\nbutton{\nmargin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog-delete/dialog-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <section >\n  <h4 mat-dialog-title>¿Esta seguro que desea borrar este producto?</h4>\n  <!-- <mat-dialog-content>\n  <strong>{{data}}</strong>\n  </mat-dialog-content> -->\n  <mat-dialog-actions>\n    <button mat-raise-button (click)=\"onCloseConfirm()\" type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: 1}\" href=\"#\">Aceptar</button>\n    <button mat-raise-button (click)=\"onCloseCancel()\" type=\"button\" class=\"btn btn-secondary\">Cancelar</button>\n  </mat-dialog-actions>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialog-delete/dialog-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogDeleteComponent = (function () {
    function DialogDeleteComponent(thisDialogRef, data, _productService) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this._productService = _productService;
    }
    DialogDeleteComponent.prototype.onCloseConfirm = function () {
        this.delete();
    };
    DialogDeleteComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogDeleteComponent.prototype.delete = function () {
        var _this = this;
        this._productService.deleteProduct(this.data)
            .subscribe(function (data) {
            window.location.reload();
            _this.thisDialogRef.close('Confirm');
        }, function (error) {
            console.error(error);
        });
    };
    DialogDeleteComponent.prototype.ngOnInit = function () {
    };
    DialogDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-delete',
            template: __webpack_require__("../../../../../src/app/components/dialog-delete/dialog-delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialog-delete/dialog-delete.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Number, __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], DialogDeleteComponent);
    return DialogDeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/editfeed/editfeed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/editfeed/editfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_feed\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feed.name\" name=\"name\" id=\"name_feed\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"feed.text\" name=\"text\" placeholder=\"Consejo\" required rows=\"3\" required></textarea>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"dateInit\">Inicio</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"feed.dateInit\" name=\"dateInit\" id=\"dateInit\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"dateFinal\">Fin</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"feed.dateFinal\" name=\"dateFinal\" id=\"dateFinal\" >\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/feeds']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/feeds/editfeed/editfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feed_service__ = __webpack_require__("../../../../../src/app/services/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_feed_class__ = __webpack_require__("../../../../../src/app/classes/feed.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditfeedComponent = (function () {
    function EditfeedComponent(_feedService, _appComponent, _router, _route, datePipe) {
        this._feedService = _feedService;
        this._appComponent = _appComponent;
        this._router = _router;
        this._route = _route;
        this.datePipe = datePipe;
        this.feed = new __WEBPACK_IMPORTED_MODULE_3__classes_feed_class__["a" /* Feed */]();
        this.feeds = [];
    }
    EditfeedComponent.prototype.guardar = function () {
        var _this = this;
        console.log('entro');
        console.log(this.feed);
        this._feedService.modify(this.feed)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El consejo se ha modificado", "primary", "admin/feeds?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditfeedComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.feed = new __WEBPACK_IMPORTED_MODULE_3__classes_feed_class__["a" /* Feed */](params['id']);
                _this.mostrar(_this.feed.id);
            }
            else {
                _this._route.navigate(['/feeds']);
            }
        });
    };
    EditfeedComponent.prototype.mostrar = function (idFeed) {
        var _this = this;
        console.log(idFeed);
        this._feedService.details(idFeed)
            .subscribe(function (data) {
            _this.feed.id = idFeed;
            _this.feed.name = data[0].name;
            _this.feed.text = data[0].text;
            _this.feed.dateInit = _this.datePipe.transform(data[0].dateInit, 'yyyy-MM-dd');
            _this.feed.dateFinal = _this.datePipe.transform(data[0].dateFinal, 'yyyy-MM-dd');
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
        });
    };
    EditfeedComponent.prototype.ngOnInit = function () {
        this.getID();
    };
    EditfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editfeed',
            template: __webpack_require__("../../../../../src/app/components/feeds/editfeed/editfeed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/editfeed/editfeed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], EditfeedComponent);
    return EditfeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  feed works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/feeds/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
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

var FeedComponent = (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__("../../../../../src/app/components/feeds/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/listfeed/listfeed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/listfeed/listfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n  <div class=\"container main-container wrap\">\n  <h1>Consejos</h1>\n\n  <form (ngSubmit)=\"this.searchcontent()\" class=\"form-row\" #forma=\"ngForm\" >\n    <article class=\"form-group col-md-4\">\n      <input type=\"text\"   class=\"form-control\" name=\"commonName\" placeholder=\"Buscar en gardiot\">\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button class=\"btn btn-default\" type=\"submit\">Buscar</button>\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button  [routerLink]=\"['/admin/newfeed']\" class=\"btn btn-outline-primary\">Nuevo Consejo</button>\n    </article>\n  </form>\n  <table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Texto</th>\n      <th scope=\"col\">Fecha Inicial</th>\n      <th scope=\"col\">Fecha Final</th>\n      <th scope=\"col\">Modificar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let feed of feeds\">\n      <th scope=\"row\">{{feed.name}}</th>\n      <td>{{feed.text}}</td>\n      <td>{{feed.dateInit}}</td>\n      <td>{{feed.dateFinal}}</td>\n      <td><button  class=\"btn btn-outline-primary\" [routerLink]=\"['/admin/editfeed/',feed.id]\">Modificar</button></td>\n      <td><button  class=\"btn btn-outline-danger\" (click)=\"delete(feed.id)\" [routerLink]=\"['/admin/feeds']\" [queryParams]=\"{pag: 1}\" >Eliminar</button></td>\n    </tr>\n  </tbody>\n</table>\n  <app-pagination [count]=\"this.numeroItems\" [type]=\"5\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/feeds/listfeed/listfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feed_service__ = __webpack_require__("../../../../../src/app/services/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_feed_class__ = __webpack_require__("../../../../../src/app/classes/feed.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListfeedComponent = (function () {
    function ListfeedComponent(_feedService, activatedRoute) {
        this._feedService = _feedService;
        this.activatedRoute = activatedRoute;
        this.feeds = [];
        this.feed = new __WEBPACK_IMPORTED_MODULE_2__classes_feed_class__["a" /* Feed */]();
        this.paginaActual = 1;
        this.elementosPorPagina = 4;
        this.estado = false; // false es listado y true buscador
    }
    ListfeedComponent.prototype.mostrar = function () {
        var _this = this;
        if (this.estado == false) {
            this._feedService.detailsAll(this.paginaActual, this.elementosPorPagina)
                .subscribe(function (data) {
                _this.feeds = [];
                for (var key$ in data) {
                    _this.feeds.push(data[key$]);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
            console.log("assss");
        }
    };
    ListfeedComponent.prototype.ActualizarPagina = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.paginaActual = params['pag'];
            _this.getitems();
        });
    };
    ListfeedComponent.prototype.getitems = function () {
        var _this = this;
        this._feedService.getNumberItems()
            .subscribe(function (data) {
            if (_this.estado == false) {
                _this.numeroItems = data[0].NUMFEEDS;
            }
            _this.mostrar();
        }, function (error) {
            console.error(error);
        });
    };
    ListfeedComponent.prototype.delete = function (idProduct) {
        var _this = this;
        this._feedService.deleteProduct(idProduct)
            .subscribe(function (data) {
            _this.ActualizarPagina();
        }, function (error) {
            console.error(error);
        });
    };
    ListfeedComponent.prototype.ngOnInit = function () {
        this.ActualizarPagina();
    };
    ListfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listfeed',
            template: __webpack_require__("../../../../../src/app/components/feeds/listfeed/listfeed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/listfeed/listfeed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ListfeedComponent);
    return ListfeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/newfeed/newfeed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/newfeed/newfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_feed\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feed.name\" name=\"name\" id=\"name_feed\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"feed.text\" name=\"text\" placeholder=\"Consejo\" required rows=\"3\" required></textarea>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"dateInit\">Inicio</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"feed.dateInit\" name=\"dateInit\" id=\"dateInit\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"dateFinal\">Fin</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"feed.dateFinal\" name=\"dateFinal\" id=\"dateFinal\" >\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/feeds']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/feeds/newfeed/newfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feed_service__ = __webpack_require__("../../../../../src/app/services/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_feed_class__ = __webpack_require__("../../../../../src/app/classes/feed.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewfeedComponent = (function () {
    function NewfeedComponent(_feedService, _appComponent) {
        this._feedService = _feedService;
        this._appComponent = _appComponent;
        this.feed = new __WEBPACK_IMPORTED_MODULE_3__classes_feed_class__["a" /* Feed */]();
        this.feeds = [];
    }
    NewfeedComponent.prototype.guardar = function () {
        var _this = this;
        this._feedService.save(this.feed)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El consejo se ha guardado", "primary", "admin/feeds?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    NewfeedComponent.prototype.ngOnInit = function () {
    };
    NewfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newfeed',
            template: __webpack_require__("../../../../../src/app/components/feeds/newfeed/newfeed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/newfeed/newfeed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], NewfeedComponent);
    return NewfeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gardens/editgarden/editgarden.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n\tpadding: 0 !important;\n}\n.borrar{\n\tmargin-top: 1em;\n}\n.canvasEvolver{\n\tposition: absolute;\n\ttop: 61px;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n\tz-index:0;\n}\ncanvas{\nmargin: 0;\npadding: 0;\nwidth: 100% !important;\nheight: 100% !important;\n\n}\nbutton{\n\tmin-height: 40px;\n}\n.selectPlantas{\n\tposition: absolute;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tmax-height:100%;\n\toverflow-y: auto;\n\ttop: 61px;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 150px;\n\tpadding: 10px;\n\tbackground-color: #fff;\n\tz-index:1;\n}\n\n .selectPlantas>article{\n\t min-width: 110px;\n\t min-height: 200px;\n\t margin-top: 5px;\n }\n\n .selectPlantas>article>.imgPlant{\n\t width: 100%;\n\t height: 180px;\n\t background-position: center;\n\t background-repeat: no-repeat;\n\t background-size: contain;\n\t border: 2px solid #000;\n\t cursor: pointer;\n }\n\n .formulario{\n \tposition: fixed;\n \tpadding: 10px;\n\ttop: 81px;\n\tright: 20px;\n \twidth:400px;\n\theight: 80%;\n\tbackground-color: #fff;\n\n }\n\n .boton-container{\n \tposition: absolute;\n \twidth: 150px;\n \ttext-align:center;\n \tpadding: 5px;\n\tbackground-color: #fff;\n\tz-index: 2;\n }\n\n\n\n@media (max-width: 768px) {\n\n\t.selectPlantas{\n\t\tposition: absolute;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-direction: row;\n\t\tflex-direction: row;\n\t\t-ms-flex-pack: start;\n\t\t    justify-content: flex-start;\n\t\theight:120px;\n\t\twidth: 100%;\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t\ttop: auto;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tpadding: 10px;\n\t\tbackground-color: #fff;\n\t\tz-index:1;\n\t}\n\n\t.selectPlantas>article{\n\t min-width: 60px;\n\t min-height: 100px;\n \t max-width: 60px;\n \t max-height: 100px;\n \t margin: 0 10px 0 10px;\n  }\n\n  .selectPlantas>article>.imgPlant{\n \t width: 100%;\n \t height: 80px;\n \t background-position: center;\n \t background-repeat: no-repeat;\n \t background-size: contain;\n \t border: 2px solid #000;\n \t cursor: pointer;\n  }\n\n  .formulario{\n \tmargin-top : -20px;\n \tmargin-left: auto;\n \tmargin-right:auto;\n \twidth:90%;\n\tbackground-color: #lightblue;\n\n }\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gardens/editgarden/editgarden.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <aside class=\"selectPlantas\">\n      <button [routerLink]=\"['/garden']\" class=\"btn btn-outline-danger\">Volver</button>\n      <button class=\"btn btn-primary\" (click)=\"showForm()\">Editar datos</button>\n      <article>\n        <div class=\"imgPlant\" style='background-image: url(\"./assets/ejemplo.JPG\");'>\n        </div>\n        <span>Margarita 1</span>\n      </article>\n      <article>\n        <div class=\"imgPlant\" style='background-image: url(\"./assets/ejemplo.JPG\");'>\n        </div>\n        <span>Margarita 2</span>\n      </article>\n      <article>\n        <div class=\"imgPlant\" style='background-image: url(\"./assets/ejemplo.JPG\");'>\n        </div>\n        <span>Margarita 3</span>\n      </article>\n    </aside>\n  <div class=\"canvasEvolver\">\n    <canvas id=\"myCanvas\" oncontextmenu=\"return false;\" onmousemove=\"mouse_move(event);\" onmousedown=\"mouse_down(event);\" onmouseup=\"mouse_up(event);\" onmousewheel=\"scrolling(event);\" width=\"1800\" height=\"1170\"></canvas>\n  </div>\n\n  <section class=\"formulario rounded border border-secondary\" [hidden]=\"menuVisible\">\n    <div class=\"row animated fadeIn fast\">\n      <div class=\"col-md-12\">\n        <form  (ngSubmit)=\"edit()\" #forma=\"ngForm\" novalidate=\"\">\n          <div class=\"form-group\">\n            <div>\n              <label  for=\"title\">Título: </label>\n              <input  class=\"form-control\" type=\"text\" [(ngModel)]=\"garden.title\" name=\"title\" id=\"title_garden\" required>\n            </div>\n            <div>\n              <label  for=\"length\">Largo: </label>\n              <input  class=\"form-control\" type=\"number\" [(ngModel)]=\"garden.length\" name=\"length\" id=\"length_garden\" required>\n            </div>\n            <div>\n              <label  for=\"width\">Ancho: </label>\n              <input  class=\"form-control\" type=\"number\" [(ngModel)]=\"garden.width\" name=\"width\" id=\"width_garden\" required>\n            </div>\n            <div>\n              <label for=\"countries\">País:</label>\n              <br>\n              <select2 id=\"pais\" [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.saveCountry($event)\">\n              </select2>\n            </div>\n            <div>\n              <label for=\"countries\">Introduce tu código postal:</label>\n              <input class=\"form-control\" type=\"text\" id=\"zipCode\" (valueChanged)=\"this.saveCity($event)\"/>\n            </div>\n          </div>\n\n            <div class=\"form-group  col-md-6\">\n                <label for=\"countries\">Ciudad:</label>\n                <span id=\"ciudad\"></span>\n            </div>\n\n          <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar</button>\n          <button [routerLink]=\"['/garden']\" class=\"btn btn-outline-danger\">Cancelar</button>\n          <button (click)=\"delete()\" class=\"btn btn-danger float-right\" >Borrar</button>\n\n        </form>\n      </div>\n\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/components/gardens/editgarden/editgarden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGardenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__ = __webpack_require__("../../../../../src/app/classes/garden.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditGardenComponent = (function () {
    function EditGardenComponent(_gardenService, _route, _appComponent) {
        this._gardenService = _gardenService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.garden = new __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__["a" /* Garden */]("");
        this.countries = [];
        this.cities = [];
        this.zip = "";
        this.menuVisible = true;
        this.buttonText = "datos";
    }
    EditGardenComponent.prototype.searchZip = function (event) {
        var _this = this;
        //aqui vamos cargando las posibles ciudades a elegir
        var input = document.querySelector("#zipCode");
        if (input.value.length == 5) {
            this._gardenService.listCitiesByZip(this.garden.countryCode, input.value)
                .subscribe(function (data) {
                var sp = document.querySelector('#ciudad');
                console.log(data);
                if (data.length > 0) {
                    _this.garden.latitude = data[0].lat.toFixed(2);
                    _this.garden.longitude = data[0].lng.toFixed(2);
                    if (data[0].adminName3 !== undefined) {
                        _this.garden.city = data[0].adminName3;
                        sp.innerHTML = data[0].adminName3;
                    }
                    else if (data[0].adminName2 !== undefined) {
                        _this.garden.city = data[0].adminName2;
                        sp.innerHTML = data[0].adminName2;
                    }
                    else if (data[0].adminName1 !== undefined) {
                        _this.garden.city = data[0].adminName1;
                        sp.innerHTML = data[0].adminName1;
                    }
                    else {
                        _this.garden.city = '';
                        sp.innerHTML = 'Código postal no encontrado';
                    }
                }
                else {
                    _this.garden.city = '';
                    sp.innerHTML = 'Código postal no encontrado';
                }
                input.value = '';
                console.log(_this.garden);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditGardenComponent.prototype.listarPaises = function () {
        var _this = this;
        this._gardenService.listCoutries()
            .subscribe(function (data) {
            console.log(data.geonames);
            var aux = [];
            aux.push({ id: 0, text: "Selecciona un país" });
            for (var i = 0; i < data.geonames.length; i++) {
                aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
            }
            _this.countryData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(aux);
                obs.complete();
            });
            _this.startCountry = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(_this.garden.countryCode);
                obs.complete();
            }).delay(1000);
        }, function (error) {
            console.log(error);
        });
    };
    EditGardenComponent.prototype.mostrarCiudad = function () {
        var aux = [];
        aux.push({ id: this.garden.city, text: this.garden.city });
        this.cityData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            obs.next(aux);
            obs.complete();
        });
        document.querySelector('#ciudad').innerHTML = this.garden.city;
    };
    EditGardenComponent.prototype.mostrar = function () {
        var _this = this;
        this._gardenService.details()
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.garden.id = data.id;
                _this.garden.title = data.title;
                _this.garden.width = data.width;
                _this.garden.length = data.length;
                _this.garden.longitude = data.longitude;
                _this.garden.latitude = data.latitude;
                _this.garden.soil = data.soil;
                _this.garden.user = data.user;
                _this.garden.countryCode = data.countryCode;
                _this.garden.city = data.city;
                _this.garden.plants = data.plants;
                _this.inicializar();
                //new iniciar("edit", this.garden);
                _this.listarPaises();
                _this.mostrarCiudad();
            }
            else {
                _this._route.navigate(['/newgarden']);
            }
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
            _this._route.navigate(['/detail']);
        });
    };
    EditGardenComponent.prototype.delete = function () {
        var _this = this;
        this._gardenService.deleteGarden(this.garden)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Borrado", "success", "detail");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditGardenComponent.prototype.ngOnInit = function () {
        this.mostrar();
    };
    EditGardenComponent.prototype.resizeCanvas = function () {
        var canvasEvolver = document.querySelector('.canvasEvolver');
        var canvas = document.querySelector('canvas');
        canvas.width = canvasEvolver.offsetWidth;
        canvas.height = canvasEvolver.offsetHeight;
        var desvX = (canvas.width - 1200) * 0.0008;
        var desvY = (canvas.height - 974) * 0.00072;
        var pos = motor.getPosCamaraActiva();
        console.log(pos);
        //motor.moverCamaraA("camara2", 0, pos[1]+(-100*desvY), 0);
        motor.getCamaraActiva().entity.setParams(-1 - desvX, 1 + desvX, -0.7 - desvY, 0.7 + desvY, 1, 1000);
    };
    //muestra el formulario de edicion y borrado de jardín
    EditGardenComponent.prototype.showForm = function () {
        if (this.menuVisible == true) {
            this.menuVisible = false;
        }
        else {
            this.menuVisible = true;
        }
    };
    //Envia los nuevos datos del jardin a  a GardenService para guardarlos
    EditGardenComponent.prototype.edit = function () {
        var _this = this;
        this._gardenService.modifyGarden(this.garden)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Datos modificados", "success", "garden");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditGardenComponent.prototype.saveCountry = function (e) {
        console.log("save country " + e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.garden.countryCode = e.value;
        }
    };
    EditGardenComponent.prototype.saveCity = function (e) {
        console.log("save city " + e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.garden.city = e.value;
            this.mostrarCiudad();
        }
    };
    EditGardenComponent.prototype.inicializar = function () {
        new iniciar("edit", this.garden);
        var width = document.querySelector(".canvasEvolver").offsetWidth;
        var height = document.querySelector(".canvasEvolver").offsetHeight;
        var canvas = document.querySelector('canvas');
        canvas.width = width;
        canvas.height = height;
        var desvX = (canvas.width - 1200) * 0.0008;
        var desvY = (canvas.height - 974) * 0.00072;
        motor.getCamaraActiva().entity.setParams(-1 - desvX, 1 + desvX, -0.7 - desvY, 0.7 + desvY, 1, 1000);
        motor.moverCamaraA("camara2", 0, (100 * -desvY), 0);
        window.addEventListener("resize", this.resizeCanvas);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EditGardenComponent.prototype, "searchZip", null);
    EditGardenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editgarden',
            template: __webpack_require__("../../../../../src/app/components/gardens/editgarden/editgarden.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gardens/editgarden/editgarden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_garden_service__["a" /* GardenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], EditGardenComponent);
    return EditGardenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gardens/garden/garden.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: baseline;\r\n      align-items: baseline;\r\n}\r\n.title>button{\r\n  height: 40px;\r\n}\r\n.herramienta{\r\n  width: 100%;\r\n  max-width: 1080px;\r\n  margin: 0 auto;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction:column;\r\n      flex-direction:column;\r\n  padding: 0;\r\n}\r\n.herramienta>canvas{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.prevision{\r\n  margin-top: 1em;\r\n}\r\n\r\n.tiempo{\r\n  margin-top : 1em;\r\n  margin-left, margin-right: 30px%;\r\n  /*padding: 1em;*/\r\n}\r\n\r\n.tarjetaHoy{\r\n  margin-top : 2em;\r\n  margin-left, margin-right: 30px%;\r\n  padding: 1em;\r\n  width: 250px;\r\n  background-color:#63dd63;\r\n}\r\n\r\n.hoy{\r\n  font-size : 2em;\r\n\r\n}\r\n\r\n\r\n.casilla{\r\n  padding-top:.5em;\r\n  padding-bottom:.5em;\r\n  max-width: 100px;\r\n  margin-left, margin-right:.3em;\r\n  text-align: center;\r\n}\r\n/*.casilla:nth-child(even){\r\n  background-color:#63dd63;\r\n}\r\n.casilla:nth-child(odd){\r\n  background:#fcfcfc;\r\n}*/\r\n\r\n.maxima{\r\n  font-size : 1em;\r\n}\r\n.minima{\r\n  font-size : 0.8em;\r\n  color: gray;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh1, h2{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gardens/garden/garden.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"herramienta\">\n<canvas id=\"myCanvas\" oncontextmenu=\"return false;\" onmousemove=\"mouse_move(event, 'detail');\" onmousedown=\"mouse_down(event, 'detail');\" onmouseup=\"mouse_up(event, 'detail');\" onmousewheel=\"scrolling(event, 'detail');\" width=\"1800\" height=\"1200\"></canvas>\n</section>\n<div class=\"main-container\">\n\n  <section class=\"container title\">\n      <h1>{{garden.title}}</h1>\n      <button [routerLink]=\"['/editgarden']\" class=\"btn btn-outline-primary\">Editar</button>\n  </section>\n\n<section class=\"container\">\n    <div id=\"prevision\">\n    <h4>Previsión meteorológica</h4>\n      <div class=\"row tiempo\" >\n        <div class=\"col-sm casilla rounded\" [style.background-color]=\"colorMan\">\n          Hoy\n          <br>\n          <img src=\"./../../../assets/images/imgWeather/{{fotoHoy}}.png\">\n          <br>\n           <span class=\"maxima\">{{temperatura | number:'.0-0'}}º</span>\n        </div>\n        <div class=\"col-sm casilla rounded\" [style.background-color]=\"colorMan\">\n          Mañana\n          <br>\n          <img src=\"./../../../assets/images/imgWeather/{{fotoMan}}.png\">\n          <br>\n           <span class=\"maxima\">{{maxMan | number:'.0-0'}}º</span> <span class=\"minima\">{{minMan | number:'.0-0'}}º</span>\n        </div>\n        <div class=\"col-sm casilla rounded\" [style.background-color]=\"colorDia3\">\n          {{nombreDia3}}\n          <br>\n          <img src=\"./../../../assets/images/imgWeather/{{fotoDia3}}.png\">\n          <br>\n          <span class=\"maxima\">{{maxDia3 | number:'.0-0'}}º</span> <span class=\"minima\">{{minDia3 | number:'.0-0'}}º</span>\n        </div>\n        <div class=\"col-sm casilla rounded\" [style.background-color]=\"colorDia4\">\n          {{nombreDia4}}\n          <br>\n          <img src=\"./../../../assets/images/imgWeather/{{fotoDia4}}.png\">\n          <br>\n          <span class=\"maxima\">{{maxDia4 | number:'.0-0'}}º</span> <span class=\"minima\">{{minDia4 | number:'.0-0'}}º</span>\n        </div>\n        <div class=\"col-sm casilla rounded\" [style.background-color]=\"colorDia5\">\n          {{nombreDia5}}\n          <br>\n          <img src=\"./../../../assets/images/imgWeather/{{fotoDia5}}.png\">\n          <br>\n           <span class=\"maxima\">{{maxDia5 | number:'.0-0'}}º</span> <span class=\"minima\">{{minDia5 | number:'.0-0'}}º</span> \n        </div>\n      </div>\n    </div>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gardens/garden/garden.component.ts":
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
        this.cielo = "Cargando";
        this.temperatura = "Cargando";
        this.humedad = "Cargando";
        this.presion = "Cargando";
        this.viento = "Cargando";
        this.angulo = "0";
        this.prevHoy = [];
        this.prevMan = [];
        this.prevDia3 = [];
        this.prevDia4 = [];
        this.prevDia5 = [];
        this.fotoHoy = "default";
        this.fotoMan = "default";
        this.fotoDia3 = "default";
        this.fotoDia4 = "default";
        this.fotoDia5 = "default";
        this.colorHoy = "#fcfcfc";
        this.colorMan = "#fcfcfc";
        this.colorDia3 = "#fcfcfc";
        this.colorDia4 = "#fcfcfc";
        this.colorDia5 = "#fcfcfc";
        this.maxMan = 0;
        this.maxDia3 = 0;
        this.maxDia4 = 0;
        this.maxDia5 = 0;
        this.minMan = 0;
        this.minDia3 = 0;
        this.minDia4 = 0;
        this.minDia5 = 0;
        this.nombreDia3 = "";
        this.nombreDia4 = "";
        this.nombreDia5 = "";
        this.tercerDia = "";
        this.notVisible = false;
    }
    GardenComponent.prototype.ngOnInit = function () {
        this.mostrar();
        this.inicializar();
    };
    GardenComponent.prototype.mostrar = function () {
        var _this = this;
        this._gardenService.details()
            .subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.garden.id = data.id;
                _this.garden.title = data.title;
                _this.garden.width = data.width;
                _this.garden.length = data.length;
                _this.garden.longitude = data.longitude;
                _this.garden.latitude = data.latitude;
                _this.garden.soil = data.soil;
                _this.garden.user = data.user;
                _this.garden.countryCode = data.countryCode;
                _this.garden.city = data.city;
                _this.garden.plants = data.plants;
                _this.getTiempo();
                _this.getPrevision();
            }
            else {
                _this._route.navigate(['/newgarden']);
            }
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
            if (JSON.parse(error._body).Mensaje == 'No existe') {
                _this._route.navigate(['/newgarden']);
            }
            else {
                _this._route.navigate(['/detail']);
            }
        });
    };
    GardenComponent.prototype.getTiempo = function () {
        var _this = this;
        this._gardenService.tiempo(this.garden)
            .subscribe(function (data) {
            _this.cielo = data.weather[0].main;
            var aux = data.main.temp - 273;
            _this.temperatura = aux.toFixed(0);
            _this.humedad = data.main.humidity;
            _this.presion = data.main.pressure;
            _this.viento = data.wind.speed;
            new iniciar("detail", _this.garden);
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    GardenComponent.prototype.getPrevision = function () {
        var _this = this;
        this._gardenService.prevision(this.garden)
            .subscribe(function (data) {
            var date = new Date();
            var today = new Date();
            var todayDay = today.getDate();
            var auxToday = [];
            var auxTomorrow = [];
            var auxDia3 = [];
            var auxDia4 = [];
            var auxDia5 = [];
            for (var i = 0; i < data.list.length; i++) {
                date.setTime(data.list[i].dt * 1000);
                if (date.getDate() == todayDay) {
                    auxToday.push(data.list[i]);
                }
                if (date.getDate() == todayDay + 1) {
                    auxTomorrow.push(data.list[i]);
                }
                if (date.getDate() == todayDay + 2) {
                    auxDia3.push(data.list[i]);
                    _this.nombreDia3 = _this.diaSemana(date.getDay() - 1);
                }
                if (date.getDate() == todayDay + 3) {
                    auxDia4.push(data.list[i]);
                    _this.nombreDia4 = _this.diaSemana(date.getDay() - 1);
                }
                if (date.getDate() == todayDay + 4) {
                    auxDia5.push(data.list[i]);
                    _this.nombreDia5 = _this.diaSemana(date.getDay() - 1);
                }
            }
            console.log(auxToday);
            console.log(auxTomorrow);
            console.log(auxDia3);
            console.log(auxDia4);
            console.log(auxDia5);
            _this.prevHoy = auxToday;
            _this.prevMan = auxTomorrow;
            _this.prevDia3 = auxDia3;
            _this.prevDia4 = auxDia4;
            _this.prevDia5 = auxDia5;
            _this.fotoHoy = _this.prevHoy[0].weather[0].icon;
            _this.fotoMan = _this.prevMan[4].weather[0].icon;
            _this.fotoDia3 = _this.prevDia3[4].weather[0].icon;
            _this.fotoDia4 = _this.prevDia4[4].weather[0].icon;
            _this.fotoDia5 = _this.prevDia5[4].weather[0].icon;
            _this.ordenarTemperatura();
        }, function (error) {
            console.error(error);
            // localStorage.clear();
            // sessionStorage.clear();
            // this._route.navigate(['/login']);
        });
    };
    GardenComponent.prototype.ordenarTemperatura = function () {
        var auxTemp = [];
        var auxNum = 0;
        for (var i = 0; i < this.prevMan.length; i++) {
            auxNum = this.prevMan[i].main.temp - 273;
            auxTemp.push(auxNum);
        }
        this.maxMan = Math.max.apply(Math, auxTemp);
        this.minMan = Math.min.apply(Math, auxTemp);
        this.colorMan = this.colorTemperatura(this.maxMan);
        auxTemp = [];
        auxNum = 0;
        for (var i = 0; i < this.prevDia3.length; i++) {
            auxNum = this.prevDia3[i].main.temp - 273;
            auxTemp.push(auxNum);
        }
        this.maxDia3 = Math.max.apply(Math, auxTemp);
        this.minDia3 = Math.min.apply(Math, auxTemp);
        this.colorDia3 = this.colorTemperatura(this.maxDia3);
        auxTemp = [];
        auxNum = 0;
        for (var i = 0; i < this.prevDia4.length; i++) {
            auxNum = this.prevDia4[i].main.temp - 273;
            auxTemp.push(auxNum);
        }
        this.maxDia4 = Math.max.apply(Math, auxTemp);
        this.minDia4 = Math.min.apply(Math, auxTemp);
        this.colorDia4 = this.colorTemperatura(this.maxDia4);
        auxTemp = [];
        auxNum = 0;
        for (var i = 0; i < this.prevDia5.length; i++) {
            auxNum = this.prevDia5[i].main.temp - 273;
            auxTemp.push(auxNum);
        }
        this.maxDia5 = Math.max.apply(Math, auxTemp);
        this.minDia5 = Math.min.apply(Math, auxTemp);
        this.colorDia5 = this.colorTemperatura(this.maxDia5);
        auxTemp = [];
        auxNum = 0;
    };
    GardenComponent.prototype.colorTemperatura = function (temp) {
        var color = "#fcfcfc";
        if (temp < 10) {
            color = "#99c0ff";
        }
        if (temp >= 10 && temp <= 20) {
            color = "#ffee99";
        }
        if (temp > 20 && temp <= 30) {
            color = "#ffe45e";
        }
        if (temp > 30) {
            color = "#ff9999";
        }
        return color;
    };
    GardenComponent.prototype.diaSemana = function (num) {
        var dia = "";
        if (num == -1) {
            num = 6;
        }
        switch (num % 7) {
            case 0:
                dia = "Lunes";
                break;
            case 1:
                dia = "Martes";
                break;
            case 2:
                dia = "Miércoles";
                break;
            case 3:
                dia = "Jueves";
                break;
            case 4:
                dia = "Viernes";
                break;
            case 5:
                dia = "Sabado";
                break;
            case 6:
                dia = "Domingo";
                break;
        }
        return dia;
    };
    GardenComponent.prototype.mostrarPrevision = function () {
        console.log(this.notVisible);
        if (this.notVisible == false) {
            this.notVisible = true;
        }
        else {
            this.notVisible = false;
        }
        console.log(this.notVisible);
    };
    GardenComponent.prototype.inicializar = function () {
        new iniciar("detail");
    };
    GardenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-garden',
            template: __webpack_require__("../../../../../src/app/components/gardens/garden/garden.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gardens/garden/garden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_garden_service__["a" /* GardenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], GardenComponent);
    return GardenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gardens/newgarden/newgarden.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <h1>Crear mi jardin</h1>\n\n  <section class=\"container\">\n  <canvas style=\"border:1px solid #000000\" id=\"myCanvas\" width=\"480\" height=\"360\"></canvas>\n  </section>\n\n<section class=\"container\">\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form  (ngSubmit)=\"newGarden()\" #forma=\"ngForm\" novalidate=\"\">\n        <div class=\"form-group  col-md-6\">\n          <label  for=\"title\">Título: </label>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"garden.title\" name=\"title\" id=\"title_garden\" required>\n        </div>\n        <div class=\"form-group col-md-6\"> \n          <label  for=\"length\">Largo: </label>\n          <input  class=\"form-control\" type=\"number\" [(ngModel)]=\"garden.length\" name=\"length\" id=\"length_garden\" required>\n          <label  for=\"width\">Ancho: </label>\n          <input  class=\"form-control\" type=\"number\" [(ngModel)]=\"garden.width\" name=\"width\" id=\"width_garden\" required>\n        </div>\n        <div class=\"form-group col-md-6\" ng-init=\"listarPaises()\">\n          <label for=\"countries\">País:</label>\n\n          <select2 id=\"pais\" [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.saveCountry($event)\">\n          </select2>\n\n        </div>\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"countries\">Introduce tu código postal:</label>\n            <input class=\"form-control\" type=\"text\" id=\"zipCode\" (valueChanged)=\"this.saveCity($event)\"/>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n            <label for=\"countries\">Ciudad:</label>\n            <span id=\"ciudad\"></span>\n        </div>\n\n       <!-- <div class=\"form-group\" ng-init=\"listarPaises()\">\n          <label for=\"countries\">País:</label>\n\n            <select2 [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.changeCities($event)\">\n            </select2>\n\n        </div>-->\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"name_plant\">Plantas</label>\n             <select class=\"form-control selectpicker\" multiple  id=\"name_plant\" [(ngModel)]=\"plant\" name=\"plant\" >\n               <option *ngFor=\"let plant of plants\" value=\"{{plant.id}}\">{{plant.commonName}}</option>\n             </select>\n          </div>\n        </div>\n\n\n\n        <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n        <button [routerLink]=\"['/detail']\" class=\"btn btn-outline-danger\">Cancelar</button>\n\n      </form>\n    </div>\n  </div>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gardens/newgarden/newgarden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGardenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__ = __webpack_require__("../../../../../src/app/classes/garden.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewGardenComponent = (function () {
    function NewGardenComponent(_gardenService, _plantService, _route, datePipe, _appComponent) {
        this._gardenService = _gardenService;
        this._plantService = _plantService;
        this._route = _route;
        this.datePipe = datePipe;
        this._appComponent = _appComponent;
        this.garden = new __WEBPACK_IMPORTED_MODULE_3__classes_garden_class__["a" /* Garden */]("");
        this.plants = [];
        this.countries = [];
        this.cities = [];
        this.zip = "";
    }
    NewGardenComponent.prototype.searchZip = function (event) {
        var _this = this;
        //aqui vamos cargando las posibles ciudades a elegir
        var input = document.querySelector("#zipCode");
        if (this.garden.countryCode != undefined) {
            if (input.value.length == 5) {
                this._gardenService.listCitiesByZip(this.garden.countryCode, input.value)
                    .subscribe(function (data) {
                    var sp = document.querySelector('#ciudad');
                    if (data.length > 0) {
                        _this.garden.latitude = data[0].lat.toFixed(2);
                        _this.garden.longitude = data[0].lng.toFixed(2);
                        if (data[0].adminName3 !== undefined) {
                            _this.garden.city = data[0].adminName3;
                            sp.innerHTML = data[0].adminName3;
                        }
                        else if (data[0].adminName2 !== undefined) {
                            _this.garden.city = data[0].adminName2;
                            sp.innerHTML = data[0].adminName2;
                        }
                        else if (data[0].adminName1 !== undefined) {
                            _this.garden.city = data[0].adminName1;
                            sp.innerHTML = data[0].adminName1;
                        }
                        else {
                            _this.garden.city = '';
                            sp.innerHTML = 'Código postal no encontrado';
                        }
                    }
                    else {
                        _this.garden.city = '';
                        sp.innerHTML = 'Código postal no encontrado';
                    }
                    input.value = '';
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    NewGardenComponent.prototype.listarPaises = function () {
        var _this = this;
        this._gardenService.listCoutries()
            .subscribe(function (data) {
            var aux = [];
            aux.push({ id: 0, text: "Selecciona un país" });
            for (var i = 0; i < data.geonames.length; i++) {
                aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
            }
            _this.countryData = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(aux);
                obs.complete();
            });
            _this.startCountry = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(_this.garden.countryCode);
                obs.complete();
            }).delay(1000);
        }, function (error) {
            console.log(error);
        });
    };
    NewGardenComponent.prototype.mostrarCiudad = function () {
        var aux = [];
        aux.push({ id: this.garden.city, text: this.garden.city });
        this.cityData = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            obs.next(aux);
            obs.complete();
        });
        if (this.garden.city != undefined)
            document.querySelector('#ciudad').innerHTML = this.garden.city;
    };
    NewGardenComponent.prototype.mostrar = function () {
        var _this = this;
        this._gardenService.details()
            .subscribe(function (data) {
            if (data != null) {
                _this._route.navigate(['/garden']);
            }
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
        });
    };
    NewGardenComponent.prototype.mostrarPlantas = function () {
        var _this = this;
        this._plantService.detailsAll(1, 10000)
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.plants.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    NewGardenComponent.prototype.ngOnInit = function () {
        this.mostrar();
        this.mostrarPlantas();
        this.listarPaises();
        this.mostrarCiudad();
    };
    //Envia los nuevos datos del jardin a  a GardenService para guardarlos
    NewGardenComponent.prototype.newGarden = function () {
        var _this = this;
        this._gardenService.insertGarden(this.garden)
            .subscribe(function (data) {
            _this.idNewJardin = data;
            var X = -20;
            var f = new Date();
            var fecha_actual;
            f.getDate();
            f.getMonth() + 1;
            f.getFullYear();
            fecha_actual = _this.datePipe.transform(f, 'yyyy-MM-dd');
            if (_this.plant !== undefined) {
                for (var cont = 0; cont < _this.plant.length; cont++) {
                    X = X - 1;
                    _this._gardenService.saveplants(_this.plant[cont], X, _this.idNewJardin, fecha_actual)
                        .subscribe(function (data) {
                    }, function (error) {
                        var v = JSON.parse(error._body);
                    });
                }
            }
            _this._appComponent.mensajeEmergente("Jardin Creado", "success", "garden");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    NewGardenComponent.prototype.saveCountry = function (e) {
        if (e.value != 0 && e.value !== undefined) {
            this.garden.countryCode = e.value;
        }
    };
    NewGardenComponent.prototype.saveCity = function (e) {
        if (e.value != 0 && e.value !== undefined) {
            this.garden.city = e.value;
            this.mostrarCiudad();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NewGardenComponent.prototype, "searchZip", null);
    NewGardenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newgarden',
            template: __webpack_require__("../../../../../src/app/components/gardens/newgarden/newgarden.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_garden_service__["a" /* GardenService */],
            __WEBPACK_IMPORTED_MODULE_4__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]])
    ], NewGardenComponent);
    return NewGardenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar.user{\n  z-index:10;\n  background-color: #299654 !important;\n}\n.navbar-light.bg-light.header{\n  z-index:9;\n}\n.navbar-header{\n  position: fixed;\n  top:0;\n  left:0;\n  right:0;\n  height: 50px;\n  background-color: #299654 ;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  z-index: 999999;\n  }\n  .navbar-header>div{\n    max-height: 46px;\n  }\n  .navbar-header>div>i{\n    font-size: 46px;\n    cursor: pointer;\n    color: #fff;\n    display:inline-block;\n  \ttransform:rotate(0);\n  \ttransition: transform 0.3s ease-out;\n  }\n\n  .navbar-header>img{\n    margin-left: 10px;\n    height: 30px;\n  }\n\n  .opened{\n    transform:rotate(90deg) !important;\n  }\n\n  #sidebar-wrapper {\n  top: 50px;\n  left: -200px;\n  width: 200px;\n  background-color: #299654;\n  color: white;\n  position: fixed;\n  height: 100%;\n  z-index: 999999;\n}\n#sidebar-wrapper>img{\n  display:none;\n}\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  list-style: none;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 50px;\n}\n.sidebar-nav li a {\n  color: white;\n  display: block;\n  text-decoration: none;\n}\n.sidebar-nav li a:hover {\n  background: rgba(255,255,255,0.25);\n  color: white;\n  text-decoration: none;\n}\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n#sidebar-wrapper.sidebar-toggle {\n  transition: all 0.3s ease-out;\n  margin-left: -200px;\n}\n\n\n/*HEADER USER*/\n.header{\n  background-color: #299654 !important;\n}\n.navbar-brand>img{\n  width: 140px;\n}\n#navbarSupportedContent > ul > li > a{\n  color: #fff !important;\n}\nbutton{\n  background: rgba(255, 255, 255, 0.5);\n}\n#navbarSupportedContent{\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n#navbarSupportedContent > ul{\n  margin-right: 0 !important;\n}\n\n@media (min-width: 768px) {\n  .sidebar-nav {\n    top: 60px;\n  }\n\n  .limited{\n    max-width: 1150px;\n    margin: 0 auto;\n  }\n  #sidebar-wrapper.sidebar-toggle {\n    transition: 0s;\n    left: 200px;\n    top: 0;\n  }\n  #sidebar-wrapper>img{\n    display: initial;\n    width: 140px;\n    margin: 0 auto;\n    margin-top: 15px;\n    margin-left: 20px;\n  }\n  .navbar-header{\n    display: none;\n\n    }\n}\n\n#photoMenu{\n  width: auto;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 991px) {\n  #photoMenu>div{\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Menú admin-->\n<nav *ngIf=\"this.userService.isAdmin\" class=\"navbar navbar-default\" role=\"navigation\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<div id=\"menu-toggle\" href=\"#\" class=\"navbar-toggle\" (click)=\"toggleMenu($event)\">\n\t\t\t\t\t<i class=\"material-icons\">view_headline</i>\n\t\t\t</div>\n\t\t\t<img src=\"https://gardiot.ovh/images/light2.png\" alt=\"Gardiot\">\n\t\t</div>\n\t\t<div id=\"sidebar-wrapper\" class=\"sidebar-toggle\">\n\t\t\t\t<img src=\"https://gardiot.ovh/images/light2.png\" alt=\"Gardiot\">\n\t\t\t<ul class=\"sidebar-nav\" (click)=\"toggleMenu()\">\n        <li *ngIf=\"this.userService.isAuthenticated\">\n          <a [routerLink]=\"['/admin/statistics']\" href=\"#\">Estadísticas</a>\n        </li>\n        <li *ngIf=\"this.userService.isAuthenticated\">\n          <a [routerLink]=\"['/admin/analytics']\" href=\"#\">Anatítica</a>\n        </li>\n\t\t\t\t<li *ngIf=\"this.userService.isAuthenticated\">\n\t\t\t\t\t<a [routerLink]=\"['admin/users']\" [queryParams]=\"{pag: 1}\" href=\"#\">Usuarios</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"this.userService.isAuthenticated\">\n\t\t\t\t\t<a [routerLink]=\"['/plants']\" [queryParams]=\"{pag: 1}\"  href=\"#\">Plantas</a>\n\t\t\t\t</li>\n        <li *ngIf=\"this.userService.isAuthenticated\">\n          <a [routerLink]=\"['/admin/treatments']\" [queryParams]=\"{pag: 1}\" href=\"#\">Tratamientos</a>\n        </li>\n\t\t\t\t<li *ngIf=\"this.userService.isAuthenticated\">\n\t\t\t\t\t<a [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: 1}\" href=\"#\">Productos</a>\n\t\t\t\t</li>\n        <li *ngIf=\"this.userService.isAuthenticated\">\n          <a [routerLink]=\"['/admin/feeds']\" [queryParams]=\"{pag: 1}\" href=\"#\">Consejos</a>\n        </li>\n\t\t\t\t<li *ngIf=\"this.userService.isAuthenticated\">\n\t\t\t\t\t<a [routerLink]=\"['/admin/profile']\" href=\"#\">Mi perfil</a>\n\t\t\t\t</li>\n        <li *ngIf=\"this.userService.isAuthenticated\">\n          <a [routerLink]=\"['/logout']\" href=\"#\">Log Out</a>\n        </li>\n\t\t  </ul>\n\t\t</div>\n  </div>\n</nav>\n\n<!-- Menú estándar -->\n<nav *ngIf=\"!this.userService.isAdmin\" class=\" navbar-light bg-light header\">\n\t<div class=\"navbar user navbar-expand-lg limited\">\n  <a [routerLink]=\"['/detail']\" class=\"navbar-brand\" href=\"#\"><img src=\"https://gardiot.ovh/images/light2.png\" alt=\"Gardiot\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"!this.userService.isAuthenticated\">\n        <a href=\"https://gardiot.ovh/symbiose/\" class=\"nav-link\" target=\"blank\">Symbiose</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!this.userService.isAuthenticated\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\">Log In</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!this.userService.isAuthenticated\">\n        <a [routerLink]=\"['/register']\" class=\"nav-link\" href=\"#\">Registrarse</a>\n      </li>\n\t\t\t<li class=\"nav-item\">\n        <a [routerLink]=\"['/help']\" class=\"nav-link\" href=\"#\">Ayuda</a>\n      </li>\n      <li class=\"nav-item\" id=\"photoMenu\" [routerLink]=\"['/profile']\" *ngIf=\"this.userService.isAuthenticated\">\n\t\t\t\t<div>\n\t\t\t  </div>\n\t\t\t\t<a [routerLink]=\"['/profile']\" class=\"nav-link\" href=\"#\">Mi perfil</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.userService.isAuthenticated\">\n        <a [routerLink]=\"['/logout']\" class=\"nav-link\" href=\"#\">Log Out</a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
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
    function HeaderComponent(userService, _ngZone) {
        this.userService = userService;
        this._ngZone = _ngZone;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__classes_user_class__["a" /* User */]("");
    }
    HeaderComponent.prototype.toggleMenu = function (e) {
        if (window.innerWidth < 768) {
            if (e !== undefined) {
                if (e.target.classList.contains('opened'))
                    e.target.classList.remove('opened');
                else
                    e.target.classList.add('opened');
                e.preventDefault();
            }
            var elem = document.getElementById("sidebar-wrapper");
            var left = window.getComputedStyle(elem, null).getPropertyValue("left");
            if (left == "200px") {
                document.getElementsByClassName("sidebar-toggle")[0].style.left = "-200px";
            }
            else if (left == "-200px") {
                document.getElementsByClassName("sidebar-toggle")[0].style.left = "200px";
            }
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.isUserAuthenticated()) {
            /*
            this.userService.details(this.user).subscribe(data=>{
              this.user.photo=data.photo;
              this.user.name=data.name;
              if(this.user.name == ""){
                this.user.name="Perfil";
              }
              if(this.user.photo!==undefined){
                document.querySelector('#photoMenu>div').setAttribute('style', `width: 40px; height: 40px;
                background-color: rgba(255, 255, 255, 0.5);
                background-image: url("${this.user.photo}");
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                border: 0.5px solid #000;
                border-radius: 200px;
                cursor: pointer;
                `);
              }
              else
                document.querySelector('#photoMenu>div').setAttribute('style', 'display: none');
            });*/
            this.userService.isAuthenticated = this.userService.isUserAuthenticated();
            this.userService.isUserAdmin().subscribe(function (data) {
                if (data) {
                    _this.userService.isAdmin = true;
                }
                else {
                    _this.userService.isAdmin = false;
                }
            }, function (error) {
                _this.userService.isAdmin = false;
            });
        }
        else {
            this.userService.isAdmin = false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//sidebar
if (window.location.toString().indexOf("admin") >= 0) {
    $(window).resize(function () {
        var path = $(this);
        var contW = path.width();
        if (contW >= 768) {
            document.getElementsByClassName("sidebar-toggle")[0].style.left = "200px";
        }
        else {
            document.getElementsByClassName("sidebar-toggle")[0].style.left = "-200px";
        }
    });
    $(document).ready(function () {
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });
        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
        });
    });
}


/***/ }),

/***/ "../../../../../src/app/components/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    color: #25b5aa;\n    font-size: 2em;\n\n}\n.demo-tab-group {\n  border: 1px solid #e8e8e8;\n\n}\n\n.demo-tab-content {\n\n}\n\nh1{\n  padding: 2%;\n}\n\nimg{\n  /* border-radius: 20%; */\n  border-radius: 26px 26px 26px 26px;\n  -moz-border-radius: 26px 26px 26px 26px;\n  -webkit-border-radius: 26px 26px 26px 26px;\n  border: 0px solid #eec019;\n\n}\np{\n  font-size: .8em;\n}\n.row{\n  /* padding: 0;\n  margin: 0; */\n}\n\nli{\n  font-size: .9em;\n  border-color: #25b5aa;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n    <section class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"well well-sm\">\n                <h1 class=\"text-center header\">Página de ayuda</h1>\n                  <fieldset>\n                    <mat-tab-group class=\"demo-tab-group\">\n                      <section class=\"demo-tab-content\">\n\n                        <mat-tab label=\"Introduccion\">\n                          <h3>Introducción</h3>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <p>En esta sección te contamos como disfrutar de nuestra aplicación.\n                                Navega por las direfentes pestañas para conocer cómo funciona cada una de\n                                nuestras secciones.\n                              </p>\n                              <img height=\"175\" width=\"150\" src=\"assets/images/help/logo.png\"\n                              alt=\"Descipción de la biblioteca Gardiot\">\n                            </div>\n                            <div class=\"col\">\n                              <ul class=\"list-group list-group-flush \">\n                                <li class=\"list-group-item\">Encuentra información sobre <strong>plantas</strong> y sus características.</li>\n                                <li class=\"list-group-item\">Diseña tu jardín con nuestra <strong>herramienta gráfica</strong>.</li>\n                                <li class=\"list-group-item\">Crea tareas de mantenimiento de forma automática en nuestro <strong>calendario</strong>.</li>\n                                <li class=\"list-group-item\">Recibirás <strong>consejos</strong> sobre cuidados sobre tu jardín.</li>\n                              </ul>\n                            </div>\n                          </div>\n                          <p>Si aun tienes dudas ponte en contacto con nosotros en\n                            <a href=\"https://gardiot.ovh/symbiose/contacto/\" target=\"blank\">Symbiose Gardiot</a>.</p>\n                        </mat-tab>\n\n                        <mat-tab label=\"Biblioteca\">\n                          <h3>¿Qué puedes encontrar en nuestra biblioteca?</h3>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <img height=\"auto\" width=\"500\" src=\"assets/images/help/biblioteca.jpg\"\n                              alt=\"Descipción de la biblioteca Gardiot\">\n                            </div>\n                            <div class=\"col\">\n                              <ul class=\"list-group list-group-flush \">\n                                <li class=\"list-group-item\">Encuentra información sobre <strong>plantas</strong> y sus características.</li>\n                                <li class=\"list-group-item\">También encontrarás información sobre cultivos.</li>\n                                <li class=\"list-group-item\">La biblioteca dispone de un <strong>buscador</strong> y además está en constante crecimiento.</li>\n                                <li class=\"list-group-item\">Iremos añadiendo nueva información muy a menudo. No olvides echarle un ojo de vez en cuando.</li>\n                                <li class=\"list-group-item\"><a [routerLink]=\"['/plants']\">Ir a la biblioteca</a></li>\n                              </ul>\n                            </div>\n                          </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Garden\">\n                          <h3>¿Cómo crear tu jardín?</h3>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <img height=\"auto\" width=\"500\" src=\"assets/images/help/jardin1.png\"\n                              alt=\"Descipción del jardin Gardiot\">\n                            </div>\n                            <div class=\"col\">\n                              <ul class=\"list-group list-group-flush \">\n                                <li class=\"list-group-item\">Introduce nombre y dimensiones del jardín.</li>\n                                <li class=\"list-group-item\">Introduce el país y código postal para la <strong>información meteorológica</strong>.</li>\n                                <li class=\"list-group-item\">Puedes añadir plantas mediante el formulario o hacerlo más tarde.</li>\n                                <li class=\"list-group-item\"><strong>Guarda</strong> el jardín.</li>\n                              </ul>\n                            </div>\n                          </div>\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <img height=\"auto\" width=\"500\" src=\"assets/images/help/jardin2.png\"\n                              alt=\"Descipción del jardin Gardiot\">\n                            </div>\n                            <div class=\"col\">\n                              <ul class=\"list-group list-group-flush \">\n                                <li class=\"list-group-item\">Selecciona las plantas en el lado izd.</li>\n                                <li class=\"list-group-item\">Pincha con el <strong>ratón</strong> y sin soltar arrastra hast el lienzo.</li>\n                                <li class=\"list-group-item\">Suelta la planta en el lienzo y esta se ajustará automáticamente.</li>\n                                <li class=\"list-group-item\">Repite la operación tantas veces quieres y <strong>guarda</strong> el jardín.</li>\n                              </ul>\n                            </div>\n                          </div>\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <img height=\"auto\" width=\"500\" src=\"assets/images/help/jardin3.png\"\n                              alt=\"Descipción del jardin Gardiot\">\n                            </div>\n                            <div class=\"col\">\n                              <ul class=\"list-group list-group-flush \">\n                                <li class=\"list-group-item\">Visualización del jardín.</li>\n                                <li class=\"list-group-item\">Datos <strong>meteorologicos</strong> y previsión de lluvias.</li>\n                                <li class=\"list-group-item\"><strong>Consejos</strong> y recomendaciones para cuidar tu jardín o huerto.</li>\n                                <li class=\"list-group-item\"><a [routerLink]=\"['/garden']\">Crea tu jardín</a></li>\n                              </ul>\n                            </div>\n                          </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Calendario\">\n                          <h3>¿Alguná tarea pendiente?</h3>\n                          <p> Según las necesidades de cada planta, se generan puntitos en el Calendario\n                            con las tareas qeu debes realizar en tu jardin.</p>\n                        </mat-tab>\n\n                        <mat-tab label=\"Protección de datos\">\n                          <h3>¿Qué hacemos con tus datos?</h3>\n                          <p>La LOPD nos obliga a mantener almacenados tus datos hasta dos años despues de\n                            darte de baja de nuestro servicio.</p>\n                          <p>En cuanto a los datos de geolocalización, los usamos para mostrarte\n                            el parte meteorológico en tu zona, no estás compartiendo tu ubicación personal</p>\n                          <p>En cualquier momento puedes desactivar tu cuenta</p>\n                          <p>Puedes ver más detalles sobre nuestra politica de privacidad en\n                            <a href=\"https://gardiot.ovh/symbiose/\" target=\"blank\">Symbiose</a>\n                          </p>\n\n                        </mat-tab>\n\n                        <mat-tab label=\"Api abierta\">\n                          <h3>API abierta</h3>\n                          <p>Ponemos a tu disposición nuestra API con toda la documentación sobre plantas\n                            A continuación te explicamos com funciona.</p>\n                        </mat-tab>\n\n                      </section>\n                    </mat-tab-group>\n                    <span class=\"col- text-center\">\n                        <button [routerLink]=\"['/detail']\" class=\"btn btn-primary btn-lg\">Volver</button>\n                    </span>\n\n                  </fieldset>\n            </div>\n        </div>\n    </section>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
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

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/components/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ "../../../../../src/app/components/manage/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container{\n  border-radius: 5px;\n  box-shadow: 5px 5px 20px #d3d3d3;\n  background-color: #299654;\n  padding: 10px;\n  max-width: 700px;\n}\n.form-group{\n  text-align: center;\n}\ninput{\n  background-color: #299654;\n  color: #fff;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  width: 80%;\n  max-width: 400px;\n  height: 40px;\n  font-size: 20px;\n  margin: 0 auto;\n}\n::placeholder{\n  color: #fff;\n}\n\n.form-group>button{\n  border: none;\n  background: none;\n  width: 80%;\n  max-width: 400px;\n}\n.form-group>a{\n  border: none;\n  background: none;\n  width: 80%;\n  max-width: 400px;\n}\n\n@media (min-width: 768px) {\n\n\n}*/\n\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button>img {\n\n  width: 100%;\n}\n.form button {\n  background: none;\n  border: none;\n  padding: 0;\n}\n\n.form a>img{\n  width: 100%;\n  margin-top: 10px;\n}\n.form a{\n  margin-top: 10px;\n  cursor: pointer;\n}\n.title{\n  display: block;\n  text-align: center;\n  color: #fff !important;\n  margin-bottom: 1em;\n\n}\n\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n}\n.fondo {\n  position:absolute;\n  z-index: -1;\n  top: 61px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #299654; /* fallback for old browsers */\n  background: linear-gradient(to bottom, #299654, #8DC26F);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<h1>Bienvenido otra vez!</h1>\n<div class=\"container main-container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n\n        </div>\n        <div class=\"form-group\">\n\n          <input [(ngModel)]=\"user.password\" name=\"password\"\n                type=\"password\"  id=\"exampleInputPassword1\" placeholder=\"Contraseña\" required>\n        </div>\n        <div class=\"form-group\">\n        <button [disabled]=\"!forma.valid\"\n              type=\"submit\"><img src=\"./assets/buttons/login.png\" alt=\"Iniciar sesión\"></button>\n        </div>\n        <button [routerLink] =\"['/resetPass']\" class=\"btn btn-info\" name=\"button\">Reset Pass</button>\n\n      </form>\n      <div class=\"form-group\">\n      <a href=\"{{this._loginService.apiURL}}auth/google\"><img src=\"./assets/buttons/logingoogle.png\" alt=\"Acceder con Google\"></a>\n    </div>\n    <div class=\"form-group\">\n      <a href=\"{{this._loginService.apiURL}}auth/facebook\"><img src=\"./assets/buttons/loginfacebook.png\" alt=\"Acceder con Facebook\"></a>\n    </div>\n    </div>\n  </div>\n</div>\n-->\n\n<div class=\"login-page\">\n<h2 class=\"title\">Bienvenido a Gardiot</h2>\n\n  <div class=\"form\">\n\n    <form class=\"login-form\" (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <input [(ngModel)]=\"user.id\" name=\"id\"\n            type=\"email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email\" required>\n      <input [(ngModel)]=\"user.password\" name=\"password\"\n            type=\"password\"  id=\"exampleInputPassword1\" placeholder=\"Contraseña\" required>\n      <button [disabled]=\"!forma.valid\"\n            type=\"submit\"><img src=\"./assets/buttons/login.png\" alt=\"Iniciar sesión\"></button>\n\n      <a href=\"{{this._loginService.apiURL}}auth/google\"><img src=\"./assets/buttons/logingoogle.png\" alt=\"Acceder con Google\"></a>\n\n        <a href=\"{{this._loginService.apiURL}}auth/facebook\"><img src=\"./assets/buttons/loginfacebook.png\" alt=\"Acceder con Facebook\"></a>\n\n      <p class=\"message\">¿Olvidaste tu contraseña? <a href=\"#\" [routerLink] =\"['/resetPass']\">Recordar contraseña</a></p>\n    </form>\n  </div>\n</div>\n\n<div class=\"fondo\">\n</div>\n"

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
                    localStorage.setItem('Par', '1');
                    _this._route.navigate(['/admin/statistics']);
                }
                else {
                    _this._loginService.isAdmin = false;
                    _this._route.navigate(['/detail']);
                }
            }, function (error) {
                _this._loginService.isAdmin = false;
                _this._route.navigate(['/detail']);
            });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/manage/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage/login.component.css")]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<!--\n<div class=\"container main-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Formulario de registro</h2>\n      <form (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n                type=\"password\" name=\"password\"\n                class=\"form-control\" [(ngModel)]=\"user.password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Repite el password</label>\n          <input\n                type=\"password\" name=\"password2\"\n                class=\"form-control\" [(ngModel)]=\"user.password2\" required>\n        </div>\n\n        <button [disabled]=\"!forma.valid\"\n        type=\"submit\" class=\"btn btn-primary\">Registrarse</button>\n        <a href=\"{{this._userService.apiURL}}auth/google\" class=\"btn btn-secondary\">Registro con Google</a>\n        <a href=\"{{this._userService.apiURL}}auth/facebook\" class=\"btn btn-success\">Registro con Facebook</a>\n      </form>\n    </div>\n  </div>\n</div>-->\n\n<div class=\"login-page\">\n<h2 class=\"title\">Únete a Gardiot</h2>\n\n  <div class=\"form\">\n\n    <form class=\"login-form\" (ngSubmit)=\"guardar()\" #forma=\"ngForm\">\n      <input [(ngModel)]=\"user.id\" name=\"id\"\n            type=\"email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email\" required>\n      <input [(ngModel)]=\"user.password\" name=\"password\"\n            type=\"password\"  id=\"exampleInputPassword1\" placeholder=\"Contraseña\" required>\n      <input [(ngModel)]=\"user.password2\" name=\"password2\"\n              type=\"password\"  id=\"exampleInputPassword2\" placeholder=\"Repetir contraseña\" required>\n      <button [disabled]=\"!forma.valid\"\n            type=\"submit\"><img src=\"./assets/buttons/register.png\" alt=\"Registrarse\"></button>\n\n      <a href=\"{{this._userService.apiURL}}auth/google\"><img src=\"./assets/buttons/logingoogle.png\" alt=\"Acceder con Google\"></a>\n\n        <a href=\"{{this._userService.apiURL}}auth/facebook\"><img src=\"./assets/buttons/loginfacebook.png\" alt=\"Acceder con Facebook\"></a>\n\n      <p class=\"message\">¿Ya tienes cuenta? <a href=\"#\" [routerLink] =\"['/login']\">Iniciar sesión</a></p>\n    </form>\n  </div>\n</div>\n\n<div class=\"fondo\">\n</div>\n"

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
            if (window.location.toString().indexOf("gardiot") >= 0) {
                _this._appComponent.mensajeEmergente("Te has registrado correctamente, confirma tu correo para poder iniciar sesión", "primary", "login");
            }
            else {
                _this._route.navigate(['/detail']);
            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/manage/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage/login.component.css")]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resend',
            template: __webpack_require__("../../../../../src/app/components/manage/resend.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ResendComponent);
    return ResendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <section class=\"container\">\n    <div class=\"row animated fadeIn fast\">\n      <div class=\"col-md-12\">\n        <form #f=\"ngForm\" (ngSubmit)=\"newPass(f)\">\n\n          <h3>Resetea tu contraseña</h3>\n          <div class=\"form-group\">\n            <label for=\"password_user\" name=\"first\">Introduce tu nueva contraseña</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Enter pass\" name=\"first\" ngModel required #first=\"ngModel\">\n            <!-- <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" id=\"password_user\" > -->\n          </div>\n          <div class=\"form-group\">\n            <label>Repite tu contraseña</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Enter pass again\" name=\"second\" ngModel required #second=\"ngModel\">\n            <!-- <input [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\" id=\"password2_user\" > -->\n          </div>\n          <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n          <button [routerLink]=\"['/reset-pass-back']\" class=\"btn btn-outline-danger\">Cancelar</button>\n        </form>\n      </div>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassBackComponent; });
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




var ResetPassBackComponent = (function () {
    function ResetPassBackComponent(_appComponent, router, _newPass) {
        this._appComponent = _appComponent;
        this.router = router;
        this._newPass = _newPass;
        this.token = "";
        this.password = "";
        this.password2 = "";
    }
    //Enviar los nuevos datos del usuario a UserService para guardarlos
    ResetPassBackComponent.prototype.newPass = function (f) {
        console.log("NEW PASS");
        var valor = f.value;
        var pass1 = valor.first;
        var pass2 = valor.second;
        if (pass1 == pass2) {
            console.log("Son iguales");
            this.password = pass1.toString();
            this.password2 = pass2.toString();
            console.log(this.password);
            console.log(this.password2);
            this._newPass.newPassword(this.password, this.password2, this.token)
                .subscribe(function (data) {
            });
            this._appComponent.mensajeEmergente("Contraseña restablecida", "primary", "login");
        }
        else {
            this._appComponent.mensajeEmergente("Introduce contraseñas iguales", "danger", "");
            console.log("Nos son igualess");
        }
    };
    ResetPassBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var data = params['key'];
            _this.token = data;
            // console.log("DATOS Token: "+this.token);
        });
    };
    ResetPassBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-pass-back',
            template: __webpack_require__("../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage/reset-pass-back/reset-pass-back.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ResetPassBackComponent);
    return ResetPassBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Resetear contraseña</h1>\n\n  <section>\n    <p>Estas a punto de resetear tu contraseña. Introduce tu email con el que te registraste y te enviaremos un link a tu correo electrónico para poder hacerlo.\n     Recuerda que sólo tienes unas pocas horas para ello.</p>\n  </section>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"resetPass(f)\">\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"first\" ngModel required #first=\"ngModel\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n    <button [routerLink]=\"['/profile']\" class=\"btn btn-outline-danger\">Cancelar</button>\n  </form>\n  <br>\n  <!-- <button [routerLink]=\"['/reset-pass-back']\"  class=\"btn btn-primary\">passBack</button> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage/reset-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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

// import { User } from "../../classes/user.class";


var ResetPassComponent = (function () {
    function ResetPassComponent(_appComponent, _resetPassword) {
        this._appComponent = _appComponent;
        this._resetPassword = _resetPassword;
        // user=new User("");
        this.apiURL = "https://gardiot.ovh/api/";
    }
    ResetPassComponent.prototype.resetPass = function (f) {
        var valor = f.value;
        var email = valor.first;
        // LLAMADA A LA API
        this._resetPassword.resetPassword(email)
            .subscribe(function (data) {
        });
        this._appComponent.mensajeEmergente("Mensaje enviado. Revisa tu correo", "primary", "login");
    };
    ResetPassComponent.prototype.ngOnInit = function () {
    };
    ResetPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-pass',
            template: __webpack_require__("../../../../../src/app/components/manage/reset-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage/reset-pass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://www.npmjs.com/package/ng2-paginate -->\n<!-- https://embed.plnkr.co/oyFWJe/ -->\n<!-- http://www.bentedder.com/create-a-pagination-component-in-angular-4/ -->\n<nav aria-label=\"Page navigation example\"  *ngIf=\"count > 0 && type==1\">\n  <ul class=\"pagination justify-content-end\">\n    <!-- <span>pagina{{ page }} , de un numero de items de {{ count }} y</span>\n    <span> hay {{ totalPages() }} paginas totales </span> -->\n    <li class=\"page-item\">\n      <button class=\"page-link\" [disabled]=\"page ==1 || loading\" (click)=\"onPrev()\" [routerLink]=\"['/plants']\" [queryParams]=\"{pag: previusPage()}\" >Previous</button>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" ><button class=\"page-link\" (click)=\"onPage(pageNum)\" [routerLink]=\"['/plants']\" [queryParams]=\"{pag: pageNum}\">{{pageNum}}</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link\"  (click)=\"onNext()\"  [routerLink]=\"['/plants']\" [queryParams]=\"{pag: nextPage()}\" [disabled]=\"lastPage() || loading\">Next</button>\n    </li>\n  </ul>\n</nav>\n\n\n\n<nav aria-label=\"Page navigation example\"  *ngIf=\"count > 0 && type==2\">\n  <ul class=\"pagination justify-content-end\">\n    <li class=\"page-item\">\n      <button class=\"page-link\" [disabled]=\"page ==1 || loading\" (click)=\"onPrev()\" [routerLink]=\"['/admin/treatments']\" [queryParams]=\"{pag: previusPage()}\" >Previous</button>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" ><button class=\"page-link\" (click)=\"onPage(pageNum)\" [routerLink]=\"['/admin/treatments']\" [queryParams]=\"{pag: pageNum}\">{{pageNum}}</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link\"  (click)=\"onNext()\"  [routerLink]=\"['/admin/treatments']\" [queryParams]=\"{pag: nextPage()}\" [disabled]=\"lastPage() || loading\">Next</button>\n    </li>\n  </ul>\n</nav>\n\n\n<nav aria-label=\"Page navigation example\"  *ngIf=\"count > 0  && type==3\">\n  <ul class=\"pagination justify-content-end\">\n    <li class=\"page-item\">\n      <button class=\"page-link\" [disabled]=\"page ==1 || loading\" (click)=\"onPrev()\" [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: previusPage()}\" >Previous</button>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" ><button class=\"page-link\" (click)=\"onPage(pageNum)\" [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: pageNum}\">{{pageNum}}</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link\"  (click)=\"onNext()\"  [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: nextPage()}\" [disabled]=\"lastPage() || loading\">Next</button>\n    </li>\n  </ul>\n</nav>\n\n\n<nav aria-label=\"Page navigation example\"  *ngIf=\"count > 0  && type==4\">\n  <ul class=\"pagination justify-content-end\">\n    <li class=\"page-item\">\n      <button class=\"page-link\" [disabled]=\"page ==1 || loading\" (click)=\"onPrev()\" [routerLink]=\"['/admin/users']\" [queryParams]=\"{pag: previusPage()}\" >Previous</button>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" ><button class=\"page-link\" (click)=\"onPage(pageNum)\" [routerLink]=\"['/admin/users']\" [queryParams]=\"{pag: pageNum}\">{{pageNum}}</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link\"  (click)=\"onNext()\"  [routerLink]=\"['/admin/users']\" [queryParams]=\"{pag: nextPage()}\" [disabled]=\"lastPage() || loading\">Next</button>\n    </li>\n  </ul>\n</nav>\n\n\n<nav aria-label=\"Page navigation example\"  *ngIf=\"count > 0  && type==5\">\n  <ul class=\"pagination justify-content-end\">\n    <li class=\"page-item\">\n      <button class=\"page-link\" [disabled]=\"page ==1 || loading\" (click)=\"onPrev()\" [routerLink]=\"['/admin/feeds']\" [queryParams]=\"{pag: previusPage()}\" >Previous</button>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" ><button class=\"page-link\" (click)=\"onPage(pageNum)\" [routerLink]=\"['/admin/feeds']\" [queryParams]=\"{pag: pageNum}\">{{pageNum}}</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link\"  (click)=\"onNext()\"  [routerLink]=\"['/admin/feeds']\" [queryParams]=\"{pag: nextPage()}\" [disabled]=\"lastPage() || loading\">Next</button>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
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


var PaginationComponent = (function () {
    function PaginationComponent() {
        this.plants = [];
        this.goPrev = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.goNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.goPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    PaginationComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function (next) {
        this.goNext.emit(next);
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    PaginationComponent.prototype.lastPage = function () {
        return this.perPage * this.page > this.count;
    };
    PaginationComponent.prototype.firstPage = function () {
        return this.page == 1;
    };
    PaginationComponent.prototype.nextPage = function () {
        return ((1 * this.page)) + 1;
    };
    PaginationComponent.prototype.previusPage = function () {
        return this.page - 1;
    };
    PaginationComponent.prototype.getPages = function () {
        var c = Math.ceil(this.count / this.perPage);
        var p = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        var pages = [];
        pages.push(p);
        var times = pagesToShow - 1;
        for (var i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.lastPage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "perPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pagesToShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PaginationComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/plants/editplant/editplant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/plants/editplant/editplant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.uploadPhoto()\" #forma=\"ngForm\">\n\t\t<h4>Datos Básicos</h4>\n\t  <div class=\"form-row\">\n\t    <div class=\"col\">\n\t      <input type=\"text\" [(ngModel)]=\"plant.commonName\" class=\"form-control\" name=\"commonName\" placeholder=\"Nombre común\" required>\n\t    </div>\n\t    <div class=\"col\">\n\t      <input type=\"text\" [(ngModel)]=\"plant.scientificName\" class=\"form-control\" name=\"scientificName\" placeholder=\"Nombre científico\" required>\n\t    </div>\n\t  </div>\n\t\t<br>\n\t\t<!-- https://codepen.io/Sebus059/pen/MwMQbP -->\n\t\t<div class=\"form-group\">\n\t\t\t  <label for=\"photo_plant\">Foto</label>\n\t\t\t<div class=\"upload-btn-wrapper form-control \">\n\t\t\t  <button class=\"bttn\">Selecionar imagen</button>\n\t\t\t  <input type=\"file\" name=\"myfile\" id=\"photo_plant\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t</div>\n\t  </div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"plant.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\"></textarea>\n\t\t</div>\n\t\t<h4>Datos Técnicos</h4>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"family_plant\">Familia</label>\n\t\t\t\t <select class=\"form-control\" id=\"family_plant\" [(ngModel)]=\"plant.family\" name=\"family\" required>\n\t\t\t\t\t <option *ngFor=\"let family of families\" value=\"{{family.id}}\">{{family.name}}</option>\n\t\t\t\t </select>\n\t    </div>\n\n\t    <div class=\"form-group col-md-6\">\n\t      <label for=\"resist_plant\">Resistencia</label>\n\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.diseaseResist\" name=\"diseaseResist\" id=\"resist_plant\" placeholder=\"Se mide en ºC\" required>\n\t    </div>\n  \t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"depth_plant\">Profundidad</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.depth\" name=\"depth\" id=\"depth_plant\" placeholder=\"Se mide en cm\" required >\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"distance_plant\">Distancia</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.distance\" name=\"distance\" id=\"distance_plant\" placeholder=\"Se mide en cm\" required>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"photo_plant\">Modelo 3D</label>\n\n\t\t\t<div class=\"upload-btn-wrapper form-control \">\n\t\t\t\t<button class=\"bttn\">Selecionar</button>\n\t\t\t\t<input type=\"file\" name=\"myfile\" id=\"photo_plant\" />\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"leaveType\">Tipo hoja</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.leaveType\" name=\"leaveType\" id=\"leaveType\" placeholder=\"Caduca o perenne\" required>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\n\t  </div>\n\n\t<h4>Calendario</h4>\n\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Plantación</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initplant\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]='plant.initDatePlant' name=\"initplant\" id=\"date_initplant\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_endplant\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDatePlant\" name=\"endplant\" id=\"date_endplant\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n  </fieldset>\n\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Floración</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initDateBloom\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.initDateBloom\" name=\"initDateBloom\" id=\"date_initDateBloom\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_finDateBloom\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDateBloom\" name=\"finDateBloom\" id=\"date_finDateBloom\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n\t  </fieldset>\n\t\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Cosecha</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initDateHarvest\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.initDateHarvest\" name=\"initDateHarvest\" id=\"date_initDateHarvest\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_finDateHarvest\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDateHarvest\" name=\"finDateHarvest\" id=\"date_finDateHarvest\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n\t  </fieldset>\n\t\t<button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n\t\t<button [routerLink] =\"['/plants']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/plants/editplant/editplant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditplantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_plant_class__ = __webpack_require__("../../../../../src/app/classes/plant.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditplantComponent = (function () {
    function EditplantComponent(_plantService, _appComponent, _ng2ImgMax, datePipe, _router, _route) {
        this._plantService = _plantService;
        this._appComponent = _appComponent;
        this._ng2ImgMax = _ng2ImgMax;
        this.datePipe = datePipe;
        this._router = _router;
        this._route = _route;
        this.plant = new __WEBPACK_IMPORTED_MODULE_2__classes_plant_class__["a" /* Plant */]();
        this.plants = [];
        this.families = [];
    }
    EditplantComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.plant);
        this._plantService.modify(this.plant)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "plant/" + _this.plant.id);
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditplantComponent.prototype.mostrarFamilias = function () {
        var _this = this;
        this._plantService.detailsAllFamilies()
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.families.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    EditplantComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var imgUpl = document.querySelector('#photo_plant');
        if (this.uploader.getNotUploadedItems().length) {
            console.log(imgUpl.files);
            var file = [];
            file.push(imgUpl.files[0]);
            file.forEach(function () {
            });
            this._ng2ImgMax.compress(file, 1.25).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                _this.uploader.uploadAll();
            }, function (error) { return console.log(error); });
        }
    };
    EditplantComponent.prototype.managePhoto = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this._plantService.apiURL + 'uploadPlant', itemAlias: 'photo' });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var url = response.split(" ");
            url = url[url.length - 1];
            url = url.split("\\");
            url = url[url.length - 1];
            _this.plant.photo = url;
            console.log('hola guapa');
            _this.guardar();
        };
    };
    EditplantComponent.prototype.mostrar = function (idPlanta) {
        var _this = this;
        this._plantService.details(idPlanta)
            .subscribe(function (data) {
            //this.plant.id=data[0].id;//El objeto no lleva el id
            _this.plant.id = idPlanta;
            console.log(_this.plant.id);
            _this.plant.scientificName = data[0].scientificName;
            _this.plant.commonName = data[0].commonName;
            _this.plant.description = data[0].description;
            _this.plant.family = data[0].family;
            _this.plant.depth = data[0].depth;
            _this.plant.distance = data[0].distance;
            _this.plant.diseaseResist = data[0].diseaseResist;
            _this.plant.initDatePlant = _this.datePipe.transform(data[0].initDatePlant, 'yyyy-MM-dd');
            _this.plant.finDatePlant = _this.datePipe.transform(data[0].finDatePlant, 'yyyy-MM-dd');
            _this.plant.initDateBloom = _this.datePipe.transform(data[0].initDateBloom, 'yyyy-MM-dd');
            _this.plant.finDateBloom = _this.datePipe.transform(data[0].finDateBloom, 'yyyy-MM-dd');
            _this.plant.initDateHarvest = _this.datePipe.transform(data[0].initDateHarvest, 'yyyy-MM-dd');
            _this.plant.finDateHarvest = _this.datePipe.transform(data[0].finDateHarvest, 'yyyy-MM-dd');
            // this.plant.initDatePlant=data[0].initDatePlant.substring(0, 10);
            _this.plant.leaveType = data[0].leaveType;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            //  this._route.navigate(['/login']);
        });
    };
    EditplantComponent.prototype.formatoFecha = function (fecha) {
        var fech = new Date(fecha);
        // fech.setDate(fech.getDate()+1);
        var anno = fech.getFullYear();
        console.log(anno);
        var mes = fech.getMonth() + 1;
        console.log(mes);
        var dia = fech.getDate();
        console.log(dia);
        var tsetDob = this.datePipe.transform(fecha, 'yyyy-MM-dd');
        //var fechaFinal =dia+'/'+mes+'/'+anno;
        var fechaFinal = anno + '-' + mes + '-' + dia;
        var fechaGuay = new Date(anno + '/' + mes + '/' + dia);
        console.log(tsetDob);
        return (tsetDob);
        //return fech;
    };
    EditplantComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.plant = new __WEBPACK_IMPORTED_MODULE_2__classes_plant_class__["a" /* Plant */](params['id']);
                _this.mostrar(_this.plant.id);
            }
            else {
                _this._route.navigate(['/plants']);
            }
        });
    };
    EditplantComponent.prototype.ngOnInit = function () {
        this.getID();
        this.mostrarFamilias();
        this.managePhoto();
    };
    EditplantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editplant',
            template: __webpack_require__("../../../../../src/app/components/plants/editplant/editplant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/plants/editplant/editplant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__["b" /* Ng2ImgMaxService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], EditplantComponent);
    return EditplantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/plants/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"evolver\">\n  <div class=\"container main-container\">\n    <h1>Biblioteca</h1>\n    <div class=\"wrap\">\n\n  \t\t\t\t<form (ngSubmit)=\"this.searchcontent(1,6)\" class=\"form-row\" #forma=\"ngForm\" >\n  \t\t\t\t\t<article class=\"form-group col-md-4\">\n  \t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"plant.commonName\" class=\"form-control\" name=\"commonName\" placeholder=\"Buscar en gardiot\">\n  \t\t\t    </article>\n  \t\t\t\t\t <!-- <article class=\"form-group col-md-2\">\n  \t\t\t\t\t\t <select class=\"form-control\"  name=\"family\">\n  \t\t\t\t\t\t\t <option  value=\"nombre\">nombre</option>\n  \t\t\t\t\t\t\t <option  value=\"familia\">familia</option>\n  \t\t\t\t\t\t </select>\n  \t\t\t\t\t</article>\n  \t\t\t\t\t<article class=\"form-group col-md-2\">\n  \t\t\t\t\t\t <select class=\"form-control\"  name=\"order\">\n  \t\t\t\t\t\t\t <option  value=\"ASC\">A-Z</option>\n  \t\t\t\t\t\t\t <option  value=\"DES\">Z-A</option>\n  \t\t\t\t\t\t </select>\n  \t\t\t\t\t</article> -->\n  \t\t\t\t\t<article class=\"form-group col-md-2\">\n  \t\t\t\t\t\t<button class=\"btn btn-default\" type=\"submit\">Buscar</button>\n  \t\t\t\t\t</article>\n            <article class=\"form-group col-md-2\">\n              <button *ngIf=\"this.user.isAdmin\" [routerLink]=\"['/newplant']\" class=\"btn btn-outline-primary\">Nueva planta</button>\n            </article>\n  \t\t\t\t</form>\n\n    <section class=\"card-columns\">\n        <div *ngFor=\"let plant of plants\" class=\"card\"  style=\"width: 18rem;\" >\n          <img class=\"card-img-top\" src=\"{{plant.photo}}\" alt=\"no sale la imagen\" width=\"100px\" height=\"200px\" [routerLink]=\"['/plant', plant.id]\">\n          <div class=\"card-body\" >\n            <h4>{{plant.commonName}} </h4>\n            <button *ngIf=\"this.user.isAdmin\" [routerLink]=\"['/editplant/',plant.id]\"  class=\"btn btn-outline-primary\">Modificar</button>\n            <button *ngIf=\"this.user.isAdmin\" [routerLink]=\"['/admin/newtreatmentsplants/',plant.id]\"  class=\"btn btn-outline-secondary\">Tratamientos</button>\n            <button *ngIf=\"this.user.isAdmin\" (click)=\"deleteplant(plant.id)\" [routerLink]=\"['/plants']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Eliminar</button>\n          </div>\n        </div>\n    </section>\n  \t<app-pagination [count]=\"this.numeroItems\" [type]=\"1\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n  \t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/plants/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_plant_class__ = __webpack_require__("../../../../../src/app/classes/plant.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    function LibraryComponent(_plantService, _route, _appComponent, activatedRoute, user) {
        this._plantService = _plantService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.plants = [];
        this.plant = new __WEBPACK_IMPORTED_MODULE_4__classes_plant_class__["a" /* Plant */]();
        this.paginaActual = 1;
        this.elementosPorPagina = 6;
        this.estado = false; // false es listado y true buscador
    }
    LibraryComponent.prototype.mostrar = function () {
        var _this = this;
        if (this.estado == false) {
            this._plantService.detailsAll(this.paginaActual, this.elementosPorPagina)
                .subscribe(function (data) {
                _this.plants = [];
                for (var key$ in data) {
                    _this.plants.push(data[key$]);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            this.searchcontent(this.paginaActual, this.elementosPorPagina);
        }
    };
    LibraryComponent.prototype.searchcontent = function (page, items) {
        var _this = this;
        this._plantService.searchAll(this.plant, page, items)
            .subscribe(function (data) {
            if (data[0] != undefined) {
                _this.plants = [];
                _this.numeroItems = data[0].num;
                if (_this.estado == false) {
                    _this.paginaActual = 1;
                    _this.estado = true;
                }
                for (var key$ in data) {
                    _this.plants.push(data[key$]);
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    LibraryComponent.prototype.deleteplant = function (idPlant) {
        var _this = this;
        this._plantService.deletePlant(idPlant)
            .subscribe(function (data) {
            _this.ActualizarPagina();
        }, function (error) {
            console.error(error);
        });
    };
    LibraryComponent.prototype.getitems = function () {
        var _this = this;
        this._plantService.getNumberItems()
            .subscribe(function (data) {
            if (_this.estado == false) {
                _this.numeroItems = data[0].NUMPLANTAS;
                console.log(_this.numeroItems);
            }
            _this.mostrar();
        }, function (error) {
            console.error(error);
        });
    };
    LibraryComponent.prototype.ActualizarPagina = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.paginaActual = params['pag'];
            _this.getitems();
        });
    };
    //actualmente no se usa
    LibraryComponent.prototype.ActualizarPagina2 = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['pag'] != null) {
                _this.paginaActual = params['pag'];
            }
            else {
                _this._route.navigate(['/library/1']);
            }
            _this.getitems();
        });
    };
    LibraryComponent.prototype.comprobaciones = function () {
        var _this = this;
        if (this.user.isUserAuthenticated()) {
            this.user.isAuthenticated = this.user.isUserAuthenticated();
            this.user.isUserAdmin().subscribe(function (data) {
                if (data) {
                    _this.user.isAdmin = true;
                    document.querySelector('.evolver').classList.add('vistaAdmin');
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
    LibraryComponent.prototype.ngOnInit = function () {
        this.comprobaciones();
        this.ActualizarPagina();
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-library',
            template: __webpack_require__("../../../../../src/app/components/plants/library/library.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/plants/newplant/newplant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/plants/newplant/newplant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.uploadPhoto()\" #forma=\"ngForm\">\n\t\t<h4>Datos Básicos</h4>\n\t  <div class=\"form-row\">\n\t    <div class=\"col\">\n\t      <input type=\"text\" [(ngModel)]=\"plant.commonName\" class=\"form-control\" name=\"commonName\" placeholder=\"Nombre común\" required>\n\t    </div>\n\t    <div class=\"col\">\n\t      <input type=\"text\" [(ngModel)]=\"plant.scientificName\" class=\"form-control\" name=\"scientificName\" placeholder=\"Nombre científico\" required>\n\t    </div>\n\t  </div>\n\t\t<br>\n\t\t<div class=\"form-group\">\n\t\t\t  <label for=\"photo_plant\">Foto</label>\n\t\t\t<div class=\"upload-btn-wrapper form-control \">\n\t\t\t  <button class=\"bttn\">Selecionar imagen</button>\n\t\t\t  <input type=\"file\" name=\"myfile\" id=\"photo_plant\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t</div>\n\t  </div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"plant.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\"></textarea>\n\t\t</div>\n\t\t<h4>Datos Técnicos</h4>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"family_plant\">Familia</label>\n\t\t\t\t <select class=\"form-control\" id=\"family_plant\" [(ngModel)]=\"plant.family\" name=\"family\" required>\n\t\t\t\t\t <option *ngFor=\"let family of families\" value=\"{{family.id}}\">{{family.name}}</option>\n\t\t\t\t </select>\n\t    </div>\n\n\t    <div class=\"form-group col-md-6\">\n\t      <label for=\"resist_plant\">Resistencia</label>\n\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.diseaseResist\" name=\"diseaseResist\" id=\"resist_plant\" placeholder=\"Se mide en ºC\" required>\n\t    </div>\n  \t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"depth_plant\">Profundidad</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.depth\" name=\"depth\" id=\"depth_plant\" placeholder=\"Se mide en cm\" required >\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"distance_plant\">Distancia</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.distance\" name=\"distance\" id=\"distance_plant\" placeholder=\"Se mide en cm\" required>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"photo_plant\">Modelo 3D</label>\n\n\t\t\t<div class=\"upload-btn-wrapper form-control \">\n\t\t\t\t<button class=\"bttn\">Selecionar</button>\n\t\t\t\t<input type=\"file\" name=\"myfile\" id=\"photo_plant\" />\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"leaveType\">Tipo hoja</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"plant.leaveType\" name=\"leaveType\" id=\"leaveType\" placeholder=\"Caduca o perenne\" required>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\n\t  </div>\n\n\t<h4>Calendario</h4>\n\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Plantación</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initplant\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.initDatePlant\" name=\"initplant\" id=\"date_initplant\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_endplant\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDatePlant\" name=\"endplant\" id=\"date_endplant\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n  </fieldset>\n\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Floración</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initDateBloom\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.initDateBloom\" name=\"initDateBloom\" id=\"date_initDateBloom\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_finDateBloom\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDateBloom\" name=\"finDateBloom\" id=\"date_finDateBloom\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n\t  </fieldset>\n\t\t<fieldset class=\"form-group\">\n\t    <div class=\"row\">\n\t      <legend class=\"col-md-6 mb-3\">Cosecha</legend>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initDateHarvest\">Inicio</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.initDateHarvest\" name=\"initDateHarvest\" id=\"date_initDateHarvest\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_finDateHarvest\">Fin</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"plant.finDateHarvest\" name=\"finDateHarvest\" id=\"date_finDateHarvest\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t    </div>\n\t  </fieldset>\n\t\t<!-- <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n\t\t<button [routerLink] =\"['/library']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button> -->\n\t</form>\n\t<!-- <form (ngSubmit)=\"this.uploadPhoto()\"  method=\"post\">\n\t\t<h4>Tratamiento</h4>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"treatment_plant\">Tratamiento</label>\n\t\t\t\t <select class=\"form-control\" id=\"treatment_plant\" [(ngModel)]=\"treatmentPlant.plant\"  required>\n\t\t\t\t\t <option *ngFor=\"let treatment of treatments\" value=\"{{treatment.id}}\">{{treatment.name}}</option>\n\t\t\t\t </select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"frequency_treatmentPlant\">Frecuencia</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.frequency\" name=\"frequency\" id=\"frequency_treatmentPlant\" placeholder=\"Se mide en días\">\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"date_initDateHarvest\">Inicio</label>\n\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.initDate\" name=\"initDateHarvest\" id=\"date_initDateHarvest\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"date_finDateHarvest\">Fin</label>\n\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.finalDate\" name=\"finDateHarvest\" id=\"date_finDateHarvest\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Añadir tratamiento</button>\n\t\t\t</div>\n\t\t</div>\n\t</form> -->\n<button  (click)=\"this.uploadPhoto()\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n<button [routerLink] =\"['/library']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/plants/newplant/newplant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewplantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_plant_class__ = __webpack_require__("../../../../../src/app/classes/plant.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Treatment } from "../../../classes/treatment.class";
// import { TreatmentPlant } from "../../../classes/treatmentPlant.class";
// import { TreatmentService } from "../../../services/treatment.service";
var NewplantComponent = (function () {
    function NewplantComponent(_plantService, 
        // private _treatmentService:TreatmentService,
        _appComponent, _ng2ImgMax) {
        this._plantService = _plantService;
        this._appComponent = _appComponent;
        this._ng2ImgMax = _ng2ImgMax;
        this.plant = new __WEBPACK_IMPORTED_MODULE_2__classes_plant_class__["a" /* Plant */]();
        // treatmentPlant=new TreatmentPlant();
        this.plants = [];
        this.families = [];
    }
    NewplantComponent.prototype.guardar = function () {
        var _this = this;
        this._plantService.save(this.plant)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "plants?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    NewplantComponent.prototype.mostrarFamilias = function () {
        var _this = this;
        this._plantService.detailsAllFamilies()
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.families.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    // mostrarTratamientos(){
    //   this._treatmentService.detailsAll(1,10000)
    //       .subscribe(data=>{
    //                       console.log(data);
    //         for(let key$ in data){
    //           this.treatments.push(data[key$]);
    //         }
    //       },
    //     error => {
    //       console.error(error);
    //     });
    //   }
    NewplantComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var imgUpl = document.querySelector('#photo_plant');
        if (this.uploader.getNotUploadedItems().length) {
            console.log(imgUpl.files);
            var file_1 = [];
            file_1.push(imgUpl.files[0]);
            file_1.forEach(function () {
                console.log(file_1);
            });
            this._ng2ImgMax.compress(file_1, 1.25).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                _this.uploader.uploadAll();
            }, function (error) { return console.log(error); });
        }
    };
    NewplantComponent.prototype.managePhoto = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this._plantService.apiURL + 'uploadPlant', itemAlias: 'photo' });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var url = response.split(" ");
            url = url[url.length - 1];
            url = url.split("\\");
            url = url[url.length - 1];
            _this.plant.photo = url;
            _this.guardar();
        };
    };
    NewplantComponent.prototype.ngOnInit = function () {
        this.mostrarFamilias();
        // this.mostrarTratamientos();
        this.managePhoto();
    };
    NewplantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newplant',
            template: __webpack_require__("../../../../../src/app/components/plants/newplant/newplant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/plants/newplant/newplant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_img_max__["b" /* Ng2ImgMaxService */]])
    ], NewplantComponent);
    return NewplantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/plants/plant/plant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iconplant{\n  max-width: 25px;\n  max-height: 25px;\n}\nsection{\n  margin-top: 2.5%;\n  padding: 2%;\n}\narticle{\n  margin-top: 1%;\n  padding: 2%;\n}\ndiv{\n  margin-top: 0;\n}\n\n\n/* img{\n  max-width: 420px;\n  max-height: 400px;\n} */\n\n/* img{\n  width: 300px;\n  height: 300px;\n} */\ndl {\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0\n}\ndt {\n  float: left;\n  width: 50%;\n  /* adjust the width; make sure the total of both is 100% */\n  padding: 0;\n  margin: 0\n}\ndd{\n  float: left;\n  width: 50%;\n  padding: 0;\n  margin: 0;\n}\nh1{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/plants/plant/plant.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container vistaAdmin\" >\n    <h1>{{plant.commonName}}</h1>\n    <div class=\"row\"> -->\n      <!-- <section class=\"card\">\n        <button [routerLink] =\"['/plants']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-primary\" name=\"button\">Volver a Biblioteca</button>\n        <h2>Descripción</h2>\n        <p *ngIf=\"plant.description !=undefined\">{{plant.description}}</p>\n      </section> -->\n    <!-- </div>\n    <div class=\"row\">\n      <div class=\"col\"> -->\n        <!--delante de la url https://gardiot.ovh/ -->\n\n        <!-- <section class=\"card\">\n          <img *ngIf=\"plant.photo !=undefined\" src=\"{{plant.photo}}\" alt=\"puerros\">\n          <dl>\n            <dt *ngIf=\"plant.commonName !=undefined\">Nombre común</dt>\n            <dd *ngIf=\"plant.commonName !=undefined\">{{plant.commonName}}</dd>\n            <dt *ngIf=\"plant.scientificName !=undefined\">Nombre científico</dt>\n            <dd *ngIf=\"plant.scientificName !=undefined\">{{plant.scientificName}}</dd>\n            <dt *ngIf=\"plant.family !=undefined\">Familia</dt>\n            <dd *ngIf=\"plant.family !=undefined\"> {{plant.family}}</dd>\n          </dl>\n        </section>\n      </div>\n      <div class=\"col\">\n        <section class=\"card\">\n            <p *ngIf=\"plant.depth !=undefined\">\n              <img *ngIf=\"plant.depth !=undefined\" class=\"iconplant\"src=\"assets/images/icon/descargar.png\" alt=\"Profundidad de siembra\">\n              Profundidad de siembra <strong>{{plant.depth}} cm</strong>\n            </p>\n            <p *ngIf=\"plant.distance !=undefined\">\n              <img *ngIf=\"plant.distance !=undefined\" class=\"iconplant\"src=\"assets/images/icon/separacion.png\" alt=\"Separación de siembra\">\n              Distancia entre plantas <strong>{{plant.distance}} cm</strong>\n            </p>\n            <p *ngIf=\"plant.diseaseResist !=undefined\">\n              <img *ngIf=\"plant.diseaseResist !=undefined\" class=\"iconplant\" src=\"assets/images/icon/hielo.png\" alt=\"Hielo\">\n              Resistencia al frío <strong>{{plant.diseaseResist}}</strong>\n            </p>\n            <p *ngIf=\"plant.leaveType !=undefined\">\n              <img *ngIf=\"plant.leaveType !=undefined\" class=\"iconplant\"src=\"assets/images/icon/hoja.png\" alt=\"Hoja\">\n              Tipo de hoja <strong>{{plant.leaveType}}</strong>\n            </p>\n        </section>\n      </div>\n      <div class=\"col\">\n        <section class=\"card\">\n          <p *ngIf=\"iniSiembra !=undefined && finSiembra !=undefined\">\n            <img *ngIf=\"iniSiembra !=undefined && finSiembra !=undefined\" class=\"iconplant\"src=\"assets/images/icon/siembra.png\" alt=\"Siembra\">\n            Se siembra entre <strong>{{iniSiembra}}</strong> y <strong>{{finSiembra}}</strong>\n          </p>\n          <p *ngIf=\"iniFlores !=undefined && finFlores !=undefined\">\n            <img *ngIf=\"iniFlores !=undefined && finFlores !=undefined\" class=\"iconplant\"src=\"assets/images/icon/girasol.png\" alt=\"Floración\">\n            Florece entre <strong>{{iniFlores}}</strong> y <strong>{{finFlores}}</strong>\n          </p>\n          <p *ngIf=\"iniRecolectar !=undefined && finRecolectar !=undefined\">\n            <img *ngIf=\"iniRecolectar !=undefined && finRecolectar !=undefined\" class=\"iconplant\"src=\"assets/images/icon/cosecha.png\" alt=\"Floración\">\n            Se recolecta entre <strong>{{iniRecolectar}}</strong> y <strong>{{finRecolectar}}</strong>\n          </p>\n        </section>\n      </div>\n    </div>\n\n    <section>\n      <p *ngIf=\"plant.description !=undefined\">{{plant.description}}</p>\n    </section>\n\n\n\n</div> -->\n\n\n<section class=\"container vistaAdmin\">\n  <h1>{{plant.commonName}}</h1>\n  <article class=\"row\">\n    <div class=\"col\">\n      <img *ngIf=\"plant.photo !=undefined\" src=\"{{plant.photo}}\" alt=\"puerros\" class=\"rounded img-fluid\" >\n    </div>\n    <div class=\"col\">\n      <ul class=\"list-group list-group-flush\">\n        <li *ngIf=\"plant.depth !=undefined\" class=\"list-group-item\"><img class=\"iconplant\"src=\"assets/images/icon/descargar.png\" alt=\"Profundidad de siembra\">Profundidad de siembra {{plant.depth}} cm</li>\n        <li *ngIf=\"plant.distance !=undefined\" class=\"list-group-item\"><img class=\"iconplant\"src=\"assets/images/icon/separacion.png\" alt=\"Separación de siembra\">Distancia entre plantas {{plant.distance}} cm</li>\n        <li *ngIf=\"plant.diseaseResist !=undefined\" class=\"list-group-item\"><img class=\"iconplant\" src=\"assets/images/icon/hielo.png\" alt=\"Hielo\">Resistencia al frío {{plant.diseaseResist}}</li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <ul class=\"list-group list-group-flush \">\n        <li *ngIf=\"iniSiembra !=undefined && finSiembra !=undefined\" class=\"list-group-item\"><img class=\"iconplant\"src=\"assets/images/icon/siembra.png\" alt=\"Siembra\">Se siembra entre <strong>{{iniSiembra}}</strong> y <strong>{{finSiembra}}</strong></li>\n        <li *ngIf=\"iniFlores !=undefined && finFlores !=undefined\" class=\"list-group-item\"><img class=\"iconplant\"src=\"assets/images/icon/girasol.png\" alt=\"Floración\">Florece entre <strong>{{iniFlores}}</strong> y <strong>{{finFlores}}</strong></li>\n        <li *ngIf=\"iniRecolectar !=undefined && finRecolectar !=undefined\" class=\"list-group-item\">  <img class=\"iconplant\"src=\"assets/images/icon/cosecha.png\" alt=\"Floración\">  Se recolecta entre <strong>{{iniRecolectar}}</strong> y <strong>{{finRecolectar}}</strong></li>\n      </ul>\n    </div>\n  </article>\n  <!-- <article class=\"row\">\n      <ul class=\"list-inline \">\n        <li *ngIf=\"iniSiembra !=undefined && finSiembra !=undefined\" class=\"list-inline-item\"><img class=\"iconplant\"src=\"assets/images/icon/siembra.png\" alt=\"Siembra\">Se siembra entre <strong>{{iniSiembra}}</strong> y <strong>{{finSiembra}}</strong></li>\n        <li *ngIf=\"iniFlores !=undefined && finFlores !=undefined\" class=\"list-inline-item\"><img class=\"iconplant\"src=\"assets/images/icon/girasol.png\" alt=\"Floración\">Florece entre <strong>{{iniFlores}}</strong> y <strong>{{finFlores}}</strong></li>\n        <li *ngIf=\"iniRecolectar !=undefined && finRecolectar !=undefined\" class=\"list-inline-item\">  <img class=\"iconplant\"src=\"assets/images/icon/cosecha.png\" alt=\"Floración\">  Se recolecta entre <strong>{{iniRecolectar}}</strong> y <strong>{{finRecolectar}}</strong></li>\n      </ul>\n  </article> -->\n  <article class=\"row\">\n    <div class=\"col\">\n    <ul class=\" list-group list-group-flush\">\n      <li *ngIf=\"plant.commonName !=undefined\" class=\"list-group-item\">Nombre común: {{plant.commonName}}</li>\n      <li *ngIf=\"plant.scientificName !=undefined\" class=\"list-group-item\">Nombre científico: {{plant.scientificName}}</li>\n      <li *ngIf=\"plant.family !=undefined\" class=\"list-group-item\">Familia: {{plant.family}}</li>\n    </ul>\n    </div>\n  </article>\n\n  <article class=\"row\">\n    <p *ngIf=\"plant.description !=undefined\">{{plant.description}}</p>\n  </article>\n\n  <article>\n    <h2>Tratamientos</h2>\n      <section *ngFor=\"let treatment of treatments\">\n        <img *ngIf=\"treatment.icon !=undefined\" class=\"iconplant\" src=\"{{treatment.icon}}\" alt=\"Tratamiento\">\n        <h5 *ngIf=\"treatment.name !=undefined\">{{treatment.name}}</h5>\n        <p *ngIf=\"treatment.description !=undefined\">{{treatment.description}}</p>\n        <h6 *ngIf=\"productTreatments !=undefined\">Productos</h6>\n        <ul *ngFor=\"let producttreatment of productTreatments\">\n          <li class=\"list-group-item\" *ngIf = \"treatment.id == producttreatment.treatment\">{{producttreatment.name}}</li>\n        </ul>\n      </section>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/plants/plant/plant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_plant_class__ = __webpack_require__("../../../../../src/app/classes/plant.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_plant_service__ = __webpack_require__("../../../../../src/app/services/plant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_treatmentplant_service__ = __webpack_require__("../../../../../src/app/services/treatmentplant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_treatment_class__ = __webpack_require__("../../../../../src/app/classes/treatment.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_product_class__ = __webpack_require__("../../../../../src/app/classes/product.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_producttreatment_class__ = __webpack_require__("../../../../../src/app/classes/producttreatment.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlantComponent = (function () {
    function PlantComponent(_plantService, _treatmentPlantService, _router, user, _route) {
        this._plantService = _plantService;
        this._treatmentPlantService = _treatmentPlantService;
        this._router = _router;
        this.user = user;
        this._route = _route;
        this.plant = new __WEBPACK_IMPORTED_MODULE_1__classes_plant_class__["a" /* Plant */]();
        this.product = new __WEBPACK_IMPORTED_MODULE_7__classes_product_class__["a" /* Product */]();
        this.treatment = new __WEBPACK_IMPORTED_MODULE_6__classes_treatment_class__["a" /* Treatment */]();
        this.treatments = [];
        this.products = [];
        this.productTreatments = [];
        this.producttreatment = new __WEBPACK_IMPORTED_MODULE_8__classes_producttreatment_class__["a" /* ProductTreatment */]();
    }
    PlantComponent.prototype.mostrar = function (numplant) {
        var _this = this;
        this._plantService.details(numplant)
            .subscribe(function (data) {
            _this.plant.id = data[0].id;
            _this.plant.commonName = data[0].commonName;
            _this.plant.scientificName = data[0].scientificName;
            _this.plant.description = data[0].description;
            _this.plant.photo = data[0].photo;
            // this.plant.photo=data[0].3DModel;
            _this.plant.family = data[0].name;
            _this.plant.depth = data[0].depth;
            _this.plant.distance = data[0].distance;
            _this.plant.diseaseResist = data[0].diseaseResist;
            //this.plant.initDatePlant=data[0].initDatePlant;
            _this.iniSiembra = _this.dameMes(data[0].initDatePlant);
            //this.plant.finDatePlant=data[0].finDatePlant;
            _this.finSiembra = _this.dameMes(data[0].finDatePlant);
            //this.plant.initDateBloom=data[0].initDateBloom;
            _this.iniFlores = _this.dameMes(data[0].initDateBloom);
            //this.plant.finDateBloom=data[0].finDateBloom;
            _this.finFlores = _this.dameMes(data[0].finDateBloom);
            //this.plant.initDateHarvest=data[0].initDateHarvest;
            _this.iniRecolectar = _this.dameMes(data[0].initDateHarvest);
            //this.plant.finDateHarvest=data[0].finDateHarvest;
            _this.finRecolectar = _this.dameMes(data[0].finDateHarvest);
            _this.plant.leaveType = data[0].leaveType;
            // this.plant.commonName=data[0].3DModel;
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
        });
    };
    PlantComponent.prototype.mostrarTratamientos = function (numplant) {
        var _this = this;
        // console.log("Entro en mostrar tratamientos de planta: "+numplant);
        this._treatmentPlantService.detailsTreatment(numplant)
            .subscribe(function (data) {
            _this.treatments = [];
            for (var key$ in data) {
                _this.treatments.push(data[key$]);
                _this.showProductPlant(data[key$].id, numplant);
            }
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
        });
    };
    PlantComponent.prototype.showProductPlant = function (treatment, idPlant) {
        var _this = this;
        this._treatmentPlantService.showProductPlant(treatment, idPlant)
            .subscribe(function (data) {
            // this.productTreatments=[];
            for (var key$ in data) {
                _this.productTreatments.push(data[key$]);
            }
            console.log(_this.productTreatments);
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
        });
    };
    PlantComponent.prototype.dameMes = function (fechas) {
        if (fechas != null) {
            var fecha = fechas;
            var array = fecha.toString();
            var arrayRoto = array.split("-");
            this.mes = arrayRoto[1];
            switch (this.mes) {
                case '01':
                    this.mes = "Enero";
                    break;
                case '02':
                    this.mes = "Febrero";
                    break;
                case '03':
                    this.mes = "Marzo";
                    break;
                case '04':
                    this.mes = "Abril";
                    break;
                case '05':
                    this.mes = "Mayo";
                    break;
                case '06':
                    this.mes = "Junio";
                    break;
                case '07':
                    this.mes = "Julio";
                    break;
                case '08':
                    this.mes = "Agosto";
                    break;
                case '09':
                    this.mes = "Septiembre";
                    break;
                case '10':
                    this.mes = "Octubre";
                    break;
                case '11':
                    this.mes = "Noviembre";
                    break;
                case '12':
                    this.mes = "Diciembre";
                    break;
            }
        }
        return this.mes;
    };
    PlantComponent.prototype.comprobaciones = function () {
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
    PlantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.plant = new __WEBPACK_IMPORTED_MODULE_1__classes_plant_class__["a" /* Plant */](params['id']);
                _this.mostrar(_this.plant.id);
                // llamo a mostrarTratamientos y le paso el id de la planta
                // this.treatment=new Treatment(params['id']);
                _this.mostrarTratamientos(_this.plant.id);
            }
            else {
                _this._route.navigate(['/library']);
            }
        });
    };
    PlantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plant',
            template: __webpack_require__("../../../../../src/app/components/plants/plant/plant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/plants/plant/plant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_plant_service__["a" /* PlantService */],
            __WEBPACK_IMPORTED_MODULE_5__services_treatmentplant_service__["a" /* TreatmentPlantService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PlantComponent);
    return PlantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/editproduct/editproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/editproduct/editproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_product\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.name\" name=\"name\" id=\"name_product\" required>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"type_product\">Tipo</label>\n         <select class=\"form-control\" id=\"type_product\" [(ngModel)]=\"product.type\" name=\"type\" required>\n           <option>Fungicida</option>\n           <option>Abono</option>\n           <option>Plaguicida</option>\n         </select>\n      </div>\n    </div>\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"product.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\" required></textarea>\n\t\t</div>\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/products']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/editproduct/editproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_product_class__ = __webpack_require__("../../../../../src/app/classes/product.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditproductComponent = (function () {
    function EditproductComponent(_productService, _appComponent, _router, _route) {
        this._productService = _productService;
        this._appComponent = _appComponent;
        this._router = _router;
        this._route = _route;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__classes_product_class__["a" /* Product */]();
        this.products = [];
    }
    EditproductComponent.prototype.guardar = function () {
        var _this = this;
        this._productService.modify(this.product)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El producto se ha modificado", "primary", "admin/products?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditproductComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.product = new __WEBPACK_IMPORTED_MODULE_3__classes_product_class__["a" /* Product */](params['id']);
                _this.mostrar(_this.product.id);
            }
            else {
                _this._route.navigate(['/treatments']);
            }
        });
    };
    EditproductComponent.prototype.mostrar = function (idTreatment) {
        var _this = this;
        this._productService.details(idTreatment)
            .subscribe(function (data) {
            _this.product.id = idTreatment;
            _this.product.name = data[0].name;
            _this.product.type = data[0].type;
            _this.product.description = data[0].description;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
        });
    };
    EditproductComponent.prototype.ngOnInit = function () {
        this.getID();
    };
    EditproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editproduct',
            template: __webpack_require__("../../../../../src/app/components/products/editproduct/editproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/editproduct/editproduct.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EditproductComponent);
    return EditproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/listproduct/listproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/listproduct/listproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n  <div class=\"container main-container wrap\">\n  <h1>Productos</h1>\n\n  <form (ngSubmit)=\"this.searchcontent()\" class=\"form-row\" #forma=\"ngForm\" >\n    <article class=\"form-group col-md-4\">\n      <input type=\"text\"   class=\"form-control\" name=\"commonName\" placeholder=\"Buscar en gardiot\">\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button class=\"btn btn-default\" type=\"submit\">Buscar</button>\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button  [routerLink]=\"['/admin/newproduct']\" class=\"btn btn-outline-primary\">Nuevo Producto</button>\n    </article>\n  </form>\n  <table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Tipo</th>\n      <th scope=\"col\">Descripción</th>\n      <th scope=\"col\">Modificar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let product of products\">\n      <th scope=\"row\">{{product.name}}</th>\n      <td>{{product.type}}</td>\n      <td>{{product.description}}</td>\n      <td><button  class=\"btn btn-outline-primary\" [routerLink]=\"['/admin/editproduct/',product.id]\">Modificar</button></td>\n      <!-- <td><button  class=\"btn btn-outline-danger\" (click)=\"delete(product.id)\" [routerLink]=\"['/admin/products']\" [queryParams]=\"{pag: 1}\" >Eliminar</button></td> -->\n      <td><button  class=\"btn btn-outline-danger\" (click)=\"openDialog(product.id)\" >Eliminar</button></td>\n    </tr>\n  </tbody>\n</table>\n  <app-pagination [count]=\"this.numeroItems\" [type]=\"3\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/listproduct/listproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_product_class__ = __webpack_require__("../../../../../src/app/classes/product.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_delete_component__ = __webpack_require__("../../../../../src/app/components/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListproductComponent = (function () {
    function ListproductComponent(_productService, activatedRoute, dialog) {
        this._productService = _productService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.products = [];
        this.product = new __WEBPACK_IMPORTED_MODULE_2__classes_product_class__["a" /* Product */]();
        this.paginaActual = 1;
        this.elementosPorPagina = 4;
        this.estado = false; // false es listado y true buscador
        this.dialogResult = "";
    }
    ListproductComponent.prototype.mostrar = function () {
        var _this = this;
        if (this.estado == false) {
            this._productService.detailsAll(this.paginaActual, this.elementosPorPagina)
                .subscribe(function (data) {
                _this.products = [];
                for (var key$ in data) {
                    _this.products.push(data[key$]);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
            console.log("assss");
        }
    };
    ListproductComponent.prototype.ActualizarPagina = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.paginaActual = params['pag'];
            _this.getitems();
        });
    };
    ListproductComponent.prototype.getitems = function () {
        var _this = this;
        this._productService.getNumberItems()
            .subscribe(function (data) {
            if (_this.estado == false) {
                _this.numeroItems = data[0].NUMPRODUCTS;
            }
            _this.mostrar();
        }, function (error) {
            console.error(error);
        });
    };
    ListproductComponent.prototype.delete = function (idProduct) {
        var _this = this;
        this._productService.deleteProduct(idProduct)
            .subscribe(function (data) {
            _this.ActualizarPagina();
        }, function (error) {
            console.error(error);
        });
    };
    ListproductComponent.prototype.openDialog = function (id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_delete_component__["a" /* DialogDeleteComponent */], {
            width: '600px',
            data: id
        });
        // dialogRef.afterClosed().subscribe(result=> {
        //   console.log(`Dialog closed: ${result}`);
        //   this.dialogResult = result;
        // })
    };
    ListproductComponent.prototype.ngOnInit = function () {
        this.ActualizarPagina();
    };
    ListproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listproduct',
            template: __webpack_require__("../../../../../src/app/components/products/listproduct/listproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/listproduct/listproduct.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatDialog */]])
    ], ListproductComponent);
    return ListproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/newproduct/newproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/newproduct/newproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_product\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.name\" name=\"name\" id=\"name_product\" required>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"type_product\">Tipo</label>\n         <select class=\"form-control\" id=\"type_product\" [(ngModel)]=\"product.type\" name=\"type\" required>\n           <option>Fungicida</option>\n           <option>Abono</option>\n           <option>Plaguicida</option>\n         </select>\n      </div>\n    </div>\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"product.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\" required></textarea>\n\t\t</div>\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/products']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/newproduct/newproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_product_class__ = __webpack_require__("../../../../../src/app/classes/product.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewproductComponent = (function () {
    function NewproductComponent(_productService, _appComponent) {
        this._productService = _productService;
        this._appComponent = _appComponent;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__classes_product_class__["a" /* Product */]();
        this.products = [];
    }
    NewproductComponent.prototype.guardar = function () {
        var _this = this;
        this._productService.save(this.product)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El producto se ha guardado", "primary", "admin/products?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    NewproductComponent.prototype.ngOnInit = function () {
    };
    NewproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newproduct',
            template: __webpack_require__("../../../../../src/app/components/products/newproduct/newproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/newproduct/newproduct.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], NewproductComponent);
    return NewproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
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

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/products/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/treatments/edittreatment/edittreatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatments/edittreatment/edittreatment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_product\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"treatment.name\" name=\"name\" id=\"name_product\" required>\n      </div>\n    </div>\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"treatment.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\" required></textarea>\n\t\t</div>\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/treatments']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatments/edittreatment/edittreatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdittreatmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_treatment_service__ = __webpack_require__("../../../../../src/app/services/treatment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_treatment_class__ = __webpack_require__("../../../../../src/app/classes/treatment.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdittreatmentComponent = (function () {
    function EdittreatmentComponent(_treatmentService, _appComponent, _router, _route) {
        this._treatmentService = _treatmentService;
        this._appComponent = _appComponent;
        this._router = _router;
        this._route = _route;
        this.treatment = new __WEBPACK_IMPORTED_MODULE_3__classes_treatment_class__["a" /* Treatment */]();
        this.treatments = [];
    }
    EdittreatmentComponent.prototype.guardar = function () {
        var _this = this;
        this._treatmentService.modify(this.treatment)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El tratamiento se ha modificado", "primary", "admin/treatments?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EdittreatmentComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.treatment = new __WEBPACK_IMPORTED_MODULE_3__classes_treatment_class__["a" /* Treatment */](params['id']);
                _this.mostrar(_this.treatment.id);
            }
            else {
                _this._route.navigate(['/treatments']);
            }
        });
    };
    EdittreatmentComponent.prototype.mostrar = function (idTreatment) {
        var _this = this;
        this._treatmentService.details(idTreatment)
            .subscribe(function (data) {
            _this.treatment.id = idTreatment;
            _this.treatment.name = data[0].name;
            _this.treatment.description = data[0].description;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
        });
    };
    EdittreatmentComponent.prototype.ngOnInit = function () {
        this.getID();
    };
    EdittreatmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edittreatment',
            template: __webpack_require__("../../../../../src/app/components/treatments/edittreatment/edittreatment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/treatments/edittreatment/edittreatment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_treatment_service__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EdittreatmentComponent);
    return EdittreatmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/treatments/listtreatment/listtreatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatments/listtreatment/listtreatment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n  <div class=\"container main-container wrap\">\n  <h1>Tratamientos</h1>\n\n  <form (ngSubmit)=\"this.searchcontent()\" class=\"form-row\" #forma=\"ngForm\" >\n    <article class=\"form-group col-md-4\">\n      <input type=\"text\"   class=\"form-control\" name=\"commonName\" placeholder=\"Buscar en gardiot\">\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button class=\"btn btn-default\" type=\"submit\">Buscar</button>\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button  [routerLink]=\"['/admin/newtreatment']\" class=\"btn btn-outline-primary\">Nuevo Tratamiento</button>\n    </article>\n  </form>\n  <table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Descripción</th>\n      <th scope=\"col\">Modificar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let treatment of treatments\">\n      <th scope=\"row\">{{treatment.name}}</th>\n      <td>{{treatment.description}}</td>\n      <td><button  class=\"btn btn-outline-primary\" [routerLink]=\"['/admin/edittreatment/',treatment.id]\" >Modificar</button></td>\n      <td><button  class=\"btn btn-outline-danger\" (click)=\"delete(treatment.id)\" [routerLink]=\"['/admin/treatments']\" [queryParams]=\"{pag: 1}\" >Eliminar</button></td>\n    </tr>\n  </tbody>\n</table>\n<app-pagination [count]=\"this.numeroItems\" [type]=\"2\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatments/listtreatment/listtreatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListtreatmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_treatment_service__ = __webpack_require__("../../../../../src/app/services/treatment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_treatment_class__ = __webpack_require__("../../../../../src/app/classes/treatment.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListtreatmentComponent = (function () {
    function ListtreatmentComponent(_treatmentService, activatedRoute) {
        this._treatmentService = _treatmentService;
        this.activatedRoute = activatedRoute;
        this.treatments = [];
        this.treatment = new __WEBPACK_IMPORTED_MODULE_2__classes_treatment_class__["a" /* Treatment */]();
        this.paginaActual = 1;
        this.elementosPorPagina = 6;
        this.estado = false; // false es listado y true buscador
    }
    ListtreatmentComponent.prototype.mostrar = function () {
        var _this = this;
        if (this.estado == false) {
            this._treatmentService.detailsAll(this.paginaActual, this.elementosPorPagina)
                .subscribe(function (data) {
                _this.treatments = [];
                for (var key$ in data) {
                    _this.treatments.push(data[key$]);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            // this.searchcontent(this.paginaActual,this.elementosPorPagina);
            console.log("assss");
        }
    };
    ListtreatmentComponent.prototype.ActualizarPagina = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.paginaActual = params['pag'];
            _this.getitems();
        });
    };
    ListtreatmentComponent.prototype.getitems = function () {
        var _this = this;
        this._treatmentService.getNumberItems()
            .subscribe(function (data) {
            if (_this.estado == false) {
                _this.numeroItems = data[0].NUMTREATMENT;
            }
            _this.mostrar();
        }, function (error) {
            console.error(error);
        });
    };
    ListtreatmentComponent.prototype.delete = function (idTreatment) {
        var _this = this;
        this._treatmentService.deleteTrearment(idTreatment)
            .subscribe(function (data) {
            _this.ActualizarPagina();
        }, function (error) {
            console.error(error);
        });
    };
    ListtreatmentComponent.prototype.ngOnInit = function () {
        this.ActualizarPagina();
    };
    ListtreatmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listtreatment',
            template: __webpack_require__("../../../../../src/app/components/treatments/listtreatment/listtreatment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/treatments/listtreatment/listtreatment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_treatment_service__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ListtreatmentComponent);
    return ListtreatmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/treatments/newtreatment/newtreatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatments/newtreatment/newtreatment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n<section class=\"container main-container\">\n\t<form (ngSubmit)=\"this.guardar()\" #forma=\"ngForm\">\n\t  <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"name_product\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"treatment.name\" name=\"name\" id=\"name_product\" required>\n      </div>\n    </div>\n\t\t<div class=\"form-group\">\n\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"treatment.description\" name=\"description\" placeholder=\"Descripción\" required rows=\"3\" required></textarea>\n\t\t</div>\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n    <button [routerLink] =\"['/admin/products']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n\t</form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatments/newtreatment/newtreatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtreatmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_treatment_service__ = __webpack_require__("../../../../../src/app/services/treatment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_treatment_class__ = __webpack_require__("../../../../../src/app/classes/treatment.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewtreatmentComponent = (function () {
    function NewtreatmentComponent(_treatmentService, _appComponent) {
        this._treatmentService = _treatmentService;
        this._appComponent = _appComponent;
        this.treatment = new __WEBPACK_IMPORTED_MODULE_3__classes_treatment_class__["a" /* Treatment */]();
        this.treatments = [];
    }
    NewtreatmentComponent.prototype.guardar = function () {
        var _this = this;
        this._treatmentService.save(this.treatment)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El tratamiento se ha guardado", "primary", "admin/treatments?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    NewtreatmentComponent.prototype.ngOnInit = function () {
    };
    NewtreatmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newtreatment',
            template: __webpack_require__("../../../../../src/app/components/treatments/newtreatment/newtreatment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/treatments/newtreatment/newtreatment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_treatment_service__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], NewtreatmentComponent);
    return NewtreatmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/treatments/treatment/treatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatments/treatment/treatment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  treatment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatments/treatment/treatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentComponent; });
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

var TreatmentComponent = (function () {
    function TreatmentComponent() {
    }
    TreatmentComponent.prototype.ngOnInit = function () {
    };
    TreatmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-treatment',
            template: __webpack_require__("../../../../../src/app/components/treatments/treatment/treatment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/treatments/treatment/treatment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentComponent);
    return TreatmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n<section class=\"container main-container\" >\n  <h2>Tratamiento</h2>\n  <form (ngSubmit)=\"this.guardar()\"  method=\"post\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"treatment_plant\">Tratamiento</label>\n         <select class=\"form-control\" id=\"treatment_plant\" [(ngModel)]=\"treatmentPlant.treatment\" name=\"treatment\"  required>\n           <option *ngFor=\"let treatment of treatments\" value=\"{{treatment.id}}\">{{treatment.name}}</option>\n         </select>\n      </div>\n      <div class=\"form-group col-md-6\">\n          <label for=\"frequency_treatmentPlant\">Frecuencia</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.frequency\" name=\"frequency\" id=\"frequency_treatmentPlant\" placeholder=\"Se mide en días\">\n        </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"date_initDate\">Inicio</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.initDate\" name=\"initDate\" id=\"date_initDate\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"date_initDate\">Fin</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"treatmentPlant.finalDate\" name=\"initDate\" id=\"date_initDate\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"product_plant\">Productos</label>\n         <select class=\"form-control selectpicker\" multiple  id=\"product_plant\" [(ngModel)]=\"productTreatment.product\" name=\"product\" >\n           <option *ngFor=\"let product of products\" value=\"{{product.id}}\">{{product.name}}</option>\n         </select>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\">\n          <button type=\"submit\" class=\"btn btn-success\">Añadir tratamiento</button>\n      </div>\n      <div class=\"form-group col-md-2\">\n          <button [routerLink] =\"['/library']\" [queryParams]=\"{pag: 1}\" class=\"btn btn-outline-danger\">Cancelar</button>\n      </div>\n    </div>\n  </form>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtreatmentsplantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_treatment_service__ = __webpack_require__("../../../../../src/app/services/treatment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_treatmentplant_class__ = __webpack_require__("../../../../../src/app/classes/treatmentplant.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_producttreatment_class__ = __webpack_require__("../../../../../src/app/classes/producttreatment.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_treatmentplant_service__ = __webpack_require__("../../../../../src/app/services/treatmentplant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewtreatmentsplantsComponent = (function () {
    function NewtreatmentsplantsComponent(_treatmentService, _productService, _treatmentPlantService, _appComponent, _router, _route) {
        this._treatmentService = _treatmentService;
        this._productService = _productService;
        this._treatmentPlantService = _treatmentPlantService;
        this._appComponent = _appComponent;
        this._router = _router;
        this._route = _route;
        this.treatmentPlant = new __WEBPACK_IMPORTED_MODULE_4__classes_treatmentplant_class__["a" /* TreatmentPlant */]();
        this.productTreatment = new __WEBPACK_IMPORTED_MODULE_5__classes_producttreatment_class__["a" /* ProductTreatment */]();
        this.treatments = [];
        this.products = [];
        this.treatmentsPlants = [];
    }
    NewtreatmentsplantsComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.treatmentPlant.treatment);
        console.log(this.productTreatment);
        console.log(this.productTreatment.product);
        this._treatmentPlantService.savetreatment(this.treatmentPlant, this.idPlant)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("El tratamiento y los productos se han guardado", "primary", "plants?pag=1");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
        if (this.productTreatment.product.length != undefined) {
            for (var cont = 0; cont < this.productTreatment.product.length; cont++) {
                this._treatmentPlantService.saveproduct(this.treatmentPlant.treatment, this.productTreatment.product[cont], this.idPlant)
                    .subscribe(function (data) {
                }, function (error) {
                    var v = JSON.parse(error._body);
                });
            }
        }
    };
    NewtreatmentsplantsComponent.prototype.mostrarTratamientos = function () {
        var _this = this;
        this._treatmentService.detailsAll(1, 10000)
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.treatments.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    NewtreatmentsplantsComponent.prototype.mostrarProductos = function () {
        var _this = this;
        this._productService.detailsAll(1, 10000)
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.products.push(data[key$]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    NewtreatmentsplantsComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.idPlant = params['id'];
            }
            else {
                _this._route.navigate(['/plants']);
            }
        });
    };
    NewtreatmentsplantsComponent.prototype.ngOnInit = function () {
        this.mostrarTratamientos();
        this.mostrarProductos();
        this.getID();
    };
    NewtreatmentsplantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newtreatmentsplants',
            template: __webpack_require__("../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_treatment_service__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_6__services_treatmentplant_service__["a" /* TreatmentPlantService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], NewtreatmentsplantsComponent);
    return NewtreatmentsplantsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container main-container\">\n  <h1>\n    Bienvenido a Gardiot, tu email es {{this.user.id}}\n  </h1>\n  <div class=\"wrap\">\n    <div class=\"card-columns\">\n      <div class=\"card text-white bg-success mb-3\" [routerLink]=\"[gardenRoute]\" style=\"max-width: 25rem;\">\n        <div class=\"card-header\">Jardín</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Visualiza y modifica los detalles de tu jardín 3D</h5>\n        </div>\n      </div>\n      <div class=\"card text-white bg-warning mb-3\" [routerLink]=\"['/plants']\" [queryParams]=\"{pag: 1}\" style=\"max-width: 25rem;\">\n        <div class=\"card-header\">Biblioteca</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Accede a toda nuestra información botánica</h5>\n        </div>\n      </div>\n      <div class=\"card text-white bg-info mb-3\" [routerLink]=\"['/calendar']\" style=\"max-width: 25rem;\">\n        <div class=\"card-header\">Calendario</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Revisa los cuidados que necesita tu jardín</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_garden_service__ = __webpack_require__("../../../../../src/app/services/garden.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function DetailComponent(_detailService, _gardenService, _route) {
        this._detailService = _detailService;
        this._gardenService = _gardenService;
        this._route = _route;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__classes_user_class__["a" /* User */]("");
        this.gardenRoute = "";
    }
    //Recoge los datos del usuario logueado y los guarda para mostrarlos
    DetailComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.birthDate = data.birthDate;
            _this.user.photo = data.photo;
            _this.user.name = data.name;
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    DetailComponent.prototype.checkGarden = function () {
        var _this = this;
        this._gardenService.details()
            .subscribe(function (data) {
            if (data != null) {
                _this.gardenRoute = '/garden';
            }
            else {
                _this.gardenRoute = '/newgarden';
            }
        }, function (error) {
            console.error(JSON.parse(error._body).Mensaje);
        });
    };
    DetailComponent.prototype.ngOnInit = function () {
        this.mostrar();
        this.checkGarden();
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/components/user/detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_garden_service__["a" /* GardenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <h1>Mi perfil</h1>\n<section class=\"container\">\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form  (ngSubmit)=\"edit()\" #forma=\"ngForm\" novalidate=\"\">\n        <div class=\"divPhoto\" (click)=\"selectPhoto($event)\">\n          <div>\n          </div>\n          <i class=\"material-icons\">file_upload</i>\n        </div>\n      <input type=\"file\" (change)=\"uploadPhoto($event)\" ng2FileSelect [uploader]=\"uploader\" />\n        <div class=\"form-group\">\n          <label  for=\"name_user\">Nombre: </label>\n          <input  type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" id=\"name_user\" required>\n        </div> \n        <div class=\"form-group\">\n          <label  for=\"lastname_user\">Apellidos: </label>\n          <input  type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\" id=\"lastname_user\">\n        </div>\n        <div class=\"form-group\">\n          <label  for=\"name_user\">Email: </label>\n          <label for=\"name_user\">{{this.user.id}}</label>\n        </div>\n\n        <div class=\"form-group\">\n          <label  for=\"birthday_user\">Fecha de nacimiento: </label>\n          <input  type=\"date\" [(ngModel)]=\"user.birthDate\" name=\"birthDate\" id=\"birthday_user\">\n        </div>\n\n        <div class=\"form-group\" ng-init=\"listarPaises()\">\n          <label for=\"countries\">País:</label>\n\n            <select2 id=\"pais\" [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.saveCountry($event)\">\n            </select2>\n\n           </div>\n        <div class=\"form-group\">\n            <label for=\"countries\">Introduce tu código postal:</label>\n            <input type=\"text\" id=\"zipCode\" (valueChanged)=\"this.saveCity($event)\"/>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"countries\">Ciudad:</label>\n            <span id=\"ciudad\"></span>\n        </div>\n\n        <!--<div class=\"form-group\">\n          <label for=\"birthDate_user\">Fecha de nacimiento: </label>\n          <input [(ngModel)]=\"user.birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate_user\"  >\n        </div>-->\n\n        <h3>Cambiar contraseña</h3>\n        <div class=\"form-group\">\n          <label for=\"oldPassword_user\">Introduce tu contraseña actual</label>\n          <input [(ngModel)]=\"user.oldPassword\" type=\"password\" name=\"oldPassword\" id=\"oldPassword_user\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password_user\">Introduce tu nueva contraseña</label>\n          <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" id=\"password_user\" >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password2_user\">Repite tu contraseña</label>\n          <input [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\" id=\"password2_user\" >\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar cambios</button>\n        <button [routerLink]=\"['/profile']\" class=\"btn btn-outline-danger\">Cancelar</button>\n      </form>\n    </div>\n  </div>\n</section>\n</div>\n\n\n\n<!-- button to trigger the file upload when submitted -->\n<!--<button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n      Upload with ng-2 file uploader\n</button>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditProfileComponent = (function () {
    function EditProfileComponent(_detailService, _route, _appComponent, _ng2ImgMax, datePipe, _renderer) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this._ng2ImgMax = _ng2ImgMax;
        this.datePipe = datePipe;
        this._renderer = _renderer;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]("");
        this.countries = [];
        this.cities = [];
        this.zip = "";
    }
    EditProfileComponent.prototype.searchZip = function (event) {
        var _this = this;
        //aqui vamos cargando las posibles ciudades a elegir
        var input = document.querySelector("#zipCode");
        if (input.value.length == 5) {
            this._detailService.listCitiesByZip(this.user.countryCode, input.value)
                .subscribe(function (data) {
                var sp = document.querySelector('#ciudad');
                console.log(data);
                if (data.length > 0) {
                    if (data[0].adminName3 !== undefined) {
                        _this.user.city = data[0].adminName3;
                        sp.innerHTML = data[0].adminName3;
                    }
                    else if (data[0].adminName2 !== undefined) {
                        _this.user.city = data[0].adminName2;
                        sp.innerHTML = data[0].adminName2;
                    }
                    else if (data[0].adminName1 !== undefined) {
                        _this.user.city = data[0].adminName1;
                        sp.innerHTML = data[0].adminName1;
                    }
                    else {
                        _this.user.city = '';
                        sp.innerHTML = 'Código postal no encontrado';
                    }
                }
                else {
                    _this.user.city = '';
                    sp.innerHTML = 'Código postal no encontrado';
                }
                input.value = '';
            }, function (error) {
                console.log(error);
            });
        }
    };
    //Cargar usuario para mostrar sus datos en el formulario por defecto
    EditProfileComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.birthDate = _this.datePipe.transform(data.birthDate, 'yyyy-MM-dd');
            _this.user.photo = data.photo;
            _this.user.name = data.name;
            _this.user.lastName = data.lastName;
            _this.user.city = data.city;
            _this.user.countryCode = data.countryCode;
            document.querySelector('.divPhoto').setAttribute('style', "width: 200px; height: 200px;\n          background-image: url(\"" + _this.user.photo + "\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          border: 2px solid #000;\n          border-radius: 200px;\n          cursor: pointer;\n          ");
            _this.listarPaises();
            _this.mostrarCiudad();
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    //Enviar los nuevos datos del usuario a UserService para guardarlos
    EditProfileComponent.prototype.edit = function () {
        var _this = this;
        this._detailService.modifyUserProfile(this.user)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Datos modificados", "success", "profile");
        }, function (error) {
            var v = JSON.parse(error._body);
            _this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    };
    EditProfileComponent.prototype.listarPaises = function () {
        var _this = this;
        this._detailService.listCoutries()
            .subscribe(function (data) {
            //console.log(data.geonames);
            var aux = [];
            aux.push({ id: 0, text: "Selecciona un país" });
            for (var i = 0; i < data.geonames.length; i++) {
                aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
            }
            _this.countryData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(aux);
                obs.complete();
            });
            _this.startCountry = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(_this.user.countryCode);
                obs.complete();
            }).delay(1000);
        }, function (error) {
            console.log(error);
        });
    };
    EditProfileComponent.prototype.mostrarCiudad = function () {
        var aux = [];
        aux.push({ id: this.user.city, text: this.user.city });
        this.cityData = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            obs.next(aux);
            obs.complete();
        });
        document.querySelector('#ciudad').innerHTML = this.user.city;
    };
    //click en el div para seleccionar una foto
    EditProfileComponent.prototype.selectPhoto = function (e) {
        console.log(e);
        var file = document.querySelector('input[type="file"]');
        file.click();
    };
    //evento change para subir la foto al servidor
    EditProfileComponent.prototype.uploadPhoto = function (event) {
        var _this = this;
        if (this.uploader.getNotUploadedItems().length) {
            console.log(event.target.files);
            var file_1 = [];
            file_1.push(event.target.files[0]);
            file_1.forEach(function () {
                console.log(file_1);
            });
            this._ng2ImgMax.compress(file_1, 1.25).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                _this.uploader.uploadAll();
            }, function (error) { return console.log(error); });
        }
    };
    //Estas dos funciones son para guardar los datos
    //del país y ciudad en el objeto de usuario
    EditProfileComponent.prototype.saveCountry = function (e) {
        console.log(e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.user.countryCode = e.value;
        }
    };
    EditProfileComponent.prototype.saveCity = function (e) {
        console.log("save city" + e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.user.city = e.value;
            this.mostrarCiudad();
        }
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this._detailService.apiURL + 'uploadAvatar', itemAlias: 'photo' });
        this.mostrar();
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
            var url = response.split(" ");
            url = url[url.length - 1];
            url = url.split("\\");
            url = url[url.length - 1];
            _this.user.photo = url;
            var img = document.querySelector(".divPhoto");
            _this._renderer.setElementStyle(img, 'background-image', "url(\"" + _this.user.photo + "\")");
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EditProfileComponent.prototype, "searchZip", null);
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__("../../../../../src/app/components/user/editprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_img_max__["b" /* Ng2ImgMaxService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"]{\r\n  display: none;\r\n}\r\n.divPhoto>i{\r\n  display: none;\r\n}\r\n.divPhoto>div{\r\n  display: none;\r\n}\r\n.divPhoto:hover{\r\n  position:relative;\r\n}\r\n.divPhoto:hover>div{\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 200px;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n.divPhoto:hover>i{\r\n  -webkit-filter:brightness(600%) !important;\r\n          filter:brightness(600%) !important;\r\n  color: #fff;\r\n  display: block;\r\n  position: absolute;\r\n  font-size: 90px;\r\n  margin-top: 50%;\r\n  margin-left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n  <h1>Mi perfil</h1>\r\n<section class=\"container\">\r\n  <div class=\"divPhoto\" (click)=\"selectPhoto($event)\">\r\n    <div>\r\n    </div>\r\n    <i class=\"material-icons\">file_upload</i>\r\n  </div>\r\n\r\n\r\n<input type=\"file\" (change)=\"uploadPhoto($event)\" ng2FileSelect [uploader]=\"uploader\" />\r\n    <dl class=\"row\">\r\n  <dt class=\"col-sm-3\">Nombre</dt>\r\n  <dd class=\"col-sm-9\">{{user.name}} {{user.lastName}}</dd>\r\n\r\n  <dt class=\"col-sm-3\">Email</dt>\r\n  <dd class=\"col-sm-9\">{{user.id}}</dd>\r\n\r\n  <dt class=\"col-sm-3\">Cumpleaños</dt>\r\n  <dd class=\"col-sm-9\">{{user.birthDate | date}}</dd>\r\n\r\n  <dt class=\"col-sm-3\">País</dt>\r\n  <dd class=\"col-sm-9\">{{user.countryCode}}</dd>\r\n\r\n  <dt class=\"col-sm-3\">Ciudad</dt>\r\n  <dd class=\"col-sm-9\">{{user.city}}</dd>\r\n\r\n</dl>\r\n\r\n        <button [routerLink]=\"['/editprofile']\" class=\"btn btn-outline-primary\">Editar perfil</button>\r\n\r\n\r\n</section>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
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
    function ProfileComponent(_detailService, _route, _appComponent, _ng2ImgMax, _renderer) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this._ng2ImgMax = _ng2ImgMax;
        this._renderer = _renderer;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]("");
        this.countries = [];
        this.cities = [];
        this.selected = "";
        this.imgUrl = 'https://gardiot.ovh/uploads/avatar/';
    }
    //Cargar usuario para mostrar sus datos en el formulario por defecto
    ProfileComponent.prototype.mostrar = function () {
        var _this = this;
        this._detailService.details(this.user)
            .subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.birthDate = data.birthDate;
            _this.user.photo = data.photo;
            _this.user.name = data.name;
            _this.user.lastName = data.lastName;
            _this.user.city = data.city;
            _this.user.countryCode = data.countryCode;
            document.querySelector('.divPhoto').setAttribute('style', "width: 200px; height: 200px;\n          background-image: url(\"" + _this.user.photo + "\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          border: 2px solid #000;\n          border-radius: 200px;\n          cursor: pointer;\n          ");
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            _this._route.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.selectPhoto = function (e) {
        console.log(e);
        var file = document.querySelector('input[type="file"]');
        file.click();
    };
    ProfileComponent.prototype.uploadPhoto = function (event) {
        var _this = this;
        if (this.uploader.getNotUploadedItems().length) {
            console.log(event.target.files);
            var file_1 = [];
            file_1.push(event.target.files[0]);
            file_1.forEach(function () {
                console.log(file_1);
            });
            this._ng2ImgMax.compress(file_1, 1.25).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                _this.uploader.uploadAll();
            }, function (error) { return console.log(error); });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this._detailService.apiURL + 'uploadAvatar', itemAlias: 'photo' });
        this.mostrar();
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
            var url = response.split(" ");
            url = url[url.length - 1];
            url = url.split("\\");
            url = url[url.length - 1];
            _this.user.photo = url;
            var img = document.querySelector(".divPhoto");
            _this._detailService.savePhotoUser(_this.user.photo)
                .subscribe(function (data) {
                console.log(data);
                if (data.Mensaje == 'Actualizado')
                    _this._renderer.setElementStyle(img, 'background-image', "url(\"" + _this.user.photo + "\")");
            });
        };
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__["b" /* Ng2ImgMaxService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/edituser/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n  <div class=\"container main-container\">\n  <h3>Usuario {{user.name}}</h3>\n  <hr>\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"guardarUsuario(forma)\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Nombre</label>\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" required>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Apellidos</label>\n            <input type=\"text\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"user.lastName\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t<label for=\"date_initplant\">Nacimiento</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.birthDate\" name=\"birthDate\" id=\"birthday_user\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-md-6\">\n            <label for=\"photo_plant\">Foto</label>\n            <div class=\"upload-btn-wrapper form-control \">\n              <button class=\"bttn\">Selecionar imagen</button>\n              <input type=\"file\" name=\"myfile\" id=\"photo_plant\" ng2FileSelect [uploader]=\"uploader\" />\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\" ng-init=\"listarPaises()\">\n              <label for=\"countries\">País:</label>\n              <select2 id=\"pais\" [data]=\"countryData | async\" [value]=\"startCountry | async\" (valueChanged)=\"this.saveCountry($event)\"></select2>\n            </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"countries\">Introduce tu código postal:</label>\n            <input type=\"text\" id=\"zipCode\" (valueChanged)=\"this.saveCity($event)\"/>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"countries\">Ciudad:</label>\n            <span id=\"ciudad\"></span>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <button  [routerLink]=\"['/admin/newuser']\" class=\"btn btn-outline-primary form-control\">Resetear contraseña</button>\n          </div>\n          <div class=\"form-group col-md-6 form-check  form-control\">\n            <input type=\"checkbox\" class=\"form-check-input form-control\" id=\"admin\" [(ngModel)]=\"user.admin\" name=\"admin\"  value=\"1\">\n            <label class=\"form-check-label\"for=\"admin\">Administrador</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-outline-primary\">\n            Guardar cambios\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/edituser/edituser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user_class__ = __webpack_require__("../../../../../src/app/classes/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EdituserComponent = (function () {
    function EdituserComponent(_editUserService, _appComponent, _router, datePipe, _route) {
        this._editUserService = _editUserService;
        this._appComponent = _appComponent;
        this._router = _router;
        this.datePipe = datePipe;
        this._route = _route;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user_class__["a" /* User */]("");
        this.countries = [];
        this.cities = [];
        this.zip = "";
        this.users = [];
    }
    EdituserComponent.prototype.guardarUsuario = function (forma) {
        var _this = this;
        console.log(forma.value);
        if (forma.value.admin == true) {
            forma.value.admin = 1;
        }
        this._editUserService.modifyUserProfileAdmin(forma.value, this.oldId, this.user)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente(data.Mensaje, "primary", "/admin/users");
        });
    };
    EdituserComponent.prototype.getID = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user_class__["a" /* User */](params['id']);
                _this.oldId = _this.user.id;
                _this.mostrar(_this.user);
            }
            else {
                _this._route.navigate(['/plants']);
            }
        });
    };
    EdituserComponent.prototype.mostrar = function (User) {
        var _this = this;
        this._editUserService.detailsByUser(User)
            .subscribe(function (data) {
            _this.user.id = data[0].id;
            _this.user.name = data[0].name;
            _this.user.lastName = data[0].lastName;
            _this.user.active = data[0].active;
            _this.user.admin = data[0].admin;
            _this.user.city = data[0].city;
            _this.user.countryCode = data[0].countryCode;
            _this.user.birthDate = _this.datePipe.transform(data[0].birthDate, 'yyyy-MM-dd');
            _this.listarPaises();
            _this.mostrarCiudad();
        }, function (error) {
            console.error(error);
            localStorage.clear();
            sessionStorage.clear();
            //  this._route.navigate(['/login']);
        });
    };
    EdituserComponent.prototype.listarPaises = function () {
        var _this = this;
        this._editUserService.listCoutries()
            .subscribe(function (data) {
            var aux = [];
            aux.push({ id: 0, text: "Selecciona un país" });
            for (var i = 0; i < data.geonames.length; i++) {
                aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
            }
            _this.countryData = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(aux);
                obs.complete();
            });
            _this.startCountry = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
                obs.next(_this.user.countryCode);
                obs.complete();
            }).delay(1000);
        }, function (error) {
            console.log(error);
        });
    };
    EdituserComponent.prototype.mostrarCiudad = function () {
        var aux = [];
        aux.push({ id: this.user.city, text: this.user.city });
        this.cityData = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            obs.next(aux);
            obs.complete();
        });
        document.querySelector('#ciudad').innerHTML = this.user.city;
    };
    //Estas dos funciones son para guardar los datos
    //del país y ciudad en el objeto de usuario
    EdituserComponent.prototype.saveCountry = function (e) {
        console.log(e.value);
        if (e.value != 0 && e.value !== undefined) {
            this.user.countryCode = e.value;
        }
    };
    EdituserComponent.prototype.saveCity = function (e) {
        if (e.value != 0 && e.value !== undefined) {
            this.user.city = e.value;
            this.mostrarCiudad();
        }
    };
    EdituserComponent.prototype.searchZip = function (event) {
        var _this = this;
        //aqui vamos cargando las posibles ciudades a elegir
        var input = document.querySelector("#zipCode");
        if (input.value.length == 5) {
            this._editUserService.listCitiesByZip(this.user.countryCode, input.value)
                .subscribe(function (data) {
                var sp = document.querySelector('#ciudad');
                if (data.length > 0) {
                    if (data[0].adminName3 !== undefined) {
                        _this.user.city = data[0].adminName3;
                        sp.innerHTML = data[0].adminName3;
                    }
                    else if (data[0].adminName2 !== undefined) {
                        _this.user.city = data[0].adminName2;
                        sp.innerHTML = data[0].adminName2;
                    }
                    else if (data[0].adminName1 !== undefined) {
                        _this.user.city = data[0].adminName1;
                        sp.innerHTML = data[0].adminName1;
                    }
                    else {
                        _this.user.city = '';
                        sp.innerHTML = 'Código postal no encontrado';
                    }
                }
                else {
                    _this.user.city = '';
                    sp.innerHTML = 'Código postal no encontrado';
                }
                input.value = '';
            }, function (error) {
                console.log(error);
            });
        }
    };
    EdituserComponent.prototype.ngOnInit = function () {
        this.getID();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EdituserComponent.prototype, "searchZip", null);
    EdituserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-edit-user',
            template: __webpack_require__("../../../../../src/app/components/users/edituser/edituser.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/listusers/listusers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://www.npmjs.com/package/ng2-opd-popup -->\n\n<div class=\"vistaAdmin\">\n  <div class=\"container main-container wrap\">\n  <h1>Panel de administrador</h1>\n\n  <form (ngSubmit)=\"this.searchcontent()\" class=\"form-row\" #forma=\"ngForm\" >\n    <article class=\"form-group col-md-4\">\n      <input type=\"text\"   class=\"form-control\" name=\"commonName\" placeholder=\"Buscar en gardiot\">\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button class=\"btn btn-default\" type=\"submit\">Buscar</button>\n    </article>\n    <article class=\"form-group col-md-2\">\n      <button  [routerLink]=\"['/admin/newuser']\" class=\"btn btn-outline-primary\">Nuevo Usuario</button>\n    </article>\n  </form>\n  <table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Apellidos</th>\n      <th scope=\"col\">Correo</th>\n      <th scope=\"col\">Tipo</th>\n      <th scope=\"col\">Estado</th>\n      <th scope=\"col\">Modificar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <th scope=\"row\">{{user.name}}</th>\n      <td>{{user.lastName}}</td>\n      <td>{{user.id}}</td>\n      <td>{{user.admin}}</td>\n      <td>{{user.active}}</td>\n      <td><button  class=\"btn btn-outline-primary\" [routerLink]=\"['/admin/edituser/',user.id]\">Modificar</button></td>\n      <td><button  class=\"btn btn-outline-danger\" (click)=\"deleteuser(user.id)\" [routerLink]=\"['/admin/users']\" [queryParams]=\"{pag: 1}\" >Eliminar</button></td>\n    </tr>\n  </tbody>\n</table>\n  <app-pagination [count]=\"this.numeroItems\" [type]=\"4\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/listusers/listusers.component.ts":
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
    function AdminListUsersComponent(_detailService, _route, _appComponent, activatedRoute) {
        this._detailService = _detailService;
        this._route = _route;
        this._appComponent = _appComponent;
        this.activatedRoute = activatedRoute;
        this.users = [];
        this.paginaActual = 1;
        this.elementosPorPagina = 5;
        this.estado = false; // false es listado y true buscador
    }
    AdminListUsersComponent.prototype.mostrar = function () {
        var _this = this;
        if (this.estado == false) {
            this._detailService.detailsAll(this.paginaActual, this.elementosPorPagina)
                .subscribe(function (data) {
                _this.users = [];
                for (var key$ in data) {
                    _this.users.push(data[key$]);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else {
            // this.searchcontent(this.paginaActual,this.elementosPorPagina);
            console.log("assss");
        }
    };
    AdminListUsersComponent.prototype.deleteuser = function (idUser) {
        var _this = this;
        this._detailService.deleteUser(idUser)
            .subscribe(function (data) {
            _this.ActualizarPagina();
        }, function (error) {
            console.error(error);
        });
    };
    AdminListUsersComponent.prototype.ActualizarPagina = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.paginaActual = params['pag'];
            _this.getitems();
        });
    };
    AdminListUsersComponent.prototype.getitems = function () {
        var _this = this;
        this._detailService.getNumberItems()
            .subscribe(function (data) {
            if (_this.estado == false) {
                _this.numeroItems = data[0].NUMUSERS;
            }
            _this.mostrar();
        }, function (error) {
            console.error(error);
        });
    };
    AdminListUsersComponent.prototype.ngOnInit = function () {
        this.ActualizarPagina();
    };
    AdminListUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-listusers',
            template: __webpack_require__("../../../../../src/app/components/users/listusers/listusers.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AdminListUsersComponent);
    return AdminListUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n  <div class=\"container main-container\">\n  <h3>Nuevo Usuario</h3>\n  <hr>\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-12\">\n      <form (ngSubmit)=\"guardarUsuario(forma)\" #forma=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n                type=\"text\" name=\"id\"\n                class=\"form-control\" [(ngModel)]=\"user.id\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input\n                type=\"password\" name=\"password\"\n                class=\"form-control\" [(ngModel)]=\"user.password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Repite el password</label>\n          <input\n                type=\"password\" name=\"password2\"\n                class=\"form-control\" [(ngModel)]=\"user.password2\" required>\n        </div>\n        <div class=\"form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"admin\" [(ngModel)]=\"user.admin\" name=\"admin\"  value=\"1\">\n          <label class=\"form-check-label\"for=\"admin\">Administrador</label>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-outline-primary\">\n            Crear\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/newuser/newuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserComponent; });
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




var NewuserComponent = (function () {
    function NewuserComponent(_newUserServce, _appComponent) {
        this._newUserServce = _newUserServce;
        this._appComponent = _appComponent;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user_class__["a" /* User */]();
    }
    NewuserComponent.prototype.guardarUsuario = function (forma) {
        var _this = this;
        if (forma.value.admin == true) {
            forma.value.admin = 1;
        }
        else {
            forma.value.admin = 0;
        }
        this._newUserServce.registerAdmin(forma.value)
            .subscribe(function (data) {
            _this._appComponent.mensajeEmergente("Registrado con exito", "primary", "admin/users?pag=1");
        });
    };
    NewuserComponent.prototype.ngOnInit = function () {
    };
    NewuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-user',
            template: __webpack_require__("../../../../../src/app/components/users/newuser/newuser.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], NewuserComponent);
    return NewuserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/userdata/userdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaAdmin\">\n\t<div class=\"container main-container\">\n\t<h1>Usuarios</h1>\n  <p>texto</p>\n\t<button [routerLink] =\"['/admin/listusers']\" class=\"btn btn-outline-primary\"\n\t        type=\"submit\" name=\"button\">Lista de usuarios</button>\n\t<button [routerLink] =\"['/admin/user']\" class=\"btn btn-outline-primary\"\n\t                type=\"submit\" name=\"button\">Crear nuevo usuario</button>\n\n\n\t<app-admin-listusers> </app-admin-listusers>\n\t<app-pagination [count]=\"this.numeroItems\" [page]=\"this.paginaActual\" [perPage]=\"this.elementosPorPagina\" [pagesToShow]=\"3\" [loading]=\"false\" (onPrev)=\"prevPage()\" (onNext)=\"nextPage()\" (onPage)=\"goToPage($event)\"></app-pagination>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/userdata/userdata.component.ts":
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userdata',
            template: __webpack_require__("../../../../../src/app/components/users/userdata/userdata.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserdataComponent);
    return UserdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/desarrollo/desarrollo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"desarrollo\" style=\"z-index:999\">\n<p>\nEsta aplicación está en desarrollo. La funcionalidad y el diseño están limitados\n</p>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-desarrollo',
            template: __webpack_require__("../../../../../src/app/desarrollo/desarrollo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DesarrolloComponent);
    return DesarrolloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
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




var FeedService = (function () {
    function FeedService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    FeedService.prototype.detailsAll = function (page, items) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/feed" + "/" + items + "/" + page + "/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.save = function (feed) {
        var body = "name=" + feed.name + "&text=" + feed.text + "&dateInit=" + feed.dateInit + "&dateFinal=" + feed.dateFinal;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/feed", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.modify = function (feed) {
        var body = "name=" + feed.name + "&text=" + feed.text + "&dateInit=" + feed.dateInit + "&dateFinal=" + feed.dateFinal;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        console.log(feed.id);
        return this.http.put(this.apiURL + "admin/feed/" + feed.id, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.getNumberItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "/admin/numFeeds", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.deleteProduct = function (idFeed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "admin/feed/" + idFeed, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.details = function (numfeed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/feed/" + numfeed, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService.prototype.showfeeds = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "feed", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    FeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], FeedService);
    return FeedService;
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
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    GardenService.prototype.details = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "gardenByUser", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.deleteGarden = function (garden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.delete(this.apiURL + "garden/" + garden.id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.insertGarden = function (garden) {
        garden.soil = "1";
        var body = "title=" + garden.title;
        if (garden.width != undefined) {
            body += "&width=" + garden.width;
        }
        if (garden.length != undefined) {
            body += "&length=" + garden.length;
        }
        if (garden.latitude != undefined) {
            body += "&latitude=" + garden.latitude;
        }
        if (garden.longitude != undefined) {
            body += "&longitude=" + garden.longitude;
        }
        if (garden.soil != undefined) {
            body += "&soil=" + garden.soil;
        }
        if (garden.countryCode != undefined) {
            body += "&countryCode=" + garden.countryCode;
        }
        if (garden.city != undefined) {
            body += "&city=" + garden.city;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "garden", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.saveplants = function (plant, X, garden, fecha_actual) {
        var body = "plant=" + plant + "&xCoordinate=" + X + "&yCoordinate=" + 0 + "&seed=" + fecha_actual + "&soil=" + 1;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "myPlant/" + garden, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.modifyGarden = function (garden) {
        garden.soil = "1";
        var body = "id=" + garden.id;
        if (garden.title != "undefined") {
            body += "&title=" + garden.title;
        }
        if (garden.width != "undefined") {
            body += "&width=" + garden.width;
        }
        if (garden.length != "undefined") {
            body += "&length=" + garden.length;
        }
        if (garden.latitude != "undefined") {
            body += "&latitude=" + garden.latitude;
        }
        if (garden.longitude != "undefined") {
            body += "&longitude=" + garden.longitude;
        }
        if (garden.soil != "undefined") {
            //body += `&soil=${garden.soil}`;
        }
        if (garden.countryCode != "undefined") {
            body += "&countryCode=" + garden.countryCode;
        }
        if (garden.city != "undefined") {
            body += "&city=" + garden.city;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        console.log(body);
        return this.http.put(this.apiURL + "garden", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.tiempo = function (garden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "weatherCity/" + garden.city + "/" + garden.countryCode, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.prevision = function (garden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "forecastCity/" + garden.city + "/" + garden.countryCode, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.listCoutries = function () {
        return this.http.get(this.apiURL + "geonamesAllCountries")
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.listCities = function (value) {
        return this.http.get(this.apiURL + "geonamesCities/" + value)
            .map(function (res) {
            return res.json();
        });
    };
    GardenService.prototype.listCitiesByZip = function (country, value) {
        return this.http.get(this.apiURL + "geonamesSearchByZip/" + value + "/" + country)
            .map(function (res) {
            return res.json();
        });
    };
    GardenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GardenService);
    return GardenService;
}());



/***/ }),

/***/ "../../../../../src/app/services/plant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantService; });
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




var PlantService = (function () {
    function PlantService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    PlantService.prototype.save = function (plant) {
        var body = "commonName=" + plant.commonName + "&scientificName=" + plant.scientificName;
        body += "&description=" + plant.description + "&family=" + plant.family + "&depth=" + plant.depth;
        body += "&initDatePlant=" + plant.initDatePlant + "&finDatePlant=" + plant.finDatePlant;
        body += "&initDateBloom=" + plant.initDateBloom + "&finDateBloom=" + plant.finDateBloom;
        body += "&initDateHarvest=" + plant.initDateHarvest + "&finDateHarvest=" + plant.finDateHarvest;
        body += "&distance=" + plant.distance + "&diseaseResist=" + plant.diseaseResist;
        body += "&leaveType=" + plant.leaveType;
        body += "&photo=" + plant.photo;
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/plant", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.modify = function (plant) {
        var body = "commonName=" + plant.commonName + "&scientificName=" + plant.scientificName;
        body += "&description=" + plant.description + "&family=" + plant.family + "&depth=" + plant.depth;
        body += "&initDatePlant=" + plant.initDatePlant + "&finDatePlant=" + plant.finDatePlant;
        body += "&initDateBloom=" + plant.initDateBloom + "&finDateBloom=" + plant.finDateBloom;
        body += "&initDateHarvest=" + plant.initDateHarvest + "&finDateHarvest=" + plant.finDateHarvest;
        body += "&distance=" + plant.distance + "&diseaseResist=" + plant.diseaseResist;
        body += "&leaveType=" + plant.leaveType;
        body += "&photo=" + plant.photo;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "admin/plant/" + plant.id, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.detailsAll = function (page, items) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "plants" + "/" + items + "/" + page + "/NAME/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.detailsAllFamilies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "families" + "/100/1/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.details = function (numplant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "plant/" + numplant, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.searchAll = function (plant, page, items) {
        var body = "commonName=" + plant.commonName;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "find/Plant/" + items + "/" + page + "/commonName/ASC", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.getNumberItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "numPlants/", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService.prototype.deletePlant = function (idPlant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "admin/plant/" + idPlant, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PlantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PlantService);
    return PlantService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
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




var ProductService = (function () {
    function ProductService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    ProductService.prototype.detailsAll = function (page, items) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/products" + "/" + items + "/" + page + "/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.save = function (product) {
        var body = "name=" + product.name + "&type=" + product.type + "&description=" + product.description;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/product", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.modify = function (product) {
        var body = "name=" + product.name + "&description=" + product.description;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "admin/product/" + product.id, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.getNumberItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "/admin/numProducts", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.deleteProduct = function (idProduct) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "admin/product/" + idProduct, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.details = function (numproduct) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "product/" + numproduct, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
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




var TaskService = (function () {
    function TaskService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    TaskService.prototype.detailsAll = function (fecha_actual) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "monthTask/" + fecha_actual, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/treatment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentService; });
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




var TreatmentService = (function () {
    function TreatmentService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    TreatmentService.prototype.save = function (treatment) {
        var body = "name=" + treatment.name + "&description=" + treatment.description;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/treatment", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService.prototype.modify = function (treatment) {
        var body = "name=" + treatment.name + "&description=" + treatment.description;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "admin/treatment/" + treatment.id, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService.prototype.detailsAll = function (page, items) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/treatments" + "/" + items + "/" + page + "/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService.prototype.getNumberItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "/admin/numTreatments", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService.prototype.deleteTrearment = function (idTrearment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "admin/treatment/" + idTrearment, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService.prototype.details = function (numtreatment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "treatment/" + numtreatment, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TreatmentService);
    return TreatmentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/treatmentplant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPlantService; });
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




var TreatmentPlantService = (function () {
    function TreatmentPlantService(http, _route) {
        this.http = http;
        this._route = _route;
        this.apiURL = "";
        if (window.location.toString().indexOf("localhost") >= 0) {
            this.apiURL = "http://localhost:3000/api/";
        }
        else if (window.location.toString().indexOf("gardiot") >= 0) {
            this.apiURL = "https://gardiot.ovh/api/";
        }
    }
    TreatmentPlantService.prototype.savetreatment = function (treatmentPlant, idPlant) {
        console.log(treatmentPlant);
        var body = "plant=" + idPlant + "&treatment=" + treatmentPlant.treatment;
        body += "&frequency=" + treatmentPlant.frequency + "&initDate=" + treatmentPlant.initDate;
        body += "&finalDate=" + treatmentPlant.finalDate;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/treatmentPlant", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentPlantService.prototype.saveproduct = function (treatment, product, idPlant) {
        var body = "plant=" + idPlant + "&treatment=" + treatment + "&product=" + product;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/productTreatment", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentPlantService.prototype.showProductPlant = function (treatment, idPlant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
        });
        return this.http.get(this.apiURL + "productTreatmentPlant/" + treatment + "/" + idPlant + "/10/1/ASC", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    // mostrar Tratamientos de una planta
    TreatmentPlantService.prototype.detailsTreatment = function (numplant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
        });
        return this.http.get(this.apiURL + "treatmentPlant/" + numplant + "/100/1/ASC", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    TreatmentPlantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TreatmentPlantService);
    return TreatmentPlantService;
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
        else if (window.location.toString().indexOf("gardiot") >= 0) {
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
                if (window.location.toString().indexOf("gardiot") >= 0) {
                }
                else {
                    console.log("Usuario " + user.id + " logueado");
                    localStorage.setItem('Bearer', res.json().Token);
                    var expires = Date.now() + (6 * 60 * 60 * 1000); //6 horas para que expire el token
                    localStorage.setItem('expires_at', expires.toString());
                }
            }
            return res.json();
        });
    };
    UserService.prototype.registerAdmin = function (user) {
        var body = "id=" + user.id + "&password=" + user.password + "&password2=" + user.password2;
        body += "&name=" + user.name + "&lastName=" + user.lastName;
        body += "&admin=" + user.admin;
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(this.apiURL + "admin/user", body, { headers: headers })
            .map(function (res) {
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
    UserService.prototype.details = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "user/" + user.id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.detailsByUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/user/" + user.id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.detailsAll = function (page, items) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "admin/users/" + items + "/" + page + "/name/asc", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (idUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.delete(this.apiURL + "admin/user/" + idUser, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getNumberItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer']
        });
        return this.http.get(this.apiURL + "/admin/numUsers", { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.savePhotoUser = function (photo) {
        var body = "photo=" + photo;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "user", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.modifyUserProfile = function (user) {
        var body = "name=" + user.name;
        if (user.lastName !== undefined) {
            body += "&lastName=" + user.lastName;
        }
        if (user.photo !== undefined) {
            console.log(user.photo);
            body += "&photo=" + user.photo;
        }
        var country = 0;
        if (user.birthDate != null) {
            console.log(user.birthDate);
            body += "&birthDate=" + user.birthDate;
        }
        if (user.oldPassword && user.password) {
            body += "&password=" + user.password + "&password2=" + user.password2 + "&oldPassword=" + user.oldPassword;
        }
        if (user.countryCode) {
            body += "&countryCode=" + user.countryCode;
            country = 1;
        }
        if (user.city !== undefined && country == 1) {
            console.log(user.city);
            body += "&city=" + user.city;
        }
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "user", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.modifyUserProfileAdmin = function (user, oldId, user2) {
        var body = "name=" + user.name;
        body += "&lastName=" + user.lastName;
        body += "&admin=" + user.admin;
        var country = 0;
        if (user.birthDate != null) {
            body += "&birthDate=" + user.birthDate;
        }
        if (user2.countryCode) {
            body += "&countryCode=" + user2.countryCode;
            country = 1;
        }
        if (user2.city && country == 1) {
            body += "&city=" + user2.city;
        }
        console.log("guapaaa" + body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + localStorage['Bearer'],
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.put(this.apiURL + "/admin/user/" + oldId, body, { headers: headers })
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
    UserService.prototype.listCitiesByZip = function (country, value) {
        return this.http.get(this.apiURL + "geonamesSearchByZip/" + value + "/" + country)
            .map(function (res) {
            return res.json();
        });
    };
    // reset password
    UserService.prototype.resetPassword = function (email) {
        var body = "email=" + email;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        //console.log(this.apiURL+"forgetPassword", body, { headers });
        return this.http.post(this.apiURL + "forgetPassword", body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    // reset password2
    UserService.prototype.newPassword = function (pass1, pass2, token) {
        // console.log("Hola New PASS");
        // console.log(pass1,pass2);
        var body = "password=" + pass1 + "&password2=" + pass2;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // console.log("CAMBIADO:"+this.apiURL+"resetPassword/"+token, body, { headers });
        return this.http.put(this.apiURL + "resetPassword/" + token, body, { headers: headers })
            .map(function (res) {
            // console.log("dentro de RES");
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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