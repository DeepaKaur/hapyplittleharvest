import type { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly siteUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.siteUrl = process.env.SITE_URL ?? 'https://happylittleharvest.com';
  }

  async goto(path = '/') {
    await this.page.goto(`${this.siteUrl}${path}`);
  }
}
