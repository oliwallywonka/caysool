import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User, UserResponse } from 'src/app/interfaces/auth';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user:EventEmitter<User> = new EventEmitter();
  @Output() users:EventEmitter<User[]> = new EventEmitter();
  @Output() response:EventEmitter<UserResponse> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getUsers({
    ci = '',
    page = 1,
    force = false
  }):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    if (force || !this.cacheResponse$) {
      return this.cacheResponse$ = this.http
        .get(`${this.baseUrl}/users?ci=${ci}&page=${page}`,{headers})
        .pipe( shareReplay(1));
    }
    return this.cacheResponse$;
  }

  postUser(body):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/users`,body,{headers});
  }

  patchUser(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/users/${id}`,body,{headers});
  }

  patchImageUser(body,id):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.patch(`${this.baseUrl}/users/picture/${id}`,body,{headers});
  }

}
