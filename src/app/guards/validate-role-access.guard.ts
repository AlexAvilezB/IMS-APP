import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { SnackBarService } from '../IMS/services/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateRoleAccessGuard implements CanActivate, CanMatch {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snack: SnackBarService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    const permission = this.authService.userAccess();
    if (permission !== 'admin') {
      this.router.navigateByUrl('dashboard/products');
      this.snack.showSnack('Unathorized for navigate to this route');
      return false;
    } else {
      return true;
    }
  }
  canMatch(): Observable<boolean> | boolean {
    const permission = this.authService.userAccess();
    if (permission !== 'admin') {
      this.router.navigateByUrl('dashboard/products');
      this.snack.showSnack('Unathorized for navigate to this route');
      return false;
    } else {
      return true;
    }
  }
}