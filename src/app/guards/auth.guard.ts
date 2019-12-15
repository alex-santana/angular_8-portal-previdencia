import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  /**
   *
   */
  constructor(private authService:AuthenticationService, private router:Router) {
    
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.verifyAccess() !== true){
      console.log("401 - não autorizado ");
      this.router.navigate(['signin']);
    }

    return true;
  }

  canLoad(route:Route) : Observable<boolean> | Promise<boolean> | boolean
  {
    return this.verifyAccess();
  }

  verifyAccess() : boolean
  {
    if(this.authService.isLoggedIn){
      return true
    }

    return false;
  }
  
}
