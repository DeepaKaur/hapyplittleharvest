import { test, expect } from '../fixtures';
import { AccountPage } from '../pages/AccountPage';
import { GrowerProfilePage } from '../pages/GrowerProfilePage';

/**
 * Validate the grower profile update page pre-fills the current profile values.
 */
test.describe('Grower profile management', () => {
  test('View and Update Grower Profile', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const accountPage = new AccountPage(page);
    const growerProfilePage = new GrowerProfilePage(page);

    await accountPage.goto('/account');
    await accountPage.openUpdateProfile();
    await growerProfilePage.expectFormPreFilled('Test farm', 'Sydney', 'NSW', 'Australia');
    await expect(growerProfilePage.updateButton).toBeVisible();
    await growerProfilePage.cancel();
    await expect(page).toHaveURL(/.*\/account$/);

    console.log('Grower profile update form pre-fill verified.');
  });
});
