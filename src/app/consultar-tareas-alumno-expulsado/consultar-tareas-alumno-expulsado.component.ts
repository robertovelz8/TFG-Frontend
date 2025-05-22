import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlumnosModalComponent } from '../alumnos-modal/alumnos-modal.component';
import { Alumno } from '../interfaces/alumno';
import { TareaService } from '../services/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-tareas-alumno-expulsado',
  templateUrl: './consultar-tareas-alumno-expulsado.component.html',
  styleUrl: './consultar-tareas-alumno-expulsado.component.css'
})
export class ConsultarTareasAlumnoExpulsadoComponent {

  tareas: Tarea[] = [];
  modalRefAlumno: MdbModalRef<AlumnosModalComponent> | null = null;

  hayAlumno = false;
  alumno = {} as Alumno;
  tarea = {} as Tarea;
  constructor(private tareaService: TareaService, private modalService: MdbModalService, private router: Router) {
  }

  abrirModalAlumno(): void {
    this.modalRefAlumno = this.modalService.open(AlumnosModalComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRefAlumno.onClose.subscribe((alumnoSeleccionado: Alumno) => {
      if (alumnoSeleccionado) {
        this.tareaService.getTareasAlumnoExpulsado(alumnoSeleccionado.dni).subscribe(data => {
          this.tareas = data;
          this.alumno = alumnoSeleccionado;
          this.hayAlumno = true;
        });
      }
    });
  }
}
