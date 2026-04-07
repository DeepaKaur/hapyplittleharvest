import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BlogDetailPage extends BasePage {
  readonly homeLink = this.page.getByRole('link', { name: 'Happy Little Harvest' }).first();

  async expectPostVisible(title: string) {
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible();
  }

  async returnHome() {
    await expect(this.homeLink).toBeVisible();
    await this.homeLink.click();
  }
}
