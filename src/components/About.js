import React from 'react';

import Stat from './Stat';
const playCount = mixes => mixes.reduce((accum, current) => accum + current.play_count, 0);
const timeCount = mixes => mixes.reduce((accum, current) => accum + current.audio_length, 0);

const About = ({mixes}) => (
	<div className="pad-bottom ph3 ph4-l">
		<div className="measure center 1h-copy">
			<p className="mt0">
				Marmalade.fm features the latest and greatest in grooves, beats and world music.
			</p>
			<p className="mb4">
				Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat…
				we have you covered!
			</p>

			<Stat statName="featuring..." statNumber={mixes.length} statWord="mixes" />
			<Stat statName="played..." statNumber={playCount(mixes)} statWord="times" />
			<Stat statName="with..." statNumber={timeCount(mixes)} statWord="seconds" />
		</div>
	</div>
);

export default About;
