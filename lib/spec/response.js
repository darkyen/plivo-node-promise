'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var definitions = {
	Response: {
		element: 'Response',
		nestables: ['Speak', 'Play', 'GetDigits', 'Record', 'Dial', 'Message', 'Redirect', 'Wait', 'Hangup', 'PreAnswer', 'Conference', 'DTMF']
	},
	Conference: {
		element: 'Conference',
		validAttributes: ['muted', 'beep', 'startConferenceOnEnter', 'endConferenceOnExit', 'waitSound', 'enterSound', 'exitSound', 'timeLimit', 'hangupOnStar', 'maxMembers', 'record', 'recordWhenAlone', 'recordFileFormat', 'action', 'method', 'redirect', 'digitsMatch', 'callbackUrl', 'callbackMethod', 'stayAlone', 'floorEvent', 'transcriptionType', 'transcriptionUrl', 'transcriptionMethod', 'relayDTMF']
	},
	Number: {
		validAttributes: ['sendDigits', 'sendOnPreanswer', 'sendDigitsMode'],
		element: 'Number'
	},
	User: {
		element: 'User',
		validAttributes: ['sendDigits', 'sendOnPreanswer', 'sipHeaders']
	},
	Dial: {
		element: 'Dial',
		validAttributes: ['action', 'method', 'timeout', 'hangupOnStar', 'timeLimit', 'callerId', 'callerName', 'confirmSound', 'dialMusic', 'confirmKey', 'redirect', 'callbackUrl', 'callbackMethod', 'digitsMatch', 'digitsMatchBLeg', 'sipHeaders'],
		nestables: ['Number', 'User']
	},
	GetDigits: {
		element: 'GetDigits',
		validAttributes: ['action', 'method', 'timeout', 'digitTimeout', 'finishOnKey', 'numDigits', 'retries', 'invalidDigitsSound', 'validDigits', 'playBeep', 'redirect', 'log'],
		nestables: ['Speak', 'Play', 'Wait']
	},
	Hangup: {
		element: 'Hangup',
		validAttributes: ['schedule', 'reason']
	},
	Message: {
		element: 'Message',
		validAttributes: ['src', 'dst', 'type', 'callbackUrl', 'callbackMethod']
	},
	Play: {
		element: 'Play',
		validAttributes: ['loop']
	},
	PreAnswer: {
		element: 'PreAnswer',
		validAttributes: [],
		nestables: ['Play', 'Speak', 'GetDigits', 'Wait', 'Redirect', 'Message', 'DTMF']
	},
	Record: {
		element: 'Record',
		validAttributes: ['action', 'method', 'timeout', 'finishOnKey', 'maxLength', 'playBeep', 'recordSession', 'startOnDialAnswer', 'redirect', 'fileFormat', 'callbackUrl', 'callbackMethod', 'transcriptionType', 'transcriptionUrl', 'transcriptionMethod']
	},
	Redirect: {
		element: 'Redirect',
		validAttributes: ['method']
	},
	Speak: {
		element: 'Speak',
		validAttributes: ['voice', 'language', 'loop']
	},
	Wait: {
		element: 'Wait',
		validAttributes: ['length', 'silence', 'min_silence', 'minSilence', 'beep']
	},
	DTMF: {
		element: 'DTMF',
		validAttributes: ['digits', 'async']
	}
};
exports.default = definitions;