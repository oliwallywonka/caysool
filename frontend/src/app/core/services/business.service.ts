import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Business } from 'src/app/interfaces/business';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private _business!: Business;

  public get businessInformation() {
    return { ...this._business };
  }

  public set businessInformation(business) {
    this._business = {...this._business, ...business};
  }

  @Output() business:EventEmitter<Business> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getBusiness():Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/business`,{ headers });
  }

  postBusines(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/business`,body, { headers });
  }

}
