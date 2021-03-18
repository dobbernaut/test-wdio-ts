import { Listing } from '../types/listing';
import { Base } from './base';
import { WatchlistElements } from './watchlist-elements';

export class Watchlist extends Base {

  watchlist = new WatchlistElements();

  getListingsOnWatchlist(): Listing[] {
    const listings: Listing[] = [];
    this.waitForWatchlistForm();
    for (const watchlistListing of this.watchlist.listingsCheckbox) {
      listings.push({
        index: watchlistListing.index,
        listingId: this.getListingIdFromCheckbox(watchlistListing)
      });
    }
    return listings;
  }

  removeListingsFromWatchlist(listings: Listing[]): void {
    this.waitForWatchlistForm();
    listings.forEach(listing => {
      let listingMatch = false;
      for (const watchlistListing of this.watchlist.listingsCheckbox) {
        const watchlistListingId = this.getListingIdFromCheckbox(watchlistListing);
        if (listing.listingId === watchlistListingId) {
          listingMatch = true;
          watchlistListing.click();
          break;
        }
      }
      if (!listingMatch) {
        fail(`Listing "${listing}" is not on watchlist`);
      }
    });
    this.deleteSelectedListings();
  }

  private deleteSelectedListings(): void {
    this.watchlist.delete.click();
    this.watchlist.confirmDeletion.click();
  }

  private getListingIdFromCheckbox(listing: ElementSync): number {
    return parseInt(listing.getAttribute('name').match(/[^(chk)]\d*/)[0]);
  }

  private waitForWatchlistForm(): void {
    this.watchlist.watchlistForm.waitForExist();
  }

}
