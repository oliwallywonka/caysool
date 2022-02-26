import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteImpresionComponent } from './card-reporte-impresion.component';

describe('CardReporteImpresionComponent', () => {
  let component: CardReporteImpresionComponent;
  let fixture: ComponentFixture<CardReporteImpresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteImpresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReporteImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
