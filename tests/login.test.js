import LoginPage from '../pages/login.page';

describe('Login Test Cases', () => {

    it('Should display login page when browsing to the route', async () => {
      await LoginPage.open('login');
      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
     
      await LoginPage.open('login');
      await LoginPage.completeFields('jsmith@demo.io', 'Demo123!');
      await LoginPage.clickElement(LoginPage.logInButton);
      expect(browser).toHaveUrlContaining('home');

    });

    it.only('Should log into demo account when using enter key', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields('jsmith@demo.io', 'Demo123!');
      await LoginPage.logInWithEnter();
      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields('luciagonzalez@demo.io', 'Demo123!');
      await LoginPage.clickElement(LoginPage.logInButton);
      expect(LoginPage.failedLoginMessage).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await LoginPage.open('login');
      await LoginPage.clickElement(LoginPage.logInButton);
      expect(LoginPage.failedLoginMessage).toHaveText('Error');
    });

    it('Should remember the session when the button is checked', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields('jsmith@demo.io', 'Demo123!');
      await LoginPage.clickElement(LoginPage.rememberMe);
      await LoginPage.clickElement(LoginPage.logInButton);

      await browser.newWindow('http://google.com');
     
      window.close(); // no funciona
      await LoginPage.open('home');
      let welcomeMsg = await $('[class="active"]') ;
      expect(welcomeMsg).toHaveText('Welcome Josh');
    }); 

 }); 