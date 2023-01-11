import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
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
      title: 'users',
      url: './users',
      icon: 'group',
    },
  ];
}
