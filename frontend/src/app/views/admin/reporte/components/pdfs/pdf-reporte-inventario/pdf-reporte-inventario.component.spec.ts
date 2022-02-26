import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReporteInventarioComponent } from './pdf-reporte-inventario.component';

describe('PdfReporteInventarioComponent', () => {
  let component: PdfReporteInventarioComponent;
  let fixture: ComponentFixture<PdfReporteInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReporteInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReporteInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
