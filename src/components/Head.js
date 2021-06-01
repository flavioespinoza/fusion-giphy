// @flow
import React from 'react';
import {Helmet} from 'fusion-plugin-react-helmet-async';

const Head = () => {
  return (
    <Helmet>
      <script
        src="https://kit.fontawesome.com/87379a3263.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  );
};
export default Head;
