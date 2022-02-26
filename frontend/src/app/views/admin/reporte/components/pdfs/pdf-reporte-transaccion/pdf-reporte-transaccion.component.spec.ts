import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReporteTransaccionComponent } from './pdf-reporte-transaccion.component';

describe('PdfReporteTransaccionComponent', () => {
  let component: PdfReporteTransaccionComponent;
  let fixture: ComponentFixture<PdfReporteTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfReporteTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReporteTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
