import { test, expect } from '../fixtures';
import { FindGrowersPage } from '../pages/FindGrowersPage';

/**
 * Validate the Find Growers page search, filter, and grower card layout.
 */
test.describe('Find Growers page', () => {
  test('Verify Find Growers Page Functionality', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const findGrowersPage = new FindGrowersPage(page);

    await findGrowersPage.goto('/growers');
    await findGrowersPage.expectVisible();
    await expect(page.getByRole('link', { name: 'Test farm' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tester Farm 1' })).toBeVisible();

    await findGrowersPage.farmNameSearch.fill('Tester Farm 1');
    await findGrowersPage.farmNameSearch.press('Enter');
    await expect(page.getByRole('link', { name: 'Tester Farm 1' })).toBeVisible();

    await findGrowersPage.clickFilter('Dairy');
    await expect(page.getByRole('link', { name: 'Test farm' })).toBeVisible();

    console.log('Find Growers page search and filter functionality passed.');
  });
});
