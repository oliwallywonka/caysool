import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngresoSalidaComponent } from './modal-ingreso-salida.component';

describe('ModalIngresoSalidaComponent', () => {
  let component: ModalIngresoSalidaComponent;
  let fixture: ComponentFixture<ModalIngresoSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIngresoSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngresoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
