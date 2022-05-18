import TakeAfterSnapshot from "./TakeAfterSnapshot";
import {PNG} from "pngjs";
import pixelmatch from "pixelmatch";

const EnsureImageChangedWithinBounds = () => {
    cy.readFile('cypress/snapshots/actual/3-map/map.spec.js/base.png').then(
        contents => {
            PNG.sync.read(contents)
        }
    ).then(png => {
        TakeAfterSnapshot()
        cy.readFile("cypress/snapshots/actual/3-map/map.spec.js/after.png")
            .then(afterPng => {
                const diff = new PNG({width: 1000, height: 660});
                pixelmatch(png, afterPng, diff, 1000, 660, {threshold: 0.1});
            }).then(numberOfDiffPixels => {
                throw new Error(numberOfDiffPixels)
        })
    });
}


export default EnsureImageChangedWithinBounds