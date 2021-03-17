import { Clients } from './types/clients';
import { Roles } from './types/credentials';
import { Sites } from './types/sites';

export const siteUrl: Sites = {
  ui: 'https://www.tmsandbox.co.nz',
  api: 'https://api.tmsandbox.co.nz/v1',
};

const getPassword = (): string => {
  if (process.env.testpassword) {
    return process.env.testpassword;
  } else {
    throw new Error('No password was set for the test role. Add environment variable testpassword');
  }
};

export const roles: Roles = {
  testRole : {
    username: 'flux_test_005@test.test',
    password: getPassword()
  }
};

const getToken = (): string => {
  if (process.env.token) {
    return process.env.token;
  } else {
    throw new Error('No oauthToken was set for client. Add environment variable token');
  }
};

const getTokenSecret = (): string => {
  if (process.env.tokensecret) {
    return process.env.tokensecret;
  } else {
    throw new Error('No oauthTokenSecret was set for the client. Add environment variable tokensecret');
  }
};

const getKey = (): string => {
  if (process.env.key) {
    return process.env.key;
  } else {
    throw new Error('No consumerKey was set for the client. Add environment variable key');
  }
};

const getKeySecret = (): string => {
  if (process.env.keysecret) {
    return process.env.keysecret;
  } else {
    throw new Error('No consumerSecret was set for the client. Add environment variable keysecret');
  }
};

export const clients: Clients = {
  testClient: {
    oauthToken: getToken(),
    oauthTokenSecret: getTokenSecret(),
    consumerKey: getKey(),
    consumerSecret: getKeySecret()
  }
};
