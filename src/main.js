// @flow
import React from 'react';
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import Styletron from 'fusion-plugin-styletron-react';
import {RenderToken} from 'fusion-core';
import Root from './root.js';
import {ConfigPlugin, ConfigToken} from './plugins/config-plugin.js';

let apiKey = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';

export default () => {
  const app = new App(<Root apiKey={apiKey} />);
  app.register(HelmetPlugin);
  app.register(Styletron);
  app.register(Router);
  app.register(ConfigToken, ConfigPlugin);
  if (__NODE__) {
    app.register(RenderToken, () => '<div id="root"></div>');
  }
  return app;
};
