export class Header {
  private get shoppingcartButton() {
    return $('.shopping_cart_link');
  }
  private get menuButton() {
    return $('#react-burger-menu-btn');
  }
  private get logoutButton() {
    return $('#logout_sidebar_link');
  }

  async openShoppingCart() {
    await this.shoppingcartButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutButton.waitForClickable();
    await this.logoutButton.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }
}
