import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasModalComponent } from './tareas-modal.component';

describe('TareasModalComponent', () => {
  let component: TareasModalComponent;
  let fixture: ComponentFixture<TareasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
