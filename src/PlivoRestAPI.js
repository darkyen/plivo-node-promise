const defaults = {
    host : 'api.com',
    version : 'v1',
    authToken : '',
    authId : '',
};
import restApiSpec from './spec/rest';
import PlivoRequest from './PlivoRequest';
import omit from 'lodash/object/omit';
const UserAgent = 'Node Plivo Promised v0.1';

const headers = {
  'Content-Type': 'application/json',
  'User-Agent': UserAgent
};

var grequest = PlivoRequest.defaults({headers});

export default class PlivoRestAPI{
	constructor(config){
	    if (!config) {
	        throw new PlivoError('Auth ID and Auth Token must be provided.');
	    }

	    if (typeof config != 'object') {
	        throw new PlivoError('Config for RestAPI must be provided as an object.');
	    }

	    if (!config.authId || !config.authToken) {
	        throw new PlivoError('Auth ID and Auth Token must be provided.');
	    }

	    this.options = Object.assign({}, defaults, config);
		const baseUrl = `https://${config.host}/${config.version}/Account/`;
	    this.request = grequest.defaults({baseUrl});
	}
}


Object.keys(restApiSpec).forEach(function (methodName){
	let {action, method, optional, transform, strips} = restApiSpec[methodName];
	PlivoRestAPI.prototype[methodName] = function (params){
		if( typeof action === 'function' ){
			action = action(params);
		}
		if( transform ){
			transform(params);
		}
		params = omit(params, strips);
		return this.request(this.options, action, method, params, optional);
	}
});
