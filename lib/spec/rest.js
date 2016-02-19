'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var definitions = {
  makeCall: {
    method: 'POST',
    action: 'Call/'
  },
  getCdrs: {
    method: 'GET',
    action: 'Call/'
  },
  getCdr: {
    method: 'GET',
    action: function action(params) {
      return 'Call/' + params.call + '/';
    },
    strips: ['call']
  },
  getLiveCalls: {
    method: 'GET',
    optional: true,
    action: 'Call/',
    transform: function transform() {
      params.status = 'live';
    }
  },
  transferCall: {
    method: 'POST',
    action: function action(params) {
      return 'Call/' + params.call + '/';
    }
  },
  hangupAllCalls: {
    method: 'DELETE',
    action: 'Call/'
  },
  hangupCall: {
    method: 'DELETE',
    action: function action(params) {
      return 'Call/' + params.call + '/';
    },
    strips: ['call']
  },
  record: {
    method: 'POST',
    action: function action(params) {
      return 'Call/' + params.call + '/Record/';
    },
    strips: ['call']
  },
  recordStop: {
    method: 'DELETE',
    action: function action(params) {
      return 'Call/' + params.call + '/Record/';
    },
    strips: ['call']
  },
  play: {
    method: 'POST',
    action: function action(params) {
      return 'Call/' + params.call + '/Play/';
    },
    strips: ['call']
  },
  playStop: {
    method: 'DELETE',
    action: function action(params) {
      return 'Call/' + params.call + '/Play/';
    },
    strips: ['call']
  },
  speak: {
    method: 'POST',
    action: function action(params) {
      return 'Call/' + params.call + '/Speak/';
    },
    strips: ['call']
  },
  speakStop: {
    method: 'DELETE',
    action: function action(params) {
      return 'Call/' + params.call + '/Speak/';
    },
    strips: ['call']
  },
  sendDigits: {
    method: 'POST',
    action: function action(params) {
      return 'Call/' + params.call + '/DTMF/';
    },
    strips: ['call']
  },
  hangupRequest: {
    method: 'DELETE',
    action: function action(params) {
      return 'Request/' + params.request + '/';
    },
    strips: ['request']
  },
  getLiveConferences: {
    method: 'GET',
    action: 'Conference/',
    optional: true
  },
  getLiveConference: {
    method: 'GET',
    action: function action(params) {
      return 'Conference/' + params.conference + '/';
    },
    strips: ['conference']
  },
  hangupAllConferences: {
    method: 'DELETE',
    action: 'Conference/'
  },
  hangupConference: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/';
    },
    strips: ['conference']
  },
  hangupConferenceMember: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/';
    },
    strips: ['conference', 'member']
  },
  playConferenceMember: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Play/';
    },
    strips: ['conference', 'member']
  },
  stopPlayConferenceMember: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Play/';
    },
    strips: ['conference', 'member']
  },
  speakConferenceMember: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Speak/';
    },
    strips: ['conference', 'member']
  },
  stopSpeakConferenceMember: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Speak/';
    },
    strips: ['conference', 'member']
  },
  deafConferenceMember: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Deaf/';
    },
    strips: ['conference', 'member']
  },
  undeafConferenceMember: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Deaf/';
    },
    strips: ['conference', 'member']
  },
  muteConferenceMember: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Mute/';
    },
    strips: ['conference', 'member']
  },
  unmuteConferenceMember: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Mute/';
    },
    strips: ['conference', 'member']
  },
  kickConferenceMember: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Member/' + params.member + '/Kick/';
    },
    strips: ['conference', 'member']
  },
  recordConference: {
    method: 'POST',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Record/';
    },
    strips: ['conference']
  },
  stopRecordConference: {
    method: 'DELETE',
    action: function action(params) {
      return 'Conference/' + params.conference + '/Record/';
    },
    strips: ['conference']
  },

  getAccount: {
    optional: true,
    method: 'GET',
    action: ''
  },
  modifyAccount: {
    method: 'POST',
    action: ''
  },
  getSubaccounts: {
    method: 'GET',
    action: 'Subaccount/'
  },
  getSubaccount: {
    method: 'GET',
    action: function action(params) {
      return 'Subaccount/' + params.subauth + '/';
    },
    strips: ['subauth']
  },
  createSubaccount: {
    method: 'POST',
    action: 'Subaccount/'
  },
  modifySubaccount: {
    method: 'POST',
    action: function action(params) {
      return 'Subaccount/' + params.subauth + '/';
    },
    strips: ['subauth']
  },
  deleteSubaccount: {
    method: 'DELETE',
    action: function action(params) {
      return 'Subaccount/' + params.subauth + '/';
    },
    strips: ['subauth']
  },
  getApplications: {
    method: 'GET',
    action: 'Application/'
  },
  getApplication: {
    method: 'GET',
    action: function action(params) {
      return 'Application/' + params.app + '/';
    },
    strips: ['app']
  },
  createApplication: {
    method: 'POST',
    action: 'Application/'
  },
  modifyApplication: {
    method: 'POST',
    action: function action(params) {
      return 'Application/' + params.app + '/';
    },
    strips: ['app']
  },
  deleteApplication: {
    method: 'DELETE',
    action: function action(params) {
      return 'Application/' + params.app + '/';
    },
    strips: ['app']
  },
  getRecordings: {
    method: 'GET',
    action: 'Recording/'
  },
  getRecording: {
    method: 'GET',
    action: function action(params) {
      return 'Recording/' + params.recording + '/';
    },
    strips: ['recording']
  },
  deleteRecording: {
    method: 'DELETE',
    action: function action(params) {
      return 'Recording/' + params.recording + '/';
    },
    strips: ['recording']
  },
  getEndpoints: {
    method: 'GET',
    action: 'Endpoint/'
  },
  getEndpoint: {
    method: 'GET',
    action: function action(params) {
      return 'Endpoint/' + params.endpoint + '/';
    },
    strips: ['endpoint']
  },
  createEndpoint: {
    method: 'POST',
    action: 'Endpoint/'
  },
  modifyEndpoint: {
    method: 'POST',
    action: function action(params) {
      return 'Endpoint/' + params.endpoint + '/';
    },
    strips: ['endpoint']
  },
  deleteEndpoint: {
    method: 'DELETE',
    action: function action(params) {
      return 'Endpoint/' + params.endpoint + '/';
    },
    strips: ['endpoint']
  },
  getNumbers: {
    method: 'GET',
    action: 'Number/'
  },
  getNumberDetails: {
    method: 'GET',
    action: function action(params) {
      return 'Number/' + params.number + '/';
    },
    strips: ['number']
  },
  unrentNumber: {
    method: 'DELETE',
    action: function action(params) {
      return 'Number/' + params.number + '/';
    },
    strips: ['number']
  },
  getNumberGroup: {
    method: 'GET',
    action: 'AvailableNumberGroup/'
  },
  getNumberGroupDetails: {
    method: 'GET',
    action: function action(params) {
      return 'AvailableNumberGroup/' + params.group + '/';
    },
    strips: ['group']
  },
  rentFromNumberGroup: {
    method: 'POST',
    action: function action(params) {
      return 'AvailableNumberGroup/' + params.group + '/';
    },
    strips: ['group'],
    optional: true
  },
  editNumber: {
    method: 'POST',
    action: function action(params) {
      return 'Number/' + params.number + '/';
    },
    strips: ['number']
  },
  searchPhoneNumbers: {
    method: 'GET',
    action: 'PhoneNumber/'
  },
  buyPhoneNumber: {
    method: 'POST',
    action: function action(params) {
      return 'PhoneNumber/' + params.number + '/';
    },
    strips: ['number'],
    optional: true
  },
  sendMessage: {
    method: 'POST',
    action: 'Message/'
  },
  getMessages: {
    method: 'GET',
    action: 'Message/'
  },
  getMessage: {
    method: 'GET',
    action: function action(params) {
      return 'Message/' + params.message + '/';
    },
    strips: ['message']
  },
  getIncomingCarriers: {
    method: 'GET',
    action: 'IncomingCarrier/'
  },
  getIncomingCarrier: {
    method: 'GET',
    action: function action(params) {
      return 'IncomingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  createIncomingCarrier: {
    method: 'POST',
    action: 'IncomingCarrier/'
  },
  modifyIncomingCarrier: {
    method: 'POST',
    action: function action(params) {
      return 'IncomingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  deleteIncomingCarrier: {
    method: 'DELETE',
    action: function action(params) {
      return 'IncomingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  getOutgoingCarriers: {
    method: 'GET',
    action: 'OutgoingCarrier/'
  },
  getOutgoingCarrier: {
    method: 'GET',
    action: function action(params) {
      return 'OutgoingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  createOutgoingCarrier: {
    method: 'POST',
    action: 'OutgoingCarrier/'
  },
  modifyOutgoingCarrier: {
    method: 'POST',
    action: function action(params) {
      return 'OutgoingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  deleteOutgoingCarrier: {
    method: 'DELETE',
    action: function action(params) {
      return 'OutgoingCarrier/' + params.carrier + '/';
    },
    strips: ['carrier']
  },
  getOutgoingCarrierRoutings: {
    method: 'GET',
    action: 'OutgoingCarrierRouting/'
  },
  getOutgoingCarrierRouting: {
    method: 'GET',
    action: function action(params) {
      return 'OutgoingCarrierRouting/' + params.routing + '/';
    },
    strips: ['routing']
  },
  createOutgoingCarrierRouting: {
    method: 'POST',
    action: 'OutgoingCarrierRouting/'
  },
  modifyOutgoingCarrierRouting: {
    method: 'POST',
    action: function action(params) {
      return 'OutgoingCarrierRouting/' + params.routing + '/';
    },
    strips: ['routing']
  },
  deleteOutgoingCarrierRouting: {
    method: 'DELETE',
    action: function action(params) {
      return 'OutgoingCarrierRouting/' + params.routing + '/';
    },
    strips: ['routing']
  },
  getPricing: {
    method: 'GET',
    action: 'Pricing/'
  }
};

exports.default = definitions;