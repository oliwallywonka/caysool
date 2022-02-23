import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Movimiento } from 'src/app/interfaces/movimiento';



@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  @Output() movimiento:EventEmitter<Movimiento> = new EventEmitter();
  @Output() movimientos:EventEmitter<Movimiento[]> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getMovimientosByAperturaId( aperturaId: number ):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
     return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/movimiento/apertura/${aperturaId}`,{ headers })
  }

  postMovimiento(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/movimiento`,body,{ headers });
  }

}
