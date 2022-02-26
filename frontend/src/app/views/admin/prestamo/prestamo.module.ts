import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamoRoutingModule } from './prestamo-routing.module';
import { PrestamoComponent } from './prestamo.component';
import { TabPrestamoComponent } from './components/tabs/tab-prestamo/tab-prestamo.component';
import { CardPrestamosComponent } from './components/cards/card-prestamos/card-prestamos.component';
import { CardPrestamoDetalleComponent } from './components/cards/card-prestamo-detalle/card-prestamo-detalle.component';
import { ModalPagoComponent } from './components/modals/modal-pago/modal-pago.component';
import { ModalAmortiguarComponent } from './components/modals/modal-amortiguar/modal-amortiguar.component';
import { ModalImpresionReciboComponent } from './components/modals/modal-impresion-recibo/modal-impresion-recibo.component';
import { SharedModule } from '../../shared/shared.module';
import { PdfPagoComponent } from './components/pdfs/pdf-pago/pdf-pago.component';
import { PdfDocumentoComponent } from './components/pdfs/pdf-documento/pdf-documento.component';
import { ModalImpresionContratoComponent } from './components/modals/modal-impresion-contrato/modal-impresion-contrato.component';
import { ModalEditPrestamoComponent } from './components/modals/modal-edit-prestamo/modal-edit-prestamo.component';


@NgModule({
  declarations: [PrestamoComponent, TabPrestamoComponent, CardPrestamosComponent, CardPrestamoDetalleComponent, ModalPagoComponent, ModalAmortiguarComponent, ModalImpresionReciboComponent, PdfPagoComponent, PdfDocumentoComponent, ModalImpresionContratoComponent, ModalEditPrestamoComponent],
  imports: [
    PrestamoRoutingModule,
    SharedModule
  ]
})
export class PrestamoModule { }
