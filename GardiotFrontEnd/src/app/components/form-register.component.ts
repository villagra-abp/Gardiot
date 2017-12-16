import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Register } from "../interfaces/register.interface";
import { RegisterService } from "../services/register.service";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html'
})
export class FormRegisterComponent{
  register:Register={
    email:"",
    password:""
  }

  constructor(private _registerService:RegisterService){}

  guardar(){
    this._registerService.nuevoRegistro(this.register)
        .subscribe(data=>{

        });
  }
}
