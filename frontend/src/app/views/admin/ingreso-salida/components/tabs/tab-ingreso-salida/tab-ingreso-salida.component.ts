import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ingreso-salida',
  templateUrl: './tab-ingreso-salida.component.html',
  styles: [
  ]
})
export class TabIngresoSalidaComponent implements OnInit {
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
