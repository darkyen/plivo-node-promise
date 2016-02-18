// The entire api,
// boy this is so mantain isn't it ?
const apiSpec = {
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
    action: (params) => `Call/${params.call}/`,
    strips: ['call']
  },
  getLiveCalls: {
    method: 'GET',
    optional: true,
    action: 'Call/',
    transform: () => {
      params.status = 'live';
    }
  },
  transferCall: {
    method: 'POST',
    action: (params) => `Call/${params.call}/`,
  },
  hangupAllCalls:{
    method: 'DELETE',
    action: 'Call/', 
  },
  hangupCall:{
    method: 'DELETE',
    action: (params) => `Call/${params.call}/`,
    strips: ['call'],
  },
  record:{
    method: 'POST',
    action: (params) => `Call/${params.call}/Record/`,
    strips: ['call'],
  },
  recordStop:{
    method: 'DELETE',
    action: (params) => `Call/${params.call}/Record/`,
    strips: ['call'],
  },
  play:{
    method: 'POST',
    action: (params) => `Call/${params.call}/Play/`,
    strips: ['call'],
  },
  playStop:{
    method: 'DELETE',
    action: (params) => `Call/${params.call}/Play/`,
    strips: ['call'],
  },
  speak:{
    method: 'POST',
    action: (params) => `Call/${params.call}/Speak/`,
    strips: ['call'],
  },
  speakStop:{
    method: 'DELETE',
    action: (params) => `Call/${params.call}/Speak/`,
    strips: ['call'],
  },
  sendDigits:{
    method: 'POST',
    action: (params) => `Call/${params.call}/DTMF/`,
    strips: ['call'],
  },
  hangupRequest:{
    method: 'DELETE',
    action: (params) => `Request/${params.request}/`,
    strips: ['request'],
  },
  getLiveConferences:{
    method: 'GET',
    action: 'Conference/',
    optional: true,  
  },
  getLiveConference:{
    method: 'GET',
    action: (params) => `Conference/${params.conference}/`,
    strips: ['conference'],
  },
  hangupAllConferences:{
    method: 'DELETE',
    action: 'Conference/',  
  },
  hangupConference:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/`,
    strips: ['conference'],
  },
  hangupConferenceMember:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/`,
    strips: ['conference', 'member'],
  },
  playConferenceMember:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Play/`,
    strips: ['conference', 'member'],
  },
  stopPlayConferenceMember:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Play/`,
    strips: ['conference', 'member'],
  },
  speakConferenceMember:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Speak/`,
    strips: ['conference', 'member'],
  },
  stopSpeakConferenceMember:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Speak/`,
    strips: ['conference', 'member'],
  },
  deafConferenceMember:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Deaf/`,
    strips: ['conference', 'member'],
  },
  undeafConferenceMember:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Deaf/`,
    strips: ['conference', 'member'],
  },
  muteConferenceMember:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Mute/`,
    strips: ['conference', 'member'],
  },
  unmuteConferenceMember:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Mute/`,
    strips: ['conference', 'member'],
  },
  kickConferenceMember:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Member/${params.member}/Kick/`,
    strips: ['conference', 'member'],
  },
  recordConference:{
    method: 'POST',
    action: (params) => `Conference/${params.conference}/Record/`,
    strips: ['conference'],
  },
  stopRecordConference:{
    method: 'DELETE',
    action: (params) => `Conference/${params.conference}/Record/`,
    strips: ['conference'],
  },

  getAccount: {
    optional: true,
    method: 'GET',
    action: '',
  },
  modifyAccount: {
    method: 'POST',
    action: '',  
  },
  getSubaccounts: {
    method: 'GET',
    action: 'Subaccount/',  
  },
  getSubaccount: {
    method: 'GET',
    action: (params) => `Subaccount/${params.subauth}/`,
    strips: ['subauth'],
  },
  createSubaccount: {
    method: 'POST',
    action: 'Subaccount/',  
  },
  modifySubaccount: {
    method: 'POST',
    action: (params) => `Subaccount/${params.subauth}/`,
    strips: ['subauth'],
  },
  deleteSubaccount: {
    method: 'DELETE',
    action: (params) => `Subaccount/${params.subauth}/`,
    strips: ['subauth'],
  },
  getApplications: {
    method: 'GET',
    action: 'Application/',  
  },
  getApplication: {
    method: 'GET',
    action: (params) => `Application/${params.app}/`,
    strips: ['app'],
  },
  createApplication: {
    method: 'POST',
    action: 'Application/',  
  },
  modifyApplication: {
    method: 'POST',
    action: (params) => `Application/${params.app}/`,
    strips: ['app'],
  },
  deleteApplication: {
    method: 'DELETE',
    action: (params) => `Application/${params.app}/`,
    strips: ['app'],
  },
  getRecordings: {
    method: 'GET',
    action: 'Recording/',  
  },
  getRecording: {
    method: 'GET',
    action: (params) => `Recording/${params.recording}/`,
    strips: ['recording'],
  },
  deleteRecording: {
    method: 'DELETE',
    action: (params) => `Recording/${params.recording}/`,
    strips: ['recording'],
  },
  getEndpoints: {
    method: 'GET',
    action: 'Endpoint/',  
  },
  getEndpoint: {
    method: 'GET',
    action: (params) => `Endpoint/${params.endpoint}/`,
    strips: ['endpoint'],
  },
  createEndpoint: {
    method: 'POST',
    action: 'Endpoint/',  
  },
  modifyEndpoint: {
    method: 'POST',
    action: (params) => `Endpoint/${params.endpoint}/`,
    strips: ['endpoint'],
  },
  deleteEndpoint: {
    method: 'DELETE',
    action: (params) => `Endpoint/${params.endpoint}/`,
    strips: ['endpoint'],
  },
  getNumbers: {
    method: 'GET',
    action: 'Number/',  
  },
  getNumberDetails: {
    method: 'GET',
    action: (params) => `Number/${params.number}/`,
    strips: ['number'],
  },
  unrentNumber: {
    method: 'DELETE',
    action: (params) => `Number/${params.number}/`,
    strips: ['number'],
  },
  getNumberGroup: {
    method: 'GET',
    action: 'AvailableNumberGroup/',  
  },
  getNumberGroupDetails: {
    method: 'GET',
    action: (params) => `AvailableNumberGroup/${params.group}/`,
    strips: ['group'],
  },
  rentFromNumberGroup: {
    method: 'POST',
    action: (params) => `AvailableNumberGroup/${params.group}/`,
    strips: ['group'],
    optional: true,
  },
  editNumber: {
    method: 'POST',
    action: (params) => `Number/${params.number}/`, 
    strips: ['number'],
  },
  searchPhoneNumbers: {
    method: 'GET',
    action: 'PhoneNumber/',  
  },
  buyPhoneNumber: {
    method: 'POST',
    action: (params) => `PhoneNumber/${params.number}/`,
    strips: ['number'],
    optional: true,
  },
  sendMessage: {
    method: 'POST',
    action: 'Message/',  
  },
  getMessages: {
    method: 'GET',
    action: 'Message/',
  },
  getMessage: {
    method: 'GET',
    action: (params) => `Message/${params.message}/`,
    strips: ['message'],
  },
  getIncomingCarriers: {
    method: 'GET',
    action: 'IncomingCarrier/',  
  },
  getIncomingCarrier: {
    method: 'GET',
    action: (params) => `IncomingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  createIncomingCarrier: {
    method: 'POST',
    action: 'IncomingCarrier/',  
  },
  modifyIncomingCarrier: {
    method: 'POST',
    action: (params) => `IncomingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  deleteIncomingCarrier: {
    method: 'DELETE',
    action: (params) => `IncomingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  getOutgoingCarriers: {
    method: 'GET',
    action: 'OutgoingCarrier/',  
  },
  getOutgoingCarrier: {
    method: 'GET',
    action: (params) => `OutgoingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  createOutgoingCarrier: {
    method: 'POST',
    action: 'OutgoingCarrier/',  
  },
  modifyOutgoingCarrier: {
    method: 'POST',
    action: (params) => `OutgoingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  deleteOutgoingCarrier: {
    method: 'DELETE',
    action: (params) => `OutgoingCarrier/${params.carrier}/`,
    strips: ['carrier'],
  },
  getOutgoingCarrierRoutings: {
    method: 'GET',
    action: 'OutgoingCarrierRouting/',  
  },
  getOutgoingCarrierRouting: {
    method: 'GET',
    action: (params) => `OutgoingCarrierRouting/${params.routing}/`,
    strips: ['routing'],
  },
  createOutgoingCarrierRouting: {
    method: 'POST',
    action: 'OutgoingCarrierRouting/',  
  },
  modifyOutgoingCarrierRouting: {
    method: 'POST',
    action: (params) => `OutgoingCarrierRouting/${params.routing}/`,
    strips: ['routing'],
  },
  deleteOutgoingCarrierRouting: {
    method: 'DELETE',
    action: (params) => `OutgoingCarrierRouting/${params.routing}/`,
    strips: ['routing'],
  },
  getPricing: {
    method: 'GET',
    action: 'Pricing/',  
  },
};

export default apiSpec;
