import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSancionComponent } from './consultar-sancion.component';

describe('ConsultarSancionComponent', () => {
  let component: ConsultarSancionComponent;
  let fixture: ComponentFixture<ConsultarSancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarSancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarSancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
