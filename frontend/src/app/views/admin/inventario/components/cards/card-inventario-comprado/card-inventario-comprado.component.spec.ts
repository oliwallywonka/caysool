import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventarioCompradoComponent } from './card-inventario-comprado.component';

describe('CardInventarioCompradoComponent', () => {
  let component: CardInventarioCompradoComponent;
  let fixture: ComponentFixture<CardInventarioCompradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInventarioCompradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInventarioCompradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
