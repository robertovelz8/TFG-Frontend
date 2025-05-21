import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSancionComponent } from './modal-sancion.component';

describe('ModalSancionComponent', () => {
  let component: ModalSancionComponent;
  let fixture: ComponentFixture<ModalSancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
