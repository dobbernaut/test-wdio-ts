import { expect } from 'chai';
import { Base } from '@page/trademe/base';
import { HomeElements } from './home-elements';

export class Home extends Base {

  home = new HomeElements();

  async open(): Promise<void> {
    await browser.url('/');
  }

  async search(search: string): Promise<void> {
    await (await this.home.searchBox).setValue(search);
    await (await this.home.search).click();
    await (await this.home.searchResultsHeading).waitForExist();
  }

  async toggleWatchlistDropdown(): Promise<void> {
    await (await this.home.openWatchlistDropdown).click();
    await (await this.home.watchlistDropdown).waitForExist();
  }

  async viewWatchlist(): Promise<void> {
    await this.toggleWatchlistDropdown();
    await (await this.home.viewWatchlist).click();
  }

  async openMainCategory(category: string): Promise<void> {
    await (await this.home.mainCategory).waitForExist();
    let categoryFound = false;
    for (const mainCategory of await this.home.mainCategories) {
      if (await mainCategory.getText() === category) {
        mainCategory.click();
        categoryFound = true;
        break;
      }
    }
    if (!categoryFound) {
      expect.fail(`Category "${category}" was not found from main categories`);
    }
  }

  async openSubcategory(category: string): Promise<void> {
    await (await this.home.subcategory).waitForExist();
    let subcategoryFound = false;
    for (const subcategory of await this.home.subcategories) {
      if (await subcategory.getText() === category) {
        subcategory.click();
        subcategoryFound = true;
        break;
      }
    }
    if (!subcategoryFound) {
      expect.fail(`Subcategory "${category}" was not found from subcategories`);
    }
  }

}
