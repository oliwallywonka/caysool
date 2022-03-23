import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { BusinessService } from 'src/app/core/services/business.service';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { TransaccionMonedaService } from 'src/app/core/services/transaccionMoneda.service';
import { Business } from 'src/app/interfaces/business';
import { TransaccionMoneda, TransaccionMonedaResponse } from 'src/app/interfaces/transaccionMoneda';

@Component({
  selector: 'app-card-dolar-list',
  templateUrl: './card-dolar-list.component.html',
  styles: [
  ]
})
export class CardDolarListComponent implements OnInit, OnDestroy {
  loading = false;
  transacciones: TransaccionMoneda[] = [];
  today = new Date(moment(Date.now()).subtract(4, 'hours').toISOString()).toISOString().substring(0, 10);
  sub: Subscription;
  response: TransaccionMonedaResponse;
  business: Business = this.businessService.businessInformation;
  constructor(
    private transaccionService: TransaccionMonedaService,
    private reporteService: ReporteService,
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getTransacciones();
    this.subcriptionTransacciones();
    this.subcriptionBusiness();
    this.getTansaccioness();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getTransacciones() {
    this.sub.add(
      this.transaccionService.getTransaccionMonedas({ force: true }).subscribe(
        response => {
          this.response = response;
        }
      )
    );
  }

  subcriptionBusiness() {
    this.sub.add(
      this.businessService.business.subscribe(
        business => {
          if (business){
            this.business = business;
          }
        }
      )
    );
  }

  subcriptionTransacciones() {
    this.sub.add(
      this.transaccionService.response.subscribe(
        response => {
          if (response) {
            this.response = response;
            this.getTansaccioness();
          }
        }
      )
    )
  }

  getOnPageResponse(page: number) {
    this.response = null;
    this.transaccionService
      .getTransaccionMonedas({
        page,
        force: true,
      })
      .subscribe((response) => {
        this.transaccionService.response.emit(response);
      });
  }

  getTansaccioness() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getTransaccionByDate({
        from: this.today,
        to: this.today
      }).subscribe(
        (transacciones) => {
          if (transacciones) {
            this.transacciones = transacciones;
          }
          this.loading = false;
        }
      )
    );
  }
}
