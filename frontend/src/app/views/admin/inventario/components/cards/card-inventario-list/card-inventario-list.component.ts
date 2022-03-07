import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { Inventario, InventarioResponse } from 'src/app/interfaces/inventario';
@Component({
  selector: 'app-card-inventario-list',
  templateUrl: './card-inventario-list.component.html',
  styleUrls: []
})
export class CardInventarioListComponent implements OnInit, OnDestroy {

  @Input()
  estado: string = '';

  sub: Subscription;
  loading: boolean = false;
  response: InventarioResponse;

  response2: InventarioResponse;

  ciForm: FormGroup = this.fb.group({
    ci: [''],
  });
  constructor(
    private inventarioService: InventarioService,
    private modalService: ModalService,
    private alertService: AlertService,
    private router: Router,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getInventario(true);
    this.subscribeInventarios();
    if (this.estado === 'VENDIDO') {
      this.getInventarioWhitOutPrestamo();
      this.subscribeInventarioWhitOutPrestamo();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInventario(force = false) {
    this.inventarioService.getInventario({ force, estadoInv: this.estado}).subscribe(
      (response) => {
        this.response = response;
        this.loading = false;
      }
    )
  }

  getInventarioWhitOutPrestamo() {
    this.sub.add(
      this.inventarioService.getInventarioByEstado({ force: true, estadoInv: this.estado}).subscribe(
        (response) => {
          this.response2 = response;
        }
      )
    );
  }

  subscribeInventarios() {
    this.sub.add(
      this.inventarioService.response.subscribe(
        (response) => {
          if (response.items.length > 0) {
            this.response = response;
            this.loading = false;
          }
        }
      )
    );
  }

  subscribeInventarioWhitOutPrestamo() {
    this.sub.add(
      this.inventarioService.response2.subscribe(
        (response) => {
          if (response.items.length > 0) {
            this.response2 = response;
            this.loading = false;
          }
        }
      )
    );
  }

  search(event) {
    this.loading = true;
    this.sub.add(
      this.inventarioService
        .getInventario({
          clientCi: this.ciForm.value.ci,
          force: true,
          estadoInv: this.ciForm.value.ci ? '' : this.estado,
        })
        .subscribe(
          (response) => {
            this.loading = false;
            if (response.items.length === 0) {
              this.alertService.alert.fire({
                title: 'No hay datos relacionados con la busqueda',
                icon: 'error',
              });
            } else {
              this.response = response;
            }
        })
    );
  }

  getOnPageResponse(page: number) {
    this.response = null;
    this.inventarioService
      .getInventario({
        clientCi: this.ciForm.value.ci,
        force: true,
        estadoInv: this.ciForm.value.ci ? '' : this.estado,
        page
      })
      .subscribe((response) => {
        this.inventarioService.response.emit(response);
      });
  }

  getOnPageResponseWhitOutPrestamo(page: number) {
    this.response2 = null;
    this.inventarioService
      .getInventarioByEstado({
        force: true,
        estadoInv: this.estado,
        page
      })
      .subscribe((response) => {
        this.inventarioService.response2.emit(response);
      });
  }

  goToInventarioInformation(inventario: Inventario) {
    this.inventarioService.inventario.emit(inventario);
    this.router.navigate(['/admin/inventario', inventario.id]);
  }

  openModalInventario() {
    this.modalService.modal.modalName = 'inventarioModal';
    this.modalService.modal.visible = true;
  }

}
