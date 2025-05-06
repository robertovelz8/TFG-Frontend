import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSancionComponent } from './registrar-sancion.component';

describe('RegistrarSancionComponent', () => {
  let component: RegistrarSancionComponent;
  let fixture: ComponentFixture<RegistrarSancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarSancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarSancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
