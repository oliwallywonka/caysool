import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMovimientosComponent } from './pdf-movimientos.component';

describe('PdfMovimientosComponent', () => {
  let component: PdfMovimientosComponent;
  let fixture: ComponentFixture<PdfMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfMovimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
