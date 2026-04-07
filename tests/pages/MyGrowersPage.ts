import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyGrowersPage extends BasePage {
  async expectEventCount() {
    //COunt the number of events visible on the page and compare with expected count  
    const eventCount = this.page.getByText(/Event \d+/).count();
    return eventCount;
    //
    }
  readonly heading = this.page.getByRole('heading', { name: 'My Growers' });
  readonly emptyMessage = this.page.getByText("You haven't subscribed to any growers yet.");

  async expectVisible() {
    await expect(this.heading).toBeVisible();
  }

  async expectEmptyMessageVisible() {
    await expect(this.emptyMessage).toBeVisible();
  }

  growerRow(name: string) {
    return this.page.locator(`:scope >> text=${name}`).first();
  }

  async expectGrowerVisible(name: string) {
    await expect(this.growerRow(name)).toBeVisible();
  }

  async expectGrowerNotVisible(name: string) {
    await expect(this.growerRow(name)).toHaveCount(0);
  }

  async expectGrowerCount(value: string) {
    await expect(this.page.getByText(value)).toBeVisible();
  }

  async expectEventVisible(eventText: string) {
    await expect(this.page.getByText(eventText)).toBeVisible();
  }
}
