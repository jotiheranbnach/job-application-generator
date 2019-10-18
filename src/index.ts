import "./assets/scss/styles.css";
import {DIN_5008_2011_04_form_A} from "./din5008-2011-04-form-a/example";
import {DIN_5008_2011_04_form_B} from "./din5008-2011-04-form-b/example";

(() => {
    const din2011FormA = new DIN_5008_2011_04_form_A();
    din2011FormA.writeJobApplication();
    // const din2011FormB = new DIN_5008_2011_04_form_B();
    // din2011FormB.writeJobApplication();
})();
