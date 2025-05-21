import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${environment.apiURL}/alumno`, alumno);
  }

  getAlumnoById(dni: string): Observable<Alumno> {
    return this.http.get<Alumno>(`${environment.apiURL}/alumno/${dni}`)
  }

  getAllAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${environment.apiURL}/alumno`)
  }
}
