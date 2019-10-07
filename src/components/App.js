/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component} from 'react';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<FeaturedMix />
				</div>
				<div>
					<Header />
					{/* Routed page */}
				</div>
				{/* AudioPlayer */}
				<iframe
					width="100%"
					height="60"
					src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-29th-october-2018%2F"
					frameBorder="0"
				></iframe>
			</div>
		);
	}
}

export default App;
