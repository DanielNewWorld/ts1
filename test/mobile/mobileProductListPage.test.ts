import MobilePLP from "../../src/mobile/mobileProductListingPage.js";

describe('Product List Page', () => {
    it.only('Verify SWAG on PLP', async () => {
        browser.url(`https://www.ftd.com/`);
        await MobilePLP.plpIndexSelection(0, 1);

        console.log("Test: ")
        
        let elem = await $$("//input[contains(@id,'zipCode')]")
        await elem[0].setValue("10000")

        elem.filter(async el => {
            if (await el.getValue() === "three") {
                await el.click()
                expect(await el.isSelected()).toBe(true)
            }
        })

        await browser.pause(7000)
        expect (await $("//input[contains(@id,'zipCode')]")).toEqual("123")
    })
})


