import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosModalComponent } from './alumnos-modal.component';

describe('AlumnosModalComponent', () => {
  let component: AlumnosModalComponent;
  let fixture: ComponentFixture<AlumnosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
