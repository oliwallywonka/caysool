import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-inventario',
  templateUrl: './tab-inventario.component.html',
  styleUrls: []
})
export class TabInventarioComponent implements OnInit {
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
