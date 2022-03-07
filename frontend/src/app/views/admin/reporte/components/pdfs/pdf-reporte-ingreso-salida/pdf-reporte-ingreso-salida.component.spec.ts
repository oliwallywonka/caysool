import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReporteIngresoSalidaComponent } from './pdf-reporte-ingreso-salida.component';

describe('PdfReporteIngresoSalidaComponent', () => {
  let component: PdfReporteIngresoSalidaComponent;
  let fixture: ComponentFixture<PdfReporteIngresoSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReporteIngresoSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReporteIngresoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
