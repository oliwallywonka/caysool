import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteIngresoSalidaComponent } from './card-reporte-ingreso-salida.component';

describe('CardReporteIngresoSalidaComponent', () => {
  let component: CardReporteIngresoSalidaComponent;
  let fixture: ComponentFixture<CardReporteIngresoSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteIngresoSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReporteIngresoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
