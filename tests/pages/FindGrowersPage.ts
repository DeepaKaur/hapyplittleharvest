import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FindGrowersPage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'Find Growers' });
  readonly subscribedCount = this.page.getByText(/\d+\/5 subscribed/);
  readonly farmNameSearch = this.page.getByRole('searchbox', { name: 'Search by farm name' });
  readonly citySearch = this.page.getByRole('searchbox', { name: 'Search by city' });
  readonly stateSearch = this.page.getByRole('searchbox', { name: 'Search by state or province' });
  readonly countrySearch = this.page.getByRole('searchbox', { name: 'Search by country' });

  async expectVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.farmNameSearch).toBeVisible();
    await expect(this.citySearch).toBeVisible();
    await expect(this.stateSearch).toBeVisible();
    await expect(this.countrySearch).toBeVisible();
  }

  async clickFilter(name: string) {
    await this.page.getByRole('button', { name }).click();
  }

  async openGrowerProfile(name: string) {
    await this.page.getByRole('link', { name }).click();
  }

  growerActionButton(name: string, action: 'Subscribe' | 'Unsubscribe') {
    return this.page.getByRole('link', { name }).locator('..').locator('button').filter({ hasText: action });
  }

  async subscribeGrower(name: string) {
    await this.growerActionButton(name, 'Subscribe').click();
  }

  async unsubscribeGrower(name: string) {
    await this.growerActionButton(name, 'Unsubscribe').click();
  }

  async expectSubscriptionCount(value: string) {
    await expect(this.page.getByText(new RegExp(value.replace('/', '\\/')))).toBeVisible();
  }

  async expectGrowerCardDetails(name: string, location: string, category: string, action: 'Subscribe' | 'Unsubscribe') {
    const growerCard = this.page.getByRole('link', { name }).locator('xpath=ancestor::*[.//button][2]');
    await expect(growerCard).toBeVisible();
    await expect(growerCard.getByText(location)).toBeVisible();
    await expect(growerCard.getByText(category)).toBeVisible();
    await expect(growerCard.getByRole('button', { name: action })).toBeVisible();
  }

  async expectGrowerSubscribedBadge(name: string) {
    const badge = this.page.getByRole('link', { name }).locator('..').getByText('Subscribed');
    await expect(badge).toBeVisible();
  }
}
