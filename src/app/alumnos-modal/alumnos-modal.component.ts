import { Component, Inject } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-alumnos-modal',
  templateUrl: './alumnos-modal.component.html',
  styleUrl: './alumnos-modal.component.css'
})
export class AlumnosModalComponent {

  constructor(private modalRef: MdbModalRef<AlumnosModalComponent>) {

  }


  
}
