import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent implements OnInit {

  @Input()
  btnFunction: Function = () => {};

  @Input()
  loading = false;

  @Input()
  btnType = 'button';

  @Input()
  btnText = 'Ingresar';

  @Input()
  btnTheme = 'green';

  theme = `bg-${ this.btnTheme }-400 active:bg-${ this.btnTheme }-500`;

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked (): void {
    this.btnFunction();
  }

}
