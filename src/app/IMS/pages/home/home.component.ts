import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      mat-nav-list mat-icon {
        color: black;
      }
    `,
  ],
})
export class HomeComponent {
  username = this.authService.user[0]?.username;
  role = this.authService.user[0]?.roles.role_name;

  links = [
    {
      title: 'Products',
      url: './products',
      icon: 'shopping_bag',
    },
    {
      title: 'Categories',
      url: './categories',
      icon: 'category',
    },
    {
      title: 'Users',
      url: './users',
      icon: 'group',
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
