import { Component } from '@angular/core';
import { SancionService } from '../services/sancion.service';
import { AlumnosModalComponent } from '../alumnos-modal/alumnos-modal.component';
import { Sancion } from '../interfaces/sancion';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Alumno } from '../interfaces/alumno';
import { ModalDetalleSancionComponent } from '../modal-detalle-sancion/modal-detalle-sancion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-sanciones',
  templateUrl: './consultar-sanciones.component.html',
  styleUrl: './consultar-sanciones.component.css'
})
export class ConsultarSancionesComponent {

  sanciones: Sancion[] = [];
  modalRefAlumno: MdbModalRef<AlumnosModalComponent> | null = null;
  modalRefADetalleSancion: MdbModalRef<ModalDetalleSancionComponent> | null = null;

  hayAlumno = false;
  alumno = {} as Alumno;
  sancion = {} as Sancion;
  constructor(private sancionService: SancionService, private modalService: MdbModalService, private router: Router) {
  }

  abrirModalAlumno(): void {
    this.modalRefAlumno = this.modalService.open(AlumnosModalComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRefAlumno.onClose.subscribe((alumnoSeleccionado: Alumno) => {
      if (alumnoSeleccionado) {
        this.sancionService.getAllSancionesByAlumno(alumnoSeleccionado.dni).subscribe(data => {
          this.sanciones = data;
          this.alumno = alumnoSeleccionado;
          this.hayAlumno = true;
        });
      }
    });
  }

  abrirModalDetalleSancion(sancion: Sancion): void {
    this.modalRefADetalleSancion = this.modalService.open(ModalDetalleSancionComponent, {
      data: { id: sancion.id },
      modalClass: 'modal-lg modal-dialog-centered'
    });
    this.modalRefADetalleSancion.onClose.subscribe((idSancion: number) => {
      if (idSancion) {
        this.sancionService.getSancionById(idSancion).subscribe(
          data => {
            this.sancion = data;
        })
      }
    });
  }

  editarSancion(sancion: Sancion) {
  this.router.navigate(['/modificar-sancion'], { state: { sancion } });
}

}
