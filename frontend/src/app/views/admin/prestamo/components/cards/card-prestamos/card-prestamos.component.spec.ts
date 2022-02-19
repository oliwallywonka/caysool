import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrestamosComponent } from './card-prestamos.component';

describe('CardPrestamosComponent', () => {
  let component: CardPrestamosComponent;
  let fixture: ComponentFixture<CardPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
