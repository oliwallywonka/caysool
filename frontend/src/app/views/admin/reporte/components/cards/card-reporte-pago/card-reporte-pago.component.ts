import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-card-reporte-pago',
  templateUrl: './card-reporte-pago.component.html',
  styleUrls: ['./card-reporte-pago.component.css']
})
export class CardReportePagoComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goToBackPage() {
    this.location.back();
  }

}
