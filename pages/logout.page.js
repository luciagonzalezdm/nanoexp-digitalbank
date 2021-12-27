const PAGE_TIMEOUT = 10000;

class LogoutPage {
    
    get profileIcon () { return $('[class="user-area dropdown show"]'); }
    get dropdownMenu () { return $('[class="user-menu dropdown-menu show"]'); }
    get logoutButton () { return $('[class="fa fa-power-off"]'); }

}
export default new LogoutPage();