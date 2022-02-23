import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AperturaService } from 'src/app/core/services/apertura.service';
import { Apertura, AperturaResponse } from 'src/app/interfaces/apertura';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-card-apertura-list',
  templateUrl: './card-apertura-list.component.html',
  styles: [
  ]
})
export class CardAperturaListComponent implements OnInit, OnDestroy {

  sub: Subscription;
  response: AperturaResponse;
  constructor(
    private aperturaService: AperturaService,
    private modalService: ModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getAperturas();
    this.subcriptionAperturas();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getAperturas() {
    this.sub.add(
      this.aperturaService.getAperturas({ force: true }).subscribe(
        response => {
          this.response = response;
        }
      )
    );
  }

  subcriptionAperturas() {
    this.sub.add(
      this.aperturaService.response.subscribe(
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
    this.aperturaService
      .getAperturas({
        page,
        force: true,
      })
      .subscribe((response) => {
        this.aperturaService.response.emit(response);
      });
  }

  goToAnotherPage(apertura: Apertura) {
    this.router.navigate(['/admin/ingresos-salidas', apertura.id]);
    this.aperturaService.apertura.emit(apertura);
  }

  openCerrarAperturaModal(apertura: Apertura) {
    this.modalService.modal.modalName = 'cierreAperturaModal';
    this.modalService.modal.visible = true;
    this.aperturaService.apertura.emit(apertura);
  }

}
