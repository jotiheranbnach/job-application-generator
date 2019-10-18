import './register-files'

export class PDF {
    static generate(writeDocument: () => any) {
        const stream: any = writeDocument();
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
    static m2p(millimeters: number): number {
        return millimeters * 2.83465;
    }

    static drawRect(x,y,width,height){

    }
}
