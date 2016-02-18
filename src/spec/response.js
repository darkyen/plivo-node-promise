const definitions = {
	conference: {
		element : 'Conference',
		validAttributes : ['muted', 'beep', 'startConferenceOnEnter', 'endConferenceOnExit', 'waitSound', 'enterSound', 'exitSound', 'timeLimit', 'hangupOnStar', 'maxMembers', 'record','recordWhenAlone', 'recordFileFormat', 'action', 'method', 'redirect', 'digitsMatch', 'callbackUrl', 'callbackMethod', 'stayAlone', 'floorEvent', 'transcriptionType', 'transcriptionUrl', 'transcriptionMethod', 'relayDTMF'],
	}
	number: {
		element : 'Number',
		validAttributes : ['sendDigits', 'sendOnPreanswer', 'sendDigitsMode'],
	}
	user: {
		element : 'User',
		validAttributes : ['sendDigits', 'sendOnPreanswer', 'sipHeaders'],
	}
	dial: {
		element : 'Dial',
		validAttributes : ['action', 'method', 'timeout', 'hangupOnStar', 'timeLimit', 'callerId', 'callerName', 'confirmSound', 'dialMusic', 'confirmKey', 'redirect', 'callbackUrl', 'callbackMethod', 'digitsMatch', 'digitsMatchBLeg', 'sipHeaders'],
    nestables : ['Number', 'User']
	}
	getDigits: {
		element : 'GetDigits',
		validAttributes : ['action', 'method', 'timeout', 'digitTimeout', 'finishOnKey', 'numDigits', 'retries', 'invalidDigitsSound', 'validDigits', 'playBeep', 'redirect', 'log'],
    nestables : ['Speak', 'Play', 'Wait']
	}
	hangup: {
		element : 'Hangup',
		validAttributes : ['schedule', 'reason'],
	}
	message: {
		element : 'Message',
		validAttributes : ['src', 'dst', 'type', 'callbackUrl', 'callbackMethod'],
	}
	play: {
		element : 'Play',
		validAttributes : ['loop'],
	}
	preAnswer: {
		element : 'PreAnswer',
		validAttributes : [],
    nestables : ['Play', 'Speak', 'GetDigits', 'Wait', 'Redirect', 'Message', 'DTMF']
	}
	record: {
		element : 'Record',
		validAttributes : ['action', 'method', 'timeout', 'finishOnKey', 'maxLength', 'playBeep', 'recordSession', 'startOnDialAnswer', 'redirect', 'fileFormat', 'callbackUrl', 'callbackMethod', 'transcriptionType', 'transcriptionUrl', 'transcriptionMethod'],
	}
	redirect: {
		element : 'Redirect',
		validAttributes : ['method'],
	}
	speak: {
		element : 'Speak',
		validAttributes : ['voice', 'language', 'loop'],
	}
	wait: {
		element : 'Wait',
		validAttributes : ['length', 'silence', 'min_silence', 'minSilence', 'beep'],
	}
	dtmf: {
		element : 'DTMF',
		validAttributes : ['digits', 'async'],
	}
}
export default definitions;