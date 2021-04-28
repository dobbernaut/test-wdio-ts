import { Search } from '@services/search';

describe('General Search', () => {

  const search = new Search();

  it('should return search results given a category and a search string', async() => {
    await search.general({  category: '0187-4383-', search_string: 'product' })
      .then(response => {
        const searchResults = response.data;
        expect(searchResults.TotalCount).toEqual(12);
        expect(searchResults.List.length).toEqual(12);
      })
      .catch(error => {
        search.errorHandler(error);
      });
  });

});
