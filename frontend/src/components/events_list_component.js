import React, { Component } from "react";
import ButtonList from "./button_list_component";
import { connect } from "react-redux";

class EventsList extends Component {
	render() {
		return (
			<div className="events-index" ref="eventsIndex">
				<ButtonList clickHandler={this.onToggleShowClick.bind(this)} />
				<ul className="events-index__list">{this.renderEvents()}</ul>
			</div>
		);
	}

	renderEvents() {
		if (!this.props.events.length) return;

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
		this.refs.eventsIndex.classList.toggle("events-index--is-open");
	}
}

function mapStateToProps({ events }) {
	return {
		events
	};
}

export default connect(mapStateToProps, null)(EventsList);
