import { test, expect } from '../fixtures';
import { AccountPage } from '../pages/AccountPage';

/**
 * Verify account settings, grower profile, and newsletter subscription state.
 */
test.describe('Account page validation', () => {
  test('Navigate and Verify Account Page', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const accountPage = new AccountPage(page);

    await accountPage.goto('/account');
    await accountPage.expectVisible();
    await accountPage.expectGrowerProfile('Test farm', 'Sydney, NSW, Australia', 'Dairy');
    await expect(page.getByRole('link', { name: 'Update' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Manage Events' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Newsletter Subscriptions' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Weekly Digest' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Product Updates' })).toBeVisible();

    console.log('Account page content and grower profile details verified.');
  });
});
