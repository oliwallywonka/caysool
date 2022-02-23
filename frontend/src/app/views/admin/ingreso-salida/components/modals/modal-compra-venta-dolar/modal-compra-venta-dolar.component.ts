import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { TransaccionMonedaService } from 'src/app/core/services/transaccionMoneda.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { TransaccionMoneda } from 'src/app/interfaces/transaccionMoneda';
import { AuthService } from 'src/app/core/services/auth.service';
import { BusinessService } from 'src/app/core/services/business.service';
import { Business } from 'src/app/interfaces/business';
@Component({
  selector: 'app-modal-compra-venta-dolar',
  templateUrl: './modal-compra-venta-dolar.component.html',
  styleUrls: []
})
export class ModalCompraVentaDolarComponent implements OnInit, OnDestroy {

  operacion : 'VENTA' | 'COMPRA';
  business: Business = this.businessService.businessInformation;
  sub: Subscription;
  loading: boolean = false;
  transaccion: TransaccionMoneda;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  transaccionForm: FormGroup = this.fb.group({
    cantidad: [0.00,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minNumber({
          value: 1,
          message: this.errorMessages.minLength,
        }),
      ],
    ],
    tipoCambio: [0.00,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minNumber({
          value: 0.00,
          message: this.errorMessages.minLength,
        }),
      ],
    ],
  });

  constructor(
    private transaccionService: TransaccionMonedaService,
    private authService: AuthService,
    private businessService: BusinessService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subcriptionBusiness();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshTransaccionMonedas() {
    this.sub.add(
      this.transaccionService.getTransaccionMonedas({force: true}).subscribe(
        response => {
          this.transaccionService.response.emit(response);
        }
      )
    );
  }

  subcriptionBusiness() {
    this.sub.add(
      this.businessService.business.subscribe(
        business => {
          if (business){
            this.business = business;
          }
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
  }

  toggleModal(operacion: 'COMPRA' | 'VENTA') {
    this.modal.visible = true;
    this.modal.modalName = 'transaccionModal';
    this.operacion = operacion;
  }

  refreshForm() {
    (<FormGroupExtension>this.transaccionForm).resetForm();
  }

  save() {
    this.loading = true;
    const body: TransaccionMoneda = {
      user: this.authService.user.id,
      operacion: this.operacion,
      cantidad: +this.transaccionForm.value.cantidad,
      tipoCambio: +this.transaccionForm.value.tipoCambio,
      tipoCambioOficial: +this.business.cambioDolar
    }
    console.log(body);
    this.transaccionService.postTransaccionMoneda(body).subscribe(
      (response) => {
        this.loading = false;
        this.alertService.triggerMessage('Cambio Ingresada Correctamente', 'success');
        this.refreshTransaccionMonedas();
        this.closeModal();
      },
      (error) => {
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
      }
    );

  }

}
