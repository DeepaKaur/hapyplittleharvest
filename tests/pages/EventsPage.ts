import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class EventsPage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'My Events' });
  readonly createEventButton = this.page.getByRole('button', { name: '+ Create Event' });
  readonly emptyMessage = this.page.getByText('No events yet — create your first event.');

  async expectVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.createEventButton).toBeVisible();
    await expect(this.emptyMessage).toBeVisible();
  }
}
