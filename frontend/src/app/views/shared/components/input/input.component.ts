import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input()
  inputLabel: string = 'Label';
  @Input()
  inputPlaceholder: string = 'Placeholder...';
  @Input()
  inputFormName: string = 'input';
  @Input()
  inputType: string = 'Text';
  @Input()
  inputForm: FormGroup;

  // CONTROL VALUE ACCESSOR INTERFACE
  // Nos conecta nuestro custom input con forms, reactive forms etc
  @Input()
  value: string = '';
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


}
