import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from "../../app.component";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  public semaforo;
  public correo;
  public apiURL:string="https://gardiot.ovh/api/";
  constructor(
    public _appComponent:AppComponent,
    public _resetPassword:UserService,

  ) {}

  resetPass(f: NgForm) {
      var valor = f.value;
      var email:String = valor.first;
      // comprobar que el formulario no este vacio
      if (valor.first != "") {
      // LLAMADA A LA API
        this._resetPassword.resetPassword(email)
          .subscribe(data=>{
            this._appComponent.mensajeEmergente(data.Mensaje, "primary", "login/");
        },
        error => {
          let v = JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
        }else{
          this._appComponent.mensajeEmergente("Introduce un email.", "danger", "");
      }
    }

  ngOnInit() {

  }
}
