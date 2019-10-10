import React from 'react';

const Mix = props => (
	<div className="aspect-ratio aspect-ratio--3x4 pointer bg-black">
		<div className="ph3 pv4 aspect-ratio--object mix-overlay">
			<div className="flex items-center relative z-2">
				<h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{props.name}</h1>
				{/* PlayButton goes here */}
			</div>
		</div>
	</div>
);

export default Mix;
