import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      mat-nav-list mat-icon {
        color: black;
      }
    `
  ],
})
export class HomeComponent {

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
}
