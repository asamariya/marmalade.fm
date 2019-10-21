const initialState = {
	mixes: [],
	currentMix: 'Groovy disco bangers'
};

function mixesApp(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
		case 'SET_MIX':
			return {
				...state,
				currentMix: payload
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
