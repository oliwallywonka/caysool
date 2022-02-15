import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup = this.fb.group({
    ci: ['123456'],
    password: ['123456']
  });
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    const { ci, password } = this.loginForm.value;
    console.log(this.loginForm.value);
    this.authService.login( ci, password )
      .subscribe( resp => {

        if (resp){
          this.loading = false;
          this.alertService.alert.fire({
            title:'Login Exitoso',
            icon:'success'
          })
          this.router.navigateByUrl('/admin')
        } else {
          this.loading = false;
          console.log('errir')
          this.alertService.alert.fire({
            title:'Contraseña o usuario incorrectos o usted no esta autorizado',
            icon:'error'
          })
        }
      })
  }
}
