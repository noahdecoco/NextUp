import React, { Component } from "react";

class EventsIndex extends Component {
	render() {
		return (
			<button
				onClick={this.props.clickHandler}
				className="events-index__button-toggle-show button-toggle-show"
			>
				<div>
					<span className="button-toggle-show__line" />
					<span className="button-toggle-show__line" />
					<span className="button-toggle-show__line" />
				</div>
			</button>
		);
	}
}

export default EventsIndex;
