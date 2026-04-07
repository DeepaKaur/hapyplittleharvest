import { test as base } from '@playwright/test';

type AuthenticatePageFixture = (userType: string) => Promise<any>;

export const test = base.extend<{
  authenticatePage: AuthenticatePageFixture;
}>({
  authenticatePage: async ({ page }, use) => {
    const authenticatePage = async (userType: string) => {
      // Navigate to the site 
      //store the site url in an environment variable for better maintainability
      const siteUrl = process.env.SITE_URL;
      if (!siteUrl) {
        throw new Error('SITE_URL must be set in .env file');
      }
      await page.goto(siteUrl);

      // Click on sign in - assuming there's a sign in button
      // You may need to adjust the selector based on the actual page
      //create a selector for email and password input fields and login button for better maintainability
      const emailSelector = page.getByRole('textbox', { name: 'Email' });
      const passwordSelector = page.getByRole('textbox', { name: 'Password' });
      const loginButtonSelector = page.getByRole('button', { name: 'Sign in' });

      //create selector for sign in button for better maintainability
      const signInButtonSelector = page.getByRole('link', { name: 'Sign in' });
         await signInButtonSelector.click(); // or whatever the selector is 


      // Fill in login credentials from .env
      const email = process.env.LOGIN_EMAIL;
      const password = process.env.LOGIN_PASSWORD;

      if (!email || !password) {
        throw new Error('LOGIN_EMAIL and LOGIN_PASSWORD must be set in .env file');
      }

      // Assuming email input has name="email" or similar
      await emailSelector.fill(email);
      // Assuming password input
      await passwordSelector.fill(password);

      // Click login button
      await loginButtonSelector.click(); // or whatever the login button is

      // Wait for login to complete - perhaps wait for navigation or a specific element
      await page.waitForURL('**/'); // adjust based on post-login URL

      return page;
    };

    await use(authenticatePage);
  },
});

export { expect } from '@playwright/test';