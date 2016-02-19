'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlivoError = require('./PlivoError');

var _PlivoError2 = _interopRequireDefault(_PlivoError);

var _response = require('./spec/response');

var _response2 = _interopRequireDefault(_response);

var _xmlbuilder = require('xmlbuilder');

var _xmlbuilder2 = _interopRequireDefault(_xmlbuilder);

var _pick = require('lodash/object/pick');

var _pick2 = _interopRequireDefault(_pick);

var _contains = require('lodash/collection/contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Params

var PlivoResponseElement = function () {
	function PlivoResponseElement() {
		var root = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];
		var parent = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];
		var name = arguments.length <= 2 || arguments[2] === undefined ? 'Response' : arguments[2];
		var attribs = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
		var body = arguments[4];

		_classCallCheck(this, PlivoResponseElement);

		if (!name) {
			throw new Error('ResponseElement cannot be initialized without a name');
		}

		var spec = _response2.default[name];

		if (!spec) {
			throw new Error('Unknown element ' + name);
		}

		if (body) {
			if (spec.nestables) {
				throw new Error('Only elements with no nestables can have body');
			}

			if (typeof body !== 'string') {
				throw new Error('Body can only be string');
			}
			this.value = body;
		}

		this.children = [];
		this.name = name;
		this.root = root;
		this.parent = parent;
		this.attribs = (0, _pick2.default)(attribs, spec.validAttributes);
	}

	_createClass(PlivoResponseElement, [{
		key: '__toxml',
		value: function __toxml() {
			var root = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
			var name = this.name;
			var attribs = this.attribs;

			var el = root ? root.ele(name) : _xmlbuilder2.default.create(name);

			Object.keys(attribs).forEach(function (key) {
				el.att(key, attribs[key]);
			});

			this.children.forEach(function (child) {
				return child.__toxml(el);
			});

			if (this.value) {
				el.txt(this.value);
			}

			return el;
		}
	}, {
		key: 'toXML',
		value: function toXML() {
			return this.root.__toxml().end();
		}
	}]);

	return PlivoResponseElement;
}();

;

Object.keys(_response2.default).forEach(function (elName) {
	PlivoResponseElement.prototype['add' + elName] = function () {
		var nestables = _response2.default[this.name].nestables;

		var attribs = arguments.length <= 0 ? undefined : arguments[0],
		    body = null;

		if (arguments.length === 0) {
			attribs = {};
		}

		if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
			attribs = arguments.length <= 1 ? undefined : arguments[1];
			body = arguments.length <= 0 ? undefined : arguments[0];
		}

		if (!nestables) {
			throw new Error(this.elName + ' cannot have children');
		}

		if (!(0, _contains2.default)(nestables, elName)) {
			throw new Error(elName + ' cannot be inserted in ' + this.name);
		}

		var child = new PlivoResponseElement(this.root, this, elName, attribs, body);
		this.children.push(child);
		return child;
	};
});
exports.default = PlivoResponseElement;