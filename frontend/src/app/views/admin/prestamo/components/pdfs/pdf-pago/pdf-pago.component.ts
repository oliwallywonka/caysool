import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BusinessService } from 'src/app/core/services/business.service';
import { Business } from 'src/app/interfaces/business';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-pago',
  templateUrl: './pdf-pago.component.html',
  styles: [
  ]
})
export class PdfPagoComponent implements OnInit {
  @Input() pago;
  @Input() prestamo;
  business: Business = this.businessService.businessInformation;
  constructor(
    private businessService: BusinessService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.businessService.business.subscribe(
      business => {
        this.business = business;
      }
    )
  }

  exportToPdf() {
    const pago = {
      // a string or { width: number, height: number }
      pageSize: 'LETTER',

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: 'portrait',

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [ 40, 30, 40, 30 ],
      content: [

      //nit de comercial
        {
          text: ['PRESTAMOS "CAYSOL"\n',
             `NIT:${this.business.nit}\n`,
          'EL ALTO-BOLIVIA\n',
          ],
          fontSize: 12, alignment: 'left'
        },
        {
            text: 'COMPROBANTE DE PAGO\n',
              fontSize: 18, alignment: 'center', bold: true,
        },
        {
          style: 'tableExample',
          table: {
              widths: [80, '*', '*', 60],
                headerRows: 3,
      //FEcha , numero de recibo id
            body: [
              [{text:'FECHA:'},{text: `${this.datePipe.transform(this.pago.createdAt, 'medium')}`,alignment: 'center'}, {text:'N° de recibo'},{text:`${this.pago.id}`}],
      // nombre cliente, ci
              [{text:'NOMBRE:'},{text: `${this.prestamo.client.name}`,alignment: 'center',colSpan: 3},{},{}],
              [{text:'NIT/CI:'}, {text: `${this.prestamo.client.ci}`,alignment: 'center',colSpan: 3},{},{}],
              [{text:'N°'}, {text:'DETALLE',alignment: 'center',bold: true,colSpan: 2},{},{text:'TOTAL',alignment: 'center'}],
        //capital monto prestado
              [{text:'1',alignment: 'center'}, {text:'CAPITAL',alignment: 'left',colSpan: 2},{},{text:`${this.pago.costoPago}`,alignment: 'right'}],
      //interes generado hasta el momento
              [{text:'2',alignment: 'center'}, {text:'INTERES',alignment: 'left',colSpan: 2},{},{text:this.prestamo.costoInteres,alignment: 'right'}],
      //comision administrativa
              [{text:'3',alignment: 'center'}, {text:'COMISION ADMINISTRATIVA',alignment: 'left',colSpan: 2},{},{text:this.pago.costoAdministracion,alignment: 'right'}],
      //cargos generados (derecho de piso)
              [{text:'4',alignment: 'center'}, {text:'CARGOS GENERADOS',alignment: 'left',colSpan: 2},{},{text:this.pago.costoPiso, alignment: 'right'}],
      //saldo restante actual
              [{text:'5',alignment: 'center'}, {text:'SALDO POR COBRAR',alignment: 'left',colSpan: 2},{},{text:(+this.prestamo.costoTotal - +this.prestamo.costoCancelado).toFixed(1),alignment: 'right'}],
      //prenda empeñada
              [{text:'PRENDA',alignment: 'center'}, {text:`${this.prestamo.inventario.map(i => (i.descripcion +' '))}`,alignment: 'left',colSpan: 2},{},{text:'',alignment: 'right'}],
      //total a pagar lo que se cobra interes + el capital +comision adminstrativa
              [{text:'TOTAL A PAGAR',alignment: 'center',colSpan: 3}, {text:'SALDO POR COBRAR',alignment: 'left',colSpan: 2},{},{text:this.pago.costoTotal,alignment: 'right'}],
            ]
          }
        },
        ' \n\n\n',
        {
            text: [
                    'FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO',
            ],
              fontSize: 12, alignment: 'center'
        },
        '\n\n\n\n',

        {
          text: ['PRESTAMOS "CAYSOL"\n',
          `NIT:${this.business.nit}\n`,
          'EL ALTO-BOLIVIA\n',
          ],
          fontSize: 12, alignment: 'left'
        },
        {
            text: 'COMPROBANTE DE PAGO\n',
              fontSize: 18, alignment: 'center', bold: true,
        },
        {
          style: 'tableExample',
          table: {
              widths: [80, '*', '*', 60],
                headerRows: 3,
                body: [
                  [{text:'FECHA:'},{text: `${this.datePipe.transform(this.pago.createdAt, 'medium')}`,alignment: 'center'}, {text:'N° de recibo'},{text:`${this.pago.id}`}],
          // nombre cliente, ci
                  [{text:'NOMBRE:'},{text: `${this.prestamo.client.name}`,alignment: 'center',colSpan: 3},{},{}],
                  [{text:'NIT/CI:'}, {text: `${this.prestamo.client.ci}`,alignment: 'center',colSpan: 3},{},{}],
                  [{text:'N°'}, {text:'DETALLE',alignment: 'center',bold: true,colSpan: 2},{},{text:'TOTAL',alignment: 'center'}],
            //capital monto prestado
                  [{text:'1',alignment: 'center'}, {text:'CAPITAL',alignment: 'left',colSpan: 2},{},{text:`${this.pago.costoPago}`,alignment: 'right'}],
          //interes generado hasta el momento
                  [{text:'2',alignment: 'center'}, {text:'INTERES',alignment: 'left',colSpan: 2},{},{text:this.prestamo.costoInteres,alignment: 'right'}],
          //comision administrativa
                  [{text:'3',alignment: 'center'}, {text:'COMISION ADMINISTRATIVA',alignment: 'left',colSpan: 2},{},{text:this.pago.costoAdministracion,alignment: 'right'}],
          //cargos generados (derecho de piso)
                  [{text:'4',alignment: 'center'}, {text:'CARGOS GENERADOS',alignment: 'left',colSpan: 2},{},{text:this.pago.costoPiso, alignment: 'right'}],
          //saldo restante actual
                  [{text:'5',alignment: 'center'}, {text:'SALDO POR COBRAR',alignment: 'left',colSpan: 2},{},{text:(+this.prestamo.costoTotal - +this.prestamo.costoCancelado).toFixed(1),alignment: 'right'}],
          //prenda empeñada
                  [{text:'PRENDA',alignment: 'center'}, {text:`${this.prestamo.inventario.map(i => (i.descripcion +' '))}`,alignment: 'left',colSpan: 2},{},{text:'',alignment: 'right'}],
          //total a pagar lo que se cobra interes + el capital +comision adminstrativa
                  [{text:'TOTAL A PAGAR',alignment: 'center',colSpan: 3}, {text:'SALDO POR COBRAR',alignment: 'left',colSpan: 2},{},{text:this.pago.costoTotal,alignment: 'right'}],
                ]
          }
        },
        ' \n\n\n',
        {
            text: [
                    'FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO',
            ],
              fontSize: 12, alignment: 'center'
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        }
      }

    };
    pdfMake.createPdf(pago).open();
  }

}
