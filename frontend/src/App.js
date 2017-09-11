import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Preloader from "./components/preloader_component";
import Message from "./components/message_component";
import Map from "./components/map_component";

// import EventsIndex from "./components/events_index_component";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
            showPreloader: true,
            showMessage: false
		};

		this.fetchEvents();
	}

	render() {
		return (
			<div className="App">
				<Map events={this.state.events} />
				{this.state.showPreloader && <Preloader />}
				{this.state.showMessage && <Message />}
                <h1 className="app-title">Nextup in Amsterdam</h1>
				{/* <EventsIndex events={ this.state.events }/> */}
			</div>
		);
	}

	fetchEvents() {
		axios
			.get("http://noahdecoco.com/nextup/api/events")
			.then(response => {
				this.setState({
					events: response.data,
					showPreloader: false,
                    showMessage: response.data.length > 0 ? false : true
				});
			})
			.catch(function(error) {
				console.error(error);
			});
	}
}

export default App;
