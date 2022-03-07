import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPrestamoActivoComponent } from './pdf-prestamo-activo.component';

describe('PdfPrestamoActivoComponent', () => {
  let component: PdfPrestamoActivoComponent;
  let fixture: ComponentFixture<PdfPrestamoActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPrestamoActivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPrestamoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
