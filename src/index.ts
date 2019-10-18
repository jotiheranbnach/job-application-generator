import "./assets/scss/styles.css";
import {DIN_5008_2011_04_form_B} from "./din5008-2011-04-form-b/example";

(() => {
    const din2011 = new DIN_5008_2011_04_form_B();
    din2011.writeJobApplication();
})();
