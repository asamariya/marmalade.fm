import React from 'react';
import Counter from './Counter';

const Stat = ({statName, statNumber, statWord}) => (
	<div className="mb4">
		<div className="f4 black mb0 b ttu">{statName}</div>
		<Counter end={statNumber} duration={2} />
		<div className="f5 lh-1">{statWord}</div>
	</div>
);

export default Stat;
