import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CanActivateTeamGuard implements CanActivate {


  canActivate(next: ActivatedRouteSnapshot): boolean {
    // let etat = JSON.parse(next.queryParams['id']);
    let state = localStorage.getItem('byu5wec467ubwbtec7n6wc7er6');
    if (state === "byu5wec4677er6"){
      return true;
    }
    return false;
  }
  
}
