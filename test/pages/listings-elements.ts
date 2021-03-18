export class ListingsElements {

  get totalListings() { return $('#totalCount'); }
  get allListings() { return $$('div[data-listingid]:not([class*="no-listing"])'); }
  get listingsAddToWatchlist() {
    return $$('div[data-listingid]:not([class*="no-listing"]) div[class*="watchlist-corner"]');
  }
  get listingsTitle() { return $$('div[data-listingid]:not([class*="no-listing"]) div[class="title"]'); }

}
