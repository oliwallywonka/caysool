import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert.service';
import { BusinessService } from 'src/app/core/services/business.service';
import { Business } from 'src/app/interfaces/business';

@Component({
  selector: 'app-interes-form',
  templateUrl: './interes-form.component.html',
  styles: [
  ]
})
export class InteresFormComponent implements OnInit {
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
    comission: [''],
    interest: [''],
    cambioDolar: [''],
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
          console.log(business);
          if (this.business){
            this.loginForm.controls['comission'].setValue(business.comission);
            this.loginForm.controls['interest'].setValue(business.interest);
            this.loginForm.controls['cambioDolar'].setValue(business.cambioDolar);
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
    const body = {
      comission: +this.loginForm.value.comission,
      interest: +this.loginForm.value.interest,
      cambioDolar: +this.loginForm.value.cambioDolar,
    }
    this.loading = true;
    this.businessService.postBusines(body).subscribe(
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
