"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _Auth = _interopRequireDefault(require("./common/Auth"));

var _Test = _interopRequireDefault(require("./Test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Auth.default.appName = "common-modules";

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Test.default, null), document.getElementById('root'));