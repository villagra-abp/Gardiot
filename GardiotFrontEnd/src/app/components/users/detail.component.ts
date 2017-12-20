import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit{

  user:User={
    id:"",
    password:"",
    name:"",
    plan:""
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
