import React from 'react';

import Mix from './Mix';

const Home = props => (
	<div className="flex flex-wrap justify-between mixes ph3 ph4-l">
		{props.mix && (
			<div className="mix mb4">
				<Mix {...props} {...props.mix} />
			</div>
		)}
	</div>
);

export default Home;
