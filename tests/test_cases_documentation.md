 # Test Cases documentation 

 ## Login Tests

Objectives: ensure in start the proper functioning of the authentication system.

1. Should log in to the demo account.
The happy way: Verify if a user will be able to login with a valid username and valid password.

2. Should log in to the demo account using enter key.
Check if the 'Enter' key on the keyboard is working properly on the login page. Make access easy.

3. Should deny access and show error message.
The opposite way, important in terms of security: Verify that it isn't possible to access using a invalid username and invalid password. Must report the error with a clear and intuitive message.

4. Should deny access when the fields are empty.
Verify if a user cannot login when the fields are blank and submit button is clicked. The error message should be specific.

5. The Remember Me button should work
Check that using the button it is possible to remember the login details in the browser.
This test should check the remember me box, close the window and reopen it to find the session started.


 ### Observations

Implment forgot password functionality. It is absolutely necessary cause it would solve a frequent problem.

Implement a specific error message when fields are not completed. A client side validation message might be useful.



## Logout Tests

  Objectives: select test cases that contemplate the accessibility, security and correct functioning of the logout.

  1. Should logout successful when click on the Logout button.
  The happy way. To log out successfully the button must be accessible and easy to find.

  2. Should come back to login page when click on the back arrow.
  For security reasons, it is essential that the session be terminated when the back arrow is pressed in the browser.