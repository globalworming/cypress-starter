import {MapControls} from "../pages/MapPage";
import WaitForInitialPngBatchToBeLoaded from "./WaitForInitialPngBatchToBeLoaded";

const WaitForMapToBeLoaded = () => {
   cy.get(MapControls.zoomInButton)
   WaitForInitialPngBatchToBeLoaded()
}

export default WaitForMapToBeLoaded