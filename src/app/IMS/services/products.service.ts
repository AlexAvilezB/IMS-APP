import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Category } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:3000'; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  editProduct(product: Product, id: number ): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${id}`, product);
  };
}
