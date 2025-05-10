import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTareasComponent } from './registrar-tareas.component';

describe('RegistrarTareasComponent', () => {
  let component: RegistrarTareasComponent;
  let fixture: ComponentFixture<RegistrarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
