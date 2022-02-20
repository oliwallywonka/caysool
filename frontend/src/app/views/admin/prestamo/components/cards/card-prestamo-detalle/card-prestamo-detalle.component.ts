import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
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
  modal = this.modalService.modal;
  constructor(
    private amortizacionService: AmortizacionService,
    private impresionService: ImpresionService,
    private pagoService: PagoService,
    private prestamoService: PrestamoService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private location: Location,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.prestamoId = this.route.snapshot.paramMap.get('prestamoId');
    this.historialArray = [];
    this.getPrestamoById();
    this.getPagosByPrestamoId();
    this.getImpresionByPrestamoId();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getDataBy() {
    this.sub.add(
      forkJoin([
        this.prestamoService.getPrestamoById(+this.prestamoId),
        this.pagoService.getByPrestamoId(+this.prestamoId),
        this.amortizacionService.getByPrestamoId(+this.prestamoId),
        this.impresionService.getByPrestamoId(+this.prestamoId)
      ]).subscribe(([
        responsePrestamo,
        responsePago,
        responseAmortizacion,
        responseService
      ]) => {

      })
    );
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
          const historialItem = {
            fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
            operacion: 'Prestamo',
            cargo: prestamo.costoPrestamo,
            comision: 0.00,
            cargoExtra: 0.00,
            Amortiguado: 0.00,
          }
          const historialItem2 = {
            fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
            operacion: 'Interés Generado',
            cargo: prestamo.costoInteres,
            comision: 0.00,
            cargoExtra:  0.00,
            amortiguado: 0.00,
          }
          this.historialArray.push(historialItem);
          this.historialArray.push(historialItem2);
        }
      )
    );
  }

  getPagosByPrestamoId() {
    this.sub.add(
      this.pagoService.getByPrestamoId(+this.prestamoId).subscribe(
        pagos => {
          this.pagos = pagos;
          this.pagos.map(pago => {
            const historialItem = {
              fecha: this.datePipe.transform(pago.createdAt, 'medium'),
              operacion: pago.tipoPago === 'PAGO'? 'PAGO' : pago.tipoPago === 'INTERES'? 'PAGO INTERES': 'PAGO AMORTIZACION',
              cargo: pago.tipoPago === 'PAGO' || 'INTERES'? pago.costoPago : 0.00,
              comision: pago.costoAdministracion,
              cargoExtra: pago.costoAdministracion,
              amortiguado: pago.tipoPago === 'AMORTIGUADO'? pago.costoPago: 0.00
            };
            this.historialArray.push(historialItem);
          });
        }
      )
    );
  }

  getImpresionByPrestamoId() {
    this.sub.add(
      this.impresionService.getByPrestamoId(+this.prestamoId).subscribe(
        impresiones => {
          this.impresiones = impresiones;
          this.impresiones.map(impresion => {
            const historialItem = {
              fecha: this.datePipe.transform(impresion.createdAt, 'medium'),
              operacion: `REIMPRESIÓN ${impresion.tipoDocumento === 'CONTRATO'?'CONTRATO':'PAGO'}`,
              cargo: impresion.costoImpresion,
              comision: 0.00,
              cargoExtra: 0.00,
              amortiguado: 0.00
            };
            this.historialArray.push(historialItem);
          });
        }
      )
    )
  }

  goToBackPage() {
    this.location.back();
  }

  showPagoModal() {
    this.modal.modalName = 'pagoModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
  }

  showAmortiguarModal() {
    this.modal.modalName = 'amortizacionModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
  }

  showImpresionContratomodal() {

  }

  showImpresionPagoModal() {

  }

}
