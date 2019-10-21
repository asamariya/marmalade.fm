/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const setMix = payload => ({
	type: 'SET_MIX',
	payload
});

const addMix = payload => ({
	type: 'ADD_MIX',
	payload
});

export default {
	setMix,
	addMix
};
