import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Prestamo } from 'src/app/interfaces/prestamo';
import { logoCaysool } from 'src/app/helpers/base64Images';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-reporte-prestamo',
  templateUrl: './pdf-reporte-prestamo.component.html',
  styles: [],
})
export class PdfReportePrestamoComponent implements OnInit {
  @Input()
  prestamos: Prestamo[] = [];
  @Input()
  from: string;
  @Input()
  to: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    const prestamoBody: any = [
      [
        { text: 'Fecha de Prestamo', style: 'tableHeader' },
        { text: 'Fecha de vencimiento', style: 'tableHeader' },
        { text: 'Cliente', style: 'tableHeader' },
        { text: 'Prenda', style: 'tableHeader' },
        { text: 'Monto de prestamo', style: 'tableHeader' },
        { text: 'Intereses a pagar', style: 'tableHeader' },
        { text: 'Total', style: 'tableHeader' },
      ],
    ];
    const prestamoValues = {
      totalInventario : 0,
      totalMontoPrestamo : 0,
      totalInteres: 0,
      totalCosto: 0
    };
    for (const prestamo of this.prestamos) {
      prestamoValues.totalInventario += +prestamo.inventario.length;
      prestamoValues.totalMontoPrestamo += +prestamo.costoPrestamo;
      prestamoValues.totalInteres += +prestamo.costoInteres;
      prestamoValues.totalCosto += +prestamo.costoTotal;
      prestamoBody.push(
        [
          `${this.datePipe.transform(prestamo.fechaInicio, 'shortDate')}`,
          `${this.datePipe.transform(prestamo.fechaFinal, 'shortDate')}`,
          `${prestamo.client.name}`,
          `${prestamo.inventario.map(i => i.descripcion + ' ')}`,
          `Bol. ${prestamo.costoPrestamo}`,
          `Bol. ${prestamo.costoInteres}`,
          { text: `Bol. ${prestamo.costoTotal}`, alignment: 'center' },
          { text: 'x', alignment: 'center' },
        ]
      )
    }



    const reporte = {
      // a string or { width: number, height: number }
      pageSize: 'LETTER',

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: 'landscape',

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [20, 15, 15, 20],
      content: [
        //FECHA Y HORA ACTUAL AL IMPRIMIR
        {
          text: `${this.datePipe.transform(Date.now(), 'medium')}`,
          fontSize: 8,
        },
        {
          columns: [
            {
              width: 90,
              height: 40,
              fontSize: 9,
              margin: [22, 10, 0, 0],
              image: logoCaysool,
            },
            [
              // REPORTE DE PRESTAMOS
              {
                text: `Reporte de 'PRESTAMOS REALIZADOS'`,

                color: '#333333',
                width: 800,
                fontSize: 20,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
            ],
          ],
        },
        '\n',
        {
          columns: [
            { width: 250, text: `Prestamos realizados Desde ${this.datePipe.transform(this.from, 'mediumDate')}` },
            { width: '*', text: `Hasta ${this.datePipe.transform(this.to, 'mediumDate')}` },
          ],
        },

        {
          style: 'tableExample',
          table: {
            widths: [60, 60, 250, 100, 60, 42, 40, 40],
            headerRows: 1,
            body: prestamoBody,
          },
          layout: 'lightHorizontalLines',
        },
        {
          style: 'tableExample',
          table: {
            widths: [60, 60, 250, 135, 60, 55, 60],
            headerRows: 1,
            body: [
              [
                { text: 'Total', fontSize: 14, style: 'tableHeader' },
                {},
                {},
                { text: `${prestamoValues.totalInventario}`, alignment: 'center', style: 'tableHeader' },
                { text: `Bol. ${prestamoValues.totalMontoPrestamo}`, alignment: 'center', style: 'tableHeader' },
                { text: `Bol. ${prestamoValues.totalInteres}`, style: 'tableHeader' },
                { text: `Bol. ${prestamoValues.totalCosto}`, alignment: 'center', style: 'tableHeader' },
              ],
            ],
          },
          layout: 'noBorders',
        },
      ],
      styles: {
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black',
        },
        tableExample: {
          margin: [0, 10, 0, 5],
        },
      },
    };
    pdfMake.createPdf(reporte).open();
  }
}
