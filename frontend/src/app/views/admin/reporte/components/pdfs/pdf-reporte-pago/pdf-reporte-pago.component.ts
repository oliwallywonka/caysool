import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { logoCaysool } from "src/app/helpers/base64Images";
import { Pago } from "src/app/interfaces/pago";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Impresion } from "src/app/interfaces/impresion";
@Component({
  selector: 'app-pdf-reporte-pago',
  templateUrl: './pdf-reporte-pago.component.html',
  styles: [
  ]
})
export class PdfReportePagoComponent implements OnInit {

  @Input() pagos: Pago[];
  @Input() impresiones: Impresion[];
  @Input()
  from: string;
  @Input()
  to: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    let totalCantidadPagos = 0;
    let totalCostoReimpresiones = 0;
    let totalCostoPagos = 0;
    let totalCostoAmortiguado = 0;
    let totalComisionAdministrativa = 0;
    let totalCargosExtra = 0;
    let totalInteresesCobrados = 0;
    let totalCobrado = 0;

    const bodyPagos: any = [
      [
        { text: "Fecha de pago", style: "tableHeader" },
        {
          text: "Tipo de pago",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Reimpreciones",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Pago (cancelacion)",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Amortiguado",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Comision Administrativa",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Cargos extra",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Interes cobrado",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Total cobrado",
          style: "tableHeader",
          alignment: "center",
        },
      ],
    ];
    totalCantidadPagos = this.pagos.length + this.impresiones.length;
    for (const pago of this.pagos) {
      totalCostoPagos += +pago.costoPago + +pago.costoInteres;
      totalCostoAmortiguado += +pago.costoPago;
      totalComisionAdministrativa += +pago.costoAdministracion;
      totalCargosExtra += +pago.costoPiso;
      totalInteresesCobrados += +pago.costoInteres;
      totalCobrado += +pago.costoTotal;
      bodyPagos.push([
        { text: `${this.datePipe.transform(pago.createdAt, 'mediumDate')}`, fontSize: 9, alignment: "center" },
        { text: `${pago.tipoPago === 'AMORTIZACION' ? 'AMORTIZACIÓN' : pago.tipoPago === 'LIQUIDACION' ? 'LIQUIDACIÓN' : pago.tipoPago}`, fontSize: 9, alignment: "center" },
        { text: `Bol. 0.0`, fontSize: 9, alignment: "center" },
        { text: `Bol. ${(+pago.costoPago + +pago.costoInteres).toFixed(1)}`, fontSize: 9, alignment: "center" },
        { text: `Bol. ${pago.costoPago}`, fontSize: 9, alignment: "center" },
        { text: `Bol. ${pago.costoAdministracion}`, alignment: "center", fontSize: 9 },
        { text: `Bol. ${pago.costoPiso}`, alignment: "center", fontSize: 9 },
        { text: `Bol. ${pago.costoInteres}`, alignment: "center", fontSize: 9 },
        { text: `Bol. ${pago.costoTotal}`, fontSize: 9, alignment: "center" },
      ]);
    }

    for (const impresion of this.impresiones) {
      totalCostoReimpresiones += +impresion.costoImpresion;
      totalCobrado += +impresion.costoImpresion;
      bodyPagos.push([
        { text: `${this.datePipe.transform(impresion.createdAt, 'mediumDate')}`, fontSize: 9, alignment: "center" },
        { text: `${impresion.tipoDocumento === 'PAGO' ? 'REIMPRESIÓN' : 'REIMPRESIÓN'}`, fontSize: 9, alignment: "center" },
        { text: `Bol. ${impresion.costoImpresion}`, fontSize: 9, alignment: "center" },
        { text: `Bol. 0.0`, fontSize: 9, alignment: "center" },
        { text: `Bol. 0.0`, fontSize: 9, alignment: "center" },
        { text: `Bol. 0.0`, alignment: "center", fontSize: 9 },
        { text: `Bol. 0.0`, alignment: "center", fontSize: 9 },
        { text: `Bol. 0.0`, alignment: "center", fontSize: 9 },
        { text: `Bol. ${impresion.costoImpresion}`, fontSize: 9, alignment: "center" },
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
                text: 'Reporte de "Resumen pagos por pagos"',

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
            { width: 250, text: `Pagos por pagos Desde ${this.datePipe.transform(
              this.from,
              "mediumDate"
            )}` },
            { width: "*", text: `Hasta ${this.datePipe.transform(this.to, "mediumDate")}` },
          ],
        },

        {
          style: "tableExample",
          table: {
            widths: [70, 60, 100, 90, 60, 80, 55, 55, 55],
            headerRows: 1,
            body: bodyPagos,
          },
          layout: "lightHorizontalLines",
        },
        //EN TIPO DE PAGO CONTAR LAS FILAS EN EL TOTAL
        {
          style: "tableExample",
          table: {
            widths: [70, 80, 100, 110, 60, 80, 70, 60, 60],
            headerRows: 1,
            body: [
              [
                {
                  text: "Total",
                  alignment: "center",
                  fontSize: 11,
                  style: "tableHeader",
                },
                {
                  text: `${totalCantidadPagos}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCostoReimpresiones.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCostoPagos.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCostoAmortiguado.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalComisionAdministrativa.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCargosExtra.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalInteresesCobrados.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
                {
                  text: `Bol. ${totalCobrado.toFixed(1)}`,
                  fontSize: 11,
                  alignment: "center",
                  style: "tableHeader",
                },
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
