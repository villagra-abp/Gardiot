//Rutas
import { APP_ROUTING } from "./app.routes";
import { DatePipe, registerLocaleData } from '@angular/common';
//services
import { UserService } from "./services/user.service";
import { GardenService } from "./services/garden.service";
import { PlantService } from "./services/plant.service";
import { TreatmentService } from "./services/treatment.service";
import { ProductService } from "./services/product.service";
import { FeedService } from "./services/feed.service";
import { TaskService } from "./services/task.service";
import { TreatmentPlantService } from "./services/treatmentplant.service";
import { Ng2ImgMaxService } from "ng2-img-max";
//libreries
import { Select2Module } from 'ng2-select2';
import { FileSelectDirective } from 'ng2-file-upload';
import {Ng2ImgMaxModule} from "ng2-img-max";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {TabModule} from 'angular-tabs-component';
import { AdminProfileComponent } from './components/admin/adminprofile.component';
//Oauth
import { OauthConfirmationComponent } from './components/manage/oauthconfirmation.component';
//Guards
import { AuthguardGuard } from "./authguard.guard";
import { AdminguardGuard } from "./components/admin/adminguard.guard";
import { AppComponent } from './app.component';
//header
import { HeaderComponent } from './components/header/header.component';
//calendario
import { CalendarComponent } from './components/calendar/calendar.component';
import localeEs from '@angular/common/locales/es';
//manage-App
import { LoginComponent } from './components/manage/login.component';
import { LogoutComponent } from './components/manage/logout.component';
import { RegisterComponent } from './components/manage/register.component';
import { ConfirmationComponent } from './components/manage/confirmation.component';
//Admin imports
import { AdminComponent } from './components/admin/admin.component';
import { StatisticsComponent } from './components/admin/statistics.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { PaginationComponent } from './components/pagination/pagination.component';
//garden
import { GardenComponent } from './components/gardens/garden/garden.component';
import { EditGardenComponent } from './components/gardens/editgarden/editgarden.component';
import { NewGardenComponent } from './components/gardens/newgarden/newgarden.component';
import { UserdataComponent } from './components/users/userdata/userdata.component';
//user
import { NewuserComponent } from './components/users/newuser/newuser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { AdminListUsersComponent } from './components/users/listusers/listusers.component';
import { DetailComponent } from './components/user/detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EditProfileComponent } from './components/user/editprofile.component';
import { ResendComponent } from './components/manage/resend.component';
//plants
import { NewplantComponent } from './components/plants/newplant/newplant.component';
import { EditplantComponent } from './components/plants/editplant/editplant.component';
import { PlantComponent } from './components/plants/plant/plant.component';
import { LibraryComponent } from './components/plants/library/library.component';
//treatment
import { NewtreatmentComponent } from './components/treatments/newtreatment/newtreatment.component';
import { EdittreatmentComponent } from './components/treatments/edittreatment/edittreatment.component';
import { ListtreatmentComponent } from './components/treatments/listtreatment/listtreatment.component';
import { TreatmentComponent } from './components/treatments/treatment/treatment.component';
//product
import { NewproductComponent } from './components/products/newproduct/newproduct.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { ListproductComponent } from './components/products/listproduct/listproduct.component';
import { ProductComponent } from './components/products/product/product.component';
//feed
import { FeedComponent } from './components/feeds/feed/feed.component';
import { NewfeedComponent } from './components/feeds/newfeed/newfeed.component';
import { EditfeedComponent } from './components/feeds/editfeed/editfeed.component';
import { ListfeedComponent } from './components/feeds/listfeed/listfeed.component';
import { ResetPassComponent } from './components/manage/reset-pass.component';
import { ResetPassBackComponent } from './components/manage/reset-pass-back/reset-pass-back.component';
import { NewtreatmentsplantsComponent } from './components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


import { CommonModule } from '@angular/common';

// POP UPS
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogHelpGardenComponent } from './components/dialog-gardenhelp/dialog-help-garden.component';
import { HelpComponent } from './components/help/help.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogNewgarden1Component } from './components/dialog-newgarden/dialog-newgarden1/dialog-newgarden1.component';
import { DialogNewgarden2Component } from './components/dialog-newgarden/dialog-newgarden2/dialog-newgarden2.component';
import { DialogNewgarden3Component } from './components/dialog-newgarden/dialog-newgarden3/dialog-newgarden3.component';
import { DialogTaskComponent } from './components/calendar/dialog-task/dialog-task.component';
import { DialogNewgarden0Component } from './components/dialog-newgarden/dialog-newgarden0/dialog-newgarden0.component';


registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    DetailComponent,
    EditProfileComponent,
    ConfirmationComponent,
    ResendComponent,
    AdminComponent,
    AdminListUsersComponent,
    AdminProfileComponent,
    EdituserComponent,
    NewuserComponent,
    GardenComponent,
    EditGardenComponent,
    NewGardenComponent,
    StatisticsComponent,
    UserdataComponent,
    LibraryComponent,
    CalendarComponent,
    OauthConfirmationComponent,
    DesarrolloComponent,
    FileSelectDirective,
    PlantComponent,
    PaginationComponent,
    NewplantComponent,
    EditplantComponent,
    NewtreatmentComponent,
    EdittreatmentComponent,
    ListtreatmentComponent,
    TreatmentComponent,
    NewproductComponent,
    EditproductComponent,
    ListproductComponent,
    ProductComponent,
    FeedComponent,
    NewfeedComponent,
    EditfeedComponent,
    ListfeedComponent,
    ResetPassComponent,
    ResetPassBackComponent,
    NewtreatmentsplantsComponent,
    DialogDeleteComponent,
    HelpComponent,
    DialogNewgarden1Component,
    DialogNewgarden2Component,
    DialogNewgarden3Component,
    DialogHelpGardenComponent,
    DialogTaskComponent,
    DialogNewgarden0Component,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    Ng2ImgMaxModule,
    TabModule,
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    APP_ROUTING
  ],
  providers: [
    UserService,
    GardenService,
    PlantService,
    Ng2ImgMaxService,
    AuthguardGuard,
    AdminguardGuard,
    TreatmentService,
    ProductService,
    FeedService,
    TaskService,
    TreatmentPlantService,
    DatePipe
  ],
  entryComponents: [
    DialogHelpGardenComponent,
    DialogDeleteComponent,
    DialogNewgarden0Component,
    DialogNewgarden1Component,
    DialogNewgarden2Component,
    DialogNewgarden3Component,
    DialogTaskComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
