import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  user=new User("");
  constructor(
    private _appComponent:AppComponent,
  ) {}

  resetPass(f: NgForm) {
      var valor = f.value;
      var email = valor.first;
      // LLAMADA A LA API
      console.log(email);
      this._appComponent.mensajeEmergente("Mensaje enviado. Revisa tu correo", "primary", "login");
    }





  ngOnInit() {
  }

}
