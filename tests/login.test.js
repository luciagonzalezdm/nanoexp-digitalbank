describe('DigitalBank', () => {

    it('Should enter the site', async () => {
      browser.url('login');
    });

    it('Should log in to the demo account', async () => {
      browser.url('login');
      
      let username = await $('[id="username"]');
      await username.setValue('jsmith@demo.io');

       let password = await $('[id="password"]');
      await password.setValue('Demo123!');

      let loginButton = $('[id="submit"]');
      await loginButton.click()


    });

 });