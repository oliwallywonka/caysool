import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/interfaces/client';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { Inventario } from 'src/app/interfaces/inventario';
import { PrestamoEstado } from 'src/app/interfaces/prestamo';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: []
})
export class ClientInformationComponent implements OnInit, OnDestroy {

  sub: Subscription;
  client: Client;
  prestamoEstado: PrestamoEstado;
  prestamosTotal: number;
  inventario: Inventario[];
  clientId: string;
  modal = this.modalService.modal;
  constructor(
    private clientService: ClientService,
    private prestamoService: PrestamoService,
    private inventarioService: InventarioService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    this.getClientById();
    this.subscribeClient();
    this.getInventarioByClient();
    this.getPrestamoEstadoByClient();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInventarioByClient() {
    this.sub.add(
      this.inventarioService.getInventarioByClientId(+this.clientId).subscribe(
        inventario => {
          this.inventario = inventario
        }
      )
    );
  }

  getPrestamoEstadoByClient() {
    this.prestamosTotal = 0;
    this.sub.add(
      this.prestamoService.getPrestamoByClientId(+this.clientId).subscribe(
        prestamoEstado => {
          this.prestamoEstado = prestamoEstado;
          this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.activos.cantidad;
          this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.cancelados.cantidad;
          this.prestamosTotal = this.prestamosTotal + +this.prestamoEstado.vencidos.cantidad;

        }
      )
    );
  }

  getClientById() {
    this.sub.add(
      this.clientService.getClient(+this.clientId).subscribe(
        client => {
          this.client = client;
        }
      )
    )
  }

  subscribeClient() {
    this.sub.add(
      this.clientService.client.subscribe(
        client =>{
          if(client) this.client = client;
        }
      )
    );
  }

  goToBackPage() {
    this.clientService.client.emit(null);
    this.location.back();
  }

  goToInventarioPage(inv) {
    this.router.navigate(['/admin/inventario', inv.id]);
  }

  showPrestamoModal(client) {
    this.modal.modalName = 'prestamoModal';
    this.modal.visible = true;
    this.prestamoService.client.emit(client);
  }

  showClientModal(client) {
    this.modal.modalName = 'clientModal';
    this.modal.visible = true;
    this.clientService.client.emit(client);
  }

}
