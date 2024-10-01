"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MultiSelect = _interopRequireDefault(require("./elements/MultiSelect"));

var _Select = _interopRequireDefault(require("./elements/Select"));

var _Form = _interopRequireDefault(require("./elements/Form"));

var _dataSource = _interopRequireDefault(require("./dataSource"));

var _MyTypeahead = _interopRequireDefault(require("./elements/MyTypeahead"));

var _TKDatePicker = _interopRequireDefault(require("./elements/TKDatePicker"));

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _TKCheckBox = _interopRequireDefault(require("./elements/TKCheckBox"));

var _Input = _interopRequireDefault(require("./elements/Input"));

var _MapContainer = _interopRequireDefault(require("./common/MapContainer"));

var _reactDom = require("react-dom");

var _TKSwitch = _interopRequireDefault(require("./elements/TKSwitch"));

var _TKPhoneInput = _interopRequireDefault(require("./elements/TKPhoneInput"));

require("./common/MarkerLabel.css");

require("./test.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Test = function Test() {
  var _useState = (0, _react.useState)({
    input: 7
  }),
      _useState2 = _slicedToArray(_useState, 2),
      createReq = _useState2[0],
      setCreateReq = _useState2[1];

  var schema = [{
    type: 'SELECT',
    refer: 'select1',
    items: [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }],
    dependencies: ['select2'],
    placeholder: "Select 1"
  }, {
    type: 'MULTI_SELECT',
    refer: 'selectM',
    optionKey: 'key',
    optionValue: 'value',
    placeholder: "Select 1"
  }, {
    type: 'SELECT',
    refer: 'select2',
    className: 'col-3',
    isDynamicOptions: true,
    // isHidden : "req.select1 === '_0002' "
    placeholder: "Select 2",
    dependencies: ['select3']
  }, {
    type: 'SELECT',
    refer: 'select3',
    className: 'col-3',
    isDynamicOptions: true,
    placeholder: "Select 3"
  }, {
    type: 'INPUT',
    refer: 'input',
    placeholder: "Please enter",
    inputType: 'textArea',
    rows: 6
  }, {
    type: 'TYPEAHEAD',
    refer: 'typeahead',
    items: [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }],
    placeholder: "Typeahead"
  }, {
    type: 'RADIO',
    refer: 'radio',
    className: 'col-6',
    label: "Select",
    inline: true,
    items: [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }]
  }];
  (0, _react.useEffect)(function () {//setValues()
  }, []);

  var setValues = function setValues() {
    setTimeout(function () {
      setCreateReq({
        select1: "_0001",
        select2: "aaaaa"
      });
    }, 2000);
  };

  var getItemsList = function getItemsList(refer) {
    if (refer === 'select2' && _dataSource.default[createReq.select1]) return _dataSource.default[createReq.select1];
    if (refer === 'select3' && _dataSource.default[createReq.select2]) return _dataSource.default[createReq.select2];
    if (refer === 'selectM') return [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }];
    return [];
  };

  var saveData = function saveData() {
    console.log(createReq); //this.setState({createReq:{}})
  };

  var handleOnChange = function handleOnChange(value, refer) {
    console.log('hereeeee', value, refer);
    createReq[refer] = value;
    setCreateReq(_objectSpread({}, createReq));
  };

  var someProps = {
    greeting: '<React.Fragment>Hello<a href="/${name_profile}">Hello</a></React.Fragment>'
  };

  var onMarkerLabelClick = function onMarkerLabelClick(id) {
    console.log("FFF", id);
  };

  var onLocationSelect = function onLocationSelect(lat, lng) {
    console.log(lat, lng);
  };

  var handleTimeChange = function handleTimeChange(time) {
    console.log('time', time);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row",
    style: {
      padding: 30
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    labelStyle: {
      color: 'blue'
    },
    label: 'Username',
    refer: "username",
    handleOnChange: handleOnChange,
    value: createReq.username,
    style: {
      backgroundColor: 'red'
    },
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-home",
      style: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: 6
      }
    }),
    placeholder: "Username ..."
  }), /*#__PURE__*/_react.default.createElement(_TKPhoneInput.default, {
    inputProps: {
      width: '100%'
    },
    label: 'Phone Number',
    refer: "phone",
    handleOnChange: handleOnChange,
    value: "+441234567",
    country: "gb"
  }), /*#__PURE__*/_react.default.createElement(_Select.default, {
    refer: "selectCombo",
    style: {
      borderRadius: 10
    },
    items: [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }],
    value: createReq.selectCombo,
    handleOnChange: handleOnChange,
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-home",
      style: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: 6
      }
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 400
    }
  }, /*#__PURE__*/_react.default.createElement(_TKDatePicker.default, {
    refer: "datePicker",
    showIcon: true,
    selectsRange: false,
    handleOnChange: handleOnChange,
    value: createReq.datePicker,
    dateFormat: "YYYY-MM-DD hh:mm a",
    returnFormat: "YYYY-MM-DD hh:mm a",
    className: 'wrapperClassName',
    placeholder: "Select the dates",
    handleTimeChange: handleTimeChange //For select multiple days
    // selectsMultiple={true}
    // disabledKeyboardNavigation={true}
    // shouldCloseOnSelect={false}
    //
    // For show tome picker
    ,
    showTimeSelect: true
  })), /*#__PURE__*/_react.default.createElement(_MyTypeahead.default, {
    placeholder: "Select supplier",
    handleOnChange: handleOnChange,
    refer: "supplier",
    optionValue: "name",
    items: [],
    value: createReq.supplier,
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_MultiSelect.default, {
    refer: "customer",
    optionKey: "id",
    items: [{
      name: 'Srigar',
      id: 1
    }, {
      name: 'Sam',
      id: 2
    }, {
      name: 'Abc',
      id: 3
    }, {
      name: 'Sddfdsffd',
      id: 4
    }] // Options to display in the dropdown
    // selectedValues={[{name: 'Srigar', id: 1}]} // Preselected value to persist in dropdown
    ,
    value: [1] // Preselected value to persist in dropdown
    // onSelect={this.onSelect.bind(this)} // Function will trigger on select event
    // onRemove={this.onRemove.bind(this)} // Function will trigger on remove event
    //displayValue={!!optionValue ? optionValue : 'name' } // Property name to display in the dropdown options
    //id='multiSelect'
    ,
    onFocus: getItemsList // disabled={true}
    ,
    placeholder: "Select customer",
    handleOnChange: handleOnChange
  }), /*#__PURE__*/_react.default.createElement(_TKCheckBox.default, {
    refer: "delivered",
    value: createReq.delivered,
    items: [{
      'key': "_0001",
      "value": "0001"
    }, {
      'key': "_0002",
      "value": "0002",
      'vff': 'gghghghjg'
    }],
    handleOnChange: handleOnChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "chat"
  }, "Your text content"), /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip"
  }, "Your text content"), /*#__PURE__*/_react.default.createElement(_TKSwitch.default, {
    refer: "toggle",
    label: "Hello",
    value: createReq.toggle,
    handleOnChange: handleOnChange
  }), /*#__PURE__*/_react.default.createElement(_MapContainer.default, {
    content: {
      longitude: 80.1255,
      latitude: 9.6615
    },
    apiKey: "XXX",
    defaultZoom: 12,
    isShowInfoWindow: false,
    disableOnMarkerClick: true,
    infoWindowContent: /*#__PURE__*/_react.default.createElement("div", {
      className: "row ml-3 mr-3"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "col-md-8"
    }, "PU : ", /*#__PURE__*/_react.default.createElement("b", null))),
    isMarkerShown: true // isShowMarkerAsLabel={true}
    // multipleMarkerContent={[{ lng:80.1255 , lat: 9.6615, labelStyle:{color:'black'},  style:{backgroundColor: 'yellow' }, label:'Job1 fghhh fyfyhfy fyy dsdsa da dsa ', _id : 123 },
    //     { lng:78.6382 , lat: 9.6615, labelStyle:{color:'black'},  style:{backgroundColor: 'white' }, label:'Job1 fghhh fyfyhfy ', _id : 1234 },
    //     {lng:80.0255 , lat: 9.6615,style:{backgroundColor:'green'}, label:'Job2', _id : 12345 }]}
    // onMarkerLabelClick={onMarkerLabelClick}
    // mapTypeId="hybrid"
    //For select the location
    ,
    isLocationSelectable: true,
    onLocationSelect: onLocationSelect //search box
    ,
    isEnabledSearchBox: true,
    searchBoxStyle: {
      width: '100%'
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: saveData
  }, "Save")));
};

var _default = Test;
exports.default = _default;