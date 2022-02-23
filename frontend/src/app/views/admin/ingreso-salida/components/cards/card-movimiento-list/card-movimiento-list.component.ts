import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Apertura } from 'src/app/interfaces/apertura';
import { Subscription } from 'rxjs';
import { AperturaService } from 'src/app/core/services/apertura.service';
import { ActivatedRoute } from '@angular/router';
import { Movimiento } from 'src/app/interfaces/movimiento';
import { MovimientoService } from 'src/app/core/services/movimiento.service';

@Component({
  selector: 'app-card-movimiento-list',
  templateUrl: './card-movimiento-list.component.html',
  styleUrls: []
})
export class CardMovimientoListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  aperturaId: string;
  apertura: Apertura;
  movimientos: Movimiento[];
  totalMovimiento: number;
  constructor(
    private movimientoService: MovimientoService,
    private aperturaService: AperturaService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.aperturaId = this.route.snapshot.paramMap.get('aperturaId');
    this.getApertura();
    this.getMovimientosByAperturaId();
    this.subscribeMovimientos();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  calculateTotalMovimientos(movimientos: Movimiento[]) {
    this.totalMovimiento = 0;
    for (const movimiento of movimientos ) {
      if (movimiento.tipo){
        this.totalMovimiento += +movimiento.cantidad;
      }else {
        this.totalMovimiento -= +movimiento.cantidad;
      }
    }
    this.totalMovimiento.toFixed(1);
  }

  getMovimientosByAperturaId() {
    this.sub.add(
      this.movimientoService.getMovimientosByAperturaId(+this.aperturaId).subscribe(
        movimientos => {
          console.log(movimientos)
          this.movimientos = movimientos;
          this.calculateTotalMovimientos(this.movimientos);
        }
      )
    );
  }

  getApertura() {
    this.sub.add(
      this.aperturaService.getAperturaById(+this.aperturaId).subscribe(
        (apertura) => {
          this.apertura = apertura;
        }
      )
    );
  }
  subscribeMovimientos() {
    this.sub.add(
      this.movimientoService.movimientos.subscribe(
        (movimientos) => {
          if (movimientos){
            this.movimientos = movimientos;
            this.calculateTotalMovimientos(this.movimientos);
          }
        }
      )
    )
  }


  goToBackPage() {
    this.location.back();
  }

}
