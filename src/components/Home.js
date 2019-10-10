import React from 'react';

import Mix from './Mix';

const Home = props => (
	<div className="flex flex-wrap justify-between mixes ph3 ph4-l">
		<div className="mix mb4">
			<Mix name="Christian Löffler Mix" id="/warmup_theweek/christian-loffler/" {...props} />
		</div>
		<div className="mix mb4">
			<Mix name="Interstellar" id="/Ambient_Epicuros/interstellar/" {...props} />
		</div>
		<div className="mix mb4">
			<Mix name="This is: Anderson .Paak" id="/mol_/this-is-anderson-paak/" {...props} />
		</div>
	</div>
);

export default Home;
