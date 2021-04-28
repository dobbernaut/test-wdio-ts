import { Base } from '@pages/base';
import { HomeElements } from './home-elements';

export class Home extends Base {

  home = new HomeElements();

  open(): void {
    browser.url('/');
  }

  search(search: string): void {
    this.home.searchBox.setValue(search);
    this.home.search.click();
    this.home.searchResultsHeading.waitForExist();
  }

  toggleWatchlistDropdown(): void {
    this.home.openWatchlistDropdown.click();
    this.home.watchlistDropdown.waitForExist();
  }

  viewWatchlist(): void {
    this.toggleWatchlistDropdown();
    this.home.viewWatchlist.click();
  }

  openMainCategory(category: string): void {
    this.home.mainCategory.waitForExist();
    let categoryFound = false;
    for (const mainCategory of this.home.mainCategories) {
      if (mainCategory.getText() === category) {
        mainCategory.click();
        categoryFound = true;
        break;
      }
    }
    if (!categoryFound) {
      fail(`Category "${category}" was not found from main categories`);
    }
  }

  openSubcategory(category: string): void {
    this.home.subcategory.waitForExist();
    let subcategoryFound = false;
    for (const subcategory of this.home.subcategories) {
      if (subcategory.getText() === category) {
        subcategory.click();
        subcategoryFound = true;
        break;
      }
    }
    if (!subcategoryFound) {
      fail(`Subcategory "${category}" was not found from subcategories`);
    }
  }


}
