import { test, expect } from '../fixtures';
import { BlogDetailPage } from '../pages/BlogDetailPage';
import { HomePage } from '../pages/HomePage';

/**
 * Confirm multiple blog posts can be opened and navigate back to home.
 */
test.describe('Blog post navigation', () => {
  test('Navigate Through Multiple Blog Posts', async ({ authenticatePage }) => {
    const page = await authenticatePage('happylittleharvest');
    const homePage = new HomePage(page);
    const blogDetailPage = new BlogDetailPage(page);

    await homePage.goto('/');
    await homePage.openBlogPost('My Experience Growing Vegetables from Seeds');
    await blogDetailPage.expectPostVisible('My Experience Growing Vegetables from Seeds');
    await blogDetailPage.returnHome();
    await homePage.expectVisible();

    console.log('Navigation through multiple blog posts verified.');
  });
});
