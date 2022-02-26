import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPrestamosByDate({ from , to}):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/reporte/prestamo?from=${from}&to=${to}`,{headers});
  }

  getPagosByDate({ from , to}):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/reporte/pago?from=${from}&to=${to}`,{headers});
  }

  getImpresionesByDate({ from , to}):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/reporte/impresion?from=${from}&to=${to}`,{headers});
  }

  getInventarioByDate({ from , to}):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/reporte/inventario?from=${from}&to=${to}`,{headers});
  }

  getTransaccionByDate({ from , to}):Observable<any>{
    const headers = new HttpHeaders()
      .set('x-access-token',sessionStorage.getItem('token')||'');
    return this.http.get(`${this.baseUrl}/reporte/transaccion?from=${from}&to=${to}`,{headers});
  }

}
