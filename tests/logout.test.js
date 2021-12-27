import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';

describe('DigitalBank', () => {

  it('Should logout successful when click on the Logout button', async () => {
    await LoginPage.open('login');
    await LoginPage.logIn('jsmith@demo.io', 'Demo123!');
    await LoginPage.clickElement(LoginPage.signInButton);
    await LoginPage.clickElement(LogoutPage.profileIcon)
    await LogoutPage.dropdownMenu.selectByIndex(5);

    expect(browser).toHaveUrlContaining('login');
  });
  
  it('Should come back to login page when click on the back arrow', async () => {
    await LoginPage.open('login');
    await LoginPage.logIn('jsmith@demo.io', 'Demo123!');
    await LoginPage.clickElement(LoginPage.signInButton);
    await LoginPage.clickElement(LogoutPage.profileIcon)
    await browser.back()
    expect(browser).toHaveUrlContaining('login');
  });

});
