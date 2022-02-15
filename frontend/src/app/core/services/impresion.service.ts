import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Impresion, ImpresionResponse } from 'src/app/interfaces/impresion';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ImpresionService {

  @Output() impresion:EventEmitter<Impresion> = new EventEmitter();
  @Output() response:EventEmitter<ImpresionResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getImpresiones({
    idPrestamo,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/impresion-doc/${idPrestamo}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  postImpresion(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/impresion-doc`,body,{headers});
  }

  patchImpresion(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/impresion-doc/${id}`,body,{headers});
  }
}
