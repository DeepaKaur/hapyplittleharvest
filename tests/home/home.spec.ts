import { test, expect } from '../fixtures';
import { HomePage } from '../pages/HomePage';

/**
 * Verify the home page loads successfully and displays blog navigation elements.
 */
test.describe('Home page navigation', () => {
  test('Verify Home page and blog navigation', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const homePage = new HomePage(page);

    await homePage.goto('/');
    await homePage.expectVisible();
    await expect(page.getByLabel('The Beginning!')).toBeVisible();

    console.log('Home page navigation verified successfully.');
  });
});
