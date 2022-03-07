import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPrestamoCanceladoComponent } from './pdf-prestamo-cancelado.component';

describe('PdfPrestamoCanceladoComponent', () => {
  let component: PdfPrestamoCanceladoComponent;
  let fixture: ComponentFixture<PdfPrestamoCanceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPrestamoCanceladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPrestamoCanceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
