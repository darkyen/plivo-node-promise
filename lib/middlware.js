'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plivoMiddlewareGenerator;

var _PlivoError2 = require('./PlivoError');

var _PlivoError3 = _interopRequireDefault(_PlivoError2);

var _createSignature = require('./createSignature');

var _createSignature2 = _interopRequireDefault(_createSignature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// I don't really like this

var PlivoAuthError = function (_PlivoError) {
  _inherits(PlivoAuthError, _PlivoError);

  function PlivoAuthError() {
    _classCallCheck(this, PlivoAuthError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlivoAuthError).apply(this, arguments));
  }

  return PlivoAuthError;
}(_PlivoError3.default);

;

function plivoMiddlewareGenerator(options) {
  return function plivoMiddleware(req, res, next) {
    if (process.env.NODE_ENV === 'test') return next();
    var toSign;
    if (options && options.host) {
      toSign = options.host;
    } else {
      toSign = req.protocol + '://' + req.host;
    }
    toSign += req.originalUrl;

    var expectedSignature = (0, _createSignature2.default)(toSign, req.body, options);

    if (expectedSignature === req.header('X-Plivo-Signature')) {
      next();
    } else {
      var msg = 'Invalid Plivo Signature toSign=' + toSign + ', ' + 'expected=' + expectedSignature + ', ' + 'actual=' + req.header('X-Plivo-Signature');
      next(new Error(msg));
    }
  };
};