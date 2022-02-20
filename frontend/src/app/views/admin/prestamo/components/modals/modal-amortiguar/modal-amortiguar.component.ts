import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { AmortizacionService } from 'src/app/core/services/amortizacion.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Amortizacion } from 'src/app/interfaces/amortizacion';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
@Component({
  selector: 'app-modal-amortiguar',
  templateUrl: './modal-amortiguar.component.html',
  styles: [
  ]
})
export class ModalAmortiguarComponent implements OnInit {

  sub: Subscription;
  loading: boolean = false;
  prestamo: Prestamo;
  amortizacion: Amortizacion;
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

  tipoAmortizacionOptions = [
    {
      value: 'PAGO',
      name: 'PAGO'
    },
    {
      value: 'INTERES',
      name: 'INTERÉS'
    }
  ]
  amortizacionForm: FormGroup = this.fb.group({
    tipoAmortizacion: ['PAGO',
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
    costoAmortizacion: [0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
  });

  constructor(
    private prestamoService: PrestamoService,
    private amortizacionService: AmortizacionService,
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
    this.amortizacionService.amortizacion.emit(null);
  }

  refreshForm() {
    (<FormGroupExtension>this.amortizacionForm).resetForm();
  }

  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Amortizacion ${message} Exitosamente`,
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
    const body: Amortizacion = {
      prestamo: this.prestamo.id,
      costoPago: +this.amortizacionForm.value.costoPago
    };
    console.log(body);
    this.amortizacionService.postAmortizacion(body).subscribe(
      response => {
        this.loading = false;
        this.successMessage();
        this.closeModal();
      },
      error => {
        this.loading = false;
        this.errorMessage(error.error.message);
      }
    )
  }


}
