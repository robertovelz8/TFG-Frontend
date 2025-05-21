import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AlumnoService } from '../services/alumno.service';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-alumnos-modal',
  templateUrl: './alumnos-modal.component.html',
  styleUrls: ['./alumnos-modal.component.css']
})
export class AlumnosModalComponent implements OnInit {

  alumnos: Alumno[] = [];
  alumnosFiltrados: Alumno[] = [];
  alumnoSeleccionado: Alumno | null = null;
  busqueda: string = '';

  constructor(
    public modalRef: MdbModalRef<AlumnosModalComponent>,
    private alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumnoService.getAllAlumnos().subscribe(data => {
      this.alumnos = data;
      this.alumnosFiltrados = [...this.alumnos];
    });
  }

  filtrarAlumnos(): void {
    const filtro = this.busqueda.toLowerCase().trim();
    const palabras = filtro.split(/\s+/); 

    this.alumnosFiltrados = this.alumnos.filter(alumno => {
      const nombre = alumno.nombre.toLowerCase();
      const apellidos = alumno.apellidos.toLowerCase();

      return palabras.every(palabra =>
        nombre.includes(palabra) || apellidos.includes(palabra)
      );
    });
  }


  seleccionarAlumno(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  confirmarSeleccion(): void {
    if (this.alumnoSeleccionado) {
      this.modalRef.close(this.alumnoSeleccionado);
    }
  }

  cerrarModal(): void {
    this.modalRef.close();
  }
}
