import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCierreAperturaComponent } from './modal-cierre-apertura.component';

describe('ModalCierreAperturaComponent', () => {
  let component: ModalCierreAperturaComponent;
  let fixture: ComponentFixture<ModalCierreAperturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCierreAperturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCierreAperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
