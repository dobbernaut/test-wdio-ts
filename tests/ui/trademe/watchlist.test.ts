import { expect } from 'chai';
import { roles } from '@config/config';
import { Categories } from '@constant/listing-categories';
import { Computers } from '@constant/listing-sub-categories';
import { Home } from '@page/trademe/home';
import { Listings } from '@page/trademe/listings';
import { Watchlist } from '@page/trademe/watchlist';
import { Listing } from '@type/listing';

describe('Watchlist', function () {

  const home = new Home();
  const listings = new Listings();
  const watchlist = new Watchlist();

  let listing: Listing;
  const listingsToRemove: Listing[] = [];

  before(async function () {
    await home.logIn(roles.trademeTestRole);
  });

  after(async function () {
    await watchlist.removeListingsFromWatchlist(listingsToRemove);
    await home.logOut();
  });

  it('should add a listing to the user watchlist', async function () {
    await home.openMainCategory(Categories.Computers);
    await home.openSubcategory(Computers.Laptops);
    await home.search('product');
    listing = (await listings.getListings())[0];
    await listings.addListingToWatchlist(listing);
    listingsToRemove.push(listing);

    await home.viewWatchlist();
    const watchlistListings: Listing[] = await watchlist.getListingsOnWatchlist();
    const watchlistListingsId: number[] = watchlistListings.map(watchlistListing => {
      return watchlistListing.listingId;
    });
    expect(watchlistListingsId).to.contain(listing.listingId);
  });

});
