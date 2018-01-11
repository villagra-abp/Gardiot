import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { AppComponent } from "../../app.component";

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
    private _router: ActivatedRoute,
    private _appComponent: AppComponent ){ }



  ngOnInit() {
    this._router.params.subscribe(params => {
            if(params['key']!=null){
                this._comprobationService.comprobateActivationToken(params['key'])
                .subscribe(data=>{
                    console.log(data);
                    this._appComponent.mensajeEmergente("Tu cuenta se ha activado correctamente! Loguéate ahora", "primary", "login");
                  },
                error => {
                  this._appComponent.mensajeEmergente("Ha habido un error activando tu cuenta, inténtalo más tarde", "danger", "login");
                });
            }
         });
  }


}
