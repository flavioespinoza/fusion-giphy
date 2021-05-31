
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
exports.id = "main";
exports.modules = {

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable cup/no-undef */
__webpack_require__(/*! dotenv */ "dotenv").config();

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

/***/ }),

/***/ "dotenv":
/*!**************************************************************************************************************!*\
  !*** external "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/node_modules/dotenv/lib/main.js" ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/node_modules/dotenv/lib/main.js");

/***/ })

};
//# sourceMappingURL=main.10f76d0e5021ae8cab6f.hot-update.js.map