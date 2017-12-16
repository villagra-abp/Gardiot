import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { RegisterService } from "./services/register.service";

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { FormComponent } from './components/form.component';
import { FormRegisterComponent } from './components/form-register.component';
import { FooterComponent } from './components/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent,
    FormRegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
