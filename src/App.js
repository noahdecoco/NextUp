import React, { Component } from 'react';
import './App.css';

import Map from './components/map_component';
import EventsIndex from './components/events_index_component';

class App extends Component {

  render() {
    return (
        <div className="App">
            <Map />
            <EventsIndex />
        </div>
    );
  }

}

export default App;
