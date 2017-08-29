import React, { Component } from 'react';

class EventsIndex extends Component {
  render() {
    return (
      <div className="events-index">
          These are the events happening around you today
          <ul>
              <li>Event 1</li>
              <li>Event 2</li>
              <li>Event 3</li>
              <li>Event 4</li>
          </ul>
      </div>
    );
  }
}

export default EventsIndex;
