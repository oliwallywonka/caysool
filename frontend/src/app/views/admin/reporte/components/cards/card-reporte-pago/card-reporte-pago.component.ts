import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
import { Pago } from 'src/app/interfaces/pago';
import { Impresion } from 'src/app/interfaces/impresion';
@Component({
  selector: 'app-card-reporte-pago',
  templateUrl: './card-reporte-pago.component.html',
  styleUrls: ['./card-reporte-pago.component.css']
})
export class CardReportePagoComponent implements OnInit , OnDestroy {
  sub: Subscription;
  loading = false;
  pagos: Pago[] = [];
  impresiones: Impresion[] = [];
  reporteForm: FormGroup = this.fb.group({
    from:[new Date().toISOString().substring(0, 10),],
    to:[new Date().toISOString().substring(0, 10),]
  })
  constructor(
    private reporteService: ReporteService,
    private location: Location,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getPagos();
    this.getImpresiones();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getImpresiones() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getImpresionesByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to,
      }).subscribe(
        (impresiones) => {
          if (impresiones) {
            this.impresiones = impresiones;
          }
          this.loading = false;
        }
      )
    );
  }

  getPagos() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getPagosByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to,
      }).subscribe(
        (pagos) => {
          if (pagos) {
            this.pagos = pagos;
          }
          this.loading = false;
        }
      )
    );
  }

  goToBackPage() {
    this.location.back();
  }

  save() {
    this.getPagos();
  }
}
