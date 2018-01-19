import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from "../../services/user.service";

@Injectable()
export class AdminguardGuard implements CanActivate {

  constructor(private user:UserService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.user.isUserAdmin().subscribe(data=>{
        if(data){
          this.user.isAdmin=true;
          return true;
        }
        else{
          this.user.isAdmin=false;
          this.router.navigate(['/detail']);
          return false;
        }
      });
      this.router.navigate(['/detail']);
      return false;

  }
}
