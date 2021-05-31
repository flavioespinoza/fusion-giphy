
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

/***/ "./src/pages/giphy.js":
/*!****************************!*\
  !*** ./src/pages/giphy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _giphy_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @giphy/react-components */ "@giphy/react-components");
/* harmony import */ var _giphy_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_resize_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resize-observer */ "react-resize-observer");
/* harmony import */ var react_resize_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_resize_observer__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/flavio/go/src/github.com/flavioespinoza/fusion-giphy/src/pages/giphy.js";




const FullHeightDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '100%',
  backgroundColor: '#FFFFFF'
});
FullHeightDiv.displayName = "FullHeightDiv";
const SearchDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'grid',
  gridTemplateColumns: '0.25 8fr 1fr 1fr 1fr',
  border: '1px solid gainsboro'
});
SearchDiv.displayName = "SearchDiv";
const ButtonIcon = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
});
ButtonIcon.displayName = "ButtonIcon";
const ButtonIconClose = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute'
}); // define the components in a separate function so we can
// use the context hook. You could also use the render props pattern

ButtonIconClose.displayName = "ButtonIconClose";

const Components = () => {
  const {
    setSearch,
    fetchGifs,
    searchKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]); // eslint-disable-next-line cup/no-undef

  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  const [columns, setColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
    autoFocus: true,
    clear: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIconClose, {
    onClick: () => setSearch(''),
    style: {
      color: columns === 1 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-times fa-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(1),
    style: {
      color: columns === 1 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-list fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(2),
    style: {
      color: columns === 2 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th-large fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    onClick: () => setColumns(3),
    style: {
      color: columns === 3 ? 'hotpink' : ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-th fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
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
      lineNumber: 73
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
      lineNumber: 80
    },
    __self: undefined
  }));
}; // the search experience consists of the manager and its child components that use SearchContext


const GiphySearch = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giphy_react_components__WEBPACK_IMPORTED_MODULE_2__["SearchContextManager"], {
    apiKey: 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GiphySearch);

/***/ })

};
//# sourceMappingURL=main.60e630edb63875a11777.hot-update.js.map