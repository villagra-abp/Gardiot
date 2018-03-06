import { Component, OnInit } from '@angular/core';
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
  private numeroItems:number;
  private paginaActual:number=1;
  private elementosPorPagina:number=5;

  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent,
    private user:UserService){ }

  mostrar(){
    this._detailService.detailsAll()
        .subscribe(data=>{
          this.users=[];
          for(let key$ in data){
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

    deleteuser(idUser:number){
      this._detailService.deleteUser(idUser)
      .subscribe(data=>{
        this.mostrar();
      },
      error => {
        console.error(error);
      });
    }

    getitems(){
      this._detailService.getNumberItems()
      .subscribe(data=>{
        this.numeroItems=data[0].NUMPLANTAS;
        this.mostrar();
      },
      error => {
        console.error(error);
      });
    }


  ngOnInit() {
    this.mostrar();
  }

}
