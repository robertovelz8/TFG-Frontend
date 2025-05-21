import { Component } from '@angular/core';
import { SancionService } from '../services/sancion.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlumnosModalComponent } from '../alumnos-modal/alumnos-modal.component';
import { Sancion } from '../interfaces/sancion';

@Component({
  selector: 'app-consultar-sanciones',
  templateUrl: './consultar-sanciones.component.html',
  styleUrl: './consultar-sanciones.component.css'
})
export class ConsultarSancionesComponent {

  modalRef: MdbModalRef<AlumnosModalComponent> | null = null;
  sanciones: Sancion[] = [];

  constructor(private sancionService: SancionService, private modalService: MdbModalService) {
    this.getAllSanciones();
  }

  getAllSanciones(): void {
    this.sancionService.getAllSanciones().subscribe({
      next: (data) => {
        console.log('Sanciones recibidas con éxito');
        this.sanciones = data;
      },
      error: (err) => {
        console.log('Error al obtener las sanciones: ' + err);
      }
    })
  }

  abrirModal() {
    this.modalRef = this.modalService.open(AlumnosModalComponent, {
      modalClass: 'modal-dialog-centered'
    });
    console.log('Modal abierto...')
  }


}
