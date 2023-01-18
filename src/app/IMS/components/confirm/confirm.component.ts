import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, Category } from '../../interfaces/products';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent {

  constructor( private dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: string ) {

  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close( true );
  }

}
