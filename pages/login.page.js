const PAGE_TIMEOUT = 10000;

class LoginPage {
    
    get usernameInput () { return $('#username'); }
    get passwordInput () { return $('#password'); }
    get logInButton () { return $('#submit'); }
    get rememberMe () { return $('#remember-me'); }
    get failedLoginMessage () {return $('[class= "badge badge-pill badge-danger"]'); }


    async completeFields(element, text) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.setValue(text);
    }

    async open(link) {
        await browser.url(link);
    }
    
    async logInWithEnter(){
        await this.logInButton.keys('Enter');
    }

    async logInWithSubmitButton(){
        await this.logInButton.click();
    }

    async clickElement (element) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();
    }

}
export default new LoginPage();