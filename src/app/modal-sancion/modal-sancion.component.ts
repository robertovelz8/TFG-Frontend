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
  busqueda: string = '';

  constructor(private modalRef: MdbModalRef<ModalSancionComponent>, private sancionService: SancionService) {

  }
  ngOnInit(): void {
    this.sancionService.getAllSanciones().subscribe(data => {
      this.sanciones = data.filter(sancion => {
        return sancion.tipoSancion !== 'SIN_EXPULSION'
      });
      this.sancionesFiltradas = [...this.sanciones];
    });
  }

  filtrarSanciones(): void {
    const filtro = this.busqueda.toLowerCase().trim();

    this.sancionesFiltradas = this.sanciones.filter(sancion => {
      const fechaFormateada = new Date(sancion.fecha).toLocaleDateString('es-ES');
      return fechaFormateada.includes(filtro);
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
