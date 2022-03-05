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
  historialPagosArray: any[] = [];
  historialImpresionesArray: any[] = [];
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
    this.subscribePagos();
    this.subscribeImpresiones();
    this.subscribePrestamo();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  calculateDiasRestantes() {
    const diaInicio = moment(this.prestamo.fechaInicio);
    const diaFinal = moment(this.prestamo.fechaFinal);
    this.diasRestantes = moment.duration(diaFinal.diff(diaInicio)).asDays();
    this.diasRestantes = +this.diasRestantes.toFixed(1);
  }

  getPrestamoById() {
    this.sub.add(
      this.prestamoService.getPrestamoById(+this.prestamoId).subscribe(
        prestamo => {
          this.prestamo = prestamo;
          this.calculateDiasRestantes();
          this.setHistorialPrestamo();
        }
      )
    );
  }

  setHistorialPrestamo() {
    this.historialArray = [];
    const historialItem = {
      fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
      operacion: 'Prestamo',
      cargo: this.prestamo.costoPrestamo,
      comision: 0.00,
      cargoExtra: 0.00,
      amortiguado: 0.00,
    }
    const historialItem2 = {
      fecha: this.datePipe.transform(this.prestamo.createdAt, 'medium'),
      operacion: 'Interés al finalizar el plazo',
      cargo: this.prestamo.costoInteres,
      comision: 0.00,
      cargoExtra:  0.00,
      amortiguado: 0.00,
    }
    this.historialArray.push(historialItem);
    this.historialArray.push(historialItem2);
  }

  getPagosByPrestamoId() {
    this.sub.add(
      this.pagoService.getByPrestamoId(+this.prestamoId).subscribe(
        pagos => {
          this.pagos = pagos;
          this.setHistorialPago();
        }
      )
    );
  }

  subscribePagos() {
    this.sub.add(
      this.pagoService.pagos.subscribe(
        pagos => {
          if (pagos) {
            this.pagos = pagos;
            this.setHistorialPago();
          }
        }
      )
    );
  }

  setHistorialPago() {
    this.historialPagosArray = [];
    let costoPago = 0;
    this.pagos.map(pago => {
      costoPago += +pago.costoPago;
      const costoPorCobrar = this.prestamo.costoTotal - costoPago;
      console.log(costoPorCobrar);
      const historialItem = {
        fecha: this.datePipe.transform(pago.createdAt, 'medium'),
        operacion: pago.tipoPago === 'PAGO'? 'PAGO' : pago.tipoPago === 'INTERES'? 'PAGO INTERES': 'PAGO AMORTIZACION',
        cargo: pago.tipoPago === 'AMORTIZACION'? 0.00 : pago.costoPago,
        comision: pago.costoAdministracion,
        cargoExtra: pago.costoAdministracion,
        amortiguado: pago.tipoPago === 'AMORTIZACION'? pago.costoPago: 0.00,
        costoPorCobrar2 : costoPorCobrar,
        ...pago
      };
      this.historialPagosArray.push(historialItem);
    });
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

  subscribeImpresiones() {
    this.sub.add(
      this.impresionService.impresiones.subscribe(
        impresiones => {
          if (impresiones){
            this.impresiones = impresiones;
            this.setHistorialImpresiones();
          }
        }
      )
    );
  }

  setHistorialImpresiones() {
    this.historialImpresionesArray = [];
    this.impresiones.map(impresion => {
      const historialItem = {
        fecha: this.datePipe.transform(impresion.createdAt, 'medium'),
        operacion: `IMPRESIÓN ${impresion.tipoDocumento === 'CONTRATO'?'CONTRATO':'PAGO'}`,
        cargo: impresion.costoImpresion,
        comision: 0.00,
        cargoExtra: 0.00,
        amortiguado: 0.00
      };
      this.historialImpresionesArray.push(historialItem);
    });
  }

  subscribePrestamo() {
    this.sub.add(
      this.prestamoService.prestamo.subscribe(
        (prestamo) => {
          if (prestamo) {
            this.prestamo = prestamo;
            this.calculateDiasRestantes();
            this.setHistorialPrestamo();
          }
        }
      )
    );
  }

  goToBackPage() {
    this.location.back();
  }

  showCambioFechaModal() {
    this.modal.modalName = 'prestamoEditModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
  }

  showPagoModal() {
    this.modal.modalName = 'pagoModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
    this.pagoService.pagos.emit(this.pagos);
  }

  showAmortiguarModal() {
    this.modal.modalName = 'amortizacionModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
  }

  showImpresionPagoModal(pago) {
    if (pago.operacion === 'PAGO' || pago.operacion === 'PAGO INTERES' || pago.operacion === 'PAGO AMORTIZACION'){
      this.modal.modalName = 'impresionContratoModal';
      this.modal.visible = true;
      this.pagoService.pago.emit(pago);
      this.prestamoService.prestamo.emit(this.prestamo);
    }
  }

  showImpresionContratoModal() {
    this.modal.modalName = 'impresionPagoModal';
    this.modal.visible = true;
    this.prestamoService.prestamo.emit(this.prestamo);
  }

}
