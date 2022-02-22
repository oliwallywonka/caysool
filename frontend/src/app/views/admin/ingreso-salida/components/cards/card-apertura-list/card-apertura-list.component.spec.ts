import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAperturaListComponent } from './card-apertura-list.component';

describe('CardAperturaListComponent', () => {
  let component: CardAperturaListComponent;
  let fixture: ComponentFixture<CardAperturaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAperturaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAperturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
