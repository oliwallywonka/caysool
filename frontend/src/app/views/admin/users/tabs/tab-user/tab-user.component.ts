import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-user',
  templateUrl: './tab-user.component.html',
  styleUrls: []
})
export class TabUserComponent implements OnInit {
  openTab = 3;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
