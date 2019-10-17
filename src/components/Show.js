import React, {Component} from 'react';
import Stat from './Stat';

import differenceInDays from 'date-fns/difference_in_days';

class Show extends Component {
	render() {
		const {match, mixes} = this.props;
		const [mix = {}] = mixes.filter(mix => mix.slug === match.params.slug);

		return (
			<div className="ph3 ph4-l pad-bottom">
				<div className="measure center lh-copy">
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
