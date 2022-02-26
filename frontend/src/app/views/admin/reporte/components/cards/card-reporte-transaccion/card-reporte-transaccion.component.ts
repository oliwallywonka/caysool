import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
import { TransaccionMoneda } from 'src/app/interfaces/transaccionMoneda';
@Component({
  selector: 'app-card-reporte-transaccion',
  templateUrl: './card-reporte-transaccion.component.html',
  styles: [
  ]
})
export class CardReporteTransaccionComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading = false;
  transacciones: TransaccionMoneda[] = [];
  reporteForm: FormGroup = this.fb.group({
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
    this.getTansaccioness();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getTansaccioness() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getTransaccionByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to
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

  goToBackPage() {
    this.location.back();
  }

  save() {
    this.getTansaccioness();
  }

}
