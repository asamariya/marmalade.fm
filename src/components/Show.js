/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';
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
	render() {
		const {match, mixes} = this.props;
		const [mix = {}] = mixes.filter(mix => mix.slug === match.params.slug);

		return (
			<div className="ph3 ph4-l pad-bottom">
				<div className="measure center lh-copy">
					<Tags tags={mix.tags} />
					<p>{mix.description}</p>
					<Stat statName="plays" statNumber={mix.play_count} statWord="times" />
					<Stat
						statName="uploaded"
						statNumber={differenceInDays(new Date(), mix.created_time)}
						statWord="days ago"
					/>
					<Stat statName="lasting for" statNumber={mix.audio_length / 60} statWord="minutes" />
				</div>
			</div>
		);
	}
}

export default Show;
