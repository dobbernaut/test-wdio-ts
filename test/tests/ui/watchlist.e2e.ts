import { roles } from '../../config';
import { Categories } from '../../enums/listing-categories';
import { Antiques } from '../../enums/listing-sub-categories';
import { Home } from '../../pages/home';
import { Listings } from '../../pages/listings';
import { Watchlist } from '../../pages/watchlist';
import { Listing } from '../../types/listing';

describe('Watchlist', () => {

  const home = new Home();
  const listings = new Listings();
  const watchlist = new Watchlist();

  let listing: Listing;

  beforeAll(() => {
    home.logIn(roles.testRole);
  });

  afterAll(() => {
    watchlist.removeListingsFromWatchlist([listing]);
    home.logOut();
  });

  it('should add a listing to the user watchlist', () => {
    home.openMainCategory(Categories.Antiques);
    home.openSubcategory(Antiques.Stamps);
    home.search('product');
    listing = listings.getListings()[0];

    listings.addListingToWatchlist({listingId: listing.listingId});
    home.viewWatchlist();
    const watchlistListingIds: number[] = watchlist.getListingsOnWatchlist().map(watchlistListing => {
      return watchlistListing.listingId;
    });

    expect(watchlistListingIds).toContain(listing.listingId);
  });

});
