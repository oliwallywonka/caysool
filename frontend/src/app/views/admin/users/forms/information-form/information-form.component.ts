import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styles: [
  ]
})
export class InformationFormComponent implements OnInit {
  loading: boolean = false;
  informationForm: FormGroup = this.fb.group({
    name: [''],
    nit: [''],
    phone: [''],
    direction: ['']
  });
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  sendForm() {

  }

}
