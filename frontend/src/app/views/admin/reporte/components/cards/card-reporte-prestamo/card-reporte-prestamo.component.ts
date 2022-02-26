import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Impresion } from 'src/app/interfaces/impresion';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-card-reporte-prestamo',
  templateUrl: './card-reporte-prestamo.component.html',
  styles: [
  ]
})
export class CardReportePrestamoComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading = false;
  prestamos: Impresion[] = [];
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
    this.getPrestamos();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPrestamos() {
    this.loading = true;
    console.log(this.reporteForm.value);
    this.sub.add(
      this.reporteService.getPrestamosByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to
      }).subscribe(
        (prestamos) => {
          console.log(prestamos);
          if (prestamos) {
            this.prestamos = prestamos;
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
    this.getPrestamos();
  }
}
