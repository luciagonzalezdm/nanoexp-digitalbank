const PAGE_TIMEOUT = 10000;

class LoginPage {
    
    get usernameInput () { return $('#username'); }
    get passwordInput () { return $('#password'); }
    get signInButton () { return $('#submit'); }
    get rememberMe () { return $('#remember-me'); }
    get alert () {return $('[class= "badge badge-pill badge-danger"]'); }


    async logIn(username, password) {
        await this.usernameInput.waitForClickable({ timeout: PAGE_TIMEOUT });
        await this.usernameInput.setValue(username);
        await this.passwordInput.waitForClickable({ timeout: PAGE_TIMEOUT });
        await this.passwordInput.setValue(password);
    }

}
export default new LoginPage();
