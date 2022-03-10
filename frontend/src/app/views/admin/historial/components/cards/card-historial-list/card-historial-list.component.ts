import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistorialService } from 'src/app/core/services/historial.service';
import { Historial, HistorialResponse } from 'src/app/interfaces/historial';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
@Component({
  selector: 'app-card-historial-list',
  templateUrl: './card-historial-list.component.html',
  styleUrls: []
})
export class CardHistorialListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  response: HistorialResponse;
  constructor(
    private historialService: HistorialService,
    private modalService: ModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getHistorials();
    this.subcriptionHistorials();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getHistorials() {
    this.sub.add(
      this.historialService.getHistorial({ force: true }).subscribe(
        response => {
          this.response = response;
        }
      )
    );
  }

  subcriptionHistorials() {
    this.sub.add(
      this.historialService.response.subscribe(
        response => {
          if (response) {
            this.response = response;
          }
        }
      )
    )
  }

  getOnPageResponse(page: number) {
    this.response = null;
    this.historialService
      .getHistorial({
        page,
        force: true,
      })
      .subscribe((response) => {
        this.historialService.response.emit(response);
      });
  }

  goToAnotherPage(historial: Historial) {
    this.router.navigate(['/admin/ingresos-salidas', historial.id]);
    this.historialService.historial.emit(historial);
  }

  showHistorialModal(historial: Historial) {
    this.modalService.modal.modalName = 'historialModal';
    this.modalService.modal.visible = true;
    this.historialService.historial.emit(historial);
  }

}
