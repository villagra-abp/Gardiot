import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html'
})

export class HeaderComponent implements OnInit{

    constructor( private user:UserService ){

    }
    ngOnInit(){
      //comprueba si está autenticado
      if(this.user.isUserAuthenticated){
        this.user.isAuthenticated=true;
        //comprueba si es usuario admin
        this.user.isUserAdmin().subscribe(data=>{
          if(data){
            this.user.isAdmin=true;
          }
          else{
            this.user.isAdmin=false;
          }
        },
        error=>{
          if(error.status==401){
            this.user.isAuthenticated=false;
          }
          this.user.isAdmin=false
        });
      }
      else{
        this.user.isAuthenticated=false;
        this.user.isAdmin=false;
      }

    }
}
