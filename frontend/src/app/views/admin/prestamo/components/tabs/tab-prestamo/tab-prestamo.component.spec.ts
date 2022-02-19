import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPrestamoComponent } from './tab-prestamo.component';

describe('TabPrestamoComponent', () => {
  let component: TabPrestamoComponent;
  let fixture: ComponentFixture<TabPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
