import { Component, OnInit } from '@angular/core';
import { ModalSancionComponent } from '../modal-sancion/modal-sancion.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Sancion } from '../interfaces/sancion';
import { Tarea } from '../interfaces/tarea';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-registrar-tareas',
  templateUrl: './registrar-tareas.component.html',
  styleUrl: './registrar-tareas.component.css'
})
export class RegistrarTareasComponent implements OnInit {

  modalRefSancion: MdbModalRef<ModalSancionComponent> | null = null;
  sancion = {} as Sancion;
  tarea = {} as Tarea;
  seleccionHechaSancion = false;

  estados = [
    { valor: 'COMPLETADA', etiqueta: 'COMPLETADA' },
    { valor: 'EN_PROGRESO', etiqueta: 'EN PROGRESO' },
    { valor: 'PENDIENTE', etiqueta: 'PENDIENTE' },
  ];

  estadoSeleccionado: string | null = null;

  constructor(private modalService: MdbModalService, private tareaService: TareaService) {

  }
  ngOnInit(): void {

  }

  createTarea(tarea: Tarea) {
    this.tareaService.createTarea(tarea).subscribe({
      next: (response) => {
        console.log('Tarea registrada: ' + response)
      },
      error: (error) => {
        console.error('Error al registrar la tarea: ', error);
      }
    })
  }


  abrirModalSancion(): void {
    this.modalRefSancion = this.modalService.open(ModalSancionComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRefSancion.onClose.subscribe((sancionSeleccionada: Sancion) => {
      if (sancionSeleccionada) {
        this.sancion = sancionSeleccionada;
        this.tarea.sancion = this.sancion
        this.seleccionHechaSancion = true;
      }
    });
  }

  seleccionarEstado(estado: string) {
    this.estadoSeleccionado = estado;
    this.tarea.estado = estado;
  }

  getEtiquetaEstadoSeleccionado(): string {
    const estado = this.estados.find(e => e.valor === this.estadoSeleccionado);
    return estado ? estado.etiqueta : 'Selecciona una opción';
  }

  registrarTarea(): void {
    if (!this.seleccionHechaSancion || !this.estadoSeleccionado
      || !this.tarea.fechaCreacion || !this.tarea.titulo
      || !this.tarea.fechaLimite || !this.tarea.descripcion) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    this.createTarea(this.tarea);
  }
}
