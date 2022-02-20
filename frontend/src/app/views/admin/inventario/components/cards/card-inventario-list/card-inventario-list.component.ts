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
export class CardInventarioListComponent implements OnInit {

  @Input()
  estado: string = '';

  sub: Subscription;
  loading: boolean = false;
  response: InventarioResponse;

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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInventario(force = false) {
    this.inventarioService.getInventario({ force, estadoInv: this.estado}).subscribe(
      (response) => {
        console.log(response);
        this.response = response;
        this.loading = false;
      }
    )
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

  goToInventarioInformation(inventario: Inventario) {
    this.inventarioService.inventario.emit(inventario);
    this.router.navigate(['/admin/inventario', inventario.id]);
  }

}
