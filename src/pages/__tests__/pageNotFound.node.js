// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from '../pageNotFound';

it('PageNotFound renders correctly', () => {
  const tree = renderer
    .create(
      <PageNotFound>
        <div>404</div>
      </PageNotFound>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
