import _ from 'lodash';
import React, { Component } from 'react';
import MapOptions from '../data/map_options.json';

const google = window.google;

class Map extends Component {

    constructor(props) {

        super(props);

        this.addMarkers = this.addMarkers.bind(this);

    }

    render() {
        return (
            <div className="map-container" ref="map"></div>
        );
    }

    componentDidMount() {

        this.map = new google.maps.Map(this.refs.map, MapOptions);

        google.maps.event.addDomListener(window, 'resize', function() {
            var center = this.map.getCenter();
            google.maps.event.trigger(this.map, "resize");
            this.map.setCenter(center);
        });

        this.addMarkers();

    }

    addMarkers() {

        var coords, marker;

        _.each(this.props.events, (event) => {

            coords = new google.maps.LatLng(event.coords.lat, event.coords.lon);
            marker = new google.maps.Marker({
                position: coords,
                map: this.map
            });

        }); 

    }

}

export default Map;
