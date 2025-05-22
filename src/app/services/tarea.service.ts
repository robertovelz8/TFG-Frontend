import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${environment.apiURL}/tarea`, tarea)
  }

  getTareasAlumnoExpulsado(dni: string): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${environment.apiURL}/tarea/tareas-alumno-expulsado/${dni}`)
  }

}
