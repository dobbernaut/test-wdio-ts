import { Categories } from '@enums/listing-categories';
import { Antiques } from '@enums/listing-sub-categories';
import { Home } from '@pages/home';
import { Listings } from '@pages/listings';

describe('Search', () => {

  const home = new Home();
  const listings = new Listings();

  it('should return the expected number of listings', () => {
    home.open();
    home.openMainCategory(Categories.Antiques);
    home.openSubcategory(Antiques.Stamps);
    home.search('product');

    expect(listings.getListings().length).toEqual(12);
    expect(listings.totalListings()).toEqual(12);
  });

});
