import LOGIN_PAGE from '../pages/login.page';
const LOGIN_PAGE = LOGIN_PAGE;

const VALID_USERNAME = 'jsmith@demo.io'
const VALID_PASSWORD = 'Demo123!'


describe('Login Test Cases', () => {
  beforeEach(async function  () {
    await LOGIN_PAGE.navigateToPage(); 
  });

    it('Should display login page when browsing to the route', async () => {

      expect(browser).toHaveUrlContaining('login');
    });

    it('Should log into demo account when valid data is entered', async () => {
      await LOGIN_PAGE.logInWithSubmitButton(VALID_USERNAME, VALID_PASSWORD);

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should log into demo account when using enter key', async () => {
      await LOGIN_PAGE.logInWithEnter(VALID_USERNAME, VALID_PASSWORD);

      expect(browser).toHaveUrlContaining('home');

    });

    it('Should deny access when invalid data is entered', async () => {
      await LOGIN_PAGE.logInWithSubmitButton('luciagonzalez@demo.io', VALID_PASSWORD);

      expect(LOGIN_PAGE.failedLoginMessage).toHaveText('Error');
       
    });

    it('Should deny access when fields are empty', async () => {
      await LOGIN_PAGE.logInWithSubmitButton();

      expect(LOGIN_PAGE.failedLoginMessage).toHaveText('Error');
    });

    it('Should remember the inputs when the button is checked', async () => {
      await LOGIN_PAGE.logInWithRememberMeChecked(VALID_USERNAME, VALID_PASSWORD);
      await browser.newWindow('login');
  
      expect(LOGIN_PAGE.usernameInput).toHaveText('jsmith@demo.io');
    }); 

 }); 
