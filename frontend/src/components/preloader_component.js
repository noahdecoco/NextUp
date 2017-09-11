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
			<div className="spinner">
				<div className="double-bounce1" />
				<div className="double-bounce2" />
			</div>
		);
	}
}

export default EventsIndex;
