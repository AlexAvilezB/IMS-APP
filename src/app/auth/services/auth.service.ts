import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../IMS/interfaces/users';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion
  private _User!: User[];

  get user() {
    return { ...this._User };
  }

  constructor(private http: HttpClient) {}

  getByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      map( res => this._User = res)
    );
  }

  logout() {
    localStorage.removeItem('logged');
  }

  validateSession(): Observable<boolean> {
    if( localStorage['logged']) {
      return of(true);
    } else {
      return of(false);
    }
  }

}

