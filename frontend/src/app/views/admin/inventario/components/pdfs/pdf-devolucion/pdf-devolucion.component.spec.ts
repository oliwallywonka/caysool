import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDevolucionComponent } from './pdf-devolucion.component';

describe('PdfDevolucionComponent', () => {
  let component: PdfDevolucionComponent;
  let fixture: ComponentFixture<PdfDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfDevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
