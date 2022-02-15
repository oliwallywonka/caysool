import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormGroupExtension,
  RxFormBuilder,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { concat, forkJoin, Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: [],
})
export class ModalUserComponent implements OnInit {
  loading: boolean = false;
  user: User;
  modal = this.modalService.modal;
  compressed = true;
  submitted = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };

  userForm: FormGroup = this.fb.group({
    id: [''],
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
    password: ['',
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
  });

  pictureForm: FormGroup = this.fb.group({
    picture: ['']
  });
  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private ng2ImgMax: Ng2ImgMaxService,
    private alertService: AlertService,
    private fb: RxFormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user: User) => {
      this.user = user;
      if (user) {
        this.userForm.controls['id'].setValue(user ? user.id : '');
        this.userForm.controls['name'].setValue(user ? user.name : '');
        this.userForm.controls['ci'].setValue(user ? user.ci : '');
        this.userForm.controls['phone'].setValue(user ? user.phone : '');
      }
    });
  }

  toggleModal() {
    this.modal.visible = true;
    this.modal.modalName = 'userModal';
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.userService.user.emit(null);
  }

  refreshForm() {
    (<FormGroupExtension>this.userForm).resetForm();
  }

  patchUser() {
    return this.userService.patchUser(this.userForm.value, this.user.id);
  }

  save() {
    this.loading = true;
    const formData = (<FormGroupExtension>this.pictureForm).toFormData();
    if (this.user) {
      if (this.pictureForm.value.picture) {
        forkJoin([
          this.userService.patchUser(this.userForm.value, this.user.id),
          this.userService.patchImageUser(formData, this.user.id),
        ]).subscribe(([
          response1,
          response2,
        ])=>{
          this.loading = false;
          this.successMessage('editado');
          this.refreshUsers();
          this.closeModal();
        })
      } else {
        this.userService.patchUser(this.userForm.value, this.user.id).subscribe(
          response => {
            this.loading = false;
            this.successMessage('editado');
            this.refreshUsers();
            this.closeModal();
          },
          error => {
            this.loading = false;
            this.errorMessage(error.error.message);
          }
        )

      }
    }else{
      if (this.pictureForm.value.picture) {
        this.userService.postUser(this.userForm.value).subscribe(
          response  => {
            this.userService.patchImageUser(formData, response.user.id).subscribe(
              response => {
                this.loading = false;
                this.successMessage('creado');
                this.refreshUsers();
                this.closeModal();
              },
              error => {
                this.loading = false;
                this.errorMessage(error.error.message);
              }
            );
          },
          error => {
            this.loading = false;
            this.errorMessage(error.error.message);
          }
        );
      }else {
        this.userService.postUser(this.userForm.value).subscribe(
          response => {
            this.loading = false;
            this.successMessage('creado');
            this.refreshUsers();
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.compressFile(file)
    }
  }

  compressFile(image) {
    this.compressed = false;
    this.ng2ImgMax.resizeImage(image, 400, 300).subscribe( result => {
      const compressedFile = new File([result], result.name)
      this.compressed = true;
      this.pictureForm.patchValue({
        picture: compressedFile,
      });
    })
  }

  refreshUsers() {
    this.userService.getUsers({force: true}).subscribe((automovil) => {
      this.userService.response.emit(automovil);
    });
  }

  successMessage(message = 'creado') {
    this.alertService.alert.fire({
      title: `Usuario ${message} Exitosamente`,
      icon: 'success',
    })
  }

  errorMessage(message) {
    this.alertService.alert.fire({
      title: message,
      icon: 'error',
    })
  }
}
