const initialState = {
	mixes: [],
	currentMix: '',
	playing: false,
	fromMixCloud: false
};

function mixesApp(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
		case 'PLAY_MIX':
			return {
				...state,
				// spread our the payload rather than listening them one by one
				// it stops them overwriting each other
				...payload
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
