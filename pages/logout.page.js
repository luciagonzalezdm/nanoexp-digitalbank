class LogoutPage extends BasePage {
    
    get profileIcon () { return $('[class="user-avatar rounded-circle"]'); }
    get logoutButton () { return $('[href="/bank/logout"]'); }
    get successfulLogoutMessage () { return $('[class="badge badge-pill badge-success"]'); }
    get myProfileOption () { return $('[=Logout'); }
}
export default new LogoutPage();



