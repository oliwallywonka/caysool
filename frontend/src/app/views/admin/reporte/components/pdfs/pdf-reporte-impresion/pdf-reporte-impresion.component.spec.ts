import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReporteImpresionComponent } from './pdf-reporte-impresion.component';

describe('PdfReporteImpresionComponent', () => {
  let component: PdfReporteImpresionComponent;
  let fixture: ComponentFixture<PdfReporteImpresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReporteImpresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReporteImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
