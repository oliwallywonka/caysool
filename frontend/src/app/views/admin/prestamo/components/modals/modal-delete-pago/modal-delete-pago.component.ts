import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PagoService } from 'src/app/core/services/pago.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Pago } from 'src/app/interfaces/pago';
import { environment } from 'src/environments/environment';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
@Component({
  selector: 'app-modal-delete-pago',
  templateUrl: './modal-delete-pago.component.html',
  styles: [
  ]
})
export class ModalDeletePagoComponent implements OnInit, OnDestroy{

  publicUrl = environment.publicUrl;
  sub: Subscription;
  loading: boolean = false;
  pago: Pago;
  prestamo: Prestamo;
  modal = this.modalService.modal;

  constructor(
    private pagoService: PagoService,
    private prestamoService: PrestamoService,
    private alertService: AlertService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribePago();
    this.subscribePrestamo();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshPagos() {
    this.sub.add(
      this.pagoService.getByPrestamoId(this.prestamo.id).subscribe(
        pagos => {
          this.pagoService.pagos.emit(pagos);
        }
      )
    );
  }

  refreshPrestamo() {
    this.sub.add(
      this.prestamoService.getPrestamoById(this.prestamo.id).subscribe(
        prestamo => {
          this.prestamoService.prestamo.emit(prestamo);
        }
      )
    );
  }

  subscribePago() {
    this.sub.add(
      this.pagoService.pago.subscribe(
        (pago) => {
          this.pago = pago;
        }
      )
    );
  }

  subscribePrestamo() {
    this.sub.add(
      this.prestamoService.prestamo.subscribe(
        (prestamo) => {
          this.prestamo = prestamo;
        }
      )
    );
  }

  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.pagoService.pago.emit(null);
  }

  save() {
    this.loading = true;
    this.pagoService.deleteById(this.pago.id).subscribe(
      response => {
        this.loading = false;
        console.log(response);
        this.alertService.triggerMessage(response.message, 'success');
        this.refreshPagos();
        this.refreshPrestamo();
        this.closeModal();
      },
      error =>{
        this.loading = false;
        this.alertService.triggerMessage(error.error.message, 'error');
        this.closeModal();
      }
    )

  }

}
