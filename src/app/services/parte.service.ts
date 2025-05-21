import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parte } from '../interfaces/parte';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParteService {

  constructor(private http: HttpClient) { }

  createParte(parte: Parte): Observable<Parte> {
    return this.http.post<Parte>(`${environment.apiURL}/parte`, parte);
  }

  getParteById(idParte: number): Observable<Parte> {
    return this.http.get<Parte>(`${environment.apiURL}/parte/${idParte}`);
  }

  
      
}
