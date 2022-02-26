import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { Impresion } from 'src/app/interfaces/impresion';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-card-reporte-impresion',
  templateUrl: './card-reporte-impresion.component.html',
  styles: [
  ]
})
export class CardReporteImpresionComponent implements OnInit, OnDestroy {
  sub: Subscription;
  loading = false;
  impresiones: Impresion[] = [];
  reporteForm = this.fb.group({
    from:[new Date().toISOString().slice(0, 19).replace('T', ' ')],
    to:[new Date().toISOString().slice(0, 19).replace('T', ' ')]
  })
  constructor(
    private reporteService: ReporteService,
    private location: Location,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getImpresiones() {
    this.sub.add(
      this.reporteService.getImpresionesByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to
      }).subscribe(
        (impresiones) => {
          if (impresiones) {
            this.impresiones = impresiones;
          }
        }
      )
    );
  }

  goToBackPage() {
    this.location.back();
  }

}
