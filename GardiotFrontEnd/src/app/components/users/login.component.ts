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
    password:""
  }

  constructor(
    private _loginService:UserService,
    private _route:Router ){ }

  guardar(){
    this._loginService.login(this.user)
        .subscribe(data=>{
          this._route.navigate(['/index']);
        });
  }

  guardarGoogle(){
    this._loginService.loginGoogle()
    .subscribe(data=>{
      console.log(data);
    });
  }

  ngOnInit() {

  }


}
