import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Picture, PictureResponse } from 'src/app/interfaces/picture';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  @Output() picture:EventEmitter<Picture> = new EventEmitter();
  @Output() pictures:EventEmitter<Picture[]> = new EventEmitter();
  cacheResponse$: Observable<any>;
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPictures(idInventario):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.cacheResponse$ = this.http.get(`${this.baseUrl}/picture/${idInventario}`,{ headers })
  }

  postPicture(body, idInventario:number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.post(`${this.baseUrl}/picture/${idInventario}`,body, { headers });
  }

  deletePicture(id:number):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.delete(`${this.baseUrl}/picture/${id}`, { headers });
  }
}
