import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Inventario } from 'src/app/interfaces/inventario';
import * as moment from 'moment';
import { Prestamo } from 'src/app/interfaces/prestamo';
import { InventarioService } from 'src/app/core/services/inventario.service';
@Component({
  selector: 'app-modal-edit-inventario',
  templateUrl: './modal-edit-inventario.component.html',
  styles: [
  ]
})
export class ModalEditInventarioComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading: boolean = false;
  inventario: Inventario;
  prestamo: Prestamo;
  costoPrestamo: number = 0.00;
  costoTotal: number = 0.00;
  diasPrestamo: number = 0;
  modal = this.modalService.modal;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  inventarioOption = [
    {
      value: 'JOYA',
      name: 'JOYA',
    },
    {
      value: 'VEHICULO',
      name: 'VEHICULO',
    },
    {
      value: 'ARTICULO',
      name: 'ARTICULO',
    },
  ]

  inventarioForm: FormGroup = this.fb.group({
    estado: ['COMPRADO'],
    tipo: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ]
    ],
    precioAvaluo: [''],
    costoCompra: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ]
    ],
    descripcion: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.maxLength({
          value: 70,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    observacion: ['',
      [
        RxwebValidators.maxLength({
          value: 70,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    marca: ['',
      [
        RxwebValidators.maxLength({
          value: 15,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    modelo: ['',
      [
        RxwebValidators.maxLength({
          value: 15,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    linea: ['',
      [
        RxwebValidators.maxLength({
          value: 15,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    serie: ['',
      [
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    placa: ['',
      [
        RxwebValidators.maxLength({
          value: 15,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    chasis: ['',
      [
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    deuda: ['',
      [
        RxwebValidators.maxLength({
          value: 15,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    ruat: ['',
      [
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
    ],
    ],
    metal: ['',
      [
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    peso: ['',
      [
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    pureza: ['',
      [
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
  });

  constructor(
    private inventarioService: InventarioService,
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


  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
  }

  refreshForm() {
    this.costoPrestamo = 0;
    this.diasPrestamo = 0;
    this.costoTotal = 0;
    (<FormGroupExtension>this.inventarioForm).resetForm();
  }


  save() {
    this.loading = true;
    const body: Inventario = {
      ...this.inventarioForm.value,
      precioAvaluo: +this.inventarioForm.value.precioAvaluo,
      costoCompra: +this.inventarioForm.value.costoCompra
    }
    console.log(body);
    if (this.inventario) {

    }else {
      this.sub.add(
        this.inventarioService.postInventario(body).subscribe(
          (response) => {
            this.loading = false;
            this.alertService.triggerMessage('Inventario Ingresado Correctamente', 'success');
            this.refreshInventario();
            this.closeModal();
          },
          (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
          }
        )
      );
    }

  }

  refreshInventario() {
    this.sub.add(
      this.inventarioService.getInventarioByEstado({force: true}).subscribe(
        (response) => {
          this.inventarioService.response.emit(response);
        }
      )
    );
  }



  calculateCostoTotal(event = '') {
    /*this.costoPrestamo = 0;
    this.diasPrestamo = 0;
    this.costoTotal = 0;
    const diaInicio = moment(this.prestamoForm.value.fechaInicio);
    const diaFinal = moment(this.prestamoForm.value.fechaFinal);
    const dias = moment.duration(diaFinal.diff(diaInicio)).asDays() + 1;
    this.diasPrestamo = dias < 5 ? 5 : dias;
    if (this.inventarioArray.length > 0) {
      for (const inventario of this.inventarioArray) {
        inventario.costoPrestamo = +inventario.costoPrestamo;
        inventario.precioAvaluo = +inventario.precioAvaluo;
        this.costoPrestamo += inventario.costoPrestamo;
      }
      this.costoTotal = +(this.costoPrestamo * (1 + 0.15 / 30) ** (dias < 5 ? 5 : dias)).toFixed(1);
    }*/
  }



}
