import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'Account Settings' });
  readonly growerProfileHeading = this.page.getByRole('heading', { name: 'Grower Profile' });
  readonly updateProfileLink = this.page.getByRole('link', { name: 'Update' });
  readonly manageEventsLink = this.page.getByRole('link', { name: 'Manage Events' });

  async expectVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.growerProfileHeading).toBeVisible();
  }

  async expectGrowerProfile(name: string, location: string, category: string) {
    await expect(this.page.getByRole('heading', { name })).toBeVisible();
    await expect(this.page.getByText(location)).toBeVisible();
    await expect(this.page.getByText(category)).toBeVisible();
  }

  async openUpdateProfile() {
    await this.updateProfileLink.click();
  }

  async openManageEvents() {
    await this.manageEventsLink.click();
  }
}
