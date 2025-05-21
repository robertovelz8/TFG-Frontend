import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sancion } from '../interfaces/sancion';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SancionService {

  constructor(private http: HttpClient) { }

  createSancion(sancion: Sancion): Observable<Sancion> {
    return this.http.post<Sancion>(`${environment.apiURL}/sancion`, sancion);
  }

  getSancionById(idSancion: number): Observable<Sancion> {
    return this.http.get<Sancion>(`${environment.apiURL}/sancion/${idSancion}`);
  }

  getAllSanciones(): Observable<Sancion[]> {
    return this.http.get<Sancion[]>(`${environment.apiURL}/sancion`);
  }

  updateSancion(idSancion: number, sancion: Sancion): Observable<Sancion> {
    return this.http.put<Sancion>(`${environment.apiURL}/sancion/${idSancion}`, sancion);
  }

  deleteSancion(idSancion: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiURL}/sancion/${idSancion}`);
  }

  getAllSancionesByAlumno(dni: string): Observable<Sancion[]> {
    return this.http.get<Sancion[]>(`${environment.apiURL}/sancion/alumno/${dni}`)
  }
}
