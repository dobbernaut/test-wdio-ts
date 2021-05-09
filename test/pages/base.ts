import { Credentials } from '@type/credentials';
import { BaseElemenents } from './base-elements';

export class Base {

  base = new BaseElemenents();

  async logIn(role: Credentials): Promise<void> {
    await browser.url('');
    await (await this.base.openLogin).click();
    await (await this.base.email).setValue(role.username);
    await (await this.base.password).setValue(role.password);
    await (await this.base.login).click();
    await this.waitForLogout();
  }

  async logOut(): Promise<void> {
    await (await this.base.logout).click();
    await this.waitForLogin();
  }

  private async waitForLogout(): Promise<void> {
    await (await this.base.logout).waitForExist();
  }

  private async waitForLogin(): Promise<void> {
    await (await this.base.openLogin).waitForExist();
  }

}
