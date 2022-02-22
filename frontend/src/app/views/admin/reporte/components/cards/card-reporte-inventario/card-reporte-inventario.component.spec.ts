import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteInventarioComponent } from './card-reporte-inventario.component';

describe('CardReporteInventarioComponent', () => {
  let component: CardReporteInventarioComponent;
  let fixture: ComponentFixture<CardReporteInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReporteInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
