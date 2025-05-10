import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado.component';

describe('ConsultarTareasAlumnoExpulsadoComponent', () => {
  let component: ConsultarTareasAlumnoExpulsadoComponent;
  let fixture: ComponentFixture<ConsultarTareasAlumnoExpulsadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarTareasAlumnoExpulsadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarTareasAlumnoExpulsadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
