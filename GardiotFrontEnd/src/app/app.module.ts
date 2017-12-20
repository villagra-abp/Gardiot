import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { APP_ROUTING } from "./app.routes";

//services
import { UserService } from "./services/user.service";


import { AppComponent } from './app.component';

import { HeaderLogComponent } from './components/headerlog.component';
import { HeaderNoLogComponent } from './components/headernolog.component';
import { LoginComponent } from './components/users/login.component';
import { LogoutComponent } from './components/users/logout.component';
import { RegisterComponent } from './components/users/register.component';
import { FooterComponent } from './components/footer.component';
import { DetailComponent } from './components/users/detail.component';
import { ProfileComponent } from './components/users/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLogComponent,
    HeaderNoLogComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    DetailComponent,
    ProfileComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
