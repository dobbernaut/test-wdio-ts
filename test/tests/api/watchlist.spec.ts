import { WatchlistFilter } from '../../enums/watchlist-filter';
import { MyTradeMe } from '../../services/my-trade-me';
import { Search } from '../../services/search';

describe('Watchlist', () => {

  const search = new Search();
  const myTradeMe = new MyTradeMe();

  let listingId: number;

  beforeAll( async() => {
    await search.general({ category: '0187-4383-', search_string: 'product' })
      .then(response => {
        const searchResults = response.data;
        if (searchResults.List && searchResults.List.length > 0) {
          listingId = searchResults.List[0].ListingId;
        } else {
          fail('No listing was found');
        }
      })
      .catch(error => {
        search.errorHandler(error);
      });
  });

  afterAll( async() => {
    await myTradeMe.removeListingFromWatchlist(listingId)
      .then(response => {
        expect(response.data.Success).toBeTrue();
      })
      .catch(error => {
        myTradeMe.errorHandler(error);
      });
  });

  it('should add a listing to user watchlist', async() => {
    await myTradeMe.addListingToWatchlist(listingId)
      .then(response => {
        expect(response.data.Success).toBeTrue();
      })
      .catch(error => {
        myTradeMe.errorHandler(error);
      });
  });

  it('should have the added listing on user watchlist', async() => {
    await myTradeMe.retreiveWatchlist(WatchlistFilter.All)
      .then(response => {
        const listingIds = response.data.List.map( listing => {
          return listing.ListingId;
        });
        expect(listingIds).toContain(listingId);
      })
      .catch(error => {
        myTradeMe.errorHandler(error);
      });
  });

});
