import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { APP_ROUTING } from "./app.routes";

//services
import { UserService } from "./services/user.service";

//guards
import { AuthGuard } from "./guards/authguard.guard"

import { AppComponent } from './app.component';

import { HeaderLogComponent } from './components/headerlog.component';
import { HeaderNoLogComponent } from './components/headernolog.component';
import { LoginComponent } from './components/users/login.component';
import { LogoutComponent } from './components/users/logout.component';
import { RegisterComponent } from './components/users/register.component';
import { FooterComponent } from './components/footer.component';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLogComponent,
    HeaderNoLogComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
