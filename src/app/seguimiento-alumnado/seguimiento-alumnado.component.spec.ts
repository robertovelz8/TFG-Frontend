import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado.component';

describe('SeguimientoAlumnadoComponent', () => {
  let component: SeguimientoAlumnadoComponent;
  let fixture: ComponentFixture<SeguimientoAlumnadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguimientoAlumnadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoAlumnadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
