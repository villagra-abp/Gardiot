import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
@Component({
  template: ''
})

export class LogoutComponent implements OnInit {

  constructor(
    private _logoutService: UserService,
    private _route: Router) { }

  ngOnInit() {
    this._logoutService.logout()
      .subscribe(data => {
        if (data.Mensaje == "Desconectado") {
          localStorage.removeItem('Bearer');
          this._route.navigate(['/login']);
        }
      },
      error => {
        localStorage.clear();
        this._route.navigate(['/login']);
      });

    sessionStorage.clear();
    this._logoutService.isAdmin = false;
    this._logoutService.isAuthenticated = false;


  }
}
