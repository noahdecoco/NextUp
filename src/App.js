import React, { Component } from 'react';
import './App.css';

import EventsList from './data/events_list.json';

import Map from './components/map_component';
import EventsIndex from './components/events_index_component';

class App extends Component {

  render() {
    return (
        <div className="App">
            <Map events={ EventsList }/>
            <EventsIndex events={ EventsList }/>
        </div>
    );
  }

}

export default App;
