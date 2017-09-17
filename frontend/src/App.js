import React, { Component } from "react";
import { fetchEvents } from "./actions";
import { connect } from "react-redux";

import Preloader from "./components/preloader_component";
import Message from "./components/message_component";
import Map from "./components/map_component";
import EventsList from "./components/events_list_component";
import InfoPanel from "./components/info_panel_component";
import Modal from "./components/modal_component";

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
				<Modal>
					<div className="modal__backdrop">
						<div className="modal__content">
							<h1>I is modal</h1>
							<h1>I is modal</h1>
							<h1>I is modal</h1>
						</div>
					</div>
				</Modal>
				{this.state.hasLoaded && this.props.events.length === 0 && <Message />}
				<InfoPanel />
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

function mapStateToProps(state) {
	return {
		events: state.events,
		selectedEvent: state.selectedEvent
	};
}

export default connect(mapStateToProps, { fetchEvents })(App);
