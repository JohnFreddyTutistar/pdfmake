import { Component, OnInit } from "@angular/core";
// import { pdfmake } from 'pdfmake/build/pdfmake';
// import { pdfFonts } from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: "app-cupon",
    templateUrl: "./cupon.component.html"
})

export class AppCupon implements OnInit{

    constructor(){}

    ngOnInit(){
        
    }

    generarCupon(){
        console.log("me diste click")
        const pdfcupon: any = {
            content: [
                {
                    text: 'Hola mundo'
                }
            ]
        }
        //const pdf = pdfMake.createPdf(pdfcupon).download('Formthis.data.input.invoice' + "-" + 'this.data.input.registerDate' + ".pdf");
        const pdf = pdfMake.createPdf(pdfcupon);
        pdf.open();
    }
}