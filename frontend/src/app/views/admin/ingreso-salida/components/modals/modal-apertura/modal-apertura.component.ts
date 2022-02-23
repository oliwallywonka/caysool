import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { AperturaService } from 'src/app/core/services/apertura.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Apertura } from 'src/app/interfaces/apertura';
import { AuthService } from 'src/app/core/services/auth.service';
import { BusinessService } from 'src/app/core/services/business.service';
import { Business } from 'src/app/interfaces/business';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-apertura',
  templateUrl: './modal-apertura.component.html',
  styleUrls: []
})
export class ModalAperturaComponent implements OnInit {

  operacion : 'VENTA' | 'COMPRA';
  business: Business = this.businessService.businessInformation;
  sub: Subscription;
  loading: boolean = false;
  apertura: Apertura;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  aperturaForm: FormGroup = this.fb.group({
    montoApertura: [0.00,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minNumber({
          value: 1,
          message: this.errorMessages.minLength,
        }),
      ],
    ],
  });

  constructor(
    private aperturaService: AperturaService,
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

  refreshAperturas() {
    this.sub.add(
      this.aperturaService.getAperturas({force: true}).subscribe(
        response => {
          this.aperturaService.response.emit(response);
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
    this.modal.modalName = 'aperturaModal';
    this.operacion = operacion;
  }

  refreshForm() {
    (<FormGroupExtension>this.aperturaForm).resetForm();
  }

  save() {
    this.loading = true;
    const body: Apertura = {
      montoApertura: +this.aperturaForm.value.montoApertura,
      fechaApertura: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }
    console.log(body);
    this.aperturaService.postApertura(body).subscribe(
      (response) => {
        this.loading = false;
        this.alertService.triggerMessage('Cambio Ingresada Correctamente', 'success');
        this.refreshAperturas();
        this.closeModal();
      },
      (error) => {
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
      }
    );

  }

}
