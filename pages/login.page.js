import BasePage from "./base.page";
const PAGE_TIMEOUT = 10000;

class LoginPage {
    
    get usernameInput () { return $('#username'); }
    get passwordInput () { return $('#password'); }
    get rememberMe () { return $('#remember-me'); }
    get logInButton () { return $('#submit'); }
    get failedLoginMessage () {return $('[class= "badge badge-pill badge-danger"]'); }

    async navigateToPage(){
        await BasePage.open('login');
    }
    
    async completeCredentials(username, password) {
        await BasePage.completeFiels(await this.usernameInput, username);
        await BasePage.completeFields(await this.passwordInput, password);
      }

    async logInWithEnter(username, password){
        this.completeCredentials(username, password);
        await this.logInButton.keys('Enter');
    }

    async logInWithSubmitButton(username, password){
        this.completeCredentials(username, password);
        await this.logInButton.click();
    }

    async logInWithRememberMeChecked(username, password){
        await BasePage.clickElement(this.rememberMe);
        await this.logInWithSubmitButton(username, password);
    }

}
export default new LoginPage();