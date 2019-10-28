import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PlayMix from './PlayMix';
import PlayButton from './PlayButton';

const FeaturedMix = ({name, pictures = {}, picture_primary_color, title, id, slug, ...props}) => (
	<div
		className="w-50-l vh-100 flex items-center justify-center cover mix-overlay
	bg-center pad-bottom fixed-l left-0"
		style={{
			backgroundImage: `url(${pictures.extra_large})`,
			backgroundColor: `#${picture_primary_color}`
		}}
	>
		<div className="w-100 tc pa-3 relative z-2">
			<p className="b biryani f6 white f6 ttu">{title}</p>
			<h1 className="mix-title mt0 mb3 anton white ttu">{name}</h1>
			<Link to={`/show/${slug}`} className="absolute absolute--fill z-3" />
			<PlayMix id={id} className="relative z-5 pointer">
				<PlayButton />
			</PlayMix>
		</div>
	</div>
);

// on the show page, we're going to set the featuredMix
// to be the currently viewed mix

// if there's a mix playing, we want to set that as our
// featuredMix

// we want to display our first mix as our featured mix if neither of the
// above two are applicable
const getMix = (mixes, stateFeaturedMix, currentMix) => {
	// 1. If we have a featuredMix in redux, we show that first
	// 2. If there's a currently playing mix, we show that next
	// 3. Otherwise we just show the first mix

	let featuredMix;
	if (stateFeaturedMix) {
		[featuredMix] = mixes.filter(mix => mix.id === stateFeaturedMix);
	} else {
		[featuredMix] = mixes.filter(mix => mix.id === currentMix);
	}

	const [firstMix = {}] = mixes;
	// return featuredMix if it exists, otherwise return the first mix
	return featuredMix || firstMix;
};

const getTitle = state => {
	if (state.featuredMix) {
		return 'Currently viewing';
	} else if (state.currentMix && state.playing) {
		return 'Currently playing';
	} else {
		return 'Featured mix';
	}
};

export default connect(state => ({
	...getMix(state.mixes, state.featuredMix, state.currentMix),
	title: getTitle(state)
}))(FeaturedMix);
