"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PDFDocument = require('pdfkit').default;
const blobStream = require('blob-stream');
const PDF_1 = require("../PDF");
class DIN_5008_2011_04_form_A {
    constructor() {
        this.lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis hendrerit dolor magna eget est lorem. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Lacus vel facilisis volutpat est. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Sed egestas egestas fringilla phasellus faucibus scelerisque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum neque egestas congue quisque egestas diam in. Pharetra convallis posuere morbi leo urna. Cursus metus aliquam eleifend mi in nulla posuere. Eget nunc lobortis mattis aliquam. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Aliquam ut porttitor leo a diam sollicitudin tempor. Morbi tincidunt augue interdum velit euismod. Tortor at risus viverra adipiscing at in tellus. Quis imperdiet massa tincidunt nunc pulvinar. Amet porttitor eget dolor morbi non arcu risus quis. ';
        this.document = new PDFDocument({
            size: 'A4',
            margins: {
                top: 250,
                bottom: 100,
                left: 100,
                right: 100
            }
        });
        this.documentStream = this.document.pipe(blobStream());
    }
    writeJobApplication() {
        PDF_1.PDF.generate(() => {
            // Empfänger
            this.document.rect(PDF_1.PDF.m2p(20), PDF_1.PDF.m2p(27), PDF_1.PDF.m2p(85), PDF_1.PDF.m2p(40 + 5)).stroke('black');
            // Absender
            this.document.rect(PDF_1.PDF.m2p(125 + 65), PDF_1.PDF.m2p(32), PDF_1.PDF.m2p(10), PDF_1.PDF.m2p(40)).fill('lightgray');
            this.document.rect(PDF_1.PDF.m2p(125), PDF_1.PDF.m2p(32), PDF_1.PDF.m2p(65), PDF_1.PDF.m2p(40)).stroke('black');
            // Inhalt
            this.document.rect(PDF_1.PDF.m2p(25), PDF_1.PDF.m2p(32 + 40 + 8.46), PDF_1.PDF.m2p(210 - 25 - 20), PDF_1.PDF.m2p(190)).stroke();
            // Faltmarke 1
            this.document.moveTo(PDF_1.PDF.m2p(0), PDF_1.PDF.m2p(87))
                .lineTo(PDF_1.PDF.m2p(10), PDF_1.PDF.m2p(87))
                .stroke('lightgray');
            // Faltmarke 2
            this.document.moveTo(PDF_1.PDF.m2p(0), PDF_1.PDF.m2p(87 + 105))
                .lineTo(PDF_1.PDF.m2p(10), PDF_1.PDF.m2p(87 + 105))
                .stroke('lightgray');
            // Faltmarke 1
            this.document.moveTo(PDF_1.PDF.m2p(0), PDF_1.PDF.m2p(148.5))
                .lineTo(PDF_1.PDF.m2p(15), PDF_1.PDF.m2p(148.5))
                .stroke('lightgray');
            this.document.registerFont('Roboto', 'fonts/Roboto-Regular.ttf');
            // draw some text
            this.document
                .fontSize(25)
                .fillColor('blue')
                .text('DIN 5008 2011-04, Form A');
            // and some justified text wrapped into columns
            this.document
                .font('Roboto')
                .fontSize(13)
                .fillColor('black')
                .moveDown()
                .text(this.lorem, {
                width: 412,
                align: 'justify',
                indent: 30,
                columns: 2,
                // height: 300,
                ellipsis: true
            });
            // end and display the document in the iframe to the right
            this.document.end();
            return this.documentStream;
        });
    }
}
exports.DIN_5008_2011_04_form_A = DIN_5008_2011_04_form_A;
//# sourceMappingURL=example.js.map