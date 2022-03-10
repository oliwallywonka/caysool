import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
import { TransaccionMoneda } from 'src/app/interfaces/transaccionMoneda';
@Component({
  selector: 'app-card-reporte-ingreso-salida',
  templateUrl: './card-reporte-ingreso-salida.component.html',
  styles: [
  ]
})
export class CardReporteIngresoSalidaComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading = false;
  movimientos: TransaccionMoneda[] = [];
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
    this.getIngresoSalida();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getIngresoSalida() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getIngresoSalidaByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to
      }).subscribe(
        (movimientos) => {
          if (movimientos) {
            this.movimientos = movimientos;
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
    this.getIngresoSalida();
  }

}
