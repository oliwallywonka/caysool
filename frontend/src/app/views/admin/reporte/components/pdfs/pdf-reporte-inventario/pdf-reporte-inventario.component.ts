import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { logoCaysool } from "src/app/helpers/base64Images";
import { Prestamo } from "src/app/interfaces/prestamo";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Inventario } from "src/app/interfaces/inventario";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: "app-pdf-reporte-inventario",
  templateUrl: "./pdf-reporte-inventario.component.html",
  styles: [],
})
export class PdfReporteInventarioComponent implements OnInit {
  @Input() inventario: Inventario[];
  @Input()
  from: string;
  @Input()
  to: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    let totalInventario = 0;
    let totalCostoCompras = 0;
    let totalCostoVenta = 0;
    let totalDiferencia = 0;

    const bodyInventario: any = [
      [
        {
          text: "Fecha de compra",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Fecha de venta",
          alignment: "center",
          style: "tableHeader",
        },
        { text: "Prenda", alignment: "center", style: "tableHeader" },
        {
          text: "Costo de compra",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Costo de venta",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Diferencia",
          alignment: "center",
          style: "tableHeader",
        },
      ],
    ];

    for( const i of this.inventario) {
      totalInventario = this.inventario.length;
      totalCostoCompras += +i.costoCompra + +i.costoPrestamo;
      totalCostoVenta += +i.precioVenta;
      totalDiferencia += +i.precioVenta - (+i.costoCompra + +i.costoPrestamo);

      bodyInventario.push([
        { text: `${this.datePipe.transform(i.fechaCompra? i.fechaCompra: i.createdAt, 'mediumDate')}`, alignment: "center", fontSize: 9 },
        { text: `${this.datePipe.transform(i.fechaVenta, 'mediumDate')}`, alignment: "center", fontSize: 9 },
        { text: `${i.descripcion}`, alignment: "center", fontSize: 9 },
        { text: `Bol. ${+i.costoCompra === 0.0 ? i.costoPrestamo : i.costoCompra}`, alignment: "right", fontSize: 9 },
        { text: `Bol. ${i.precioVenta}`, alignment: "right", fontSize: 9 },
        { text: `Bol. ${(+i.precioVenta - (+i.costoCompra + +i.costoPrestamo)).toFixed(1)}`, alignment: "right", fontSize: 9 },
      ]);
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
          text: `${this.datePipe.transform(Date.now())}`,
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
              // REPORTE DE VENTAS
              {
                text: 'Reporte de "Ventas"',

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
            { width: 10, text: "", bold: true, fontSize: 14 },
            {
              columns: [
                {
                  width: 250,
                  text: `Ventas desde ${this.datePipe.transform(
                    this.from,
                    "mediumDate"
                  )}`,
                  bold: false,
                  fontSize: 12,
                },
                { width: "*", text: `Hasta ${this.datePipe.transform(this.to, "mediumDate")}`},
              ],
            },
          ],
        },

        {
          style: "tableExample",
          table: {
            widths: [70, 70, 210, 100, 100, 100],
            headerRows: 1,
            body: bodyInventario,
          },
          layout: "lightHorizontalLines",
        },
        //suma total ventas y tambien de la diferencia COSTO DE VENTA, COSTO DE COMPRA
        {
          table: {
            widths: [70, 70, 210, 100, 100, 100],
            headerRows: 1,
            body: [
              [
                { text: "Total", alignment: "center", style: "tableHeader" },
                {
                  text: "",
                  fontSize: 10,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `${totalInventario} U.`,
                  fontSize: 10,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCostoCompras.toFixed(1)}`,
                  fontSize: 10,
                  alignment: "right",
                  style: "tableHeader",
                },
                { text: `Bol. ${totalCostoVenta.toFixed(1)}`, alignment: "right", style: "tableHeader" },
                {
                  text: `Bol. ${totalDiferencia.toFixed(1)}`,
                  fontSize: 10,
                  alignment: "right",
                  style: "tableHeader",
                },
              ],
            ],
          },

          // layout: 'noBorders'
          layout: "lightHorizontalLines",
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
