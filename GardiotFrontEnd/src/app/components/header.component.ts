import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html'
})

export class HeaderComponent {
    constructor( private user:UserService ){
      
    }
}
