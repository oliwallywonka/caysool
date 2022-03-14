import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPrestamoEstadoComponent } from './pdf-prestamo-estado.component';

describe('PdfPrestamoEstadoComponent', () => {
  let component: PdfPrestamoEstadoComponent;
  let fixture: ComponentFixture<PdfPrestamoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPrestamoEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPrestamoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
