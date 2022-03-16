import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCompraVentaDolarComponent } from './pdf-compra-venta-dolar.component';

describe('PdfCompraVentaDolarComponent', () => {
  let component: PdfCompraVentaDolarComponent;
  let fixture: ComponentFixture<PdfCompraVentaDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfCompraVentaDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfCompraVentaDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
