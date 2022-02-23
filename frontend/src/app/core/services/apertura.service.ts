import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Apertura, AperturaResponse } from 'src/app/interfaces/apertura';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AperturaService {

  @Output() apertura:EventEmitter<Apertura> = new EventEmitter();
  @Output() response:EventEmitter<AperturaResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAperturas({
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/apertura?page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  getAperturaById(id: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.cacheResponse$ = this.http.get(`${this.baseUrl}/apertura/${id}`,{ headers });

  }

  postApertura(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/apertura`,body,{ headers });
  }

  cerrarApertura(id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.delete(`${this.baseUrl}/apertura/cerrar/${id}`, { headers });
  }
}

