const PAGE_TIMEOUT = 10000;

class HomePage {
       
        get welcomeMsg () { return $('[class="page-title"]'); }

}
export default new HomePage();