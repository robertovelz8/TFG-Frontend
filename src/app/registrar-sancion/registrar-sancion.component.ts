import { Component } from '@angular/core';
import { SancionService } from '../services/sancion.service';
import { Sancion } from '../interfaces/sancion';

@Component({
  selector: 'app-registrar-sancion',
  templateUrl: './registrar-sancion.component.html',
  styleUrl: './registrar-sancion.component.css'
})
export class RegistrarSancionComponent {

  constructor(private sancionService: SancionService) {

  }

  createService(sancion: Sancion) {
    this.sancionService.createSancion(sancion).subscribe({
      next: (response) => {
        console.log('Sanción registrada: '+ response)
      },
      error: (error) => {
        console.error('Error al registrar la sanción: ', error);
      }
    })
  }
}
