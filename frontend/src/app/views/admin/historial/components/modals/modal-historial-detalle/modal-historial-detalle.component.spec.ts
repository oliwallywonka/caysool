import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistorialDetalleComponent } from './modal-historial-detalle.component';

describe('ModalHistorialDetalleComponent', () => {
  let component: ModalHistorialDetalleComponent;
  let fixture: ComponentFixture<ModalHistorialDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHistorialDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHistorialDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
