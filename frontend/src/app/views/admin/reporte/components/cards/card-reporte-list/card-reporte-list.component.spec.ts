import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteListComponent } from './card-reporte-list.component';

describe('CardReporteListComponent', () => {
  let component: CardReporteListComponent;
  let fixture: ComponentFixture<CardReporteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReporteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
