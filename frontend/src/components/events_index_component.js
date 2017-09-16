import React, { Component } from "react";

class EventsIndex extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="events-index" ref="eventsIndex">
				<button
					className="events-index__button-toggle-show button-toggle-show"
					onClick={this.onToggleShowClick.bind(this)}
				>
					<div>
						<span className="button-toggle-show__line"></span>
						<span className="button-toggle-show__line"></span>
						<span className="button-toggle-show__line"></span>
					</div>
				</button>
				<ul className="events-index__list">{this.renderEvents()}</ul>
			</div>
		);
	}

	renderEvents() {
		return this.props.events.map((event, index) => {
			return (
				<li className="events-index__list-item" key={index}>
					<a
						className="event-item"
						href={event.readmoreLink}
						target="_blank"
					>
						<h2 className="event-item__title">{event.title}</h2>
						<span className="event-item__details">
							{event.time} @ {event.location}
						</span>
					</a>
				</li>
			);
		});
	}

	onToggleShowClick() {
		console.log("fds", this.refs.eventsIndex);
		this.refs.eventsIndex.classList.toggle("events-index--is-open");
	}
}

export default EventsIndex;
