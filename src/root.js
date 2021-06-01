// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import GiphySearch from './pages/giphy.js';
import PageNotFound from './pages/pageNotFound.js';

const Root = props => {
  const {apiKey} = props;
  return (
    <Switch>
      <Route exact path="/" component={() => <GiphySearch apiKey={apiKey} />} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Root;
