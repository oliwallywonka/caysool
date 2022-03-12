import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { InventarioService } from 'src/app/core/services/inventario.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Inventario } from 'src/app/interfaces/inventario';

@Component({
  selector: 'app-modal-venta-inventario',
  templateUrl: './modal-venta-inventario.component.html',
  styles: [
  ]
})
export class ModalVentaInventarioComponent implements OnInit {
  sub: Subscription;
  loading: boolean = false;
  modal = this.modalService.modal;
  inventario: Inventario;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };
  inventarioForm: FormGroup = this.fb.group({
    precioVenta:  [
      '',
      RxwebValidators.required({ message: this.errorMessages.required})
    ]
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
    this.inventarioService.inventario.emit(null);
  }

  save() {
    this.loading = true;
    const body: Inventario = {
      estado: 'VENDIDO',
      precioVenta: +this.inventarioForm.value.precioVenta
    }
    this.sub.add(
      this.inventarioService.ventaInventario(body, this.inventario.id).subscribe(
        (response) => {
          this.loading = false;
          this.alertService.triggerMessage('Inventario Vendio exitosamente', 'success');
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
