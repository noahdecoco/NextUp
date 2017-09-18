import _ from "lodash";
import React, { Component } from "react";
import MapOptions from "../data/map_options.json";
import { connect } from "react-redux";

const google = window.google;
const MarkerWithLabel = require("markerwithlabel")(google.maps);

class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.addMarkers = this.addMarkers.bind(this);
	}

	render() {
		return <div className="event-map" ref="map" />;
	}

	componentDidMount() {
		this.map = new google.maps.Map(this.refs.map, MapOptions);

		google.maps.event.addDomListener(window, "resize", () => {
			var center = this.map.getCenter();
			google.maps.event.trigger(this.map, "resize");
			this.map.setCenter(center);
		});
	}

	componentDidUpdate() {
		this.addMarkers();
	}

	componentWillReceiveProps(nextProps) {
		if (JSON.stringify(this.props.events) === JSON.stringify(nextProps.events)) return;

		this.setState({
			events: nextProps.events
		});
	}

	addMarkers() {
		var coords;
		var locations = [];

		_.each(this.state.events, event => {
			if (locations.indexOf(event.location) === -1) {
				locations.push(event.location);

				coords = new google.maps.LatLng(event.coords.lat, event.coords.lng);

				var markerLabel = `<div>
					<span class="event-marker__location">${event.location}</span>
					<span class="event-marker__time">${event.time}</span>
					<span class="event-marker__icon"></span>
				</div>`;

				var marker = new MarkerWithLabel({
					position: coords,
					map: this.map,
					labelContent: markerLabel,
					labelClass: "map-label event-marker",
					icon: "../assets/event-marker.svg"
				});

				marker.addListener("click", () => {
					this.onMarkerClick(event);
				});
			}
		});
	}

	onMarkerClick(event) {
		console.log("todo: show modal", event);
		window.open(event.readmoreLink);
	}
}

function mapStateToProps({ events }) {
	return {
		events
	};
}

export default connect(mapStateToProps, null)(Map);
