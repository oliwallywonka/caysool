import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PagoService } from 'src/app/core/services/pago.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Pago } from 'src/app/interfaces/pago';
import { environment } from 'src/environments/environment';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo } from 'src/app/interfaces/prestamo';
import { Historial } from 'src/app/interfaces/historial';
import { HistorialService } from 'src/app/core/services/historial.service';
@Component({
  selector: 'app-modal-historial-detalle',
  templateUrl: './modal-historial-detalle.component.html',
  styleUrls: []
})
export class ModalHistorialDetalleComponent implements OnInit, OnDestroy{

  publicUrl = environment.publicUrl;
  sub: Subscription;
  loading: boolean = false;
  historial: Historial;
  prestamo: Prestamo;
  modal = this.modalService.modal;
  previousDataKeys;
  previusDataValues;
  actualDataKeys;
  actualDataValues;

  constructor(
    private historialService: HistorialService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.previousDataKeys = null;
    this.previusDataValues = null;
    this.actualDataKeys = null;
    this.actualDataValues = null;
    this.historial = null;
    this.subscribeHistorial();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  subscribeHistorial() {
    this.sub.add(
      this.historialService.historial.subscribe(
        (historial) => {
          this.historial = historial;
          if (historial) {
            this.previousDataKeys = Object.keys(this.historial.previousData);
            this.previusDataValues = Object.values(this.historial.previousData);
            this.actualDataKeys = Object.keys(this.historial.actualData);
            this.actualDataValues = Object.values(this.historial.actualData);
          }
        }
      )
    );
  }


  closeModal() {
    this.modal.visible = false;
    this.modal.modalName = '';
    this.historialService.historial.emit(null);
  }

}

