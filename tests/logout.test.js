import LoginPage from './login.page';
import LogoutPage from './logout.page';
import HomePage from './home.page';

const VALID_USERNAME = 'jsmith@demo.io';
const ANOTHER_VALID_USERNAME = 'nsmith@demo.io';
const VALID_PASSWORD = 'Demo123!';


describe('Logout Test Cases', () => {
  beforeEach(async function  () {
    await LoginPage.navigateToPage(); 
    await LoginPage.logInWithSubmitButton(VALID_USERNAME, VALID_PASSWORD);
  });

  it('Should logout successful when click on the Logout button', async () => {
    await super.clickElement(LogoutPage.profileIcon);
    await super.clickElement(LogoutPage.logoutButton);

    expect(LogoutPage.successfulLogoutMessage).toHaveText('Logout completed.');
  });
  
  it('Should close a session when you try to have 2 simultaneously', async () => {
    await browser.newWindow('login');
    await LoginPage.logInWithSubmitButton(ANOTHER_VALID_USERNAME, VALID_PASSWORD);    
    browser.switchWindow('home');
    await browser.refresh();

    expect(HomePage.welcomeMsg).toHaveText('Welcome Nicole');
  });

});
