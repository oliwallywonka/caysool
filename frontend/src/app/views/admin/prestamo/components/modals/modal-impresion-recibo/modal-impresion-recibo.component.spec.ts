import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImpresionReciboComponent } from './modal-impresion-recibo.component';

describe('ModalImpresionReciboComponent', () => {
  let component: ModalImpresionReciboComponent;
  let fixture: ComponentFixture<ModalImpresionReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImpresionReciboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImpresionReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
