import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { MovimientoService } from 'src/app/core/services/movimiento.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Movimiento } from 'src/app/interfaces/movimiento';
import { Apertura } from 'src/app/interfaces/apertura';
import { AperturaService } from 'src/app/core/services/apertura.service';
@Component({
  selector: 'app-modal-ingreso-salida',
  templateUrl: './modal-ingreso-salida.component.html',
  styleUrls: []
})
export class ModalIngresoSalidaComponent implements OnInit, OnDestroy {

  @Input() aperturaId: string;
  tipo: boolean = false;
  movimiento: Movimiento;
  sub: Subscription;
  loading: boolean = false;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  movimientoForm: FormGroup = this.fb.group({
    concepto: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
    cantidad: [0.0,
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ],
    ],
  });

  constructor(
    private movimientoService: MovimientoService,
    private aperturaService: AperturaService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshMovimientos() {
    this.sub.add(
      this.movimientoService.getMovimientosByAperturaId(+this.aperturaId).subscribe(
        movimientos => {
          this.movimientoService.movimientos.emit(movimientos);
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
  }

  toggleModal(tipo: boolean) {
    this.modal.visible = true;
    this.modal.modalName = 'movimientoModal';
    this.tipo = tipo;
  }

  refreshForm() {
    (<FormGroupExtension>this.movimientoForm).resetForm();
  }

  save() {
    this.loading = true;
    console.log(this.aperturaId);
    const body: Movimiento = {
      apertura: +this.aperturaId,
      tipo: this.tipo,
      concepto: this.movimientoForm.value.concepto,
      cantidad: +this.movimientoForm.value.cantidad,
    }
    console.log(body);
    this.movimientoService.postMovimiento(body).subscribe(
      (response) => {
        this.loading = false;
        this.alertService.triggerMessage('Movimiento ingresado exitosamente.', 'success');
        this.refreshMovimientos();
        this.closeModal();
      },
      (error) => {
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
      }
    );

  }

}
