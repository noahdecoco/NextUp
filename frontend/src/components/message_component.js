import React, { Component } from "react";

class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="message-box">
				<p className="message-box__title">No events today</p>
                <p className="message-box__message">Please check tomorrow</p>
			</div>
		);
	}
}

export default Message;
