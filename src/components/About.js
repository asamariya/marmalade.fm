import React from 'react';

const Stat = ({statName, statNumber, statWord}) => (
	<div className="w-third tc pa3 ba bw2 b--light-gray" style={{marginRight: -2}}>
		<div className="f6 biryani ttu">{statName}</div>
		<div className="f5 b biryani-black ttu tracked">
			{statNumber} {statWord}
		</div>
	</div>
);

const playCount = mixes => mixes.reduce((accum, current) => accum + current.play_count, 0);
const timeCount = mixes => mixes.reduce((accum, current) => accum + current.audio_length, 0);

const About = ({mixes}) => (
	<div className="ph3 ph4-l">
		<div className="measure center 1h-copy f4 ph3">
			<p className="mt0">
				Marmalade.fm features the latest and greatest in grooves, beats and world music.
			</p>
			<p>
				Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro beat or break beat…
				we have you covered!
			</p>
		</div>
		<div className="flex pt3">
			<Stat statName="featuring..." statNumber={mixes.length} statWord="mixes" />
			<Stat statName="played..." statNumber={playCount(mixes)} statWord="times" />
			<Stat statName="with..." statNumber={timeCount(mixes)} statWord="seconds" />
		</div>
	</div>
);

export default About;
