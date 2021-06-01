// @flow
import {createPlugin, createToken} from 'fusion-core';

export const MyToken = createToken('my-token');
export const MyPlugin = createPlugin({
  provides: () => {
    return console;
  },
});
