import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from "../../../services/user.service";
import { AppComponent } from "../../../app.component";

@Component({
  selector: 'app-reset-pass-back',
  templateUrl: './reset-pass-back.component.html',
  styleUrls: ['./reset-pass-back.component.css']
})
export class ResetPassBackComponent implements OnInit {

  public token = "";
  public password = "";
  public password2 = "";
  constructor(
    public _appComponent: AppComponent,
    public router: ActivatedRoute,
    public _newPass: UserService

  ) { }
  //Enviar los nuevos datos del usuario a UserService para guardarlos
  newPass(f: NgForm) {
    var valor = f.value;
    var pass1: String = valor.first;
    var pass2: String = valor.second;

    if (pass1 == pass2) {
      this.password = pass1.toString();
      this.password2 = pass2.toString();
      this._newPass.newPassword(this.password, this.password2, this.token)
        .subscribe(data => {
        });
      this._appComponent.mensajeEmergente("Contraseña restablecida", "primary", "login");

    } else {
      this._appComponent.mensajeEmergente("Introduce contraseñas iguales", "danger", "");
    }
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const data: any = params['key'];
      this.token = data;
    });
  }
}
