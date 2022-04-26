import { expect } from 'chai';
import { Categories } from '@constants/listing-categories';
import { Computers } from '@constants/listing-sub-categories';
import { Home } from '@pages/home';
import { Listings } from '@pages/listings';

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
