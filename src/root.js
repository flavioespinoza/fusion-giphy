// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import Home from './pages/home.js';
import GiphySearch from './pages/giphy.js';
import PageNotFound from './pages/pageNotFound.js';

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/giphy-search" component={GiphySearch} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
