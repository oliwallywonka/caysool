import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventarioListComponent } from './card-inventario-list.component';

describe('CardInventarioListComponent', () => {
  let component: CardInventarioListComponent;
  let fixture: ComponentFixture<CardInventarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInventarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInventarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
