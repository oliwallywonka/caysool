import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Prestamo, PrestamoResponse } from 'src/app/interfaces/prestamo';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  @Output() prestamo:EventEmitter<Prestamo> = new EventEmitter();
  @Output() response:EventEmitter<PrestamoResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPrestamos({
    ci = '',
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/prestamos?ci=${ci}&page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  postPrestamo(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/prestamos`,body,{headers});
  }

  patchPrestamo(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/prestamos/${id}`,body,{headers});
  }
}
