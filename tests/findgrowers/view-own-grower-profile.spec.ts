import { test, expect } from '../fixtures';
import { FindGrowersPage } from '../pages/FindGrowersPage';

/**
 * Validate that the user's own grower profile is visible and accessible from Find Growers.
 */
test.describe('Own grower profile viewing', () => {
  test('View Own Grower Profile from Find Growers', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const findGrowersPage = new FindGrowersPage(page);

    await findGrowersPage.goto('/growers');
    await findGrowersPage.expectGrowerCardDetails('Test farm', 'Sydney, NSW, Australia', 'Dairy', 'Subscribe');

    await findGrowersPage.openGrowerProfile('Test farm');
    await expect(page.getByRole('heading', { name: 'Test farm' })).toBeVisible();
    await expect(page.getByText('Sydney, NSW, Australia')).toBeVisible();
    await expect(page.getByText('Dairy')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Subscribe' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    await expect(page.getByText('No upcoming events.')).toBeVisible();

    console.log('Own grower profile was viewed successfully.');
  });
});
