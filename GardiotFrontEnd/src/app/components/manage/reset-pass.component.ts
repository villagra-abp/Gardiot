import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  // user=new User("");
  public apiURL:string="https://gardiot.ovh/api/";
  constructor(
    private _appComponent:AppComponent,
    private _resetPassword:UserService,
  ) {}

  resetPass(f: NgForm) {
      var valor = f.value;
      var email:String = valor.first;

      // LLAMADA A LA API
      this._resetPassword.resetPassword(email)
        .subscribe(data=>{
    });
      this._appComponent.mensajeEmergente("Mensaje enviado. Revisa tu correo", "primary", "login");
    }

  ngOnInit() {
  }

}
