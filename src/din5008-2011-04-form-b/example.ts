import {PDFGenerator} from "../PDFGenerator";

export class DIN_5008_2011_04_form_B {
    private lorem: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis hendrerit dolor magna eget est lorem. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Lacus vel facilisis volutpat est. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Lobortis feugiat vivamus at augue. Sed egestas egestas fringilla phasellus faucibus scelerisque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum neque egestas congue quisque egestas diam in. Pharetra convallis posuere morbi leo urna. Cursus metus aliquam eleifend mi in nulla posuere. Eget nunc lobortis mattis aliquam. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Aliquam ut porttitor leo a diam sollicitudin tempor. Morbi tincidunt augue interdum velit euismod. Tortor at risus viverra adipiscing at in tellus. Quis imperdiet massa tincidunt nunc pulvinar. Amet porttitor eget dolor morbi non arcu risus quis. ';

    writeJobApplication() {
        PDFGenerator.generate((doc: any) => {
            doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf');

            // draw some text
            doc.fontSize(25).text('DIN 5008 2011-04 Dokument', 100, 80);

            // and some justified text wrapped into columns
            doc
                .font('Roboto')
                .fontSize(13)
                .moveDown()
                .text(
                    this.lorem + this.lorem + this.lorem,
                    {
                        width: 412,
                        align: 'justify',
                        indent: 30,
                        columns: 2,
                        // height: 300,
                        ellipsis: true
                    }
                );

            doc.addPage();

            // end and display the document in the iframe to the right
            doc.end();
        });
    }
}
