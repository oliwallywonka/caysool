import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { UserService } from 'src/app/core/services/user.service';
import { UserResponse } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: []
})
export class CardUserComponent implements OnInit, OnDestroy {
  baseUrl: string = environment.publicUrl;
  subscriptions: Subscription;
  response: UserResponse;
  loading = false;
  options = [
    {
      value: true,
      name: 'Administrador'
    },
    {
      value: false,
      name: 'Empleado'
    }
  ];

  rolForm: FormGroup = this.fb.group({
    rol: [false]
  });
  activeForm: FormGroup = this.fb.group({
    active: [true]
  });
  ciForm: FormGroup = this.fb.group({
    ci: ['']
  });
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.subscriptionUsers();
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getUsers(force = false) {
    this.subscriptions.add(
      this.userService.getUsers({force}).subscribe( response => {
        this.response = response;
        this.loading = false;
      })
    );
  }

  subscriptionUsers() {
    this.subscriptions.add(
      this.userService.response.subscribe( response => {
        if (response.items.length > 0) {
          this.response = response;
          this.loading = false;
        }
      })
    );
  }

  loadUsers() {
    this.loading = true;
    this.getUsers(true);
  }

  search(event) {
    this.loading = true;
    this.subscriptions.add(
      this.userService.getUsers({
        ci: this.ciForm.value.ci,
        force: true
      })
      .subscribe( response => {
        this.loading = false;
        if ( response.items.length === 0 ) {
          this.alertService.alert.fire({
            title: 'No hay datos relacionados con la busqueda',
            icon: 'error'
          })
        } else {
          this.response = response;
        }
      })
    );
  }

  getOnPageResponse(page: number){
    this.response = null;
    this.userService.getUsers({
      ci: this.ciForm.value.ci,
      page,
      force: true
    }).subscribe(response=>{
      this.userService.response.emit(response)
    });
  }

  changeRol(event, id) {
    console.log(event, id)
    this.userService.patchUser({ rol: JSON.parse(event) }, id)
      .subscribe(
        response => {
          this.alertService.alert.fire({
            title: 'Usuario Editado Exitosamente',
              icon: 'success',
          });
          this.loadUsers()
        },
        error => {
          console.log(error)
          this.alertService.alert.fire({
            title: error.error.message,
            icon: 'error',
          });
        }
      );
  }

  changeUserActive(id, isActive ){
    console.log(isActive, id)

    this.userService.patchUser({ isActive: !isActive }, id)
      .subscribe(
        response => {
          this.alertService.alert.fire({
            title: 'Usuario Editado Exitosamente',
              icon: 'success',
          });
          this.loadUsers();
        },
        error => {
          console.log(error)
          this.alertService.alert.fire({
            title: error.error.message,
            icon: 'error',
          });
        }
      );
  }

  showModal (user) {
    this.modalService.modal.modalName = 'userModal';
    this.modalService.modal.visible = true;
    this.userService.user.emit(user);
  }

}
