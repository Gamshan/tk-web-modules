"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Functions = require("./Functions");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "saveToken",
    value: function saveToken(token) {
      localStorage.setItem(this.appName + '-token', JSON.stringify(token));
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return JSON.parse(localStorage.getItem(this.appName + '-token'));
    }
  }, {
    key: "saveUser",
    value: function saveUser(user) {
      localStorage.setItem(this.appName + '-user', JSON.stringify(user));
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return JSON.parse(localStorage.getItem(this.appName + '-user'));
    }
  }, {
    key: "isAccessToken",
    value: function isAccessToken() {
      var token = JSON.parse(localStorage.getItem(this.appName + '-token'));
      return !!token ? !!token : false;
    }
  }, {
    key: "getRoles",
    value: function getRoles() {
      var user = JSON.parse(localStorage.getItem(this.appName + '-user'));
      return !!user && !!user.roles ? user.roles : [];
    }
  }, {
    key: "getUserType",
    value: function getUserType() {
      var user = JSON.parse(localStorage.getItem(this.appName + '-user'));
      return !!user && !!user.userType ? user.userType : '';
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      var user = JSON.parse(localStorage.getItem(this.appName + '-user'));
      return !!user ? !!user.isAdmin : false;
    }
  }, {
    key: "getGroups",
    value: function getGroups() {
      var user = JSON.parse(localStorage.getItem(this.appName + '-user'));
      return !!user && !!user.groups ? user.groups : [];
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      localStorage.removeItem(this.appName + '-token');
      localStorage.removeItem(this.appName + '-user');
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      var user = JSON.parse(localStorage.getItem(this.appName + '-user'));
      return !!user && !!user._id ? user._id : '';
    }
  }]);

  return Auth;
}();

_defineProperty(Auth, "appName", void 0);

var _default = Auth;
exports.default = _default;