import React, {Component} from 'react';

class Show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mix: {}
		};
	}

	// componentWillReceiveProps runs every time our component gets some new props, rather than
	// just once like componentDidMount, meaning we can get and update the
	// props every time some new ones come in
	UNSAFE_componentWillReceiveProps(nextProps) {
		const {match} = this.props;
		const {mixes} = nextProps;

		// here we grab the mix that has a slug that matches our params frm the url
		const [firstMix] = mixes.filter(mix => mix.slug === match.params.slug);
		if (firstMix) {
			this.setState({
				mix: firstMix
			});
		}
	}

	render() {
		const {match} = this.props;
		const {mix = {}} = this.state;
		return (
			<div className="ph3 ph4-l pad-bottom">
				<div className="measure center lh-copy">
					<p>{mix.description}</p>
				</div>
			</div>
		);
	}
}

export default Show;
