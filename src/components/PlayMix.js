import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import actions from '../store/actions';

// This component wraps around anything that when we click
// will start playing a mix for us. It provides us functionality
// rather than any design
const PlayMix = ({playMix, currentMix, playing, children, className, id, fromMixCloud}) => (
	// when our currently playing mix equals the id of the mix that this
	// component refers to, we will add a class name of 'playing'
	<div
		className={classNames({
			// it's going to add our custom classnames only when they're present
			[className]: className,
			// mixcloud takes control of actually playing the mix, and the
			// event and playstate will both come from there
			playing: id === currentMix && playing && fromMixCloud,
			// when we reqquest to play a mix, things are not loaded yet, so
			// we need to show a loading state, and we do this by seeing
			// where the event has come from
			loading: id === currentMix && !playing && !fromMixCloud
		})}
		onClick={() => playMix({currentMix: id, fromMixCloud: false})}
	>
		{children}
	</div>
);

export default connect(
	state => state,
	actions
)(PlayMix);
