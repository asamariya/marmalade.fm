import React from 'react';
import PlayMix from './PlayMix';
import PlayButton from './PlayButton';

const FeaturedMix = ({name, pictures = {}, ...props}) => (
	<div
		className="w-50-l vh-100 flex items-center justify-center cover mix-overlay
	bg-center bg-featured pad-bottom fixed-l left-0"
		style={{backgroundImage: `url(${pictures.extra_large})`}}
	>
		<PlayMix {...props}>
			<div className="w-100 tc pa-3 relative z-2">
				<p className="b biryani f6 white f6 ttu">Featured Mix</p>
				<h1 className="mix-title mt0 mb3 anton white ttu">{name}</h1>
				<PlayButton />
			</div>
		</PlayMix>
	</div>
);

export default FeaturedMix;
