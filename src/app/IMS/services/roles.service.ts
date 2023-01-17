import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  baseUrl = 'http://localhost:3000'; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/roles`);
  }

}
