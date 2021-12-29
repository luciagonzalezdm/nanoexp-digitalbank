const PAGE_TIMEOUT = 10000;

class LogoutPage {
    
    get profileIcon () { return $('[class="user-avatar rounded-circle"]'); }
    get dropdownMenu () { return $('[class="user-menu dropdown-menu show"]'); }
    get logoutButton () { return $('[href="/bank/logout"]'); }
    get successfulLogoutMessage () { return $('[class="badge badge-pill badge-success"]'); }

}
export default new LogoutPage();