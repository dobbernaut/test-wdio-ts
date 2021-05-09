import { roles } from '@test/config';
import { Categories } from '@enums/listing-categories';
import { Antiques } from '@enums/listing-sub-categories';
import { Home } from '@pages/home';
import { Listings } from '@pages/listings';
import { Watchlist } from '@pages/watchlist';
import { Listing } from '@type/listing';

describe('Watchlist', () => {

  const home = new Home();
  const listings = new Listings();
  const watchlist = new Watchlist();

  let listing: Listing;
  const listingsToRemove: Listing[] = [];

  beforeAll(async () => {
    await home.logIn(roles.testRole);
  });

  afterAll(async () => {
    await watchlist.removeListingsFromWatchlist(listingsToRemove);
    await home.logOut();
  });

  it('should add a listing to the user watchlist', async () => {
    await home.openMainCategory(Categories.Antiques);
    await home.openSubcategory(Antiques.Stamps);
    await home.search('product');
    listing = (await listings.getListings())[0];
    await listings.addListingToWatchlist(listing);
    listingsToRemove.push(listing);

    await home.viewWatchlist();
    const watchlistListings: Listing[] = await watchlist.getListingsOnWatchlist();
    const watchlistListingsId: number[] = watchlistListings.map(watchlistListing => {
      return watchlistListing.listingId;
    });
    expect(watchlistListingsId).toContain(listing.listingId);
  });

});
