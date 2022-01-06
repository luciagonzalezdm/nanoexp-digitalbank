import BasePage from './base.page';
class HomePage extends BasePage{
       
get welcomeMsg () { return $('[class="page-title"]'); }

}
export default new HomePage();