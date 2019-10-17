import React from 'react';
import Counter from './Counter';
const Stat = ({statName, statNumber, statWord}) => (
	<div className="mb4">
		<div className="f4 black mb0 b ttu">{statName}</div>
		<Counter end={statNumber} duration={2} />
		<div className="f5 lh-1">{statWord}</div>
	</div>
);

const playCount = mixes => mixes.reduce((accum, current) => accum + current.play_count, 0);
const timeCount = mixes => mixes.reduce((accum, current) => accum + current.audio_length, 0);

const About = ({mixes}) => (
	<div className="measure center">
		<div className=" 1h-copy mb4">
			<p className="mt0">
				Marmalade.fm features the latest and greatest in grooves, beats and world music.
			</p>
			<p>
				Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat…
				we have you covered!
			</p>
		</div>
		<div>
			<Stat statName="featuring..." statNumber={mixes.length} statWord="mixes" />
			<Stat statName="played..." statNumber={playCount(mixes)} statWord="times" />
			<Stat statName="with..." statNumber={timeCount(mixes)} statWord="seconds" />
		</div>
	</div>
);

export default About;