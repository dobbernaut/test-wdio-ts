import { expect } from 'chai';
import { Categories } from '@constant/listing-categories';
import { Computers } from '@constant/listing-sub-categories';
import { Home } from '@page/home';
import { Listings } from '@page/listings';

describe('Search', function () {

  const home = new Home();
  const listings = new Listings();

  it('should return the expected number of listings', async function () {
    await home.open();
    await home.openMainCategory(Categories.Computers);
    await home.openSubcategory(Computers.Laptops);
    await home.search('product');

    expect((await listings.getListings()).length).to.be.greaterThanOrEqual(0);
    expect((await listings.totalListings())).to.be.greaterThanOrEqual(0);
  });

});
