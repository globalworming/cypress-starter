import {MapControls} from "../pages/MapPage";
import WaitForInitialPngBatchToBeLoaded from "./WaitForInitialPngBatchToBeLoaded";

const WaitForMapToBeLoaded = () => {
   WaitForInitialPngBatchToBeLoaded()
   cy.get(".mat-progress-bar-element").should("not.be.visible")
}

export default WaitForMapToBeLoaded