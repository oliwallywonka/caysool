import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { logoCaysool } from "src/app/helpers/base64Images";
import { Prestamo } from "src/app/interfaces/prestamo";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: "app-pdf-prestamo-cancelado",
  templateUrl: "./pdf-prestamo-cancelado.component.html",
  styles: [],
})
export class PdfPrestamoCanceladoComponent implements OnInit {
  @Input() prestamos: Prestamo[];
  @Input()
  from: string;
  @Input()
  to: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    let totalInventario = 0;
    let totalCostoPrestamos = 0;
    let totalImpresiones = 0;
    let totalcargosExtra = 0;
    let totalInteres = 0;
    let totalPagos = 0;
    const bodyPrestamo: any = [
      [
        { text: "Fecha de Prestamo", style: "tableHeader" },
        { text: "Fecha de final", style: "tableHeader" },
        { text: "Cliente", alignment: "center", style: "tableHeader" },
        { text: "Prenda", alignment: "center", style: "tableHeader" },
        {
          text: "Monto de prestamo",
          alignment: "center",
          style: "tableHeader",
        },
        {
          text: "Comision/Reimpresiones",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Cargos extra",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Interes cobrados",
          style: "tableHeader",
          alignment: "center",
        },
        {
          text: "Pagos cobrados",
          style: "tableHeader",
          alignment: "center",
        },
      ],
    ];
    for (const prestamo of this.prestamos) {
      totalInventario += +prestamo.inventario.length;
      totalCostoPrestamos += +prestamo.costoPrestamo;
      totalImpresiones += +prestamo.costoImpresion + +prestamo.costoAdministracion;
      totalcargosExtra += +prestamo.costoPiso;
      totalInteres += +prestamo.cobroInteres;
      totalPagos += +prestamo.costoCancelado - +prestamo.cobroInteres;
      bodyPrestamo.push(
        [
          { text: `${this.datePipe.transform(prestamo.fechaInicio, 'mediumDate')}`, fontSize: 10, alignment: "center" },
          {
            text: `${this.datePipe.transform(prestamo.fechaFinal, 'mediumDate')}`,
            fontSize: 10,
            alignment: "center",
          },
          {
            text: `${prestamo.client.name}`,
            fontSize: 10,
            alignment: "center",
          },
          {
            text: `${prestamo.inventario.map(i => (i.descripcion+ ' '))}`,
            fontSize: 10,
            alignment: "center",
          },
          { text: `Bol. ${prestamo.costoPrestamo}`, fontSize: 10, alignment: "center" },
          { text: `Bol. ${(+prestamo.costoImpresion + +prestamo.costoAdministracion).toFixed(1)}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${prestamo.costoPiso}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${prestamo.cobroInteres}`, alignment: "center", fontSize: 10 },
          { text: `Bol. ${(+prestamo.costoCancelado - +prestamo.cobroInteres).toFixed(1)}`, fontSize: 10, alignment: "center" },
        ]
      );
    };
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
                text: `Reporte de "PRESTAMOS ${this.prestamos[0].estado}S"`,

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
              text: `Prestamos cancelados Desde ${this.datePipe.transform(
                this.from,
                "mediumDate"
              )}`,
            },
            {
              width: "*",
              text: `Hasta ${this.datePipe.transform(this.to, "mediumDate")}`,
            },
          ],
        },

        {
          style: "tableExample",
          table: {
            widths: [60, 60, 120, 100, 60, 60, 55, 55, 55],
            headerRows: 1,
            body: bodyPrestamo,
          },
          layout: "lightHorizontalLines",
        },
        {
          style: "tableExample",
          table: {
            widths: [60, 100, 120, 100, 60, 60, 70, 60, 60],
            headerRows: 1,
            body: [
              [
                { text: "Total", fontSize: 14, style: "tableHeader" },
                {},
                {},
                { text: `${totalInventario} unidades`, alignment: "center", style: "tableHeader" },
                { text: `Bol. ${totalCostoPrestamos.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                { text: `Bol. ${totalImpresiones.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                { text: `Bol. ${totalcargosExtra.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                { text: `Bol. ${totalInteres.toFixed(1)}`, alignment: "center", style: "tableHeader" },
                { text: `Bol. ${totalPagos.toFixed(1)}`, alignment: "center", style: "tableHeader" },
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
