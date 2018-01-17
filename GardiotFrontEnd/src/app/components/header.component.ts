import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html'
})

export class HeaderComponent implements OnInit{
    private isAdmin:boolean;
    private authenticated:boolean;

    constructor( private user:UserService ){

    }
    ngOnInit(){
      this.user.isAdmin().subscribe(data=>{
        if(data){
          this.isAdmin=true;
        }
        else{
          this.isAdmin=false;
        }
      });
    }
}
