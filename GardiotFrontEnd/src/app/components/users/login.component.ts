import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  user:User={
    id:"",
    name:"",
    password:"",
    password2:"",
    oldPassword:"",
    plan:"",
    birthDate:null
  }

  constructor(
    private _loginService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

  guardar(){
    this._loginService.login(this.user)
        .subscribe(data=>{
          this._appComponent.mensajeEmergente("Te has logueado correctamente!", "primary", "detail");

        },
        error=>{
          let v=JSON.parse(error._body);
          console.log(v.Mensaje);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }



  guardarGoogle(){
    this._loginService.loginGoogle()
      .subscribe(data=>{
      console.log(data);

    });

  }

  ngOnInit() {
    if(this._loginService.isAuthenticated()){
      this._route.navigate(['/detail']);
    }
  }


}
