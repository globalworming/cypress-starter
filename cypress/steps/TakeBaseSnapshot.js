import LoginPage, {submitButton, termsOfUseCheckbox, termsOfUseText} from "../pages/LoginPage";
let fs = require('fs');
let PNG = require('pngjs').PNG;

const TakeBaseSnapshot = () => {
    cy.screenshot("base")
}


export default TakeBaseSnapshot