import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/IMS/services/snack-bar.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../IMS/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .glass {
        background: rgba(255, 255, 255, 0.09);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.9px);
        -webkit-backdrop-filter: blur(2.9px);
        border: 1px solid rgba(255, 255, 255, 0.37);
      }
    `,
  ],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  userData!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackService: SnackBarService,
    private authService: AuthService
  ) {}

  validateFields(field: string) {
    return (
      this.miFormulario.controls[field].errors &&
      this.miFormulario.controls[field].touched
    );
  }

  login() {
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((resp) => {
      if (resp === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.snackService.showSnack(resp);
      }
    });
  }
}
