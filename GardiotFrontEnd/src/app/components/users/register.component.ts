import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  user:User={
    id:"",
    password:"",
    password2:"",
    name:"",
    plan:"",
    birthDate:null
  }

  constructor(
    private _userService:UserService,
    private _route:Router){}

  guardar(){
    this._userService.register(this.user)
        .subscribe(data=>{
          this._userService.login(this.user)//una vez se registra, loguea automáticamente al usuario. PROVISIONAL
              .subscribe(data=>{
                this._route.navigate(['/detail']);
              });
        });
  }

  ngOnInit() {

  }
}
