// @flow
import {createPlugin, createToken} from 'fusion-core';

export const ConfigToken = createToken('config-token');
export const ConfigPlugin = createPlugin({
  provides: () => {
    return {
      apiKey: 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6',
      rating: 'G',
      lang: 'en',
    };
  },
});
