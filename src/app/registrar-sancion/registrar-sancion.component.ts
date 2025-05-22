import { Component } from '@angular/core';
import { SancionService } from '../services/sancion.service';
import { Sancion } from '../interfaces/sancion';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlumnosModalComponent } from '../alumnos-modal/alumnos-modal.component';
import { Alumno } from '../interfaces/alumno';
import { PartesModalComponent } from '../partes-modal/partes-modal.component';
import { Parte } from '../interfaces/parte';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-sancion',
  templateUrl: './registrar-sancion.component.html',
  styleUrl: './registrar-sancion.component.css'
})
export class RegistrarSancionComponent {

  modalRefAlumno: MdbModalRef<AlumnosModalComponent> | null = null;
  modalRefParte: MdbModalRef<PartesModalComponent> | null = null;
  alumno: Alumno = {
    dni: '',
    nombre: '',
    apellidos: '',
    nombre_tutor_legal: '',
    apellidos_tutor_legal: '',
    email_tutor_legal: ''
  }
  parte: Parte = {
    motivo: '',
    fecha: new Date(),
    hora: { hours: 0, minutes: 0 },
    descripcion: '',
    lugar: ''
  };

  tiposSancion = [
    { valor: 'CON_EXPULSION_DENTRO', etiqueta: 'EXPULSIÓN EN CENTRO' },
    { valor: 'CON_EXPULSION_FUERA', etiqueta: 'EXPULSIÓN FUERA DEL CENTRO' },
    { valor: 'SIN_EXPULSION', etiqueta: 'SIN EXPULSIÓN' },
  ];

  sancion: Sancion = {
    fecha: new Date(),
    tipoSancion: '',
    duracion: '',
    tareas: [],
    alumno: {} as Alumno,
    parte: {} as Parte,
  };



  tipoSeleccionado: string | null = null;
  seleccionHechaAlumno = false;
  seleccionHechaParte = false;

  constructor(private sancionService: SancionService, private modalService: MdbModalService) {

  }

  createService(sancion: Sancion) {
    this.sancionService.createSancion(sancion).subscribe({
      next: (response) => {
        console.log('Sanción registrada: ' + response)
      },
      error: (error) => {
        console.error('Error al registrar la sanción: ', error);
      }
    })
  }

  abrirModalAlumno(): void {
    this.modalRefAlumno = this.modalService.open(AlumnosModalComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRefAlumno.onClose.subscribe((alumnoSeleccionado: Alumno) => {
      if (alumnoSeleccionado) {
        this.alumno = alumnoSeleccionado;
        this.sancion.alumno = this.alumno
        this.seleccionHechaAlumno = true;
      }
    });
  }

  abrirModalParte(): void {
    this.modalRefParte = this.modalService.open(PartesModalComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRefParte.onClose.subscribe((parteSeleccionado: Parte) => {
      if (parteSeleccionado) {
        this.parte = parteSeleccionado;
        this.sancion.parte = this.parte
        this.seleccionHechaParte = true;
      }
    });
  }

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.sancion.tipoSancion = tipo;
  }

  getEtiquetaTipoSeleccionado(): string {
    const tipo = this.tiposSancion.find(t => t.valor === this.tipoSeleccionado);
    return tipo ? tipo.etiqueta : 'Selecciona una opción';
  }

  registrarSancion(): void {
    if (!this.seleccionHechaAlumno || !this.seleccionHechaParte || !this.tipoSeleccionado || !this.sancion.duracion || !this.sancion.fecha) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    this.createService(this.sancion);
    Swal.fire({
      icon: 'success',
      title: 'Sanción registrada',
      text: 'La sanción se ha registrado correctamente.',
      confirmButtonText: 'Aceptar'
    });
  }
}
