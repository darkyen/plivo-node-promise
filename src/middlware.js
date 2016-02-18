import PlivoError from './PlivoError';
import createSignature from './createSignature';
// I don't really like this
class PlivoAuthError extends PlivoError{};

export default function plivoMiddlewareGenerator(options) {
  return function plivoMiddleware(req, res, next) {
    if (process.env.NODE_ENV === 'test') return next()
    var toSign;
    if (options && options.host) {
      toSign = options.host;
    } else {
      toSign = req.protocol + '://' + req.host;
    }
    toSign += req.originalUrl;

    var expectedSignature = createSignature(toSign, req.body, options);

    if (expectedSignature === req.header('X-Plivo-Signature')) {
      next();
    } else {
      var msg = 'Invalid Plivo Signature toSign=' + toSign + ', ' +
                'expected=' + expectedSignature + ', ' +
                'actual=' + req.header('X-Plivo-Signature');
      next(new Error(msg));
    }
  };
};