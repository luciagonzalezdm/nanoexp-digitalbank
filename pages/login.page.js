const PAGE_TIMEOUT = 10000;
class LoginPage {
    
    get usernameInput () { return $('#username'); }
    get passwordInput () { return $('#password'); }
    get signInButton () { return $('#submit'); }
    get rememberMe () { return $('#remember-me'); }


    async open(link) {
        await browser.url(`${link}`);
    }

    async logIn(username, password) {
        await this.usernameInput.waitForClickable({ timeout: PAGE_TIMEOUT });
        await this.usernameInput.setValue(username);
        await this.passwordInput.waitForClickable({ timeout: PAGE_TIMEOUT });
        await this.passwordInput.setValue(password);
    }

    async clickElement (element) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();
    }
}


export default new LoginPage();
