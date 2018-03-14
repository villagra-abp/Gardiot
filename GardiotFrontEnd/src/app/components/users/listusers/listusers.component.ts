import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { AppComponent } from "../../../app.component";
import { RouterLink,ActivatedRoute, Params } from '@angular/router';


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
  private estado:boolean=false;// false es listado y true buscador

  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent,
    private activatedRoute: ActivatedRoute){ }


    mostrar(){
      if(this.estado==false){
        this._detailService.detailsAll(this.paginaActual,this.elementosPorPagina)
            .subscribe(data=>{
              this.users=[];
              for(let key$ in data){
                this.users.push(data[key$]);
              }
            },
          error => {
            console.error(error);
          });
      }else{
      // this.searchcontent(this.paginaActual,this.elementosPorPagina);
       console.log("assss");
      }
    }

    deleteuser(idUser:number){
      this._detailService.deleteUser(idUser)
      .subscribe(data=>{
        this.ActualizarPagina();
      },
      error => {
        console.error(error);
      });
    }

    ActualizarPagina(){
      this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.paginaActual = params['pag'];
          this.getitems();
        });
   }

   getitems(){
     this._detailService.getNumberItems()
     .subscribe(data=>{
       if(this.estado==false){
         this.numeroItems=data[0].NUMUSERS;
       }
       this.mostrar();
     },
     error => {
       console.error(error);
     });
   }

  ngOnInit() {
    this.ActualizarPagina();
  }

}
