import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
import { Prestamo } from 'src/app/interfaces/prestamo';
@Component({
  selector: 'app-card-reporte-prestamo',
  templateUrl: './card-reporte-prestamo.component.html',
  styles: [
  ]
})
export class CardReportePrestamoComponent implements OnInit, OnDestroy {
  estado: string = '';
  sub: Subscription;
  loading = false;
  prestamos: Prestamo[] = [];
  reporteForm: FormGroup = this.fb.group({
    from:[new Date().toISOString().substring(0, 10),],
    to:[new Date().toISOString().substring(0, 10),]
  })
  constructor(
    private reporteService: ReporteService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.estado = this.route.snapshot.paramMap.get('prestamoEstado');
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
        to: this.reporteForm.value.to,
        estado: this.estado
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
