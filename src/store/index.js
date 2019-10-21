const initialState = {
	mixes: [],
	currentMix: 'Groovy disco bangers'
};

function mixesApp(state = initialState, action) {
	switch (action.type) {
		case 'SET_MIX':
			return {
				...state,
				currentMix: action.payload
			};
		case 'ADD_MIX':
			return {
				...state,
				mixes: [...state.mixes, action.payload]
			};
		default:
			return state;
	}
}

export default mixesApp;
