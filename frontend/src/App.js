import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Preloader from "./components/preloader_component";
import Message from "./components/message_component";
import Map from "./components/map_component";

import EventsIndex from "./components/events_index_component";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
			hasLoaded: false,
			hasEvents: false
		};

		this.fetchEvents();
	}

	render() {
		return (
			<div className="App">
				<Map events={this.state.events} />
				{!this.state.hasLoaded && <Preloader />}
				{!this.state.hasEvents && this.state.hasLoaded && <Message />}
				<h1 className="app-title">Nextup in Amsterdam</h1>
				{this.state.hasEvents && <EventsIndex events={this.state.events} />}
			</div>
		);
	}

	fetchEvents() {
		axios
			.get("http://noahdecoco.com/nextup/api/events")
			.then(response => {
				this.setState({
					events: response.data,
					hasLoaded: true,
					hasEvents: response.data.length > 0 ? true : false
				});
			})
			.catch(function(error) {
				console.error(error);
			});
	}
}

export default App;
