** #Documentation **

*Project name:* nanoexp-digitalbank
*Author:* Lucía González
*Date:* 17/12/2021
*Version:* 1.0


This project presents an accurate selection of tests applied to the Digital Bank website, which ensure in start the proper functioning of the authentication system.


** ##Login Tests**


1. Should log in to the demo account.
The happy way: Verify if a user will be able to login with a valid username and valid password.

2. Should log in to the demo account using enter key.
Check if the 'Enter' key on the keyboard is working properly on the login page. Make access easy.

3.Should deny access and show error message.
The opposite way, important in terms of security: Verify that it isn't possible to access using a invalid username and invalid password. Must report the error with a clear and intuitive message.

4. Should deny access when the fields are empty.
Verify if a user cannot login when the fields are blank and submit button is clicked. The error message should be specific.

5. The Remember Me button should work
Check that using the button it is possible to remember the login details in the browser.
This test should check the remember me box, close the window and reopen it to find the session started.


** ### Observations**

Implment forgot password functionality. It is absolutely necessary cause it would solve a frequent problem.

Implement a specific error message when fields are not completed. A client side validation message might be useful.
