// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import {RenderToken} from 'fusion-core';
import '@fortawesome/fontawesome-pro/js/all.js';
import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  __NODE__ && app.register(RenderToken, () => '<div id="root"></div>');
  return app;
};
