import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/users';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/data/roles`);
  }
}
