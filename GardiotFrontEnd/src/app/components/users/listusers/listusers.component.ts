import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { AppComponent } from "../../../app.component";

@Component({
  selector: 'app-admin-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: []
})
export class AdminListUsersComponent {

  users:any[] = [];

  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

  mostrar(){
    this._detailService.detailsAll()
        .subscribe(data=>{
          //console.log(data);
          for(let key$ in data){
            //console.log(data[key$]);
            this.users.push(data[key$]);
          }
        },
      error => {
        console.error(error);
        // this._route.navigate(['/login']);
      });

    }

    borrarUsuario(id$:string){
      this._detailService.delete(id$)
          .subscribe(data=>{
              this._appComponent.mensajeEmergente(data.Mensaje, "primary", "");
              this.users=[];
              this.mostrar();
            },
        error => {
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
          // this._route.navigate(['/login']);
        });
    }


  ngOnInit() {
    this.mostrar();
  }

}
