import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventarioInformationComponent } from './card-inventario-information.component';

describe('CardInventarioInformationComponent', () => {
  let component: CardInventarioInformationComponent;
  let fixture: ComponentFixture<CardInventarioInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInventarioInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInventarioInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
