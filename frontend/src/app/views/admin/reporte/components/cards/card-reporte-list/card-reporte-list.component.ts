import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-reporte-list',
  templateUrl: './card-reporte-list.component.html',
  styles: [
  ]
})
export class CardReporteListComponent implements OnInit {

  reportePages: 'pagos' | 'inventario' | 'impresiones' | 'transacciones';
  estado: string;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToAnotherPage(pageName: string) {
    this.router.navigate([`admin/reportes/${pageName}`, ]);
  }

  goToAnotherPageEstado(pageName: string, estado: string) {
    this.router.navigate([`admin/reportes/${pageName}`, estado]);
  }

  setEstado(estado='') {
    this.estado = estado;
  }

}
