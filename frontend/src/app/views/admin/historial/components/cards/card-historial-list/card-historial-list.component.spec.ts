import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistorialListComponent } from './card-historial-list.component';

describe('CardHistorialListComponent', () => {
  let component: CardHistorialListComponent;
  let fixture: ComponentFixture<CardHistorialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistorialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
