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
import * as moment from 'moment';
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
  pagos: Pago[] = [];
  pagosInteres: Pago[] = [];
  modal = this.modalService.modal;
  submitted = false;
  diasInteres: number;
  costoInteres: number;
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
    this.subscribePagos();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  subscribePagos() {
    this.sub.add(
      this.pagoService.pagos.subscribe(
        (pagos) => {
          this.pagos = pagos;
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

  calculateInteresPago() {
    let costoPagoInteres = 0;
    this.pagosInteres = [];
    if (this.pagoForm.value.tipoPago === 'INTERES') {
      for (const pago  of this.pagos) {
        if (pago.tipoPago === 'INTERES') {
          costoPagoInteres += pago.costoPago;
          this.pagosInteres.push(pago);

        }
      };
      console.log(this.pagosInteres);
      if ( this.pagosInteres.length > 0){
        const ultimoPagoInteres = this.pagosInteres[this.pagosInteres.length -1];
        const diaInicio = moment(ultimoPagoInteres.createdAt).startOf('day');
        const diaFinal = moment(Date.now()).endOf('day');
        const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
        this.diasInteres = +dias.toFixed(1) - 1;
        this.costoInteres = +(this.prestamo.costoPrestamo * (1 + 0.15 / 30) ** (this.diasInteres)).toFixed(1) - +this.prestamo.costoPrestamo;
        this.pagoForm.value.costoPago = +this.costoInteres.toFixed(1);
      } else {
        const diaInicio = moment(this.prestamo.fechaInicio).startOf('day');
        const diaFinal = moment(Date.now()).endOf('day');
        const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
        this.diasInteres = +(dias).toFixed(0);
        this.costoInteres = +(this.prestamo.costoPrestamo * (1 + 0.15 / 30) ** (dias)).toFixed(1) - +this.prestamo.costoPrestamo;
        this.pagoForm.value.costoPago = +this.costoInteres.toFixed(1);
      }
    }
  }

}
