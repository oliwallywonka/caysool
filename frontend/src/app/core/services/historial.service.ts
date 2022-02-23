import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Historial, HistorialResponse } from 'src/app/interfaces/historial';
import { shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  @Output() historial:EventEmitter<Historial> = new EventEmitter();
  @Output() response:EventEmitter<HistorialResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHistorial({
    page = 1,
    force = false,
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/audit?page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }
}
