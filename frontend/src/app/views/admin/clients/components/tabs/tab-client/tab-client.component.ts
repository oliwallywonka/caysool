import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-client',
  templateUrl: './tab-client.component.html',
  styles: [
  ]
})
export class TabClientComponent implements OnInit {
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
