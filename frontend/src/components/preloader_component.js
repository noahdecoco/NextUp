import React, { Component } from "react";

class EventsIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date().toLocaleTimeString()
		};
	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div className="preloader">
				<div className="preloader__circle-1" />
				<div className="preloader__circle-2" />
			</div>
		);
	}
}

export default EventsIndex;
