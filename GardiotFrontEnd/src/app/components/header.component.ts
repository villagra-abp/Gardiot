import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html'
})

export class HeaderComponent {

  admin:boolean=window.location.href.indexOf('admin')>=0;

    constructor( private user:UserService ){

    }
}
