import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVentaInventarioComponent } from './modal-venta-inventario.component';

describe('ModalVentaInventarioComponent', () => {
  let component: ModalVentaInventarioComponent;
  let fixture: ComponentFixture<ModalVentaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVentaInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVentaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
