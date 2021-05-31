
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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_pro_js_all_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-pro/js/all.js */ "@fortawesome/fontawesome-pro/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_pro_js_all_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_pro_js_all_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root.js */ "./src/root.js");
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/main.js";






const Main = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('body', {
  height: '100%',
  backgroundColor: 'hotpink'
});
Main.displayName = "Main";
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_root_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default.a);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default.a);
   true && app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__["RenderToken"], () => React.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }));
  return app;
});

/***/ })

};
//# sourceMappingURL=main.c0a0f9a3e2b856507366.hot-update.js.map