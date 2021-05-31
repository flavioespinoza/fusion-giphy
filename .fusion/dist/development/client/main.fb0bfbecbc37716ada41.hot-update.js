webpackHotUpdate("main",{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable cup/no-undef */
const env = { ...process.env
};
const config = {
  giphy: {
    api: {
      host: env.REACT_APP_GIPHY_API_HOST,
      key: env.REACT_APP_GIPHY_API_KEY,
      timeout: env.REACT_APP_GIPHY_API_REQUEST_TIMEOUT,
      limit: 30,
      offset: 0,
      rating: 'G',
      lang: 'en'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

})
//# sourceMappingURL=main.fb0bfbecbc37716ada41.hot-update.js.map