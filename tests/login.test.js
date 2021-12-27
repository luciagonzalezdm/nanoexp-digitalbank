import BasePage from '../pages/base.page';
import LoginPage from '../pages/login.page';

describe('DigitalBank', () => {

    //example test
    it('Should display login page when browsing to the route', async () => {
      await BasePage.open('login');
      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
     
      await BasePage.open('login');
      await LoginPage.logIn('jsmith@demo.io', 'Demo123!');
      await BasePage.clickElement(LoginPage.signInButton);
      expect(browser).toHaveUrlContaining('home');

    });

    it('Should log into demo account when using enter key', async () => {
      await BasePage.open('login');
      await LoginPage.logIn('jsmith@demo.io', 'Demo123!');
      let loginButton = await $('[id="submit"]');
      await loginButton.keys('Enter');
      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await BasePage.open('login');
      await LoginPage.logIn('luciagonzalez@demo.io', 'Demo123!');
      await BasePage.clickElement(LoginPage.signInButton);
      expect(LoginPage.alert).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await BasePage.open('login');
      await BasePage.clickElement(LoginPage.signInButton);
      expect(LoginPage.alert).toHaveText('Error');
    });

    it.skip('Should remember the session when the button is checked', async () => {
      await BasePage.open('login');
      await LoginPage.logIn('jsmith@demo.io', 'Demo123!');
      await BasePage.clickElement(LoginPage.rememberMe);
      await BasePage.clickElement(LoginPage.signInButton);

      //tiene que cerrar la pestaña y volver a abrirla

      //let welcomeMsg = await $('[class="active"]') ;
      //expect(welcomeMsg).toHaveText('Welcome Josh');
    }); 

 }); 