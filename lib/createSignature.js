'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPlivoSignature;
// For verifying the plivo server signature
function createPlivoSignature(url, params, options) {
  var toSign = url;

  Object.keys(params).sort().forEach(function (key) {
    toSign += key + params[key];
  });

  var signature = crypto.createHmac('sha1', options.authToken).update(new Buffer(toSign, 'utf-8')).digest('base64');

  return signature;
};