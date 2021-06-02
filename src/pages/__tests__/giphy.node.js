// @flow
import React from 'react';
import {shallow} from 'enzyme';
import PageGiphy from '../pageGiphy';

test('item exists', () => {
  const mockData = {
    apiKey: 'testApiKey',
    rating: 'testRating',
    lang: 'testLang',
  };
  const output = shallow(
    <PageGiphy {...mockData} />
  );
  const outputProps = output.props();
  expect(outputProps.apiKey).toEqual('testApiKey');
  expect(outputProps.options).toEqual({
    rating: 'testRating',
    lang: 'testLang',
  });
});
