import LoginPage from '../pages/login.page';

const VALID_USERNAME = 'jsmith@demo.io'
const VALID_PASSWORD = 'Demo123!'


describe('Login Test Cases', () => {
  beforeEach(async function  () {
    await LoginPage.navigateToPage(); 
  });

    it('Should display login page when browsing to the route', async () => {

      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
      await LoginPage.logInWithSubmitButton(VALID_USERNAME, VALID_PASSWORD);

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should log into demo account when using enter key', async () => {
      await LoginPage.logInWithEnter(VALID_USERNAME, VALID_PASSWORD);

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await LoginPage.logInWithSubmitButton('luciagonzalez@demo.io', VALID_PASSWORD);

      expect(LoginPage.failedLoginMessage).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await LoginPage.logInWithSubmitButton();

      expect(LoginPage.failedLoginMessage).toHaveText('Error');
    });

    it('Should remember the inputs when the button is checked', async () => {
      await LoginPage.logInWithRememberMeChecked(VALID_USERNAME, VALID_PASSWORD);
      await browser.newWindow('login');
  
      expect(LoginPage.usernameInput).toHaveText(VALID_USERNAME);
    }); 

 }); 
