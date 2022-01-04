const PAGE_TIMEOUT = 10000;
class BasePage {

async open(link) {
    await browser.url(link);
}

async completeFields(element, text) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.setValue(text);
    }

async clickElement (element) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();
    }
}
export default new BasePage();