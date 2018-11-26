import auth0 from 'auth0-js';
import React from 'react';

const auth = new auth0.WebAuth({
  domain: 'fio.auth0.com',
  clientID: 'sDcH9nROr9VCiiwv6i0F993yxPBTDe7g',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid'
});

/*if (typeof window !== 'undefined') */auth.authorize();

const Index = () => <div />;
export default Index;
