import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { AperturaService } from 'src/app/core/services/apertura.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Apertura } from 'src/app/interfaces/apertura';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-modal-cierre-apertura',
  templateUrl: './modal-cierre-apertura.component.html',
  styleUrls: []
})
export class ModalCierreAperturaComponent implements OnInit, OnDestroy {

  publicUrl = environment.publicUrl;
  sub: Subscription;
  loading: boolean = false;
  apertura: Apertura;
  modal = this.modalService.modal;

  constructor(
    private aperturaService: AperturaService,
    private alertService: AlertService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribeApertura();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshAperturas() {
    this.sub.add(
      this.aperturaService.getAperturas({force: true}).subscribe(
        response => {
          this.aperturaService.response.emit(response);
        }
      )
    );
  }

  subscribeApertura() {
    this.sub.add(
      this.aperturaService.apertura.subscribe(
        (apertura) => {
          this.apertura = apertura;
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
    this.aperturaService.cerrarApertura(this.apertura.id).subscribe(
      response => {
        this.loading = false;
        this.alertService.triggerMessage('Caja cerrada exitosamente', 'success');
        this.refreshAperturas();
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
