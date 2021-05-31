// @flow
import React from 'react';
import {shallow} from 'enzyme';
import GiphySearch from '../giphy';

test('item exists', () => {
  const mockData = {
    apiKey: 'testApiKey',
  };
  const output = shallow(<GiphySearch {...mockData} />);
  const outputProps = output.props();
  expect(outputProps.apiKey).toEqual('testApiKey');
});
