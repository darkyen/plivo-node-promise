import Request from 'request';
// obtain a defaulted object.

const UserAgent = 'NodePlivo Promised v0.1';
const baseUrl = `https://${plivo.options.host}/${plivo.options.version}/Account/`;
const headers = {
  'Content-Type': 'application/json',
  'User-Agent': UserAgent
};

Request = Request.defaults({headers, baseUrl});

// Request helper function
function PlivoRequest(action, method, params, callback, optional) {

  return new Promise((resolve, reject) => {
    if (optional) {
        if (typeof params != 'object') {
            if (typeof params == 'function') {
                callback = params;
            }
            params = {};
        }
    }

    if (!callback) {
        var callback = function() {};
    }

    const uri =  `${plivo.options.authId}/${action}/`;

    const auth = {
      pass: plivo.options.authToken,
      user: plivo.options.authId
    };

    const useJSON = method === 'POST' || method === 'PUT';
    const useQS = method === 'GET';

    const requestOptions = {
        headers: headers,
        auth: auth,
        json: true,
        uri: path
    };

    if( useJSON ){
        requestOptions.json = useJSON;
        requestOptions.body = body;
    }


    if( useQS ){
        requestOptions.qs = params;
    }

    Request(request_options, function(error, response, body){
      if (error || !response) {
        return callback(500, body)
      }
      if (response.statusCode != 201) {
          return reject(new PlivoError(error));
      }

      body = JSON.parse(body);

      resolve({response.statusCode, body});
    });
  });
};

// override defaults
PlivoRequest.defaults = (defs) => {
  Request.defaults(defs);
};


  plivo.link_application_number:{
    action:   
  },
  plivo.unlink_application_number:{
    action:   
  },
