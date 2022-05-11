import LoginPage, {submitButton, termsOfUseCheckbox, termsOfUseText} from "../pages/LoginPage";

const LogInSuccessfully = () => {
    cy.visit(LoginPage)
    cy.get(termsOfUseText).scrollTo('bottom', { duration: 300 })
    cy.get(termsOfUseCheckbox).click()
    cy.get(submitButton).click()
}


export default LogInSuccessfully