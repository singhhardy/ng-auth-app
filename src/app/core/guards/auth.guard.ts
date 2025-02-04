import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(): boolean {
    if(!localStorage.getItem('accessToken')){
      this.router.navigate(['/'])
      return false;
    } else{
      return true;
    }
  }
}