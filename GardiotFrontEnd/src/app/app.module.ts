import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {TabModule} from 'angular-tabs-component';
// import {Ng2PaginationModule} from 'ng2-pagination';

//Rutas
import { APP_ROUTING } from "./app.routes";

import { Select2Module } from 'ng2-select2';
import { FileSelectDirective } from 'ng2-file-upload';
import {Ng2ImgMaxModule} from "ng2-img-max";


//services
import { UserService } from "./services/user.service";
import { GardenService } from "./services/garden.service";
import { PlantService } from "./services/plant.service";
import { Ng2ImgMaxService } from "ng2-img-max";

//Oauth
import { OauthConfirmationComponent } from './components/manage/oauthconfirmation.component';

//Guards
import { AuthguardGuard } from "./authguard.guard";
import { AdminguardGuard } from "./components/admin/adminguard.guard";

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header.component';
import { LoginComponent } from './components/manage/login.component';
import { LogoutComponent } from './components/manage/logout.component';
import { RegisterComponent } from './components/manage/register.component';
import { FooterComponent } from './components/footer.component';
import { DetailComponent } from './components/user/detail.component';
import { ProfileComponent } from './components/user/profile.component';
import { EditProfileComponent } from './components/user/editprofile.component';
import { ConfirmationComponent } from './components/manage/confirmation.component';
import { ResendComponent } from './components/manage/resend.component';
import { LibraryComponent } from './components/plants/library/library.component';
import { CalendarComponent } from './components/user/calendar.component';
import { PlantComponent } from './components/plants/plant/plant.component';

//Admin imports
import { AdminListUsersComponent } from './components/admin/listusers.component';
import { AdminUserComponent } from './components/admin/user.component';
import { AdminEditUserComponent } from './components/admin/edituser.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin/dashboard.component';
import { GardenComponent } from './components/user/garden.component';
import { EditGardenComponent } from './components/user/editgarden.component';
import { AnalyticsComponent } from './components/admin/analytics.component';
import { StatisticsComponent } from './components/admin/statistics.component';
import { EmailComponent } from './components/admin/email.component';
import { UserdataComponent } from './components/admin/userdata.component';
import { PlantdataComponent } from './components/admin/plantdata.component';
import { EventdataComponent } from './components/admin/eventdata.component';
import { ToolComponent } from './components/admin/tool.component';
import { InvoiceComponent } from './components/admin/invoice.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NewplantComponent } from './components/Plants/newplant/newplant.component';
import { EditplantComponent } from './components/plants/editplant/editplant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    DetailComponent,
    ProfileComponent,
    EditProfileComponent,
    ConfirmationComponent,
    ResendComponent,
    AdminComponent,
    AdminListUsersComponent,
    AdminEditUserComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    GardenComponent,
    EditGardenComponent,
    AnalyticsComponent,
    StatisticsComponent,
    EmailComponent,
    UserdataComponent,
    PlantdataComponent,
    EventdataComponent,
    ToolComponent,
    InvoiceComponent,
    LibraryComponent,
    CalendarComponent,
    OauthConfirmationComponent,
    DesarrolloComponent,
    FileSelectDirective,
    PlantComponent,
    PaginationComponent,
    NewplantComponent,
    EditplantComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    Ng2ImgMaxModule,
    TabModule,
    // Ng2PaginationModule,
    APP_ROUTING
  ],
  providers: [
    UserService,
    GardenService,
    PlantService,
    Ng2ImgMaxService,
    AuthguardGuard,
    AdminguardGuard,
    PlantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
