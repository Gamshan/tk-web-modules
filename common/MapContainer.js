"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _marker = _interopRequireDefault(require("./marker.png"));

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

require("./MarkerLabel.css");

var _StandaloneSearchBox = _interopRequireDefault(require("react-google-maps/lib/components/places/StandaloneSearchBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
// const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
var LabelOverlay = function LabelOverlay(_ref) {
  var position = _ref.position,
      label = _ref.label,
      style = _ref.style,
      labelStyle = _ref.labelStyle,
      _onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.OverlayView, {
    position: position,
    mapPaneName: _reactGoogleMaps.OverlayView.OVERLAY_MOUSE_TARGET
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: "chat arrow",
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: style.backgroundColor,
      cursor: 'pointer'
    })
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "two-line-ellipsis",
    style: _objectSpread(_objectSpread({}, labelStyle), {}, {
      cursor: 'pointer'
    })
  }, label)));
};

var mapRef;
var Map = (0, _recompose.compose)((0, _recompose.withStateHandlers)(function (props) {
  return {
    isShowInfoWindow: props.isShowInfoWindow
  };
}, {
  onMapClick: function onMapClick(props) {
    return function (e) {
      return {
        content: {
          latitude: mapRef.getCenter().lat(),
          longitude: mapRef.getCenter().lng()
        },
        markerPosition: e.latLng,
        isMarkerShown: true
      };
    };
  },
  onMarkerClick: function onMarkerClick(_ref2) {
    var isShowInfoWindow = _ref2.isShowInfoWindow;
    return function (e) {
      return {
        isShowInfoWindow: true
      };
    };
  },
  onInfoCloseClick: function onInfoCloseClick(_ref3) {
    var isShowInfoWindow = _ref3.isShowInfoWindow;
    return function (e) {
      return {
        isShowInfoWindow: false
      };
    };
  },
  options: {
    function: function _function(maps) {
      return {
        mapTypeId: "satellite"
      };
    }
  }
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.GoogleMap, {
    ref: function ref(m) {
      return mapRef = m;
    },
    zoom: props.defaultZoom,
    center: {
      lat: props.content.latitude ? props.content.latitude : 0,
      lng: props.content.longitude ? props.content.longitude : 0
    },
    onClick: function onClick(e) {
      if (props.isLocationSelectable) {
        props.onMapClick(e);
        props.onLocationSelect(e);
      }
    },
    mapTypeId: props.mapTypeId,
    onIdle: props.onMapIdle()
  }, props.isMarkerShown && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.Marker, {
    position: props.markerPosition,
    onClick: props.onMarkerClick
  }, props.isShowInfoWindow && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.InfoWindow, {
    onCloseClick: props.onInfoCloseClick,
    key: "infowindow-".concat('id'),
    options: {
      alignBottom: true,
      pane: 'mapPane',
      boxStyle: {
        width: '800px'
      }
    },
    visible: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: props.infoWindowMaxWidth,
      width: props.infoWindowWidth
    }
  }, props.infoWindowContent || /*#__PURE__*/_react.default.createElement("div", null)))), props.isShowMarkerAsLabel && props.multipleMarkerContent && props.multipleMarkerContent.map(function (markerData) {
    return /*#__PURE__*/_react.default.createElement(LabelOverlay, {
      position: markerData,
      label: markerData.label,
      style: markerData.style,
      labelStyle: markerData.labelStyle,
      onClick: function onClick() {
        return props.onMarkerLabelClick(markerData._id, {
          lat: mapRef.getCenter().lat(),
          lng: mapRef.getCenter().lng()
        });
      }
    });
  }));
});

var MapContainer = function MapContainer(props) {
  var searchBoxRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(props.content),
      _useState4 = _slicedToArray(_useState3, 2),
      content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = (0, _react.useState)({
    lat: props.content.latitude ? props.content.latitude : 0,
    lng: props.content.longitude ? props.content.longitude : 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      markerPosition = _useState6[0],
      setMarkerPosition = _useState6[1];

  var onMarkerLabelClick = function onMarkerLabelClick(e, center) {
    if (props.onMarkerLabelClick) props.onMarkerLabelClick(e);
    setContent({
      longitude: center.lng,
      latitude: center.lat
    });
  };

  var onLocationSelect = function onLocationSelect(e) {
    if (props.onLocationSelect && e.latLng && e.latLng.lat() && e.latLng.lng()) {
      props.onLocationSelect(e.latLng.lat(), e.latLng.lng());
    }
  };

  var onPlacesChanged = function onPlacesChanged(data) {
    var places = searchBoxRef.current.getPlaces();

    if (places && places.length > 0) {
      var place = places[0];
      var location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      if (props.isLocationSelectable) {
        setMarkerPosition(_objectSpread({}, location));
        props.onLocationSelect(location.lat, location.lng);
      }

      setContent({
        longitude: location.lng,
        latitude: location.lat
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%'
    }
  }, loaded && props.isEnabledSearchBox && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_StandaloneSearchBox.default, {
    ref: searchBoxRef,
    onPlacesChanged: onPlacesChanged
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search places",
    style: _objectSpread({
      boxSizing: 'border-box',
      border: '1px solid transparent',
      width: '240px',
      height: '40px',
      padding: '0 12px',
      borderRadius: '3px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      fontSize: '14px',
      outline: 'none',
      top: '10px',
      left: '10px',
      zIndex: '10'
    }, props.searchBoxStyle)
  }))), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(Map, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(props.apiKey || "AIzaSyC052ouc29GFiZfjpUxJ9-XUBW-ltoGvC8", "&libraries=places"),
    loadingElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    containerElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%'
      }
    }),
    mapElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    content: content,
    defaultZoom: props.defaultZoom || 12,
    mapTypeId: props.mapTypeId || "terrain",
    disableOnMarkerClick: props.disableOnMarkerClick,
    isShowInfoWindow: props.isShowInfoWindow,
    infoWindowContent: props.infoWindowContent,
    infoWindowWidth: props.infoWindowWidth || 300,
    infoWindowMaxWidth: props.infoWindowMaxWidth || 400,
    isShowMarkerAsLabel: props.isShowMarkerAsLabel || false,
    isMarkerShown: props.isMarkerShown,
    multipleMarkerContent: props.multipleMarkerContent,
    onMarkerLabelClick: onMarkerLabelClick,
    onLocationSelect: onLocationSelect,
    isLocationSelectable: props.isLocationSelectable,
    onMapIdle: function onMapIdle() {
      return setLoaded(true);
    },
    markerPosition: markerPosition
  })));
};

var _default = MapContainer;
exports.default = _default;