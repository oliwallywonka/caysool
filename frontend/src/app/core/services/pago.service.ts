import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Pago } from 'src/app/interfaces/pago';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PagoService {

  @Output() pago:EventEmitter<Pago> = new EventEmitter();
  @Output() pagos:EventEmitter<Pago[]> = new EventEmitter();
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getByPrestamoId(prestamoId: number):Observable<any>{
    const headers = new HttpHeaders().set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/pago/prestamo/${prestamoId}`,{ headers })
  }

  getById(id: number):Observable<any>{
    const headers = new HttpHeaders().set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/pago/${id}`,{ headers })
  }

  postPago(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/pago`,body, { headers });
  }
}
