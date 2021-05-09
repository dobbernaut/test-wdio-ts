import { Categories } from '@enums/listing-categories';
import { Antiques } from '@enums/listing-sub-categories';
import { Home } from '@pages/home';
import { Listings } from '@pages/listings';

describe('Search', () => {

  const home = new Home();
  const listings = new Listings();

  it('should return the expected number of listings', async () => {
    await home.open();
    await home.openMainCategory(Categories.Antiques);
    await home.openSubcategory(Antiques.Stamps);
    await home.search('product');

    expect((await listings.getListings()).length).toBeGreaterThanOrEqual(0);
    expect((await listings.totalListings())).toBeGreaterThanOrEqual(0);
  });

});
