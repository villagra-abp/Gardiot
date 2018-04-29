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
  public semaforo;
  public correo;
  public apiURL:string="https://gardiot.ovh/api/";
  constructor(
    private _appComponent:AppComponent,
    private _resetPassword:UserService,
    private _isAdmin:UserService,
    private _userExist:UserService,
  ) {}

  isAdmin(){
    // LLAMADA A LA API
    this._isAdmin.isUserAdmin()
      .subscribe(data=>{
        this.semaforo = data;
        console.log("Es admin ? "+this.semaforo);
    });
  }

  resetPass(f: NgForm) {
      var valor = f.value;
      var email:String = valor.first;
      // comprobar que el formulario no este vacio
      if (valor.first != "") {
        // comprobar que el usuario exista
        this._userExist.isUser(email)
          .subscribe(data=>{
            this.correo=data[0].id;
          });

          if(this.correo != undefined){
            // comprueba si el usuario es admin o no
              if(this.semaforo){ // bool que comprueba si es admin
                // LLAMADA A LA API
                this._resetPassword.resetPassword(email)
                  .subscribe(data=>{
              });
                this._appComponent.mensajeEmergente("Mensaje enviado al usuario", "primary", "admin/edituser/"+email); /*/admin/edituser/   admin/users?pag=1 */
              }else{
                // console.log("NO soy admin");
                // LLAMADA A LA API
                this._resetPassword.resetPassword(email)
                  .subscribe(data=>{
              });
                this._appComponent.mensajeEmergente("Mensaje enviado. Revisa tu correo", "primary", "login");
              }

          }else{
            this._appComponent.mensajeEmergente("No existe el usuario", "danger", "");

          }

        }

        else{
          this._appComponent.mensajeEmergente("Introduce un email.", "danger", "");
      }
    }

  ngOnInit() {
    this.isAdmin();
  }
}
