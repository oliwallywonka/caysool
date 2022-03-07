import { Component, Input, OnInit } from '@angular/core';
import { TransaccionMoneda } from 'src/app/interfaces/transaccionMoneda';
import { BusinessService } from 'src/app/core/services/business.service';
import { logoCaysool } from 'src/app/helpers/base64Images';
import { DatePipe } from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-reporte-transaccion',
  templateUrl: './pdf-reporte-transaccion.component.html',
  styles: [],
})
export class PdfReporteTransaccionComponent implements OnInit {
  @Input()
  transacciones: TransaccionMoneda[] = [];
  @Input()
  from: string;
  @Input()
  to: string;

  totalDolares: number;
  totalCompras: number;
  totalVentas: number;
  totalDiferencia: number;

  business = this.businessService.businessInformation;
  constructor(
    private businessService: BusinessService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  subscribeBusiness() {
    this.businessService.business.subscribe(
      (business) => {
        if (business) {
          this.business = business;
        }
      }
    );
  }

  exportToPdf() {
    let dolaresDisponibles = 0;
    let totalCompras = 0;
    let totalVentas = 0;
    let totalDiferencia = 0;
    const bodyDolar: any = [
      [
        { text: "Fecha", alignment: "center", style: "tableHeader" },
        { text: "Operacion", style: "tableHeader" },
        { text: "Cantidad en dolares", style: "tableHeader" },
        { text: "Precio dolar", style: "tableHeader" },
        { text: "Cantidad total", style: "tableHeader" },
        { text: "Precio dolar oficial", style: "tableHeader" },
        { text: "Cantidad real", style: "tableHeader" },
        { text: "Diferencia", style: "tableHeader" },
      ],
    ];
    for (const transaccion of this.transacciones) {
      if (transaccion.operacion === 'VENTA') {
        dolaresDisponibles -= +transaccion.cantidad;
        totalVentas += +transaccion.cantidad;
      }else {
        dolaresDisponibles += +transaccion.cantidad;
        totalCompras += +transaccion.cantidad;
      }
      totalDiferencia += +transaccion.diferencia;
      bodyDolar.push(
        [
          { text: `${this.datePipe.transform(transaccion.createdAt, 'medium')}`, alignment: "center", fontSize: 10 },
          { text: `${transaccion.operacion}`, alignment: "center", fontSize: 10 },
          { text: `$. ${transaccion.cantidad}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${transaccion.tipoCambio}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${(transaccion.cantidad*transaccion.tipoCambio).toFixed(1)}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${transaccion.tipoCambioOficial}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${(transaccion.cantidad*transaccion.tipoCambioOficial).toFixed(1)}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${transaccion.diferencia}`, alignment: "center", fontSize: 10 },
        ],
      );
    }
    const reporte = {
      // a string or { width: number, height: number }
      pageSize: "LETTER",

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: "landscape",

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
              image: logoCaysool
            },

            [
              // REPORTE DE PRESTAMOS
              {
                text: 'Reporte de "COMPRA VENTA DE DOLARES"',

                color: "#333333",
                width: 800,
                fontSize: 20,
                bold: true,
                alignment: "center",
                margin: [0, 0, 0, 0],
              },
            ],
          ],
        },
        "\n",
        {
          columns: [
            {
              width: 250,
              text: `Cambio Oficial del Dolar ${this.business.cambioDolar}`,
              bold: true,
              fontSize: 14,
            },
            {
              columns: [
                {
                  width: 250,
                  text: `Compra venta desde ${this.datePipe.transform(this.from, 'mediumDate')}`,
                  bold: false,
                  fontSize: 12,
                },
                { width: "*", text: `hasta ${this.datePipe.transform(this.to, 'mediumDate')}` },
              ],
            },
          ],
        },

        {
          style: "tableExample",
          table: {
            widths: [60, 60, 120, "*", "*", "*", "*", "*"],
            headerRows: 1,
            body: bodyDolar
          },
          layout: "lightHorizontalLines",
        },
        //suma de la diferencia
        {
          table: {
            widths: [60, 60, 120, "*", "*", "*", "*", "*"],
            headerRows: 1,
            body: [
              [
                { text: "Total", alignment: "center", style: "tableHeader" },
                "",
                "",
                "",
                "",
                "",
                { text: "", alignment: "center" },
                { text: `Bol. ${totalDiferencia.toFixed(1)}`, alignment: "center", style: "tableHeader" },
              ]
            ]
          },

          layout: "noBorders",
        },

        {
          style: "tableExample",
          table: {
            widths: [300, 130, 150],
            headerRows: 1,
            body: [
              [
                {
                  text: "Total de Dolares disponibles",
                  fontSize: 13,
                  style: "tableHeader",
                },
                { text: `$. ${dolaresDisponibles}`, alignment: "right", fontSize: 13 },
                { text: "", alignment: "right", fontSize: 12 },
              ],
              [
                { text: "Total compras", fontSize: 13, style: "tableHeader" },
                { text: `$. ${totalCompras}`, alignment: "right", fontSize: 13 },
                { text: "", alignment: "right", fontSize: 12 },
              ],
              [
                { text: "Total ventas", fontSize: 13, style: "tableHeader" },
                { text: `$. ${totalVentas}`, alignment: "right", fontSize: 13 },
                { text: "", alignment: "right", fontSize: 12 },
              ],
            ],
          },
          layout: "noBorders",
        },
      ],
      styles: {
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: "black",
        },
        tableExample: {
          margin: [0, 10, 0, 5],
        },
      },
    };
    pdfMake.createPdf(reporte).open();
  }
}
