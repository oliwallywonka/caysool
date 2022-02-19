import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Amortizacion } from 'src/app/interfaces/amortizacion';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AmortizacionService {

  @Output() amortizacion:EventEmitter<Amortizacion> = new EventEmitter();
  @Output() amortizacions:EventEmitter<Amortizacion[]> = new EventEmitter();
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getByPrestamoId(prestamoId: number):Observable<any>{
    const headers = new HttpHeaders().set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/amortizacion/prestamo/${prestamoId}`,{ headers })
  }

  postAmortizacion(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/amortizacion`,body, { headers });
  }
}
