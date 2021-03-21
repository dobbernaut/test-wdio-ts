import { Listing } from '../types/listing';
import { Base } from './base';
import { ListingsElements } from './listings-elements';

export class Listings extends Base {

  listings = new ListingsElements();

  totalListings(): number {
    return parseInt(this.listings.totalListings.getText());
  }

  getListings(): Listing[] {
    const listings: any[] = [];
    this.listings.allListings.forEach((listing, index) => {
      listings.push({
        index,
        listingId: parseInt(listing.getAttribute('data-listingid')),
        title: this.listingTitle(index)
      });
    });
    return listings;
  }

  addListingToWatchlist(options: Listing): void {
    let listingFound = false;
    if (!options.title && !options.listingId && !options.index) {
      fail('No listing information provided. Provide either a listing title, id or index.');
    }

    for (const listing of this.listings.allListings) {
      if (options.title && this.listingTitle(listing.index) === options.title) {
        listingFound = true;
      } else if (options.listingId && parseInt(listing.getAttribute('data-listingid')) === options.listingId) {
        listingFound = true;
      } else if (options.index) {
        listingFound = true;
      }
      if (listingFound) {
        this.addToWatchlist(listing.index);
        break;
      }
    }

    if (!listingFound) {
      fail(`Failed to add listing ${options} to user watchlist`);
    }
  }

  private listingTitle(index: number): string {
    return this.listings.listingsTitle[index].getText().trim();
  }

  private addToWatchlist(index: number): void {
    this.listings.allListings[index].moveTo();
    this.listings.listingsAddToWatchlist[index].moveTo();
    this.listings.listingsAddToWatchlist[index].click();
  }

}
