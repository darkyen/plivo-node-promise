'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlivoResponse = require('./PlivoResponse');

var _PlivoResponse2 = _interopRequireDefault(_PlivoResponse);

var _PlivoRestAPI = require('./PlivoRestAPI');

var _PlivoRestAPI2 = _interopRequireDefault(_PlivoRestAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plivo = {
  Response: _PlivoResponse2.default,
  RestAPI: _PlivoRestAPI2.default
};

exports.default = plivo;