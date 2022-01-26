import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root'
})
export class CanActivateTeamGuard implements CanActivate {

  user: any;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
    ){
    this.user = this.route.snapshot.paramMap.get('id');
    console.log(this.user);
  }


  canActivate(): boolean {
    if (this.authService.isLoggedIn()){
      return true;
    }else {
      // this.router.navigate(['team'])
      return false;
    }
  }
  
}
