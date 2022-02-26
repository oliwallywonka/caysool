import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PagoService } from 'src/app/core/services/pago.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Pago } from 'src/app/interfaces/pago';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
import { Impresion } from 'src/app/interfaces/impresion';
import { ImpresionService } from 'src/app/core/services/impresion.service';
@Component({
  selector: 'app-modal-impresion-contrato',
  templateUrl: './modal-impresion-contrato.component.html',
  styleUrls: []
})
export class ModalImpresionContratoComponent implements OnInit, OnDestroy {

  @Input()
  tipoDocumento: 'PAGO' | 'CONTRATO' = 'CONTRATO';

  sub: Subscription;
  loading: boolean = false;
  prestamo: Prestamo;
  pago: Pago;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };

  administracionOptions = [
    {
      value: 20,
      name: '20'
    },
    {
      value: 5,
      name: '5'
    },
    {
      value: 3,
      name: '3'
    },
    {
      value: 0,
      name: '0'
    }
  ];
  impresionForm: FormGroup = this.fb.group({
    costoImpresion: [0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
  });

  constructor(
    private prestamoService: PrestamoService,
    private pagoService: PagoService,
    private impresionService: ImpresionService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribePrestamo();
    this.subscribePago();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPago() {
    this.sub.add(
      this.pagoService.getById(this.pago.id).subscribe(
        pago => {
          this.pago = pago;
        }
      )
    );
  }

  subscribePago() {
    this.sub.add(
      this.pagoService.pago.subscribe(
        (pago) => {
          this.pago = pago;
        }
      )
    );
  }

  subscribePrestamo() {
    this.sub.add(
      this.prestamoService.prestamo.subscribe(
        (prestamo) => {
          this.prestamo = prestamo;
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.pagoService.pago.emit(null);
  }

  refreshForm() {
    (<FormGroupExtension>this.impresionForm).resetForm();
  }

  save() {
    this.loading = true;
    const body: Impresion = {
      prestamo: this.prestamo.id,
      costoImpresion: +this.impresionForm.value.costoImpresion,
      tipoDocumento: this.tipoDocumento
    };
    console.log(body);
    this.impresionService.postImpresion(body).subscribe(
      response => {
        this.loading = false;
        this.alertService.triggerMessage('Impresión registrada correctamente', 'success');
        this.refreshImpresiones();
        this.closeModal();
      },
      error => {
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
      }
    )
  }

  refreshImpresiones() {
    this.sub.add(
      this.impresionService.getByPrestamoId(this.prestamo.id).subscribe(
        (impresiones) => {
          if (impresiones) {
            this.impresionService.impresiones.emit(impresiones);
          }
        }
      )
    );
  }
}
