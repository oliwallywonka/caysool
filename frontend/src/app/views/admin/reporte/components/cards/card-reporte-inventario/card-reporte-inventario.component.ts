import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-card-reporte-inventario',
  templateUrl: './card-reporte-inventario.component.html',
  styles: [
  ]
})
export class CardReporteInventarioComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }
  goToBackPage() {
    this.location.back();
  }

}
