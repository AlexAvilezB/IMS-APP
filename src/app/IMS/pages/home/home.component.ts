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

      mat-nav-list a:hover {
        transition: 0.5s ease;
        box-shadow: inset 2px 0px #f5cf3d;
      }

      mat-nav-list a:hover mat-icon {
        animation: bounce 1s;
      }

      .bg-dark-blue {
        background-color: #1c2b36;
      }

      mat-sidenav-container {
        background-color: #f0f3f4;
      }
    `,
  ],
})
export class HomeComponent {
  username = this.authService.user.name;
  role = this.authService.user.role;

  links = [
    {
      title: 'Dashboard',
      url: './dashboard',
      icon: 'home',
    },
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
