/* eslint-disable jsx-a11y/iframe-has-title */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import FeaturedMix from './FeaturedMix';
import Player from './Player';
import Header from './Header';
import Home from './Home';
import mixesData from '../data/mixes';
import Archive from './Archive';
import About from './About';
import Show from './Show';
import actions from '../store/actions';

// const MixCloudApiUrl = 'https://api.mixcloud.com';

class App extends Component {
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

	componentDidMount() {
		this.fetchMixes();
	}

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
					<Player />
				</div>
			</Router>
		);
	}
}

export default connect(
	state => state,
	actions
)(App);
