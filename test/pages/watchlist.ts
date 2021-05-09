import { Listing } from '@type/listing';
import { Base } from '@pages/base';
import { WatchlistElements } from './watchlist-elements';

export class Watchlist extends Base {

  watchlist = new WatchlistElements();

  async getListingsOnWatchlist(): Promise<Listing[]> {
    const listings: Listing[] = [];
    await this.waitForWatchlistForm();
    for (const watchlistListing of await this.watchlist.listingsCheckbox) {
      listings.push({
        index: watchlistListing.index,
        listingId: await this.getListingIdFromCheckbox(watchlistListing)
      });
    }
    return listings;
  }

  async removeListingsFromWatchlist(listings: Listing[]): Promise<void> {
    await this.waitForWatchlistForm();
    for (const listing of listings) {
      let listingMatch = false;
      for (const watchlistListing of await this.watchlist.listingsCheckbox) {
        const watchlistListingId = await this.getListingIdFromCheckbox(watchlistListing);
        if (listing.listingId === watchlistListingId) {
          listingMatch = true;
          await watchlistListing.click();
          break;
        }
      }
      if (!listingMatch) {
        fail(`Listing "${listing}" is not on watchlist`);
      }
    }
    await this.deleteSelectedListings();
  }

  private async deleteSelectedListings(): Promise<void> {
    await (await this.watchlist.delete).click();
    await (await this.watchlist.confirmDeletion).click();
  }

  private async getListingIdFromCheckbox(listing: ElementSync): Promise<number> {
    return parseInt(await (await listing.getAttribute('name')).match(/[^(chk)]\d*/)[0]);
  }

  private async waitForWatchlistForm(): Promise<void> {
    await (await this.watchlist.watchlistForm).waitForExist();
  }

}
