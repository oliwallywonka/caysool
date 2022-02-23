import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovimientoListComponent } from './card-movimiento-list.component';

describe('CardMovimientoListComponent', () => {
  let component: CardMovimientoListComponent;
  let fixture: ComponentFixture<CardMovimientoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMovimientoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
