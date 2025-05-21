import { Component, OnInit } from '@angular/core';
import { Sancion } from '../interfaces/sancion';
import { SancionService } from '../services/sancion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-sancion',
  templateUrl: './modificar-sancion.component.html',
  styleUrl: './modificar-sancion.component.css'
})
export class ModificarSancionComponent implements OnInit{

  sancion = {} as Sancion;
  

  constructor(private sancionService: SancionService, private route: ActivatedRoute, private router: Router) {

  }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    if (id) {
      this.sancionService.getSancionById(id).subscribe({
        next: (s) => {
          this.sancion = s;
          this.tipoSeleccionado = s.tipoSancion;
        },
        error: (err) => {
          console.error('Error al cargar la sanción:', err);
          alert('No se pudo cargar la sanción');
          this.router.navigate(['/sanciones']);
        }
      });
    } else {
      console.error('ID de sanción no válido');
      this.router.navigate(['/sanciones']);
    }
  });
}

  

  tiposSancion = [
    { valor: 'CON_EXPULSION_DENTRO', etiqueta: 'EXPULSIÓN EN CENTRO' },
    { valor: 'CON_EXPULSION_FUERA', etiqueta: 'EXPULSIÓN FUERA DEL CENTRO' },
    { valor: 'SIN_EXPULSION', etiqueta: 'SIN EXPULSIÓN' },
  ];

  tipoSeleccionado: string | null = null;

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.sancion.tipoSancion = tipo;
  }

  getEtiquetaTipoSeleccionado(): string {
    const tipo = this.tiposSancion.find(t => t.valor === this.tipoSeleccionado);
    return tipo ? tipo.etiqueta : 'Selecciona una opción';
  }

  modificarSancion(): void {
  if (!this.sancion.id || !this.sancion) return;

  this.sancionService.updateSancion(this.sancion.id, this.sancion).subscribe({
    next: (data) => {
      console.log('Sanción actualizada:', data);
      alert('Sanción modificada correctamente');
      this.router.navigate(['/consultar-sanciones']); 
    },
    error: (err) => {
      console.error('Error al modificar la sanción:', err);
      alert('Hubo un error al modificar la sanción');
    }
  });
}

}
