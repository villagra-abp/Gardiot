import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html'
})

export class HeaderComponent implements OnInit{
    private authenticated:boolean;

    constructor( private user:UserService ){

    }
    ngOnInit(){
      this.user.isUserAdmin().subscribe(data=>{
        if(data){
          this.user.isAdmin=true;
        }
        else{
          this.user.isAdmin=false;
        }
      },
      error=>{
        this.user.isAdmin=false
      });
    }
}
