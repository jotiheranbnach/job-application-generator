"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./register-files");
class PDF {
    static generate(writeDocument) {
        const stream = writeDocument();
        const iframe = document.querySelector('iframe');
        stream.on('finish', function () {
            iframe.src = stream.toBlobURL('application/pdf');
        });
    }
    /**
     * Converts a millimeter value to points (we know we are dealing with 72 DPI).
     *
     * @param millimeters
     */
    static m2p(millimeters) {
        return millimeters * 2.83465;
    }
    static drawRect(x, y, width, height) {
    }
}
exports.PDF = PDF;
//# sourceMappingURL=PDF.js.map