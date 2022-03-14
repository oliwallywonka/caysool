import { Component, Input, OnInit } from "@angular/core";
import { logoCaysool } from "src/app/helpers/base64Images";
import { DatePipe } from "@angular/common";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Movimiento } from "src/app/interfaces/movimiento";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: "app-pdf-reporte-ingreso-salida",
  templateUrl: "./pdf-reporte-ingreso-salida.component.html",
  styles: [],
})
export class PdfReporteIngresoSalidaComponent implements OnInit {
  @Input() movimientos: Movimiento[];
  @Input()
  from: string;
  @Input()
  to: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    let totalGastos = 0;
    let totalIngresos = 0;
    const bodyMovimiento: any = [
      [
        {
          text: "Fecha de movimiento",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Ingreso/Gasto",
          alignment: "center",
          style: "tableHeader",
        },
        { text: "Concepto", alignment: "center", style: "tableHeader" },
        {
          text: "Cantidad en Bol.",
          style: "tableHeader",
          alignment: "center",
        },
      ]
    ];

    for (let movimiento of this.movimientos) {
      if (movimiento.tipo) {
        totalIngresos += +movimiento.cantidad;
      } else {
        totalGastos += +movimiento.cantidad;
      }
      bodyMovimiento.push(
        [
          { text: `${this.datePipe.transform(movimiento.createdAt, 'medium')}`, fontSize: 9, alignment: "center" },
          { text: `${movimiento.tipo?'INGRESO':'GASTO'}`, fontSize: 9, alignment: "center" },
          { text: `${movimiento.concepto}`, fontSize: 9, alignment: "center" },
          { text: `Bol. ${movimiento.cantidad}`, fontSize: 9, alignment: "center" },
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
          text: `${this.datePipe.transform(Date.now(), "medium")}`,
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
                text: 'Reporte de "Ingresos y Salidas"',

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
              text: `Apertura y cierre ${this.datePipe.transform(
                this.from,
                "mediumDate"
              )}`,
              bold: false,
              fontSize: 12,
            },
            { width: "*", text: `Hasta ${this.datePipe.transform(this.to, "mediumDate")}` },
          ],
        },

        {
          style: "tableExample",
          table: {
            widths: [70, 100, 280, 250],
            headerRows: 1,
            body: bodyMovimiento,
          },
          layout: "lightHorizontalLines",
        },
        {
          style: "tableExample",
          table: {
            widths: [150, 200, 30],
            headerRows: 1,
            body: [
              [
                { text: "Total ingresos", fontSize: 11, style: "tableHeader" },
                { text: `${totalIngresos.toFixed(1)}`, alignment: "right", fontSize: 11 },
                { text: "Bol.", alignment: "left", fontSize: 10 },
              ],
              [
                { text: "Total gastos", fontSize: 11, style: "tableHeader" },
                { text: `${totalGastos.toFixed(1)}`, alignment: "right", fontSize: 11 },
                { text: "Bol.", alignment: "left", fontSize: 10 },
              ],
              [
                { text: "Total en caja", fontSize: 11, style: "tableHeader" },
                { text: `${(totalIngresos - totalGastos).toFixed(1)}`, alignment: "right", fontSize: 11 },
                { text: "Bol.", alignment: "left", fontSize: 10 },
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
