"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printDiv = exports.isAllowedSubmenu = exports.isAllowedModules = exports.getImageExtension = exports.getSafeValues = exports.getObjectByKey = exports.getValueByKey = exports.getPathPrefix = void 0;

var _Auth = _interopRequireDefault(require("./Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPathPrefix = function getPathPrefix(props) {
  var location = props.location;
  return location.pathname.split('/')[1];
};

exports.getPathPrefix = getPathPrefix;

var getValueByKey = function getValueByKey(array, key) {
  var obj = {};
  if (array && array.length > 0) obj = array.find(function (obj) {
    return obj.key === key;
  });
  return obj && obj.value ? obj.value : "";
};

exports.getValueByKey = getValueByKey;

var getObjectByKey = function getObjectByKey(array, key) {
  var obj = {};
  if (array && array.length > 0) obj = array.find(function (obj) {
    return obj.key === key;
  });
  return obj;
};

exports.getObjectByKey = getObjectByKey;

var getSafeValues = function getSafeValues() {
  if (arguments.length < 2) return null;
  var object = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    try {
      object = object[arguments[i]];
    } catch (e) {
      return null;
    }
  }

  return object;
};

exports.getSafeValues = getSafeValues;

var getImageExtension = function getImageExtension(image) {
  if (image && image.name) if (image.name.split('.') && image.name.split('.').length > 0) return image.name.split('.').pop();
  return "jpeg";
};

exports.getImageExtension = getImageExtension;

var isAllowedModules = function isAllowedModules(validSubscriptionList, key) {
  var allowedModules = getSafeValues(validSubscriptionList, 'allowedModules');
  if (Array.isArray(allowedModules) && allowedModules.indexOf(key) > -1) return true;
  return false;
};

exports.isAllowedModules = isAllowedModules;

var isAllowedSubmenu = function isAllowedSubmenu(allowedRoles) {
  console.log(_Auth.default.getRoles());

  var userRoles = _Auth.default.getRoles();

  var found = allowedRoles.some(function (role) {
    return userRoles.indexOf(role) >= 0;
  });
  return found;
};

exports.isAllowedSubmenu = isAllowedSubmenu;

var printDiv = function printDiv(elementId, paperWidth, windowHeight, windowWidth) {
  var css = "@media print { @page {size: 5in 5in ;} body {display: block; font: 12pt \"Tahoma\" ; width: ".concat(paperWidth ? paperWidth : '4in', "; height: auto;}}");
  var printableElements = document.getElementById(elementId);
  var WinPrint = window.open('', '_blank', "height=".concat(windowHeight ? windowHeight : 600, ",width=").concat(windowWidth ? windowWidth : 600, ",scrollbars=yes"));
  WinPrint.open();
  WinPrint.document.write('<html><head><title>::Bill::</title><style>' + css + '</style></head><body>');
  WinPrint.document.write(printableElements.innerHTML);
  WinPrint.document.write('</body></html>');
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
};

exports.printDiv = printDiv;