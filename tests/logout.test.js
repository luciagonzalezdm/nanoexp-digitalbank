import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';

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
  
  it.skip('Should come back to login page when click on the back arrow', async () => {
    await LoginPage.open('login');
    await LoginPage.completeFields(LoginPage.usernameInput, 'jsmith@demo.io');
    await LoginPage.completeFields(LoginPage.passwordInput, 'Demo123!');

    await LoginPage.logInWithSubmitButton();
    await LoginPage.clickElement(LogoutPage.profileIcon);
    await browser.forward();
    expect(browser).toHaveUrlContaining('login');
  });

});
