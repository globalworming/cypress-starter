/// <reference types="cypress" />
import LogInSuccessfully from "../../steps/LogInSuccessfully";
import EnsureThatEnglishIsSelected from "../../steps/EnsureThatEnglishIsSelected";
import WaitForMapToBeLoaded from "../../steps/WaitForMapToBeLoaded";
import TakeBaseSnapshot from "../../steps/TakeBaseSnapshot";
import EnsureImageChangedWithinBounds from "../../steps/EnsureImageChangedWithinBounds";

describe('map', () => {
  beforeEach(() => {
    LogInSuccessfully()
    WaitForMapToBeLoaded()
  })

  it.skip('where the landing page still looks the same',() => {
    // see https://github.com/mjhea0/cypress-visual-regression
    // you need to run a suite creating the base snapshots like
    //     npx cypress run --env type=base --config screenshotsFolder=cypress/snapshots/base,testFiles=\"**/map.spec.js\"
    // then you can run a suite which compares to the base images
    //     npx cypress run --env type=actual --config testFiles=\"**/map.spec.js\"
    cy.get("canvas").compareSnapshot('initial-map-page');
  })

  it('where controls change what is visible',() => {
    const base = TakeBaseSnapshot()
    cy.get(".caris-bath-toggle").click()
    EnsureImageChangedWithinBounds(base, 0.6, 0.8)
  })

  it.skip('where mouse position translates to lat/long',() => {
  })

  it.skip('where text changes based on language',() => {
    EnsureThatEnglishIsSelected()
    // TODO: grab all texts, check if changing language changes the texts
  })

  it.skip('where it downloads a zip',() => {
  })

  it.skip('where it compares images from REST api',() => {
  })

  it.skip('where it tries different actions on the map, see questionmark button',() => {
    //cy.get("canvas").
  })



})
