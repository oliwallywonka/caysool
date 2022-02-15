import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Servicio global para activar un modal mediante su nombre y estado.
export class ModalService {

  private _modal={
    visible:false,
    modalName:'',
  };

  public get modal(){
    return this._modal;
  }

  public set modal(m){
    this._modal = m;
  }

  public closeModal(){
    this._modal.visible=false;
    this._modal.modalName='';
  }

  constructor( ) { }
}
