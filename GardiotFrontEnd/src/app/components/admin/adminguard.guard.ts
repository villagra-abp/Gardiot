import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from "../../services/user.service";

@Injectable()
export class AdminguardGuard implements CanActivate {

  constructor(public user: UserService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage['Par'] == '1') {
      return true;
    }
    else {
      this.router.navigate(['/detail']);
      return false;
    }
  }
}
