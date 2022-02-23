import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


import { AuthResponse, User } from '../../interfaces/auth';
import { BusinessService } from './business.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  public get user() {
    return { ...this._user };
  }

  @Output() user$:EventEmitter<User> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private businessService: BusinessService
  ) { }

  login( ci: string, password: string ) {
    const url  = `${ this.baseUrl }/auth/login`;
    const body = { ci, password };
    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.token ) {
            sessionStorage.setItem('token', resp.token! );
            this._user = resp.user;
            this.businessService.getBusiness().subscribe(
              resp => {
                this.businessService.businessInformation = resp;
              }
            );
          }
        }),
        map( resp => {
          sessionStorage.setItem('token', resp.token! );
          this._user = resp.user;
          return resp
        }),
        catchError( err => of(err.error.msg) )
      );
  }

  validateToken(): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/refresh`;
    const headers = new HttpHeaders()
      .set('x-access-token', sessionStorage.getItem('token') || '' );
    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        tap( resp => {
          if ( resp.token ) {
            this.businessService.getBusiness().subscribe(
              resp => {
                this.businessService.businessInformation = resp;
                this.businessService.business.emit(resp);
              }
            );
          }
        }),
        map( resp => {
          sessionStorage.setItem('token', resp.token! );
          this._user = resp.user;
          if(resp.status === 200){
            return true
          }else{
            return false
          }
        }),
        catchError( err => {
          console.log(err)
          return of(false)
        } )
      );
  }

  logout() {
    sessionStorage.clear();
  }


}
