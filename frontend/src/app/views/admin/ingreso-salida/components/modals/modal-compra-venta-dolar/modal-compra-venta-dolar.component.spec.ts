import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompraVentaDolarComponent } from './modal-compra-venta-dolar.component';

describe('ModalCompraVentaDolarComponent', () => {
  let component: ModalCompraVentaDolarComponent;
  let fixture: ComponentFixture<ModalCompraVentaDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompraVentaDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompraVentaDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
