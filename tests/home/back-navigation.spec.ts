import { test, expect } from '../fixtures';
import { BlogDetailPage } from '../pages/BlogDetailPage';
import { HomePage } from '../pages/HomePage';

/**
 * Verify the back navigation path from a blog detail page returns to home.
 */
test.describe('Blog back navigation', () => {
  test('Navigate Back to Home from Blog Posts', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const homePage = new HomePage(page);
    const blogDetailPage = new BlogDetailPage(page);

    await homePage.goto('/');
    await homePage.openBlogPost('How to Start Growing Your Own Vegetables');
    await blogDetailPage.expectPostVisible('How to Start Growing Your Own Vegetables');
    await blogDetailPage.returnHome();
    await expect(page).toHaveURL(/\/$/);
    await homePage.expectVisible();

    console.log('Back navigation from blog detail returned to home page.');
  });
});
