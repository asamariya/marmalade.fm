/* global Mixcloud */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

class Player extends Component {
	constructor(props) {
		super(props);
		this.player = React.createRef();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		// when our widget ir not ready, we return and ignore all the actions below
		if (!nextProps.widgetReady) {
			return;
		}
		if (nextProps.currentMix !== this.props.currentMix) {
			this.widget.load(nextProps.currentMix, true);
			// if the event hasn't come from mixcloud, we want to
			// toggle the play pause on our audio
		} else if (!nextProps.fromMixcloud) {
			this.widget.togglePlay();
		}
	}
	mountAudio = async () => {
		const {playMix, setWidgetReady} = this.props;
		// when we use the this keyword, our widget is now accessible
		// anywhere inside the component. This refers to the App component
		this.widget = Mixcloud.PlayerWidget(this.player.current);
		await this.widget.ready;
		// here we set our widget state to be ready in redux so
		// we can block anything from happening before it's ready
		setWidgetReady();

		this.widget.events.pause.on(() =>
			playMix({
				playing: false,
				fromMixcloud: true
			})
		);
		this.widget.events.play.on(() =>
			playMix({
				playing: true,
				fromMixcloud: true
			})
		);
	};

	componentDidMount() {
		this.mountAudio();
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
			// this.mountAudio();
		}
	};

	render() {
		return (
			<iframe
				title="widget"
				width="100%"
				height="60"
				src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-29th-october-2018%2F"
				frameBorder="0"
				className="db fixed bottom-0 z-5"
				ref={this.player}
			></iframe>
		);
	}
}

export default connect(
	state => state,
	actions
)(Player);
