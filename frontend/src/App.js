import React, { Component } from "react";
import { fetchEvents } from "./actions";
import { connect } from "react-redux";

import Preloader from "./components/preloader_component";
import Message from "./components/message_component";
import Map from "./components/map_component";
import EventsList from "./components/events_list_component";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasLoaded: false
		};
	}

	componentDidMount() {
		this.props.fetchEvents(this.onFetchHandler.bind(this));
	}

	render() {
		return (
			<div className="App">
				<Map />
				{!this.state.hasLoaded && <Preloader />}
				{this.state.hasLoaded && this.props.events.length === 0 && <Message />}
				<div className="info-panel">
					<h1 className="info-panel__title">Nextup in Amsterdam</h1>
					<p className="info-panel__body">Events happening around Amsterdam today.</p>
				</div>
				<EventsList />
			</div>
		);
	}

	onFetchHandler() {
		this.setState({
			hasLoaded: true
		});
	}
}

function mapStateToProps({ events }) {
	return { events };
}

export default connect(mapStateToProps, { fetchEvents })(App);
