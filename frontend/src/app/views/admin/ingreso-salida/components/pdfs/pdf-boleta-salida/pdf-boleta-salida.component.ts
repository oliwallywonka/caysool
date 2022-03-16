import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { BusinessService } from "src/app/core/services/business.service";
import { Business } from "src/app/interfaces/business";
import { numeroALetras } from "src/app/helpers/numberToLetter";
import { logoCaysool } from "src/app/helpers/base64Images";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Movimiento } from "src/app/interfaces/movimiento";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-boleta-salida',
  templateUrl: './pdf-boleta-salida.component.html',
  styles: [
  ]
})
export class PdfBoletaSalidaComponent implements OnInit {
  @Input() movimiento: Movimiento;

  literal: string;
  business: Business = this.businessService.businessInformation;
  constructor(
    private businessService: BusinessService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.businessService.business.subscribe((business) => {
      this.business = business;
    });
    this.numeroALiteral();
  }

  numeroALiteral() {
    this.literal = "";
    const decimal = (
      (+this.movimiento.cantidad - Math.trunc(+this.movimiento.cantidad)) *
      10
    ).toFixed(0);
    const litera = numeroALetras(this.movimiento.cantidad, {
      plural: "BOLIVIANOS",
      singular: "BOLIVIANO",
      centPlural: "CENTAVOS",
      centSingular: "CENTAVO",
    });
    this.literal = `SON: ${litera} ${decimal}0/100`;
  }

