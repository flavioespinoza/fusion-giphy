webpackHotUpdate("main",{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");
/* eslint-disable cup/no-undef */
__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();


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
//# sourceMappingURL=main.1fe15712dce33272849d.hot-update.js.map