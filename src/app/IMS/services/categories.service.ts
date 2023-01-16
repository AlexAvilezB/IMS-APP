import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl = 'http://localhost:3000'; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getCategoriesById( id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/categories/${id}`);
  }

  createCategories( category: Category ): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/categories`, category);
  }

  editCategories( category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/categories/${id}`, category);
  }

  deleteCategories( id: number ): Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}/categories/${id}`);
  }
}
