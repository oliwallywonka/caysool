import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReporteService } from 'src/app/core/services/reporte.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup } from '@angular/forms';
import { Inventario } from 'src/app/interfaces/inventario';
@Component({
  selector: 'app-card-reporte-inventario',
  templateUrl: './card-reporte-inventario.component.html',
  styles: [
  ]
})
export class CardReporteInventarioComponent implements OnInit , OnDestroy {
  sub: Subscription;
  loading = false;
  inventarios: Inventario[] = [];
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
    this.getInventarios();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInventarios() {
    this.loading = true;
    this.sub.add(
      this.reporteService.getInventarioByDate({
        from: this.reporteForm.value.from,
        to: this.reporteForm.value.to
      }).subscribe(
        (inventarios) => {
          if (inventarios) {
            this.inventarios = inventarios;
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
    this.getInventarios();
  }

}
