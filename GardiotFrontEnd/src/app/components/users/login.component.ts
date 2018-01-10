import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

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
    private _route:Router ){ }

  guardar(){
    this._loginService.login(this.user)
        .subscribe(data=>{
          let div=document.createElement("div");
          div.className="alert alert-primary msg";
          div.setAttribute("role", "alert");
          div.innerHTML="Te has logueado correctamente!<a [routerLink]=\"['/details']\" href=\"#\" class=\"btn btn-info\" role=\"button\">Aceptar</a>";
          document.querySelector("body").appendChild(div);
        });
  }

  goToDetails(){
    this._route.navigate(['/detail']);
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
