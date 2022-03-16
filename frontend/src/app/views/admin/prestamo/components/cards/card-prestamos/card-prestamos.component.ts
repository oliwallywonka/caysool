import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { PrestamoService } from 'src/app/core/services/prestamo.service';
import { Prestamo, PrestamoResponse } from 'src/app/interfaces/prestamo';

@Component({
  selector: 'app-card-prestamos',
  templateUrl: './card-prestamos.component.html',
  styles: [
  ]
})
export class CardPrestamosComponent implements OnInit, OnDestroy {

  @Input()
  estado: string = '';
  sub: Subscription;
  loading: boolean = false;
  response: PrestamoResponse;
  inventarioLengh = 0;
  ciForm: FormGroup = this.fb.group({
    ci: [''],
  });
  constructor(
    private prestamoService: PrestamoService,
    private alertService: AlertService,
    private router: Router,
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getPrestamos(true);
    this.subscribePrestamos();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  limitInventory(){
    for(const prestamo of this.response.items) {
      if (prestamo.inventario.length > 3){
        prestamo.inventario.length = 3;
      }
    }
  }

  getPrestamos(force = false) {
    this.prestamoService.getPrestamos({ force, estadoPrestamo: this.estado}).subscribe(
      (response) => {
        this.response = response;
        this.limitInventory();
        this.loading = false;
      }
    )
  }

  subscribePrestamos() {
    this.sub.add(
      this.prestamoService.response.subscribe(
        (response) => {
          if (response.items.length > 0) {
            this.response = response;
            this.limitInventory();
            this.loading = false;
          }
        }
      )
    );
  }

  search(event) {
    this.loading = true;
    this.sub.add(
      this.prestamoService
        .getPrestamos({
          clientCi: this.ciForm.value.ci,
          force: true,
          estadoPrestamo: this.ciForm.value.ci ? '' : this.estado,
        })
        .subscribe(
          (response) => {
            this.loading = false;
            if (response.items.length === 0) {
              this.alertService.alert.fire({
                title: 'No hay datos relacionados con la busqueda',
                icon: 'error',
              });
            } else {
              this.response = response;
              this.limitInventory();
            }
        })
    );
  }

  getOnPageResponse(page: number) {
    this.response = null;
    this.prestamoService
      .getPrestamos({
        clientCi: this.ciForm.value.ci,
        force: true,
        estadoPrestamo: this.ciForm.value.ci ? '' : this.estado,
        page
      })
      .subscribe((response) => {
        this.prestamoService.response.emit(response);
      });
  }

  goToPrestamoInformation(prestamo: Prestamo) {
    this.prestamoService.prestamo.emit(prestamo);
    this.router.navigate(['/admin/prestamos', prestamo.id]);
  }
}
