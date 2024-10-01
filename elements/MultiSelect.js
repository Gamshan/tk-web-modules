"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _multiselectReactDropdown = require("multiselect-react-dropdown");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MultiSelect = /*#__PURE__*/function (_Component) {
  _inherits(MultiSelect, _Component);

  var _super = _createSuper(MultiSelect);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _super.call(this, props);
    _this.state = {
      value: !!props.value ? props.value : [],
      optionKey: !!props.optionKey ? props.optionKey : '_id',
      options: []
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {// this.state.value = nextProps.value ? nextProps.value : []
      // this.forceUpdate()
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, refer) {}
  }, {
    key: "onSelect",
    value: function onSelect(selectedList, selectedItem) {
      this.state.value.push(selectedItem[this.state.optionKey]);
      this.props.handleOnChange(this.state.value, this.props.refer);
    }
  }, {
    key: "onRemove",
    value: function onRemove(selectedList, removedItem) {
      var index = this.state.value.indexOf(removedItem[this.state.optionKey]);
      if (index > -1) this.state.value.splice(index, 1);
      this.props.handleOnChange(this.state.value, this.props.refer);
    }
  }, {
    key: "selectedValues",
    value: function selectedValues() {
      var _this2 = this;

      var array = [];
      this.state.value.map(function (key) {
        var valueObject = _this2.props.items.find(function (item) {
          return item[_this2.state.optionKey] === key;
        });

        if (valueObject) array.push(valueObject);
      });
      return array;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          refer = _this$props.refer,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          items = _this$props.items,
          optionKey = _this$props.optionKey,
          optionValue = _this$props.optionValue;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_multiselectReactDropdown.Multiselect, _extends({}, this.props, {
        options: items // Options to display in the dropdown
        ,
        selectedValues: this.selectedValues() // Preselected value to persist in dropdown
        ,
        onSelect: this.onSelect.bind(this) // Function will trigger on select event
        ,
        onRemove: this.onRemove.bind(this) // Function will trigger on remove event
        ,
        displayValue: !!optionValue ? optionValue : 'name' // Property name to display in the dropdown options
        ,
        id: "multiSelect",
        disabled: true,
        placeholder: placeholder
      }))));
    }
  }]);

  return MultiSelect;
}(_react.Component);

var _default = MultiSelect;
exports.default = _default;