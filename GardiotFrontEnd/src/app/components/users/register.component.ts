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
    name:"",
    plan:"",
    birthDate:null

  }

  constructor(
    private _registerService:UserService,
    private _route:Router){}

  guardar(){
    this._registerService.register(this.user)
        .subscribe(data=>{
          this._route.navigate(['/index']);
        });
  }

  ngOnInit() {

  }
}
