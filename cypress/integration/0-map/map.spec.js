/// <reference types="cypress" />
import LogInSuccessfully from "../../steps/LogInSuccessfully";
import EnsureThatEnglishIsSelected from "../../steps/EnsureThatEnglishIsSelected";
import WaitForMapToBeLoaded from "../../steps/WaitForMapToBeLoaded";

describe('map', () => {
  beforeEach(() => {
    LogInSuccessfully()
    WaitForMapToBeLoaded()
  })

  // FIXME skipped right now, something about that visual testing setup isn't right
  it.skip('where it checks the controls, like zooming and toggle overlays',() => {
    // see https://github.com/mjhea0/cypress-visual-regression
    // you need tu run a suite creating the base snapshots
    // then you can run a suite which compares to the base images
    cy.compareSnapshot('inital-map-page');
  })

  it('where text changes based on language',() => {
    EnsureThatEnglishIsSelected()
    // TODO: grab all texts, check if changing language changes the texts
  })

  it.skip('where it downloads a zip',() => {
  })

  it.skip('where it compares images from REST api',() => {
  })

  it.skip('where it tries different actions on the map, see questionmark button',() => {
  })



})
