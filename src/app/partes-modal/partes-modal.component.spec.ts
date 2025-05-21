import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesModalComponent } from './partes-modal.component';

describe('PartesModalComponent', () => {
  let component: PartesModalComponent;
  let fixture: ComponentFixture<PartesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
