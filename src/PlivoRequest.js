import Request from 'request';
import Promise from 'pinkie-promise';
import PlivoError from './PlivoError';
// Request helper function
var grequest = Request;
function PlivoRequest(config, action, method, params, optional) {
  return new Promise((resolve, reject) => {
    if (!optional) {
      if( !params ){
        return reject(new PlivoError('No Arguments passed'));
      }
    }

    const uri =  `${config.authId}/${action}`;

    const auth = {
      pass: config.authToken,
      user: config.authId
    };

    const useJSON = method === 'POST' || method === 'PUT';
    const useQS = method === 'GET';

    const requestOptions = {
        json: useJSON,
        auth: auth,
        uri: uri
    };

    if( useJSON ){
        requestOptions.json = useJSON;
        requestOptions.body = body;
    }


    if( useQS ){
        requestOptions.qs = params;
    }
    
    grequest(requestOptions, function(error, response, body){
      console.log(error, response, body);
      if (error || !response) {
        return resolve({ statusCode: 500, body});
      }
      const {statusCode} = body; 

      if (method === 'POST' && statusCode != 201) {
          return reject(new PlivoError(error));
      }

      body = JSON.parse(body);
      resolve({statusCode, body});
    });
  });
};

// override defaults
PlivoRequest.defaults = (defs) => {
  grequest = Request.defaults(defs);
  return PlivoRequest;
};


  // plivo.link_application_number:{
  //   action:   
  // },
  // plivo.unlink_application_number:{
  //   action:   
  // },

export default PlivoRequest;