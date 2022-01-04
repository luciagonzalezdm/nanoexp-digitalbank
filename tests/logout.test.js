import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';
import HomePage from '../pages/home.page';
import BasePage from '../pages/base.page';

const LOGIN_PAGE = LoginPage;
const BASE_PAGE = BasePage;


describe('Logout Test Cases', () => {
  beforeEach(async function  () {
    await LOGIN_PAGE.navigateToPage(); 
  });

  it('Should logout successful when click on the Logout button', async () => {
    await LOGIN_PAGE.logInWithSubmitButton('jsmith@demo.io', 'Demo123!');
    await BASE_PAGE.clickElement(LogoutPage.profileIcon);
    await BASE_PAGE.clickElement(LogoutPage.logoutButton);

    expect(LogoutPage.successfulLogoutMessage).toHaveText('Logout completed.');
  });
  
  it('Should close a session when you try to have 2 simultaneously', async () => {
    await LOGIN_PAGE.logInWithSubmitButton('jsmith@demo.io', 'Demo123!');

    await browser.newWindow('login');
    await LOGIN_PAGE.logInWithSubmitButton('nsmith@demo.io', 'Demo123!');
    await LOGIN_PAGE.logInWithSubmitButton();

    
    browser.switchWindow('home');
    await browser.refresh();
    expect(HomePage.welcomeMsg).toHaveText('Welcome Nicole');
  });

});
