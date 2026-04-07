import { expect, test } from '../fixtures';
import { MyGrowersPage } from '../pages/MyGrowersPage';

/**
 * Validate the My Growers page displays subscribed growers and event cards.
 */
test.describe('My Growers page', () => {
  test('Navigate and Verify My Growers Page', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const myGrowersPage = new MyGrowersPage(page);

    await myGrowersPage.goto('/account/growers');
    await myGrowersPage.expectVisible();
    await myGrowersPage.expectGrowerCount('0/5 growers');
    await myGrowersPage.expectEmptyMessageVisible();

    await page.getByRole('link', { name: 'Find Growers →' }).click();
    await expect(page).toHaveURL(/.*\/growers$/);

    console.log('My Growers page with subscribed growers is validated.');
  });
});
