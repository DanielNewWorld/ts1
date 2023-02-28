//import MobilePLPTest from "../../test/mobile/mobileProductListPage.test.js";

class MobilePLP {

    async plpIndexSelection(menuListIndex: number, plpMenuIndex: number) {
        //await browser.waitForElementClickable(await "//input[contains(@id,'zipCode')]", 5000).click();
        
        //await PageElements.plpLinksFromHeaders[plpMenuIndex].moveTo();
        //(await browser.waitForElementClickable(await PageElements.plpLinksFromHeaders[plpMenuIndex], Wait.MED_WAIT)).click();
        return "ok";
    }
    
}

export default new MobilePLP()