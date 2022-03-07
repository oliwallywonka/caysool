import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { User } from 'src/app/interfaces/auth';
import { Client } from 'src/app/interfaces/client';
import { Inventario } from 'src/app/interfaces/inventario';
import * as moment from 'moment';
import { AuthService } from 'src/app/core/services/auth.service';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-prestamo-modal',
  templateUrl: './new-prestamo-modal.component.html',
  styles: [
  ]
})
export class NewPrestamoModalComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading: boolean = false;
  prestamo: Prestamo;
  client: Client;
  inventarioArray: Inventario[] = [];
  user: User;
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
  prestamoForm: FormGroup = this.fb.group({
    fechaInicio: [
      new Date().toISOString().substring(0, 10),
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
    user: [''],
    client: [''],
    inventario: [''],
  });

  inventarioForm: FormGroup = this.fb.group({
    tipo: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
      ]
    ],
    precioAvaluo: [''],
    costoPrestamo: ['',
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
    private prestamoService: PrestamoService,
    private clientService: ClientService,
    private authService: AuthService,
    private alertService: AlertService,
    private modalService: ModalService,
    private router: Router,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribeClient();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshClient() {

  }

  subscribeClient() {
    this.sub.add(
      this.prestamoService.client.subscribe(
        (client: Client) => {
          this.client = client;
          if (client) {
            //this.clientForm.controls['name'].setValue(client.name);
          }
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.clientService.client.emit(null);
    this.prestamoService.prestamo.emit(null);
    this.prestamoService.client.emit(null);
  }

  refreshForm() {
    this.inventarioArray = [];
    this.costoPrestamo = 0;
    this.diasPrestamo = 0;
    this.costoTotal = 0;
    (<FormGroupExtension>this.prestamoForm).resetForm();
    (<FormGroupExtension>this.inventarioForm).resetForm();
  }

  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Prestamo ${message} Exitosamente`,
      icon: 'success',
    });
  }

  errorMessage(message) {
    this.alertService.alert.fire({
      title: message,
      icon: 'error',
    });
  }

  save() {
    this.loading = true;
    const bodyPrestamo = {
      user: this.authService.user.id,
      client: this.client.id,
      fechaInicio: this.prestamoForm.value.fechaInicio,
      fechaFinal: this.prestamoForm.value.fechaFinal,
      inventario: this.inventarioArray
    }
    this.prestamoService.postPrestamo(bodyPrestamo).subscribe(
      response => {
        this.loading = false;
        this.successMessage();
        this.closeModal();
        this.router.navigate(['/admin/prestamos', response.id]);
      },
      error => {
        this.loading = false;
        this.errorMessage(error.error.message);
      }
    )
  }

  addInventory() {
    this.inventarioArray.push(this.inventarioForm.value);
    this.calculateCostoTotal();
  }

  deleteInventario(index) {
    this.inventarioArray.splice(index, 1);
    this.calculateCostoTotal();
  }

  calculateCostoTotal(event = '') {
    this.costoPrestamo = 0;
    this.diasPrestamo = 0;
    this.costoTotal = 0;
    const diaInicio = moment(this.prestamoForm.value.fechaInicio).startOf('day');
    const diaFinal = moment(this.prestamoForm.value.fechaFinal).endOf('day');
    const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
    this.diasPrestamo = +(dias < 5 ? 5 : dias).toFixed(0);
    if (this.inventarioArray.length > 0) {
      for (const inventario of this.inventarioArray) {
        inventario.costoPrestamo = +inventario.costoPrestamo;
        inventario.precioAvaluo = +inventario.precioAvaluo;
        this.costoPrestamo += inventario.costoPrestamo;
      }
      this.costoTotal = +(this.costoPrestamo * (1 + 0.15 / 30) ** (dias < 5 ? 5 : dias)).toFixed(1);
    }
  }

  showEvent(event){
    console.log(event);
    console.log(this.inventarioForm.value.tipo);
  }

}
