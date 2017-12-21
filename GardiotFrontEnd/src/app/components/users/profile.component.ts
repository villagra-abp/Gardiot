import { Component} from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user:User={
    id:"",
    password:"",
    name:"",
    plan:"",
    birthDate:new Date(),
  }

  constructor(
    private _detailService:UserService,
    private _route:Router ){ }

  mostrar(){
    this._detailService.details(this.user)
        .subscribe(data=>{
          console.log(data);
          this.user.id=data.id;
          this.user.password=data.password;
          this.user.birthDate=data.birthDate;
          this.user.plan=data.plan;
          this.user.name=data.name;
        },
      error => {
        console.error(error);
        this._route.navigate(['/login']);
      });
    }

    edit(){
      this._detailService.modifyUserProfile(this.user)
          .subscribe(data=>{
            console.log(data);
          },
        error => {
          console.error(error);
          this._route.navigate(['/login']);
        });
      }


  ngOnInit() {
    this.mostrar();
  }


  }
