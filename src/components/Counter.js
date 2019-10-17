import React from 'react';
import CountUp from 'react-countup';

const Counter = ({start = 0, end, ...props}) => (
	<div className="f1 orange b mb0 lh-1">
		<CountUp start={start} end={end} useEasing={true} useGrouping={true} separator="," {...props} />
	</div>
);

export default Counter;
