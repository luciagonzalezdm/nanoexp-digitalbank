import BasePage from "./base.page";
const PAGE_TIMEOUT = 10000;

class LoginPage extends BasePage {
    
    get usernameInput () { return $('#username'); }
    get passwordInput () { return $('#password'); }
    get rememberMe () { return $('#remember-me'); }
    get logInButton () { return $('#submit'); }
    get failedLoginMessage () {return $('[class= "badge badge-pill badge-danger"]'); }

    async navigateToPage(){
        await super.open('login');
    }
    
    async completeCredentials(username, password) {
        await super.completeFiels(await this.usernameInput, username);
        await super.completeFields(await this.passwordInput, password);
      }

    async logInWithEnter(username, password){
        this.completeCredentials(username, password);
        await super.pressEnterKey(this.logInButton);
    }

    async logInWithSubmitButton(username, password){
        this.completeCredentials(username, password);
        await super.clickElement(this.logInButton);
    }

    async logInWithRememberMeChecked(username, password){
        await super.clickElement(this.rememberMe);
        await this.logInWithSubmitButton(username, password);
    }

}
export default new LoginPage();