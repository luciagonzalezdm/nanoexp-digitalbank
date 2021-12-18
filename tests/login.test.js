describe('DigitalBank', () => {

    //example test
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
      await browser.pause(5000);

    });

    it('Should log in to the demo account using enter key', async () => {
      browser.url('login');
      
      let username = await $('[id="username"]');
      await username.setValue('jsmith@demo.io');

       let password = await $('[id="password"]');
      await password.setValue('Demo123!');

      let loginButton = $('[id="submit"]');
      await loginButton.keys('Enter');
      await browser.pause(5000);

    });

    it('Should deny access and show error message', async () => {
      browser.url('login');
      
      let username = await $('[id="username"]');
      await username.setValue('luciagonzalez@demo.io');

       let password = await $('[id="password"]');
      await password.setValue('Demo123!');

      let loginButton = $('[id="submit"]');
      await loginButton.click()

      let alert = await $('[class= "badge badge-pill badge-danger"]');
      console.log(await alert.getProperty('alert'));
      await browser.pause(5000);

    });

    it('Should deny access without filling the fields', async () => {
      browser.url('login');

      let loginButton = $('[id="submit"]');
      await loginButton.click();
      await browser.pause(5000);

    });

    it('Remember Me button should work', async () => {
      browser.url('login');
      
      let username = await $('[id="username"]');
      await username.setValue('jsmith@demo.io');

      let password = await $('[id="password"]');
      await password.setValue('Demo123!');

      let rememberMe = $('[class="checkbox"]');
      if(await rememberMe.isClickable()){
        await rememberMe.click();
      }

      let loginButton = $('[id="submit"]');
      await loginButton.click();

      await browser.close();
      browser.url('login');
      await browser.pause(5000);

    }); 

 }); 