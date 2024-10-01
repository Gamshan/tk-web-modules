"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

require("./css/TKCheckBox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TKCheckBox = function TKCheckBox(props) {
  var handleOnChange = props.handleOnChange,
      label = props.label,
      items = props.items,
      value = props.value,
      refer = props.refer,
      inline = props.inline,
      name = props.name;

  var toggleCheckboxChange = function toggleCheckboxChange(selectedKey) {
    var checkedArray = _lodash.default.xor(value ? value : [], [selectedKey]);

    console.log(checkedArray, selectedKey);
    handleOnChange(checkedArray, refer);
  };

  console.log(value, 'value');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-check"
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck1"
  }, label), items && items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: inline ? 'row form-check-inline' : 'row form-check'
    }, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      name: name ? name : refer,
      checked: _lodash.default.includes(value, item.key),
      onChange: function onChange(e) {
        return toggleCheckboxChange(item.key);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "form-check-label",
      htmlFor: "exampleCheck1"
    }, item.value));
  }));
};

var _default = TKCheckBox;
exports.default = _default;