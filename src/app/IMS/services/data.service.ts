import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = environment.baseUrl; //link de desarrollo, cambiar en produccion

  
  constructor(private http: HttpClient) {}

  getTotalData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.baseUrl}/stats/data`);
  }
}
