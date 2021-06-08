// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import PageGiphy from './pages/pageGiphy.js';
import PageHooks from './pages/pageHooks.js';
import PageNotFound from './pages/pageNotFound.js';
import {useService} from 'fusion-react';
import {ConfigToken} from './plugins/config-plugin.js';

const Root = () => {
  const {apiKey, rating, lang} = useService(ConfigToken);

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => {
          return (
            <PageGiphy
              {...{
                apiKey,
                rating,
                lang,
              }}
            />
          );
        }}
      />
      <Route exact path="/hooks" component={PageHooks} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Root;
