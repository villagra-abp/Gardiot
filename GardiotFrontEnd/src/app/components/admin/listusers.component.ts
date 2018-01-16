import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-admin-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: []
})
export class AdminListUsersComponent {

  users:any[] = [];

  constructor(
    private _detailService:UserService,
    private _route:Router){ }

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
      alert("En un futuro no muy lejano este botón borrará el usuario "+id$);
    }


  ngOnInit() {
    this.mostrar();
  }

}
