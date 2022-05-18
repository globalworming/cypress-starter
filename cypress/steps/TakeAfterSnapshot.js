import LoginPage, {submitButton, termsOfUseCheckbox, termsOfUseText} from "../pages/LoginPage";
let fs = require('fs');
let PNG = require('pngjs').PNG;

const TakeAfterSnapshot = () => {
    cy.screenshot("after").pause()
}


export default TakeAfterSnapshot