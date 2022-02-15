import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ClientService } from 'src/app/core/services/client.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Client, ClientResponse } from 'src/app/interfaces/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: [
  ]
})
export class ClientListComponent implements OnInit, OnDestroy {
  response: ClientResponse;
  loading: boolean = false;
  modal = this.modalService.modal;
  subscriptions: Subscription;
  ciForm: FormGroup = this.fb.group({
    ci: ['']
  });
  constructor(
    private clientService: ClientService,
    private alertService: AlertService,
    private modalService: ModalService,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.getClients();
    this.subscriptionClients();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getClients(force = false) {
    this.subscriptions.add(
      this.clientService.getClients({ force }).subscribe(
        response => {
          this.response = response;
          this.loading = false;
        }
      )
    );
  }

  subscriptionClients() {
    this.subscriptions.add(
      this.clientService.response.subscribe(
        response =>{
          if (response.items.length > 0) {
            this.response = response;
            this.loading = false;
          }
        }
      )
    );
  }

  loadClients() {
    this.loading = true;
    this.getClients(true);
  }

  search(event) {
    this.loading = true;
    this.subscriptions.add(
      this.clientService.getClients({
        ci: this.ciForm.value.ci,
        force: true
      }).subscribe(
        response => {
          this.loading = false;
          if ( response.items.length === 0 ) {
            this.alertService.alert.fire({
              title: 'No hay datos relacionados con la busqueda',
              icon: 'error'
            })
          } else {
            this.response = response;
          }
        }
      )
    )
  }

  getOnPageResponse(page: number) {
    this.response = null;
    this.clientService.getClients({
      ci: this.ciForm.value.ci,
      page,
      force: true
    }).subscribe(
      response => {
        this.clientService.response.emit(response);
      }
    )
  }

  showClientModal (client) {
    console.log('modalEdit');
    this.modal.modalName = 'clientModal';
    this.modal.visible = true;
    this.clientService.client.emit(client);
  }

  showInformationClient(client) {
    console.log(client)
  }



}
