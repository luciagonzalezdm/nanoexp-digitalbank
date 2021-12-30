import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';
import HomePage from '../pages/home.page';

describe('Logout Test Cases', () => {

  it('Should logout successful when click on the Logout button', async () => {
    await LoginPage.open('login');
    await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
    await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
    await LoginPage.logInWithSubmitButton();

    await LoginPage.clickElement(LogoutPage.profileIcon);
    await LoginPage.clickElement(LogoutPage.logoutButton);
    expect(LogoutPage.successfulLogoutMessage).toHaveText('Logout completed.');
  });
  
  it('Should close a session when you try to have 2 simultaneously', async () => {
    await LoginPage.open('login');
    await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
    await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
    await LoginPage.logInWithSubmitButton();

    await browser.newWindow('login');
    await LoginPage.completeFields(LoginPage.usernameInput, 'nsmith@demo.io');
    await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');
    await LoginPage.logInWithSubmitButton();

    
    browser.switchWindow('home');
    await browser.refresh();
    expect(HomePage.welcomeMsg).toHaveText('Welcome Nicole');
  });

});
