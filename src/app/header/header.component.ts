import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'GESTIÓN DE SEGUIMIENTO ALUMNADO';
  user = 'Roberto Velázquez Vázquez';

  constructor(private location:Location) {
  }

  volverAtras() {
    this.location.back();
  }
}
