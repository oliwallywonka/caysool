import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrestamoModalComponent } from './new-prestamo-modal.component';

describe('NewPrestamoModalComponent', () => {
  let component: NewPrestamoModalComponent;
  let fixture: ComponentFixture<NewPrestamoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPrestamoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPrestamoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
