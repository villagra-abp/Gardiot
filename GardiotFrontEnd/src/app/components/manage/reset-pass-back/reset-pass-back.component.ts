import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass-back',
  templateUrl: './reset-pass-back.component.html',
  styleUrls: ['./reset-pass-back.component.css']
})
export class ResetPassBackComponent implements OnInit {

  constructor() { }
  //Enviar los nuevos datos del usuario a UserService para guardarlos
  newPass(){
    console.log("NEW PASS");
    // this._detailService.modifyUserProfile(this.user)
    //     .subscribe(data=>{
    //       this._appComponent.mensajeEmergente("Datos modificados", "success", "profile");
    //     },
    //   error => {
    //     let v=JSON.parse(error._body);
    //     this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
    //   });
  }

  ngOnInit() {
  }

}
