import { roles } from '@config/config';
import { CartItems, HomePage, InventoryItem, InventoryPage, ShoppingCartPage } from '@page/sauce-demo';
import { expect } from 'chai';
import { AccessibilityTester } from '@service/utils/accessibility-tester';

describe('Swag Labs demo app', function () {
  let accessibilityTest: AccessibilityTester;

  const homePage = new HomePage();
  const inventoryPage = new InventoryPage();
  const shoppingCartPage = new ShoppingCartPage();

  before(async function () {
    accessibilityTest = new AccessibilityTester({ browser, appName: 'Sauce Demo' });
    await homePage.open();
    await homePage.login(roles.sauceDemoRole);
  });

  after(async function () {
    await inventoryPage.header.logout();
  });

  it('Add item to shopping cart', async function () {
    const itemToAdd = 'Backpack';

    await accessibilityTest.analyzePage('inventory');

    await inventoryPage.getAllItems().then(async (items: InventoryItem[]) => {
      await items.find((item) => item.name.includes(itemToAdd)).addToCart();
    });
    await inventoryPage.header.openShoppingCart();
    await shoppingCartPage.getCartItems().then((items: CartItems[]) => {
      expect(
        items.find((item) => item.name.includes(itemToAdd)),
        `Expected to find ${itemToAdd} from cart items`
      ).to.not.be.undefined;
    });

    await accessibilityTest.analyzePage('cart');
  });
});
