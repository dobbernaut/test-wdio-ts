import { Search } from '@services/search';

describe('General Search', () => {

  const search = new Search();

  it('should return search results given a category and a search string', async() => {
    await search.general({  category: '0002-0356-', search_string: 'product' })
      .then(response => {
        const searchResults = response.data;
        expect(searchResults.TotalCount).toBeGreaterThanOrEqual(0);
        expect(searchResults.List.length).toBeGreaterThanOrEqual(0);
      })
      .catch(error => {
        search.errorHandler(error);
      });
  });

});
