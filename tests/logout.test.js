import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';
import HomePage from '../pages/home.page';
import BasePage from '../pages/base.page';

const LOGIN_PAGE = LoginPage;
const BASE_PAGE = BasePage;

const VALID_USERNAME = 'jsmith@demo.io';
const ANOTHER_VALID_USERNAME = 'nsmith@demo.io';
const VALID_PASSWORD = 'Demo123!';


describe('Logout Test Cases', () => {
  beforeEach(async function  () {
    await LOGIN_PAGE.navigateToPage(); 
  });

  it('Should logout successful when click on the Logout button', async () => {
    await LOGIN_PAGE.logInWithSubmitButton(VALID_USERNAME, VALID_PASSWORD);
    await BASE_PAGE.clickElement(LogoutPage.profileIcon);
    await BASE_PAGE.clickElement(LogoutPage.logoutButton);

    expect(LogoutPage.successfulLogoutMessage).toHaveText('Logout completed.');
  });
  
  it('Should close a session when you try to have 2 simultaneously', async () => {
    await LOGIN_PAGE.logInWithSubmitButton(VALID_USERNAME, VALID_PASSWORD);
    await browser.newWindow('login');
    await LOGIN_PAGE.logInWithSubmitButton(ANOTHER_VALID_USERNAME, VALID_PASSWORD);    
    browser.switchWindow('home');
    await browser.refresh();

    expect(HomePage.welcomeMsg).toHaveText('Welcome Nicole');
  });

});
