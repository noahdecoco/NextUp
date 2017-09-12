import _ from "lodash";
import React, { Component } from "react";
import MapOptions from "../data/map_options.json";

const google = window.google;
var MarkerWithLabel = require("markerwithlabel")(google.maps);

class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.addMarkers = this.addMarkers.bind(this);
	}

	render() {
		return <div className="map-container" ref="map" />;
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
		if (
			JSON.stringify(this.props.events) ===
			JSON.stringify(nextProps.events)
		)
			return;

		this.setState({
			events: nextProps.events
		});
	}

	addMarkers() {
		var coords;
		var locations = [];

		_.each(this.state.events, event => {
			if (locations.indexOf(event.location) == -1) {
				locations.push(event.location);

				coords = new google.maps.LatLng(
					event.coords.lat,
					event.coords.lng
				);

				var marker = new google.maps.Marker({
					position: coords,
					map: this.map,
					label: { text: event.title, color: "#888" },
					icon: "null"
				});

				var contentString = `<div>
                    <h1>${event.title}</h1>
                    <p>${event.location} @ ${event.time}</p>
                    <p>${event.intro}</p>
                    <a href="${event.readmoreLink}" target="_blank">More information</a>
                </div>`;

				var infowindow = new google.maps.InfoWindow({
					content: contentString,
                    maxWidth: 200
				});

				marker.addListener("click", () => {
					infowindow.open(this.map, marker);
				});

				marker.addListener("mouseout", () => {
					// infowindow.close(this.map, marker);
				});

				// new MarkerWithLabel({
				// 	position: coords,
				// 	map: this.map,
				// 	labelContent: `${event.title}<br>- - -<br>${event.location} @ ${event.time}`,
				// 	labelClass: "map-label",
				// 	icon: "../assets/event-marker.svg"
				// });
			}
		});
	}
}

export default Map;
