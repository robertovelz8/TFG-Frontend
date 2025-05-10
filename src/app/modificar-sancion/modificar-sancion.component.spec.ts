import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSancionComponent } from './modificar-sancion.component';

describe('ModificarSancionComponent', () => {
  let component: ModificarSancionComponent;
  let fixture: ComponentFixture<ModificarSancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarSancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarSancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
