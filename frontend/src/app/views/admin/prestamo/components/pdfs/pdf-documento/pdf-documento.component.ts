import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { marcaAgua } from  'src/app/helpers/base64Images';
import { numeroALetras } from 'src/app/helpers/numberToLetter';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BusinessService } from 'src/app/core/services/business.service';
import { Subscription } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-documento',
  templateUrl: './pdf-documento.component.html',
  styles: [
  ]
})
export class PdfDocumentoComponent implements OnInit, OnDestroy {
  sub: Subscription;
  @Input() prestamo;

  business = this.businessService.businessInformation;
  literal: string;

  constructor(
    private datePipe: DatePipe,
    private businessService: BusinessService,
  ) { }

  ngOnInit(): void {
    this.sub = new Subscription();
    this.subscribeBusiness();
    this.numeroALiteral();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  subscribeBusiness() {
    this.sub.add(
      this.businessService.business.subscribe(
        (business) => {
          this.business = business;
        }
      )
    );
  }

  numeroALiteral() {
    this.literal = '';
    const decimal = ((Math.abs(+this.prestamo.costoPrestamo) - +this.prestamo.costoPrestamo) * 10).toFixed(0);
    const litera = numeroALetras(this.prestamo.costoPrestamo, {
      plural: 'BOLIVIANOS',
      singular: 'BOLIVIANO',
      centPlural: 'CENTAVOS',
      centSingular: 'CENTAVO'
    })
    this.literal = `(literal ${litera} ) (${decimal}0/100 bolivianos)`;
  }

  exportToPdf() {
    const contrato = {
      // a string or { width: number, height: number }
      pageSize: "LETTER",

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: "portrait",

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [50, 35, 50, 35],
      background: function (currentPage, pageSize) {
        return {
          image: marcaAgua,
          width: 550,
          absolutePosition: { x: 50, y: 150 },
          opacity: 0.2,
        };
      },
      content: [
        {
          text: "DOCUMENTO DE COMPRA VENTA CON PACTO DE RESCATE\n\n",
          fontSize: 12,
          alignment: "center",
        },
        {
          text: "Conste por el presente documento privado de compra y venta con pacto de rescate el cual puede ser elevado a instrumento público a simple reconocimiento de firmas y a solo requerimiento de las partes al tenor de las siguientes clausulas.\n\n",
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: "PRIMERO. - El presente documento privado de compra y venta con pacto de rescate se suscribe al amparo del Art. 405, 452, 454, 483, 519, 584, 590, 593, 614, 636, 641, 644 y 645 del Código Civil.\n\n",
          fontSize: 12,
          alignment: "justify",
        },
        //DATOS DE PANEL DE CONTROL NOMBRE DE LA EMPRESA, NIT,UBICACION
        {
          text: "SEGUNDO. - (DE LAS PARTES). Intervienen en la SUSCRIPCION DE ESTE DOCUMENTO \n",
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: `Por una parte, La Empresa Unipersonal “${this.business.name}” legal mente constituida con NIT: ${this.business.nit} ubicada en ${this.business.direction} de la ciudad de EL Alto - La Paz. Titular y/o representante por el Sr. Sergio Gonzalo Mamani Rojas con CI: 7041391 LP. mayor de edad, hábil por derecho, quien en lo sucesivo y para fines propios del presente documento se denominará “COMPRADOR”. \n\n`,
          fontSize: 12,
          alignment: "justify",
        },
        //Nombre del cliente , CI , celular
        {
          text: `Por otra parte, ${this.prestamo.client.name} con C.I ${this.prestamo.client.ci} Cel.${this.prestamo.client.phone}  Mayor de edad hábil por derecho en completo uso de mis facultades, de forma libre y voluntaria, sin que medie vicio alguno en el consentimiento, doy en calidad de venta bajo modalidad de pacto de rescate, quien en lo sucesivo y para fines propios del presente documento se denominara “VENDEDOR”.\n\n`,
          fontSize: 12,
          alignment: "justify",
        },
        //nombre del objeto de prenda y valor numerico y literal
        {
          text: `TERCERO. - (DE LA COMPRA Y VENTA)  ${this.prestamo.inventario.map(i => (i.descripcion+ ', '))} con un valor de ${this.prestamo.costoPrestamo}0 ${this.literal} que el “COMPRADOR” ENTREGA A FAVOR “VENDEDOR” en forma efectiva al momento de realizar la   transacción al momento de suscribir el presente documento en el modo y condiciones que se estipulan en caso de que el vendedor quisiera hacer uso del derecho de rescate deberá conocer las siguientes clausulas.\n\n`,
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: "CUARTO. - (PACTO DE RESCATE). “EL VENDEDOR” tiene la opción de rescate de la mercadería vendida siempre y cuando devuelva la suma de dinero a la cual fue vendida la mercadería más los intereses y comisiones establecidos entre comprador y vendedor en el presente documento a detallarse:\n\n",
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
                    { text: "Monto de compra en:", style: "tableHeader" },
                    { text: `Bs.- ${this.prestamo.costoPrestamo}0`, style: "tableHeader" },
                  ],
                  ["COMISION POR CUSTODIA", "Gastos generados"],
                ],
                alignment: "center",
              },
            },
            { width: "*", text: "" },
          ],
        },
        "  \n  ",
        // interes del panel de control
        {
          text: `QUINTO. - (DEL INTERES). Si el VENDEDOR opta por el rescate de la mercadería, el interés pactado que debe pagar al “VENDEDOR” al “COMPRADOR” por el rescate de la mercadería es el ${this.business.interest}% mensual respecto al monto de dinero entregado por el comprador al vendedor.\n\n`,
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: [
            "SEXTO. - (DE LA COMISION). Si el “VENDEDOR” opta por el rescate de la mercadería vendida, entonces se compromete libremente a pagar al “COMPRADOR” por concepto de comisión (COMISION POR CUSTODIA, CONSERVACIONES, GASTOS ADMINISTRATIVOS Y RIESGOS DE LA GARANTIA COMPRADA). El “COMPRADOR” garantiza al “VENDEDOR” la custodia y cuidado de la mercadería vendida, en concordancia con el Art. 645 del Código Civil.\n",
            "EL/LA VENDEDOR(A), reconoce voluntariamente, que el cobro de los gastos establecidos en el presente contrato, constituyen un legítimo rembolso a favor de EL COMPRADOR. Puesto que este incurra en dichos gastos para viabilizar la transacción, determinar y conservar el estado actual del bien objeto de la compra y venta.\n",
          ],
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: "SEPTIMO. - (DEVOLUCION DE LA GARANTIA VENDIDA). El “VENDEDOR” deberá rescatar la cosa vendida en forma personal previa acreditación de su cedula identidad (original vigente) más las copias del documento. La entrega se realizará en el plazo no mayor a 5 días hábiles. Una vez haya realizado la cancelación total de la venta más los intereses legales aplicables y demás comisiones por custodia, conservación, gastos administrativos y riesgos de la cosa vendida.\n\n",
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: [
            "OCTAVO. - El vendedor da propia voluntad y sin que medie vicio del consentimiento alguno DECLARA de forma pura y simple que el bien entregado en calidad de COMPRA Y VENTA CON PACTO DE RESCATE, es de su exclusiva, legal y legítima propiedad, siendo el único responsable de la titularidad de derecho propietario, por lo que se hace responsable de forma directa de reclamos por terceros.\n",
            "EL “VENDEDOR” excluye de responsabilidad civil y penal al “COMPRADOR”, quien recibe de buena fe el bien entregado en VENTA también el “VENDEDOR” asume responsabilidad directa en caso de existir denuncias y/o acusaciones particulares de terceros por hechos vinculados a los delitos de robo, hurto, apropiación indebida o abuso de confianza sobre el bien entregado en VENTA, o que indicado bien este comprometido en la comisión de otros delitos por el VENDEDOR o por terceros.\n\n",
          ],
          fontSize: 12,
          alignment: "justify",
        },
        {
          text: "NOVENO. - (DE LA CLAUSULA ARBITRAL). En caso de conflicto o discrepancias sobre el cumplimiento del presente contrato de compra y venta con pacto de rescate. Las partes convenimos resolver el conflicto a través del arbitraje con aceptación del árbitro único constituido por el centro de arbitraje según lo estipulado en el Art. 39 y siguientes de la Ley 708 de 25 de junio del 2015.\n\n\n",
          fontSize: 12,
          alignment: "justify",
        },
        //fecha del dia de prestamo
        `Fecha de la compra y venta: La Paz – El Alto ${this.datePipe.transform(this.prestamo.fechaInicio, 'mediumDate')} \n\n\n\n\n\n\n\n\n\n`,
        //numero del CI vendedor y comprador

        {
          alignment: "center",
          columns: [
            {
              text: `……………………………………………\nCI: ${this.prestamo.client.ci}\nVENDEDOR`,
            },
            //aqui se debe poner el ci del administrador
            {
              text: "……………………………………………\nCI: 7041391\nCOMPRADOR",
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

    pdfMake.createPdf(contrato).open();
  }

}
