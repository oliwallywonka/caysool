import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReportePrestamoComponent } from './pdf-reporte-prestamo.component';

describe('PdfReportePrestamoComponent', () => {
  let component: PdfReportePrestamoComponent;
  let fixture: ComponentFixture<PdfReportePrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReportePrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReportePrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
