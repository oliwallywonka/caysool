import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { Inventario, InventarioResponse } from 'src/app/interfaces/inventario';
@Component({
  selector: 'app-card-inventario-comprado',
  templateUrl: './card-inventario-comprado.component.html',
  styles: [
  ]
})
export class CardInventarioCompradoComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading: boolean = false;
  response: InventarioResponse;

  constructor(
    private inventarioService: InventarioService,
    private modalService: ModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getInventarioComprado(true);
    this.subscribeInventarios();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInventarioComprado(force = false) {
    this.inventarioService.getInventarioComprado({ force }).subscribe(
      (response) => {
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

  getOnPageResponse(page: number) {
    this.response = null;
    this.inventarioService
      .getInventarioComprado({
        force: true,
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

  openModalInventario() {
    this.modalService.modal.modalName = 'inventarioModal';
    this.modalService.modal.visible = true;
  }

}
