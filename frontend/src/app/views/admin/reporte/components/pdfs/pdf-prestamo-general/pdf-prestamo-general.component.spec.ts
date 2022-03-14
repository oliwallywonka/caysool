import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPrestamoGeneralComponent } from './pdf-prestamo-general.component';

describe('PdfPrestamoGeneralComponent', () => {
  let component: PdfPrestamoGeneralComponent;
  let fixture: ComponentFixture<PdfPrestamoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPrestamoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPrestamoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
