import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: []
})
export class ListusersComponent {

  user:User{
    id:"hola",

  }

  constructor(
    private _detailService:UserService,
    private _route:Router){ }

  mostrar(){
    this._detailService.detailsAll(this.user)
        .subscribe(data=>{
          console.log(data);
        },
      error => {
        console.error(error);
        // this._route.navigate(['/login']);
      });

    }


  ngOnInit() {
    this.mostrar();
  }

}
