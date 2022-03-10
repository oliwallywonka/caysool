import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-edit-prestamo',
  templateUrl: './modal-edit-prestamo.component.html',
  styles: [
  ]
})
export class ModalEditPrestamoComponent implements OnInit, OnDestroy {
  sub: Subscription;
  prestamo: Prestamo;
  loading = false;
  modal = this.modalService.modal;
  diasPrestamo: number;
  costoTotal: number;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  prestamoForm: FormGroup = this.fb.group({
    fechaInicio: [
      '',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
    fechaFinal: [
      '',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
  });
  constructor(
    private prestamoService: PrestamoService,
    private authService: AuthService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribePrestamo();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  subscribePrestamo() {
    this.sub.add(
      this.prestamoService.prestamo.subscribe(
        (prestamo) => {
          this.prestamo = prestamo;
          if (this.prestamo) {
            this.prestamoForm.controls['fechaInicio'].patchValue(new Date(this.prestamo.fechaInicio).toISOString().substring(0, 10));
            this.prestamoForm.controls['fechaFinal'].patchValue(new Date(moment(this.prestamo.fechaFinal).subtract(4, 'hours').toISOString()).toISOString().substring(0, 10));
            this.calculateCostoTotal();
          }
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.prestamoService.prestamo.emit(null);
  }

  save() {
    this.loading = true;
    this.sub.add(
      this.prestamoService.patchPrestamo(this.prestamoForm.value, this.prestamo.id).subscribe(
        (response) => {
          this.loading = false;
          this.alertService.triggerMessage('Prestamo editado Exitosamente', 'success');
          this.refreshPrestamo();
          this.closeModal();
        },
        (error) => {
          this.loading = false;
          this.alertService.triggerMessage(error.error.message, 'error');
        }
      )
    );
  }

  refreshPrestamo() {
    this.sub.add(
      this.prestamoService.getPrestamoById(+(this.prestamo.id)).subscribe(
        (prestamo) => {
          if (prestamo) {
            this.prestamoService.prestamo.emit(prestamo);
          }
        }
      )
    );
  }

  calculateCostoTotal(event = '') {
    this.diasPrestamo = 0;
    this.costoTotal = 0;
    const diaInicio = moment(new Date(this.prestamoForm.value.fechaInicio).toDateString()).startOf('day');
    const diaFinal = moment(new Date(this.prestamoForm.value.fechaFinal).toDateString()).endOf('day');
    const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
    /*console.log(new Date().toLocaleString('en-US', {
      timeZone: 'America/La_Paz'
    }))
    console.log(this.prestamo.fechaFinal.toLocaleString('en-Us', { timeZone: 'America/La_Paz'}));
    console.log(this.prestamoForm.value.fechaFinal);
    console.log(new Date(this.prestamo.fechaFinal).toISOString().substring(0, 10));*/
    this.diasPrestamo = +(dias < 5 ? 5: dias).toFixed(0);
    this.costoTotal = +(this.prestamo.costoPrestamo * (1 + 0.15 / 30) ** (dias < 5 ? 5 : dias)).toFixed(1);
  }

}
