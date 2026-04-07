import { test, expect } from './fixtures';

test.describe('Test group', () => {
  test('seed test for happylittleharvest user', async ({ authenticatePage }) => {
    // Authenticate and get the page
    const page = await authenticatePage('happylittleharvest');
    // Now the page is authenticated and on the site
    //Navigate to different pages for planner agent to analyze the user flow and gather data for seed generation.
    await page.goto('https://happylittleharvest.com/growers');
    // Add assertions or interactions as needed.
  });
});
