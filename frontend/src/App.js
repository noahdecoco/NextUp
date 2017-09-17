import React, { Component } from "react";
import { fetchEvents } from "./actions";
import { connect } from "react-redux";

import Preloader from "./components/preloader_component";
import Message from "./components/message_component";
import Map from "./components/map_component";
import EventsList from "./components/events_list_component";

import "./App.css";

class App extends Component {
	componentDidMount() {
		this.props.fetchEvents(this.onFetchHandler.bind(this));
	}

	render() {
		console.log("render app", this.props);
		return (
			<div className="App">
				<Map />
				{/* {!this.state.hasLoaded && <Preloader />} */}
				{/* {!this.state.hasEvents && this.state.hasLoaded && <Message />} */}
				<div className="app-title">
					<h1>Nextup in Amsterdam</h1>
					<p>This is the time.</p>
				</div>
				<EventsList />}
			</div>
		);
	}

	onFetchHandler() {
		console.log("fetch complete");
	}
}

function mapStateToProps({ events }) {
	return { events };
}

export default connect(mapStateToProps, { fetchEvents })(App);
