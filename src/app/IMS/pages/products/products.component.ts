import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( products => {
      this.products = products;
    });
  }
}
