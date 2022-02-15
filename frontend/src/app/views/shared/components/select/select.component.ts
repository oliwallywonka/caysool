import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => SelectComponent)
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input()
  inputLabel: string = 'Label';
  @Input()
  inputFormName: string = 'input';
  @Input()
  inputForm: FormGroup;
  @Input()
  options = [{
    value: false,
    name: ''
  }];
  @Output()
  selectEvent = new EventEmitter();

  // CONTROL VALUE ACCESSOR INTERFACE
  // Nos conecta nuestro custom input con forms, reactive forms etc
  @Input()
  value: any;
  isDisabled: boolean;
  onChange = (_:any) => {}
  onTouch = () => {}
  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }
  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  constructor() { }

  ngOnInit(): void {
  }

  clickSelect(value) {
    this.selectEvent.emit(value);
  }

}
