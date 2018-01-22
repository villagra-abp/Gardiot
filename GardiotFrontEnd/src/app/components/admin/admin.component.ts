import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { AdminListUsersComponent } from "./listusers.component";
import { AdminUserComponent } from "./user.component";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent {
  users:any[] = [];

  constructor(
    private _detailService:UserService,
    private _route:Router){ }



  ngOnInit() {

  }

}
