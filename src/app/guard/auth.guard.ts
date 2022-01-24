import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,   RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
  
 
}
