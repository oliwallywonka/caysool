import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteTransaccionComponent } from './card-reporte-transaccion.component';

describe('CardReporteTransaccionComponent', () => {
  let component: CardReporteTransaccionComponent;
  let fixture: ComponentFixture<CardReporteTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReporteTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
