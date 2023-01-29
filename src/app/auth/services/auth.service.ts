import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of, catchError, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

import { AuthResponse, UserSession } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion
  private _User!: UserSession;

  get user() {
    return { ...this._User };
  }

  constructor(private http: HttpClient) {}

  login( email: string, password: string ) {
    const body = { email, password };
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/login`, body)
      .pipe(
        tap( resp => {
          if( resp.ok ) {
            localStorage.setItem('token', resp.token!);
            this._User = {
              name: resp.name!,
              uid: resp.uid!,
              role: resp.role!
            }
          }
        }),
        map((resp) => resp.ok),
        catchError((err) => of(err.error.msg))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  validateSession() {
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(`${this.baseUrl}/auth/renew`, { headers })
    .pipe(
      map( resp => {
        console.log(resp);
        localStorage.setItem('token', resp.token!);
        this._User = {
          name: resp.name!,
          uid: resp.uid!,
          role: resp.role!,
        };
        return resp.ok;
      }),
      catchError( err => of(false))
    )
  }

}

