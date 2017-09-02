import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Map from './components/map_component';
import EventsIndex from './components/events_index_component';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      events: []
    };

    this.fetchEvents();

  }

  render() {
    return (
      <div className="App">
        <Map events={ this.state.events }/>
        {/* <EventsIndex events={ this.state.events }/> */}
      </div>
    );
  }

  fetchEvents() {

    axios.get('http://noahdecoco.com/nextup/api/events')
    .then((response) => {
      this.setState({
        events: response.data
      });
    })
    .catch(function (error) {
      console.error(error);
    });

  }

}

export default App;
