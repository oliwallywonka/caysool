import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportePagoComponent } from './card-reporte-pago.component';

describe('CardReportePagoComponent', () => {
  let component: CardReportePagoComponent;
  let fixture: ComponentFixture<CardReportePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReportePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
