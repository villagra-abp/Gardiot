import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from "./services/user.service";

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user:UserService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.user.isUserAuthenticated()){
        this.user.isAuthenticated=true;
        return true;
      }
      else{
        this.user.isAuthenticated=false;
        this.router.navigate(['/login']);
      }
    return false;
  }
}