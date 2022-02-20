import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Business } from 'src/app/interfaces/business';



@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  @Output() business:EventEmitter<Business> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getBusiness():Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.cacheResponse$ = this.http.get(`${this.baseUrl}/business`,{ headers })
  }

  postBusines(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/business`,body, { headers });
  }

}
