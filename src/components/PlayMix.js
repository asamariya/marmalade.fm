import React from 'react';

// This component wraps around anything that when we click
// will start playing a mix for us. It provides us functionality
// rather than any design
const PlayMix = ({playMix, id, children}) => (
	<div className="pointer" onClick={() => playMix(id)}>
		{children}
	</div>
);

export default PlayMix;
