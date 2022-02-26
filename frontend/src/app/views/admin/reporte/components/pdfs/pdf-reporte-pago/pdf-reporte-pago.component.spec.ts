import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReportePagoComponent } from './pdf-reporte-pago.component';

describe('PdfReportePagoComponent', () => {
  let component: PdfReportePagoComponent;
  let fixture: ComponentFixture<PdfReportePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReportePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReportePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
