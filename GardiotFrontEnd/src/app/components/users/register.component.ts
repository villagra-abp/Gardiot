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
    name:"",
    password:"",
    password2:"",
    oldPassword:"",
    plan:"",
    birthDate:null
  }

  constructor(
    private _userService:UserService,
    private _route:Router){}

  guardar(user:NgForm){
    this._userService.register(this.user)
        .subscribe(data=>{
            this._route.navigate(['/detail']);
        });
  }

  ngOnInit() {
    if(this._userService.isAuthenticated()){
      this._route.navigate(['/detail']);
    }
  }
}
