import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly title = this.page.getByRole('heading', { name: 'Happy Little Harvest' });
  readonly tagline = this.page.getByRole('heading', { name: 'Sharing experiences, little secrets, and the joy of growing your own food.' });
  readonly moreStoriesHeading = this.page.getByRole('heading', { name: 'More Stories' });
  readonly featuredPost = this.page.getByLabel('The Beginning!');

  async expectVisible() {
    await expect(this.title).toBeVisible();
    await expect(this.tagline).toBeVisible();
    await expect(this.moreStoriesHeading).toBeVisible();
  }

  async openFeaturedPost() {
    await expect(this.featuredPost).toBeVisible();
    await this.featuredPost.click();
  }

  async openBlogPost(title: string) {
    const postLink = this.page.getByRole('link', { name: title }).first();
    await expect(postLink).toBeVisible();
    await postLink.click();
  }
}
