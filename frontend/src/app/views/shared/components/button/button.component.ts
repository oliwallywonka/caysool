import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent implements OnInit {

  @Input()
  loading = false;

  @Input()
  clickButton: any;
  constructor() { }

  ngOnInit(): void {
  }

  fn() {
    this.clickButton();
  }

}
