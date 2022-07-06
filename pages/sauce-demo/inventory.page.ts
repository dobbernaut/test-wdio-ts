import { Header } from './header';

export type InventoryItem = {
  index: number;
  name: string;
  price: string;
  addToCart(): Promise<void>;
};

export class InventoryPage {
  private _header: Header;

  constructor() {
    this._header = new Header();
  }

  get header() {
    return this._header;
  }

  private get itemsList() {
    return $$('.inventory_item');
  }
  private get itemsName() {
    return $$('.inventory_item .inventory_item_name');
  }
  private get itemsPrice() {
    return $$('.inventory_item .inventory_item_price');
  }
  private get itemsAddToCart() {
    return $$('button[id*="add-to-cart"]');
  }

  async getAllItems(): Promise<InventoryItem[]> {
    const items: InventoryItem[] = [];
    const itemEntries = await (await this.itemsList).entries();
    for (const item of itemEntries) {
      const index = item[0];
      items.push({
        index,
        name: await (await this.itemsName[index].getText()).trim(),
        price: await (await this.itemsPrice[index].getText()).trim(),
        addToCart: async () => {
          await this.itemsAddToCart[index].click();
        },
      });
    }
    return items;
  }
}
