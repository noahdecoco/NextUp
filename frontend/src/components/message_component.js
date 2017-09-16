import React, { Component } from "react";

class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="message-modal">
				<div>
					<p className="message-modal__title">We couldn't find any events for today</p>
                	<p className="message-modal__message">Please comeback tomorrow</p>
				</div>
			</div>
		);
	}
}

export default Message;
