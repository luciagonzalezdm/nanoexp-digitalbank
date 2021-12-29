import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';

describe('Logout Test Cases', () => {

  it.skip('Should logout successful when click on the Logout button', async () => {
    await LoginPage.open('login');
    await LoginPage.completeFields('jsmith@demo.io', 'Demo123!');
    await LoginPage.clickElement(LoginPage.logInButton);
    await LoginPage.clickElement(LogoutPage.profileIcon);
    await LogoutPage.dropdownMenu.selectByIndex(5);

    expect(browser).toHaveUrlContaining('login');
  });
  
  it.skip('Should come back to login page when click on the back arrow', async () => {
    await LoginPage.open('login');
    await LoginPage.completeFields('jsmith@demo.io', 'Demo123!');
    await LoginPage.clickElement(LoginPage.logInButton);
    await LoginPage.clickElement(LogoutPage.profileIcon);
    await browser.forward();
    expect(browser).toHaveUrlContaining('login');
  });

});
