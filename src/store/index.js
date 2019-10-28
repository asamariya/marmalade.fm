const initialState = {
	mixes: [],
	currentMix: null,
	widgetReady: false,
	playing: false,
	fromMixCloud: false,
	featuredMix: null
};

function mixesApp(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
		case 'PLAY_MIX':
			const {currentMix, playing} = payload;
			return {
				...state,
				// spread our the payload rather than listening them one by one
				// it stops them overwriting each other
				...payload,
				playing: currentMix === state.currentMix ? !playing : playing
			};
		case 'ADD_MIX':
			return {
				...state,
				mixes: [...state.mixes, {...payload, id: payload.key}]
			};
		case 'SET_WIDGET_READY':
			return {
				...state,
				widgetReady: true
			};
		case 'SET_FEATURED_MIX':
			return {
				...state,
				featuredMix: payload
			};
		default:
			return state;
	}
}

export default mixesApp;
