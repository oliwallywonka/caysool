import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditInventarioComponent } from './modal-edit-inventario.component';

describe('ModalEditInventarioComponent', () => {
  let component: ModalEditInventarioComponent;
  let fixture: ComponentFixture<ModalEditInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
