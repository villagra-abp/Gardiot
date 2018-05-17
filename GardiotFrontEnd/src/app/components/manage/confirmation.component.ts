import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-confirmation',
  template: ''
})
//Esta clase recibe el link de correo de confirmación de usuario y envía el token a la api para validarlo
export class ConfirmationComponent implements OnInit {

  constructor(
    public _comprobationService: UserService,
    public _router: ActivatedRoute,
    public _appComponent: AppComponent) { }



  ngOnInit() {
    this._router.params.subscribe(params => {
      if (params['key'] != null) {
        this._comprobationService.comprobateActivationToken(params['key'])
          .subscribe(data => {
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
