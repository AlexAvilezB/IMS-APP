import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Category } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  baseUrl = 'http://localhost:3000'; //link de desarrollo, cambiar en produccion

  constructor( private http: HttpClient ) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  createProduct( product: Product ): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }
}
