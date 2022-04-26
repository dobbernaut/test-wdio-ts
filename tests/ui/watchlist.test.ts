import { expect } from 'chai';
import { roles } from '@config/config';
import { Categories } from '@constants/listing-categories';
import { Computers } from '@constants/listing-sub-categories';
import { Home } from '@pages/home';
import { Listings } from '@pages/listings';
import { Watchlist } from '@pages/watchlist';
import { Listing } from '@type/listing';

describe('Watchlist', function () {

  const home = new Home();
  const listings = new Listings();
  const watchlist = new Watchlist();

  let listing: Listing;
  const listingsToRemove: Listing[] = [];

  before(async function () {
    await home.logIn(roles.testRole);
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
