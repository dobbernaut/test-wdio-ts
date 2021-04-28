import { Credentials } from '@type/credentials';
import { BaseElemenents } from './base-elements';

export class Base {

  base = new BaseElemenents();

  logIn(role: Credentials): void {
    browser.url('/');
    this.base.openLogin.click();
    this.base.email.setValue(role.username);
    this.base.password.setValue(role.password);
    this.base.login.click();
    this.waitForLogout();
  }

  logOut(): void {
    this.base.logout.click();
    this.waitForLogin();
  }

  private waitForLogout(): void {
    this.base.logout.waitForExist();
  }

  private waitForLogin(): void {
    this.base.openLogin.waitForExist();
  }

}
