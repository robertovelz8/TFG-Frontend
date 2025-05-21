import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleSancionComponent } from './modal-detalle-sancion.component';

describe('ModalDetalleSancionComponent', () => {
  let component: ModalDetalleSancionComponent;
  let fixture: ComponentFixture<ModalDetalleSancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDetalleSancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDetalleSancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
