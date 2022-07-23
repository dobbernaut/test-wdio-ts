import { Header } from './header';

export type CartItems = {
  index: number;
  quantity: number;
  name: string;
  price: string;
  removeFromCart(): Promise<void>;
};

export class ShoppingCartPage {
  private _header: Header;

  constructor() {
    this._header = new Header();
  }

  get header() {
    return this._header;
  }

  private get continueShoppingButton() {
    return $('#continue-shopping');
  }
  private get itemsList() {
    return $$('.cart_item');
  }
  private get itemsQuantity() {
    return $$('.cart_item .cart_quantity');
  }
  private get itemsName() {
    return $$('.cart_item .inventory_item_name');
  }
  private get itemsPrice() {
    return $$('.cart_item .inventory_item_price');
  }
  private get itemsRemoveFromCart() {
    return $$('.cart_item button[id*="remove"]');
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async getCartItems(): Promise<CartItems[]> {
    const items: CartItems[] = [];
    const itemEntries = await (await this.itemsList).entries();
    for (const item of itemEntries) {
      const index = item[0];
      items.push({
        index,
        quantity: parseInt(await (await this.itemsQuantity[index].getText()).trim()),
        name: await (await this.itemsName[index].getText()).trim(),
        price: await (await this.itemsPrice[index].getText()).trim(),
        removeFromCart: async () => {
          await this.itemsRemoveFromCart[index].click();
        },
      });
    }
    return items;
  }
}
