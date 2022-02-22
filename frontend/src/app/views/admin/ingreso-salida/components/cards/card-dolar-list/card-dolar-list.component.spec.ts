import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDolarListComponent } from './card-dolar-list.component';

describe('CardDolarListComponent', () => {
  let component: CardDolarListComponent;
  let fixture: ComponentFixture<CardDolarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDolarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDolarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
