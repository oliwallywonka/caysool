import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfBoletaSalidaComponent } from './pdf-boleta-salida.component';

describe('PdfBoletaSalidaComponent', () => {
  let component: PdfBoletaSalidaComponent;
  let fixture: ComponentFixture<PdfBoletaSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfBoletaSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfBoletaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
