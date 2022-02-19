import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Prestamo, PrestamoResponse } from 'src/app/interfaces/prestamo';
import { shareReplay } from 'rxjs/operators';
import { Client } from 'src/app/interfaces/client';
import { Inventario } from 'src/app/interfaces/inventario';



@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  @Output() prestamo:EventEmitter<Prestamo> = new EventEmitter();
  @Output() client:EventEmitter<Client> = new EventEmitter();
  @Output() inventario:EventEmitter<Inventario[]> = new EventEmitter();
  @Output() response:EventEmitter<PrestamoResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPrestamos({
    clientCi = '',
    estadoPrestamo = '',
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/prestamo?clientCi=${clientCi}&estadoPrestamo=${estadoPrestamo}&page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  getPrestamoByClientId(clientId: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/prestamo/client/${clientId}`,{headers});
  }

  getPrestamoById(id: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/prestamo/${id}`,{headers});
  }

  postPrestamo(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/prestamo`,body,{headers});
  }

  patchPrestamo(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/prestamo/${id}`,body,{headers});
  }
}
