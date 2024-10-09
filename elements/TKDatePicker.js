"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

require("react-datepicker/dist/react-datepicker.css");

require("./css/TKDatePicker.css");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TKDatePicker = function TKDatePicker(props) {
  var refer = props.refer,
      label = props.label,
      wrapperClassName = props.wrapperClassName,
      placeholder = props.placeholder,
      handleOnChange = props.handleOnChange,
      value = props.value,
      dateFormat = props.dateFormat,
      returnFormat = props.returnFormat,
      handleTimeChange = props.handleTimeChange;
  var myRef = /*#__PURE__*/(0, _react.createRef)();

  var _useState = (0, _react.useState)(value ? new Date(value) : new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)([null, null]),
      _useState4 = _slicedToArray(_useState3, 2),
      dateRange = _useState4[0],
      setDateRange = _useState4[1];

  var _dateRange = _slicedToArray(dateRange, 2),
      startDate = _dateRange[0],
      endDate = _dateRange[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedDates = _useState6[0],
      setSelectedDates = _useState6[1];

  (0, _react.useEffect)(function () {// handleCalendarClose()
  }, []);
  (0, _react.useEffect)(function () {
    if (value && !props.selectsMultiple && !props.selectsRange) setDate(new Date(value));
  }, [value]); //

  var initialProps = {
    dateFormat: dateFormat ? dateFormat : 'yyyy-MM-dd'
  };

  var handleCalendarClose = function handleCalendarClose() {
    var selected = props.selectsMultiple ? selectedDates : props.selectsRange ? dateRange : date;
    if (props.handleCalendarClose) props.handleCalendarClose(selected);
  };

  var handleDateChange = function handleDateChange(val) {
    if (props.selectsMultiple) {
      var newDates = _lodash.default.xor(selectedDates, [val]);

      setSelectedDates(_toConsumableArray(newDates));
      handleOnChange(newDates.map(function (date) {
        return (0, _moment.default)(date).format(returnFormat);
      }), refer);
    } else if (props.selectsRange) {
      if (!Array.isArray(val)) {
        if (handleTimeChange) handleTimeChange(val.toLocaleTimeString());
        return;
      }

      setDateRange(val);
      if (val[0] && val[1]) handleOnChange([(0, _moment.default)(val[0]).format(returnFormat), (0, _moment.default)(val[1]).format(returnFormat)], refer);
    } else {
      setDate(val);
      handleOnChange((0, _moment.default)(val).format(returnFormat), refer);
    }
  };

  var generateValue = function generateValue() {
    if (props.selectsMultiple) {
      return selectedDates && selectedDates.length > 0 ? (0, _moment.default)(selectedDates[0]).format(dateFormat || "YYYY-MM-DD") + (selectedDates.length > 1 ? " (+".concat(selectedDates.length - 1, ")") : '') : null;
    }

    if (props.selectsRange) return !startDate && !endDate ? null : "".concat(props.showRangeDayCount && endDate && startDate ? (0, _moment.default)(endDate).diff((0, _moment.default)(startDate), 'days') + 1 + ' Days' : '', " ").concat(startDate ? (0, _moment.default)(startDate).format(dateFormat) + ' - ' : '').concat(endDate ? (0, _moment.default)(endDate).format(dateFormat) : '');else return date ? (0, _moment.default)(date).format(dateFormat || "YYYY-MM-DD") : null;
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sel1",
    style: {
      fontSize: '14px'
    }
  }, label), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, _extends({}, props, {
    startDate: startDate,
    endDate: endDate,
    onChange: handleDateChange,
    value: generateValue(),
    wrapperClassName: wrapperClassName || 'customDatePickerWidth',
    placeholderText: placeholder,
    highlightDates: props.selectsMultiple ? selectedDates : [date],
    selected: date,
    onCalendarClose: handleCalendarClose
  })));
};

var _default = TKDatePicker;
exports.default = _default;