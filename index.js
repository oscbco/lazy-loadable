(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-imported-component"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-imported-component"], factory);
	else if(typeof exports === 'object')
		exports["LazyLoadable"] = factory(require("prop-types"), require("react"), require("react-imported-component"));
	else
		root["LazyLoadable"] = factory(root["PropTypes"], root["React"], root["ReactImportedComponent"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__409__, __WEBPACK_EXTERNAL_MODULE__698__, __WEBPACK_EXTERNAL_MODULE__957__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 315:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = LazyLoadable;

var _react = _interopRequireWildcard(__webpack_require__(698));

var _propTypes = _interopRequireDefault(__webpack_require__(409));

var _reactImportedComponent = _interopRequireDefault(__webpack_require__(957));

var _jsxFileName = "/home/darkcode/Projects/libraries/lazy-loadable/source/LazyLoadable/LazyLoadable.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LazyLoadable(_ref) {
  var importComponent = _ref.importComponent,
      isVisible = _ref.isVisible,
      passProps = _objectWithoutProperties(_ref, ["importComponent", "isVisible"]);

  var rendered = (0, _react.useRef)(false);
  var LoadableComp = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    LoadableComp.current = (0, _reactImportedComponent["default"])(importComponent);
    LoadableComp.current.preload();
  }, []);

  if (rendered.current || isVisible) {
    rendered.current = true;
  }

  return rendered.current ? /*#__PURE__*/_react["default"].createElement(LoadableComp.current, _extends({
    isVisible: isVisible
  }, passProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
    }
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 88
    }
  });
}

LazyLoadable.propTypes = {
  name: _propTypes["default"].string.isRequired,
  isVisible: _propTypes["default"].bool.isRequired
};

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__409__;

/***/ }),

/***/ 698:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__698__;

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__957__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(315);
/******/ })()
;
});