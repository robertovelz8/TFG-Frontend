import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Sancion } from '../interfaces/sancion';
import { SancionService } from '../services/sancion.service';

@Component({
  selector: 'app-modal-sancion',
  templateUrl: './modal-sancion.component.html',
  styleUrl: './modal-sancion.component.css'
})
export class ModalSancionComponent implements OnInit {
  sanciones: Sancion[] = [];
  sancionesFiltradas: Sancion[] = [];
  sancionSeleccionada: Sancion | null = null;

  constructor(private modalRef: MdbModalRef<ModalSancionComponent>, private sancionService: SancionService) {

  }
  ngOnInit(): void {
    this.sancionService.getAllSanciones().subscribe(data => {
      this.sanciones = data.filter(sancion => !sancion.tareas || sancion.tareas.length === 0);
      this.sancionesFiltradas = [...this.sanciones];
    });
  }

  seleccionarSancion(sancion: Sancion): void {
    this.sancionSeleccionada = sancion;
  }

  confirmarSeleccion(): void {
    if (this.sancionSeleccionada) {
      this.modalRef.close(this.sancionSeleccionada);
    }
  }

  cerrarModal(): void {
    this.modalRef.close();
  }

}
