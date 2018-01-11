import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-confirmation',
  template: ''
})
export class ConfirmationComponent implements OnInit{

  user:User={
    id:"",
    name:"",
    password:"",
    password2:"",
    oldPassword:"",
    plan:"",
    birthDate:new Date(),
  }

  constructor(
    private _comprobationService:UserService,
    private _route:Router,
    private _router: ActivatedRoute ){ }



  ngOnInit() {
    this._router.params.subscribe(params => {
            if(params['key']!=null){
                this._comprobationService.comprobateActivationToken(params['key'])
                .subscribe(data=>{
                    console.log(data);
                    this._route.navigate(['/login']);
                  },
                error => {
                  console.error(error);
                  
                });
            }
         });
  }


}
