import { Component, Input, OnInit } from "@angular/core";
import { logoCaysool, marcaAgua } from "src/app/helpers/base64Images";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { DatePipe } from "@angular/common";
import { Inventario } from "src/app/interfaces/inventario";
import { Prestamo } from "src/app/interfaces/prestamo";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: "app-pdf-devolucion",
  templateUrl: "./pdf-devolucion.component.html",
  styles: [],
})
export class PdfDevolucionComponent implements OnInit {
  @Input() inventario: Inventario;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  exportToPdf() {
    const pago = {
      // a string or { width: number, height: number }
      pageSize: "LETTER",

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: "portrait",

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [50, 35, 50, 35],
      background: function(currentPage, pageSize) {
        return {image: marcaAgua, width: 550, absolutePosition: {x: 50, y: 150},opacity: 0.2}
      
      }, 
      content: [
        {
          width: 90,
          height: 40,
          fontSize: 9,
          margin: [22, 0, 0, 0],
          image: logoCaysool,
        },
        {
          text: "DOCUMENTO DE ENTREGA DE GARANTIA\n\n",
          fontSize: 14,
          alignment: "center",
          bold: true,
        },
        {
          text: "A continuacion se detallara las caracteristicas de la prenda empeñada para su entrega respectiva.\n\n",
          fontSize: 12,
          alignment: "justify",
        },

        //monto de prestamo
        {
          columns: [
            { width: "*", text: "" },
            {
              width: "auto",
              table: {
                body: [
                  [
                    { text: "Cliente:", style: "tableHeader" },
                    { text: `${this.inventario.prestamo.client.name}`, style: "tableHeader" },
                  ],
                  ["Prenda(s)",`${this.inventario.descripcion}` ],
                  ["Marca:", `${this.inventario.marca}`],
                  ["Moldelo:", `${this.inventario.modelo}`],
                  ["Observaciones:", `${this.inventario.observacion}`],
                  ["Placa:", `${this.inventario.placa}`],
                  ["Linea:", `${this.inventario.linea}`],
                  ["Deudas:", `${this.inventario.deuda}`],
                ],
                alignment: "center",
              },
            },
            { width: "*", text: "" },
          ],
        },
        "  \n  ",
        // interes del panel de control

        //fecha del dia de prestamo
        `Fecha de la Entrega: La Paz – El Alto ${this.datePipe.transform(this.inventario.fechaDevolucion, 'mediumDate')} \n\n\n\n\n\n\n\n`,
        //numero del CI vendedor y comprador

        {
          alignment: "center",
          columns: [
            {
              text: `……………………………………………\nCI: ${this.inventario.prestamo.client.ci}\nRECOGI CONFORME`,
            },
            //aqui se debe poner el ci del administrador
            {
              columns: [
                { width: "*", text: "" },
                {
                  width: "auto",
                  table: {
                    heights: [120],
                    widths: [70],
                    body: [[{ text: "Huella" }]],
                    alignment: "center",
                  },
                },
                { width: "*", text: "" },
              ],
            },
          ],
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "justify",
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
      },
    };
    pdfMake.createPdf(pago).open();
  }

}
