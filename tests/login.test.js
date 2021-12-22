import BasePage from '../pages/base';

describe('DigitalBank', () => {

    //example test
    it.skip('Should display login page when browsing to the route', async () => {
      await BasePage.open('login');
     // expect(browser.title().value()).toMatch('login-page');
    });

    it('Should log into demo account when valid data is entered', async () => {
     
      await BasePage.open('login');
      loginPage.logIn('jsmith@demo.io', 'Demo123!');
      let loginButton = $('[id="submit"]');
      await loginButton.click()

    });

    it.skip('Should log into demo account when using enter key', async () => {
      await BasePage.open('login');
      loginPage.logIn('jsmith@demo.io', 'Demo123!');

      let loginButton = $('[id="submit"]');
      await loginButton.keys('Enter');

    });

    it.skip('Should deny access when invalid data is entered', async () => {
      await BasePage.open('login');
      loginPage.logIn('luciagonzalez@demo.io', 'Demo123!');

      let loginButton = $('[id="submit"]');
      await loginButton.click()

      // let alert = $('[class= "badge badge-pill badge-danger"]');
      // expect(alert.getText()).to.include.string('Error','Error: no se mostró el mensaje esperado');
       
    });

    it.skip('Should deny access when fields are empty', async () => {
      await BasePage.open('login');

      let loginButton = $('[id="submit"]');
      await loginButton.click();

    });

    it.skip('Should remember the session when the button is checked', async () => {
      await BasePage.open('login');
      loginPage.logIn('jsmith@demo.io', 'Demo123!');

      let rememberMe = $('[class="checkbox"]');
      if(await rememberMe.isClickable()){
        await rememberMe.click();
      }

      let loginButton = $('[id="submit"]');
      await loginButton.click();

    }); 

 }); 