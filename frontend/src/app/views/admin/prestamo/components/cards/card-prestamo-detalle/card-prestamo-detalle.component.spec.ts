import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrestamoDetalleComponent } from './card-prestamo-detalle.component';

describe('CardPrestamoDetalleComponent', () => {
  let component: CardPrestamoDetalleComponent;
  let fixture: ComponentFixture<CardPrestamoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrestamoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrestamoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
