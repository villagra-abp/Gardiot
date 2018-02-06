import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { APP_ROUTING } from "./app.routes";

//services
import { UserService } from "./services/user.service";
import { GardenService } from "./services/garden.service";

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
import { ConfirmationComponent } from './components/manage/confirmation.component';
import { ResendComponent } from './components/manage/resend.component';
import { LibraryComponent } from './components/user/library.component';
import { CalendarComponent } from './components/user/calendar.component';

//Admin imports
import { AdminListUsersComponent } from './components/admin/listusers.component';
import { AdminUserComponent } from './components/admin/user.component';
import { AdminEditUserComponent } from './components/admin/edituser.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin/dashboard.component';
import { GardenComponent } from './components/user/garden.component';
import { AnalyticsComponent } from './components/admin/analytics.component';
import { StatisticsComponent } from './components/admin/statistics.component';
import { EmailComponent } from './components/admin/email.component';
import { UserdataComponent } from './components/admin/userdata.component';
import { PlantdataComponent } from './components/admin/plantdata.component';
import { EventdataComponent } from './components/admin/eventdata.component';
import { ToolComponent } from './components/admin/tool.component';
import { InvoiceComponent } from './components/admin/invoice.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';




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
    ConfirmationComponent,
    ResendComponent,
    AdminComponent,
    AdminListUsersComponent,
    AdminEditUserComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    GardenComponent,
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
    DesarrolloComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService,
    GardenService,
    AuthguardGuard,
    AdminguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
