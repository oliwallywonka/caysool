import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImpresionContratoComponent } from './modal-impresion-contrato.component';

describe('ModalImpresionContratoComponent', () => {
  let component: ModalImpresionContratoComponent;
  let fixture: ComponentFixture<ModalImpresionContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImpresionContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImpresionContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
