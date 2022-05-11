const WaitForInitialPngBatchToBeLoaded = () => {
    cy.intercept('GET', '**/v1/tile/tilesets/16139416-6d01-4909-914a-cacdaff73f0e/3/7/4.png').as('getLastOfFirstTileBatch')

    cy.wait('@getLastOfFirstTileBatch').its('response.statusCode').should('be.oneOf', [200, 204])
};

export default WaitForInitialPngBatchToBeLoaded