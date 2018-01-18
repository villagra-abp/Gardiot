import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  user:Object={
      id:"",
      name:"",
      password:"",
      password2:"",
      oldPassword:"",
      plan:"",
      birthDate:new Date(),
  }

  constructor(
    private _loginService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

//logueo de usuario y comprobación de si es admin o no
  guardar(){
    this._loginService.login(this.user)
        .subscribe(data=>{
          this._loginService.isUserAdmin().subscribe(data=>{
            if(data){
              this._loginService.isAdmin=true;
            }
            else{
              this._loginService.isAdmin=false;
            }
          },
          error=>{
            this._loginService.isAdmin=false
          });
          this._route.navigate(['/detail']);
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
