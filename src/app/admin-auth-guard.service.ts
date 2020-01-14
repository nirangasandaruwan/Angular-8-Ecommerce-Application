import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private authService: AuthService,private userService : UserService) { }

  canActivate(route, state: RouterStateSnapshot) : Observable<boolean> {

    return  this.authService.user$.switchMap(user =>

        this.userService.get(user.uid)

     ).map(appuser => appuser.isAdmin);
   
  

}

}
