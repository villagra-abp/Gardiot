import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../../classes/user.class';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-resend',
  templateUrl: './resend.component.html'
})
export class ResendComponent implements OnInit {

  user = new User("");

  constructor(
    public _resendService: UserService,
    public _route: Router) { }

  enviarEmail() {
    this._resendService.resendConfirmation()
      .subscribe(data => {
        console.log(data);
      },
        error => {

        });
  }

  ngOnInit() {
  }


}
