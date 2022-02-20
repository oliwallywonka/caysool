import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-interes-form',
  templateUrl: './interes-form.component.html',
  styles: [
  ]
})
export class InteresFormComponent implements OnInit {
  loading: boolean = false;
  informationForm: FormGroup = this.fb.group({
    interest: [''],
    comission: [''],
    cambioDolar: [''],
    direction: ['']
  });
  constructor(
    private fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
  }

  save() {

  }

}
