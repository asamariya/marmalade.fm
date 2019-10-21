const playMix = payload => ({
	type: 'PLAY_MIX',
	payload
});

const addMix = payload => ({
	type: 'ADD_MIX',
	payload
});

export default {
	playMix,
	addMix
};
