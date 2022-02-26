import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPrestamoComponent } from './modal-edit-prestamo.component';

describe('ModalEditPrestamoComponent', () => {
  let component: ModalEditPrestamoComponent;
  let fixture: ComponentFixture<ModalEditPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
