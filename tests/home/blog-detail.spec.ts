import { test, expect } from '../fixtures';
import { BlogDetailPage } from '../pages/BlogDetailPage';
import { HomePage } from '../pages/HomePage';

/**
 * Verify that clicking the featured blog on home displays the detail page.
 */
test.describe('Blog detail navigation', () => {
  test('View Blog Post Detail Page', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const homePage = new HomePage(page);
    const blogDetailPage = new BlogDetailPage(page);

    await homePage.goto('/');
    await homePage.openFeaturedPost();
    await blogDetailPage.expectPostVisible('The Beginning!');

    console.log('Blog detail page loaded for The Beginning!.');
  });
});
