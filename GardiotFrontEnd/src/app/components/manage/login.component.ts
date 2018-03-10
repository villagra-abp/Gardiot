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
  url:string;


  constructor(
    private _loginService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){
      if(window.location.toString().indexOf("localhost")>=0){
        this.url="http://localhost:4200/";
      }
      else if(window.location.toString().indexOf("gardiot")>=0){
        this.url="https://gardiot.ovh/app/";
      }}

//logueo de usuario y comprobación de si es admin o no
  guardar(){
    this._loginService.login(this.user)
        .subscribe(data=>{
          this._loginService.isAuthenticated=true;

          //comprobar si es admin
          this._loginService.isUserAdmin().subscribe(data=>{
            if(data){
              this._loginService.isAdmin=true;
              localStorage.setItem('Par', '1');
              this._route.navigate(['/admin/statistics']);
            }
            else{
              this._loginService.isAdmin=false;
              window.location.href=this.url+"detail";
              //this._route.navigate(['/detail']);
            }
          },error=>{
            this._loginService.isAdmin=false;
            window.location.href=this.url+"detail";
            //this._route.navigate(['/detail']);
          });




        },
        error=>{
          let v=JSON.parse(error._body);
          console.log(v.Mensaje);
          if(v.Mensaje=="Cuenta no activa"){
            this._route.navigate(['/resend']);
          }
          else{
            this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
          }

        });
  }


  ngOnInit() {
    if(this._loginService.isUserAuthenticated()){
      this._route.navigate(['/detail']);
    }
  }


}
