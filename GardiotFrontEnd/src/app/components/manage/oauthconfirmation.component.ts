import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-oauthconfirmation',
  template: ''
})
//Esta clase recibe el link de correo de confirmación de usuario y envía el token a la api para validarlo
export class OauthConfirmationComponent implements OnInit{

  constructor(
    private _comprobationService:UserService,
    private _router: ActivatedRoute,
    private _appComponent: AppComponent,
    private _route: Router){ }



  ngOnInit() {
    this._router.params.subscribe(params => {
            if(params['key']!=null){
              localStorage.setItem('Bearer',params['key']);
              this._route.navigate(['/detail']);
            }
         });
  }


}
