import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Inventario, InventarioResponse } from 'src/app/interfaces/inventario';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  @Output() inventario:EventEmitter<Inventario> = new EventEmitter();
  @Output() response:EventEmitter<InventarioResponse> = new EventEmitter();
  @Output() response2:EventEmitter<InventarioResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  cacheResponse2$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getInventario({
    clientCi = '',
    page = 1,
    force = false,
    estadoInv = ''
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/inventario?clientCi=${clientCi}&estadoInv=${estadoInv}&page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  getInventarioByEstado({
    page = 1,
    force = false,
    estadoInv = 'COMPRADO'
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse2$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/inventario/comprado?page=${page}&estadoInv=${estadoInv}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse2$;
  }

  getInventarioById(id: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.cacheResponse$ = this.http.get(`${this.baseUrl}/inventario/${id}`,{headers});

  }

  getInventarioByClientId(clientId: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.cacheResponse$ = this.http.get(`${this.baseUrl}/inventario/client/${clientId}`,{headers});

  }


  postInventario(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/inventario`,body,{headers});
  }

  patchInventario(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/inventario/${id}`,body,{headers});
  }

  ventaInventario(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/inventario/venta/${id}`,body,{headers});
  }
}
