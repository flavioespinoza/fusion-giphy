(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.js */ "./src/root.js");





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_root_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
   false && false;
  return app;
});

/***/ }),

/***/ "./src/pages/giphy.js":
/*!****************************!*\
  !*** ./src/pages/giphy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/styletron-react/dist/browser.es2017.es.js");
/* harmony import */ var _giphy_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @giphy/react-components */ "./node_modules/@giphy/react-components/dist/index.js");
/* harmony import */ var _giphy_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_resize_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resize-observer */ "./node_modules/react-resize-observer/lib/ResizeObserver.js");
/* harmony import */ var react_resize_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_resize_observer__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/pages/giphy.js";




const FullHeightDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '100%',
  backgroundColor: '#FFFFFF'
});
FullHeightDiv.displayName = "FullHeightDiv";
const SearchDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'grid',
  gridTemplateColumns: '9fr 1fr 1fr 1fr',
  borderBottom: '1px solid gainsboro'
});
SearchDiv.displayName = "SearchDiv";
const ButtonIcon = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
}); // define the components in a separate function so we can
// use the context hook. You could also use the render props pattern

ButtonIcon.displayName = "ButtonIcon";

const Components = () => {
  const {
    fetchGifs,
    searchKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]); // eslint-disable-next-line cup/no-undef

  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  const [columns, setColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(1),
    style: {
      color: columns === 1 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-list fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(2),
    style: {
      color: columns === 2 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-large fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(3),
    style: {
      color: columns === 3 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    key: searchKey,
    fetchGifs: fetchGifs,
    width: width,
    columns: columns,
    gutter: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_observer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onResize: ({
      width
    }) => {
      setWidth(width);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }));
}; // the search experience consists of the manager and its child components that use SearchContext


const GiphySearch = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContextManager"], {
    apiKey: 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GiphySearch);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/styletron-react/dist/browser.es2017.es.js");
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/pages/home.js";


const Center = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
Center.displayName = "Center";
const FusionStyle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontSize: '80px',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex'
});
FusionStyle.displayName = "FusionStyle";
const FullHeightDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '100%',
  backgroundColor: '#FFFFFF'
});
FullHeightDiv.displayName = "FullHeightDiv";
const Circle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '180px',
  width: '180px',
  marginTop: '20px',
  backgroundColor: 'white',
  ':hover': {
    backgroundColor: '#f0f8fa'
  },
  border: '10px solid #4db5d9',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
Circle.displayName = "Circle";
const GettingStartedLink = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('a', {
  textDecoration: 'none',
  color: '#4db5d9',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%'
});
GettingStartedLink.displayName = "GettingStartedLink";

const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\n        html,body,#root{height:100%;}\n        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}\n        body{margin:0;}\n        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}\n        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}\n        "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FusionStyle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Fusion.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GettingStartedLink, {
  href: "https://fusionjs.com/docs/overview",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Let's Get Started")))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/pages/pageNotFound.js";



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_giphy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/giphy.js */ "./src/pages/giphy.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/root.js";





const root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/giphy-search",
  component: _pages_giphy_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map