import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovimientoComponent } from './card-movimiento.component';

describe('CardMovimientoComponent', () => {
  let component: CardMovimientoComponent;
  let fixture: ComponentFixture<CardMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
