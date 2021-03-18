export class HomeElements {

  get searchBox() { return $('#searchString'); }
  get search() { return $('button[value="Search"]'); }
  get searchResultsHeading() { return $('h1[class*="search-results"]'); }

  get openWatchlistDropdown() { return $('#SiteHeader_SiteTabs_BarOfSearch_watchlistDropdownOpen'); }
  get viewWatchlist() { return $('#viewWatchlistDropDownLink'); }
  get watchlistDropdown() { return $('#watchlist-toggle-extension-line'); }

  get mainCategory() { return $('#main-box-categories'); }
  get mainCategories() { return $$('#main-box-categories li a'); }
  get subcategory() { return $('#CategoryNavigator_CategoryPlaceholder'); }
  get subcategories() { return $$('#CategoryNavigator_CategoryPlaceholder li a'); }

}
