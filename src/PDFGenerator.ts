var PDFDocument = require('pdfkit').default;
var blobStream = require('blob-stream');
import './register-files'

export class PDFGenerator {
    static generate(writeContent: (doc: any) => void) {
        // create a document and pipe to a blob
        var doc = new PDFDocument();
        var stream = doc.pipe(blobStream());

        writeContent(doc);

        var iframe = document.querySelector('iframe');
        stream.on('finish', function () {
            iframe.src = stream.toBlobURL('application/pdf');
        });
    }
}
