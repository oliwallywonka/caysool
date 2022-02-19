import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AmortizacionService } from 'src/app/core/services/amortizacion.service';
import { ImpresionService } from 'src/app/core/services/impresion.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { PagoService } from 'src/app/core/services/pago.service';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Amortizacion } from 'src/app/interfaces/amortizacion';
import { Impresion } from 'src/app/interfaces/impresion';
import { Pago } from 'src/app/interfaces/pago';
import { Prestamo } from 'src/app/interfaces/prestamo';
import * as moment from 'moment';
@Component({
  selector: 'app-card-prestamo-detalle',
  templateUrl: './card-prestamo-detalle.component.html',
  styles: [
  ]
})
export class CardPrestamoDetalleComponent implements OnInit, OnDestroy {
  sub: Subscription;
  diasRestantes: number;
  prestamoId: string;
  prestamo: Prestamo;
  historialArray: any[] = [];
  impresiones: Impresion[] = [];
  pagos: Pago[] = [];
  amorizaciones: Amortizacion[] = [];
  constructor(
    private amortizacionService: AmortizacionService,
    private impresionService: ImpresionService,
    private pagoService: PagoService,
    private prestamoService: PrestamoService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.prestamoId = this.route.snapshot.paramMap.get('prestamoId');
    this.getPrestamoById();
    this.getPagosByPrestamoId();
    this.getAmortizacionesByPrestamoId();
    this.getImpresionByPrestamoId();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPrestamoById() {
    this.sub.add(
      this.prestamoService.getPrestamoById(+this.prestamoId).subscribe(
        prestamo => {
          this.prestamo = prestamo;
          console.log(prestamo);
          const diaInicio = moment(this.prestamo.fechaInicio);
          const diaFinal = moment(this.prestamo.fechaFinal);
          this.diasRestantes = moment.duration(diaFinal.diff(diaInicio)).asDays();
        }
      )
    );
  }

  getPagosByPrestamoId() {
    this.sub.add(
      this.pagoService.getByPrestamoId(+this.prestamoId).subscribe(
        pagos => {
          this.pagos = pagos;
        }
      )
    );
  }

  getAmortizacionesByPrestamoId() {
    this.sub.add(
      this.amortizacionService.getByPrestamoId(+this.prestamoId).subscribe(
        amortizaciones => {
          this.amorizaciones = amortizaciones;
        }
      )
    )
  }

  getImpresionByPrestamoId() {
    this.sub.add(
      this.impresionService.getByPrestamoId(+this.prestamoId).subscribe(
        impresiones => {
          this.impresiones = impresiones;
        }
      )
    )
  }

  goToBackPage() {
    this.location.back();
  }

  showPagoModal() {

  }

  showAmortiguarModal() {

  }

  showImpresionContratomodal() {

  }

  showImpresionPagoModal() {

  }

}
