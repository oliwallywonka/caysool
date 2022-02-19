import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Client, ClientResponse } from 'src/app/interfaces/client';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  @Output() client:EventEmitter<Client> = new EventEmitter();
  @Output() response:EventEmitter<ClientResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getClients({
    ci = '',
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/clients?ci=${ci}&page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  getClient(id: number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/clients/${id}`,{headers})
  }

  postClient(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/clients`,body,{headers});
  }

  patchClient(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/clients/${id}`,body,{headers});
  }
}