  exportToPdf() {
    const movimiento = {
      // a string or { width: number, height: number }
      pageSize: "LETTER",

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: "portrait",

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [40, 30, 40, 30],
      content: [
        {
          columns: [
            {
              width: 90,
              height: 40,
              fontSize: 9,
              margin: [22, 0, 0, 0],
              image: logoCaysool,
            },

            [
              {
                text: "COMPROBANTE DE PAGO",

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
        {
          columns: [
            {
              width: 150,
              text: [
                "CEL:78857480 - 78857480\n",
                'Urb. 21 de octubre "A" Dist. 7 Ex Tranca San Roque Av. Panamericana Nro 3174 Entre calle Gral. juan Jose Torrez\n',
                "El Alto-La Paz-Bolivia\n",
              ],
              fontSize: 8,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            [
              "\n",
              {
                text: `Fecha: ${this.datePipe.transform(
                  this.movimiento.createdAt,
                  "medium"
                )}`,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [19, 0, 0, 0],
              },
            ],
            [
              "\n",
              {
                text: `Nro de Recibo: ${this.movimiento.id}`,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [19, 0, 0, 0],
              },
            ],
          ],
        },
        {
          alignment: "justify",
          columns: [
            {
              width: 400,

              //nombre del cliente
              text: [`Nombre: `],
              fontSize: 11,
              alignment: "center",
              margin: [0, 18, 0, 0],
            },
            [
              {
                text: `CI: `,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [0, 18, 0, 5],
              },
            ],
          ],
        },
        {
          canvas: [
            { type: "line", x1: 0, y1: 0, x2: 530, y2: 0, lineWidth: 3 },
          ],
        },
        {
          style: "tableExample",
          table: {
            widths: [48, 200, 150, 80],
            headerRows: 7,
            body: [
              [
                { text: "" },
                {
                  text: "DETALLE",
                  alignment: "center",
                  style: "tableHeader",
                  bold: true,
                  colSpan: 2,
                },
                {},
                { text: "TOTAL", alignment: "center", bold: true },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "AMORTIZACION",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "INTERES",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "COMISION ADMINISTRATIVA",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "CARGOS GENERADOS",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: `Bol. 0.0`, alignment: "right" },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "CAPITAL PRESTADO",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: `Bol. 0.0`, alignment: "right" },
              ],
              [
                { text: "Concepto", fontSize: 10, alignment: "center" },
                {
                  text: `${this.movimiento.concepto}`,
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: "", alignment: "right" },
              ],
              [
                {
                  text: `TOTAL A PAGAR ${this.literal}`,
                  alignment: "left",
                  fontSize: 9,
                  bold: true,
                  colSpan: 3,
                },
                {},
                {},
                {
                  text: `Bol. ${this.movimiento.cantidad}`,
                  alignment: "right",
                  bold: true,
                },
              ],
            ],
          },
          layout: "lightHorizontalLines",
        },
        " \n\n\n",
        {
          text: [
            "FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO",
          ],
          fontSize: 12,
          alignment: "center",
        },
        "\n\n",
        //aca segunda
        {
          columns: [
            {
              width: 90,
              height: 40,
              fontSize: 9,
              margin: [22, 0, 0, 0],
              image: logoCaysool,
            },

            [
              {
                text: "COMPROBANTE DE PAGO",

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
        {
          columns: [
            {
              width: 150,
              text: [
                "CEL:78857480 - 78857480\n",
                'Urb. 21 de octubre "A" Dist. 7 Ex Tranca San Roque Av. Panamericana Nro 3174 Entre calle Gral. juan Jose Torrez\n',
                "El Alto-La Paz-Bolivia\n",
              ],
              fontSize: 8,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            [
              "\n",
              {
                text: `Fecha: ${this.datePipe.transform(
                  this.movimiento.createdAt,
                  "medium"
                )}`,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [19, 0, 0, 0],
              },
            ],
            [
              "\n",
              {
                text: `Nro de Recibo: ${this.movimiento.id}`,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [19, 0, 0, 0],
              },
            ],
          ],
        },
        {
          alignment: "justify",
          columns: [
            {
              width: 400,

              //nombre del cliente
              text: [`Nombre: `],
              fontSize: 11,
              alignment: "center",
              margin: [0, 18, 0, 0],
            },
            [
              {
                text: `CI: `,

                color: "#333333",
                width: "*",
                fontSize: 11,
                bold: true,
                alignment: "rigth",
                margin: [0, 18, 0, 5],
              },
            ],
          ],
        },
        {
          canvas: [
            { type: "line", x1: 0, y1: 0, x2: 530, y2: 0, lineWidth: 3 },
          ],
        },
        {
          style: "tableExample",
          table: {
            widths: [48, 200, 150, 80],
            headerRows: 7,
            body: [
              [
                { text: "" },
                {
                  text: "DETALLE",
                  alignment: "center",
                  style: "tableHeader",
                  bold: true,
                  colSpan: 2,
                },
                {},
                { text: "TOTAL", alignment: "center", bold: true },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "AMORTIZACION",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "INTERES",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "COMISION ADMINISTRATIVA",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                {
                  text: `Bol. 0.0`,
                  alignment: "right",
                },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "CARGOS GENERADOS",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: `Bol. 0.0`, alignment: "right" },
              ],
              [
                { text: "", alignment: "center" },
                {
                  text: "CAPITAL PRESTADO",
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: `Bol. 0.0`, alignment: "right" },
              ],
              [
                { text: "Concepto", fontSize: 10, alignment: "center" },
                {
                  text: `${this.movimiento.concepto}`,
                  fontSize: 10,
                  alignment: "left",
                  colSpan: 2,
                },
                {},
                { text: "", alignment: "right" },
              ],
              [
                {
                  text: `TOTAL A PAGAR ${this.literal}`,
                  alignment: "left",
                  fontSize: 9,
                  bold: true,
                  colSpan: 3,
                },
                {},
                {},
                {
                  text: `Bol. ${this.movimiento.cantidad}`,
                  alignment: "right",
                  bold: true,
                },
              ],
            ],
          },
          layout: "lightHorizontalLines",
        },
        " \n\n\n",
        {
          text: [
            "FIRMA CLIENTE	                                                                         FIRMA ASESOR DE CREDITO",
          ],
          fontSize: 12,
          alignment: "center",
        },
      ],

      styles: {
        notesTitle: {
          fontSize: 8,
          bold: true,
          margin: [0, 50, 0, 3],
        },
        notesText: {
          fontSize: 8,
        },
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
        color: "black",
      },
      defaultStyle: {
        columnGap: 20,
        //font: 'Quicksand',
      },
    };

    pdfMake.createPdf(movimiento).open();
  }
}
