webpackHotUpdate("main",{

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]);
  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  const [columns, setColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(1),
    style: {
      color: columns === 1 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-list fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(2),
    style: {
      color: columns === 2 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-large fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(3),
    style: {
      color: columns === 3 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
      lineNumber: 58
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
      lineNumber: 65
    },
    __self: undefined
  }));
}; // the search experience consists of the manager and its child components that use SearchContext


const GiphySearch = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContextManager"], {
    apiKey: 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GiphySearch);

/***/ })

})
//# sourceMappingURL=main.b1a0eb5b056162223179.hot-update.js.map