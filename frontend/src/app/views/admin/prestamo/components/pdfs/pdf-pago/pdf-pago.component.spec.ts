import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPagoComponent } from './pdf-pago.component';

describe('PdfPagoComponent', () => {
  let component: PdfPagoComponent;
  let fixture: ComponentFixture<PdfPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
