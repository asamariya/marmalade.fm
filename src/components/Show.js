/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '../store/actions';

import Stat from './Stat';

import differenceInDays from 'date-fns/difference_in_days';

const Tag = ({name, url}) => (
	<div className="mr2 mb2 o-70">
		<a
			href={url}
			className="block f6 link blue b ba bw1 b--blue br2 pv1 ph2 lh-title"
			target="_blank"
		>
			{name}
		</a>
	</div>
);
const Tags = ({tags = []}) => (
	<div className="tags flex flex-wrap">
		{tags.map(tag => (
			<Tag {...tag} />
		))}
	</div>
);

class Show extends Component {
	componentDidMount() {
		// when we mount our show component, we want to set the featuredMix
		// in our redux state to be the currently viewed mix
		const {setFeaturedMix, id} = this.props;
		setFeaturedMix(id);
	}

	render() {
		const {tags, description, play_count, created_time, audio_length} = this.props;

		return (
			<div className="ph3 ph4-l pad-bottom">
				<div className="measure center lh-copy">
					<Tags tags={tags} />
					<p>{description}</p>
					<Stat statName="plays" statNumber={play_count || 0} statWord="times" />
					<Stat
						statName="uploaded"
						statNumber={differenceInDays(new Date(), created_time || 0)}
						statWord="days ago"
					/>
					<Stat statName="lasting for" statNumber={audio_length / 60 || 0} statWord="minutes" />
				</div>
			</div>
		);
	}
}

// this is what we call a selector, it grabs a certain
// piece of data from our state
const getMix = (mixes, slug) => {
	// here we grab the mix that has a slug that matches our params from the url
	const [mix = {}] = mixes.filter(mix => mix.slug === slug);
	return mix;
};

export default connect(
	(state, props) => ({
		...getMix(state.mixes, props.match.params.slug)
	}),
	actions
)(Show);
