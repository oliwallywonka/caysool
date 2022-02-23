import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusinessService } from 'src/app/core/services/business.service';
import { TransaccionMonedaService } from 'src/app/core/services/transaccionMoneda.service';
import { Business } from 'src/app/interfaces/business';
import { TransaccionMonedaResponse } from 'src/app/interfaces/transaccionMoneda';

@Component({
  selector: 'app-card-dolar-list',
  templateUrl: './card-dolar-list.component.html',
  styles: [
  ]
})
export class CardDolarListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  response: TransaccionMonedaResponse;
  business: Business = this.businessService.businessInformation;
  constructor(
    private transaccionService: TransaccionMonedaService,
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getTransacciones();
    this.subcriptionTransacciones();
    this.subcriptionBusiness();
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
}
