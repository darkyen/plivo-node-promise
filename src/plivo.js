//Get required modules
import util from 'util';
import crypto from 'crypto';
import Request from 'request';
import qs from 'querystring';
import xmlBuilder from 'xmlbuilder';
const doc = xmlBuilder.create();

const plivo = {
  options : {
    host : 'api.com',
    version : 'v1',
    authToken : ''
    authId : '',
  }
};




// Exposing generic request functionality as well.
plivo.request = PlivoRequest;



/**
 * XML Response Generation
 */

// Decalaring a class Response
function Response() {
    this.element = 'Response';
    this.nestables = ['Speak', 'Play', 'GetDigits', 'Record', 'Dial', 'Message',
                     'Redirect', 'Wait', 'Hangup', 'PreAnswer', 'Conference', 'DTMF'];
    this.valid_attributes = [];
    this.elem = doc.begin(this.element);
};

Response.prototype = {
    init: function (name, body, attributes, parent) {
        this.name = name;
        this.body = body;
        this.elem = '';

        if (this.element != 'Response') {
            this.elem.parent = parent;
            this.elem = parent.ele(this.name);
        } else {
            this.elem = this.elem.ele(this.name);
        }

        if (!attributes) {
            var attributes = {};
        }
        var keys = Object.keys(attributes);

        for (var i = 0; i < keys.length; i++) {
            if (this.valid_attributes.indexOf(keys[i]) == -1) {
                throw new PlivoError('Not a valid attribute : "' + keys[i] + '" for "' + this.name + '" Element');
            }
            this.elem.att(keys[i], attributes[keys[i]])
        }

        if (body) {
            this.elem.text(body)
        }
    },

    add: function (new_element, body, attributes) {
        if (body === undefined) {
            throw new PlivoError('No text set for ' + new_element.element + '.');
        }

        if (this.nestables.indexOf(new_element.element) > -1) {
            var parent = this.elem;
        } else {
            throw new PlivoError(new_element.element + ' cannot be nested in ' + this.element + '.');
        }
        new_element.init(new_element.element, body, attributes, parent);
        return new_element;
    },

    addConference: function (body, attributes) {
        return this.add(new Conference(Response), body, attributes);
    },

    addNumber: function (body, attributes) {
        return this.add(new Number(Response), body, attributes);
    },

    addUser: function (body) {
        return this.add(new User(Response), body, {});
    },

    addDial: function (attributes) {
        return this.add(new Dial(Response), '', attributes);
    },

    addGetDigits: function (attributes) {
        return this.add(new GetDigits(Response), '', attributes);
    },

    addHangup: function (attributes) {
        return this.add(new Hangup(Response), '', attributes);
    },

    addMessage: function (body, attributes) {
        return this.add(new Message(Response), body, attributes);
    },

    addPlay: function (body, attributes) {
        return this.add(new Play(Response), body, attributes);
    },

    addPreAnswer: function () {
        return this.add(new PreAnswer(Response), '', {});
    },

    addRecord: function (attributes) {
        return this.add(new Record(Response),'', attributes);
    },

    addRedirect: function (body, attributes) {
        return this.add(new Redirect(Response), body, attributes);
    },

    addSpeak: function (body, attributes) {
        return this.add(new Speak(Response), body, attributes);
    },

    addWait: function (attributes) {
        return this.add(new Wait(Response), '', attributes);
    },

    addDTMF: function (body, attributes) {
        return this.add(new DTMF(Response), body, attributes);
    },

    toXML: function () {
        return this.elem.toString();
    }
}
/**
 * Module Exports
 */

exports.Response = function () {
    return new Response();
}

exports.RestAPI = function (config) {
    if (!config) {
        throw new PlivoError('Auth ID and Auth Token must be provided.');
    }

    if (typeof config != 'object') {
        throw new PlivoError('Config for RestAPI must be provided as an object.');
    }

    if (!config.authId || !config.authToken) {
        throw new PlivoError('Auth ID and Auth Token must be provided.');
    }

    // override default config according to the config provided.
    for (key in config) {
        plivo.options[key] = config[key];
    }

    return plivo;
}
