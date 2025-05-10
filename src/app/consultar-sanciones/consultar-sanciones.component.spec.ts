import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSancionesComponent } from './consultar-sanciones.component';

describe('ConsultarSancionesComponent', () => {
  let component: ConsultarSancionesComponent;
  let fixture: ComponentFixture<ConsultarSancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarSancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarSancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
