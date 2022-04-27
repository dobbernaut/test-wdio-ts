import { expect } from 'chai';
import { Listing } from '@type/listing';
import { Base } from '@page/base';
import { ListingsElements } from './listings-elements';

export class Listings extends Base {

  listings = new ListingsElements();

  async totalListings(): Promise<number> {
    return parseInt(await (await this.listings.totalListings).getText());
  }

  async getListings(): Promise<Listing[]> {
    const listings: any[] = [];
    for (const [index, listing] of (await this.listings.allListings).entries()) {
      listings.push({
        index,
        listingId: parseInt(await listing.getAttribute('data-listingid')),
        title: await this.listingTitle(index)
      });
    }
    return listings;
  }

  async addListingToWatchlist(options: Listing): Promise<void> {
    let listingFound = false;
    if (!options.title && !options.listingId && !options.index) {
      expect.fail('No listing information provided. Provide either a listing title, id or index.');
    }

    for (const listing of await this.listings.allListings) {
      if (options.title && await this.listingTitle(listing.index) === options.title) {
        listingFound = true;
      } else if (options.listingId && parseInt(await listing.getAttribute('data-listingid')) === options.listingId) {
        listingFound = true;
      } else if (options.index) {
        listingFound = true;
      }
      if (listingFound) {
        await this.addToWatchlist(listing);
        break;
      }
    }

    if (!listingFound) {
      expect.fail(`Failed to add listing ${options} to user watchlist`);
    }
  }

  private async listingTitle(index: number): Promise<string> {
    return (await (await this.listings.listingsTitle)[index].getText()).trim();
  }

  private async addToWatchlist(listing: WebdriverIO.Element): Promise<void> {
    await listing.scrollIntoView();
    await listing.moveTo();
    const listingAddTowatchlist = await this.listings.listingsAddToWatchlist;
    await (await listingAddTowatchlist[listing.index]).moveTo();
    await (await listingAddTowatchlist[listing.index]).click();
  }

}
