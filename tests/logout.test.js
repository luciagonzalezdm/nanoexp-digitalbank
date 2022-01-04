import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';
import HomePage from '../pages/home.page';
import BasePage from '../pages/base.page';

describe('Logout Test Cases', () => {
  beforeEach(async function  () {
    await LoginPage.navigateToPage(); 
  });

  it('Should logout successful when click on the Logout button', async () => {
    await LoginPage.logInWithSubmitButton('jsmith@demo.io', 'Demo123!');
    await BasePage.clickElement(LogoutPage.profileIcon);
    await BasePage.clickElement(LogoutPage.logoutButton);

    expect(LogoutPage.successfulLogoutMessage).toHaveText('Logout completed.');
  });
  
  it('Should close a session when you try to have 2 simultaneously', async () => {
    await LoginPage.logInWithSubmitButton('jsmith@demo.io', 'Demo123!');

    await browser.newWindow('login');
    await LoginPage.logInWithSubmitButton('nsmith@demo.io', 'Demo123!');
    await LoginPage.logInWithSubmitButton();

    
    browser.switchWindow('home');
    await browser.refresh();
    expect(HomePage.welcomeMsg).toHaveText('Welcome Nicole');
  });

});
