import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class GrowerProfilePage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'Grower Profile' });
  readonly farmNameInput = this.page.getByRole('textbox', { name: 'Farm Name' });
  readonly cityInput = this.page.getByRole('textbox', { name: 'City' });
  readonly stateInput = this.page.getByRole('textbox', { name: 'State / Province' });
  readonly countryInput = this.page.getByRole('textbox', { name: 'Country' });
  readonly updateButton = this.page.getByRole('button', { name: 'Update Profile' });
  readonly cancelLink = this.page.getByRole('link', { name: 'Cancel' });

  async expectFormPreFilled(name: string, city: string, state: string, country: string) {
    await expect(this.farmNameInput).toHaveValue(name);
    await expect(this.cityInput).toHaveValue(city);
    await expect(this.stateInput).toHaveValue(state);
    await expect(this.countryInput).toHaveValue(country);
  }

  async cancel() {
    await this.cancelLink.click();
  }
}
