import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.login.isLoggedIn() && this.login.getUserRole() == "NORMAL"){
        console.log("Normal USer Logged In!");
        return true;
      }
      console.log("this.login.getUserRole() : "+this.login.getUserRole());
      console.log("this.login.isLoggedIn() : "+this.login.isLoggedIn());

      console.log("Others")
      this.router.navigate(['/login']);
    return false;
  }
  
}
