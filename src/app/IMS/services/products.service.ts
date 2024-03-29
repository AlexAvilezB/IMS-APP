import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/data/products`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.baseUrl}/data/create/products`,
      product
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/data/products/${id}`);
  }

  editProduct(product: Product, id: string): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}/data/products/${id}`,
      product
    );
  }

  // deleteProduct(id: string) {
  //   return this.http.delete<Product>(`${this.baseUrl}/data/products/${id}`);
  // }
}
