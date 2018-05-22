import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  public user: User = {
    id: '',
    name: '',
    lastName: '',
    password: '',
    password2: '',
    oldPassword: '',
    photo: '',
    countryCode: '',
    city: '',
    birthDate: '',
    active: 0,
    admin: 0
  }

  constructor(
    public _loginService: UserService,
    public _route: Router,
    public _appComponent: AppComponent) { }

  //logueo de usuario y comprobación de si es admin o no
  guardar() {
    this._loginService.login(this.user)
      .subscribe(data => {
        this._loginService.isAuthenticated = true;

        //comprobar si es admin
        this._loginService.isUserAdmin().subscribe(data => {
          if (data) {
            this._loginService.isAdmin = true;
            localStorage.setItem('Par', '1');
            this._route.navigate(['/admin/statistics']);
          }
          else {
            this._loginService.isAdmin = false;
            this._route.navigate(['/detail']);
          }
        }, error => {
          this._loginService.isAdmin = false;
          this._route.navigate(['/detail']);
        });

      },
        error => {
          let v = JSON.parse(error._body);
          console.log(v.Mensaje);
          if (v.Mensaje == "Cuenta no activa") {
            this._route.navigate(['/resend']);
          }
          else {
            this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
          }

        });
  }


  ngOnInit() {
    if (this._loginService.isUserAuthenticated()) {
      this._route.navigate(['/detail']);
    }
  }

}
