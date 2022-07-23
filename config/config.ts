import { Roles } from '@type/credentials';
import { Sites } from '@type/sites';

export const siteUrl: Sites = {
  jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  sauceDemo: 'https://www.saucedemo.com',
};

const getPassword = (): string => {
  if (process.env.testpassword) {
    return process.env.testpassword;
  } else {
    console.warn('No password was set for the user. Add environment variable testpassword');
  }
};

export const roles: Roles = {
  sauceDemoRole: {
    username: 'standard_user',
    password: getPassword(),
  }
};
