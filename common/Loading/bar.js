"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./bar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingBar = function LoadingBar() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }));
};

var _default = LoadingBar;
exports.default = _default;