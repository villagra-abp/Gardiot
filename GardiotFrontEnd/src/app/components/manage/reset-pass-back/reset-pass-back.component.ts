import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-reset-pass-back',
  templateUrl: './reset-pass-back.component.html',
  styleUrls: ['./reset-pass-back.component.css']
})
export class ResetPassBackComponent implements OnInit {

  token = "";
  constructor(
    private router: ActivatedRoute

  ) { }
  //Enviar los nuevos datos del usuario a UserService para guardarlos
  newPass(){
    console.log("NEW PASS");
    // var valor = f.value;
    // var email:String = valor.first;

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
      this.router.params.subscribe(params => {
      const data: any = params['key'];
      // Código...
      this.token = data;
      console.log("DATOS Token: "+this.token);
      });
  }

}
