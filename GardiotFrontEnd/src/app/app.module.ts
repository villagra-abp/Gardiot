import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { APP_ROUTING } from "./app.routes";

import { RegisterService } from "./services/register.service";

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header.component';
import { LoginComponent } from './components/users/login.component';
import { RegisterComponent } from './components/users/register.component';
import { FooterComponent } from './components/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
