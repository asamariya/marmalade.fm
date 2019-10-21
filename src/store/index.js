const initialState = {
	mixes: [],
	currentMix: 'Groovy disco bangers',
	playing: false,
	fromMixCloud: false
};

function mixesApp(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
		case 'PLAY_MIX':
			return {
				...state,
				currentMix: payload.currentMix,
				fromMixCloud: payload.fromMixCloud
			};
		case 'ADD_MIX':
			return {
				...state,
				mixes: [...state.mixes, {...payload, id: payload.key}]
			};
		default:
			return state;
	}
}

export default mixesApp;
