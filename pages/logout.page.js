const PAGE_TIMEOUT = 10000;

class LogoutPage {
    
    get profileIcon () { return $('[class="user-avatar rounded-circle"]'); }
    get logoutButton () { return $('[href="/bank/logout"]'); }
    get successfulLogoutMessage () { return $('[class="badge badge-pill badge-success"]'); }
    get myProfileOption () { return $('[href="/bank/user/profile"]'); }
}
export default new LogoutPage();