import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Inventario } from 'src/app/interfaces/inventario';

@Component({
  selector: 'app-modal-devolver-inventario',
  templateUrl: './modal-devolver-inventario.component.html',
  styles: [
  ]
})
export class ModalDevolverInventarioComponent implements OnInit, OnDestroy {
  sub: Subscription;
  loading: boolean = false;
  modal = this.modalService.modal;
  inventario: Inventario;
  constructor(
    private inventarioService: InventarioService,
    private alertService: AlertService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribeInventario();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  subscribeInventario() {
    this.sub.add(
      this.inventarioService.inventario.subscribe(
        (inventario) => {
          if (inventario) {
            this.inventario = inventario;
          }
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
  }

  save() {
    this.loading = true;
    const body: Inventario = {
      estado: 'DEVUELTO'
    }
    this.sub.add(
      this.inventarioService.patchInventario(body, this.inventario.id).subscribe(
        (response) => {
          this.loading = false;
          this.alertService.triggerMessage('Inventario Devuelto Exitosamente', 'success');
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

  refreshInventario() {
    this.sub.add(
      this.inventarioService.getInventarioById(this.inventario.id).subscribe(
        (inventario) => {
          if (inventario) {
            this.inventarioService.inventario.emit(inventario);
          }
        }
      )
    );
  }

}
