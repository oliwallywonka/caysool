import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TransaccionMoneda, TransaccionMonedaResponse } from 'src/app/interfaces/transaccionMoneda';
import { shareReplay } from 'rxjs/operators';
import { Client } from 'src/app/interfaces/client';
import { Inventario } from 'src/app/interfaces/inventario';



@Injectable({
  providedIn: 'root'
})
export class TransaccionMonedaService {

  @Output() transaccionMoneda:EventEmitter<TransaccionMoneda> = new EventEmitter();
  @Output() client:EventEmitter<Client> = new EventEmitter();
  @Output() inventario:EventEmitter<Inventario[]> = new EventEmitter();
  @Output() response:EventEmitter<TransaccionMonedaResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getTransaccionMonedas({
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/transaccion-moneda?page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  /*getTransaccionMonedaById(id: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/transaccionMoneda/${id}`,{headers});
  }*/

  postTransaccionMoneda(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/transaccion-moneda`,body,{headers});
  }

  /*patchTransaccionMoneda(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/transaccionMoneda/${id}`,body,{headers});
  }*/
}
