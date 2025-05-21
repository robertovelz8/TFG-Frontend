import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { SancionService } from '../services/sancion.service';
import { Sancion } from '../interfaces/sancion';

@Component({
  selector: 'app-modal-detalle-sancion',
  templateUrl: './modal-detalle-sancion.component.html',
  styleUrls: ['./modal-detalle-sancion.component.css']
})
export class ModalDetalleSancionComponent implements OnInit {

  @Input() id!: number;
  sancion = {} as Sancion;

  constructor(
    private modalRef: MdbModalRef<ModalDetalleSancionComponent>,
    private sancionService: SancionService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.sancionService.getSancionById(this.id).subscribe(
        data => {
          this.sancion = data;
        },
        error => {
          console.error('Error al obtener sanción:', error);
        }
      );
    } else {
      console.warn('No se proporcionó un ID de sanción al modal');
    }
  }

  cerrarModal(): void {
    this.modalRef.close();
  }
}
