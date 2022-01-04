import LoginPage from '../pages/login.page';

describe('Login Test Cases', () => {
  beforeEach(async function  () {
    await LoginPage.navigateToPage(); 
  });

    it('Should display login page when browsing to the route', async () => {

      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
      await LoginPage.logInWithSubmitButton('jsmith@demo.io', 'Demo123!');

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should log into demo account when using enter key', async () => {
      await LoginPage.logInWithEnter('jsmith@demo.io', 'Demo123!');

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await LoginPage.logInWithSubmitButton('luciagonzalez@demo.io', 'Demo123!');

      expect(LoginPage.failedLoginMessage).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await LoginPage.logInWithSubmitButton();

      expect(LoginPage.failedLoginMessage).toHaveText('Error');
    });

    it('Should remember the inputs when the button is checked', async () => {
      await LoginPage.logInWithRememberMeChecked('jsmith@demo.io', 'Demo123!');
      await browser.newWindow('login');
  
      expect(LoginPage.usernameInput).toHaveText('jsmith@demo.io');
    }); 

 }); 
