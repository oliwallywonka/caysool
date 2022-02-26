import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PagoService } from 'src/app/core/services/pago.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Pago } from 'src/app/interfaces/pago';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styles: [
  ]
})
export class ModalPagoComponent implements OnInit, OnDestroy {

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
  ]

  tipoPagoOptions = [
    {
      value: 'PAGO',
      name: 'PAGO'
    },
    {
      value: 'INTERES',
      name: 'INTERÉS'
    },
    {
      value: 'AMORTIZACION',
      name: 'AMORTIZACIÓN'
    }
  ]
  pagoForm: FormGroup = this.fb.group({
    tipoPago: ['PAGO',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
    costoAdministracion: [0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
    costoPiso: [0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
    costoPago: [0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
  });

  constructor(
    private prestamoService: PrestamoService,
    private pagoService: PagoService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribePrestamo();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
    (<FormGroupExtension>this.pagoForm).resetForm();
  }

  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Pago ${message} Exitosamente`,
      icon: 'success',
    })
  }

  errorMessage(message) {
    this.alertService.alert.fire({
      title: message,
      icon: 'error',
    })
  }

  save() {
    this.loading = true;
    const body: Pago = {
      prestamo: this.prestamo.id,
      tipoPago: this.pagoForm.value.tipoPago,
      costoAdministracion: +this.pagoForm.value.costoAdministracion,
      costoPiso: +this.pagoForm.value.costoPiso,
      costoPago: +this.pagoForm.value.costoPago
    };
    console.log(body);
    this.pagoService.postPago(body).subscribe(
      response => {
        this.loading = false;
        this.successMessage();
        this.refreshPagos();
        this.refreshPrestamo();
        this.closeModal();
      },
      error => {
        this.loading = false;
        this.errorMessage(error.error.message);
      }
    )
  }

  refreshPagos() {
    this.sub.add(
      this.pagoService.getByPrestamoId(this.prestamo.id).subscribe(
        (pagos) => {
          if (pagos) {
            this.pagoService.pagos.emit(pagos);
          }
        }
      )
    );
  }

  refreshPrestamo() {
    this.sub.add(
      this.prestamoService.getPrestamoById(this.prestamo.id).subscribe(
        (prestamo) => {
          if (prestamo) {
            this.prestamoService.prestamo.emit(prestamo);
          }
        }
      )
    );
  }
}
