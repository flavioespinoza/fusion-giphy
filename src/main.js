// @flow
import React from 'react';
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import {RenderToken} from 'fusion-core';
import '@fortawesome/fontawesome-pro/js/all.js';
import Root from './root.js';

// @fix : get this to work with process.env.GIPHY_API_KEY
let apiKey = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';

export default () => {
  const app = new App(<Root apiKey={apiKey} />);
  app.register(Styletron);
  app.register(Router);
  __NODE__ && app.register(RenderToken, () => '<div id="root"></div>');
  return app;
};
