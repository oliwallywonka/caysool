import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-prestamo',
  templateUrl: './tab-prestamo.component.html',
  styles: [
  ]
})
export class TabPrestamoComponent implements OnInit {
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
