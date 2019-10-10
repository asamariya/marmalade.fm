/* eslint-disable jsx-a11y/iframe-has-title */
/* global Mixcloud */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FeaturedMix from './FeaturedMix';
import Header from './Header';

const Home = () => <h1>Home</h1>;
const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
	constructor(props) {
		super(props);
		this.player = React.createRef();
	}
	mountAudio = async () => {
		// when we use the this keyword, our widget is now accessible
		// anywhere inside the component. This refers to the App component
		this.widget = Mixcloud.PlayerWidget(this.player.current);
		await this.widget.ready;
	};

	componentDidMount() {
		this.mountAudio();
	}

	togglePlay = () => {
		this.widget.togglePlay();
	};
	render() {
		return (
			<Router>
				<div>
					<div className="flex-l justify-end">
						<FeaturedMix />
						<div className="w-50-l relative z-1">
							<Header />
							{/* Routed page */}
							<div>
								<button onClick={this.togglePlay}>Play/Pause</button>
							</div>
							<Route exact path="/" component={Home} />
							<Route path="/archive" component={Archive} />
							<Route exact path="/about" component={About} />
						</div>
					</div>

					{/* AudioPlayer */}
					<iframe
						width="100%"
						height="60"
						src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-29th-october-2018%2F"
						frameBorder="0"
						className="db fixed bottom-0 z-5"
						ref={this.player}
					></iframe>
				</div>
			</Router>
		);
	}
}

export default App;
