import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/data/categories`);
  }

  getCategoriesById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/data/categories/${id}`);
  }

  createCategories(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/data/create/categories`, category);
  }

  editCategories(category: Category, id: string): Observable<Category> {
    return this.http.put<Category>(
      `${this.baseUrl}/data/categories/${id}`,
      category
    );
  }

  // deleteCategories(id: number): Observable<Category> {
  //   return this.http.delete<Category>(`${this.baseUrl}/categories/${id}`);
  // }
}
