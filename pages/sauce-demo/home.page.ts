import { siteUrl } from '@config/config';
import { Credentials } from '@type/credentials';

export class HomePage {
  private get usernameInput() {
    return $('#user-name');
  }
  private get passwordInput() {
    return $('#password');
  }
  private get loginButton() {
    return $('#login-button');
  }

  async open(): Promise<void> {
    await browser.url(siteUrl.sauceDemo);
  }

  async login(account: Credentials): Promise<void> {
    await this.usernameInput.setValue(account.username);
    await this.passwordInput.setValue(account.password);
    await this.loginButton.click();
  }
}
