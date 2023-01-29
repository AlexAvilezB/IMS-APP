import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { Category, Product } from '../interfaces/products';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showSnack(message: string) {
    this.snackBar.open(message, 'Ok!', { duration: 5000});
  }
}
