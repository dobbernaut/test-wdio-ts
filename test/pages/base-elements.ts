export class BaseElemenents{

  // login
  get openLogin() { return $('#LoginLink'); }
  get email() { return $('#page_email'); }
  get password() { return $('#page_password'); }
  get login() { return $('#LoginPageButton'); }

  // logout
  get logout() { return $('input[name="logout"]'); }

}
