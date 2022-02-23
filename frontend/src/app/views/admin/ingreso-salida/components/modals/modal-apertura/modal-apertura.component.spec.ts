import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAperturaComponent } from './modal-apertura.component';

describe('ModalAperturaComponent', () => {
  let component: ModalAperturaComponent;
  let fixture: ComponentFixture<ModalAperturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAperturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
