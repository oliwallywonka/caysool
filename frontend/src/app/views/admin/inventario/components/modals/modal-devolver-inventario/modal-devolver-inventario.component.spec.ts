import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDevolverInventarioComponent } from './modal-devolver-inventario.component';

describe('ModalDevolverInventarioComponent', () => {
  let component: ModalDevolverInventarioComponent;
  let fixture: ComponentFixture<ModalDevolverInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDevolverInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDevolverInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
