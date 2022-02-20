import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  //Alerta global para mostrar mensajes tipo POP en la parte superior derecha
  private _alert= Swal.mixin({
    hideClass:{
      popup:''
    },
    showClass:{
      popup:''
    },
    toast:true,
    title:'Accion Realizada correctamente',
    icon:'success',

    position:'top-end',
    showConfirmButton:false,
    timer:3000
  });

  public get alert(){
    return this._alert;
  }
  constructor( ) { }

  triggerMessage(message = 'Acción realizada correctamente', icon: SweetAlertIcon) {
    this._alert.fire({
      title: message,
      icon,
    })
  }
}
