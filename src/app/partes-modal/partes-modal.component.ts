import { Component, OnInit } from '@angular/core';
import { Parte } from '../interfaces/parte';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ParteService } from '../services/parte.service';

@Component({
  selector: 'app-partes-modal',
  templateUrl: './partes-modal.component.html',
  styleUrl: './partes-modal.component.css'
})
export class PartesModalComponent implements OnInit {
  partes: Parte[] = [];
  partesFiltrados: Parte[] = [];
  parteSeleccionado: Parte | null = null;
  busqueda: string = '';

  constructor(
    public modalRef: MdbModalRef<PartesModalComponent>,
    private parteService: ParteService
  ) { }

  ngOnInit(): void {
    this.parteService.getAllPartes().subscribe(data => {
      this.partes = data.filter(parte => !parte.sancion || parte.sancion === null);
      this.partesFiltrados = [...this.partes];
    });

  }

  filtrarPartes(): void {
    const filtro = this.busqueda.toLowerCase().trim();
    const palabras = filtro.split(/\s+/);

    this.partesFiltrados = this.partes.filter(parte => {

      const motivo = parte.motivo.toLowerCase();
      const lugar = parte.lugar.toLowerCase();

      return palabras.every(palabra =>
        motivo.includes(palabra) || lugar.includes(palabra)
      );
    });
  }



  seleccionarParte(parte: Parte): void {
    this.parteSeleccionado = parte;
  }

  confirmarSeleccion(): void {
    if (this.parteSeleccionado) {
      this.modalRef.close(this.parteSeleccionado);
    }
  }

  cerrarModal(): void {
    this.modalRef.close();
  }

}
