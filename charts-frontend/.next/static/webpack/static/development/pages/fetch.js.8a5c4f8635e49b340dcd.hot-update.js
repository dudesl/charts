webpackHotUpdate("static/development/pages/fetch.js",{

/***/ "./pages/fetch.js":
/*!************************!*\
  !*** ./pages/fetch.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LineChart */ "./components/LineChart.js");
/* harmony import */ var _services_bcra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/bcra */ "./services/bcra.js");


var _jsxFileName = "/Users/dudesl/dev/labs/charts/charts-frontend/pages/fetch.js";





var FOUR_YEARS = 1460;

var Index = function Index(_ref) {
  var rates = _ref.rates;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ARSUSD Rate "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_LineChart__WEBPACK_IMPORTED_MODULE_5__["BLineChart"], {
    width: 800,
    height: 600,
    data: rates,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["CartesianGrid"], {
    strokeDasharray: "4 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    dataKey: "d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["Legend"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["Brush"], {
    dataKey: "d",
    height: 30,
    stroke: "#8884d8",
    gap: 10,
    startIndex: rates.length - 365,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    type: "natural",
    dataKey: "v",
    dot: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var rates, output;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_services_bcra__WEBPACK_IMPORTED_MODULE_6__["localRateUSD"])();

        case 2:
          rates = _context.sent;
          console.log("Show rates fetched. ".concat(rates));
          console.log("Show rates fetched. ".concat(rates.length));
          console.log("Slicing rates to last 4 years ".concat(rates.slice(0, FOUR_YEARS).length));
          output = console.log("Show rates fetched. ".concat(rates.length));
          return _context.abrupt("return", {
            rates: rates
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./services/bcra.js":
/*!**************************!*\
  !*** ./services/bcra.js ***!
  \**************************/
/*! exports provided: rateUSD, localRateUSD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateUSD", function() { return rateUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localRateUSD", function() { return localRateUSD; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fixture_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fixture.json */ "./fixture.json");
var _fixture_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fixture.json */ "./fixture.json", 1);




var headers = {
  Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTAyOTIwNTUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkdWRlc2xAZ21haWwuY29tIn0.re8EU3P1Xlf4rptBh5IlaBd6GcrtaVqajC8_FreVLZXSOxjmQhNFlNPH-U9CwXXu9oiARUsWPuDvsW9B_Tlp0A"
};
function rateUSD() {
  return _rateUSD.apply(this, arguments);
}

function _rateUSD() {
  _rateUSD = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var endpoint, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = 'https://api.estadisticasbcra.com/usd';
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(endpoint, {
              method: 'GET',
              headers: headers
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            console.log("fetch rateUSD. Desde: ".concat(data[0].d));
            console.log("fetch rateUSD. Hasta: ".concat(data[data.length - 1].d));
            return _context.abrupt("return", data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _rateUSD.apply(this, arguments);
}

function localRateUSD() {
  return _localRateUSD.apply(this, arguments);
}

function _localRateUSD() {
  _localRateUSD = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _fixture_json__WEBPACK_IMPORTED_MODULE_3__);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _localRateUSD.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=fetch.js.8a5c4f8635e49b340dcd.hot-update.js.map