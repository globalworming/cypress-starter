import {SelectedLanguage} from "../pages/MapPage";

const EnsureThatEnglishIsSelected = () => {
    cy.get(SelectedLanguage)
        .should('have.text', 'English')
};

export default EnsureThatEnglishIsSelected