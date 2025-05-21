import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { SancionService } from '../services/sancion.service';
import { Sancion } from '../interfaces/sancion';

@Component({
  selector: 'app-modal-detalle-sancion',
  templateUrl: './modal-detalle-sancion.component.html',
  styleUrl: './modal-detalle-sancion.component.css'
})
export class ModalDetalleSancionComponent implements OnInit{

  sancion = {} as Sancion;

  constructor(private modalRef: MdbModalRef<ModalDetalleSancionComponent>, private sancionService: SancionService) {

  }
  ngOnInit(): void {
    this.getSancionById(this.sancion.id!)
  }
  getSancionById(idSancion: number): Sancion {
    this.sancionService.getSancionById(idSancion).subscribe(
      data => {
        this.sancion = data;
      }
    )
    return this.sancion
  }
  cerrarModal(): void {
    this.modalRef.close();
  }
}
