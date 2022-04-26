export class WatchlistElements {

  get delete() { return $('input[value="Delete"]'); }
  get confirmDeletion() { return $('#submit1'); }
  get cancelDeletion() { return $('#cancel'); }

  get watchlistForm() { return $('form[action*="Watchlist"][method*=get]'); }
  get listingsCheckbox() { return $$('td[align="center"] input[type="checkbox"]:not([id*="cmdSelect"])'); }

}
