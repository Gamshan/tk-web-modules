"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   & {\n    height: ", ";\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ddd;\n    }\n    &:before{\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color: ", ";\n    animation: loading 2s linear infinite;\n}\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingLineCss = _styledComponents.default.div(_templateObject(), function (props) {
  return _lodash.default.get(props, 'width', "4px");
}, function (props) {
  return _lodash.default.get(props, 'color', "#1877b4");
});

var LoadingLine = function LoadingLine(_ref) {
  var color = _ref.color,
      height = _ref.height;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(LoadingLineCss, {
    color: color,
    height: height
  }));
};

var _default = LoadingLine;
exports.default = _default;