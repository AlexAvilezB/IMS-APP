import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateSessionGuard implements CanActivate, CanMatch {

  constructor( private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return true;
  }
  canMatch(): Observable<boolean> | boolean {
    return true;
  }
}
