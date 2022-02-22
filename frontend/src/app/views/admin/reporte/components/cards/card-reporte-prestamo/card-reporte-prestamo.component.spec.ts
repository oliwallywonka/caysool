import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportePrestamoComponent } from './card-reporte-prestamo.component';

describe('CardReportePrestamoComponent', () => {
  let component: CardReportePrestamoComponent;
  let fixture: ComponentFixture<CardReportePrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReportePrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReportePrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
