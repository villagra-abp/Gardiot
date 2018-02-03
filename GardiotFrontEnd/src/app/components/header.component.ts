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

      if(this.user.isUserAuthenticated()){
        this.user.isAuthenticated=this.user.isUserAuthenticated();
        this.user.isUserAdmin().subscribe(data=>{
          if(data){
            this.user.isAdmin=true;
          }
          else{
            this.user.isAdmin=false;
          }
        },error=>{
          this.user.isAdmin=false;
        });
      }
      else{
        this.user.isAdmin=false;
      }

    }
}
