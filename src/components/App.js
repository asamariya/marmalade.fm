/* eslint-disable jsx-a11y/iframe-has-title */
/* global Mixcloud */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';
import mixesData from '../data/mixes';
import Archive from './Archive';
import About from './About';
import Show from './Show';
import actions from '../store/actions';

// const MixCloudApiUrl = 'https://api.mixcloud.com';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: false,
			currentMix: '',
			mix: null
		};
		this.player = React.createRef();
	}

	fetchMixes = async () => {
		const {addMix} = this.props;

		mixesData.map(async id => {
			try {
				// always remember await when using fetch in an async function
				const response = await fetch(`https://api.mixcloud.com${id}`);
				const data = await response.json();
				addMix(data);
			} catch (error) {
				console.log(error);
			}
		});
	};
	mountAudio = async () => {
		// when we use the this keyword, our widget is now accessible
		// anywhere inside the component. This refers to the App component
		this.widget = Mixcloud.PlayerWidget(this.player.current);
		await this.widget.ready;
		this.widget.events.pause.on(() =>
			this.setState({
				playing: false
			})
		);
		this.widget.events.play.on(() =>
			this.setState({
				playing: true
			})
		);
	};

	componentDidMount() {
		this.mountAudio();
		this.fetchMixes();
	}

	actions = {
		togglePlay: () => {
			this.widget.togglePlay();
		},

		playMix: mixName => {
			// If the mixName is the same as the currently playing mix,
			// we want to pause it instead
			const {currentMix} = this.state;
			if (mixName === currentMix) {
				// When our code sees a return statement, it will
				// stop running here and exit
				return this.widget.togglePlay();
			}
			this.setState({
				currentMix: mixName
			});
			// load a new mix by its name and start playing immediately, but it doesn't always
			// work, with chrome's new security updates
			this.widget.load(mixName, true);
			this.mountAudio();
		}
	};

	render() {
		// This makes a variable from our first mix in the array
		// It's the same as saying const firstMix = this.state.mixes[0]
		// If the array is empty, we assign it a default value of {} which is an empty object
		const [firstMix = {}] = this.props.mixes;
		return (
			<Router>
				<div>
					<div className="flex-l justify-end">
						<FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key} />
						<div className="w-50-l relative z-1">
							<Header />
							{/* Routed page */}
							{/* // Here we pass our state and actions on into the 
							home component so that we can use them */}
							{/* e.g. of using 'render' as opposed to 'component'  */}
							{/* <Route exact path="/" render={() => <Home {...this.state} {...this.actions} />} /> */}

							<Route exact path="/" component={Home} />
							<Route path="/archive" component={Archive} />
							<Route path="/about" component={About} />
							<Route path="/show/:slug" component={Show} />
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

export default connect(
	state => state,
	actions
)(App);
