'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rest = require('./spec/rest');

var _rest2 = _interopRequireDefault(_rest);

var _PlivoRequest = require('./PlivoRequest');

var _PlivoRequest2 = _interopRequireDefault(_PlivoRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
	host: 'api.com',
	version: 'v1',
	authToken: '',
	authId: ''
};


var UserAgent = 'Node Plivo Promised v0.1';

var headers = {
	'Content-Type': 'application/json',
	'User-Agent': UserAgent
};

var grequest = _PlivoRequest2.default.defaults({ headers: headers });

var PlivoRestAPI = function () {
	function PlivoRestAPI(config) {
		_classCallCheck(this, PlivoRestAPI);

		if (!config) {
			throw new PlivoError('Auth ID and Auth Token must be provided.');
		}

		if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) != 'object') {
			throw new PlivoError('Config for RestAPI must be provided as an object.');
		}

		if (!config.authId || !config.authToken) {
			throw new PlivoError('Auth ID and Auth Token must be provided.');
		}

		this.options = Object.assign({}, defaults, config);
		var baseUrl = 'https://' + plivo.options.host + '/' + plivo.options.version + '/Account/';
		this.request = grequest.defaults({ baseUrl: baseUrl });
		this.initializeAPI();
	}

	_createClass(PlivoRestAPI, [{
		key: 'initializeAPI',
		value: function initializeAPI() {
			var _this = this;

			var api = {};
			Object.keys(_rest2.default).forEach(function (methodName) {
				var _restApiSpec$methodNa = _rest2.default[methodName];
				var action = _restApiSpec$methodNa.action;
				var method = _restApiSpec$methodNa.method;
				var optional = _restApiSpec$methodNa.optional;
				var transform = _restApiSpec$methodNa.transform;

				api[methodName] = function (params) {
					return _this.request(_this.options, action, method, params, optional);
				};
				api.method.name = methodName;
			});
			this.api = api;
		}
	}]);

	return PlivoRestAPI;
}();

exports.default = PlivoRestAPI;