import React, { Component } from 'react';
import MapOptions from '../data/map_options.json';

const google = window.google;

class Map extends Component {

    componentDidMount() {

        let map = new google.maps.Map(this.refs.map, MapOptions);

        google.maps.event.addDomListener(window, 'resize', function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

    }

    render() {
        return (
            <div className="map-container" ref="map"></div>
        );
    }
}

export default Map;
