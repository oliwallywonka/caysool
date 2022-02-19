import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAmortiguarComponent } from './modal-amortiguar.component';

describe('ModalAmortiguarComponent', () => {
  let component: ModalAmortiguarComponent;
  let fixture: ComponentFixture<ModalAmortiguarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAmortiguarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAmortiguarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
