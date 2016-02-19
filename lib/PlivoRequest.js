'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _pinkiePromise = require('pinkie-promise');

var _pinkiePromise2 = _interopRequireDefault(_pinkiePromise);

var _PlivoError = require('./PlivoError');

var _PlivoError2 = _interopRequireDefault(_PlivoError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Request helper function
var grequest = _request2.default;
function PlivoRequest(config, action, method, params, optional) {
    return new _pinkiePromise2.default(function (resolve, reject) {
        if (!optional) {
            if (!params) {
                return reject(new _PlivoError2.default('No Arguments passed'));
            }
        }

        var uri = config.authId + '/' + action;

        var auth = {
            pass: config.authToken,
            user: config.authId
        };

        var useJSON = method === 'POST' || method === 'PUT';
        var useQS = method === 'GET';

        var requestOptions = {
            json: useJSON,
            auth: auth,
            uri: uri
        };

        if (useJSON) {
            requestOptions.json = useJSON;
            requestOptions.body = body;
        }

        if (useQS) {
            requestOptions.qs = params;
        }

        grequest(requestOptions, function (error, response, body) {
            console.log(error, response, body);
            if (error || !response) {
                return resolve({ statusCode: 500, body: body });
            }
            var _body = body;
            var statusCode = _body.statusCode;


            if (method === 'POST' && statusCode != 201) {
                return reject(new _PlivoError2.default(error));
            }

            body = JSON.parse(body);
            resolve({ statusCode: statusCode, body: body });
        });
    });
};

// override defaults
PlivoRequest.defaults = function (defs) {
    grequest = _request2.default.defaults(defs);
    return PlivoRequest;
};

// plivo.link_application_number:{
//   action:  
// },
// plivo.unlink_application_number:{
//   action:  
// },

exports.default = PlivoRequest;