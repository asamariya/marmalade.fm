const playMix = payload => ({
	type: 'PLAY_MIX',
	payload
});

const addMix = payload => ({
	type: 'ADD_MIX',
	payload
});

const setWidgetReady = payload => ({
	type: 'SET_WIDGET_READY',
	payload
})

export default {
	setWidgetReady,
	playMix,
	addMix
};
