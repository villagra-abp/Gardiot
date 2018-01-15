import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  user:Object={
    id:"",
    name:"",
    password:"",
    password2:"",
    oldPassword:"",
    plan:"",
    birthDate:null
  }

  constructor(
    private _userService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){}

  guardar(user:NgForm){
    this._userService.register(this.user)
        .subscribe(data=>{
            this._appComponent.mensajeEmergente("Te has registrado correctamente! Revisa tu correo para activar tu cuenta", "primary", "login");
        },
        error=>{
          let v=JSON.parse(error._body);
          console.log(v.Mensaje);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }

  ngOnInit() {
    if(this._userService.isAuthenticated()){
      this._route.navigate(['/detail']);
    }
  }
}
