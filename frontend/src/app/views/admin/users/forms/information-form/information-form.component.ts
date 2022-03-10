import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { BusinessService } from 'src/app/core/services/business.service';
import { Business } from 'src/app/interfaces/business';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styles: [
  ]
})
export class InformationFormComponent implements OnInit, OnDestroy {
  sub: Subscription;
  business: Business;
  loading: boolean = false;
  errorMessages = {
    required: 'El campo es obligatorio',
    minLength: 'El campo es muy corto',
    maxLenght: 'El campo es muy largo',
    email: 'El email introducido no es valido',
  };

  loginForm: FormGroup = this.fb.group({
    name: ['',
      [
        RxwebValidators.required({ message: this.errorMessages.required }),
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ]
    ],
    nit: ['',
      [
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    phone: ['',
      [
        RxwebValidators.maxLength({
          value: 30,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ],
    direction: ['',
      [
        RxwebValidators.maxLength({
          value: 200,
          message: this.errorMessages.maxLenght,
        }),
      ],
    ]
  });
  constructor(
    private businessService: BusinessService,
    private alertService: AlertService,
    private  fb: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.getBusiness();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getBusiness() {
    this.sub.add(
      this.businessService.getBusiness().subscribe(
        business =>{
          this.business = business;
          if (this.business){
            this.loginForm.controls['name'].setValue(business.name);
            this.loginForm.controls['nit'].setValue(business.nit);
            this.loginForm.controls['phone'].setValue(business.phone);
            this.loginForm.controls['direction'].setValue(business.direction);
            this.businessService.business.emit(this.business);
            this.businessService.businessInformation = this.business;
          }
        },
        error =>{
          this.alertService.triggerMessage(error.error.message, 'error');
        }
      )
    );
  }


  save() {
    console.log(this.loginForm.value);
    this.loading = true;
    this.businessService.postBusines(this.loginForm.value).subscribe(
      response => {
        this.loading = false;
        this.alertService.triggerMessage(response.message, 'success');
        this.getBusiness();
      },
      error => {
        this.alertService.triggerMessage(error.error.mensage, 'error');
        this.loading = false;
      }
    )
  }

}
