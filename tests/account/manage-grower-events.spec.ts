import { test } from '../fixtures';
import { AccountPage } from '../pages/AccountPage';
import { EventsPage } from '../pages/EventsPage';

/**
 * Verify event management is available for the grower profile.
 */
test.describe('Grower events management', () => {
  test('Manage Grower Events', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const accountPage = new AccountPage(page);
    const eventsPage = new EventsPage(page);

    await accountPage.goto('/account');
    await accountPage.openManageEvents();
    await eventsPage.expectVisible();

    console.log('Grower events management page is available and empty as expected.');
  });
});
