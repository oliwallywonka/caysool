import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupExtension, RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styles: [
  ]
})
export class ClientModalComponent implements OnInit, OnDestroy {
  @Input() modalButton = true;
  sub: Subscription;
  loading: boolean = false;
  client: Client;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  clientForm: FormGroup = this.fb.group({
    name: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    birthDate: ['',
      [

        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    phone: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    direction: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    email: ['',
      [
        RxwebValidators.email(),
        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    ci: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.minLength({
          value: 2,
          message: this.errorMessages.minLength,
        }),
        RxwebValidators.maxLength({
          value: 20,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
  });

  constructor(
    private clientService: ClientService,
    private alertService: AlertService,
    private modalService: ModalService,
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
      this.clientService.client.subscribe(
        (client: Client) => {
          this.client = client;
          if (client) {
            this.clientForm.controls['name'].setValue(client.name);
            this.clientForm.controls['birthDate'].setValue(client.birthDate);
            this.clientForm.controls['email'].setValue(client.email);
            this.clientForm.controls['phone'].setValue(client.phone);
            this.clientForm.controls['direction'].setValue(client.direction);
            this.clientForm.controls['ci'].setValue(client.ci);
          }
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.clientService.client.emit(null);
  }

  toggleModal() {
    this.modal.visible = true;
    this.modal.modalName = 'clientModal';
  }

  refreshForm() {
    (<FormGroupExtension>this.clientForm).resetForm();
  }

  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Cliente ${message} Exitosamente`,
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
    if (this.client) {
      this.clientService.patchClient(this.clientForm.value, this.client.id).subscribe(
        response => {
          this.loading = false;
          this.successMessage('editado');
          this.clientService.client.emit(response);
          this.closeModal();
        },
        error => {
          this.loading = false;
          this.errorMessage(error.error.message);
        }
      );
    } else {
      this.clientService.postClient(this.clientForm.value).subscribe(
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



}
