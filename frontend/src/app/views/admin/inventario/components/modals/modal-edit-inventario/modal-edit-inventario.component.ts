import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input()
  isPrestamo: boolean = false;
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

      ]
    ],
    costoPrestamo: ['',
      [

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
    this.subscribeInventario();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  subscribeInventario() {
    this.sub.add(
      this.inventarioService.inventario.subscribe(
        (inventario) => {
          this.inventario = inventario;
          if (inventario) {
            this.inventarioForm.controls['estado'].setValue(this.inventario.estado);
            this.inventarioForm.controls['precioAvaluo'].setValue(this.inventario.precioAvaluo);
            this.inventarioForm.controls['costoCompra'].setValue(this.inventario.costoCompra);
            this.inventarioForm.controls['costoPrestamo'].setValue(this.inventario.costoPrestamo);
            this.inventarioForm.controls['descripcion'].setValue(this.inventario.descripcion);
            this.inventarioForm.controls['observacion'].setValue(this.inventario.observacion);
            this.inventarioForm.controls['tipo'].setValue(this.inventario.tipo);
            this.inventarioForm.controls['marca'].setValue(this.inventario.marca);
            this.inventarioForm.controls['modelo'].setValue(this.inventario.modelo);
            this.inventarioForm.controls['linea'].setValue(this.inventario.linea);
            this.inventarioForm.controls['serie'].setValue(this.inventario.serie);
            this.inventarioForm.controls['placa'].setValue(this.inventario.placa);
            this.inventarioForm.controls['chasis'].setValue(this.inventario.chasis);
            this.inventarioForm.controls['deuda'].setValue(this.inventario.deuda);
            this.inventarioForm.controls['ruat'].setValue(this.inventario.ruat);
            this.inventarioForm.controls['metal'].setValue(this.inventario.metal);
            this.inventarioForm.controls['peso'].setValue(this.inventario.peso);
            this.inventarioForm.controls['pureza'].setValue(this.inventario.pureza);
          }
        }
      )
    );
  }


  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.inventarioService.inventario.emit(null);
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
      costoCompra: +this.inventarioForm.value.costoCompra,
      costoPrestamo: +this.inventarioForm.value.costoPrestamo
    }
    console.log(body);
    if (this.inventario && this.isPrestamo) {
      this.sub.add(
        this.inventarioService.patchInventario(body, this.inventario.id).subscribe(
          (response) => {
            this.alertService.triggerMessage('Inventario Editado Correctamente', 'success');
            this.refreshInventarioById();
            this.loading = false;
            this.closeModal();
          },
          (error) => {
            this.loading = false;
            this.alertService.triggerMessage(error.error.message, 'error');
          }
        )
      );
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

  refreshInventarioById() {
    this.sub.add(
      this.inventarioService.getInventarioById(this.inventario.id).subscribe(
        (inventario) => {
          this.inventarioService.inventario.emit(inventario);
        }
      )
    );
  }
}
