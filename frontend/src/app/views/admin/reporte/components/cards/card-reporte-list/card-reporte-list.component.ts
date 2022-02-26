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
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToAnotherPage(pageName: string) {
    this.router.navigate([`admin/reportes/${pageName}`]);
  }

}
