import LoginPage from '../pages/login.page';

describe('Login Test Cases', () => {

    it('Should display login page when browsing to the route', async () => {
      await LoginPage.open('login');
      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
     
      await LoginPage.open('login');
      await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
      await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
      await LoginPage.logInWithSubmitButton();
      expect(browser).toHaveUrlContaining('home');

    });

    it('Should log into demo account when using enter key', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
      await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
      await LoginPage.logInWithEnter();
      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
      await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
      await LoginPage.logInWithSubmitButton();
      expect(LoginPage.failedLoginMessage).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await LoginPage.open('login');
      await LoginPage.logInWithSubmitButton();
      expect(LoginPage.failedLoginMessage).toHaveText('Error');
    });

    it('Should remember the inputs when the button is checked', async () => {
      await LoginPage.open('login');
      await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
      await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
      await LoginPage.clickElement(LoginPage.rememberMe);
      await LoginPage.logInWithSubmitButton();

      await browser.newWindow('login');
      
      expect(LoginPage.usernameInput).toHaveText('jsmith@demo.io');
    }); 

 }); 
